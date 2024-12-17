let reviews: number[] = [9, 8, 7.5, 7, 6];

let total: number = 0;

for (let i = 0; i < reviews.length; i++) {
  console.log(reviews[i]);
  total += reviews[i];
}

let average = total / reviews.length;

console.log("Review average = " + average);
