export const motto="dream big and don't wake up".split(" ")

export const panelBackgrounds = [
    'https://source.unsplash.com/a-white-and-blue-bugatti-parked-in-front-of-a-lake-TkfGsB2eMOc',
    'https://source.unsplash.com/brown-and-black-lego-toy-Cf-kY8HFJOs',
    'https://source.unsplash.com/photography-of-person-holding-glass-bottles-during-sunset-UErWoQEoMrc',
    'https://source.unsplash.com/city-with-high-rise-buildings-during-night-time-7GgYIkt9TE0',
    'https://source.unsplash.com/two-trucks-on-plant-field-l_5MJnbrmrs',
    'https://source.unsplash.com/green-battle-tank-under-white-clouds-during-daytime-248_60XHX_8'

];

export const getData=
    async (url,renderFc)=>{
        const response=await fetch(url)
        const data=await response.json()
        renderFc(data)
    }