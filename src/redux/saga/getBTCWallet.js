import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { isError, success } from '../actions/generateWallet';

function* getBTCAddress({ payload }) {
  try {
    const res = yield call(axios.post, 'route', payload);
    const { addr } = res.data;
    yield put(success(addr));
  } catch (err) {
    yield put(isError(err.response.data.error || 'Error'));
  }
}

export default getBTCAddress;
