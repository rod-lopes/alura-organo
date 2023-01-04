import './ListaSuspensa.css'
const ListaSuspensa = (props) => {
  console.log(props.itens)
  
  return (
    <div className="lista-suspensa">
      <label required={props.required}>{props.label}</label>
      <select>
        {props.itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>

  )

}

export default ListaSuspensa