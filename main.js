// --- AC（アピールチャンス）設定（timeベース完全版） ---
// --- 曲設定 ---
const SONGS = [
  {
    id: "SStar",
    title: "ユメ語るよりユメ歌おう",
    bgmSrc: "YumeYume.wav",
    jacketId: "jacketImg",
    acList: [
  {
    startTime: 12.99,
    endTime: 24.31,
    type: "score",
    target: 1000000,
    rewardScore: 500000,
    rewardSP: 3600,
    state: "waiting",
    progress: 0,
    cleared: false,
    desc: "スコアを100万獲得する",
    tapScore: 0,
    spScore: 0
  },
  {
    startTime: 39.78,
    endTime: 59.22,
    type: "sp",
    target: 3,
    rewardScore: 500000,
    rewardSP: 3600,
    state: "waiting",
    progress: 0,
    cleared: false,
    desc: "SPを3回発動する",
    tapScore: 0,
    spScore: 0
  },
  {
    startTime: 69.22,
    endTime: 72.61,
    type: "score",
    target: 750000,
    rewardScore: 1000000,
    rewardSP: 3600,
    state: "waiting",
    progress: 0,
    cleared: false,
    desc: "スコアを75万獲得する",
    tapScore: 0,
    spScore: 0
  }
    ],
    notesChart: [
  {"time": 0.54, "side": "left"},
  {"time": 1.11, "side": "left"},
  {"time": 1.48, "side": "right"},
  {"time": 1.86, "side": "right"},
  {"time": 2.61, "side": "right"},
  {"time": 2.99, "side": "right"},
  {"time": 3.18, "side": "left"},
  {"time": 3.55, "side": "left"},
  {"time": 4.12, "side": "left"},
  {"time": 4.50, "side": "right"},
  {"time": 4.69, "side": "left"},
  {"time": 4.87, "side": "right"},
  {"time": 4.87, "side": "left"},//追加
  {"time": 5.25, "side": "left"},
  {"time": 5.63, "side": "left"},
  {"time": 5.63, "side": "right"},//追加
  {"time": 6.57, "side": "left"},
  {"time": 7.14, "side": "left"},
  {"time": 7.52, "side": "right"},
  {"time": 7.89, "side": "right"},
  {"time": 8.65, "side": "left"},
  {"time": 9.03, "side": "left"},
  {"time": 9.22, "side": "right"},
  {"time": 9.59, "side": "right"},
  {"time": 10.16, "side": "left"},
  {"time": 10.54, "side": "right"},
  {"time": 10.91, "side": "left"},
  {"time": 11.48, "side": "right"},
  {"time": 12.23, "side": "right"},
  {"time": 12.61, "side": "left"},
  {"time": 12.99, "side": "right"},
  {"time": 13.37, "side": "left"},
  {"time": 13.74, "side": "right"},
  {"time": 13.93, "side": "left"},
  {"time": 14.87, "side": "left"},
  {"time": 15.25, "side": "right"},
  {"time": 15.44, "side": "right"},
  {"time": 15.63, "side": "left"},
  {"time": 16.01, "side": "right"},
  {"time": 16.01, "side": "left"},//追加
  {"time": 16.39, "side": "left"},
  {"time": 16.95, "side": "right"},
  {"time": 17.33, "side": "left"},
  {"time": 17.52, "side": "right"},
  {"time": 17.89, "side": "right"},
  {"time": 18.27, "side": "right"},
  {"time": 18.27, "side": "left"},//追加
  {"time": 18.65, "side": "left"},
  {"time": 19.03, "side": "right"},
  {"time": 19.40, "side": "left"},
  {"time": 19.78, "side": "right"},
  {"time": 19.97, "side": "left"},
  {"time": 20.91, "side": "left"},
  {"time": 21.29, "side": "right"},
  {"time": 21.48, "side": "right"},
  {"time": 21.67, "side": "left"},
  {"time": 22.05, "side": "right"},
  {"time": 22.05, "side": "left"},//追加
  {"time": 22.43, "side": "left"},
  {"time": 22.43, "side": "right"},//追加
  {"time": 22.99, "side": "right"},
  {"time": 23.37, "side": "left"},
  {"time": 23.55, "side": "right"},
  {"time": 23.93, "side": "left"},
  {"time": 24.12, "side": "left"},
  {"time": 24.31, "side": "right"},
  {"time": 24.69, "side": "left"},
  {"time": 25.45, "side": "right"},
  {"time": 25.82, "side": "right"},
  {"time": 26.20, "side": "left"},
  {"time": 26.76, "side": "left"},
  {"time": 27.33, "side": "right"},
  {"time": 27.71, "side": "right"},
  {"time": 28.09, "side": "right"},
  {"time": 28.28, "side": "right"},
  {"time": 28.65, "side": "left"},
  {"time": 28.84, "side": "right"},
  {"time": 29.22, "side": "left"},
  {"time": 29.78, "side": "left"},
  {"time": 30.35, "side": "right"},
  {"time": 30.73, "side": "right"},
  {"time": 31.11, "side": "left"},
  {"time": 31.29, "side": "right"},
  {"time": 32.23, "side": "left"},
  {"time": 32.61, "side": "right"},
  {"time": 32.80, "side": "left"},
  {"time": 33.18, "side": "right"},
  {"time": 33.37, "side": "right"},
  {"time": 33.74, "side": "right"},
  {"time": 34.50, "side": "left"},
  {"time": 34.87, "side": "left"},
  {"time": 35.25, "side": "right"},
  {"time": 36.01, "side": "left"},
  {"time": 36.77, "side": "right"},
  {"time": 36.77, "side": "left"},//追加
  {"time": 37.14, "side": "right"},
  {"time": 37.33, "side": "left"},
  {"time": 37.71, "side": "left"},
  {"time": 38.08, "side": "right"},
  {"time": 38.46, "side": "right"},
  {"time": 38.65, "side": "right"},
  {"time": 39.03, "side": "left"},
  {"time": 39.41, "side": "right"},
  {"time": 39.78, "side": "left"},
  {"time": 40.16, "side": "right"},
  {"time": 40.54, "side": "left"},
  {"time": 40.91, "side": "right"},
  {"time": 41.11, "side": "left"},
  {"time": 41.48, "side": "left"},
  {"time": 41.67, "side": "right"},
  {"time": 42.05, "side": "left"},
  {"time": 42.05, "side": "right"},//追加
  {"time": 42.80, "side": "left"},
  {"time": 43.18, "side": "right"},
  {"time": 43.55, "side": "left"},
  {"time": 43.75, "side": "left"},
  {"time": 44.12, "side": "left"},
  {"time": 44.31, "side": "right"},
  {"time": 44.69, "side": "right"},
  {"time": 44.88, "side": "right"},
  {"time": 45.07, "side": "left"},
  {"time": 45.44, "side": "right"},
  {"time": 45.63, "side": "left"},
  {"time": 46.57, "side": "left"},
  {"time": 46.96, "side": "right"},
  {"time": 47.14, "side": "left"},
  {"time": 47.52, "side": "right"},
  {"time": 47.90, "side": "right"},
  {"time": 48.27, "side": "left"},
  {"time": 48.46, "side": "right"},
  {"time": 48.84, "side": "left"},
  {"time": 49.03, "side": "left"},
  {"time": 49.22, "side": "right"},
  {"time": 49.59, "side": "right"},
  {"time": 49.76, "side": "left"},
  {"time": 49.97, "side": "right"},
  {"time": 50.35, "side": "left"},
  {"time": 50.35, "side": "right"},//追加
  {"time": 50.92, "side": "right"},
  {"time": 50.92, "side": "left"},//追加
  {"time": 51.29, "side": "left"},
  {"time": 51.48, "side": "right"},
  {"time": 51.86, "side": "left"},
  {"time": 52.23, "side": "right"},
  {"time": 52.61, "side": "left"},
  {"time": 52.99, "side": "right"},
  {"time": 53.18, "side": "left"},
  {"time": 53.56, "side": "left"},
  {"time": 53.75, "side": "right"},
  {"time": 54.12, "side": "left"},
  {"time": 54.12, "side": "right"},//追加
  {"time": 54.87, "side": "left"},
  {"time": 55.25, "side": "right"},
  {"time": 55.63, "side": "left"},
  {"time": 55.82, "side": "left"},
  {"time": 56.20, "side": "left"},
  {"time": 56.39, "side": "right"},
  {"time": 56.76, "side": "right"},
  {"time": 57.14, "side": "left"},
  {"time": 57.14, "side": "right"},//追加
  {"time": 57.90, "side": "right"},
  {"time": 58.27, "side": "right"},
  {"time": 58.65, "side": "left"},
  {"time": 59.03, "side": "right"},
  {"time": 59.22, "side": "left"},
  {"time": 59.60, "side": "left"},
  {"time": 59.78, "side": "right"},
  {"time": 60.16, "side": "left"},
  {"time": 60.54, "side": "right"},
  {"time": 60.73, "side": "right"},
  {"time": 60.92, "side": "right"},
  {"time": 61.29, "side": "right"},
  {"time": 61.67, "side": "left"},
  {"time": 61.86, "side": "left"},
  {"time": 62.05, "side": "right"},
  {"time": 62.43, "side": "left"},
  {"time": 62.80, "side": "right"},
  {"time": 62.99, "side": "left"},
  {"time": 63.37, "side": "left"},
  {"time": 63.56, "side": "right"},
  {"time": 63.94, "side": "right"},
  {"time": 64.69, "side": "right"},
  {"time": 65.07, "side": "right"},
  {"time": 65.45, "side": "left"},
  {"time": 65.82, "side": "right"},
  {"time": 66.20, "side": "left"},
  {"time": 66.39, "side": "right"},
  {"time": 66.57, "side": "right"},
  {"time": 66.95, "side": "left"},
  {"time": 67.52, "side": "right"},
  {"time": 67.90, "side": "left"},
  {"time": 68.27, "side": "right"},
  {"time": 69.22, "side": "left"},
  {"time": 69.60, "side": "right"},
  {"time": 69.97, "side": "left"},
  {"time": 69.97, "side": "right"},//追加
  {"time": 70.54, "side": "right"},
  {"time": 71.11, "side": "right"},
  {"time": 71.11, "side": "left"},//追加
  {"time": 71.48, "side": "left"},
  {"time": 71.86, "side": "right"},
  {"time": 72.23, "side": "left"},
  {"time": 72.43, "side": "left"},
  {"time": 72.61, "side": "right"},
  {"time": 72.99, "side": "left"},
  {"time": 73.56, "side": "left"},
  {"time": 74.12, "side": "right"},
  {"time": 74.50, "side": "left"},
  {"time": 74.87, "side": "right"},
  {"time": 75.26, "side": "right"},
  {"time": 76.01, "side": "right"},
  {"time": 76.39, "side": "right"},
  {"time": 76.76, "side": "left"},
  {"time": 77.14, "side": "left"},
  {"time": 77.33, "side": "right"},
  {"time": 77.71, "side": "left"},
  {"time": 77.90, "side": "left"},
  {"time": 78.28, "side": "right"},
  {"time": 78.65, "side": "right"},
  {"time": 78.84, "side": "right"},
  {"time": 79.03, "side": "left"},
  {"time": 79.03, "side": "right"},//追加
  {"time": 79.56, "side": "left"},
  {"time": 79.97, "side": "right"},
  {"time": 80.35, "side": "right"},
  {"time": 81.11, "side": "left"},
  {"time": 81.48, "side": "left"},
  {"time": 81.67, "side": "right"},
  {"time": 82.05, "side": "right"},
  {"time": 82.61, "side": "left"},
  {"time": 82.61, "side": "right"},//追加 
  {"time": 82.99, "side": "right"},
  {"time": 83.37, "side": "left"},
  {"time": 83.37, "side": "right"},//追加
  {"time": 83.93, "side": "right"},
  {"time": 84.31, "side": "right"},
  {"time": 84.88, "side": "left"},
  {"time": 85.07, "side": "left"},
  {"time": 85.44, "side": "right"},
  {"time": 85.82, "side": "left"},
  {"time": 86.20, "side": "right"},
  {"time": 86.39, "side": "left"}
    ]
  }
];
let currentSong = SONGS[0];

// --- 必須グローバル変数 ---
const GAS_ENDPOINT = "https://script.google.com/macros/s/AKfycbz2gsX2XXdV0OOvHtPF0AsHkTBvrCQ_8_1zYxVQ0bki_CoAlFy25QbsEryqTe-dZJJu/exec";
const cvs = document.getElementById('game');
const ctx = cvs.getContext('2d');
const rotateMsg = document.getElementById('rotateMsg');
const startBtn = document.getElementById('startBtn');
const retryBtn = document.getElementById('retryBtn');
let reseedBtn = document.getElementById('reseedBtn');
if (!reseedBtn) {
    reseedBtn = document.createElement('button');
    reseedBtn.id = 'reseedBtn';
    document.body.appendChild(reseedBtn);
}
reseedBtn.textContent = '乱数再現';
reseedBtn.style.position = 'absolute';
// 画面右下に配置
reseedBtn.style.bottom = '20px';
reseedBtn.style.right = '20px';
reseedBtn.style.left = 'auto';
reseedBtn.style.transform = 'none';
reseedBtn.style.padding = '10px 20px';
reseedBtn.style.fontSize = '16px';
reseedBtn.style.backgroundColor = 'green';
reseedBtn.style.color = 'white';
reseedBtn.style.border = 'none';
reseedBtn.style.borderRadius = '5px';
reseedBtn.style.cursor = 'pointer';
reseedBtn.style.display = 'none'; // 最初は非表示

const bgm = document.getElementById('bgm');
const bgimg = document.getElementById('bgimg');
const titleImg = document.getElementById('titleImg');
const jacketImg = document.getElementById('jacketImg');
const titleBgm = document.getElementById('titleBgm');
bgm.volume = 0.1;
titleBgm.volume = 0.1;

// --- JSONP ---
function jsonp(url, timeoutMs = 8000) {
  return new Promise((resolve, reject) => {
    const cbName = "__jsonp_cb_" + Math.random().toString(36).slice(2);
    const sep = url.includes("?") ? "&" : "?";
    const full = `${url}${sep}callback=${encodeURIComponent(cbName)}`;

    let done = false;
    const script = document.createElement("script");
    const timer = setTimeout(() => {
      if (done) return;
      done = true;
      cleanup();
      reject(new Error("timeout"));
    }, timeoutMs);

    function cleanup() {
      clearTimeout(timer);
      try { delete window[cbName]; } catch (_) { window[cbName] = undefined; }
      if (script.parentNode) script.parentNode.removeChild(script);
    }

    window[cbName] = (data) => {
      if (done) return;
      done = true;
      cleanup();
      resolve(data);
    };

    script.onerror = () => {
      if (done) return;
      done = true;
      cleanup();
      reject(new Error("network error"));
    };

    script.src = full;
    document.body.appendChild(script);
  });
}

// --- ランキング取得（※名前は fetchTopScores）---
async function fetchTopScores(limit) {
  const url = (typeof limit === 'number')
    ? `${GAS_ENDPOINT}?action=top&limit=${encodeURIComponent(limit)}`
    : `${GAS_ENDPOINT}?action=top`;
  const res = await jsonp(url);
  // 曲ごとにタグで分離：現在の曲のスコアのみ抽出し、タグを名前から取り除く
  if (res && res.ok && Array.isArray(res.data)) {
    const tag = ` [${currentSong.id}]`;
    res.data = res.data
      .filter(r => String(r.name ?? '').endsWith(tag))
      .map(r => ({ ...r, name: String(r.name).slice(0, -tag.length) }));
  }
  return res;
}

// --- スコア送信（曲タグを名前に付加して曲別管理） ---
async function submitScore(name, score, seed) {
  const taggedName = name + ` [${currentSong.id}]`;
  const url =
    `${GAS_ENDPOINT}?action=submit` +
    `&name=${encodeURIComponent(taggedName)}` +
    `&score=${encodeURIComponent(score)}` +
    `&seed=${encodeURIComponent(seed)}` +
    `&ua=${encodeURIComponent(navigator.userAgent)}`;
  return await jsonp(url);
}

let rankingBtn = document.getElementById('rankingBtn');
if (!rankingBtn) {
  rankingBtn = document.createElement('button');
  rankingBtn.id = 'rankingBtn';
  rankingBtn.textContent = 'ランキング';
  document.body.appendChild(rankingBtn);
}
rankingBtn.style.position = 'absolute';
rankingBtn.style.left = '50%';
rankingBtn.style.transform = 'translateX(-50%)';
rankingBtn.style.right = 'auto';
rankingBtn.style.top = 'auto';
rankingBtn.style.padding = '0.45em 2em';
rankingBtn.style.fontSize = '0.95rem';
rankingBtn.style.backgroundColor = '#1e293b';
rankingBtn.style.color = 'white';
rankingBtn.style.border = '1px solid rgba(255,255,255,0.18)';
rankingBtn.style.borderRadius = '8px';
rankingBtn.style.cursor = 'pointer';
rankingBtn.style.letterSpacing = '0.04em';
rankingBtn.style.boxShadow = '0 2px 10px rgba(0,0,0,0.4)';
rankingBtn.style.zIndex = '100';
rankingBtn.style.display = 'none';

let rankingModal = document.getElementById('rankingModal');
if (!rankingModal) {
  rankingModal = document.createElement('div');
  rankingModal.id = 'rankingModal';
  rankingModal.style.position = 'absolute';
  rankingModal.style.left = '50%';
  rankingModal.style.top = '50%';
  rankingModal.style.transform = 'translate(-50%, -50%)';
  rankingModal.style.minWidth = '520px';
  rankingModal.style.maxWidth = '80vw';
  rankingModal.style.background = 'rgba(0,0,0,0.82)';
  rankingModal.style.color = '#fff';
  rankingModal.style.border = '1px solid rgba(255,255,255,0.25)';
  rankingModal.style.borderRadius = '10px';
  rankingModal.style.padding = '14px 16px';
  rankingModal.style.zIndex = '9999';
  rankingModal.style.display = 'none';

  rankingModal.innerHTML = `
  <div style="display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:10px;">
    <div style="font-weight:800; font-size:18px;" id="rankingTitle">ランキング</div>
    <button id="rankingCloseBtn"
      style="padding:6px 10px; background:#111827; color:#fff; border:1px solid rgba(255,255,255,0.25); border-radius:8px; cursor:pointer;">
      閉じる
    </button>
  </div>

  <!-- スクロール枠：見えるのはだいたいTOP5分 -->
  <div id="rankingScroll"
    style="
      max-height: 240px;       /* ★ここが表示行数に相当（あとで調整） */
      overflow-y: auto;
      padding-right: 6px;      /* スクロールバー分 */
    ">
    <div id="rankingTable"
      style="
        display:grid;
        grid-template-columns: 72px 1fr 160px;
        gap:6px 10px;
        align-items:center;
        font-size:16px;
      ">
    </div>
  </div>
`;
  document.body.appendChild(rankingModal);

  rankingModal.querySelector('#rankingCloseBtn').onclick = () => {
  rankingModal.style.display = 'none';
　};
}

function renderRankingTable(rows) {
  const table = rankingModal.querySelector('#rankingTable');

  const headerCell = (text, align = 'left') =>
    `<div style="font-weight:800; opacity:0.95; padding-bottom:6px; border-bottom:1px dashed rgba(255,255,255,0.35); text-align:${align};">
      ${text}
     </div>`;

  const cell = (text, align = 'left') =>
    `<div style="padding-top:6px; text-align:${align}; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
      ${text}
     </div>`;

  let html = '';
  html += headerCell('順位');
  html += headerCell('名前');
  html += headerCell('ベストスコア', 'right');

  for (const r of rows) {
    const rankText = `${r.rank}位`;
    const nameText = String(r.name ?? '');
    const scoreNum = Number(r.score ?? 0);
    const scoreText = Number.isFinite(scoreNum) ? scoreNum.toLocaleString('ja-JP') : '';

    html += cell(rankText);
    html += cell(escapeHtml_(nameText));
    html += cell(scoreText, 'right');
  }

  table.innerHTML = html;
}

function escapeHtml_(s) {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

rankingBtn.onclick = async () => {
  try {
    const res = await fetchTopScores();
    if (!res.ok) throw new Error(res.error || 'unknown');

    const rows = (res.data && res.data.length) ? res.data : [];
    renderRankingTable(rows);

    const titleEl = rankingModal.querySelector('#rankingTitle');
    if (titleEl) titleEl.textContent = '全体ランキング';
    rankingModal.style.display = 'block';
    const sc = rankingModal.querySelector('#rankingScroll');
    if (sc) sc.scrollTop = 0;
  } catch (e) {
    alert('ランキング取得に失敗しました: ' + e.message);
  }
};

let saveScoreBtn = document.getElementById('saveScoreBtn');
if (!saveScoreBtn) {
  saveScoreBtn = document.createElement('button');
  saveScoreBtn.id = 'saveScoreBtn';
  saveScoreBtn.textContent = 'スコア送信';
  document.body.appendChild(saveScoreBtn);
}
saveScoreBtn.style.position = 'absolute';
saveScoreBtn.style.right = '20px';
saveScoreBtn.style.top = '50%';
saveScoreBtn.style.transform = 'translateY(-50%)';
saveScoreBtn.style.padding = '10px 20px';
saveScoreBtn.style.fontSize = '16px';
saveScoreBtn.style.backgroundColor = '#2563eb';
saveScoreBtn.style.color = 'white';
saveScoreBtn.style.border = 'none';
saveScoreBtn.style.borderRadius = '6px';
saveScoreBtn.style.cursor = 'pointer';
saveScoreBtn.style.display = 'none';

saveScoreBtn.onclick = async () => {
  const name = prompt('名前を入力してください（10文字まで）');
  if (!name) return;
  try {
    const res = await submitScore(name, score, lastGameSeed);
    if (!res.ok) throw new Error(res.error || 'unknown');
    alert('送信しました！');
  } catch (e) {
    alert('送信に失敗しました: ' + e.message);
  }
};

// --- 乱数生成器 ---
let _seed = 0;
function setSeed(s) {
  _seed = s;
}
function seededRandom() {
  _seed = (_seed * 9301 + 49297) % 233280;
  return _seed / 233280;
}
let lastGameSeed = 0; // 直前のゲームのシードを保存


// --- グローバル変数 ---
let chartIndex = 0, R=30, leftTarget={x:0,y:0,r:0}, rightTarget={x:0,y:0,r:0}, spRadius=80;
let SP_MAX=6000, spValue=0, spFullNotified=false, score=0, combo=0, notes=[], frame=0, noteDuration=55;
let bestScore = Number(localStorage.getItem('bestScore_' + currentSong.id)) || 0;
let spFlashTimer=0, spRingTimer=0, spRingSpeed=20, spRingRange=40, spBoostTimer=0, spCountdownTimer=0, spCountdownValue=0;
let popups=[], hitRings=[], lastInputWasTouch=false;
let gameState = "init", countdownValue = 3, totalNotesSpawned = 0, clearStartFrame = null, resultStartFrame = null;
let skillHistory = [], appealBoostNotes = 0, skillActivationCount = 0, spUseCount = 0, progressDisplay = 0;
let judgeCount = {CRITICAL:0,WONDERFUL:0,GREAT:0,NICE:0,BAD:0,MISS:0};
let spScoreBuffNotes = 0, noteCounter = 0, totalSPUsed = 0, permanentScoreBuff = 0, acFailFlashTimer = 0, waitingClearFrame = null;
let audioContext, tapBuffer = null;

// --- スタミナシステム ---
const STAMINA_MAX = 100000;
let stamina = STAMINA_MAX;
let damageReduceNotes = 0;
let skillRateBoostNotes = 0;

// --- 作戦切り替えシステム ---
let currentStrategy = "red";
let strategyChangeCooldown = 0;
const STRATEGY_CHANGE_NOTES = 5;
let notesProcessedSinceSwitch = 0;
let strategyBadgeOffsetX = 0; // バッジスライドアニメーション用（0=定位置、負=画面外左）
  
// ノーツ到達までの秒数
const noteTravelSec = noteDuration / 60;
  
// --- 効果音ロード ---
async function loadTapSE() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  await audioContext.resume();
  if (!tapBuffer) {
    const response = await fetch('tap.wav');
    const arrayBuffer = await response.arrayBuffer();
    tapBuffer = await audioContext.decodeAudioData(arrayBuffer);
  }
}

//
function findClosestNoteIndex(time) {
  let minDiff = Infinity;
  let idx = -1;
  for (let i = 0; i < currentSong.notesChart.length; i++) {
    const diff = Math.abs(currentSong.notesChart[i].time - time);
    if (diff < minDiff) {
      minDiff = diff;
      idx = i;
    }
  }
  return idx;
}
  
// --- assignACNoteIndexes ---
function assignACNoteIndexes() {
  for (const ac of currentSong.acList) {
    // 開始ノーツidx: startTime以上で最初
    ac.startIdx = currentSong.notesChart.findIndex(n => n.time >= ac.startTime);
    // 終了ノーツidx: endTime以下で最後
    let lastIdx = -1;
    for (let i = 0; i < currentSong.notesChart.length; i++) {
      if (currentSong.notesChart[i].time <= ac.endTime) lastIdx = i;
    }
    ac.endIdx = lastIdx;
  }
}
  
// --- コンボボーナス倍率計算 ---
function getComboBonus(combo) {
  if (combo >= 71) return 1.04;
  if (combo >= 51) return 1.03;
  if (combo >= 31) return 1.02;
  if (combo >= 11) return 1.01;
  return 1.0;
}

// --- スタミナ関連関数 ---
function getNoteDamage() { return 200; }

function getStaminaScoreMult() {
  const ratio = stamina / STAMINA_MAX;
  if (ratio >= 0.70) return 1.0;
  if (ratio >= 0.30) return 0.8;
  if (ratio > 0)     return 0.6;
  return 0.0;
}

function applyACFailDamage() {
  stamina = Math.max(0, stamina - 25000);
}

function applyNoteDamage(nowTime) {
  if (isACClearedNowByTime(nowTime)) return;
  let damage = getNoteDamage();
  if (isACActiveByTime(nowTime)) damage = Math.floor(damage * 1.1);
  if (damageReduceNotes > 0) {
    damage = Math.floor(damage * 0.5);
    damageReduceNotes--;
  }
  stamina = Math.max(0, stamina - damage);
}

// 効果音再生
function playTapSE() {
  if (!tapBuffer) return;
  const source = audioContext.createBufferSource();
  source.buffer = tapBuffer;
  source.connect(audioContext.destination);
  source.start(0);
}
  
// --- AC（アピールチャンス）関連（進捗保存のため追加） ---
  currentSong.acList.forEach(ac => {
    ac.tapScore = 0; // タップで得たスコア
    ac.spScore = 0;  // SP発動で得たスコア
  });
  
// --- AC取得関数 ---
function getActiveACByTime(nowTime) {
  return currentSong.acList.find(ac =>
    (ac.state === "active" || (ac.state === "cleared" && nowTime >= ac.startTime + noteTravelSec && nowTime <= ac.endTime + noteTravelSec))
    && nowTime >= ac.startTime + noteTravelSec && nowTime <= ac.endTime + noteTravelSec
  );
}
function isACActiveByTime(nowTime) {
  return !!getActiveACByTime(nowTime);
}
function isACClearedNowByTime(nowTime) {
  return !!currentSong.acList.find(ac =>
    ac.state === "cleared" && nowTime >= ac.startTime + noteTravelSec && nowTime <= ac.endTime + noteTravelSec
  );
}
  
