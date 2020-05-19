import gluePath from '../lib/'
import isPlainObj from 'is-plain-obj'
import path from 'path'

describe("glue-path instance tests", () => {

  let glue = path.sep;
  
  it("should return glue", (done) => {
    let path = gluePath()
    if(path != glue)
      throw new Error("Error setting undefined path, "+path)
    done()
  })

  it("should return number", (done) => {
    let path = gluePath(1)
    if(path != 1)
      throw new Error("Error setting path as number, "+path)
    done()
  })
  
   it("should return string", (done) => {
    let path = gluePath("hello, glue")
    if(path != "hello, glue")
      throw new Error("Error setting path as string, "+path)
    done()
  })
  
  it("should return plain object", (done) => {
    let path = gluePath({foo:'bar'})
    if(!isPlainObj(path))
      throw new Error("Error setting path as plain object, "+path)
    done()
  })

  it("should return path multiple glued", (done) => {
    let final_path = __dirname + glue + "path" + glue + "to" + glue + "something";
    let path = gluePath([__dirname, "path","to","something"])
    if(path != final_path)
      throw new Error("Error setting path glue, "+path)
    done()
  })
  
  it("should return path glued", (done) => {
    let path = gluePath([__dirname])
    if(path != __dirname)
      throw new Error("Error setting path glue, "+path)
    done()
  })

})
