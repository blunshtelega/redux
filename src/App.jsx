import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers } from './asyncActions/customers';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';

function App() {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)

    const addCash = (cash) => {
      dispatch({type: "ADD_CASH", payload: cash})
    }

    const getCash = (cash) => {
      dispatch({type: "GET_CASH", payload: cash})
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }

    return (
        <div className='app'>
          <div>
              {cash}
              <button onClick={() => addCash(Number(prompt()))}>Пополнить</button>
              <button onClick={() => getCash(Number(prompt()))}>Снять</button>
              <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
              <button onClick={() => dispatch(fetchCustomers())}>Получить клиентов из базы</button>
          </div>
          <div>
              {customers.length > 0
                  ? 
                  <div>
                        {customers.map(customer => 
                            <div key={Math.random()} onClick={() => removeCustomer(customer)}>{customer.name}</div>
                        )}
                  </div>
                  : 
                  <h1>Клиенты отсутсвуют</h1>
              }
          </div>

        </div>
    );
}

export default App;
