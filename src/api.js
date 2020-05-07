const domain = "http://localhost:3000/dancers";

const basicFetch = (url, options={}) => {
  return fetch(url, options)
    .then(res => res.json())
    .catch(console.log)
};

const getAllDancers = () => basicFetch(domain);
const getSingleDancer = id => basicFetch(`${domain}/${id}`);
const patchDancer = (id, object) => {
  const options = {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(object)
  }

  return basicFetch(`${domain}/${id}`, options);
};