// --- レイアウト・ターゲット位置 ---
function resizeCanvas(){
  const landscape = window.innerWidth >= window.innerHeight;
  if(!landscape){
    rotateMsg.style.display='flex';
    cvs.style.display='none';
    startBtn.style.display='none';
    retryBtn.style.display='none';
    reseedBtn.style.display='none';
    rankingBtn.style.display = 'none';
  　saveScoreBtn.style.display = 'none';
    return;
  }
  rotateMsg.style.display='none';
  cvs.style.display='block';
  // ランキングボタンはタイトル画面のみ表示（曲選択画面では非表示）
  rankingBtn.style.display = (gameState === "init") ? 'block' : 'none';
　saveScoreBtn.style.display = (gameState === "result") ? 'block' : 'none';
  startBtn.style.display = (gameState === "init" || gameState === "songSelect") ? 'block' : 'none';
  startBtn.textContent = gameState === "songSelect" ? 'PLAY' : 'S.T.A.R.T!!';
  if(gameState==="result") {
    retryBtn.style.display='block';
    reseedBtn.style.display='block';
  } else {
    retryBtn.style.display='none';
    reseedBtn.style.display='none';
  }
  cvs.width = window.innerWidth;
  cvs.height= window.innerHeight;
  const minDim=Math.min(cvs.width, cvs.height);
  R = Math.max(18, Math.round(minDim*0.04));
  const laneGap = R*4.5;
  const targetY = Math.round(cvs.height*0.7);
  leftTarget  ={x: Math.round(cvs.width/2 - laneGap), y: targetY, r: R};
  rightTarget ={x: Math.round(cvs.width/2 + laneGap), y: targetY, r: R};
  spRadius = Math.max(64, Math.round(minDim*0.12));

  // --- ボタン位置の動的設定 ---
  if (gameState === "init") {
    // タイトル画面: S.T.A.R.T!! ボタンを中央より下に、ランキングをその下に配置
    const startBtnTop = Math.round(cvs.height * 0.67);
    startBtn.style.top = startBtnTop + 'px';
    startBtn.style.left = '50%';
    startBtn.style.transform = 'translateX(-50%)';
    rankingBtn.style.top = (startBtnTop + 54) + 'px';
    rankingBtn.style.left = '50%';
    rankingBtn.style.transform = 'translateX(-50%)';
    rankingBtn.style.right = 'auto';
  } else if (gameState === "songSelect") {
    // 曲選択画面: PLAYボタンを画面下部に小さく配置
    startBtn.style.top = Math.round(cvs.height * 0.86) + 'px';
    startBtn.style.left = '50%';
    startBtn.style.transform = 'translateX(-50%)';
  }
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function cubicBezier(p0,p1,p2,p3,t){const u=1-t;return {x:u*u*u*p0.x+3*u*u*t*p1.x+3*u*t*t*p2.x+t*t*t*p3.x,y:u*u*u*p0.y+3*u*u*t*p1.y+3*u*t*t*p2.y+t*t*t*p3.y};}
function makePath(side){const target= side==='left'? leftTarget : rightTarget;const startX = side==='left' ? (-R*2-10) : (cvs.width+R*2+10);const start={x:startX, y: target.y - Math.max(180, R*6)};const c1={x: side==='left' ? target.x - Math.max(200,R*6) : target.x + Math.max(200,R*6), y: target.y - Math.max(200,R*6)};const c2={x: side==='left' ? target.x - Math.max(60,R*2)  : target.x + Math.max(60,R*2),  y: target.y - Math.max(40,R*1.3)};const end={x: target.x, y: target.y};return {p0:start,p1:c1,p2:c2,p3:end};}
// --- spawnNoteにchartIdxを持たせる ---
function spawnNote(side, chartIdx){
  notes.push({
    side,
    t:0,
    duration:noteDuration,
    path:makePath(side),
    chartIdx: chartIdx // どの譜面ノーツか記憶
  });
}
function addPopup(text,x,y,ms,type){const d=Math.max(1,Math.round(ms/16.67));popups.push({text,x,y,timer:d,duration:d,type});}
function triggerSPVisual(){ spFlashTimer=10; spRingTimer=spRingSpeed; }
  
// --- AC進行チェック（nowTimeで判定） ---
function updateACOnTap(pointsWithCombo, nowTime) {
  noteCounter++;
  currentSong.acList.forEach(ac => {
    
    if (ac.state === "active" && nowTime >= ac.startTime + noteTravelSec && nowTime <= ac.endTime + noteTravelSec) {
      if (ac.type === "score") {
        ac.tapScore += pointsWithCombo;
        ac.progress = ac.tapScore + ac.spScore;
      }
      // --- AC成功時バフ抽選 ---
      if (!ac.cleared && ac.progress >= ac.target) {
        ac.cleared = true;
        ac.state = "cleared";
        score += ac.rewardScore;
        spValue = Math.min(SP_MAX, spValue + ac.rewardSP);
        skillHistory.unshift({text: `ACクリア報酬 ${ac.rewardScore}`, life:180});
        if(skillHistory.length>5) skillHistory.pop();
        if(seededRandom() < 0.3){
          permanentScoreBuff++;
          skillHistory.unshift({text:"[アピール増加永続 5%]", life:180});
          if(skillHistory.length>5) skillHistory.pop();
        }
      }
    }
    // --- AC失敗判定と赤フラッシュ演出 ---
    if (
      ac.state === "active" &&
      nowTime > ac.endTime + noteTravelSec && // AC時間を過ぎた
      !ac.cleared             // まだクリアしてない
    ) {
      ac.state = "ended";
      applyACFailDamage();
      acFailFlashTimer = 18; // 0.3秒間赤フラッシュ
      skillHistory.unshift({text: "AC失敗！", life:180});
      if(skillHistory.length>5) skillHistory.pop();
    }
  });
}

function updateACOnSPUse(nowTime, spScore) {
  totalSPUsed++;
  currentSong.acList.forEach(ac => {
    if (ac.state === "active" && nowTime >= ac.startTime + noteTravelSec && nowTime <= ac.endTime + noteTravelSec) {
      if (ac.type === "sp") {
        ac.progress += 1;
        if (!ac.cleared && ac.progress >= ac.target) {
          ac.cleared = true;
          ac.state = "cleared";
          score += ac.rewardScore;
          spValue = Math.min(SP_MAX, spValue + ac.rewardSP);
          skillHistory.unshift({text: `ACクリア報酬 ${ac.rewardScore}`, life:180});
          if(skillHistory.length>5) skillHistory.pop();
        }
      }
      if (ac.type === "score") {
        ac.spScore += spScore;
        ac.progress = ac.tapScore + ac.spScore;
        if (!ac.cleared && ac.progress >= ac.target) {
          ac.cleared = true;
          ac.state = "cleared";
          score += ac.rewardScore;
          spValue = Math.min(SP_MAX, spValue + ac.rewardSP);
          skillHistory.unshift({text: `ACクリア報酬 ${ac.rewardScore}`, life:180});
          if(skillHistory.length>5) skillHistory.pop();
        }
      }
    }
  });
}
  
// ユーザー操作時に一度だけ呼ぶ
window.addEventListener('touchstart', () => {
  loadTapSE(); // resumeも含む
  if(gameState === "init" && titleBgm.paused) titleBgm.play().catch(()=>{});
}, { once: true });
window.addEventListener('mousedown', () => {
  loadTapSE();
  if(gameState === "init" && titleBgm.paused) titleBgm.play().catch(()=>{});
}, { once: true });

  
// --- 基本スコアの計算を一律30000・上限50000に ---
function calcTapBase(){
  let baseRaw = 30000; 
  if (appealBoostNotes > 0) {
    baseRaw = Math.ceil(baseRaw * 1.12);
    appealBoostNotes--;
  }
  return Math.min(50000, baseRaw);
}
  
// 同時押し（左右同時刻）ペアのindexリストを作成
function getSimultaneousPairsInNotes() {
  const pairs = [];
  const used = new Set();
  for (let i = 0; i < notes.length; i++) {
    if (used.has(i)) continue;
    const ni = notes[i];
    for (let j = i + 1; j < notes.length; j++) {
      if (used.has(j)) continue;
      const nj = notes[j];
      if (ni.chartIdx !== undefined && nj.chartIdx !== undefined) {
        const ci = currentSong.notesChart[ni.chartIdx];
        const cj = currentSong.notesChart[nj.chartIdx];
        if (ci && cj && ci.time === cj.time && ci.side !== cj.side) {
          pairs.push([ni, nj]);
          used.add(i); used.add(j);
          break;
        }
      }
    }
  }
  return pairs;
}

  // --- ノーツ判定関数(ノーツ参照で直接消す) ---
function judgeSingleNoteAt(mx, my, excludeNotes) {
  let bestNote = null, bestDist = Infinity, bestTarget = null;
  for (const n of notes) {
    if (excludeNotes && excludeNotes.includes(n)) continue;
    const target = n.side === 'left' ? leftTarget : rightTarget;
    const pos = cubicBezier(n.path.p0, n.path.p1, n.path.p2, n.path.p3, Math.min(1, n.t/n.duration));
    const judgeDist = Math.hypot(pos.x - mx, pos.y - my);
    if (judgeDist < bestDist) { bestDist = judgeDist; bestNote = n; bestTarget = target; }
  }
  if (bestNote) {
    const baseRaw = calcTapBase();
    const {points, label, reset} = calcTapScoreAndLabel(bestDist, baseRaw);
    if (label !== 'MISS') {
      awardHit(bestTarget, points, label, reset, baseRaw, bestNote.chartIdx);
      notes = notes.filter(n => n !== bestNote);
      if (excludeNotes) excludeNotes.push(bestNote);
      return true;
    }
  }
  return false;
}
  
// 判定ラベル・スコア計算
function calcTapScoreAndLabel(dist, baseRaw){
  let label='WONDERFUL', mult=1.2;
  if(dist<=10){label='WONDERFUL';mult=1.2;}
  else if(dist<=18){label='GREAT';mult=1.1;}
  else if(dist<=24){label='NICE';mult=1.0;}
  else if(dist<=28){label='BAD';mult=0.9;}
  else {return {points:0,label:'MISS',reset:true};}
  let points=Math.floor(baseRaw*mult);
  if(seededRandom()<0.3){ points=Math.floor(points*1.5); label='CRITICAL'; }
  if(spBoostTimer>0) points=Math.floor(points*1.1);
  points=Math.min(50000, points);
  const reset = (label==='NICE' || label==='BAD');
  return {points,label,reset};
}

// --- スコア加算処理 ---
function awardHit(target, points, label, resetCombo, baseRaw, chartIdx){
  playTapSE();
  let nowTime = bgm.currentTime || 0;

  // 作戦クールダウンと特技発動率バフのデクリメント
  if (strategyChangeCooldown > 0) strategyChangeCooldown--;
  const skillRate = skillRateBoostNotes > 0 ? 0.66 : 0.33;
  if (skillRateBoostNotes > 0) skillRateBoostNotes--;

  // 特技発動抽選（スタミナダメージより先にdamageReduceNotesをセット → 当ノーツから軽減適用）
  if(seededRandom() < skillRate){
    skillActivationCount++;
    const skillType = Math.floor(seededRandom()*3);
    if (currentStrategy === "red") {
      if(skillType===0){
        // --- ボルテージ獲得(バフ適用版) ---
        let voltage = baseRaw;
        if (appealBoostNotes > 0) voltage = Math.ceil(voltage * 1.12);
        if (spBoostTimer > 0) voltage = Math.floor(voltage * 1.1);
        const comboBonus = getComboBonus(combo + 1);
        voltage = Math.floor(voltage * comboBonus);
        let nowTime2 = bgm.currentTime || 0;
        if (isACActiveByTime(nowTime2) || isACClearedNowByTime(nowTime2)) voltage = Math.floor(voltage * 1.1);
        if (spScoreBuffNotes > 0) voltage = Math.floor(voltage * 1.1);
        let permanentBuff = 1 + permanentScoreBuff * 0.05;
        voltage = Math.floor(voltage * permanentBuff);
        if (voltage > 50000) voltage = 50000;
        score += voltage;
        skillHistory.unshift({text:`[追加スコア獲得 ${voltage}]`, life:180});
      }else if(skillType===1){
        spValue = Math.min(SP_MAX, spValue+540);
        skillHistory.unshift({text:`[SPゲージ獲得 9%]`, life:180});
      }else{
        appealBoostNotes = 5;
        skillHistory.unshift({text:`[アピール増加 12%]`, life:180});
      }
    } else {
      // --- 緑作戦（ヒーラー）特技 ---
      if (skillType === 0) {
        if (stamina > 0) {
          stamina = Math.min(STAMINA_MAX, stamina + 3000);
          skillHistory.unshift({text: '[スタミナ回復 3000]', life: 180});
        }
      } else if (skillType === 1) {
        damageReduceNotes += 3;
        skillHistory.unshift({text: '[ダメージ軽減 50%]', life: 180});
      } else {
        skillRateBoostNotes += 2;
        skillHistory.unshift({text: '[特技発動率上昇 33%]', life: 180});
      }
    }
    if(skillHistory.length>5) skillHistory.pop();
  }

  // スタミナダメージ適用（特技後なのでdamageReduceNotesが当ノーツに反映される）
  applyNoteDamage(nowTime);

  let acBuff = 1.0;
  if (isACActiveByTime(nowTime) || isACClearedNowByTime(nowTime)) acBuff = 1.1;
  let spBuff = 1.0;
  if (spScoreBuffNotes > 0) {
    spBuff = 1.1;
    spScoreBuffNotes--;
  }
  // --- 永続バフ適用 ---
  let permanentBuff = 1 + permanentScoreBuff * 0.05;
  const comboBonus = getComboBonus(combo+1);
  let pointsWithCombo = Math.floor(points * comboBonus * acBuff * spBuff * permanentBuff);
  if(pointsWithCombo > 50000) pointsWithCombo = 50000;
  // スタミナスコア倍率適用
  pointsWithCombo = Math.floor(pointsWithCombo * getStaminaScoreMult());

  score += pointsWithCombo;
  if(resetCombo){if(spValue<SP_MAX) spValue=Math.max(0, spValue-300);combo=0;}
  else combo++;
  spValue=Math.min(SP_MAX, spValue+200);
  hitRings.push({x:target.x,y:target.y,r:target.r,alpha:1});
  const midX = (leftTarget.x + rightTarget.x) / 2;
  const midY = (leftTarget.y + rightTarget.y) / 2 - R*2;
  addPopup(label, midX, midY - 30, 500, 'label');
  addPopup(String(pointsWithCombo), midX, midY, 500, 'score');
  if(judgeCount[label] !== undefined) judgeCount[label]++;

  // AC開始バフ抽選（STARTノーツ到達時のみ）
  for(const ac of currentSong.acList){
    if(ac.state === "waiting" && chartIdx === ac.startIdx){
      ac.state = "active";
      if(seededRandom() < 0.3){
        permanentScoreBuff++;
        skillHistory.unshift({text:"[アピール増加永続 5%]", life:180});
        if(skillHistory.length>5) skillHistory.pop();
      }
    }
  }

  updateACOnTap(pointsWithCombo, nowTime);
}
  
function applyMiss(label='MISS'){
  let nowTime = bgm.currentTime || 0;
  applyNoteDamage(nowTime);
  if (strategyChangeCooldown > 0) strategyChangeCooldown--;
  if (skillRateBoostNotes > 0) skillRateBoostNotes--;
  if(spValue<SP_MAX) spValue=Math.max(0, spValue-300);
  combo=0;
  const midX = (leftTarget.x + rightTarget.x) / 2;
  const midY = (leftTarget.y + rightTarget.y) / 2 - R*2;
  addPopup(label, midX, midY - 30, 500, 'label');
  if(judgeCount[label] !== undefined) judgeCount[label]++;
}
function isInSPSemicircle(mx,my){
  const cx=cvs.width/2, cy=cvs.height-10, r=spRadius;
  const dx=mx-cx, dy=my-cy, dist=Math.hypot(dx,dy);
  return (dist<=r) && (my<=cy);
}
  
// ノーツ判定関数
function judgeNotesGlobal(mx, my){
  let bestIdx=-1, bestDist=Infinity, bestTarget=null;
  for(let i=0;i<notes.length;i++){
    const n=notes[i];
    const target=n.side==='left'?leftTarget:rightTarget;
    const pos=cubicBezier(n.path.p0,n.path.p1,n.path.p2,n.path.p3, Math.min(1,n.t/n.duration));
    // 判定座標との差で判定（mx, myを使う）
    const judgeDist=Math.hypot(pos.x-mx, pos.y-my);
    if(judgeDist<bestDist){bestDist=judgeDist; bestIdx=i; bestTarget=target;}
  }
  if(bestIdx>=0){
    const baseRaw = calcTapBase();
    const {points,label,reset}=calcTapScoreAndLabel(bestDist, baseRaw);
    if(label!=='MISS'){
      awardHit(bestTarget, points, label, reset, baseRaw, notes[bestIdx].chartIdx);
      notes.splice(bestIdx,1);
      return true;
    }else{ return false; }
  }
  return false;
}

// --- SPゲージ使用時のスコア計算 ---
function tryUseSP(mx,my){
  if(spValue<SP_MAX) return false;
  if(!isInSPSemicircle(mx,my)) return false;
  let nowTime = bgm.currentTime || 0;
  spUseCount++;
  let spBase = 180000;
  if (appealBoostNotes > 0) {
    spBase = Math.ceil(spBase * 1.12);
    appealBoostNotes--;
  }
  let permanentBuff = 1 + permanentScoreBuff * 0.05;
  const comboBonus = getComboBonus(combo);
  let spScore = spBase;
  if (isACActiveByTime(nowTime) || isACClearedNowByTime(nowTime)) spScore = Math.floor(spScore * 1.1);
  if(spBoostTimer>0) spScore = Math.floor(spScore * 1.1);
  spScore = Math.floor(spScore * comboBonus * permanentBuff);
  if (spScore > 250000) spScore = 250000;
  score += spScore;
  spValue = 0;
  spRingSpeed = 10; spRingRange = 80; triggerSPVisual();
  spBoostTimer = 240;
  spCountdownTimer = 240;
  spCountdownValue = 3;
  addPopup(String(spScore), cvs.width/2, cvs.height/2, 1800, 'sp');
  addPopup('', 0, 0, 180, 'flash');
  for(let i=0;i<6;i++){
    if(seededRandom()<0.5){
      spValue = Math.min(SP_MAX, spValue + 600);
      skillHistory.unshift({text:`[SPゲージ獲得]`, life:180});
      if(skillHistory.length>5) skillHistory.pop();
    }
  }
  if(seededRandom() < 0.5){
    spScoreBuffNotes = 15;
    skillHistory.unshift({text: "[アピール増加 10%]", life:180});
    if(skillHistory.length>5) skillHistory.pop();
  }
  updateACOnSPUse(nowTime, spScore);
  return true;
}
  
// == タップ時の処理 ==
// 各タッチを独立して判定（SP・作戦アイコン・ノーツが同時に反応できる）
function handlePointer(e){
  if(gameState!=="playing") return;
  const isTouch = e.type.startsWith('touch');
  if(isTouch){
    lastInputWasTouch=true;
    e.preventDefault();
  }
  if(!isTouch && lastInputWasTouch){ lastInputWasTouch=false; return; }

  const rect = cvs.getBoundingClientRect();
  const scaleX = cvs.width / rect.width;
  const scaleY = cvs.height / rect.height;

  // changedTouches: 今回新しく押された指のみ
  const newPoints = isTouch ? Array.from(e.changedTouches) : [e];
  let noteFingers = 0;

  for (const t of newPoints) {
    const tx = (t.clientX - rect.left) * scaleX;
    const ty = (t.clientY - rect.top) * scaleY;

    // 作戦切り替えアイコン判定
    const iconW = Math.max(60, Math.round(R * 2.0));
    const iconH = Math.max(80, Math.round(R * 2.7));
    const iconCY = cvs.height / 2;
    if (strategyChangeCooldown === 0 &&
        ty >= iconCY - iconH / 2 && ty <= iconCY + iconH / 2 &&
        (tx <= iconW || tx >= cvs.width - iconW)) {
      currentStrategy = currentStrategy === "red" ? "blue" : "red";
      strategyChangeCooldown = STRATEGY_CHANGE_NOTES;
      notesProcessedSinceSwitch = 0;
      strategyBadgeOffsetX = -300; // バッジを左画面外から登場させる
      const strategyName = currentStrategy === "red" ? "赤作戦（アタッカー）" : "緑作戦（ヒーラー）";
      skillHistory.unshift({text: `[${strategyName}に切り替え]`, life: 180});
      if (skillHistory.length > 5) skillHistory.pop();
      continue;
    }

    // SP半円判定
    if (isInSPSemicircle(tx, ty)) {
      if (spValue >= SP_MAX) tryUseSP(tx, ty);
      continue;
    }

    noteFingers++;
  }

  if (noteFingers === 0) return;

  // 全タッチ数（既存指も含む）でペア判定を決定
  const totalFingers = isTouch ? e.touches.length : 1;

  if (totalFingers >= 2) {
    const pairs = getSimultaneousPairsInNotes(); // [[nL, nR], ...]
    for (const [nL, nR] of pairs) {
      let right = nL, left = nR;
      if(currentSong.notesChart[nL.chartIdx]?.side === "left" && currentSong.notesChart[nR.chartIdx]?.side === "right"){
        left = nL; right = nR;
      }
      const posR = cubicBezier(right.path.p0, right.path.p1, right.path.p2, right.path.p3, Math.min(1, right.t/right.duration));
      const distR = Math.hypot(posR.x - rightTarget.x, posR.y - rightTarget.y);
      const baseRaw = calcTapBase();
      const resR = calcTapScoreAndLabel(distR, baseRaw);
      if(resR.label !== 'MISS'){
        awardHit(rightTarget, resR.points, resR.label, resR.reset, baseRaw, right.chartIdx);
        notes = notes.filter(n => n !== right);
      }
      const posL = cubicBezier(left.path.p0, left.path.p1, left.path.p2, left.path.p3, Math.min(1, left.t/left.duration));
      const distL = Math.hypot(posL.x - leftTarget.x, posL.y - leftTarget.y);
      const resL = calcTapScoreAndLabel(distL, baseRaw);
      if(resL.label !== 'MISS'){
        awardHit(leftTarget, resL.points, resL.label, resL.reset, baseRaw, left.chartIdx);
        notes = notes.filter(n => n !== left);
      }
      // どちらもMISSなら何もしない
    }
    return;
  }

  // 1本指時は単発ノーツのみ左右順に判定
  function isNotPairNote(n){
    return !notes.some(other =>
      other !== n &&
      currentSong.notesChart[n.chartIdx]?.time === currentSong.notesChart[other.chartIdx]?.time &&
      currentSong.notesChart[n.chartIdx]?.side !== currentSong.notesChart[other.chartIdx]?.side
    );
  }
  let targetNotes = notes.filter(isNotPairNote);

  let bestL = null, bestDistL = Infinity;
  for(const n of targetNotes){
    if(n.side !== 'left') continue;
    const pos = cubicBezier(n.path.p0, n.path.p1, n.path.p2, n.path.p3, Math.min(1, n.t/n.duration));
    const dist = Math.hypot(pos.x-leftTarget.x, pos.y-leftTarget.y);
    if(dist < bestDistL){ bestDistL = dist; bestL = n; }
  }
  if(bestL){
    const baseRaw = calcTapBase();
    const res = calcTapScoreAndLabel(bestDistL, baseRaw);
    if(res.label !== 'MISS'){
      awardHit(leftTarget, res.points, res.label, res.reset, baseRaw, bestL.chartIdx);
      notes = notes.filter(n => n !== bestL);
    }
  }

  let bestR = null, bestDistR = Infinity;
  for(const n of targetNotes){
    if(n.side !== 'right') continue;
    const pos = cubicBezier(n.path.p0, n.path.p1, n.path.p2, n.path.p3, Math.min(1, n.t/n.duration));
    const dist = Math.hypot(pos.x-rightTarget.x, pos.y-rightTarget.y);
    if(dist < bestDistR){ bestDistR = dist; bestR = n; }
  }
  if(bestR){
    const baseRaw = calcTapBase();
    const res = calcTapScoreAndLabel(bestDistR, baseRaw);
    if(res.label !== 'MISS'){
      awardHit(rightTarget, res.points, res.label, res.reset, baseRaw, bestR.chartIdx);
      notes = notes.filter(n => n !== bestR);
    }
  }
}

// --- イベント登録 ---
cvs.addEventListener('touchstart',handlePointer,{passive:false});
cvs.addEventListener('mousedown',handlePointer);

// ゲームを初期化して開始する共通関数
async function startGame(seed) {
  await loadTapSE();
  assignACNoteIndexes();
  
  // タイトルBGM停止・ベストスコア再読み込み
  try { titleBgm.pause(); titleBgm.currentTime = 0; } catch(e) {}
  bestScore = Number(localStorage.getItem('bestScore_' + currentSong.id)) || 0;

  setSeed(seed);
  lastGameSeed = seed; // 今回のシードを保存

  chartIndex = 0;
  totalNotesSpawned = 0;
  notes = [];
  spValue=0; spFullNotified=false;
  score=0; combo=0;
  skillHistory = [];
  appealBoostNotes = 0;
  skillActivationCount = 0;
  spUseCount = 0;
  progressDisplay = 0;
  spFlashTimer=0; spRingTimer=0; spRingSpeed=20; spRingRange=40;
  spBoostTimer=0;
  spCountdownTimer=0;
  spCountdownValue=0;
  spScoreBuffNotes = 0;
  popups=[]; hitRings=[];
  frame = 0;
  countdownValue = 3;
  judgeCount = {CRITICAL:0,WONDERFUL:0,GREAT:0,NICE:0,BAD:0,MISS:0};
  noteCounter = 0;
  totalSPUsed = 0;
  stamina = STAMINA_MAX;
  damageReduceNotes = 0;
  skillRateBoostNotes = 0;
  currentStrategy = "red";
  strategyChangeCooldown = 0;
  notesProcessedSinceSwitch = 0;

  // --- 永続バフ初期化&50%で発動処理 ---
  permanentScoreBuff = 0;
  if(seededRandom() < 0.5){
    permanentScoreBuff++;
    skillHistory.unshift({text:"[アピール増加永続 5%]", life:180});
    if(skillHistory.length>5) skillHistory.pop();
  }

  // AC状態リセット
  currentSong.acList.forEach(ac=>{
    ac.state = "waiting";
    ac.progress = 0;
    ac.cleared = false;
    ac.tapScore = 0;
    ac.spScore = 0;
  });
  gameState = "countdown";
  resizeCanvas();
  startBtn.style.display = "none";
  retryBtn.style.display = "none";
  reseedBtn.style.display = "none";
}

startBtn.onclick = function() {
  if(gameState === "init"){
    // タイトル画面 → 曲選択へ
    titleBgm.pause();
    gameState = "songSelect";
    resizeCanvas();
  } else if(gameState === "songSelect"){
    // 曲選択 → ゲーム開始
    startGame(Date.now());
  }
};
  
// --- リトライボタン挙動 ---
retryBtn.onclick = ()=>{
  gameState = "init";
  startBtn.style.display = "block";
  retryBtn.style.display = "none";
  reseedBtn.style.display = "none";
  resizeCanvas();
  try{ bgm.pause(); }catch(e){}
  bgm.currentTime = 0;
  titleBgm.currentTime = 0;
  titleBgm.play().catch(()=>{});
  permanentScoreBuff = 0;
  stamina = STAMINA_MAX;
  damageReduceNotes = 0;
  skillRateBoostNotes = 0;
  currentStrategy = "red";
  strategyChangeCooldown = 0;
  notesProcessedSinceSwitch = 0;
  currentSong.acList.forEach(ac=>{
    ac.state = "waiting";
    ac.progress = 0;
    ac.cleared = false;
    ac.tapScore = 0;
    ac.spScore = 0;
  });
};

// --- 乱数再現ボタン挙動 ---
reseedBtn.onclick = function() {
  startGame(lastGameSeed); // 保存したシードでゲーム開始
};


// ノーツ出現時にchartIdxを渡すよう修正
function update(){
  frame++;
  if(gameState==="countdown"){
    if(frame % 60 === 0 && countdownValue>0){
      countdownValue--;
      if(countdownValue===0){
        setTimeout(()=>{
          gameState="playing";
          frame = 0;
          bgm.currentTime = 0;
          bgm.volume = 0.10;
          bgm.play().catch(()=>{});
        },1000);
      }
    }
    if(acFailFlashTimer > 0) acFailFlashTimer--;
    return;
  }
  if (gameState === "playing" && !bgm.paused) {
    const bgmNowSec = bgm.currentTime;
    while (chartIndex < currentSong.notesChart.length && bgmNowSec >= currentSong.notesChart[chartIndex].time) {
      spawnNote(currentSong.notesChart[chartIndex].side, chartIndex); 
      totalNotesSpawned++;
      chartIndex++;
    }
    if(acFailFlashTimer > 0) acFailFlashTimer--;
  }
  for(const n of notes) n.t++;
  const keep=[];for(const n of notes){if(n.t<=n.duration+5) keep.push(n);else applyMiss('MISS');}notes=keep;
  if(gameState==="playing" && chartIndex>=currentSong.notesChart.length && notes.length===0){
    if(waitingClearFrame === null){
      waitingClearFrame = frame;
    }
    if(frame - waitingClearFrame >= 120){
      gameState="clear";
      clearStartFrame=frame;
      waitingClearFrame = null;
      let fadeOut = setInterval(() => {
        if (bgm.volume > 0.02) { bgm.volume -= 0.02; }
        else { bgm.pause(); bgm.currentTime = 0; clearInterval(fadeOut); bgm.volume = 0.10; }
      }, 50);
    }
  } else {
    waitingClearFrame = null;
  }
  if(gameState==="clear" && frame-clearStartFrame>120){
    gameState="result";
    resultStartFrame=frame;
    resizeCanvas();
    if(score > bestScore) {
      bestScore = score;
      localStorage.setItem('bestScore_' + currentSong.id, bestScore);
    }
  }

  if(spValue>=SP_MAX){ if(!spFullNotified){ triggerSPVisual(); spFullNotified=true; } }
  else spFullNotified=false;
  if(spCountdownTimer>0){ spCountdownTimer--; if(spCountdownTimer % 60 === 0){ spCountdownValue = Math.max(0, spCountdownValue-1); } }
  const clearedNotes = chartIndex - notes.length;
  const targetProgress = currentSong.notesChart.length>0 ? Math.min(1, clearedNotes / currentSong.notesChart.length) : 0;
  progressDisplay += (targetProgress - progressDisplay) * 0.2;
  skillHistory.forEach(h=>h.life--);skillHistory = skillHistory.filter(h=>h.life>0);
  if(spFlashTimer>0) spFlashTimer--;
  if(spRingTimer>0)  spRingTimer--;
  if(spBoostTimer>0) spBoostTimer--;
  hitRings=hitRings.filter(r=>{r.r+=4; r.alpha-=0.06; return r.alpha>0;});
  popups=popups.filter(p=>{p.timer--; return p.timer>0;});
  }
  // --- ユーティリティ: 同時押しペア情報を取得 ---
function getSimultaneousPairs() {
  // timeが一致し、sideが違う2ノーツのペアを列挙
  const pairs = [];
  for (let i = 0; i < notes.length; i++) {
    const n1 = notes[i];
    if (n1.paired) continue;
    for (let j = i + 1; j < notes.length; j++) {
      const n2 = notes[j];
      if (n2.paired) continue;
      if (n1.chartIdx !== undefined && n2.chartIdx !== undefined) {
        const ni = currentSong.notesChart[n1.chartIdx];
        const nj = currentSong.notesChart[n2.chartIdx];
        if (ni && nj && ni.time === nj.time && ni.side !== nj.side) {
          n1.paired = n2.paired = true;
          pairs.push([n1, n2]);
        }
      }
    }
  }
  notes.forEach(n => delete n.paired);
  return pairs;
}

// 判定本体: 指定座標(mx, my)で一番近いノーツを判定
function judgeNotesAt(mx, my, alreadyHitIdx){
  let bestIdx=-1, bestDist=Infinity, bestTarget=null;
  for(let i=0;i<notes.length;i++){
    if (alreadyHitIdx && alreadyHitIdx.includes(i)) continue;
    const n=notes[i];
    const target=n.side==='left'?leftTarget:rightTarget;
    const pos=cubicBezier(n.path.p0,n.path.p1,n.path.p2,n.path.p3, Math.min(1,n.t/n.duration));
    const judgeDist=Math.hypot(pos.x-mx, pos.y-my);
    if(judgeDist<bestDist){bestDist=judgeDist; bestIdx=i; bestTarget=target;}
  }
  if(bestIdx>=0){
    const baseRaw = calcTapBase();
    const {points,label,reset}=calcTapScoreAndLabel(bestDist, baseRaw);
    if(label!=='MISS'){
      awardHit(bestTarget, points, label, reset, baseRaw, notes[bestIdx].chartIdx);
      notes.splice(bestIdx,1);
      if (alreadyHitIdx) alreadyHitIdx.push(bestIdx);
      return true;
    }
  }
  return false;
}
  
// --- ノーツ描画: 同時押しペア間に白線描画 ---
function drawNotes(){
  // 1. 同時ペアの白い線
  const pairs = getSimultaneousPairs();
  ctx.save();
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = R * 0.19;
  ctx.globalAlpha = 0.8;
  for (const [n1, n2] of pairs) {
    const pos1 = cubicBezier(n1.path.p0, n1.path.p1, n1.path.p2, n1.path.p3, Math.min(1, n1.t/n1.duration));
    const pos2 = cubicBezier(n2.path.p0, n2.path.p1, n2.path.p2, n2.path.p3, Math.min(1, n2.t/n2.duration));
    ctx.beginPath();
    ctx.moveTo(pos1.x, pos1.y);
    ctx.lineTo(pos2.x, pos2.y);
    ctx.stroke();
  }
  ctx.restore();

  // 2. 通常ノーツ描画
  for(let i=0;i<notes.length;i++){
    const n = notes[i];
    const noteInfo = currentSong.notesChart[n.chartIdx];
    if(!noteInfo) continue;
    const noteTime = noteInfo.time;
    const idx = n.chartIdx;

    // AC区間に入っているか（indexベースで判定）
    let isAcCleared = false;
    for(const ac of currentSong.acList){
      if(ac.state === "cleared" && ac.startIdx !== -1 && ac.endIdx !== -1 && idx >= ac.startIdx && idx <= ac.endIdx){
        isAcCleared = true;
        break;
      }
    }

    // 色設定
    let mainColor = isAcCleared ? "#ffd700" : "#00eaff";
    let glowColor = isAcCleared ? "rgba(255,220,60,0.7)" : "rgba(0,200,255,0.7)";
    let rimColor  = isAcCleared ? "#ffe777" : "#7fffff";
    let dotColor  = isAcCleared ? "#ffe066" : "#1cd9ee";

    const pos = cubicBezier(n.path.p0, n.path.p1, n.path.p2, n.path.p3, Math.min(1, n.t/n.duration));
    const r = R;

    // --- グロー ---
    ctx.save();
    ctx.globalAlpha = 0.90;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, r * 1.15, 0, Math.PI * 2);
    const glow = ctx.createRadialGradient(pos.x, pos.y, r * 0.6, pos.x, pos.y, r * 1.2);
    glow.addColorStop(0, glowColor);
    glow.addColorStop(0.7, isAcCleared ? "rgba(255,220,60,0.15)" : "rgba(0,200,255,0.18)");
    glow.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = glow;
    ctx.fill();
    ctx.restore();

    // --- 外枠 ---
    ctx.save();
    ctx.strokeStyle = rimColor;
    ctx.lineWidth = r * 0.18;
    ctx.globalAlpha = 0.82;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, r * 0.87, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();

    // --- 主円 ---
    ctx.save();
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, r * 0.72, 0, Math.PI * 2);
    ctx.fillStyle = mainColor;
    ctx.shadowColor = mainColor;
    ctx.shadowBlur = r * 0.16;
    ctx.globalAlpha = isAcCleared ? 0.72 : 0.6;
    ctx.fill();
    ctx.restore();

    // --- 中心ドット ---
    ctx.save();
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, r * 0.22, 0, Math.PI * 2);
    ctx.fillStyle = dotColor;
    ctx.globalAlpha = 0.88;
    ctx.fill();
    ctx.restore();

    // --- START/FINISHラベル ---
    for(const ac of currentSong.acList){
      if(ac.startIdx === idx){
        ctx.font = `bold ${Math.round(R*0.8)}px system-ui`;
        ctx.textAlign = "center";
        ctx.lineWidth = 4;
        ctx.strokeStyle = "#fff";
        ctx.strokeText("START", pos.x, pos.y+R+13);
        ctx.fillStyle = "#ff69b4";
        ctx.fillText("START", pos.x, pos.y+R+13);
      }
      if(ac.endIdx === idx){
        ctx.font = `bold ${Math.round(R*0.8)}px system-ui`;
        ctx.textAlign = "center";
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#ff69b4";
        ctx.strokeText("FINISH", pos.x, pos.y+R+13);
        ctx.fillStyle = "#fff";
        ctx.fillText("FINISH", pos.x, pos.y+R+13);
      }
    }
  }
}
  
