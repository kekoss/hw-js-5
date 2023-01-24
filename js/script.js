/* 
1. метод об'єктуце функція яка виконується всередині об'єкту
2. масив
3. коли ми хочемо скопіювати об'єкт ми копіюємо посилання, а не сам об'єкт,
   також якщо зберегти об'єкт у змінну, збережеться посилання а не сам об'єкт
*/ 

function createNewUser() {
    firstName = prompt('Your first name')
    lastName = prompt('Your last name')
    while (!isNaN(firstName) || !isNaN(lastName)){
        firstName = prompt('Your first name', firstName)
        lastName = prompt('Your last name', lastName)
    }
    let newUser = {
        firstName: firstName,
        lastName: lastName,
        setFirstName: function(value) {
            this.firstName = value;
          },
        setLastName: function(value) {
            this.lastName = value;
          },
        getLogin : function() {
            return (firstName[0] + lastName).toLowerCase()
        }
    }

    Object.defineProperty(newUser,'firstName', {
        writable:false,
        configurable: false,
    })
    Object.defineProperty(newUser, 'lastName', {
        writable: false,
        configurable: false,
    })
    

    return newUser
}
let newUser = createNewUser()
console.log(newUser.getLogin())











