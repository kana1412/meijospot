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
    name: '学食カフェ',
    genre: '定食',
    area: 'inside',
    img: 'img/外観.jpg',
    gallery: [
      'img/外観.jpg',
      'img/Top.jpg'
    ],
    hours: '10:00〜17:00',
    place: '名城大学内 食堂エリア',
    desc: '学生向け価格でボリュームのある定食が楽しめます。',
    mapUrl:
      'https://www.google.com/maps?q=名城大学&hl=ja&z=16&output=embed'
  },

  {
    id: 3,
    name: 'コモンホール',
    genre: 'カフェ',
    area: 'inside',
    img: 'img/Top.jpg',
    gallery: [
      'img/Top.jpg',
      'img/外観.jpg'
    ],
    hours: '9:00〜18:00',
    place: '名城大学内 カフェスペース',
    desc: 'コーヒーや軽食で友達とゆっくりできるスペースです。',
    mapUrl:
      'https://www.google.com/maps?q=名城大学&hl=ja&z=16&output=embed'
  },

  {
    id: 4,
    name: '屋台タコス',
    genre: '屋台',
    area: 'outside',
    img: 'img/外観.jpg',
    gallery: [
      'img/外観.jpg',
      'img/Top.jpg'
    ],
    hours: '11:30〜14:00',
    place: '大学近くの通り沿い（屋台）',
    desc: 'スパイシーなタコスで人気の屋台です。',
    mapUrl:
      'https://www.google.com/maps?q=名城大学&hl=ja&z=16&output=embed'
  },

  {
    id: 5,
    name: '定食すぎだま',
    genre: '定食',
    area: 'outside',
    img: 'img/Top.jpg',
    gallery: [
      'img/Top.jpg',
      'img/外観.jpg'
    ],
    hours: '11:00〜21:00',
    place: '名城大学 周辺エリア',
    desc: '家庭的な味付けの定食が人気です。',
    mapUrl:
      'https://www.google.com/maps?q=名城大学&hl=ja&z=16&output=embed'
  },

  {
    id: 6,
    name: '英吉家',
    genre: 'ラーメン',
    area: 'outside', // 'inside' or 'outside'
    img: 'img/hideyoshi.jpg', // 一覧カード用のサムネ
    gallery: [
      'img/hideyoshi.jpg',
      'img/外観.jpg'
    ],
    hours: '11:00〜20:00',
    place: '名城大学 東門から徒歩1分（仮）',
    desc: '自家製スープが売りのラーメン店です。',
    mapUrl:
      'https://www.google.com/maps?q=横浜家系ラーメン英吉家 名古屋市天白区塩釜口２丁目８０１&hl=ja&z=16&output=embed'
  },

];



