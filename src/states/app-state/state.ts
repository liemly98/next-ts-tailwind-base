export interface State {
  count: number;
}

export const initialState: State = {
  count: 0,
};

export enum ACTION_TYPES {
  SET_COUNT,
}

export interface Action<T> {
  type: ACTION_TYPES;
  payload?: T;
}

type Transducer = (state: State, action: Action<any>) => State;

export const reducer: Transducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_COUNT:
      return {
        ...state,
        ...{
          count: state.count + 1,
        },
      };
    default:
      return state;
  }
};
