import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { incrementCreator, decrementCreator, asyncIncrementCreator, asyncDecrementCreator } from './store/countReducer'
import {fetchUsers} from './store/userReducer'


const AppSaga = () => {
    const count = useSelector(state => state.countReducer.count)
    const users = useSelector(state => state.userReducer.users)
    const dispatch = useDispatch();

    return (
        <div>
            {count}
            <button onClick={() => dispatch(asyncIncrementCreator())}>ИНК</button>
            <button onClick={() => dispatch(asyncDecrementCreator())}>ДИК</button>
            <button onClick={() => dispatch(fetchUsers())}>Получить юзеров</button>
            <div>
                  <div>
                        {users.map(user => 
                            <div>{user.name}</div>
                        )}
                  </div>
          </div>
        </div>
    )
}

export default AppSaga;