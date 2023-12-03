const config = {
    bot : {
        slashCommands: "1084759604644302938", // global veya sunucuIDsi yazın - slash olmayacaksa undefined yapın
	    token: "MTE3NzkyNzY3MjA5ODIwMTc4MQ.G6Hs6h.p7lm9WzCSEt5UcO4f939pb0-yM2cd9oBgkDGg4", //Bot Tokeniniz
	    prefix: ["."], //komut ön eki
        id: "1177927672098201781" //bot idsi
    },
    sunucu : {
        type: "java", //sunucu türü java veya bedrock 
 	    ip: "mc.nagaskyblock.com", //sunucu adresi
        port: 25565, //sunucu portu java için varsayılan 25565 bedrock için varsayılan 19132
        site: "Şuan Site aktif değil!", //sunucu sitesi
        isim: "NagaNetWork", //sunucu ismi
        mcindir: "Oyuncuları için 3. parti minecraft indirme linki", //minecraft indirme linki
        vote: "https://minecraft-mp.com/server/326346/vote/", //oy verme linki
        
    },
    kanal : {
	    aktif: true, //sesli kanalda online gösterme aktif mi(true) olsun kapalı mı(false)
	    id: "1180563942397988864", // sunucu online sayısının gözükeceği kanal (ses kanalı)
	    yazi: "• Aktif: {online}/{maxonline}" // kanalda gözükecek yazı || Varsayılan: • Aktif: {online}/{maxonline}
   },
    durum : {
	    mesaj: "{online} Kişi Sunucumuzda" // bot durumunda online sayısı || Varsayılan {online} Kişi Sunucumuzda 
   },
    ticket : {    
        parentOpened: "1149494986719629415", //destek talep kanallarının açılacağı kategorinin idsi

        Category1: "Minecraft Sorunları", //Destek talebi detayı için kategori 3 || Varsayılan: Minecraft Sorunları
        Category2: "Bulduğunuz Buglar", //Destek talebi detayı için kategori 2 || Varsayılan: Bulduğunuz Buglar
        Category3: "Şikayetler", //Destek talebi detayı için kategori 3 || Varsayılan: Şikayetler
          
        roleSupport: "1095153828116054087", //Destek talebine bakacak kişilere verilecek rolün idsi
            
        logsTicket: "1180564862103986197", //Destek taleplerinin loglanacağı kanal
        ticketChannel: "1149114014408917052" //Kullanıcıların destek talebi oluşturacağı kanalın idsi
    },
    oylama: {
        enabled: false, //oylama aktif mi? true: aktif false: pasif
        channelID: "Kullanıcıların Öneri yazabileceği kanal İD", //oylama kanalı
        emoji: "👍", //oylama emoji || Varsayılan: 👍
        emoji2: "👎", //oylama emoji || Varsayılan: 👎
        emoji3: "🤷", //oylama emoji || Varsayılan: 🤷
        altBaslik: { //alt başlık kullanılsın mı?
            enabled: false, //alt başlık kullanılsın mı? true: kullanılsın false: kullanılmasın
            arsivlemeSure: "1440" //alt başlık arşivlenme süresi (1440 dakika sonra [1440 dakika = 1 gün] arşivlenecek)
        } 

    }
}


module.exports = config;
