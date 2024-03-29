import { useDatePickerContext } from "../../contexts/DatePickerContext"
import './DatePickerConfigurator.css';


const DateTimeRangePickerConfigurator = () => {
    const {setRangeChoice, rangeChoice, startDate, setStartDate, endDate, setEndDate} = useDatePickerContext()
    return (
        <div>
            <div>Réglages</div>
            <div>
                <button className={`button ${rangeChoice ? 'button-pressed' : ''}`} onClick={() => setRangeChoice(!rangeChoice)}>Range Choice</button>
            </div>
            <div>
                <button className={`button ${startDate ? 'button-pressed' : ''}`} onClick={() => setStartDate(!startDate)}>Start Date</button>
                <button className={`button ${endDate ? 'button-pressed' : ''}`} onClick={() => setEndDate(!endDate)}>End Date</button>
            </div>
        </div>
    )
}

export default DateTimeRangePickerConfigurator