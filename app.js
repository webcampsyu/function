/*関数
関数(function)は繰り返し使われる一連の処理を1つにまとめたもの
funciton 関数名{
  処理内容
}

引数・・・入力する値
引数は[,]でつないで複数の指定も可能。複数指定するとそれぞれ順番に引数が
格納される

戻り値/・・・出力される値

関数の結果を出力したいときはreturn内に戻り値を渡す
function 関数名{
  処理内容
  return 戻り値;
}
*/
/*
function addString(strA){ //functionの後に関数名[addString]を記述し、引数として[strA]を定義
  let addStr = "Hello " + strA; //変数名[addStr]に[Hello]の文字列と関数の引数[strA]に設定されている文字列を結合
  return addStr; //結合結果の格納された[addStr]を関数の戻り値としている
}
*/

//作成した関数を呼び出す
//メイン部分
let alertString;
//作成した関数を呼び出し、変数へ格納
alertString = addString("WebCamp");
//変数の中身をアラートで表紙
alert(alertString);
//作成した関数
function addString(strA){
  let addStr = "Hello " + strA;
  return addStr;
}

//入力ダイアログで値を入力する
/*ブラウザ上で文字を入力するには通常、フォームが使われる*/
/*
let promptStr = prompt('何か好きな文字を入力してください。 ');
alert(promptStr);
*/

//複数の関数を定義する
/*
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。 ');
alert('あなたの選んだ手は' + user_hand + 'です。 ');
*/

/*
function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3);
  //乱数を生成する関数を設定
  //Math.floor(Math.random() * 3)は0~2までのランダムな整数値を生成
  //関数内の[3]はランダム生成したい整数値の+1を指定している
  
  //ランダム生成された数値を基に条件分岐させる
  if(js_hand_num == 0){
    js_hand = "グー";
  } else if(js_hand_num == 1){
    js_hand = "チョキ"
  } else if(js_hand_num == 2){
    js_hand = "パー";
  }
  return js_hand;
}
*/

// じゃんけんの手を入力してもらうプロンプト欄を生成
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

//指定文字列以外が入力されたときアラーとウィンドウにエラーを表示
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert('グー・チョキ・パーのいずれかを入力してください');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください');
}
// じゃんけんの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
let judge = winLose(user_hand, js_hand);

//キャンセルボタンが押されたときにアラートメッセージが出力される
if (user_hand != null){
// 結果を表示する
alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
} else {
  alert("またチャレンジしてね")
}

// ランダムでじゃんけんの手を作成する関数
function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3 );
  let hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}


//ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
  let winLoseStr;
  
  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}