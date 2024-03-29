import { useEffect, useRef, useState } from "react"
import { useDatePickerContext } from "../../contexts/DatePickerContext"
import './DateField.css'

const DateField = ({name}) => {
    const { setIsCalendarOpen, fieldFocused, setFieldFocused, selectedStartDate, selectedEndDate, formatDate } = useDatePickerContext()
    const dateFieldRef = useRef()
    const [selectedDate, setSelectedDate] = useState(null)

    useEffect(() => {
        name === 'start' ? setSelectedDate(selectedStartDate) : setSelectedDate(selectedEndDate)
    }, [selectedStartDate, selectedEndDate])

    const handleFocus = () => {
        setIsCalendarOpen(true)
        setFieldFocused(name)
    }

    const isDateFieldFocused = fieldFocused === name

    return (
        <div ref={dateFieldRef}>
            <input
                className={isDateFieldFocused ? 'input-focused' : ''}
                onFocus={handleFocus}
                type='text'
                value={selectedDate ? formatDate(selectedDate) : ''}
                placeholder={`DateField ${name}`}
                readOnly
            />
        </div>
    )
}

export default DateField