// --- AC通知パネル ---
function drawACMissionNotice(){
  let nowTime = bgm.currentTime || 0;
  const ac = currentSong.acList.find(ac => (ac.state === "active" || ac.state === "cleared") &&
    nowTime >= ac.startTime + noteTravelSec && nowTime <= ac.endTime + noteTravelSec);
  if(!ac) return;
  // 進捗バーより下で中央より上位置
  const barMarginLeft = 20;
  const barMarginRight = 200;
  const barWidth = Math.max(140, cvs.width - barMarginLeft - barMarginRight);
  const w = Math.max(cvs.width * 0.6, 400);
  const h = Math.max(30, Math.round(cvs.height*0.035));
  const x = (cvs.width-w)/2;
  const y = Math.max( barWidth*0.02+50, cvs.height*0.12 );
  ctx.save();
  ctx.textAlign = "center";
  ctx.font = `bold ${Math.round(h*0.4)}px system-ui`;
  ctx.lineWidth = 3;
  ctx.strokeStyle = ac.cleared ? "#FFD700" : "#ff69b4";
  ctx.fillStyle = ac.cleared ? "#FFD700" : "#ff69b4";
  ctx.globalAlpha = 0.82;
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, 13);
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.stroke();
  ctx.fillStyle = "#fff";
  ctx.globalAlpha = 1;
  let text = ac.type === "score" ? `AC: ${ac.desc}（${ac.progress|0}/${ac.target}）` : `AC: ${ac.desc}（${ac.progress|0}/${ac.target}）`;
  if(ac.cleared) text = "ACクリア！ " + text;
  ctx.fillText(text, x+w/2, y+h/2+2);
  ctx.restore();
}

