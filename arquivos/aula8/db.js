const conectar = async () => {
  if (global.conexao && global.conexao.state != "disconnected") {
    return global.conexao;
  }
  const mysql = require("mysql2/promise");
  const conn = mysql.createConnection(
    "mysql://root:admin@localhost:3306/cfbcursos"
  );
  console.log("Conectou ao banco");
  global.conexao = conn;
  return conn;
};

const todosClientes = async () => {
  const conn = await conectar();
  const [linhas] = await conn.query("SELECT * FROM cliente_node");
  return await linhas;
};

module.exports = { todosClientes };
