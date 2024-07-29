import './training-records-table-row.css'
import '../TrainingRecordsTable/training-records-table.css'

import { v4 as uuidv4 } from 'uuid';

export const TrainingRecordsTableRow = (props) => {
  return (
    <tr key={uuidv4()} className='table__row'>
      <td className='table__row-date'>{props.data.dateToShow}</td>
      <td className='table__row-distance'>{props.data.distance}</td>
      <td className='table__row-tools' onClick={props.handleDelete}>✘</td>
    </tr>
  )
}
