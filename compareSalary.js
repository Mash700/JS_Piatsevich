function getMaxSalary() {

    let firstSalary = prompt("Введите первую зарплату:");
    let secondSalary = prompt("Введите вторую зарплату:");
    let thirdSalary = prompt("Введите третью зарплату:");

    firstSalary = Number(firstSalary);
    secondSalary = Number(secondSalary);
    thirdSalary = Number(thirdSalary);

    if (secondSalary < firstSalary && thirdSalary < firstSalary) {
        return firstSalary;
    } else if (firstSalary < secondSalary && thirdSalary < secondSalary) {
        return secondSalary;
    } else {
        return thirdSalary;
    }
}