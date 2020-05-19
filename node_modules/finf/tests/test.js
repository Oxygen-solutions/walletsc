import finf from '../lib/';
import fp from '../lib/file_pattern';

describe("file_pattern method test", () => {

  it("should pass the file pattern reg exp", (done) => {
    let list = ["test.js", "test.1.js"];
    let file_pattern = fp("*.js");

    for(let i=0;i<list.length;i++) {
      let file = list[i];
      if(!file_pattern.test(file)) 
        throw new Error("File fails pattern "+file_pattern+", "+file);
    }
    done();
  });

  it("should fail the file pattern reg exp", (done) => {
    let list = ["test.js.", "test.1.js.gz"];
    let file_pattern = fp("*.js");

    for(let i=0;i<list.length;i++) {
      let file = list[i];
      if(file_pattern.test(file)) 
        throw new Error("File accept pattern but it shouldnt "+file_pattern+", "+file);
    }
    done();
  });

});

describe("finf method test", () => {
  
  // there are 3 files on the dummy folder
  // [file.1.js, file.js.1, file1.js]
  it("should return all the files", (done) => {
    let [err, list] = finf(process.cwd()+"/tests/dummy/");
    if(err) 
      throw new Error("Shouldnt return an error");
    if(list.length != 3)
      throw new Error("There are files missing in the list");
    done();
  });

  it("should return the filtered files", (done) => {
    let [err, list] = finf(process.cwd()+"/tests/dummy/", "*.js");
    if(err) 
      throw new Error("Shouldnt return an error");
    
    if(list.length != 2) 
      throw new Error("There are filtered files missing in the list");
    done();
  });

  it("should return an error", (done) => {
    let [err, list] = finf(process.cwd()+"/tests/crash-dummy");
    if(err == undefined)
      throw new Error("Should return an error, due to missing folder");
    done();
  });

});
