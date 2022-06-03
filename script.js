// Объекты
// const - ключевое слово для создания переменной и её значение ни когда не меняется если положили строку она всегда будет строкой и изменить эту строку не возможно

            const user = '22';
            console.log(user);
            user = user + 2;

// Литеральные объекты
// При использовании литеральных объектов мы можем поместить туда {ключ: значение}
// Объект обозначается - {}
// typeof проверка на тип данных
            const objUser = {}
            console.log(typeof objUser);

            const objUser = {
                name: 'Иван',
                age: 28,
            };
            console.log(objUser);

// Добавление нового ключа в объект  название объекта.новый ключ = значение

            const objUser = {
                name: 'Иван',
                age: 28,
            };
            // Проверка на существование ключа 'ключ' in Объект
            console.log('name' in objUser);
            console.log('from' in objUser);
            objUser.from = 'Ташкент';
            console.log('from' in objUser);


// Цикл for in нужен для перебора Объекта for(ключ in объект)


            const objUser = {
                name: 'Иван',
                age: 28,
            };
            objUser.from = 'Ташкент'

            for (const key in objUser) {
                // Обратные кавычки или Строки-шаблоны - в строку можно поместить например переменную и строку без использования конкатенации 
                console.log(`ключ: (${key}) Значение ключа (${objUser[key]})`);
            }


// Методы объекта
// Функция внутри объекта яаляется метдом

            const user = {
                name: 'Иван',
                age: 28,
                ageAdd: function () {
                    // ключевое слово this обозначает этот объект
                    return ++this.age;
                }
            }
            console.log(user.age);
            console.log(user.ageAdd());
            // Так же мы можем изменять значение ключа объекта используя
            // объект.ключ = новое значение
            user.name = 'Каждый пишет свое имя'
            console.log(user);
            
// Ключи могут быть еще и в строчном типе и в числовом
// И в ключи объекта можно присваетвать еще объект такой объект называетяся двумерный объект

            const users = {
                '1': {
                    name: 'Backend',
                    age: 35
                },
                '2': {
                    name: 'Frontend',
                    age: 40
                }
            }
// Что бы вывести двумерный объект нужно сделать цикл в цикле
            for (const keyN in users) {
                for(const keys in users[keyN]) {
                    console.log(users[keyN][keys]);
                }
            }
// Если нужно создать ключ по значению переменной то нужно переменную взять в квадратные скобки
            
            let i = 3;
            users[`${i}`] = {
                name: 'Programmer',
                age: 45,
            }

            console.log(users);
            

            
            
            
            
