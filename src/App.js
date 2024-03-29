import DateTimeRangePickerConfigurator from './components/DatePickerConfigurator/DatePickerConfigurator';
import DateTimeRangePicker from './components/DatePicker/DatePicker';
import { PickerContextProvider } from './contexts/DatePickerContext';

function App() {
  return (
    <div className="App">
      <PickerContextProvider>
        <DateTimeRangePickerConfigurator />
        <DateTimeRangePicker />
      </PickerContextProvider>
    </div>
  );
}

export default App;
