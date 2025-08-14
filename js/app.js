// app.js: 画面の動作を担当するJavaScript

// ---------- ドロワーメニュー制御 ----------
const menuBtn = document.getElementById('menuBtn'); // ハンバーガーの要素を取得
const drawer = document.getElementById('drawer'); // ドロワーナビを取得
menuBtn.addEventListener('click', () => drawer.classList.toggle('open')); // クリックで開閉を切り替え
drawer.addEventListener('click', e => { if (e.target.matches('.drawer-link')) drawer.classList.remove('open'); }); // リンク押下で閉じる

// ---------- ヒーロースライダー（自動＆スワイプ） ----------
const slides = [...document.querySelectorAll('.slide')]; // スライド画像を配列で取得
let idx = 0; // 現在のスライド番号を保持
function show(i){ slides.forEach((s,n)=>s.classList.toggle('active', n===i)); } // 指定番号だけ表示する関数
setInterval(()=>{ idx = (idx+1)%slides.length; show(idx); }, 4000); // 4秒ごとに自動で次へ
let startX = 0; // スワイプ開始位置を保持
document.getElementById('slider').addEventListener('touchstart',e=>startX=e.touches[0].clientX); // 指で触れた位置を記録
document.getElementById('slider').addEventListener('touchend',e=>{ // 指を離したら判定
  const diff = e.changedTouches[0].clientX - startX; // 横移動量を計算
  if(Math.abs(diff)>40){ idx = (idx + (diff<0?1:-1) + slides.length) % slides.length; show(idx); } // 左右に応じてスライド変更
}); // スワイプ処理の終了

// ---------- 店舗データ（最小サンプル5件） ----------
const SHOPS = [ // カード生成・検索・フィルタに使う配列
  { id:1, name:'麺屋ドラゴン', genre:'ラーメン', area:'outside', img:'img/ra-men.jpg', page:'shops/shop1.html' }, // 1件目：学外・ラーメン
  { id:2, name:'学食カフェ', genre:'定食', area:'inside',  img:'img/外観.jpg',    page:'shops/shop2.html' }, // 2件目：学内・定食
  { id:3, name:'コモンホール', genre:'カフェ', area:'inside', img:'img/Top.jpg',     page:'shops/shop3.html' }, // 3件目：学内・カフェ
  { id:4, name:'屋台タコス',  genre:'屋台',   area:'outside', img:'img/外観.jpg',    page:'shops/shop4.html' }, // 4件目：学外・屋台
  { id:5, name:'定食すぎだま', genre:'定食', area:'outside', img:'img/Top.jpg',     page:'shops/shop5.html' }, // 5件目：学外・定食
]; // データ定義の終了

// ---------- カードを2行に振り分けて描画 ----------
const row1 = document.getElementById('row1'); // 1行目の要素を取得
const row2 = document.getElementById('row2'); // 2行目の要素を取得
function render(list){ // 描画用の関数
  row1.innerHTML = ''; row2.innerHTML = ''; // いったん両行を空にする
  list.forEach((s,i)=>{ // 各店舗について処理
    const card = document.createElement('a'); // クリックで詳細へ飛ぶカードを作成
    card.className = 'shop-card'; // カード用のクラスを付与
    card.href = s.page; // 遷移先ページのパスを設定
    card.dataset.area = s.area; // 学内・学外の判定用に属性を持たせる
    card.dataset.name = (s.name + ' ' + s.genre).toLowerCase(); // 検索用の文字列を格納（小文字）
    card.innerHTML = `<!-- HTMLをテンプレートで埋め込み -->
      <img src="${s.img}" alt="${s.name}"> <!-- サムネ画像 -->
      <div class="meta"> <!-- 下部情報エリア -->
        <strong>${s.name}</strong> <!-- 店名表示 -->
        <span class="badge">${s.area==='inside'?'学内':'学外'}</span> <!-- 区分バッジ -->
      </div>`; // テンプレート終了
    (i%2?row2:row1).appendChild(card); // 偶奇で1行目と2行目へ交互に配置
  }); // ループ終了
} // レンダリング関数の終了
render(SHOPS); // 初期描画を実行

// ---------- 検索ボックス（名前・ジャンルに部分一致） ----------
const searchInput = document.getElementById('searchInput'); // 入力欄を取得
function applySearch(){ // 検索フィルタ関数
  const q = searchInput.value.trim().toLowerCase(); // 入力文字列を小文字で取得
  document.querySelectorAll('.shop-card').forEach(c=>{ // すべてのカードを走査
    const hit = c.dataset.name.includes(q); // データ文字列に含まれるか判定
    c.style.display = hit ? '' : 'none'; // 一致すれば表示・なければ非表示
  }); // 走査終了
} // 関数終了
searchInput.addEventListener('input', applySearch); // 入力のたびに適用

// ---------- 4ボタンのフィルタ（全て/学内/学外/マップ） ----------
document.querySelectorAll('.action-btn[data-filter]').forEach(btn=>{ // フィルタ属性のあるボタンを取得
  btn.addEventListener('click', ()=>{ // ボタンクリックで処理
    const mode = btn.dataset.filter; // 押されたモードを取得
    document.querySelectorAll('.shop-card').forEach(c=>{ // すべてのカードに対して
      const visible = (mode==='all') || (c.dataset.area===mode); // 表示条件を作成
      c.style.display = visible ? '' : 'none'; // 条件に応じて表示を切り替え
    }); // ループ終了
    searchInput.value = ''; // ボタンでのフィルタ時は検索入力をリセット
  }); // クリックイベント終了
}); // ボタン設定の終了
