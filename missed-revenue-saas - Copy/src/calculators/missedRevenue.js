export function calculateMissedRevenue(callsPerDay, missedPercent, avgPrice) {
  const missedRate = missedPercent / 100;

  const missedCallsPerDay = callsPerDay * missedRate;
  const monthlyMissedCustomers = missedCallsPerDay * 30;
  const monthlyRevenue = monthlyMissedCustomers * avgPrice;
  const yearlyRevenue = monthlyRevenue * 12;

  return {
    missedCallsPerDay,
    monthlyMissedCustomers,
    monthlyRevenue,
    yearlyRevenue,
  };
}