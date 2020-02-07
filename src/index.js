
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const result = [];
  let direction = true;
  if (matrix === undefined || matrix === []){
    return [];
  } else {
    for(let i=0;i<matrix.length;i++){
      if(direction){
        for(let j=0;j<matrix[i].length;j++){
          result.push(matrix[i][j]);
        }
        direction = false;
      } else if(!direction){
        matrix[i].reverse();
        for(let z=0;z<matrix[i].length;z++) {
          result.push(matrix[i][z]);
        }
        direction = true;
      }
    }
  }
  return result;
}
