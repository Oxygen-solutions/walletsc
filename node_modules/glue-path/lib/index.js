import isPlainObj from 'is-plain-obj'
import path from 'path'

export default function glue(arr) {
  if(!arr) return path.sep;
  if(typeof arr == "string") 
    return path.normalize(arr)
  if(typeof arr == "number") 
    return arr
  if(isPlainObj(arr)) 
    return arr
  let p = path.join.apply(null, arr);
  return path.normalize(p);
}
