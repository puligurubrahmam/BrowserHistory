import './index.css'
const HistoryItem = props => {
  const {details, deleteItem} = props
  const {id, title, logoUrl, domainUrl, timeAccessed} = details
  const deleteFunc = () => {
    deleteItem(id)
  }
  return (
    <li>
      <p className="timeAccessed">{timeAccessed}</p>
      <div className="td1">
        <img src={logoUrl} className="logoUrl" alt="domain logo" />
        <div className="td">
          <p className="title">{title}</p>
          <p className="domainUrl">{domainUrl}</p>
        </div>
      </div>
      <button className="btn" data-testid="delete" onClick={deleteFunc}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete" alt="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItem
