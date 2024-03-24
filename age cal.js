document.getElementById('ageCalculatorForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get the input date of birth value
  let dobInput = document.getElementById('dob').value;

  // Calculate age
  let age = calculateAge(new Date(dobInput));

  // Display the result
  document.getElementById('result').innerText = `Your age is ${age} years.`;
});

function calculateAge(birthDate) {
  const today = new Date();
  const diff = today - birthDate;
  const ageDate = new Date(diff); // milliseconds from epoch

  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
