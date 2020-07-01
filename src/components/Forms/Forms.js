import React from 'react';
import { SingleForm } from './Form/Form';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles.module.scss';
import { Button } from 'semantic-ui-react';
import { trackPromise, usePromiseTracker } from 'react-promise-tracker';
export const Forms = () => {
  const [numberOfPassengers, onNumberChange] = React.useState(0);
  const dispatch = useDispatch();
  const ids = useSelector((state) => state.passengerQuantity);
  const data = useSelector((state) => state.passengerInfo);
  const isErrors = useSelector((state) => state.validationErrors);
  const { promiseInProgress } = usePromiseTracker();

  const generateForms = () => {
    let forms = [];
    for (const i of ids) {
      forms.push(<SingleForm uniqueId={i} key={i} />);
    }
    return forms;
  };
  const handleAddPassenger = () => {
    dispatch({ type: 'PUSH_PASSENGER', id: numberOfPassengers });
    onNumberChange(numberOfPassengers + 1);
  };

  const handleConfirm = () => {
    if (isErrors || Object.entries(data).length === 0) {
      alert('Заполните все обязательные поля');
    } else {
      trackPromise(
        postData(
          'https://webhook.site/f29bd6e9-d2d1-4450-baea-d170580ab4d4',
          data
        )
      );
    }
  };

  return (
    <div>
      <div className={styles.buttons}>
        <Button
          onClick={() => {
            handleAddPassenger();
          }}
        >
          Добавить пассажира
        </Button>
        {promiseInProgress ? (
          <Button loading onClick={() => handleConfirm()}>
            Подтвердить бронирование
          </Button>
        ) : (
          <Button onClick={() => handleConfirm()}>
            Подтвердить бронирование
          </Button>
        )}
      </div>
      <div>{generateForms()}</div>
    </div>
  );
};

async function postData(url = '', data = {}) {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
