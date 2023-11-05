export function initForm(state) {
  const stateProxy = new Proxy(state, {
    set: (target, key, value) => {
      target[key] = value;
      const input = document.getElementById(key);
      input.value = value;
      return target[key]
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
