import produce from 'immer';

export default function favorite(state = [], action) {
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
        console.tron.log(state);
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
