export function initNewsScrollAdaptive() {
    const newsScrollTablet = document.querySelector("#newsScrollTablet")
    const newsScrollContentTablet = document.querySelectorAll("#newsScrollContentTablet .content__news-item")
    const viewPortSize = 3
    let positionIndex = 0
    let position = 0

    setInterval(()=>{
        if (positionIndex < newsScrollContentTablet.length-viewPortSize) {
            position += newsScrollContentTablet[positionIndex].offsetWidth
            positionIndex += 1
        } else {
            position = 0
            positionIndex = 0
        }
        console.log('scroll', position, positionIndex)
        newsScrollTablet.scroll({
            left:position,
            behavior:"smooth"
        })
    },3000)
}