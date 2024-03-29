import { createContext, useContext, useEffect, useState } from "react"

const DatePickerContext = createContext()

export const PickerContextProvider = ({ children }) => {
    const [rangeChoice, setRangeChoice] = useState(false)
    const [rangeTypes, setRangeTypes] = useState(['Year', 'Month', 'Week', 'Day', 'Custom'])
    const [startDate, setStartDate] = useState(false)
    const [endDate, setEndDate] = useState(false)
    const [currentDate, setCurrentDate] = useState(new Date())
    const [selectedStartDate, setSelectedStartDate] = useState(null)
    const [selectedEndDate, setSelectedEndDate] = useState(null)
    const [isCalendarOpen, setIsCalendarOpen] = useState(false)
    const [fieldFocused, setFieldFocused] = useState(null)
    
    const daysOfWeek = ["D", "L", "M", "M", "J", "V", "S"];
    const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
    
    const handleChangeStartDate = (newDate) => {
        if (newDate >= selectedEndDate) {
            setSelectedEndDate(null)
        }
        setSelectedStartDate(newDate)
    }

    const handleChangeEndDate = (newDate) => {
        if (newDate <= selectedStartDate) {
            setSelectedEndDate(null)
            setSelectedStartDate(newDate)
            setFieldFocused('start')
        } else {
            setSelectedEndDate(newDate)
        }
    }

    const getDateSetter = () => {
        if (fieldFocused === 'start') {
            return handleChangeStartDate
        } else if (fieldFocused === 'end') {
            return handleChangeEndDate
        } else {
            return null
        }
    }

    const formatDate = (date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Ajouter 1 car les mois sont de 0 à 11
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${day}/${month}/${year} ${hours}:${minutes}`;
    }

    return (
        <DatePickerContext.Provider
            value={{
                rangeChoice, setRangeChoice, 
                rangeTypes, 
                startDate, setStartDate, 
                endDate, setEndDate, 
                currentDate, setCurrentDate, 
                monthNames,
                daysOfWeek,
                selectedEndDate, setSelectedEndDate,
                selectedStartDate, setSelectedStartDate,
                isCalendarOpen, setIsCalendarOpen,
                fieldFocused, setFieldFocused,
                getDateSetter,
                formatDate
            }}
        >
            {children}
        </DatePickerContext.Provider>
    )
} 

export const useDatePickerContext = () => useContext(DatePickerContext)