// --- 以降は描画処理など ---
function strokeRainbowText(text,x,y,font){
  ctx.textAlign='center'; ctx.font=font;
  const g=ctx.createLinearGradient(x-100,y,x+100,y);
  const hue=(frame*4)%360;
  for(let i=0;i<=6;i++) g.addColorStop(i/6,`hsl(${(hue+i*60)%360},100%,50%)`);
  ctx.lineWidth=4; ctx.strokeStyle=g; ctx.strokeText(text,x,y);
  ctx.fillStyle='#fff'; ctx.fillText(text,x,y);
}
function strokeColoredText(text,x,y,font,color){
  ctx.textAlign='center'; ctx.font=font;
  ctx.lineWidth=4; ctx.strokeStyle=color; ctx.strokeText(text,x,y);
  ctx.fillStyle='#fff'; ctx.fillText(text,x,y);
}
function strokeOrangeWhiteText(text,x,y,font){
  ctx.textAlign='center'; ctx.font=font;
  ctx.lineWidth=6; ctx.strokeStyle='#fff'; ctx.strokeText(text,x,y);
  ctx.fillStyle='#ffa500'; ctx.fillText(text,x,y);
}
  
function drawProgressBarWithAC(){
  const barMarginLeft = 20;
  const barMarginRight = 200;
  const barWidth = Math.max(140, cvs.width - barMarginLeft - barMarginRight);
  const barHeight = 12;
  const x = barMarginLeft;
  const y = 10;

  // 1. グレー下地
  ctx.fillStyle = '#4b5563';
  ctx.fillRect(x, y, barWidth, barHeight);

  // 2. ピンクAC区間
  let lastNoteTime = currentSong.notesChart[currentSong.notesChart.length-1]?.time || 0;
  let fallbackSongLen = lastNoteTime + noteTravelSec + 3;
  let songLen = (bgm.duration && !isNaN(bgm.duration) && bgm.duration > 1)
    ? bgm.duration
    : fallbackSongLen;
  for(const ac of currentSong.acList){
    let startRatio = (ac.startTime + noteTravelSec) / songLen;
    let endRatio   = (ac.endTime   + noteTravelSec) / songLen;
    let width      = barWidth * (endRatio - startRatio);
    if(isNaN(startRatio) || isNaN(endRatio) || width <= 0) continue;
    ctx.fillStyle = "#ff69b4";
    ctx.globalAlpha = 0.8;
    ctx.fillRect(
      x + barWidth * startRatio,
      y,
      width,
      barHeight
    );
    ctx.globalAlpha = 1;
  }

  // 3. 水色進捗
  let progress = 0;
  if (bgm.duration && bgm.duration > 0) {
    progress = Math.min(1, bgm.currentTime / bgm.duration);
  }
  ctx.fillStyle = '#00e5ff';
  ctx.fillRect(x, y, barWidth * progress, barHeight);

  // 4. 白枠
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 2;
  ctx.strokeRect(x, y, barWidth, barHeight);
}
  
function drawSkillHistory(){
  const maxItems = 5;
  const lineH = Math.max(16, Math.round(R*0.6));
  const padding = 6;
  const x = 22;
  const startY = cvs.height - 22 - (maxItems-1)*lineH;
  ctx.textAlign='left';
  ctx.font=`bold ${lineH}px system-ui`;
  const items = skillHistory.slice(0, maxItems);
  for(let i=0;i<items.length;i++){
    const h=items[i];
    let alpha = 1;
    if(h.life < 30) alpha = h.life/30;
    ctx.globalAlpha = alpha;
    const text = h.text;
    const w = ctx.measureText(text).width;
    ctx.fillStyle='rgba(0,0,0,0.4)';
    ctx.fillRect(x-2, startY + i*lineH - (lineH-padding/2), w+16, lineH+padding/2);
    ctx.fillStyle='#e5faff';
    ctx.fillText(text, x, startY + i*lineH);
    ctx.globalAlpha = 1;
  }
}
function drawTargets(){
  ctx.strokeStyle='#fff'; ctx.lineWidth=3;
  for(const t of [leftTarget,rightTarget]){
    ctx.beginPath(); ctx.arc(t.x,t.y,t.r,0,Math.PI*2); ctx.stroke();
  }
}

function drawHitRings(){
  for(const ring of hitRings){
    ctx.strokeStyle=`rgba(255,255,255,${ring.alpha})`;
    ctx.lineWidth=3;
    ctx.beginPath(); ctx.arc(ring.x,ring.y,ring.r,0,Math.PI*2); ctx.stroke();
  }
}
function drawSPGauge(){
  const cx=cvs.width/2, cy=cvs.height-10, radius=spRadius;
  const startAngle=Math.PI, endAngle=0;
  ctx.strokeStyle='#fff'; ctx.lineWidth=4;
  ctx.beginPath(); ctx.arc(cx,cy,radius,startAngle,endAngle,false); ctx.stroke();
  const fillRatio=Math.min(1, spValue/SP_MAX);
  const fillEnd=startAngle + Math.PI*fillRatio;
  ctx.fillStyle='#fff';
  ctx.beginPath(); ctx.moveTo(cx,cy); ctx.arc(cx,cy,radius,startAngle,fillEnd,false); ctx.closePath(); ctx.fill();
  const nx=cx+Math.cos(fillEnd)*(radius-10), ny=cy+Math.sin(fillEnd)*(radius-10);
  ctx.strokeStyle='#fff'; ctx.lineWidth=3;
  ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(nx,ny); ctx.stroke();
  ctx.fillStyle='#fff'; ctx.beginPath(); ctx.arc(cx,cy,Math.max(3, radius*0.06),0,Math.PI*2); ctx.fill();

  // 満タン時発光エフェクト
  if(spValue >= SP_MAX){
    ctx.save();
    ctx.globalAlpha = 0.33; // 薄い発光
    ctx.strokeStyle = '#ffff99'; // 薄い黄色
    ctx.lineWidth = 16;
    ctx.beginPath();
    ctx.arc(cx, cy, radius+6, startAngle, endAngle, false);
    ctx.stroke();
    ctx.globalAlpha = 1;
    ctx.restore();
  }
  
  if(spFlashTimer>0){
    ctx.fillStyle=`rgba(255,255,255,${spFlashTimer/10})`;
    ctx.beginPath(); ctx.moveTo(cx,cy); ctx.arc(cx,cy,radius,startAngle,endAngle,false); ctx.closePath(); ctx.fill();
  }
  if(spRingTimer>0){
    const rp=1 - spRingTimer/spRingSpeed;
    const rr=radius + rp*spRingRange;
    ctx.strokeStyle=`rgba(255,255,255,${1-rp})`;
    ctx.lineWidth=6; ctx.beginPath(); ctx.arc(cx,cy,rr,startAngle,endAngle,false); ctx.stroke();
  }
}
function drawPopups(){
  for(const p of popups){
    const a=p.timer/p.duration; ctx.globalAlpha=a;
    if(p.type==='label'){
      let fontSize = Math.max(28, Math.round(R*1.2), Math.round(cvs.height*0.055));
      if(p.text==='CRITICAL'){
        ctx.fillStyle='#FFD700'; ctx.font=`bold ${fontSize}px system-ui`; ctx.textAlign='center';
        ctx.fillText('★', p.x-fontSize*2, p.y);
        ctx.fillText('★', p.x+fontSize*2, p.y);
        strokeRainbowText('CRITICAL', p.x, p.y, `bold ${fontSize}px system-ui`);
      }else if(p.text==='WONDERFUL'){
        strokeRainbowText('WONDERFUL', p.x, p.y, `bold ${fontSize}px system-ui`);
      }else if(p.text==='GREAT'){
        strokeColoredText('GREAT', p.x, p.y, `bold ${fontSize}px system-ui`, '#ff69b4');
      }else if(p.text==='NICE'){
        strokeColoredText('NICE', p.x, p.y, `bold ${fontSize}px system-ui`, '#ffd700');
      }else if(p.text==='BAD' || p.text==='MISS'){
        strokeColoredText(p.text, p.x, p.y, `bold ${fontSize}px system-ui`, '#9ca3af');
      }
    }else if(p.type==='score'){
      let fontSize = Math.max(26, Math.round(R*1.0), Math.round(cvs.height*0.045));
      strokeColoredText(p.text, p.x, p.y, `bold ${fontSize}px system-ui`, '#39ff14');
    }else if(p.type==='sp'){
      let fontSize = Math.max(54, Math.round(R*2.1), Math.round(cvs.height*0.11));
      strokeOrangeWhiteText(p.text, p.x, p.y, `bold ${fontSize}px system-ui`);
    }
    ctx.globalAlpha=1;
  }
}
function drawUI(){
  if(gameState!=="playing") return;
  const cx=cvs.width - Math.max(70, Math.round(R*2.7));
  ctx.textAlign='center'; ctx.fillStyle='#fff';
  ctx.font=`bold ${Math.max(38,Math.round(R*1.7))}px system-ui`; ctx.fillText(`${combo}`, cx, Math.max(40,Math.round(R*1.4)));
  ctx.font=`bold ${Math.max(20,Math.round(R*0.9))}px system-ui`; ctx.fillText('COMBO', cx, Math.max(70,Math.round(R*2.0)));
  ctx.textAlign='right'; ctx.font=`bold ${Math.max(16,Math.round(R*0.7))}px system-ui`;
  ctx.fillText(`SCORE: ${score}`, cvs.width-12, cvs.height-16);
}
function drawOverlays(){
  const f=popups.find(p=>p.type==='flash');
  if(f){
    ctx.fillStyle=`rgba(255,255,255,${f.timer/f.duration*0.6})`;
    ctx.fillRect(0,0,cvs.width,cvs.height);
  }
}
function drawSPCountdown(){
  if(spCountdownTimer<=0) return;
  if(spCountdownValue===0 && Math.floor(frame/8)%2===0) return;
  const x=cvs.width/2, y=Math.round(cvs.height*0.25);
  ctx.textAlign='center';
  ctx.font=`bold ${Math.max(48,Math.round(R*2.0))}px system-ui`;
  const g=ctx.createLinearGradient(x-80,y,x+80,y);
  const hue=(frame*4)%360;
  for(let i=0;i<=6;i++) g.addColorStop(i/6, `hsl(${(hue+i*60)%360},100%,50%)`);
  ctx.lineWidth=8; ctx.strokeStyle=g; ctx.strokeText(spCountdownValue, x, y);
  ctx.fillStyle='rgba(255,255,255,0.9)'; ctx.fillText(spCountdownValue, x, y);
}

