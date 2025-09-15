// --- AC（アピールチャンス）設定（timeベース完全版） ---
const acList = [
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
];
  
// --- 必須グローバル変数 ---
const cvs = document.getElementById('game');
const ctx = cvs.getContext('2d');
const rotateMsg = document.getElementById('rotateMsg');
const startBtn = document.getElementById('startBtn');
const retryBtn = document.getElementById('retryBtn');
const bgm = document.getElementById('bgm');
const bgimg = document.getElementById('bgimg');
bgm.volume = 0.1;


// --- 譜面データを直接埋め込む ---
const notesChart = [
  {"time": 0.54, "side": "left"},
  {type:"long", side:"right", time:0.54, endTime:1.11},//テスト
  {"time": 1.11, "side": "left"},
  {"time": 1.48, "side": "right"},
  {type:"long", side:"left", time:1.86, endTime:2.99},//テスト
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
];
  
// --- グローバル変数 ---
let chartIndex = 0, R=30, leftTarget={x:0,y:0,r:0}, rightTarget={x:0,y:0,r:0}, spRadius=80;
let SP_MAX=6000, spValue=0, spFullNotified=false, score=0, combo=0, notes=[], frame=0, noteDuration=55;
let bestScore = Number(localStorage.getItem('bestScore')) || 0;
let spFlashTimer=0, spRingTimer=0, spRingSpeed=20, spRingRange=40, spBoostTimer=0, spCountdownTimer=0, spCountdownValue=0;
let popups=[], hitRings=[], lastInputWasTouch=false;
let gameState = "init", countdownValue = 3, totalNotesSpawned = 0, clearStartFrame = null, resultStartFrame = null;
let skillHistory = [], appealBoostNotes = 0, skillActivationCount = 0, spUseCount = 0, progressDisplay = 0;
let judgeCount = {CRITICAL:0,WONDERFUL:0,GREAT:0,NICE:0,BAD:0,MISS:0};
let spScoreBuffNotes = 0, noteCounter = 0, totalSPUsed = 0, permanentScoreBuff = 0, acFailFlashTimer = 0, waitingClearFrame = null;
let audioContext, tapBuffer = null;
  
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
  for (let i = 0; i < notesChart.length; i++) {
    const diff = Math.abs(notesChart[i].time - time);
    if (diff < minDiff) {
      minDiff = diff;
      idx = i;
    }
  }
  return idx;
}
  
