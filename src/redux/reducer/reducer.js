let initialState = {
  contactList: [], //번호리스트를 담을 state만들기
  filterName: [],
};

function reducer(state = initialState, action) {
  //   console.log(state.payload.name);
  const { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            name: payload.name,
            phoneNumber: payload.phoneNumber,
          },
        ],
      };
    case "SEARCHNAME":
      const textName = payload.textName.toLowerCase();
      const filteredName = state.contactList.filter((contact) =>
        contact.name.toLowerCase().includes(textName)
      );
      return {
        ...state,
        filterName: filteredName,
      };
    default:
      return state;
  }
}

export default reducer;
