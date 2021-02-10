const GET_FILES = 'GET_FILES';
const MODAL = 'MODAL';
const NEW_MODAL_TEXT = 'NEW_MODAL_TEXT';

let initialState = {
  files: [],
  modal: {
    currentItemId: null,
    isOpen: false,
    content: null,
  },
};

export const filesPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILES:
      return {
        ...state,
        files: action.files,
      };
    case MODAL:
      return {
        ...state,
        modal: {
          currentItemId: action.id,
          isOpen: !state.modal.isOpen,
        },
      };

    default:
      return { ...state };
  }
};

export const setFiles = (files) => ({
  type: GET_FILES,
  files,
});

export const toogleModal = (id) => ({
  type: MODAL,
  id,
});
