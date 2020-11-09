class User {
  constructor(name, dob) {
    this.name = name
    this.dob = dob
  }

  getAge(dob) {
      
    const today = new Date();
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();
    console.log(age)
    if ( today.getMonth() < birthDate.getMonth() ||(today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
    return age - 1;
  } else { 

  return age;
};

  }

 
}
export default User;