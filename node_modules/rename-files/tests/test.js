import rename from '../index.es6.js'
import fs from 'fs'
import glue from 'glue-path'

describe("Test rename-files function", () => {

  it("should return an error on empty dir param", (done) => {
    let [err, result] = rename({});
    if(err == null) throw new Error("Should have return an error on empty dir param");
    if(err.message != "Undefined dir param") throw new Error("Should have return an error on empty dir param");
    done();
  })

   it("should return an error on empty pattern param", (done) => {
    let [err, result] = rename({dir:"./"});
    if(err == null) throw new Error("Should have return an error on empty dir param");
    if(err.message != "Undefined pattern param") throw new Error("Undefined pattern param");
    done();
  })

  it("should rename file", (done) => {
    // create tmp file
    let tmp = glue([process.cwd(), 'tests', 'my_file_75.tmp']);
    fs.closeSync(fs.openSync(tmp,'w+'))
    let [err, result] = rename({dir:'./tests', pattern:'_75.tmp', replace:"_v.tmp"});
    if(err) throw err;
    if(result.list.length == 0) throw new Error("Result return an empty list of files");
    let final_file = result.list[0];
    if(final_file.err != undefined) throw new Error("An error occurr when renaming file, "+final_file.err.message);
    if(final_file.dest.indexOf('_v.tmp') == -1) throw new Error("Dest file have an incorrect name, "+final_file.dest);
    let err1 = fs.accessSync(final_file.dest, fs.W_OK);
    if(err1 != null) throw new Error("An error occurr while checking the destination file access, "+err.message);
    done();
  })
});
