import finf from 'finf'
import fs from 'fs'
import glue from 'glue-path'
import semafor from 'semafor'

export default function rename({dir, pattern, replace, verbose = false}) {
  let logger = semafor();
  if(dir == undefined) { 
    if(verbose) logger.fail("Undefined dir param");
    return [new Error("Undefined dir param")];
  }
  dir = glue([process.cwd(), dir]);
  
  if(pattern == undefined) {
    if(verbose) logger.fail("Undefined pattern param");
    return [new Error("Undefined pattern param")];
  }
  if(replace == undefined) {
    if(verbose) logger.warn("Undefined replace param, using '' as default");
    replace = "";
  }

  let [err, list] = finf(dir, pattern);
  if(err) { 
    if(verbose) logger.fail("Error finding files,"+err.toString());
    return [err];
  }

  let len = list.length
  let final_list = [];
  for(let i=0; i<len;i++) {
    let f = list[i];
   
    pattern = pattern.replace('*', '');
    let regex = new RegExp(pattern);
    let name = f.replace(regex, replace);
     
    let source_path = glue([dir, f]);
    let dest_path   = glue([dir, name]);

    let err1 = fs.renameSync(source_path, dest_path);
    final_list.push({
      source: source_path,
      dest: dest_path,
      err : err1
    });
    if(err1 && verbose) logger.fail("Error renaming file, "+source_path+" -> "+dest_path);
  }
  let result = {
    dir: dir,
    pattern: pattern,
    replace: replace,
    list: final_list
  }
  return [null, result];
}
