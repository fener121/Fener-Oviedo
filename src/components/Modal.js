import React,{useState} from 'react'
import "bootstrap/dist/css/bootstrap.css"


function Modal() {  
      const [isModal, setIsModal] = useState(false);
  return (
    
      <div className="App">
        
        <div className={`modal ${isModal}`}>
          <div className="modal-background" />
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Modificar el Producto</p>
              <button
                onClick={setIsModal}
                className="delete"
                aria-label="close"
              />
            </header>
            <section className="modal-card-body">
              <div className="field">
                <label className="label">Zona de experiencia</label>
                <div className="control">
                </div>
              </div>
              <div class="field">
                <div class="control">
                </div>
              </div>
            </section>
            <footer className="modal-card-foot">
              <button onClick={setIsModal} className="button">
                Cancel
              </button>
            </footer>
          </div>
        </div>

        <button onClick={() => setIsModal("is-active")} className="button is-small is-info">
          Modificar
        </button>
        </div>


    

    



  
    
     );
}
export default Modal;