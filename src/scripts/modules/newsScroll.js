export function initNewsScroll() {
    const newsScroll = document.querySelector("#newsScroll")
    const newsScrollContent = document.querySelectorAll("#newsScrollContent .content__news-item")
    const viewPortSize = 3
    let positionIndex = 0
    let position = 0

    setInterval(()=>{
        if (positionIndex < newsScrollContent.length-viewPortSize) {
            position += newsScrollContent[positionIndex].offsetHeight
            positionIndex += 1
        } else {
            position = 0
            positionIndex = 0
        }
        console.log('scroll', position, positionIndex)
        newsScroll.scroll({
            top:position,
            behavior:"smooth"
        })
    },3000)
}