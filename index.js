
// I used javascript language



// This function calculates an adjusted target 
function calculateAdjustedTarget(startDate, endDate, totalAnnualTarget) {
    // 
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Initialize variables
    let adjustedTarget = 0;
    let daysExcludingFridays = 0;
    let daysWorkedExcludingFridays = 0;
    let currentDate = new Date(start);

    // Calculate the number of days excluding Fridays
    let year = start.getFullYear();
    let month = end.getMonth(); // Get month from the end date
    let totalDays = new Date(year, month + 1, 0).getDate(); // Total days in the month
    let fridays = 0;

    // Iterate through each day in the date range
    while (currentDate <= end) {
        if (currentDate.getDay() !== 5) { // Check if the current day is not Friday
            adjustedTarget += totalAnnualTarget / 365; // Distribute the total annual target evenly across all days
            daysWorkedExcludingFridays++; // Increment the count of days worked excluding Fridays
        }
        daysExcludingFridays++; // Increment the count of days excluding Fridays
        currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
    }

    // Calculate the number of Fridays in the month
    for (let i = 1; i <= totalDays; i++) {
        let currentDate = new Date(year, month, i);
        if (currentDate.getDay() === 5) { // Friday is 5th day of the week
            fridays++;
        }
    }

    // Calculate the number of days excluding Fridays in the month
    let daysexcludingf = totalDays - fridays;

    // Calculate the adjusted monthly target
    let monthlyTarket = (totalAnnualTarget / 324) * daysWorkedExcludingFridays;

    // Return an object with the calculated values
    return {
        daysExcludingFridays: [daysexcludingf],
        daysWorkedExcludingFridays: [daysWorkedExcludingFridays],
        monthlyTarget: [monthlyTarket],
        totalTarget: monthlyTarket, 
    };
}

// Output the result of the function 


// Running quokka and also running the browser
console.log(
    calculateAdjustedTarget('2024-01-01', '2024-01-06', 5220)
);
