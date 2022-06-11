$(function () {

// Create array from 1000 to 10000 value
    var randOrderSum = [1000, 1500, 2000, 2500, 3000, 3250, 3500, 3750, 4000, 4350, 4500, 4800, 5000, 5200, 5500, 5700, 6000, 6300, 6500, 6900, 7000, 7500, 7200, 8000, 8500, 8700, 9000, 9300, 9500, 10000];

// Create array city
    var cityList = ['Александрия', 'Белая Церковь', 'Винница', 'Вишневое', 'Днепро', 'Дрогобыч', 'Житомир', 'Запорожье', 'Знаменка', 'Золотоноша', 'Киев', 'Кропивницкий', 'Конотоп', 'Кривой Рог', 'Львов', 'Ровно', 'Славутич', 'Смела', 'Сумы', 'Харьков', 'Червоноград', 'Черкасы', 'Чернигов', 'Шостка'];

    var imgPathMan = ['img/man1.png', 'img/man2.png', 'img/man3.png', 'img/man4.png', 'img/man5.png', 'img/man6.png', 'img/man7.png', 'img/man8.png'];

    var imgPathWoman = ['img/woman1.png', 'img/woman2.png', 'img/woman3.png', 'img/woman4.png', 'img/woman5.png', 'img/woman6.png', 'img/woman7.png', 'img/woman8.png'];

    var actionVerb = ['сделал','оставил', 'оформил', 'совершил', 'забронировал'];



    // Create list object in array people

    var people = [{

        "fname": "Иноземцева Надежда",
        "gender": 0

    }, {

        "fname": "Ярцева Аня",
        "gender": 0

    }, {

        "fname": "Наталья Мальцова",
        "gender": 0

    }, {

        "fname": "Марина Губачева",
        "gender": 0

    }, {

        "fname": "Стаина Анна",
        "gender": 0

    }, {

        "fname": "Шеркова Евгения",
        "gender": 0

    }, {

        "fname": "Андрюхина Нина",
        "gender": 0

    }, {

        "fname": "Головина Анна",
        "gender": 0

    }, {

        "fname": "Чупрова Екатерина",
        "gender": 0

    }, {

        "fname": "Холопова Виктория",
        "gender": 0

    }, {

        "fname": "Крупина Мария",
        "gender": 0

    }, {

        "fname": "Полевщикова Кристина",
        "gender": 0

    }, {

        "fname": "Пьянкова Диана",
        "gender": 0

    }, {

        "fname": "Буланова Яна",
        "gender": 0

    }, {

        "fname": "Щеголева Светлана",
        "gender": 0

    }, {

        "fname": "Янкелевич Алина",
        "gender": 0

    }, {

        "fname": "Якушевич Наталья",
        "gender": 0

    }, {

        "fname": "Фомичева Диана",
        "gender": 0

    }, {

        "fname": "Пережогина Виктория",
        "gender": 0

    }, {

        "fname": "Рябова Дарья",
        "gender": 0

    }, {

        "fname": "Домышева Юлия",
        "gender": 0

    }, {

        "fname": "Милова Татьяна",
        "gender": 0

    }, {

        "fname": "Шипицына Анна",
        "gender": 0

    }, {

        "fname": "Протасова Евгения",
        "gender": 0

    }, {

        "fname": "Коржева Ксения",
        "gender": 0

    }, {

        "fname": "Кузнецова Вероника",
        "gender": 0

    }, {

        "fname": "Сурина Алиса",
        "gender": 0

    }, {

        "fname": "Перова Агата",
        "gender": 0

    }, {

        "fname": "Коржакова Ольга",
        "gender": 0

    }, {

        "fname": "Абрамович Валентина",
        "gender": 0

    }, {

        "fname": "Крылова Наталья",
        "gender": 0

    }, {

        "fname": "Проскуркина Александра",
        "gender": 0

    }, {

        "fname": "Терехова Юлия",
        "gender": 0

    }, {

        "fname": "Труфанова Варвара",
        "gender": 0

    }, {

        "fname": "Батурина Марина",
        "gender": 0

    }, {

        "fname": "Васнецова Нина",
        "gender": 0

    }, {

        "fname": "Перевалова Надежда",
        "gender": 0

    }, {

        "fname": "Рошета Любовь",
        "gender": 0

    }, {

        "fname": "Мосякова Татьяна",
        "gender": 0

    }, {

        "fname": "Носова Анастасия",
        "gender": 0

    }, {

        "fname": "Типалова Юнона",
        "gender": 0

    }, {

        "fname": "Колесникова Инесса",
        "gender": 0

    }, {

        "fname": "Якуничева Анна",
        "gender": 0

    }, {

        "fname": "Левина Евгения",
        "gender": 0

    }, {

        "fname": "Дурмина Антонина",
        "gender": 0

    }, {

        "fname": "Игошина Мария",
        "gender": 0

    }, {

        "fname": "Званцова Светлана",
        "gender": 0

    }, {

        "fname": "Хлопонина Елена",
        "gender": 0

    }, {

        "fname": "Суботина Изабелла",
        "gender": 0

    }, {

        "fname": "Дроздова Марфа",
        "gender": 0

    }, {

        "fname": "Милютина Изабелла",
        "gender": 0

    }, {

        "fname": "Домаш Вячеслав",
        "gender": 1

    }, {

        "fname": "Лагутов Руслан",
        "gender": 1

    }, {

        "fname": "Степанков Радислав",
        "gender": 1

    }, {

        "fname": "Перешивкин Ростислав",
        "gender": 1

    }, {

        "fname": "Кобзев Платон",
        "gender": 1

    }, {

        "fname": "Кабанов Игнатий",
        "gender": 1

    }, {

        "fname": "Чепурин Николай",
        "gender": 1

    }, {

        "fname": "Крымов Изяслав",
        "gender": 1

    }, {

        "fname": "Собчак Евгений",
        "gender": 1

    }, {

        "fname": "Былинкин Максим",
        "gender": 1

    }, {

        "fname": "Архипов Сергей",
        "gender": 1

    }, {

        "fname": "Донцов Самсон",
        "gender": 1

    }, {

        "fname": "Лызлов Владислав",
        "gender": 1

    }, {

        "fname": "Фризов Владимир",
        "gender": 1

    }, {

        "fname": "Крупнов Дмитрий",
        "gender": 1

    }, {

        "fname": "Ябловский Вадим",
        "gender": 1

    }, {

        "fname": "Гусенков Самсон",
        "gender": 1

    }, {

        "fname": "Панфёров Семён",
        "gender": 1

    }, {

        "fname": "Ясинский Павел",
        "gender": 1

    }, {

        "fname": "Тетерев Глеб",
        "gender": 1

    }, {

        "fname": "Шлыков Николай",
        "gender": 1

    }, {

        "fname": "Козлов Илья",
        "gender": 1

    }, {

        "fname": "Паулкин Ефим",
        "gender": 1

    }, {

        "fname": "Саламатов Николай",
        "gender": 1

    }, {

        "fname": "Сподарев Степан",
        "gender": 1

    }, {

        "fname": "Бочкарёв Владимир",
        "gender": 1

    }, {

        "fname": "Опекунов Вячеслав",
        "gender": 1

    }, {

        "fname": "Телицын Тимофей",
        "gender": 1

    }, {

        "fname": "Ямлиханов Андрей",
        "gender": 1

    }, {

        "fname": "Малиновский Владислав",
        "gender": 1

    }, {

        "fname": "Гребнев Ростислав",
        "gender": 1

    }, {

        "fname": "Кузанов Леонид",
        "gender": 1

    }, {

        "fname": "Цитников Всеволод",
        "gender": 1

    }, {

        "fname": "Банин Александр",
        "gender": 1

    }, {

        "fname": "Капица Кирилл",
        "gender": 1

    }, {

        "fname": "Володин Зиновий",
        "gender": 1

    }, {

        "fname": "Уланов Иван",
        "gender": 1

    }, {

        "fname": "Седых Кирилл",
        "gender": 1

    }, {

        "fname": "Туровский Лев",
        "gender": 1

    }, {

        "fname": "Москвин Артем",
        "gender": 1

    }, {

        "fname": "Цыганов Егор",
        "gender": 1

    }, {

        "fname": "Голумбовский Дмитрий",
        "gender": 1

    }, {

        "fname": "Аничков Кирилл",
        "gender": 1

    }, {

        "fname": "Канаш Степан",
        "gender": 1

    }, {

        "fname": "Клепахов Дмитрий",
        "gender": 1

    }, {

        "fname": "Колесников Анатолий",
        "gender": 1

    }, {

        "fname": "Цветков Леонид",
        "gender": 1

    }, {

        "fname": "Мишин Ефим",
        "gender": 1

    }, {

        "fname": "Кирилл Ловец",
        "gender": 1

    }, {

        "fname": "Евгений Кукарин",
        "gender": 1

    }, {

        "fname": "Сергей Прохоров",
        "gender": 1

    }, {

        "fname": "Андрей Князев",
        "gender": 1

    }, {

        "fname": "Михаил Павленко",
        "gender": 1

    }, {

        "fname": "Виктор Бодров",
        "gender": 1

    }, {

        "fname": "Алексей Комаров",
        "gender": 1

    }, {

        "fname": "Дмитрий Маслов",
        "gender": 1

    }, {

        "fname": "Борисов Евгений",
        "gender": 1

    }];


// shuffle Arrays
    function shuffleArray(array) {

        var currentIndex = array.length, temporaryValue, randomIndex;


        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);

            currentIndex -= 1;

            temporaryValue = array[currentIndex];

            array[currentIndex] = array[randomIndex];

            array[randomIndex] = temporaryValue;

        }


        return array;

    }


    function showTips() {


        this.showItem = 0;

        people = shuffleArray(people);

        cityList = shuffleArray(cityList);

        randOrderSum = shuffleArray(randOrderSum);

        imgPathWoman = shuffleArray(imgPathWoman);

        imgPathMan = shuffleArray(imgPathMan);

        imgPathMan = shuffleArray(imgPathMan);

        actionVerb = shuffleArray(actionVerb);



        // output HTML
        this.generateHTML = function (fname, avatar, gender, city, phragender, randOrderSum) {


            // Function rand opacity background depending on people

            function randomOpacity (min, max) {
                return (Math.random() + 0.1 * (max - min) + min).toFixed(1);
            }



            if (gender == 0) {

                var classgender = 'woman-item';

                var bgrand = 'style="background: rgba(255,222,38,' + randomOpacity(0.4, 1) + ');"';

            } else {

                var classgender = 'man-item';

                var bgrand = 'style="background: rgba(57,199,255,' + randomOpacity(0.4, 1) + ');"';

            }

            return (



                '<div '  + bgrand + ' class="popnotice-item ' + classgender + '">' +

                '<img src="' + avatar + '" class="popnotice-img">' +

                '<div class="popnotice-description">' +


                '<div class="popnotice-text"><h3>' + fname +'</h3>'+ 'г. ' + city + ', '  + phragender + '</div>' +


                '</div>' +

                '</div>'


            );

        };

        // output popnotice item to DOM wit animation
        this.addItem = function (html) {


            $(html).appendTo($(document.body));

            $('.popnotice-item').css('display', 'block').animate({opacity: 1.0}, 'slow');
        }

        // disappear popnotice item to DOM wit animation
        this.bindEvent = function () {

            setTimeout(function () {

                $('.popnotice-item').animate({opacity: 0.1}, 'slow',

                    function () {

                        $('.popnotice-item').css('display', 'none').remove();

                    });

            }, 8000);

        }


        var self = this;

        // Loop popnotice item and valiadation shuffle variable from array
        var item = people[self.showItem];

        if (!item) {

            self.showItem = -1;

            var item = people[0];


        }

        var imgWoman = imgPathWoman[self.showItem];

        if (!imgWoman) {

            self.showItem = -1;

            var imgWoman = imgPathWoman[0];

        }

        var imgMan = imgPathMan[self.showItem];

        if (!imgMan) {

            self.showItem = -1;

            var imgMan = imgPathMan[0];

        }

        // img-icon path depending on the gender
        var avatar = item.gender ? imgMan : imgWoman;

        var city = cityList[self.showItem];

        if (!city) {

            self.showItem = -1;

            var city = cityList[0];

        }

        var sum = randOrderSum[self.showItem];

        if (!sum) {

            self.showItem = -1;

            var sum = randOrderSum[0];

        }

// Verb and Noun validate and output random phrase depending on the selected verb

        var aVerb = actionVerb[self.showItem];

        if (!actionVerb) {

            self.showItem = -1;

            var aVerb = actionVerb[0];

        }


        if(aVerb == 'сделал'){

            var actionNoun = ['заказ', 'заявку на обратный звонок', 'регистрацию на сайте', 'предзаказ товара'];

            actionNoun = shuffleArray(actionNoun);

            var aNoun = actionNoun[self.showItem];

            if (!actionNoun) {

                self.showItem = -1;

                var aNoun = actionNoun[0];

            }

        }else if(aVerb == 'оформил'){

            var actionNoun = ['заказ', 'заявку на обратный звонок', 'регистрацию на сайте', 'предзаказ товара'];

            actionNoun = shuffleArray(actionNoun);

            var aNoun = actionNoun[self.showItem];

            if (!actionNoun) {

                self.showItem = -1;

                var aNoun = actionNoun[0];
            }

        }else if(aVerb == 'совершил'){

            var actionNoun = ['покупку', 'заказ', 'регистрацию на сайте', 'предзаказ товара'];

            actionNoun = shuffleArray(actionNoun);

            var aNoun = actionNoun[self.showItem];

            if (!actionNoun) {

                self.showItem = -1;

                var aNoun = actionNoun[0];
            }

        }else if(aVerb == 'забронировал'){

        var actionNoun = ['товар'];

        actionNoun = shuffleArray(actionNoun);

        var aNoun = actionNoun[self.showItem];

        if (!actionNoun) {

            self.showItem = -1;

            var aNoun = actionNoun[0];
        }

        }else if(aVerb == 'оставил'){

            var actionNoun = ['заявку на обратный звонок'];

            actionNoun = shuffleArray(actionNoun);

            var aNoun = actionNoun[self.showItem];

            if (!actionNoun) {

                self.showItem = -1;

                var aNoun = actionNoun[0];
            }

        }else{
            var actionNoun = ['заказ', 'заявку на обратный звонок', 'регистрацию на сайте', 'предзаказ товара'];

            actionNoun = shuffleArray(actionNoun);

            var aNoun = actionNoun[self.showItem];

            if (!actionNoun) {

                self.showItem = -1;

                var aNoun = actionNoun[0];

            }
        }



        // function output verb depending on the gender people and price goods depending on the action noun

        this.nounSum = function (aNoun){
            if(aNoun == 'покупку' || aNoun == 'заказ' || aNoun == 'предзаказ товара' || aNoun == 'товар'){

                return phragender  = item.gender ? aVerb + ' ' + aNoun + ' на сумму ' + sum + ' грн.' : aVerb + 'а ' + aNoun + ' на сумму ' + sum + ' грн.';

            }else{

                return phragender  = item.gender ? aVerb + ' ' + aNoun : aVerb + 'а ' + aNoun ;

            }
        };

        self.nounSum(aNoun);



        // Count popnotice item loop

        self.showItem++;

        // Output generation HTML code with passing an argument popnotice item to a function
        var html = self.generateHTML(item.fname, avatar, item.gender, city, phragender);

        // Call appear and disappear function
        self.addItem(html);

        self.bindEvent();
    }

    // Interval between show popnotice item
    //showTips();
    setInterval(showTips, 5000);

});