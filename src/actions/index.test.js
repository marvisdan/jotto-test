import moxios from 'moxios';
import { getSecretWord } from './index';
import { storeFactory } from '../../test/testUtils';

describe('get Secret word', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test(' add response word to state', () => {
    const secretWord = 'party';
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });      
    });
    return store.dispatch(getSecretWord())
      .then(() => {
        const newState = store.getState();
        console.log('state', newState);
        
        expect(newState.secretWord).toBe(secretWord);
      });
  });
});