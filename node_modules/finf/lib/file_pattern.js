export default function file_pattern(pattern) {
  let file_pattern = pattern;
  file_pattern = file_pattern.replace(/\./ig, "\\\.");
  file_pattern = file_pattern.replace(/\*/ig, ".");
  return new RegExp(file_pattern+"$");
}
