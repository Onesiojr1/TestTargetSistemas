
const billings = [1000, 2100, 890, 3010, 0, 500, 1200, 0, 0, 2300, 4000, 600, 0, 750, 1900, 2700, 0];

function billingStatistics(billing) {
  const validBilling = billing.filter(value => value > 0)

  const lowerRevenue = Math.min(...validBilling);

  const highestRevenue = Math.max(...validBilling);

  const averageRevenue = validBilling.reduce((acc, value) => acc + value, 0) / validBilling.length;

  const daysAboveAvarage =  validBilling.filter(value => value > averageRevenue).length;

  return {
    lowerRevenue,
    highestRevenue,
    averageRevenue,
    daysAboveAvarage
  }
}

const result = billingStatistics(billings);

console.log(`Menor faturamento: ${result.lowerRevenue}`);
console.log(`Maior faturamento: ${result.highestRevenue}`);
console.log(`Media faturamento: ${result.averageRevenue}`);
console.log(`Dias com faturamento acima da média: ${result.daysAboveAvarage}`);