function drawACFailFlash(){
  if(acFailFlashTimer > 0){
    const alpha = Math.min(0.38, acFailFlashTimer/18*0.38);
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = "#ff0033";
    ctx.fillRect(0,0,cvs.width,cvs.height);
    ctx.globalAlpha = 1;
    ctx.restore();
  }
}
  
  function drawSPBoostFrame() {
  if (typeof spBoostTimer === 'undefined' || spBoostTimer <= 0) return;
  const w = cvs.width, h = cvs.height;
  const maxT = 240;
  const fade = Math.max(0, Math.min(1, spBoostTimer / maxT));
  const noteCount = 16;
  const colors = [
    "#ff4c4c", "#ffa500", "#ffe93a", "#4cff4c", "#39bfff", "#8b4cff", "#ff6cff",
  ];

  // グリッド状に音符を配置
  for (let i = 0; i < noteCount; i++) {
    // 基本位置
    const gridX = ((i % 4) + 0.5) / 4 * w;
    const gridY = ((Math.floor(i / 4) + 0.7) / 4) * h * 0.85 + h * 0.06;
    const t = spBoostTimer;

    // カクカク（階段状に変化する）動き
    // ステップ周期
    const stepPeriod = 28 + (i % 5) * 7;
    const step = Math.floor((t + i * 13) / stepPeriod) % 4;

    // カクカク位置ずれパターン
    const stepTable = [
      {dx: 0, dy: 0, angle: 0},
      {dx: 5, dy: -4, angle: 0.13},
      {dx: -4, dy: 5, angle: -0.12},
      {dx: 3, dy: -2, angle: 0.09}
    ];
    const {dx, dy, angle} = stepTable[step];

    const size = 20 + Math.sin(i * 2.3) * 3;

    ctx.save();
    ctx.globalAlpha = 0.19 * fade;
    ctx.translate(gridX + dx, gridY + dy);
    ctx.rotate(angle);

    // 音符（8分音符風）
    ctx.beginPath();
    ctx.ellipse(0, 0, size * 0.38, size * 0.26, 0, 0, Math.PI * 2);
    ctx.fillStyle = colors[i % colors.length];
    ctx.shadowColor = "#fff";
    ctx.shadowBlur = 9;
    ctx.fill();

    // 棒
    ctx.beginPath();
    ctx.moveTo(size * 0.13, -size * 0.05);
    ctx.lineTo(size * 0.13, -size * 0.56);
    ctx.lineWidth = size * 0.10;
    ctx.strokeStyle = colors[i % colors.length];
    ctx.lineCap = "round";
    ctx.shadowBlur = 0;
    ctx.stroke();

    // 旗
    ctx.beginPath();
    ctx.moveTo(size * 0.13, -size * 0.56);
    ctx.quadraticCurveTo(size * 0.40, -size * 0.63, size * 0.33, -size * 0.28);
    ctx.lineWidth = size * 0.08;
    ctx.strokeStyle = colors[i % colors.length];
    ctx.stroke();

    ctx.restore();
  }
} 
// 判定回数リザルト左下表示
function drawJudgeCountsResult() {
  const baseX = 30;
  const baseY = cvs.height - 28;
  const lineH = Math.max(14, Math.round(cvs.height * 0.03));
  const labels = ["CRITICAL", "WONDERFUL", "GREAT", "NICE", "BAD", "MISS"];
  ctx.save();
  ctx.textBaseline = 'top';
  ctx.font = `bold ${lineH}px system-ui`;
  // 幅確保
  let maxLabelWidth = 0, maxCountWidth = 0;
  for(const l of labels) {
    const w1 = ctx.measureText(l).width;
    const w2 = ctx.measureText(judgeCount[l].toString()).width;
    if(w1>maxLabelWidth) maxLabelWidth = w1;
    if(w2>maxCountWidth) maxCountWidth = w2;
  }
  const gap = 16;
  for(let i=0;i<labels.length;i++){
    const l = labels[i];
    const y = baseY - lineH * (labels.length - i);
    ctx.textAlign = 'left';
    ctx.fillStyle = "#fff";
    ctx.globalAlpha = 0.82;
    ctx.fillText(l, baseX, y);

    ctx.textAlign = 'right';
    ctx.fillStyle = "#ffd700";
    ctx.globalAlpha = 0.94;
    ctx.fillText(judgeCount[l], baseX + maxLabelWidth + gap + maxCountWidth, y);
  }
  ctx.globalAlpha = 1.0;
  ctx.restore();
}

// --- スタミナバー描画 ---
function drawStaminaBar() {
  if (gameState !== "playing") return;
  const cx = cvs.width / 2;
  const cy = cvs.height - 10;
  const barRadius = spRadius + 14;
  const startAngle = Math.PI;
  const maxAngle = Math.PI * 1.5;

  ctx.save();
  ctx.lineCap = 'round';

  // 黒縁取り（全体の外枠）
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 12;
  ctx.beginPath();
  ctx.arc(cx, cy, barRadius, startAngle, maxAngle, false);
  ctx.stroke();

  // 背景（黒下地）
  ctx.strokeStyle = '#111111';
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.arc(cx, cy, barRadius, startAngle, maxAngle, false);
  ctx.stroke();

  // スタミナバー本体
  const ratio = stamina / STAMINA_MAX;
  if (ratio > 0) {
    const endAngle = startAngle + (maxAngle - startAngle) * ratio;
    let color;
    if (ratio >= 0.70) color = '#22c55e';
    else if (ratio >= 0.30) color = '#f97316';
    else color = '#ef4444';

    // バー本体の縁取り
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 12;
    ctx.shadowBlur = 0;
    ctx.beginPath();
    ctx.arc(cx, cy, barRadius, startAngle, endAngle, false);
    ctx.stroke();

    ctx.strokeStyle = color;
    ctx.lineWidth = 8;
    ctx.shadowColor = color;
    ctx.shadowBlur = 8;
    ctx.beginPath();
    ctx.arc(cx, cy, barRadius, startAngle, endAngle, false);
    ctx.stroke();
  }

  ctx.restore();
}

// --- 作戦切り替えアイコン描画 ---
function drawStrategyIcons() {
  if (gameState !== "playing") return;

  const iconW = Math.max(60, Math.round(R * 2.0));
  const iconH = Math.max(80, Math.round(R * 2.7));
  const centerY = cvs.height / 2;
  const canSwitch = strategyChangeCooldown === 0;

  // アイコン色（現在の作戦の逆色 — 赤作戦中は緑アイコン、緑作戦中は赤アイコン）
  const bgColor      = currentStrategy === "red" ? "rgba(10,30,15,0.6)"  : "rgba(30,10,10,0.6)";
  const chevronColor = currentStrategy === "red" ? "#14532d" : "#5c1a2a";
  const labelColor   = currentStrategy === "red" ? "#4ade80" : "#f87171";
  // アイコン下ラベルは「切り替え先」の作戦名を表示
  const labelText    = currentStrategy === "red" ? "ヒーラー" : "アタッカー";
  const labelFontSize = Math.max(10, Math.round(R * 0.48));

  const glowColor = `hsl(${(frame * 4) % 360}, 100%, 65%)`;

  // --- 左アイコン（< シェブロン） ---
  const lx = 0;
  const ly = centerY - iconH / 2;

  ctx.save();
  // 背景
  ctx.globalAlpha = 0.85;
  ctx.fillStyle = bgColor;
  ctx.beginPath();
  ctx.roundRect(lx, ly, iconW, iconH, 8);
  ctx.fill();
  ctx.globalAlpha = 1;

  // 発光エフェクト（切り替え可能時）
  if (canSwitch) {
    ctx.shadowBlur = 20;
    ctx.shadowColor = glowColor;
  }

  // シェブロン < （右2点→左頂点の塗りつぶし三角形）
  ctx.fillStyle = chevronColor;
  ctx.beginPath();
  ctx.moveTo(lx + iconW * 0.76, centerY - iconH * 0.29);
  ctx.lineTo(lx + iconW * 0.24, centerY);
  ctx.lineTo(lx + iconW * 0.76, centerY + iconH * 0.29);
  ctx.closePath();
  ctx.fill();

  // ハイライト線
  ctx.strokeStyle = "rgba(255,255,255,0.3)";
  ctx.lineWidth = 1.5;
  ctx.shadowBlur = 0;
  ctx.stroke();
  ctx.restore();

  // ラベル
  ctx.save();
  ctx.textAlign = "center";
  ctx.font = `bold ${labelFontSize}px system-ui`;
  ctx.fillStyle = labelColor;
  ctx.globalAlpha = 0.9;
  ctx.fillText(labelText, lx + iconW / 2, ly + iconH + labelFontSize + 2);
  ctx.restore();

  // --- 右アイコン（> シェブロン） ---
  const rx = cvs.width - iconW;
  const ry = centerY - iconH / 2;

  ctx.save();
  // 背景
  ctx.globalAlpha = 0.85;
  ctx.fillStyle = bgColor;
  ctx.beginPath();
  ctx.roundRect(rx, ry, iconW, iconH, 8);
  ctx.fill();
  ctx.globalAlpha = 1;

  // 発光エフェクト（切り替え可能時）
  if (canSwitch) {
    ctx.shadowBlur = 20;
    ctx.shadowColor = glowColor;
  }

  // シェブロン > （左2点→右頂点の塗りつぶし三角形）
  ctx.fillStyle = chevronColor;
  ctx.beginPath();
  ctx.moveTo(rx + iconW * 0.24, centerY - iconH * 0.29);
  ctx.lineTo(rx + iconW * 0.76, centerY);
  ctx.lineTo(rx + iconW * 0.24, centerY + iconH * 0.29);
  ctx.closePath();
  ctx.fill();

  // ハイライト線
  ctx.strokeStyle = "rgba(255,255,255,0.3)";
  ctx.lineWidth = 1.5;
  ctx.shadowBlur = 0;
  ctx.stroke();
  ctx.restore();

  // ラベル
  ctx.save();
  ctx.textAlign = "center";
  ctx.font = `bold ${labelFontSize}px system-ui`;
  ctx.fillStyle = labelColor;
  ctx.globalAlpha = 0.9;
  ctx.fillText(labelText, rx + iconW / 2, ry + iconH + labelFontSize + 2);
  ctx.restore();
}

