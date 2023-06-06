// ------------------ 動作に関する処理を記述 ------------------

// グローバル変数の指定
let screenCanvas, info;
let run = true;
let fps = 1000 / 30; // 1000ﾐﾘ秒(1秒)に30回更新
let mouse = new Point(); // common.jsのPointクラスを格納して座標位置を取得

// メイン処理
window.onload = function() {

    // スクリーン(canvas)の初期化
    screenCanvas = document.getElementById('screen');
    screenCanvas.width = 256;
    screenCanvas.height = 256;

    // イベントの登録
    screenCanvas.addEventListener('mousemove', mouseMove, true);
    window.addEventListener('keydown', keyDown, true);

    // エレメント関連
    info = document.getElementById('info');

    // ループ処理で画面を更新
    (function() {
        // HTMLを更新
        info.innerHTML = mouse.x + ' : ' + mouse.y;

        // フラグにより再帰呼び出し
        if(run) {
            setTimeout(arguments.callee,fps);
        }
    })();
};

// イベント処理
function mouseMove(event) {
    // マウスカーソル座標の更新
    mouse.x = event.clientX - screenCanvas.offsetLeft;
    mouse.y = event.clientY - screenCanvas.offsetTop;
}

function keyDown(event) {
    // キーコードを取得
    let ck = event.keyCode;

    // Escキー(keycode:27)押下でfalse
    if(ck == 27) {
        run = false;
    }
}