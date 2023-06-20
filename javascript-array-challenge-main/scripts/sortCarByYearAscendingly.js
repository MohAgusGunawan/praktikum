function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  result.sort((a, b) => a.year - b.year);
  console.log(result);

  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
