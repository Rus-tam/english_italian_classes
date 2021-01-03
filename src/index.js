import AOS from 'aos';

AOS.init({
    delay: 200,
    duration: 4000,
    once: false,
    mirror: false
})


let isEng = true

// Getting elements by id
const mainTitle = document.getElementById('main-title')
const mainSubtitle = document.getElementById('main-subtitle')
const teacherProfile1 = document.getElementById('teacher-profile1')
const teacherProfile2 = document.getElementById('teacher-profile2')
const reviewProfile1 = document.getElementById('review-profile1')
const reviewProfile2 = document.getElementById('review-profile2')

const engContainer1 = document.querySelectorAll('#eng-container1')
const italyContainer1 = document.querySelectorAll('#italy-container1')

const themeSwitcher = document.getElementById('flag_img')

//Settings Styles
engContainer1.forEach((item) => {
    item.setAttribute("style", "display: initial")
})
italyContainer1.forEach((item) => {
    item.setAttribute("style", "display: none")
})

//English Theme
const englishTheme = () => {
    document.documentElement.setAttribute('data-theme', 'uk')
    themeSwitcher.src = './img/italy_flag.svg'

    //Inner Text
    mainTitle.innerHTML = 'Добро пожаловать в школу английского языка'
    mainSubtitle.innerHTML = 'У нас ты выучишь английский, маза фака'
    teacherProfile1.innerHTML = '<strong>Преподаватель Чарльз</strong>. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum a eligendi tenetur non ut! Commodi rem, consequatur, possimus id at, aliquam eveniet veniam fugiat esse odit distinctio autem temporibus ducimus ipsa ut aperiam praesentium? Aspernatur voluptas voluptatem sed illo nihil voluptatibus velit amet, quisquam aliquam, provident odit, sit inventore dolor beatae. Cumque voluptates dicta autem fuga eveniet, excepturi, accusamus fugit odio, tempora obcaecati iure praesentium ex doloremque nam aspernatur! Facilis, dolorem? Saepe reprehenderit qui aliquam dolores harum sit!'
    teacherProfile2.innerHTML = '<strong>Преподаватель Елизавета</strong>. . Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum a eligendi tenetur non ut! Commodi rem, consequatur, possimus id at, aliquam eveniet veniam fugiat esse odit distinctio autem temporibus ducimus ipsa ut aperiam praesentium? Aspernatur voluptas voluptatem sed illo nihil voluptatibus velit amet, quisquam aliquam, provident odit, sit inventore dolor beatae. Cumque voluptates dicta autem fuga eveniet, excepturi, accusamus fugit odio, tempora obcaecati iure praesentium ex doloremque nam aspernatur! Facilis, dolorem? Saepe reprehenderit qui aliquam dolores harum sit!'
    reviewProfile1.innerHTML = '<strong>Бенедикт</strong>. Благодаря этой школе я наконец-то выучил английский и смог ворваться в британский и мировой кинематорграф. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, pariatur. Suscipit repellendus possimus aspernatur molestias deleniti cupiditate inventore sint dignissimos quidem, amet repudiandae saepe facilis soluta maiores quos adipisci veritatis in sit dolor. Odit nemo nisi reprehenderit impedit sequi quibusdam dolore sunt.'
    reviewProfile2.innerHTML = '<strong>Барак</strong>. После обучения в онлайн школе я смог исполнить свою мечту и стать президентом США. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, pariatur. Suscipit repellendus possimus aspernatur molestias deleniti cupiditate inventore sint dignissimos quidem, amet repudiandae saepe facilis soluta maiores quos adipisci veritatis in sit dolor. Odit nemo nisi reprehenderit impedit sequi quibusdam dolore sunt.'
    
    engContainer1.forEach((item) => {
        item.style.display = 'initial'
    })
    italyContainer1.forEach((item) => {
        item.style.display = 'none'
    })
}

//Italian Theme
const italianTheme = () => {
    document.documentElement.setAttribute('data-theme', 'italy')
    themeSwitcher.src = './img/UK_flag.svg'

    //Inner Text
    mainTitle.innerHTML = 'Добро пожаловать в школу итальянского языка'
    mainSubtitle.innerHTML = 'С нами твой итальянский станет просто перфекто'
    teacherProfile1.innerHTML = '<strong>Преподаватель Сильвио</strong>. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum a eligendi tenetur non ut! Commodi rem, consequatur, possimus id at, aliquam eveniet veniam fugiat esse odit distinctio autem temporibus ducimus ipsa ut aperiam praesentium? Aspernatur voluptas voluptatem sed illo nihil voluptatibus velit amet, quisquam aliquam, provident odit, sit inventore dolor beatae. Cumque voluptates dicta autem fuga eveniet, excepturi, accusamus fugit odio, tempora obcaecati iure praesentium ex doloremque nam aspernatur! Facilis, dolorem? Saepe reprehenderit qui aliquam dolores harum sit!'
    teacherProfile2.innerHTML = '<strong>Преподаватель Моника</strong>. . Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum a eligendi tenetur non ut! Commodi rem, consequatur, possimus id at, aliquam eveniet veniam fugiat esse odit distinctio autem temporibus ducimus ipsa ut aperiam praesentium? Aspernatur voluptas voluptatem sed illo nihil voluptatibus velit amet, quisquam aliquam, provident odit, sit inventore dolor beatae. Cumque voluptates dicta autem fuga eveniet, excepturi, accusamus fugit odio, tempora obcaecati iure praesentium ex doloremque nam aspernatur! Facilis, dolorem? Saepe reprehenderit qui aliquam dolores harum sit!'
    reviewProfile1.innerHTML = '<strong>Лучано</strong>. Я выучил итальянский и открыл в себе дар оперного певца. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, pariatur. Suscipit repellendus possimus aspernatur molestias deleniti cupiditate inventore sint dignissimos quidem, amet repudiandae saepe facilis soluta maiores quos adipisci veritatis in sit dolor. Odit nemo nisi reprehenderit impedit sequi quibusdam dolore sunt.'
    reviewProfile2.innerHTML = '<strong>Софи</strong>. Для съемок в итальянских фильмах пришлось выучить итальянский. Результатом обучения осталась довольна. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, pariatur. Suscipit repellendus possimus aspernatur molestias deleniti cupiditate inventore sint dignissimos quidem, amet repudiandae saepe facilis soluta maiores quos adipisci veritatis in sit dolor. Odit nemo nisi reprehenderit impedit sequi quibusdam dolore sunt.'

    engContainer1.forEach((item) => {
        item.style.display = 'none'
    })

    italyContainer1.forEach((item) => {
        item.style.display = 'initial'
    })
}

//Toggle English and Italian Styles
const toggleTheme = (isEng) => {
    if (isEng) {
        englishTheme()
    } else {
        italianTheme()
    }
}

//Event Listner
themeSwitcher.addEventListener('click', () => {
    isEng = !isEng
    toggleTheme(isEng)
})

toggleTheme(isEng)