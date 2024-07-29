import './training-records-table.css'

import { TrainingRecordsTableRow } from '../TrainingRecordsTableRow'

export const TrainingRecordsTable = (props) => {
  return (
    <table className='table'>
      <thead>
        <tr className='table__headers'>
          <th className='table__headers-date'>Дата</th>
          <th className='table__headers-distance'>Пройдено км</th>
          <th className='table__headers-tools'>Действия</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((el) => (
          <TrainingRecordsTableRow
            data={el}
            handleDelete={props.handleDelete}
          />
        ))}
      </tbody>
    </table>
  )
}
