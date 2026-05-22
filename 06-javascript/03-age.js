const calculateAge = function (birthDateString) {
  const today = new Date('2026-05-18');
  const birthDate = new Date(birthDateString);

  if (Number.isNaN(birthDate.getTime())) {
    return 'Error: Invalid date format';
  }

  let age = today.getFullYear() - birthDate.getFullYear();
  const hasBirthdayPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  if (!hasBirthdayPassed) {
    age -= 1;
  }

  if (age < 0) {
    return 'Error: Birth date cannot be in the future';
  }

  if (age > 125) {
    return 'Are you sure you are more than 125 years old?';
  }

  return `You are ${age} years old`;
};

console.log(calculateAge('2000-07-01'));
console.log(calculateAge('1988-05-18'));
console.log(calculateAge('2190-01-01'));
console.log(calculateAge('1800-01-01'));
console.log(calculateAge('invalid-date'));