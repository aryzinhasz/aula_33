const db = require("./db");

// Criar um novo usuário
const newUser = {
  name: "John Doe",
  email: "johndoe@example.com",
};

db.query("INSERT INTO users SET ?", newUser, (error, results) => {
  if (error) {
    console.error("Erro ao criar um novo usuário:", error);
  } else {
    console.log("Novo usuário criado! ID:", results.insertId);
  }
});

//Ler todos os usuários
db.query("SELECT * FROM users", (error, results) => {
  if (error) {
    console.error("Erro ao recuperar usuários:", error);
  } else {
    console.log("Usuários encontrados:", results);
  }
});

//Atualizar um usuário
const userId = 1;
const updatedEmail = "newemail@example.com";
db.query(
  "UPDATE users SET email = ? WHERE id = ?",
  [updatedEmail, userId],
  (error, results) => {
    if (error) {
      console.error("Erro ao atualizar o usuário:", error);
    } else {
      console.log("Usuário atualizado!", results.affectedRows);
    }
  }
);

//Excluir um usuário
const userIdToDelete = 2;
db.query("DELETE FROM users WHERE id = ?", userIdToDelete, (error, results) => {
  if (error) {
    console.error("Erro ao excluir o usuário:", error);
  } else {
    console.log("Usuário excluído!", results.affectedRows);
  }
});
