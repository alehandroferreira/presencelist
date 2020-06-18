const presence_list = {};

(() => {
  let register_id = false;

  function new_register(nome, horaCulto) {
    const presence_data = {
      name: nome,
      worshiptime: horaCulto,
    };

    if (!register_id) {
      register_id = firebase.database().ref().child("presence").push().key;
    }

    let updates = {};
    updates["/presence/" + register_id] = presence_data;

    let presence_ref = firebase.database().ref();
    presence_ref
      .update(updates)
      .then(() => {
        return { success: true, message: "Presence created" };
      })
      .catch((error) => {
        return { success: false, message: `Creation failed: ${error.message}` };
      });
  }

  presence_list.new = new_register;
})();
