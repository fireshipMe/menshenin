import React from 'react';
import { Formik, withFormik, useFormikContext } from 'formik';
import {
  Button,
  Checkbox,
  Dropdown,
  Form,
  Input,
  TextArea,
} from 'formik-semantic-ui';
import { DatePickerField } from './Datepicker/DatepickerField';
import styles from './styles.module.scss';
import { countryOptions } from './const';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

const infoSchema = Yup.object().shape({
  firstName: Yup.string().required('Это обязательное поле'),
  lastName: Yup.string().required('Это обязательное поле'),
  middleName: Yup.string().required('Это обязательное поле'),
});

export const SingleForm = ({ uniqueId }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.passenger}>Пассажир</div>
      <div
        className={styles.removePassenger}
        onClick={() => {
          dispatch({ type: 'REM_PASSENGER', id: uniqueId });
          dispatch({ type: 'REM_PASSENGER_INFO', id: uniqueId });
        }}
      >
        Удалить пассажира
      </div>
      <div className={styles.form} id={'form'}>
        <Form onSubmit={() => null} validationSchema={infoSchema}>
          <OnChangeForm uniqueId={uniqueId} />
          <Form.Group widths="3">
            <Input label="Имя" name="firstName" />
            <Input label="Фамилия" name="lastName" />
            <Input label="Отчество" name="middleName" />
          </Form.Group>
          <Form.Group widths="3">
            <Dropdown
              label="Пол"
              name="gender"
              selection
              options={[
                { text: 'Женщина', value: 'F' },
                { text: 'Мужчина', value: 'M' },
              ]}
            />
            <Dropdown
              label="Гражданство"
              name="country"
              options={countryOptions}
            />
            <div className={styles.dob}>
              <span className={styles.dobLabel}>Дата рождения</span>
              <DatePickerField name="DOB" />
            </div>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

const OnChangeForm = ({ uniqueId }) => {
  const dispatch = useDispatch();
  const { values, errors } = useFormikContext();

  React.useEffect(() => {
    if (
      Object.entries(errors).length !== 0 ||
      Object.entries(values).length === 0
    ) {
      dispatch({ type: 'SET_ERRORS_TRUE' });
    } else {
      dispatch({ type: 'SET_ERRORS_FALSE' });
    }
    if (values) {
      dispatch({ type: 'PUSH_PASSENGER_INFO', payload: values, id: uniqueId });
    }
  }, [values, errors]);
  return null;
};
