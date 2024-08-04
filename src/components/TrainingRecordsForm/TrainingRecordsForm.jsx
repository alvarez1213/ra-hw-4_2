import './training-records-form.css'

export const TrainingRecordsForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    const dateToShow = e.target[0].value
    const dateToSort = e.target[0].value.split('.').reverse().join('-')
    const distance = parseFloat(e.target[1].value)
    e.target[0].value = ''
    e.target[1].value = ''

    props.handleFormData({ dateToShow: dateToShow, dateToSort: dateToSort, distance: distance })
  }

  return (
    <form className='form' autoComplete='false' onSubmit={handleSubmit}>
      <div className="form-group1">
        <label htmlFor="date">Дата</label>
        <input type="date" id='date' name='date' required />
      </div>

      <div className="form-group2">
        <label htmlFor="distance">Пройдено км</label>
        <input type="number" id='distance' name='distance' min={0.1} step={0.1} required />
      </div>
      <button className="btn" type="submit">ОК</button>
    </form>
  )
}
