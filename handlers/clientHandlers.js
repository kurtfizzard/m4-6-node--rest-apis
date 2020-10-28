const { v4: uuidv4 } = require("uuid");
let { clients } = require("../data/clients");

// write your handlers here...

// Access a list of customers.
const handleClients = (req, res) => {
  res.status(200).json({
    status: 200,
    data: clients,
  });
};

// Access information about a specific customer.
const handleClientsId = (req, res) => {
  // search the clients array for an id referenced by the url params
  // and return the client if it succeeds in finding one
  const client = clients.find((client) => client.id === req.params.id);
  console.log(client);
  // is there a client
  client
    ? // if so, retrieve the client data
      res.status(200).json({
        status: 200,
        data: client,
      })
    : // if not, return an error message
      res.status(400).json({
        status: 400,
        message: "The client does not exist.",
      });
};

const handleClientsAdd = (req, res) => {
  // create a variable to represent a new client, but assign the id a randomly generated 24 character string
  const newClient = {
    id: uuidv4().slice(0, 24),
    ...req.body,
  };
  // if the proivided email is found in our existing clients, return that client
  const existingClient = clients.find(
    (client) => client.email === newClient.email
  );
  // if existingClient did not return a client, push the newClient to the clients array and return an approval message
  if (!existingClient) {
    clients.push(newClient);
    res.status(201).json({
      status: 201,
      message: "The client has been successfully created.",
      data: newClient,
    });
    // if existingClient returned a client, return an error message
  } else {
    res.status(400).json({
      status: 400,
      message: "This client already exists.",
    });
  }
};

const handleClientsDelete = (req, res) => {
  // find will return a client if the provided id matches the id of a client in the array
  const client = clients.find((client) => client.id === req.params.id);
  // if client returned a client
  if (client) {
    clients = clients.filter((client) => client.id !== req.params.id);
    res.status(200).json({
      status: 200,
      message: `The client has been successfully deleted.`,
    });
  } else {
    // if not, return an error message
    res.status(400).json({
      status: 400,
      message: "The client does not exist.",
    });
  }
};

module.exports = {
  handleClients,
  handleClientsId,
  handleClientsAdd,
  handleClientsDelete,
};