// --- 現在の作戦バッジ描画（進捗バー左下） ---
function drawCurrentStrategyBadge() {
  if (gameState !== "playing") return;

  // スライドアニメーション（easing）
  if (strategyBadgeOffsetX < 0) {
    strategyBadgeOffsetX += (-strategyBadgeOffsetX) * 0.18 + 1.5;
    if (strategyBadgeOffsetX > -0.5) strategyBadgeOffsetX = 0;
  }

  const isRed = currentStrategy === "red";
  const text = isRed ? "⚔ アタッカー" : "✦ ヒーラー";
  const colorA = isRed ? "#ff4444" : "#22c55e";
  const colorB = isRed ? "#991b1b" : "#14532d";
  const glowCol = isRed ? "rgba(255,80,80,0.7)" : "rgba(34,197,94,0.7)";
  const fontSize = Math.max(13, Math.round(R * 0.6));
  const padX = 14, padY = 6;
  const baseX = 20;
  const baseY = 28;

  ctx.save();
  ctx.font = `bold ${fontSize}px system-ui`;
  const tw = ctx.measureText(text).width;
  const bw = tw + padX * 2;
  const bh = fontSize + padY * 2;
  const x = baseX + strategyBadgeOffsetX;
  const y = baseY;
  const r = 6;

  // 外側グロー
  ctx.shadowColor = glowCol;
  ctx.shadowBlur = 14;

  // グラデーション背景
  const grad = ctx.createLinearGradient(x, y, x, y + bh);
  grad.addColorStop(0, colorA);
  grad.addColorStop(1, colorB);
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.roundRect(x, y, bw, bh, r);
  ctx.fill();

  // 上半分ハイライト（光沢）
  ctx.shadowBlur = 0;
  const shine = ctx.createLinearGradient(x, y, x, y + bh * 0.5);
  shine.addColorStop(0, "rgba(255,255,255,0.25)");
  shine.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = shine;
  ctx.beginPath();
  ctx.roundRect(x, y, bw, bh * 0.55, [r, r, 0, 0]);
  ctx.fill();

  // 枠線
  ctx.strokeStyle = "rgba(255,255,255,0.45)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.roundRect(x, y, bw, bh, r);
  ctx.stroke();

  // テキスト（ドロップシャドウ風）
  ctx.fillStyle = "rgba(0,0,0,0.4)";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText(text, x + padX + 1, y + padY + 1);
  ctx.fillStyle = "#ffffff";
  ctx.fillText(text, x + padX, y + padY);

  ctx.textBaseline = "alphabetic";
  ctx.restore();
}

function drawSongSelectScreen() {
  const NUM_CARDS = 3;
  const gap = Math.round(cvs.width * 0.03);
  const cardW = Math.round((cvs.width * 0.72) / NUM_CARDS);
  const jacketSize = Math.round(cardW * 0.72);
  const titleFontSize = Math.max(11, Math.round(cardW * 0.075));
  const scoreFontSize = Math.max(10, Math.round(cardW * 0.065));
  const cardH = jacketSize + titleFontSize + scoreFontSize + 44;
  const totalW = NUM_CARDS * cardW + (NUM_CARDS - 1) * gap;
  const startX = Math.round((cvs.width - totalW) / 2);
  const cardY = Math.round(cvs.height * 0.08);

  // カードデータ（1曲目は実データ、2・3曲目はプレースホルダー）
  const cards = [
    { title: SONGS[0].title, jacketEl: document.getElementById(SONGS[0].jacketId), active: true },
    { title: '？？？', jacketEl: null, active: false },
    { title: '？？？', jacketEl: null, active: false },
  ];

  for (let i = 0; i < NUM_CARDS; i++) {
    const card = cards[i];
    const cardX = startX + i * (cardW + gap);
    const jacketX = Math.round(cardX + (cardW - jacketSize) / 2);
    const jacketY = cardY + 12;

    // カード背景
    ctx.save();
    if (card.active) {
      ctx.shadowColor = "rgba(57,255,20,0.3)";
      ctx.shadowBlur = 20;
      ctx.fillStyle = "rgba(15,23,42,0.92)";
      ctx.strokeStyle = "rgba(57,255,20,0.55)";
      ctx.lineWidth = 2;
    } else {
      ctx.fillStyle = "rgba(15,23,42,0.5)";
      ctx.strokeStyle = "rgba(100,116,139,0.35)";
      ctx.lineWidth = 1;
    }
    ctx.beginPath();
    ctx.roundRect(cardX, cardY, cardW, cardH, 10);
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    // ジャケット画像
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(jacketX, jacketY, jacketSize, jacketSize, 8);
    ctx.clip();
    if (card.jacketEl && card.jacketEl.complete && card.jacketEl.naturalWidth > 0) {
      ctx.drawImage(card.jacketEl, jacketX, jacketY, jacketSize, jacketSize);
    } else {
      ctx.fillStyle = "#1e293b";
      ctx.fillRect(jacketX, jacketY, jacketSize, jacketSize);
      ctx.fillStyle = "#475569";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = `bold ${Math.round(jacketSize * 0.11)}px system-ui`;
      ctx.fillText("NO IMAGE", jacketX + jacketSize / 2, jacketY + jacketSize / 2);
    }
    ctx.restore();

    const textBaseY = jacketY + jacketSize + 14;
    const cx = cardX + cardW / 2;

    // 曲タイトル
    ctx.save();
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.font = `bold ${titleFontSize}px system-ui`;
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#000";
    ctx.strokeText(card.title, cx, textBaseY);
    ctx.fillStyle = card.active ? "#ffffff" : "#64748b";
    ctx.fillText(card.title, cx, textBaseY);

    // ベストスコア（1曲目のみ）
    if (card.active) {
      const bsLabel = `BEST: ${bestScore > 0 ? bestScore.toLocaleString('ja-JP') : '---'}`;
      ctx.font = `bold ${scoreFontSize}px system-ui`;
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#000";
      ctx.strokeText(bsLabel, cx, textBaseY + titleFontSize + 8);
      ctx.fillStyle = "#ffd700";
      ctx.fillText(bsLabel, cx, textBaseY + titleFontSize + 8);
    }
    ctx.restore();
  }
}

function render(){
   ctx.clearRect(0,0,cvs.width,cvs.height);

  // --- タイトル画面 ---
  if(gameState==="init"){
    if(titleImg.complete && titleImg.naturalWidth > 0) {
      ctx.drawImage(titleImg, 0, 0, cvs.width, cvs.height);
    } else {
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(0,0,cvs.width,cvs.height);
    }
    return;
  }

  // --- 曲選択画面 ---
  if(gameState==="songSelect"){
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0,0,cvs.width,cvs.height);
    if(bgimg.complete && bgimg.naturalWidth > 0) {
      ctx.save();
      ctx.globalAlpha = 0.15;
      ctx.drawImage(bgimg, 0, 0, cvs.width, cvs.height);
      ctx.globalAlpha = 1;
      ctx.restore();
    }
    drawSongSelectScreen();
    return;
  }

  // 背景画像（30%不透明度）をcanvas全体に描画
  if(bgimg.complete && bgimg.naturalWidth > 0) {
    ctx.save();
    ctx.globalAlpha = 0.3;
    ctx.drawImage(bgimg, 0, 0, cvs.width, cvs.height);
    ctx.globalAlpha = 1;
    ctx.restore();
  } else {
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0,0,cvs.width,cvs.height);
  }
  
  if(gameState!=="countdown" && gameState!=="playing" && gameState!=="clear" && gameState!=="result") return;

  drawProgressBarWithAC();
  drawTargets();
  drawNotes();
  drawHitRings();
  drawSPGauge();
  drawStaminaBar();
  drawStrategyIcons();
  drawCurrentStrategyBadge();
  drawPopups();
  drawUI();
  drawOverlays();
  drawSPBoostFrame();
  drawSkillHistory();
  drawACMissionNotice();
  drawACFailFlash();
  
  if(gameState==="countdown"){
    const txt = countdownValue>0 ? countdownValue : 1;
    ctx.textAlign='center';
    ctx.font=`bold ${Math.round(cvs.height*0.22)}px system-ui`;
    ctx.lineWidth=10; ctx.strokeStyle='#000'; ctx.strokeText(txt, cvs.width/2, cvs.height/2);
    ctx.fillStyle='#fff'; ctx.fillText(txt, cvs.width/2, cvs.height/2);
    return;
  }
  drawSPCountdown();
  if(gameState==="clear"){
    ctx.textAlign='center';
    ctx.font=`bold ${Math.round(cvs.height*0.14)}px system-ui`;
    ctx.lineWidth=10; ctx.strokeStyle='#fff'; ctx.strokeText('CLEAR', cvs.width/2, cvs.height/2);
    ctx.fillStyle='#ffa500'; ctx.fillText('CLEAR', cvs.width/2, cvs.height/2);
    return;
  }
  if(gameState==="result"){
    retryBtn.style.display = "block";
    reseedBtn.style.display = "block"; // 乱数再現ボタン表示
    const t = Math.min(1, (frame - (resultStartFrame||frame)) / 60);
    const scale = 0.8 + 0.2*Math.sin(t*Math.PI/2);
    const alpha = 0.5 + 0.5*t;
    ctx.save();
    ctx.translate(cvs.width/2, cvs.height/2);
    ctx.scale(scale, scale);
    ctx.textAlign='center';

    ctx.font=`bold ${Math.round(cvs.height*0.10)}px system-ui`;
    ctx.lineWidth=8; ctx.strokeStyle='#000'; ctx.strokeText('RESULT', 0, -90);
    ctx.fillStyle='#ffa500'; ctx.fillText('RESULT', 0, -90);

    // 曲名
    const scoreFontSize = Math.round(cvs.height*0.07);
    ctx.font = `bold ${scoreFontSize}px system-ui`;
    ctx.lineWidth = 8;
    ctx.strokeStyle = "#000";
    ctx.strokeText("ユメ語るよりユメ歌おう", 0, -36);
    ctx.fillStyle = "#fff";
    ctx.fillText("ユメ語るよりユメ歌おう", 0, -36);

    // SCORE
    ctx.font=`bold ${scoreFontSize}px system-ui`;
    ctx.lineWidth=10; ctx.strokeStyle='#000'; ctx.strokeText(`SCORE: ${score}`, 0, 0);
    ctx.fillStyle='#39ff14'; ctx.fillText(`SCORE: ${score}`, 0, 0);
    // BEST SCORE表示
    ctx.font=`bold ${scoreFontSize*0.8}px system-ui`;
    ctx.lineWidth=8;
    ctx.strokeStyle="#000";
    ctx.strokeText(`BEST SCORE: ${bestScore}`, 0, 28);
    ctx.fillStyle="#ffd700";
    ctx.fillText(`BEST SCORE: ${bestScore}`, 0, 28);

    ctx.font=`bold ${Math.round(cvs.height*0.04)}px system-ui`;
    ctx.lineWidth=6; ctx.strokeStyle='#000';
    ctx.strokeText(`特技発動回数: ${skillActivationCount}`, 0, 60);
    ctx.strokeText(`SP使用回数: ${spUseCount}`, 0, 80);
    ctx.fillStyle='#e5faff';
    ctx.fillText(`特技発動回数: ${skillActivationCount}`, 0, 60);
    ctx.fillText(`SP使用回数: ${spUseCount}`, 0, 80);

    ctx.restore();
    drawJudgeCountsResult();
    return;
  } else {
    retryBtn.style.display = "none";
    reseedBtn.style.display = "none";
  }
}
function loop(){ update(); render(); requestAnimationFrame(loop); }
(function start(){ loop(); })();
