import './index.css'
/*
id: '3b22e3fd-3d12-4ad1-9e38-90314219c4f4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-perfect-img.png',
    name: 'Perfect',
    genre: 'Pop',
    duration: '4:04',
*/

const DisplayItem = props => {
  const {itemDetails, onDeleteItem} = props
  const {id, imageUrl, name, genre, duration} = itemDetails
  const onDelete = () => {
    onDeleteItem(id)
  }
  return (
    <li className="list-item">
      <div className="flexi2">
        <img className="image-url" src={imageUrl} alt="track" />
        <div>
          <p>{name}</p>
          <p className="genre-p">{genre}</p>
        </div>
      </div>
      <div className="flexi2">
        <p>{duration}</p>
        <button
          data-testid="delete"
          type="button"
          className="delete-button"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default DisplayItem
