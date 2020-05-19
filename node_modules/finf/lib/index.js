import fs from 'fs';
import fp from './file_pattern';

export default function finf(path, pattern) {
   
  try {
    let err = fs.accessSync(path, fs.R_OK);
    if(err != undefined) { 
      return [err, null];
    }
  }catch(e) {
    return [e, null];
  }
    
  let list = fs.readdirSync(path);
  let files = [];
   
  if(pattern != undefined) {
    pattern = fp(pattern);
    for(let i=0;i<list.length;i++) {
      let file = list[i];
      if(pattern.test(file)) files.push(file); 
    }
  }else {
    files = list
  }
  return [null, files];
}
