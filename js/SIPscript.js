function calculateSIP() {
    const monthlyInvestment = parseFloat(document.getElementById('monthlyInvestment').value);
    const annualRate = parseFloat(document.getElementById('interestRate').value);
    const tenureYears = parseFloat(document.getElementById('tenure').value);
  
    if (isNaN(monthlyInvestment) || isNaN(annualRate) || isNaN(tenureYears) || monthlyInvestment <= 0 || annualRate <= 0 || tenureYears <= 0) {
      alert('Please enter valid positive numbers for all fields.');
      return;
    }
  
    const tenureMonths = tenureYears * 12;
    const monthlyRate = annualRate / 12 / 100;
  
    let totalValue = 0;
  
    for (let i = 0; i < tenureMonths; i++) {
      totalValue += monthlyInvestment * Math.pow(1 + monthlyRate, tenureMonths - i);
    }
  
    document.getElementById('result').innerText = `Total Value: ₹${totalValue.toFixed(2)}`;
  }
  