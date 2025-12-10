function flora(flora1, flora2, flora3) {
  let flora4 = flora1() + flora2();
  let flora5 = flora4 + flora3();
  console.log(flora5);
}
flora(
  () => 500,
  () => 400,
  () => 300
);
