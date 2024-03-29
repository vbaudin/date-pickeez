import { useDatePickerContext } from "../../contexts/DatePickerContext"
import DateField from "../DateField/DateField"
import Calendar from "../Calendar/Calendar"
import { useState } from "react"

const displayRangeTypes = (rangeTypes) => {
    return (
        rangeTypes.map((e) => (<button className='button' key={`choice-button-${e}`}>{e}</button>))
    )
}

const DatePicker = () => {
    const { rangeChoice, rangeTypes, startDate, endDate, selectedEndDate, selectedStartDate, isCalendarOpen } = useDatePickerContext()

    return (
        <div>
            <div>Résultat final</div>
            {rangeChoice && displayRangeTypes(rangeTypes)}
            <div>
            {startDate && <DateField name='start'/>}
            {endDate && <DateField name='end'/>}
            </div>
            {isCalendarOpen && <Calendar />}
            <div>
                {selectedStartDate && `Le jour de Départ selectionné est le : ${selectedStartDate}`}
            </div>
            <div>
                {selectedEndDate && `Le jour de Fin selectionné est le : ${selectedEndDate}`}
            </div>
        </div>
    )
}

export default DatePicker