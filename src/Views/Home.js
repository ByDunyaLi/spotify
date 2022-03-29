import BoxContent from "../components/BoxContent";

export default function Home(){
    const items = [
        {
            id: 1,
            title: 'Merhaba Seks Gerçekleri' ,
            description: 'Jun 2021',
            image: 'https://i.scdn.co/image/ab67656300005f1fac09d131daf1c7dfc10b6ebe',
            type: 'podcast',
            src: 'https://freesound.org/data/previews/625/625407_1648170-lq.mp3'
        },
        {
            id: 2,
            title: 'Cemal Süreya-Uzaktan Seviyorum Seni' ,
            description: 'May 2020',
            image: 'https://i.scdn.co/image/315653c471d0cb82107b597624c21ac855e952a1',
            type: 'album',
            src: 'https://freesound.org/data/previews/625/625404_4935038-lq.mp3'
        },
        {
            id: 3,
            title: 'SABAHATTİN ALİ - Arabalar Beş Kuruşa - Sesli Öykü' ,
            description: 'Jan 23',
            image: 'https://i.scdn.co/image/ab67656300005f1f38b089b2f82a6b09d84f4d54',
            type: 'album',
            src: 'https://freesound.org/data/previews/625/625381_5674468-lq.mp3'
        },
        {
            id: 4,
            title: 'Tarih, insan ırkındaki bir gecikme halidir.' ,
            description: 'Feb 2021',
            image: 'https://i.scdn.co/image/2040afd02197bc8642f88bf38c7b0061a56d838d',
            type: 'podcast',
            src: 'https://freesound.org/data/previews/625/625336_9034501-lq.mp3'
        },
        {
            id: 5,
            title: 'Uygarlık Tarihi Ders 25: Bilgi Felsefesi - Epistemoloji' ,
            description: 'Feb 2021',
            image: 'https://i.scdn.co/image/d13aac0e148a5c820bdb1b96083ec48c75bc06b0',
            type: 'podcast',
            src: 'https://freesound.org/data/previews/625/625293_1391542-lq.mp3'
        },
        {
            id: 6,
            title: 'Hiçbir Şey Hissetmeyenler Aslında Bu 4 Problemi Yaşıyor' ,
            description: 'Feb 26',
            image: 'https://i.scdn.co/image/f89f57c94d5c3754bbdd982c77271294efc89873',
            type: 'podcast',
            src: 'https://freesound.org/data/previews/625/625283_1648170-lq.mp3'
        },
        {
            id: 7,
            title: 'İngilizce Ders 25 : Using "Would Like" (Would Like Kullanımı)' ,
            description: 'Aug 2021',
            image: 'https://i.scdn.co/image/ab67656300005f1f0c5b7ec5f61cbc0835c854a8',
            type: 'album',
            src: 'https://freesound.org/data/previews/625/625272_5674468-lq.mp3'
        },
        {
            id: 8,
            title: 'Ezhel' ,
            description: 'Artist',
            image: 'https://i.scdn.co/image/ab67616100005174dfbabf5f1338d03c97799cd3',
            type: 'artist',
            src: 'https://freesound.org/data/previews/625/625244_9497060-lq.mp3'
        },
    ]
    return(
        <div className="grid gap-y-8">
            <BoxContent
                title="Recently played"
                more="/blabla"
                items={items}
            />
            <BoxContent
                title="Based on your recent listening"
                more="/blabla"
                items={items}
            />
        </div>
    )
}