// --- assignACNoteIndexes ---
function assignACNoteIndexes() {
  for (const ac of acList) {
    // 開始ノーツidx: startTime以上で最初
    ac.startIdx = notesChart.findIndex(n => n.time >= ac.startTime);
    // 終了ノーツidx: endTime以下で最後
    let lastIdx = -1;
    for (let i = 0; i < notesChart.length; i++) {
      if (notesChart[i].time <= ac.endTime) lastIdx = i;
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

// 効果音再生
function playTapSE() {
  if (!tapBuffer) return;
  const source = audioContext.createBufferSource();
  source.buffer = tapBuffer;
  source.connect(audioContext.destination);
  source.start(0);
}
  
// --- AC（アピールチャンス）関連（進捗保存のため追加） ---
  acList.forEach(ac => {
    ac.tapScore = 0; // タップで得たスコア
    ac.spScore = 0;  // SP発動で得たスコア
  });
  
// --- AC取得関数 ---
function getActiveACByTime(nowTime) {
  return acList.find(ac =>
    (ac.state === "active" || (ac.state === "cleared" && nowTime >= ac.startTime + noteTravelSec && nowTime <= ac.endTime + noteTravelSec))
    && nowTime >= ac.startTime + noteTravelSec && nowTime <= ac.endTime + noteTravelSec
  );
}
function isACActiveByTime(nowTime) {
  return !!getActiveACByTime(nowTime);
}
function isACClearedNowByTime(nowTime) {
  return !!acList.find(ac =>
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
    return;
  }
  rotateMsg.style.display='none';
  cvs.style.display='block';
  if(gameState==="init") startBtn.style.display='block';
  else startBtn.style.display='none';
  if(gameState==="result") retryBtn.style.display='block';
  else retryBtn.style.display='none';
  cvs.width = window.innerWidth;
  cvs.height= window.innerHeight;
  const minDim=Math.min(cvs.width, cvs.height);
  R = Math.max(18, Math.round(minDim*0.04));
  const laneGap = R*4.5;
  const targetY = Math.round(cvs.height*0.7);
  leftTarget  ={x: Math.round(cvs.width/2 - laneGap), y: targetY, r: R};
  rightTarget ={x: Math.round(cvs.width/2 + laneGap), y: targetY, r: R};
  spRadius = Math.max(64, Math.round(minDim*0.12));
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function cubicBezier(p0,p1,p2,p3,t){const u=1-t;return {x:u*u*u*p0.x+3*u*u*t*p1.x+3*u*t*t*p2.x+t*t*t*p3.x,y:u*u*u*p0.y+3*u*u*t*p1.y+3*u*t*t*p2.y+t*t*t*p3.y};}
function makePath(side){const target= side==='left'? leftTarget : rightTarget;const startX = side==='left' ? (-R*2-10) : (cvs.width+R*2+10);const start={x:startX, y: target.y - Math.max(180, R*6)};const c1={x: side==='left' ? target.x - Math.max(200,R*6) : target.x + Math.max(200,R*6), y: target.y - Math.max(200,R*6)};const c2={x: side==='left' ? target.x - Math.max(60,R*2)  : target.x + Math.max(60,R*2),  y: target.y - Math.max(40,R*1.3)};const end={x: target.x, y: target.y};return {p0:start,p1:c1,p2:c2,p3:end};}
// --- spawnNoteにchartIdxを持たせる ---
function spawnNote(side, chartIdx){
  const chartObj = notesChart[chartIdx];
  if (chartObj.type === "long") {
    notes.push({
      type: "long",
      side,
      t: 0,
      duration: noteDuration,
      path: makePath(side),
      chartIdx,
      holdActive: false, // ホールド開始したか
      holdJudge: false,  // 判定済みか
      holdStartFrame: null,
      holdSuccess: false,
      endTime: chartObj.endTime
    });
  } else {
    notes.push({
      type: "tap",
      side,
      t: 0,
      duration: noteDuration,
      path: makePath(side),
      chartIdx,
      judged: false
    });
  }
}
function addPopup(text,x,y,ms,type){const d=Math.max(1,Math.round(ms/16.67));popups.push({text,x,y,timer:d,duration:d,type});}
function triggerSPVisual(){ spFlashTimer=10; spRingTimer=spRingSpeed; }
  
// --- AC進行チェック（nowTimeで判定） ---
function updateACOnTap(pointsWithCombo, nowTime) {
  noteCounter++;
  acList.forEach(ac => {
    
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
        if(Math.random() < 0.3){
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
      acFailFlashTimer = 18; // 0.3秒間赤フラッシュ
      skillHistory.unshift({text: "AC失敗！", life:180});
      if(skillHistory.length>5) skillHistory.pop();
    }
  });
}

function updateACOnSPUse(nowTime, spScore) {
  totalSPUsed++;
  acList.forEach(ac => {
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
}, { once: true });
window.addEventListener('mousedown', () => {
  loadTapSE();
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
        const ci = notesChart[ni.chartIdx];
        const cj = notesChart[nj.chartIdx];
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
  if(Math.random()<0.3){ points=Math.floor(points*1.5); label='CRITICAL'; }
  if(spBoostTimer>0) points=Math.floor(points*1.1);
  points=Math.min(50000, points);
  const reset = (label==='NICE' || label==='BAD');
  return {points,label,reset};
}

// --- スコア加算処理 ---
function awardHit(target, points, label, resetCombo, baseRaw, chartIdx){
  playTapSE();
  let nowTime = bgm.currentTime || 0;
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
  if(Math.random() < 0.33){
  skillActivationCount++;
  const skillType = Math.floor(Math.random()*3);
  if(skillType===0){
    // --- ボルテージ獲得(バフ適用版) ---
    let voltage = baseRaw;
    if (appealBoostNotes > 0) voltage = Math.ceil(voltage * 1.12);
    if (spBoostTimer > 0) voltage = Math.floor(voltage * 1.1);
    const comboBonus = getComboBonus(combo + 1);
    voltage = Math.floor(voltage * comboBonus);
    let nowTime = bgm.currentTime || 0;
    if (isACActiveByTime(nowTime) || isACClearedNowByTime(nowTime)) voltage = Math.floor(voltage * 1.1);
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
    if(skillHistory.length>5) skillHistory.pop();
  }

  // AC開始バフ抽選（STARTノーツ到達時のみ）
  for(const ac of acList){
    if(ac.state === "waiting" && chartIdx === ac.startIdx){
      ac.state = "active";
      if(Math.random() < 0.3){
        permanentScoreBuff++;
        skillHistory.unshift({text:"[アピール増加永続 5%]", life:180});
        if(skillHistory.length>5) skillHistory.pop();
      }
    }
  }

  updateACOnTap(pointsWithCombo, nowTime);
}
  
function applyMiss(label='MISS'){
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
    if(Math.random()<0.5){
      spValue = Math.min(SP_MAX, spValue + 600);
      skillHistory.unshift({text:`[SPゲージ獲得]`, life:180});
      if(skillHistory.length>5) skillHistory.pop();
    }
  }
  if(Math.random() < 0.5){
    spScoreBuffNotes = 15;
    skillHistory.unshift({text: "[アピール増加 10%]", life:180});
    if(skillHistory.length>5) skillHistory.pop();
  }
  updateACOnSPUse(nowTime, spScore);
  return true;
}
  
// == タップ時の処理 ==
// ペアも単発も「距離判定」で、2本指時は同時ペアの右→左の順で個別に判定・消去
function handlePointer(e){
  if(gameState!=="playing") return;
  const isTouch = e.type && e.type.startsWith('touch');
  let pointerPositions = [];
  let fingers = 1;
  if(isTouch){
    lastInputWasTouch=true;
    e.preventDefault();
    fingers = (e.touches && e.touches.length) ? e.touches.length : 1;
    const rect = cvs.getBoundingClientRect();
    const scaleX = cvs.width / rect.width;
    const scaleY = cvs.height / rect.height;
    for(const t of e.touches){
      const mx = (t.clientX-rect.left)*scaleX;
      const my = (t.clientY-rect.top )*scaleY;
      if(isInSPSemicircle(mx,my)){
        if(spValue >= SP_MAX){ tryUseSP(mx,my); }
        return;
      }
      pointerPositions.push({x: mx, y: my});
    }
  }else{
    const rect = cvs.getBoundingClientRect();
    const scaleX = cvs.width / rect.width;
    const scaleY = cvs.height / rect.height;
    const mx = (e.clientX-rect.left)*scaleX;
    const my = (e.clientY-rect.top )*scaleY;
    if(isInSPSemicircle(mx,my)){
      if(spValue >= SP_MAX){ tryUseSP(mx,my); }
      return;
    }
    pointerPositions.push({x: mx, y: my});
  }

  // === コア判定 ===
  if(fingers >= 2){
    const pairs = getSimultaneousPairsInNotes(); // [[nL, nR], ...]
    for (const [nL, nR] of pairs) {
      let right = nL, left = nR;
      if(notesChart[nL.chartIdx]?.side === "left" && notesChart[nR.chartIdx]?.side === "right"){
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

  // ==== どこタップでも反応 ====
  let hitNotes = new Set();
  for(const p of pointerPositions){
    let best = null, bestDist = Infinity;
    for(const n of notes){
      if(hitNotes.has(n)) continue;
      if(n.type === "long" && (n.holdActive || n.holdJudge)) continue;
      const progress = Math.min(1, n.t / n.duration);
      const pos = cubicBezier(n.path.p0, n.path.p1, n.path.p2, n.path.p3, progress);
      const dist = Math.hypot(pos.x-p.x, pos.y-p.y);
      if(dist < bestDist){
        best = n; bestDist = dist;
      }
    }
    if(best){
      const baseRaw = calcTapBase();
      const {points, label, reset} = calcTapScoreAndLabel(bestDist, baseRaw);
      if(label !== "MISS"){
        awardHit(
          best.side === "left" ? leftTarget : rightTarget,
          points, label, reset, baseRaw, best.chartIdx
        );
        if(best.type === "tap") best.judged = true;
        if(best.type === "long"){
          best.holdActive = true;
          best.holdStartFrame = frame;
        }
        hitNotes.add(best);
      }
    }
  }
}

  
  // 1. 単発ノーツ（左右別）従来のまま
  function isNotPairNote(n){
    return !notes.some(other =>
      other !== n &&
      notesChart[n.chartIdx]?.time === notesChart[other.chartIdx]?.time &&
      notesChart[n.chartIdx]?.side !== notesChart[other.chartIdx]?.side
    );
  }
  let targetNotes = notes.filter(isNotPairNote);

  let bestL = null, bestDistL = Infinity;
  for(const n of targetNotes){
    if(n.side !== 'left') continue;
    const pos = cubicBezier(n.path.p0, n.path.p1, n.path.p2, n.path.p3, Math.min(1, n.t/n.duration));
    // 全指で一番近い指
    for(let p of pointerPositions){
      const dist = Math.hypot(pos.x-p.x, pos.y-p.y);
      if(dist < bestDistL){ bestDistL = dist; bestL = n; }
    }
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
    for(let p of pointerPositions){
      const dist = Math.hypot(pos.x-p.x, pos.y-p.y);
      if(dist < bestDistR){ bestDistR = dist; bestR = n; }
    }
  }
  if(bestR){
    const baseRaw = calcTapBase();
    const res = calcTapScoreAndLabel(bestDistR, baseRaw);
    if(res.label !== 'MISS'){
      awardHit(rightTarget, res.points, res.label, res.reset, baseRaw, bestR.chartIdx);
      notes = notes.filter(n => n !== bestR);
    }
  }

  // 2. ロングノーツ始点判定（どこタップでもOK、個別に判定）
  for(const n of notes){
    if(n.type === "long" && !n.holdActive && !n.holdJudge){
      // 始点まで到達していたら全指で判定
      if(n.t >= n.duration){
        const pos = cubicBezier(n.path.p0, n.path.p1, n.path.p2, n.path.p3, 1);
        for(let p of pointerPositions){
          const dist = Math.hypot(pos.x-p.x, pos.y-p.y);
          // 判定ゾーンに指が入ったらホールド開始
          if(dist < R*1.2){
            n.holdActive = true;
            n.holdStartFrame = frame;
            break;
          }
        }
      }
    }
  }
}

// --- イベント登録 ---
cvs.addEventListener('touchstart',handlePointer,{passive:false});
cvs.addEventListener('mousedown',handlePointer);

startBtn.onclick = async function() {
  await loadTapSE();
  assignACNoteIndexes();
  if(gameState === "init"){
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

    // --- 永続バフ初期化&50%で発動処理 ---
    permanentScoreBuff = 0;
    if(Math.random() < 0.5){
      permanentScoreBuff++;
      skillHistory.unshift({text:"[アピール増加永続 5%]", life:180});
      if(skillHistory.length>5) skillHistory.pop();
    }

    // AC状態リセット
    acList.forEach(ac=>{
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
  }
};
  
// --- リトライボタン挙動 ---
retryBtn.onclick = ()=>{
  gameState = "init";
  startBtn.style.display = "block";
  retryBtn.style.display = "none";
  resizeCanvas();
  try{ bgm.pause(); }catch(e){}
  bgm.currentTime = 0;
  permanentScoreBuff = 0;
  acList.forEach(ac=>{
    ac.state = "waiting";
    ac.progress = 0;
    ac.cleared = false;
    ac.tapScore = 0;
    ac.spScore = 0;
  });
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
  // ↓↓↓ iif→ifに修正！
  if (gameState === "playing" && !bgm.paused) {
    const bgmNowSec = bgm.currentTime;
    while (chartIndex < notesChart.length) {
      const entry = notesChart[chartIndex];
      const appearTime = entry.time - noteTravelSec;
      if (bgmNowSec >= appearTime) {
        spawnNote(entry.side, chartIndex);
        totalNotesSpawned++;
        chartIndex++;
      } else {
        break;
      }
    }
    if(acFailFlashTimer > 0) acFailFlashTimer--;
  }
  // ノーツ進行
  for(const n of notes) n.t++;
  updateLongNotes();
  // ノーツ消去
  const keep = [];
  for(const n of notes){
    if(n.type === "tap") {
      if(!n.judged && n.t<=n.duration+5) keep.push(n);
      else if(!n.judged) applyMiss('MISS');
    } else if(n.type === "long") {
      const holdFrames = Math.round(((n.endTime||0)-(notesChart[n.chartIdx]?.time||0))*60);
      if(!n.holdJudge && n.t<=n.duration+holdFrames+5) keep.push(n);
      else if(!n.holdJudge) applyMiss('MISS');
    }
  }
  notes = keep;
  if(gameState==="playing" && chartIndex>=notesChart.length && notes.length===0){
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
    if(score > bestScore) {
      bestScore = score;
      localStorage.setItem('bestScore', bestScore);
    }
  }
  if(spValue>=SP_MAX){ if(!spFullNotified){ triggerSPVisual(); spFullNotified=true; } }
  else spFullNotified=false;
  if(spCountdownTimer>0){ spCountdownTimer--; if(spCountdownTimer % 60 === 0){ spCountdownValue = Math.max(0, spCountdownValue-1); } }
  const clearedNotes = chartIndex - notes.length;
  const targetProgress = notesChart.length>0 ? Math.min(1, clearedNotes / notesChart.length) : 0;
  progressDisplay += (targetProgress - progressDisplay) * 0.2;
  skillHistory.forEach(h=>h.life--);skillHistory = skillHistory.filter(h=>h.life>0);
  if(spFlashTimer>0) spFlashTimer--;
  if(spRingTimer>0)  spRingTimer--;
  if(spBoostTimer>0) spBoostTimer--;
  hitRings=hitRings.filter(r=>{r.r+=4; r.alpha-=0.06; return r.alpha>0;});
  popups=popups.filter(p=>{p.timer--; return p.timer>0;});
}

// 4. タッチ位置管理
let lastTouches = [];
cvs.addEventListener('touchstart', e => { updateTouches(e); handlePointer(e); }, {passive:false});
cvs.addEventListener('touchmove', e => { updateTouches(e); });
cvs.addEventListener('touchend', e => { updateTouches(e); });
cvs.addEventListener('mousedown', e => { lastTouches = [{x: e.offsetX, y: e.offsetY}]; handlePointer(e); });
cvs.addEventListener('mousemove', e => { if (e.buttons) lastTouches = [{x: e.offsetX, y: e.offsetY}]; });
cvs.addEventListener('mouseup', e => { lastTouches = []; });
function updateTouches(e){
  if(e.touches){
    const rect = cvs.getBoundingClientRect();
    lastTouches = [];
    for(let t of e.touches){
      lastTouches.push({
        x: (t.clientX-rect.left)*(cvs.width/rect.width),
        y: (t.clientY-rect.top )*(cvs.height/rect.height)
      });
    }
  } else {
    lastTouches = e.buttons ? [{x: e.offsetX, y: e.offsetY}] : [];
  }
}

// 5. 判定関数
function getNearestFinger(pos){
  let minDist = Infinity;
  for(let t of lastTouches){
    const d = Math.hypot(pos.x-t.x, pos.y-t.y);
    if(d < minDist) minDist = d;
  }
  return minDist;
}

// 6. ロングノーツ判定（毎フレームupdateで呼ぶ）
function updateLongNotes(){
  for(const n of notes){
    if(n.type === "long" && n.holdActive && !n.holdJudge){
      // 判定円の上に指があるかを距離判定
      const pos = n.side === "left" ? leftTarget : rightTarget;
      const dist = getNearestFinger(pos);
      if(dist > R*1.8){
        n.holdJudge = true;
        n.holdSuccess = false;
        applyMiss('MISS');
      }
      // 終了まで押してたら成功
      const holdFrames = Math.round((n.endTime - notesChart[n.chartIdx].time) * 60);
      if(frame - n.holdStartFrame >= holdFrames){
        n.holdJudge = true;
        n.holdSuccess = true;
        awardHit(
          n.side === "left" ? leftTarget : rightTarget,
          calcTapBase(),
          "WONDERFUL",
          false,
          calcTapBase(),
          n.chartIdx
        );
      }
    }
  }
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
        const ni = notesChart[n1.chartIdx];
        const nj = notesChart[n2.chartIdx];
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
    const noteInfo = notesChart[n.chartIdx];
    if(!noteInfo) continue;
    const noteTime = noteInfo.time;
    const idx = n.chartIdx;

    // AC区間に入っているか（indexベースで判定）
    let isAcCleared = false;
    for(const ac of acList){
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

    // ロングノーツ
    if(n.type === "long"){
      // 始点（進行位置）
      const progress = Math.min(1, n.t / n.duration);
      const posStart = cubicBezier(n.path.p0, n.path.p1, n.path.p2, n.path.p3, progress);
      // 終点
      const posEnd = n.side === "left" ? leftTarget : rightTarget;
      // 帯
      ctx.save();
      ctx.strokeStyle = "rgba(0,255,128,0.36)";
      ctx.lineWidth = R*0.7;
      ctx.beginPath();
      ctx.moveTo(posStart.x, posStart.y);
      ctx.lineTo(posEnd.x, posEnd.y);
      ctx.stroke();
      ctx.restore();
      // 両端円
      ctx.save();
      ctx.beginPath();
      ctx.arc(posStart.x, posStart.y, R, 0, Math.PI*2);
      ctx.fillStyle = "#ffd700";
      ctx.globalAlpha = 0.82;
      ctx.fill();
      ctx.restore();
      ctx.save();
      ctx.beginPath();
      ctx.arc(posEnd.x, posEnd.y, R, 0, Math.PI*2);
      ctx.fillStyle = "#ffd700";
      ctx.globalAlpha = 0.82;
      ctx.fill();
      ctx.restore();
      continue;
    }

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
    for(const ac of acList){
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
  const ac = acList.find(ac => (ac.state === "active" || ac.state === "cleared") &&
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
  let lastNoteTime = notesChart[notesChart.length-1]?.time || 0;
  let fallbackSongLen = lastNoteTime + noteTravelSec + 3;
  let songLen = (bgm.duration && !isNaN(bgm.duration) && bgm.duration > 1)
    ? bgm.duration
    : fallbackSongLen;
  for(const ac of acList){
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

function render(){
   ctx.clearRect(0,0,cvs.width,cvs.height);
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
  
  drawProgressBarWithAC();
  drawTargets();
  drawNotes();
  drawHitRings();
  drawSPGauge();
  drawPopups();
  drawUI();
  drawOverlays();
  drawSPBoostFrame();
  drawSkillHistory();
  drawACMissionNotice();
  drawACFailFlash();
  
  if(gameState==="init"){ return; }
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
  }
}
function loop(){ update(); render(); requestAnimationFrame(loop); }

(function start(){ loop(); })();





