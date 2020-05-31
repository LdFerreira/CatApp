import produce from 'immer';

export const INITIAL_STATE = []

export default function cats(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cats/LOAD':
      return [...state, action.cats];

    case '@cats/CHANGE':
      return produce(state, (draft) => {
        draft.splice(action.cats);
        draft.push(action.cats);
      });
    case '@cats/MORE':
      return produce(state, (draft) => {
        const [oldCats] = state;
        oldCats.map((cat) => {
          return action.cats.push(cat);
        });
        draft.splice(action.cats);
        draft.push(action.cats);
      });
    default:
      return state;
  }
}
