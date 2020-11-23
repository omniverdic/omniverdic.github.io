function getuserdatafromurl() {
  const myUrl = new URL(window.location.href);
  name = myUrl.searchParams.get("name");
  age = myUrl.searchParams.get("age");
  gender = myUrl.searchParams.get("gender");
  if (
    nameinput === null ||
    ageinput === null ||
    genderinput === null ||
    nameinput === "" ||
    ageinput === "" ||
    genderinput === ""
  ) {
    window.alert("Please go through the main url");
    window.location.href = "index.html";
  } else {
    return [name, age, gender];
  }
}
