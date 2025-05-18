export const initialStore=()=>{
  return{
    contacts:[]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'load_contacts':

      const { id, contacts } = action.payload;

      return {
        ...store,
        id: id,
        contacts: contacts
      };
      case 'add_task':
        const {title} = action.payload;
        return {
          ...store,
          todos:[
            ...store.todos,
            ...[{
              id: store.todos.length +1,
              title,
              background: null
            }]
          ]
          
        };
    default:
      throw Error('Unknown action.');
  }    
}
