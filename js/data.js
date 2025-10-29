// data.js: 全店舗データ（一覧用＋詳細ページ用）

const SHOPS = [
  {
    id: 1, // ページタグ（被らないように）
    name: '英吉家',　// 店舗名
    genre: 'ラーメン', // ジャンル名
    area: 'outside', // 'inside'か'outside'を記入（学内か学外）
    img: 'img/hideyoshi.jpg', // サムネ写真
    gallery: [
      'img/hideyoshi.jpg',
      'img/外観.jpg'
    ], // ギャラリー写真
    hours: '11:00〜20:00', // 営業時間
    place: '名城大学 東門から徒歩1分（仮）', // 場所の説明
    desc: '自家製スープが売りのラーメン店です。', //　店舗説明
    mapUrl:
      'https://www.google.com/maps?q=横浜家系ラーメン英吉家 名古屋市天白区塩釜口２丁目８０１&hl=ja&z=16&output=embed'
  }, //　マップ

  {
    id: 2,
    name: 'green Bakery',
    genre: 'cafe',
    area: 'inside',
    img: 'img/image_greenBakery.jpg',
    gallery: [
      'img/image_greenBakery.jpg',
      'img/外観.jpg'
    ],
    hours: '10:00〜17:00',
    place: '名城大学内',
    desc: '後日記入',
    mapUrl:
      'https://www.google.com/maps?q=green bakery BOOK CAFE 愛知県名古屋市天白区塩釜口1−５０１&hl=ja&z=16&output=embed'
  },

  {
    id: 3,
    name: '歴史を刻め',
    genre: 'ラーメン',
    area: 'outside',
    img: 'img/image_rekishiwokizame.jpg',
    gallery: [
      'img/image_rekishiwokizame.jpg',
      'img/外観.jpg'
    ],
    hours: '9:00〜18:00',
    place: '名城大学内外',
    desc: '後日記入',
    mapUrl:
      'https://www.google.com/maps?q=ラーメン荘 歴史を刻め 八事店 愛知県名古屋市天白区八事山５２８&hl=ja&z=16&output=embed'
  },

  {
    id: 4,
    name: '焼き鳥居酒屋<br>　天乃城',
    genre: '居酒屋',
    area: 'outside',
    img: 'img/image_TenNoShiro.jpg',
    gallery: [
      'img/image_TenNoShiro.jpg',
      'img/外観.jpg'
    ],
    hours: '後日記入',
    place: '大学近く',
    desc: '後日記入',
    mapUrl:
      'https://www.google.com/maps?q=天乃城 愛知県名古屋市天白区塩釜口１丁目６３３−１&hl=ja&z=16&output=embed'
  },

  {
    id: 5,
    name: 'Golden Daze',
    genre: 'cafe',
    area: 'outside',
    img: 'img/image_GoldenDaze.jpg',
    gallery: [
      'img/image_GoldenDaze.jpg',
      'img/外観.jpg'
    ],
    hours: '後日記入',
    place: '名城大学 周辺エリア',
    desc: '後日記入',
    mapUrl:
      'https://www.google.com/maps?q=Golden Daze 愛知県名古屋市天白区八幡山１２０８ メゾン八事 101&hl=ja&z=16&output=embed'
  },

  {
    id: 6,
    name: 'チーケバブ',
    genre: '屋台',
    area: 'outside', // 'inside' or 'outside'
    img: 'img/image_tiikebabu.jpg', // 一覧カード用のサムネ
    gallery: [
      'img/image_tiikebabu.jpg',
      'img/外観.jpg'
    ],
    hours: '後日記入',
    place: '名城大学外',
    desc: '後日記入',
    mapUrl:
      'https://www.google.com/maps?q=チーケバブ塩釜口店 愛知県名古屋市天白区塩釜口１丁目６５２−１ 塩釜ビル １F東 アリュール&hl=ja&z=16&output=embed'
  },

   {
    id: 7,
    name: 'らーめん六弦',
    genre: 'ラーメン',
    area: 'outside', // 'inside' or 'outside'
    img: 'img/image_RamenMugen.jpg', // 一覧カード用のサムネ
    gallery: [
      'img/image_RamenMugen.jpg',
      'img/外観.jpg'
    ],
    hours: '後日記入',
    place: '名城大学外',
    desc: '後日記入',
    mapUrl:
      'https://www.google.com/maps?q=らーめん六弦 愛知県名古屋市天白区八幡山１２１８ 三恵ビル&hl=ja&z=16&output=embed'
  },

   {
    id: 8,
    name: '韵茶空間YUNCHA',
    genre: 'タピオカ',
    area: 'outside', // 'inside' or 'outside'
    img: 'img/image_yuncha.jpg', // 一覧カード用のサムネ
    gallery: [
      'img/image_yuncha.jpg',
      'img/外観.jpg'
    ],
    hours: '後日記入',
    place: '名城大学外',
    desc: '後日記入',
    mapUrl:
      'https://www.google.com/maps?q=韵茶空間YUNCHA 三恵ビル tennpakukuhachimannyama1218, １２１８ 八幡山 天白区 名古屋市 愛知県&hl=ja&z=16&output=embed'
  },

  {
    id: 9,
    name: '中華料理 鑫林',
    genre: '中華料理',
    area: 'outside', // 'inside' or 'outside'
    img: 'img/image_shinrin.jpg', // 一覧カード用のサムネ
    gallery: [
      'img/image_shinrin.jpg',
      'img/外観.jpg'
    ],
    hours: '後日記入',
    place: '名城大学外）',
    desc: '後日記入',
    mapUrl:
      'https://www.google.com/maps?q=中華料理 鑫林 1MYビル, 1階, １３３２ 八幡山 天白区 名古屋市 愛知県&hl=ja&z=16&output=embed'
  },

  {
    id: 10,
    name: '新時代',
    genre: '居酒屋',
    area: 'outside', // 'inside' or 'outside'
    img: 'img/image_ShinjidaiShiogamaguchiEkiMae.jpg', // 一覧カード用のサムネ
    gallery: [
      'img/image_ShinjidaiShiogamaguchiEkiMae.jpg',
      'img/外観.jpg'
    ],
    hours: '後日記入',
    place: '名城大学外',
    desc: '後日記入',
    mapUrl:
      'https://www.google.com/maps?q=新時代 塩釜口駅前店 愛知県名古屋市天白区元八事４丁目７７&hl=ja&z=16&output=embed'
  },

  {
    id: 11,
    name: '三代目　鳥メロ',
    genre: '居酒屋',
    area: 'outside', // 'inside' or 'outside'
    img: 'img/image_SandaimeTorimero.jpg', // 一覧カード用のサムネ
    gallery: [
      'img/image_SandaimeTorimero.jpg',
      'img/外観.jpg'
    ],
    hours: '後日記入',
    place: '名城大学外',
    desc: '後日記入',
    mapUrl:
      'https://www.google.com/maps?q=三代目鳥メロ 塩釜口駅前店 愛知県名古屋市天白区塩釜口２丁目１５０１ フェイム塩釜 2F&hl=ja&z=16&output=embed'
  },

  {
    id: 12,
    name: '中華料理来来',
    genre: '中華料理',
    area: 'outside', // 'inside' or 'outside'
    img: 'img/image_rairai.jpg', // 一覧カード用のサムネ
    gallery: [
      'img/image_rairai.jpg',
      'img/外観.jpg'
    ],
    hours: '後日記入',
    place: '名城大学外',
    desc: '後日記入',
    mapUrl:
      'https://www.google.com/maps?q=中華料理来来 愛知県名古屋市天白区塩釜口２丁目１５０１&hl=ja&z=16&output=embed'
  },

  {
    id: 13,
    name: '洋食工房パセリ',
    genre: '居酒屋',
    area: 'outside', // 'inside' or 'outside'
    img: 'img/image_Parsley.jpg', // 一覧カード用のサムネ
    gallery: [
      'img/image_Parsley.jpg',
      'img/外観.jpg'
    ],
    hours: '後日記入',
    place: '名城大学外',
    desc: '後日記入',
    mapUrl:
      'https://www.google.com/maps?q=洋食工房パセリ 愛知県名古屋市天白区塩釜口２丁目１５０１ フェイム塩釜 １F&hl=ja&z=16&output=embed'
  },

  {
    id: 14,
    name: '東京油そば本舗',
    genre: '油そば',
    area: 'outside', // 'inside' or 'outside'
    img: 'img/image_TokyoAburasoba.jpg', // 一覧カード用のサムネ
    gallery: [
      'img/image_TokyoAburasoba.jpg',
      'img/外観.jpg'
    ],
    hours: '後日記入',
    place: '名城大学外',
    desc: '後日記入',
    mapUrl:
      'https://www.google.com/maps?q=東京油そば本舗 名古屋総本店 愛知県名古屋市天白区塩釜口２丁目２−９０６&hl=ja&z=16&output=embed'
  },

  {
    id: 15,
    name: 'お弁当コロコロ',
    genre: 'お弁当',
    area: 'outside', // 'inside' or 'outside'
    img: 'img/image_corocoro.jpg', // 一覧カード用のサムネ
    gallery: [
      'img/image_corocoro.jpg',
      'img/外観.jpg'
    ],
    hours: '後日記入',
    place: '名城大学外',
    desc: '後日記入',
    mapUrl:
      'https://www.google.com/maps?q=お弁当コロコロ 愛知県名古屋市天白区塩釜口２丁目１０１５ おりぃぶ荘 1F&hl=ja&z=16&output=embed'
  },

  {
    id: 16,
    name: 'マンチーズスタンド',
    genre: 'タコス',
    area: 'outside', // 'inside' or 'outside'
    img: 'img/image_MuchiesStand.jpg', // 一覧カード用のサムネ
    gallery: [
      'img/image_MuchiesStand.jpg',
      'img/外観.jpg'
    ],
    hours: '後日記入',
    place: '名城大学外',
    desc: '後日記入',
    mapUrl:
      'https://www.google.com/maps?q=マンチーズスタンド 愛知県名古屋市天白区塩釜口２丁目２−１００１&hl=ja&z=16&output=embed'
  },

  {
    id: 17,
    name: 'レストラン金鯱 天白店',
    genre: '定食屋',
    area: 'outside', // 'inside' or 'outside'
    img: 'img/image_kinko.jpg', // 一覧カード用のサムネ
    gallery: [
      'img/image_kinko.jpg',
      'img/外観.jpg'
    ],
    hours: '後日記入',
    place: '名城大学外',
    desc: '後日記入',
    mapUrl:
      'https://www.google.com/maps?q=レストラン金鯱 天白店 愛知県名古屋市天白区塩釜口２丁目８０１&hl=ja&z=16&output=embed'
  },

  {
    id: 18,
    name: 'グラン亭ミラノ',
    genre: '居酒屋',
    area: 'inside', // 'inside' or 'outside'
    img: 'img/image_guranteiMirano.jpg', // 一覧カード用のサムネ
    gallery: [
      'img/image_guranteiMirano.jpg',
      'img/外観.jpg'
    ],
    hours: '後日記入',
    place: '名城大学内',
    desc: '後日記入',
    mapUrl:
      'https://www.google.com/maps?q=名城大学天白キャンパス グラン亭ミラノ 愛知県名古屋市天白区塩釜口１丁目５０１&hl=ja&z=16&output=embed'
  },

  {
    id: 19,
    name: '名城食堂',
    genre: '居酒屋',
    area: 'inside', // 'inside' or 'outside'
    img: 'img/image_SeikyoShokudo.jpg', // 一覧カード用のサムネ
    gallery: [
      'img/image_SeikyoShokudo.jpg',
      'img/外観.jpg'
    ],
    hours: '後日記入',
    place: '名城大学内',
    desc: '後日記入',
    mapUrl:
      'https://www.google.com/maps?q=名城食堂 愛知県名古屋市天白区塩釜口１丁目５０１&hl=ja&z=16&output=embed'
  },
];













