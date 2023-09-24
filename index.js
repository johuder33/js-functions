const blog = {
  title: "",
  description: "",
};

function initForm(state) {
  const stateProxy = new Proxy(state, {
    set: (target, key, value) => {
      target[key] = value;
      const input = document.getElementById(key);
      input.value = value;
    }
  });
  // 0           1         2
  // ["user", "password", "age"]
  // user = 0 = ("user") => document.getElementById("user")
  // password = 1 = ("password") => document.getElementById("password")
  // age = 2 = ("age") => document.getElementById("age")
  const inputs = Object.keys(state).map((id) => document.getElementById(id));
  
  inputs.forEach((input) => {
    input.addEventListener('input', (event) => {
      const currentValue = event.target.value;
      const currentName = event.target.name;
      stateProxy[currentName] = currentValue;
    });
  });

  return stateProxy;
}

const blogState = initForm(blog);

const form = document.getElementById('form');

function onSubmit(event) {
  event.preventDefault();
  console.log('enviare al servidor estos datos', blogState, event);
}
