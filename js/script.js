
const iconMenu = document.querySelector('.icon-menu')
const sidebar = document.querySelector('.sidebar')
const iconClose = document.querySelector('.icon-close')
const link1 = document.querySelector('.link1')
const link2 = document.querySelector('.link2')
const link3 = document.querySelector('.link3')
const link4 = document.querySelector('.link4')


const openSideBar = () => {
    sidebar.style.display = 'block'
    sidebar.style.transform = 'translateX(0)'
}

const closeSideBar = () => {
    sidebar.style.transform = 'translateX(100%)'
}

iconMenu.addEventListener('click', openSideBar)
iconClose.addEventListener('click', closeSideBar)
link1.addEventListener('click', closeSideBar)
link2.addEventListener('click', closeSideBar)
link3.addEventListener('click', closeSideBar)
link4.addEventListener('click', closeSideBar)

document.addEventListener('click', (event) => {
    // لو العنصر اللي اتداس عليه مش جوا السايدبار ولا زرار فتح السايدبار
    if (!sidebar.contains(event.target) && !iconMenu.contains(event.target)) {
        sidebar.style.transform = 'translateX(100%)'
    }
    console.log('dddddddddd')
});