
export default function GiftGridItem({ title, url }) {
  return (
    <div className="card">
        <img src={ url } alt={ title }/>
        <p>{ title }</p>

    </div>
  )
}
