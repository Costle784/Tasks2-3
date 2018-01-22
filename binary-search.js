function binarySearch(array, value) {
  var min  = 0,
      max  = numbers.length - 1,
      midPoint = Math.floor((min + max)/2);

    while(numbers[midPoint] != value && min < max) {
          if (value < numbers[midPoint]){
            max = midPoint - 1;
          } else if (value > numbers[midPoint]){
            min = midPoint + 1;
          }
        midPoint = Math.floor((max + min)/2);
    }
    return (numbers[midPoint] === value) ? midPoint : -1;
}

var numbers = [1,2,3,4,5,6,7,8,9,10];

console.log(binarySearch(numbers,1));
console.log(binarySearch(numbers,27));
