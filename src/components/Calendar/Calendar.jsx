import { useDatePickerContext } from "../../contexts/DatePickerContext"
import "./Calendar.css"

const Calendar = () => {
    const {currentDate, setCurrentDate, monthNames, daysOfWeek, selectedStartDate, setSelectedStartDate, selectedEndDate, setSelectedEndDate, getDateSetter} = useDatePickerContext()
    const currentMonth = currentDate.getMonth()
    const currentMonthName = monthNames[currentMonth]
    const currentYear = currentDate.getFullYear()

    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const startingDayOfWeek = firstDayOfMonth.getDay();
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    const daysFromLastMonthToShow = startingDayOfWeek ? startingDayOfWeek : 0;
    const totalCells = 42; // 6 semaines * 7 jours
    const daysFromNextMonthToShow = totalCells - (daysFromLastMonthToShow + daysInMonth);

    const calendarDays = [];
    
    const isDateInRange = (date) => {
        const time = date.getTime();
        return time >= selectedStartDate.getTime() && time <= selectedEndDate.getTime();
    };

   // Ajouter les jours du mois précédent
   const daysInLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
   for (let i = daysFromLastMonthToShow; i > 0; i--) {
       calendarDays.push(<div key={`lastMonth-${daysInLastMonth - i + 1}`} className="calendar-day other-month">{daysInLastMonth - i + 1}</div>);
   }

   // Ajouter les jours du mois actuel
   for (let day = 1; day <= daysInMonth; day++) {
       calendarDays.push(
        <div 
            key={`currentMonth-${day}`} 
            className={`
                calendar-day 
                ${selectedStartDate && selectedStartDate.getDate() === day && selectedStartDate.getMonth() === currentDate.getMonth() && selectedStartDate.getFullYear() === currentDate.getFullYear() ? 'selected-day' : ''}
                ${selectedEndDate && selectedEndDate.getDate() === day && selectedEndDate.getMonth() === currentDate.getMonth() && selectedEndDate.getFullYear() === currentDate.getFullYear() ? 'selected-day' : ''}
                ${selectedStartDate && selectedEndDate && isDateInRange(new Date(currentYear, currentMonth, day)) && 'selected-day'}
                `} 
            onClick={() => selectDay(day)}
        >
            {day}
        </div>);
   }

   // Compléter avec les jours du mois suivant
   for (let i = 1; i <= daysFromNextMonthToShow; i++) {
       calendarDays.push(<div key={`nextMonth-${i}`} className="calendar-day other-month">{i}</div>);
   }

    const goToTheNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
    }

    const goToThePreviousMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
    }

    const selectDay = (day) => {
        const newSelectedDate = new Date(currentYear, currentMonth, day);
        dateSetter(newSelectedDate);
    }

    const dateSetter = getDateSetter()

    return (
        <div className="picker-container">
            <button onClick={goToThePreviousMonth}>{`<`}</button>
            <div className='calendar-container'>
                <div>{`${currentMonthName} ${currentYear}`}</div>
                    <div className='days-of-week'>
                        {daysOfWeek.map((day, index) => (
                            <div key={day+index} className="day-of-week">{day}</div>
                        ))}
                    </div>
                <div className="calendar-grid">
                    {calendarDays}
                </div>
            </div>
            <button onClick={goToTheNextMonth}>{`>`}</button>
        </div>
    )
}

export default Calendar