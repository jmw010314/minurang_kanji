const WORD_DATA = [
  {
    "number": 1,
    "word": "-いん",
    "kanji": "員",
    "meaning": "…원 (회사+원 등)"
  },
  {
    "number": 2,
    "word": "-おき",
    "kanji": "置き",
    "meaning": "…간격. …걸러"
  },
  {
    "number": 3,
    "word": "-かい",
    "kanji": "階",
    "meaning": "…층"
  },
  {
    "number": 4,
    "word": "-かい",
    "kanji": "回",
    "meaning": "…회. …번(횟수)"
  },
  {
    "number": 5,
    "word": "-かげつ",
    "kanji": "か月",
    "meaning": "…개월"
  },
  {
    "number": 6,
    "word": "-がる",
    "kanji": "",
    "meaning": "…어하다 (したがる ; 하고 싶어하다)"
  },
  {
    "number": 7,
    "word": "-くん",
    "kanji": "君",
    "meaning": "…군"
  },
  {
    "number": 8,
    "word": "-けん",
    "kanji": "軒",
    "meaning": "집을 세는 단위. …채"
  },
  {
    "number": 9,
    "word": "-こ",
    "kanji": "個",
    "meaning": "…개"
  },
  {
    "number": 10,
    "word": "-ご",
    "kanji": "語",
    "meaning": "…어(언어)"
  },
  {
    "number": 11,
    "word": "-ごろ",
    "kanji": "頃",
    "meaning": "…경. …무렵"
  },
  {
    "number": 12,
    "word": "-じ",
    "kanji": "時",
    "meaning": "…시"
  },
  {
    "number": 13,
    "word": "-じん",
    "kanji": "人",
    "meaning": "-인. -사람"
  },
  {
    "number": 14,
    "word": "-せい",
    "kanji": "製",
    "meaning": "…제. 만든 재료·회사명·국명을 나타내는 말"
  },
  {
    "number": 15,
    "word": "-だい",
    "kanji": "代",
    "meaning": "…요금. …비"
  },
  {
    "number": 16,
    "word": "-だい",
    "kanji": "台",
    "meaning": "…대"
  },
  {
    "number": 17,
    "word": "-たち",
    "kanji": "達",
    "meaning": "…들"
  },
  {
    "number": 18,
    "word": "-だて",
    "kanji": "建(て)",
    "meaning": "건물의 양식이나 층수를 나타내는 말"
  },
  {
    "number": 19,
    "word": "-ちゃん",
    "kanji": "",
    "meaning": "친근감을 주는 호칭"
  },
  {
    "number": 20,
    "word": "-ばい",
    "kanji": "倍",
    "meaning": "…배. 갑절"
  },
  {
    "number": 21,
    "word": "-はい",
    "kanji": "杯",
    "meaning": "…잔. 공기나 잔 따위에 든 것을 세는 말"
  },
  {
    "number": 22,
    "word": "-ばん",
    "kanji": "番",
    "meaning": "…번(번호)"
  },
  {
    "number": 23,
    "word": "-ばんせん",
    "kanji": "番線",
    "meaning": "…호선"
  },
  {
    "number": 24,
    "word": "-ひき",
    "kanji": "匹",
    "meaning": "…마리"
  },
  {
    "number": 25,
    "word": "-びょう",
    "kanji": "秒",
    "meaning": "…초"
  },
  {
    "number": 26,
    "word": "-ふん",
    "kanji": "分",
    "meaning": "…분. 시간의 단위. 각도의 단위"
  },
  {
    "number": 27,
    "word": "-ほん",
    "kanji": "本",
    "meaning": "…자루. …병"
  },
  {
    "number": 28,
    "word": "-まい",
    "kanji": "枚",
    "meaning": "…매. …장"
  },
  {
    "number": 29,
    "word": "-や",
    "kanji": "屋",
    "meaning": "…가게. 그 직업을 가진 종사자"
  },
  {
    "number": 30,
    "word": "ああ",
    "kanji": "",
    "meaning": "저렇게"
  },
  {
    "number": 31,
    "word": "あいさつ",
    "kanji": "",
    "meaning": "인사"
  },
  {
    "number": 32,
    "word": "あいだ",
    "kanji": "間",
    "meaning": "사이. 간격. …동안"
  },
  {
    "number": 33,
    "word": "あう",
    "kanji": "合う",
    "meaning": "맞다. 서로 …하다"
  },
  {
    "number": 34,
    "word": "あかちゃん",
    "kanji": "赤ちゃん",
    "meaning": "아기"
  },
  {
    "number": 35,
    "word": "あく",
    "kanji": "空く",
    "meaning": "비다. 들어 있지 않다"
  },
  {
    "number": 36,
    "word": "あご",
    "kanji": "",
    "meaning": "턱"
  },
  {
    "number": 37,
    "word": "あさい",
    "kanji": "浅い",
    "meaning": "얕다. 깊지 않다"
  },
  {
    "number": 38,
    "word": "あじ",
    "kanji": "味",
    "meaning": "맛"
  },
  {
    "number": 39,
    "word": "あしおと",
    "kanji": "足音",
    "meaning": "발소리"
  },
  {
    "number": 40,
    "word": "あす",
    "kanji": "明日",
    "meaning": "내일 (＝あした)"
  },
  {
    "number": 41,
    "word": "あせ",
    "kanji": "汗",
    "meaning": "땀"
  },
  {
    "number": 42,
    "word": "あそび",
    "kanji": "遊び",
    "meaning": "노는 일. 놀이. 유흥"
  },
  {
    "number": 43,
    "word": "あつい",
    "kanji": "熱い",
    "meaning": "뜨겁다"
  },
  {
    "number": 44,
    "word": "あつい",
    "kanji": "厚い",
    "meaning": "두껍다. 두텁다"
  },
  {
    "number": 45,
    "word": "あつさ",
    "kanji": "暑さ",
    "meaning": "더위"
  },
  {
    "number": 46,
    "word": "あつまる",
    "kanji": "集まる",
    "meaning": "모이다"
  },
  {
    "number": 47,
    "word": "あつめる",
    "kanji": "集める",
    "meaning": "모으다"
  },
  {
    "number": 48,
    "word": "あめ",
    "kanji": "飴",
    "meaning": "엿"
  },
  {
    "number": 49,
    "word": "あやまる",
    "kanji": "謝る",
    "meaning": "사죄하다. 사과하다"
  },
  {
    "number": 50,
    "word": "あんしん",
    "kanji": "安心",
    "meaning": "안심"
  },
  {
    "number": 51,
    "word": "あんぜん",
    "kanji": "安全",
    "meaning": "안전"
  },
  {
    "number": 52,
    "word": "あんない",
    "kanji": "案内",
    "meaning": "안내"
  },
  {
    "number": 53,
    "word": "あんなに",
    "kanji": "",
    "meaning": "그렇게"
  },
  {
    "number": 54,
    "word": "いか",
    "kanji": "以下",
    "meaning": "이하"
  },
  {
    "number": 55,
    "word": "いがい",
    "kanji": "以外",
    "meaning": "이외. 그 밖"
  },
  {
    "number": 56,
    "word": "いかが",
    "kanji": "",
    "meaning": "어떻게. 어떻습니까"
  },
  {
    "number": 57,
    "word": "いがく",
    "kanji": "医学",
    "meaning": "의학"
  },
  {
    "number": 58,
    "word": "いきかた",
    "kanji": "生き方",
    "meaning": "삶. 생활. 생활 방식"
  },
  {
    "number": 59,
    "word": "いきかた",
    "kanji": "行き方",
    "meaning": "가는 방법. →ゆきかた"
  },
  {
    "number": 60,
    "word": "いきる",
    "kanji": "生きる",
    "meaning": "(삶을) 살다. 생존하다"
  },
  {
    "number": 61,
    "word": "いけ",
    "kanji": "池",
    "meaning": "못"
  },
  {
    "number": 62,
    "word": "いけん",
    "kanji": "意見",
    "meaning": "의견"
  },
  {
    "number": 63,
    "word": "いし",
    "kanji": "石",
    "meaning": "돌"
  },
  {
    "number": 64,
    "word": "いじめる",
    "kanji": "",
    "meaning": "괴롭히다"
  },
  {
    "number": 65,
    "word": "いじょう",
    "kanji": "以上",
    "meaning": "이상"
  },
  {
    "number": 66,
    "word": "いそぐ",
    "kanji": "急ぐ",
    "meaning": "서두르다"
  },
  {
    "number": 67,
    "word": "いたす",
    "kanji": "致す",
    "meaning": "하다. ‘する’의 겸양어"
  },
  {
    "number": 68,
    "word": "いただく",
    "kanji": "頂く",
    "meaning": "받다. 받들다. ‘もらう’의 겸양어"
  },
  {
    "number": 69,
    "word": "いちいち",
    "kanji": "一々",
    "meaning": "일일이. 하나하나"
  },
  {
    "number": 70,
    "word": "いちど",
    "kanji": "一度",
    "meaning": "한번"
  },
  {
    "number": 71,
    "word": "いちにちじゅう",
    "kanji": "一日中",
    "meaning": "하루종일"
  },
  {
    "number": 72,
    "word": "いつか",
    "kanji": "",
    "meaning": "언젠가"
  },
  {
    "number": 73,
    "word": "いっしょ",
    "kanji": "一緒",
    "meaning": "함께. 같이"
  },
  {
    "number": 74,
    "word": "いっしょうけんめい",
    "kanji": "一生懸命",
    "meaning": "열심히"
  },
  {
    "number": 75,
    "word": "いったい",
    "kanji": "一体",
    "meaning": "도대체"
  },
  {
    "number": 76,
    "word": "いってらっしゃい",
    "kanji": "行ってらっしゃい",
    "meaning": "다녀오세요"
  },
  {
    "number": 77,
    "word": "いと",
    "kanji": "糸",
    "meaning": "실"
  },
  {
    "number": 78,
    "word": "いない",
    "kanji": "以内",
    "meaning": "이내"
  },
  {
    "number": 79,
    "word": "いなか",
    "kanji": "田舎",
    "meaning": "시골. 지방"
  },
  {
    "number": 80,
    "word": "いのち",
    "kanji": "命",
    "meaning": "목숨. 생명"
  },
  {
    "number": 81,
    "word": "いのる",
    "kanji": "祈る",
    "meaning": "빌다. 기도하다. 진심으로 바라다"
  },
  {
    "number": 82,
    "word": "いま",
    "kanji": "居間",
    "meaning": "거실"
  },
  {
    "number": 83,
    "word": "いらっしゃる",
    "kanji": "",
    "meaning": "‘来る’‘行く’‘いる’의 존경어. 가시다. 오시다. 계시다"
  },
  {
    "number": 84,
    "word": "いろがみ",
    "kanji": "色紙",
    "meaning": "색종이"
  },
  {
    "number": 85,
    "word": "いわう",
    "kanji": "祝う",
    "meaning": "축하하다. 축복하다"
  },
  {
    "number": 86,
    "word": "いんしゅ",
    "kanji": "飲酒",
    "meaning": "음주"
  },
  {
    "number": 87,
    "word": "うえる",
    "kanji": "植える",
    "meaning": "심다"
  },
  {
    "number": 88,
    "word": "うかがう",
    "kanji": "伺う",
    "meaning": "①여쭙다.‘묻다’의 겸양어. ②찾아뵙다.‘찾다·방문하다’의 겸양 어"
  },
  {
    "number": 89,
    "word": "うけつけ",
    "kanji": "受付",
    "meaning": "접수. 접수처"
  },
  {
    "number": 90,
    "word": "うける",
    "kanji": "受ける",
    "meaning": "(추상적인 것을) 받다"
  },
  {
    "number": 91,
    "word": "うごく",
    "kanji": "動く",
    "meaning": "…이 움직이다"
  },
  {
    "number": 92,
    "word": "うすい",
    "kanji": "薄い",
    "meaning": "얇다. 옅다. 싱겁다"
  },
  {
    "number": 93,
    "word": "うそ",
    "kanji": "嘘",
    "meaning": "거짓말"
  },
  {
    "number": 94,
    "word": "うち",
    "kanji": "内",
    "meaning": "안. 속. 내부"
  },
  {
    "number": 95,
    "word": "うちがわ",
    "kanji": "内側",
    "meaning": "안쪽. 내면"
  },
  {
    "number": 96,
    "word": "うつ",
    "kanji": "打つ",
    "meaning": "치다. 때리다. 두드리다"
  },
  {
    "number": 97,
    "word": "うつくしい",
    "kanji": "美しい",
    "meaning": "아름답다"
  },
  {
    "number": 98,
    "word": "うつす",
    "kanji": "写す",
    "meaning": "베끼다. 모사하다. 그리다. 묘사하다. 촬영하다"
  },
  {
    "number": 99,
    "word": "うで",
    "kanji": "腕",
    "meaning": "팔. 솜씨"
  },
  {
    "number": 100,
    "word": "うまい",
    "kanji": "",
    "meaning": "맛있다. 잘하다"
  },
  {
    "number": 101,
    "word": "うら",
    "kanji": "裏",
    "meaning": "뒤. 뒷면"
  },
  {
    "number": 102,
    "word": "うりば",
    "kanji": "売(り)場",
    "meaning": "파는 곳. 매장"
  },
  {
    "number": 103,
    "word": "うれしい",
    "kanji": "",
    "meaning": "기쁘다"
  },
  {
    "number": 104,
    "word": "うん",
    "kanji": "運",
    "meaning": "운. 운명. 운수"
  },
  {
    "number": 105,
    "word": "うんてん",
    "kanji": "運転",
    "meaning": "운전"
  },
  {
    "number": 106,
    "word": "うんてんしゅ",
    "kanji": "運転手",
    "meaning": "운전 기사"
  },
  {
    "number": 107,
    "word": "うんどう",
    "kanji": "運動",
    "meaning": "운동"
  },
  {
    "number": 108,
    "word": "うんどうかい",
    "kanji": "運動会",
    "meaning": "운동회. 체육대회"
  },
  {
    "number": 109,
    "word": "エアコン",
    "kanji": "",
    "meaning": "에어컨"
  },
  {
    "number": 110,
    "word": "えいが",
    "kanji": "映画",
    "meaning": "영화"
  },
  {
    "number": 111,
    "word": "えいかいわ",
    "kanji": "英会話",
    "meaning": "영어 회화"
  },
  {
    "number": 112,
    "word": "えいぎょう",
    "kanji": "営業",
    "meaning": "영업"
  },
  {
    "number": 113,
    "word": "ええ",
    "kanji": "",
    "meaning": "네. 예"
  },
  {
    "number": 114,
    "word": "えきいん",
    "kanji": "駅員",
    "meaning": "역원. 역무원"
  },
  {
    "number": 115,
    "word": "えだ",
    "kanji": "枝",
    "meaning": "가지"
  },
  {
    "number": 116,
    "word": "えらぶ",
    "kanji": "選ぶ",
    "meaning": "고르다. 가리다. 택하다"
  },
  {
    "number": 117,
    "word": "えんりょ",
    "kanji": "遠慮",
    "meaning": "사양"
  },
  {
    "number": 118,
    "word": "お-",
    "kanji": "御",
    "meaning": "존경·공손을 나타내는 말. 표현을 부드럽게 하는 말"
  },
  {
    "number": 119,
    "word": "おいわい",
    "kanji": "お祝い",
    "meaning": "축하(선물)"
  },
  {
    "number": 120,
    "word": "おうだんほどう",
    "kanji": "横断歩道",
    "meaning": "횡단 보도"
  },
  {
    "number": 121,
    "word": "おおあめ",
    "kanji": "大雨",
    "meaning": "큰비"
  },
  {
    "number": 122,
    "word": "おおぜい",
    "kanji": "大勢",
    "meaning": "많은 사람. 여럿"
  },
  {
    "number": 123,
    "word": "おおゆき",
    "kanji": "大雪",
    "meaning": "큰눈"
  },
  {
    "number": 124,
    "word": "おかげ",
    "kanji": "",
    "meaning": "덕택. 덕분"
  },
  {
    "number": 125,
    "word": "おかげさまで",
    "kanji": "",
    "meaning": "덕분에"
  },
  {
    "number": 126,
    "word": "おかしい",
    "kanji": "",
    "meaning": "①우습다. ②이상하다"
  },
  {
    "number": 127,
    "word": "おく",
    "kanji": "億",
    "meaning": "억"
  },
  {
    "number": 128,
    "word": "おくさん",
    "kanji": "奥さん",
    "meaning": "남의 아내의 높임말. 부인"
  },
  {
    "number": 129,
    "word": "おくじょう",
    "kanji": "屋上",
    "meaning": "옥상"
  },
  {
    "number": 130,
    "word": "おくりもの",
    "kanji": "贈(り)物",
    "meaning": "선물"
  },
  {
    "number": 131,
    "word": "おくる",
    "kanji": "送る",
    "meaning": "보내다. 부치다. 송금하다"
  },
  {
    "number": 132,
    "word": "おくれる",
    "kanji": "遅れる",
    "meaning": "늦다. 늦어지다. 더디다"
  },
  {
    "number": 133,
    "word": "おこさん",
    "kanji": "お子さん",
    "meaning": "자녀분. 자제분"
  },
  {
    "number": 134,
    "word": "おこす",
    "kanji": "起こす",
    "meaning": "일으키다. 일으켜 세우다"
  },
  {
    "number": 135,
    "word": "おこる",
    "kanji": "怒る",
    "meaning": "성내다. 화내다. 꾸짖다"
  },
  {
    "number": 136,
    "word": "おじ",
    "kanji": "",
    "meaning": "삼촌. 백부. 부모와 같은 연배의 남자. 아저씨"
  },
  {
    "number": 137,
    "word": "おしいれ",
    "kanji": "押し入れ",
    "meaning": "벽장"
  },
  {
    "number": 138,
    "word": "おしまい",
    "kanji": "",
    "meaning": "끝. 마지막"
  },
  {
    "number": 139,
    "word": "おじょうさん",
    "kanji": "お嬢さん",
    "meaning": "아가씨"
  },
  {
    "number": 140,
    "word": "おたく",
    "kanji": "お宅",
    "meaning": "상대방 집의 높임말. 댁."
  },
  {
    "number": 141,
    "word": "おちる",
    "kanji": "落ちる",
    "meaning": "떨어지다"
  },
  {
    "number": 142,
    "word": "おっしゃる",
    "kanji": "",
    "meaning": "말씀하시다"
  },
  {
    "number": 143,
    "word": "おっと",
    "kanji": "夫",
    "meaning": "남편"
  },
  {
    "number": 144,
    "word": "おつり",
    "kanji": "お釣り",
    "meaning": "거스름돈"
  },
  {
    "number": 145,
    "word": "おてあらい",
    "kanji": "お手洗い",
    "meaning": "화장실"
  },
  {
    "number": 146,
    "word": "おでかけ",
    "kanji": "お出かけ",
    "meaning": "외출"
  },
  {
    "number": 147,
    "word": "おと",
    "kanji": "音",
    "meaning": "소리"
  },
  {
    "number": 148,
    "word": "おとしもの",
    "kanji": "落とし物",
    "meaning": "분실물. 빠뜨린 물건. 유실물"
  },
  {
    "number": 149,
    "word": "おとしより",
    "kanji": "お年寄り",
    "meaning": "노인"
  },
  {
    "number": 150,
    "word": "おとす",
    "kanji": "落とす",
    "meaning": "떨어뜨리다"
  },
  {
    "number": 151,
    "word": "おとなしい",
    "kanji": "",
    "meaning": "떠들거나 장난하지 않고 조용하다. 온순하다. 얌전하다"
  },
  {
    "number": 152,
    "word": "おどり",
    "kanji": "踊り",
    "meaning": "춤"
  },
  {
    "number": 153,
    "word": "おどる",
    "kanji": "踊る",
    "meaning": "춤추다"
  },
  {
    "number": 154,
    "word": "おどろく",
    "kanji": "驚く",
    "meaning": "놀라다"
  },
  {
    "number": 155,
    "word": "おば",
    "kanji": "",
    "meaning": "아주머니. 남의 어른 여자"
  },
  {
    "number": 156,
    "word": "おまつり",
    "kanji": "お祭(り)",
    "meaning": "축제. ＝まつり[祭(り)]"
  },
  {
    "number": 157,
    "word": "おみまい",
    "kanji": "お見舞い",
    "meaning": "문병"
  },
  {
    "number": 158,
    "word": "おめでとうございます",
    "kanji": "",
    "meaning": "축하합니다"
  },
  {
    "number": 159,
    "word": "おもいだす",
    "kanji": "思い出す",
    "meaning": "…를 생각해 내다. …이 생각나다"
  },
  {
    "number": 160,
    "word": "おもう",
    "kanji": "思う",
    "meaning": "생각하다. 헤아리다. 느끼다"
  },
  {
    "number": 161,
    "word": "おもちゃ",
    "kanji": "",
    "meaning": "장난감. 완구"
  },
  {
    "number": 162,
    "word": "おもて",
    "kanji": "表",
    "meaning": "표면. 겉"
  },
  {
    "number": 163,
    "word": "おや",
    "kanji": "",
    "meaning": "아니. 어머나. 이런 おやすみに"
  },
  {
    "number": 164,
    "word": "なる",
    "kanji": "お休みになる",
    "meaning": "주무시다(寝る 眠る의 존경어)"
  },
  {
    "number": 165,
    "word": "おゆ",
    "kanji": "お湯",
    "meaning": "뜨거운 물. 목욕물. 데운 물"
  },
  {
    "number": 166,
    "word": "おりる",
    "kanji": "下りる",
    "meaning": "내리다. 내려오다"
  },
  {
    "number": 167,
    "word": "おる",
    "kanji": "",
    "meaning": "있다. (いる의 겸양어)"
  },
  {
    "number": 168,
    "word": "おれる",
    "kanji": "折れる",
    "meaning": "꺾어지다. 부러지다"
  },
  {
    "number": 169,
    "word": "おわり",
    "kanji": "終わり",
    "meaning": "끝. 마지막"
  },
  {
    "number": 170,
    "word": "かい",
    "kanji": "会",
    "meaning": "모임. 회. 단체"
  },
  {
    "number": 171,
    "word": "かいがん",
    "kanji": "海岸",
    "meaning": "해안. 바닷가"
  },
  {
    "number": 172,
    "word": "かいぎ",
    "kanji": "会議",
    "meaning": "회의"
  },
  {
    "number": 173,
    "word": "かいじょう",
    "kanji": "会場",
    "meaning": "회장. 모이는 장소"
  },
  {
    "number": 174,
    "word": "がいしょく",
    "kanji": "外食",
    "meaning": "외식"
  },
  {
    "number": 175,
    "word": "がいぶ",
    "kanji": "外部",
    "meaning": "외부"
  },
  {
    "number": 176,
    "word": "かいわ",
    "kanji": "会話",
    "meaning": "회화"
  },
  {
    "number": 177,
    "word": "かう",
    "kanji": "飼う",
    "meaning": "(동물을) 키우다. 기르다"
  },
  {
    "number": 178,
    "word": "かえり",
    "kanji": "帰り",
    "meaning": "돌아옴. 돌아감. 돌아올 때"
  },
  {
    "number": 179,
    "word": "かえる",
    "kanji": "変える",
    "meaning": "바꾸다. 변화시키다"
  },
  {
    "number": 180,
    "word": "かがく",
    "kanji": "科学",
    "meaning": "과학"
  },
  {
    "number": 181,
    "word": "かがみ",
    "kanji": "鏡",
    "meaning": "거울"
  },
  {
    "number": 182,
    "word": "かきかた",
    "kanji": "書き方",
    "meaning": "쓰기. 쓰는 법"
  },
  {
    "number": 183,
    "word": "かける",
    "kanji": "",
    "meaning": "걸다. 늘어뜨리다. 달다. 채우다. 잠그다"
  },
  {
    "number": 184,
    "word": "かざり",
    "kanji": "飾り",
    "meaning": "꾸밈. 장식"
  },
  {
    "number": 185,
    "word": "かざる",
    "kanji": "飾る",
    "meaning": "장식하다. 꾸미다. 치장하다"
  },
  {
    "number": 186,
    "word": "かじ",
    "kanji": "火事",
    "meaning": "화재. 불"
  },
  {
    "number": 187,
    "word": "かしこまりました",
    "kanji": "",
    "meaning": "잘 알겠습니다. 분부대로 하겠습니다"
  },
  {
    "number": 188,
    "word": "かしゅ",
    "kanji": "歌手",
    "meaning": "가수"
  },
  {
    "number": 189,
    "word": "かた",
    "kanji": "肩",
    "meaning": "어깨"
  },
  {
    "number": 190,
    "word": "かた",
    "kanji": "方",
    "meaning": "분 (ひと의 존경어)"
  },
  {
    "number": 191,
    "word": "かたい",
    "kanji": "堅い·固い",
    "meaning": "단단하다. 딱딱하다. 견고하다"
  },
  {
    "number": 192,
    "word": "かたち",
    "kanji": "形",
    "meaning": "모양. 꼴"
  },
  {
    "number": 193,
    "word": "かたづける",
    "kanji": "片付ける",
    "meaning": "치우다. 정돈하다"
  },
  {
    "number": 194,
    "word": "かちょう",
    "kanji": "課長",
    "meaning": "과장"
  },
  {
    "number": 195,
    "word": "かつ",
    "kanji": "勝つ",
    "meaning": "이기다. 승리하다"
  },
  {
    "number": 196,
    "word": "かっこいい",
    "kanji": "",
    "meaning": "멋있다"
  },
  {
    "number": 197,
    "word": "かっこう",
    "kanji": "",
    "meaning": "모습. 꼴"
  },
  {
    "number": 198,
    "word": "かっこわるい",
    "kanji": "かっこ悪い",
    "meaning": "꼴사납다. 멋없다"
  },
  {
    "number": 199,
    "word": "かてい",
    "kanji": "家庭",
    "meaning": "가정"
  },
  {
    "number": 200,
    "word": "かない",
    "kanji": "家内",
    "meaning": "아내. 집사람"
  },
  {
    "number": 201,
    "word": "かなしい",
    "kanji": "悲しい",
    "meaning": "슬프다"
  },
  {
    "number": 202,
    "word": "かならず",
    "kanji": "必ず",
    "meaning": "반드시. 꼭"
  },
  {
    "number": 203,
    "word": "かなり",
    "kanji": "",
    "meaning": "제법. 어지간히. 상당히"
  },
  {
    "number": 204,
    "word": "かねもち",
    "kanji": "金持ち",
    "meaning": "부자"
  },
  {
    "number": 205,
    "word": "かのじょ",
    "kanji": "彼女",
    "meaning": "그녀. 여자친구. 애인"
  },
  {
    "number": 206,
    "word": "かべ",
    "kanji": "壁",
    "meaning": "벽"
  },
  {
    "number": 207,
    "word": "がまんする",
    "kanji": "",
    "meaning": "참다"
  },
  {
    "number": 208,
    "word": "かみ",
    "kanji": "髪",
    "meaning": "머리카락"
  },
  {
    "number": 209,
    "word": "かむ",
    "kanji": "嚙む·咬む",
    "meaning": "물다. 씹다"
  },
  {
    "number": 210,
    "word": "かよう",
    "kanji": "通う",
    "meaning": "다니다"
  },
  {
    "number": 211,
    "word": "ガラス",
    "kanji": "",
    "meaning": "유리"
  },
  {
    "number": 212,
    "word": "かれ",
    "kanji": "彼",
    "meaning": "그. 그이. 저이. 남자친구"
  },
  {
    "number": 213,
    "word": "かれら",
    "kanji": "彼ら",
    "meaning": "그들. 그 사람들"
  },
  {
    "number": 214,
    "word": "がわ",
    "kanji": "側",
    "meaning": "…측. …쪽"
  },
  {
    "number": 215,
    "word": "かわく",
    "kanji": "乾く",
    "meaning": "마르다. 건조하다"
  },
  {
    "number": 216,
    "word": "かわり",
    "kanji": "代わり",
    "meaning": "대신. 대리. 대용. 교대"
  },
  {
    "number": 217,
    "word": "かわる",
    "kanji": "変わる",
    "meaning": "변하다. 바뀌다"
  },
  {
    "number": 218,
    "word": "かんがえかた",
    "kanji": "考え方",
    "meaning": "사고방식"
  },
  {
    "number": 219,
    "word": "かんがえる",
    "kanji": "考える",
    "meaning": "생각하다. 고안하다"
  },
  {
    "number": 220,
    "word": "かんけい",
    "kanji": "関係",
    "meaning": "관계"
  },
  {
    "number": 221,
    "word": "かんこう",
    "kanji": "観光",
    "meaning": "관광"
  },
  {
    "number": 222,
    "word": "かんごし",
    "kanji": "看護師",
    "meaning": "간호사"
  },
  {
    "number": 223,
    "word": "かんたんな",
    "kanji": "簡単な",
    "meaning": "간단한"
  },
  {
    "number": 224,
    "word": "がんばる",
    "kanji": "頑張る",
    "meaning": "계속 노력하다. 열심히 하다"
  },
  {
    "number": 225,
    "word": "き",
    "kanji": "気",
    "meaning": "기운. 기. 기력"
  },
  {
    "number": 226,
    "word": "きかい",
    "kanji": "機械",
    "meaning": "기계"
  },
  {
    "number": 227,
    "word": "きかい",
    "kanji": "機会",
    "meaning": "기회"
  },
  {
    "number": 228,
    "word": "きかん",
    "kanji": "期間",
    "meaning": "기간"
  },
  {
    "number": 229,
    "word": "ききとり",
    "kanji": "聞き取り",
    "meaning": "듣기. 청취"
  },
  {
    "number": 230,
    "word": "きけん",
    "kanji": "危険",
    "meaning": "위험"
  },
  {
    "number": 231,
    "word": "きこえる",
    "kanji": "聞こえる",
    "meaning": "들리다"
  },
  {
    "number": 232,
    "word": "きしゃ",
    "kanji": "記者",
    "meaning": "기자"
  },
  {
    "number": 233,
    "word": "きしゃ",
    "kanji": "汽車",
    "meaning": "기차"
  },
  {
    "number": 234,
    "word": "ぎじゅつ",
    "kanji": "技術",
    "meaning": "기술"
  },
  {
    "number": 235,
    "word": "きせつ",
    "kanji": "季節",
    "meaning": "계절"
  },
  {
    "number": 236,
    "word": "きそく",
    "kanji": "規則",
    "meaning": "규칙"
  },
  {
    "number": 237,
    "word": "きっと",
    "kanji": "",
    "meaning": "꼭. 반드시"
  },
  {
    "number": 238,
    "word": "きにいる",
    "kanji": "気に入る",
    "meaning": "마음에 들다"
  },
  {
    "number": 239,
    "word": "きぬ",
    "kanji": "絹",
    "meaning": "명주. 비단"
  },
  {
    "number": 240,
    "word": "きびしい",
    "kanji": "厳しい",
    "meaning": "엄하다. 엄격하다"
  },
  {
    "number": 241,
    "word": "きぶん",
    "kanji": "気分",
    "meaning": "기분"
  },
  {
    "number": 242,
    "word": "きまる",
    "kanji": "決まる",
    "meaning": "정해지다. 결정되다"
  },
  {
    "number": 243,
    "word": "きみ",
    "kanji": "君",
    "meaning": "그대. 자네. 너"
  },
  {
    "number": 244,
    "word": "きめる",
    "kanji": "決める",
    "meaning": "정하다. 결정하다"
  },
  {
    "number": 245,
    "word": "きもち",
    "kanji": "気持ち",
    "meaning": "마음. 기분"
  },
  {
    "number": 246,
    "word": "きもの",
    "kanji": "着物",
    "meaning": "일본 전통옷"
  },
  {
    "number": 247,
    "word": "きゃく",
    "kanji": "客",
    "meaning": "손님"
  },
  {
    "number": 248,
    "word": "きゅうこう",
    "kanji": "急行",
    "meaning": "급행. ‘急行列車’의 준말"
  },
  {
    "number": 249,
    "word": "きゅうに",
    "kanji": "急に",
    "meaning": "갑자기"
  },
  {
    "number": 250,
    "word": "きょういく",
    "kanji": "教育",
    "meaning": "교육"
  },
  {
    "number": 251,
    "word": "きょうかい",
    "kanji": "教会",
    "meaning": "교회"
  },
  {
    "number": 252,
    "word": "きょうみ",
    "kanji": "興味",
    "meaning": "흥미"
  },
  {
    "number": 253,
    "word": "きる",
    "kanji": "切る",
    "meaning": "베다. 자르다. 절단하다. →きれる(잘리다)"
  },
  {
    "number": 254,
    "word": "きる",
    "kanji": "着る",
    "meaning": "옷을 입다"
  },
  {
    "number": 255,
    "word": "きんぎょ",
    "kanji": "金魚",
    "meaning": "금붕어"
  },
  {
    "number": 256,
    "word": "きんじょ",
    "kanji": "近所",
    "meaning": "근처. 또는 이웃집"
  },
  {
    "number": 257,
    "word": "ぐあい",
    "kanji": "具合",
    "meaning": "형편. 상태"
  },
  {
    "number": 258,
    "word": "くうき",
    "kanji": "空気",
    "meaning": "공기"
  },
  {
    "number": 259,
    "word": "くうこう",
    "kanji": "空港",
    "meaning": "공항"
  },
  {
    "number": 260,
    "word": "くさ",
    "kanji": "草",
    "meaning": "풀"
  },
  {
    "number": 261,
    "word": "ください",
    "kanji": "下さい",
    "meaning": "주세요. →くださる"
  },
  {
    "number": 262,
    "word": "くださる",
    "kanji": "下さる",
    "meaning": "(나에게) 주시다. (나에게) …하여 주시다. くれる의 존경어"
  },
  {
    "number": 263,
    "word": "くび",
    "kanji": "首",
    "meaning": "목"
  },
  {
    "number": 264,
    "word": "くも",
    "kanji": "雲",
    "meaning": "구름"
  },
  {
    "number": 265,
    "word": "くもり",
    "kanji": "曇(り)",
    "meaning": "흐림"
  },
  {
    "number": 266,
    "word": "くもる",
    "kanji": "曇る",
    "meaning": "흐리다. 흐려지다"
  },
  {
    "number": 267,
    "word": "くらべる",
    "kanji": "比べる",
    "meaning": "비교하다. 대조하다"
  },
  {
    "number": 268,
    "word": "くるしい",
    "kanji": "苦しい",
    "meaning": "괴롭다. 고통스럽다"
  },
  {
    "number": 269,
    "word": "くれる",
    "kanji": "暮れる",
    "meaning": "(날이) 저물다. (해가) 지다"
  },
  {
    "number": 270,
    "word": "ぐんじん",
    "kanji": "軍人",
    "meaning": "군인"
  },
  {
    "number": 271,
    "word": "け",
    "kanji": "毛",
    "meaning": "털"
  },
  {
    "number": 272,
    "word": "けいかく",
    "kanji": "計画",
    "meaning": "계획"
  },
  {
    "number": 273,
    "word": "けいけん",
    "kanji": "経験",
    "meaning": "경험"
  },
  {
    "number": 274,
    "word": "けいざい",
    "kanji": "経済",
    "meaning": "경제"
  },
  {
    "number": 275,
    "word": "けいさつ",
    "kanji": "警察",
    "meaning": "경찰"
  },
  {
    "number": 276,
    "word": "けが",
    "kanji": "怪我",
    "meaning": "상처. 부상"
  },
  {
    "number": 277,
    "word": "けしき",
    "kanji": "景色",
    "meaning": "경치. 풍경"
  },
  {
    "number": 278,
    "word": "けしゴム",
    "kanji": "消しゴム",
    "meaning": "고무 지우개"
  },
  {
    "number": 279,
    "word": "げしゅく",
    "kanji": "下宿",
    "meaning": "하숙"
  },
  {
    "number": 280,
    "word": "けっこう",
    "kanji": "結構",
    "meaning": "제법. 그런대로. 충분히"
  },
  {
    "number": 281,
    "word": "けっこうだ",
    "kanji": "結構だ",
    "meaning": "괜찮다. 됐다 (거절할 때 쓰기도 함)"
  },
  {
    "number": 282,
    "word": "けっして",
    "kanji": "決して",
    "meaning": "결코. 절대로"
  },
  {
    "number": 283,
    "word": "けっせき",
    "kanji": "欠席",
    "meaning": "결석"
  },
  {
    "number": 284,
    "word": "けれども",
    "kanji": "",
    "meaning": "그러나. 그렇지만"
  },
  {
    "number": 285,
    "word": "げんいん",
    "kanji": "原因",
    "meaning": "원인"
  },
  {
    "number": 286,
    "word": "けんか",
    "kanji": "喧嘩",
    "meaning": "다툼. 싸움"
  },
  {
    "number": 287,
    "word": "げんかん",
    "kanji": "玄関",
    "meaning": "현관"
  },
  {
    "number": 288,
    "word": "けんきゅうしつ",
    "kanji": "研究室",
    "meaning": "연구실"
  },
  {
    "number": 289,
    "word": "けんぶつ",
    "kanji": "見物",
    "meaning": "구경"
  },
  {
    "number": 290,
    "word": "ご-",
    "kanji": "御",
    "meaning": "존경의 뜻 또는 겸손의 뜻을 덧붙이는 말"
  },
  {
    "number": 291,
    "word": "こ",
    "kanji": "子",
    "meaning": "자식. 아이. 애"
  },
  {
    "number": 292,
    "word": "こいぬ",
    "kanji": "小犬·子犬",
    "meaning": "강아지"
  },
  {
    "number": 293,
    "word": "こうかい",
    "kanji": "公開",
    "meaning": "공개"
  },
  {
    "number": 294,
    "word": "こうがい",
    "kanji": "郊外",
    "meaning": "교외"
  },
  {
    "number": 295,
    "word": "こうぎ",
    "kanji": "講義",
    "meaning": "강의"
  },
  {
    "number": 296,
    "word": "こうぎょう",
    "kanji": "工業",
    "meaning": "공업"
  },
  {
    "number": 297,
    "word": "こうこう",
    "kanji": "高校",
    "meaning": "고등학교"
  },
  {
    "number": 298,
    "word": "こうこうせい",
    "kanji": "高校生",
    "meaning": "고등학생"
  },
  {
    "number": 299,
    "word": "こうさてん",
    "kanji": "交差点",
    "meaning": "교차로. 네거리"
  },
  {
    "number": 300,
    "word": "こうじ",
    "kanji": "工事",
    "meaning": "공사"
  },
  {
    "number": 301,
    "word": "こうじょう",
    "kanji": "工場",
    "meaning": "공장"
  },
  {
    "number": 302,
    "word": "こうちょう",
    "kanji": "校長",
    "meaning": "교장"
  },
  {
    "number": 303,
    "word": "こうつう",
    "kanji": "交通",
    "meaning": "교통"
  },
  {
    "number": 304,
    "word": "こうどう",
    "kanji": "講堂",
    "meaning": "강당"
  },
  {
    "number": 305,
    "word": "こうむいん",
    "kanji": "公務員",
    "meaning": "공무원"
  },
  {
    "number": 306,
    "word": "こおり",
    "kanji": "氷",
    "meaning": "얼음"
  },
  {
    "number": 307,
    "word": "こくさい",
    "kanji": "国際",
    "meaning": "국제"
  },
  {
    "number": 308,
    "word": "こくさん",
    "kanji": "国産",
    "meaning": "국산"
  },
  {
    "number": 309,
    "word": "こくない",
    "kanji": "国内",
    "meaning": "국내"
  },
  {
    "number": 310,
    "word": "こくみん",
    "kanji": "国民",
    "meaning": "국민"
  },
  {
    "number": 311,
    "word": "こくりつ",
    "kanji": "国立",
    "meaning": "국립"
  },
  {
    "number": 312,
    "word": "こころ",
    "kanji": "心",
    "meaning": "마음. 느낌"
  },
  {
    "number": 313,
    "word": "ございます",
    "kanji": "",
    "meaning": "‘～です’의 공손한 말"
  },
  {
    "number": 314,
    "word": "こしょう",
    "kanji": "故障",
    "meaning": "고장"
  },
  {
    "number": 315,
    "word": "こじん",
    "kanji": "個人",
    "meaning": "개인"
  },
  {
    "number": 316,
    "word": "ごぞんじだ",
    "kanji": "ご存じだ",
    "meaning": "‘しっている’의 높임말. 알고 계시다"
  },
  {
    "number": 317,
    "word": "こたえ",
    "kanji": "答(え)",
    "meaning": "대답. 답안"
  },
  {
    "number": 318,
    "word": "ごちそう",
    "kanji": "御馳走",
    "meaning": "손님을 대접함. 또 그 대접. 맛있는 요리. 진수성찬"
  },
  {
    "number": 319,
    "word": "こと",
    "kanji": "事",
    "meaning": "일. 것. …한 적"
  },
  {
    "number": 320,
    "word": "ことば",
    "kanji": "言葉",
    "meaning": "말. 언어"
  },
  {
    "number": 321,
    "word": "ことり",
    "kanji": "小鳥",
    "meaning": "작은 새"
  },
  {
    "number": 322,
    "word": "こねこ",
    "kanji": "小猫·子猫",
    "meaning": "새끼 고양이"
  },
  {
    "number": 323,
    "word": "このあいだ",
    "kanji": "この間",
    "meaning": "전날에. 전에"
  },
  {
    "number": 324,
    "word": "このごろ",
    "kanji": "この頃",
    "meaning": "요새. 요즘"
  },
  {
    "number": 325,
    "word": "このは",
    "kanji": "木の葉",
    "meaning": "나뭇잎"
  },
  {
    "number": 326,
    "word": "このへん",
    "kanji": "この辺",
    "meaning": "이 근처. 이쯤"
  },
  {
    "number": 327,
    "word": "こまかい",
    "kanji": "細かい",
    "meaning": "잘다. 작다. 미세하다"
  },
  {
    "number": 328,
    "word": "ごみ",
    "kanji": "",
    "meaning": "쓰레기. 티끌. 먼지"
  },
  {
    "number": 329,
    "word": "こむ",
    "kanji": "込む",
    "meaning": "혼잡하다. 붐비다"
  },
  {
    "number": 330,
    "word": "こめ",
    "kanji": "米",
    "meaning": "쌀 ごらんに"
  },
  {
    "number": 331,
    "word": "なる",
    "kanji": "ご覧になる",
    "meaning": "보시다"
  },
  {
    "number": 332,
    "word": "これから",
    "kanji": "",
    "meaning": "이제부터. 앞으로"
  },
  {
    "number": 333,
    "word": "ころぶ",
    "kanji": "転ぶ",
    "meaning": "쓰러지다. 자빠지다"
  },
  {
    "number": 334,
    "word": "こわい",
    "kanji": "怖い",
    "meaning": "무섭다. 두렵다"
  },
  {
    "number": 335,
    "word": "こわす",
    "kanji": "壊す",
    "meaning": "부수다. 망가뜨리다"
  },
  {
    "number": 336,
    "word": "こわれる",
    "kanji": "壊れる",
    "meaning": "부서지다. 망가지다"
  },
  {
    "number": 337,
    "word": "こんかい",
    "kanji": "今回",
    "meaning": "이번"
  },
  {
    "number": 338,
    "word": "こんど",
    "kanji": "今度",
    "meaning": "이번에. 이 다음에"
  },
  {
    "number": 339,
    "word": "こんなに",
    "kanji": "",
    "meaning": "이토록. 이렇게"
  },
  {
    "number": 340,
    "word": "こんや",
    "kanji": "今夜",
    "meaning": "오늘 밤"
  },
  {
    "number": 341,
    "word": "さあ",
    "kanji": "",
    "meaning": "자아. 어서. 글쎄"
  },
  {
    "number": 342,
    "word": "さいきん",
    "kanji": "最近",
    "meaning": "최근"
  },
  {
    "number": 343,
    "word": "さいご",
    "kanji": "最後",
    "meaning": "최후. 마지막. 맨 뒤"
  },
  {
    "number": 344,
    "word": "さいしょ",
    "kanji": "最初",
    "meaning": "최초. 처음"
  },
  {
    "number": 345,
    "word": "さか",
    "kanji": "坂",
    "meaning": "비탈길. 고개"
  },
  {
    "number": 346,
    "word": "さがす",
    "kanji": "探す·捜す",
    "meaning": "찾다"
  },
  {
    "number": 347,
    "word": "さがる",
    "kanji": "下がる",
    "meaning": "내리다. 내려가다. 떨어지다"
  },
  {
    "number": 348,
    "word": "さかんな",
    "kanji": "盛んな",
    "meaning": "성행한. 성대한"
  },
  {
    "number": 349,
    "word": "さくひん",
    "kanji": "作品",
    "meaning": "작품"
  },
  {
    "number": 350,
    "word": "さくら",
    "kanji": "桜",
    "meaning": "벚나무. 벚꽃"
  },
  {
    "number": 351,
    "word": "さげる",
    "kanji": "下げる",
    "meaning": "내리다. 내려주다"
  },
  {
    "number": 352,
    "word": "さしあげる",
    "kanji": "差し上げる",
    "meaning": "드리다. 바치다"
  },
  {
    "number": 353,
    "word": "さす",
    "kanji": "差す",
    "meaning": "(우산을) 쓰다"
  },
  {
    "number": 354,
    "word": "させる",
    "kanji": "",
    "meaning": "시키다"
  },
  {
    "number": 355,
    "word": "さっき",
    "kanji": "先",
    "meaning": "아까. 조금 전"
  },
  {
    "number": 356,
    "word": "さとう",
    "kanji": "砂糖",
    "meaning": "설탕"
  },
  {
    "number": 357,
    "word": "さびしい",
    "kanji": "寂しい",
    "meaning": "외롭다. 쓸쓸하다"
  },
  {
    "number": 358,
    "word": "さま",
    "kanji": "様",
    "meaning": "①…님. ②모양. 상태"
  },
  {
    "number": 359,
    "word": "さらいげつ",
    "kanji": "再来月",
    "meaning": "다다음 달"
  },
  {
    "number": 360,
    "word": "さらいしゅう",
    "kanji": "再来週",
    "meaning": "다다음 주"
  },
  {
    "number": 361,
    "word": "さらいねん",
    "kanji": "再来年",
    "meaning": "내후년"
  },
  {
    "number": 362,
    "word": "さわぐ",
    "kanji": "騒ぐ",
    "meaning": "떠들다"
  },
  {
    "number": 363,
    "word": "さわる",
    "kanji": "触る",
    "meaning": "닿다. 손을 대다"
  },
  {
    "number": 364,
    "word": "さんかく",
    "kanji": "三角",
    "meaning": "삼각"
  },
  {
    "number": 365,
    "word": "さんぎょう",
    "kanji": "産業",
    "meaning": "산업"
  },
  {
    "number": 366,
    "word": "さんすう",
    "kanji": "算数",
    "meaning": "산수. 초등 수학. 셈"
  },
  {
    "number": 367,
    "word": "さんせい",
    "kanji": "賛成",
    "meaning": "찬성"
  },
  {
    "number": 368,
    "word": "ざんねん",
    "kanji": "残念",
    "meaning": "유감스러움. 아쉬운 모양"
  },
  {
    "number": 369,
    "word": "し",
    "kanji": "市",
    "meaning": "시. …시"
  },
  {
    "number": 370,
    "word": "じ",
    "kanji": "字",
    "meaning": "자. 글자. 글씨"
  },
  {
    "number": 371,
    "word": "しあい",
    "kanji": "試合",
    "meaning": "경기. 시합"
  },
  {
    "number": 372,
    "word": "しかし",
    "kanji": "",
    "meaning": "그러나. 그렇지만. 그런데"
  },
  {
    "number": 373,
    "word": "しかた",
    "kanji": "仕方",
    "meaning": "하는 방법. 수단"
  },
  {
    "number": 374,
    "word": "しかたない",
    "kanji": "仕方ない",
    "meaning": "할 수 없다. 하는 수 없다. 어쩔 수 없다"
  },
  {
    "number": 375,
    "word": "しかる",
    "kanji": "叱る",
    "meaning": "꾸짖다. 야단치다"
  },
  {
    "number": 376,
    "word": "しけん",
    "kanji": "試験",
    "meaning": "시험. 테스트"
  },
  {
    "number": 377,
    "word": "じこ",
    "kanji": "事故",
    "meaning": "사고"
  },
  {
    "number": 378,
    "word": "じしん",
    "kanji": "地震",
    "meaning": "지진"
  },
  {
    "number": 379,
    "word": "した",
    "kanji": "舌",
    "meaning": "혀"
  },
  {
    "number": 380,
    "word": "じだい",
    "kanji": "時代",
    "meaning": "시대"
  },
  {
    "number": 381,
    "word": "したぎ",
    "kanji": "下着",
    "meaning": "속옷. 내의"
  },
  {
    "number": 382,
    "word": "したく",
    "kanji": "支度·仕度",
    "meaning": "채비. 준비"
  },
  {
    "number": 383,
    "word": "したしい",
    "kanji": "親しい",
    "meaning": "친하다. 사이가 좋다"
  },
  {
    "number": 384,
    "word": "しっかり",
    "kanji": "",
    "meaning": "단단히. 꼭. 똑똑히. 정신 차려서. 확고히. 견실하게"
  },
  {
    "number": 385,
    "word": "しつない",
    "kanji": "室内",
    "meaning": "실내"
  },
  {
    "number": 386,
    "word": "しっぱい",
    "kanji": "失敗",
    "meaning": "실패. 실수"
  },
  {
    "number": 387,
    "word": "しつもん",
    "kanji": "質問",
    "meaning": "질문"
  },
  {
    "number": 388,
    "word": "しつれい",
    "kanji": "失礼",
    "meaning": "실례. 작별·가벼운 사과·부탁 따위의 인사말"
  },
  {
    "number": 389,
    "word": "じてん",
    "kanji": "辞典",
    "meaning": "사전"
  },
  {
    "number": 390,
    "word": "じてんしゃ",
    "kanji": "自転車",
    "meaning": "자전거"
  },
  {
    "number": 391,
    "word": "じどう",
    "kanji": "自動",
    "meaning": "자동"
  },
  {
    "number": 392,
    "word": "じどうしゃ",
    "kanji": "自動車",
    "meaning": "자동차"
  },
  {
    "number": 393,
    "word": "しない",
    "kanji": "市内",
    "meaning": "시내"
  },
  {
    "number": 394,
    "word": "しなもの",
    "kanji": "品物",
    "meaning": "물품. 물건"
  },
  {
    "number": 395,
    "word": "しはらい",
    "kanji": "支払(い)",
    "meaning": "지불. 지급"
  },
  {
    "number": 396,
    "word": "じびき",
    "kanji": "字引",
    "meaning": "자전. 옥편. 사전"
  },
  {
    "number": 397,
    "word": "じぶん",
    "kanji": "自分",
    "meaning": "자기. 자신"
  },
  {
    "number": 398,
    "word": "しま",
    "kanji": "島",
    "meaning": "섬"
  },
  {
    "number": 399,
    "word": "しまい",
    "kanji": "姉妹",
    "meaning": "자매"
  },
  {
    "number": 400,
    "word": "しまう",
    "kanji": "",
    "meaning": "끝나다. 끝내다. 마치다. …해버리다"
  },
  {
    "number": 401,
    "word": "しみん",
    "kanji": "市民",
    "meaning": "시민"
  },
  {
    "number": 402,
    "word": "じむしょ",
    "kanji": "事務所",
    "meaning": "사무소"
  },
  {
    "number": 403,
    "word": "じゃ",
    "kanji": "",
    "meaning": "그럼. ‘では’의 전와"
  },
  {
    "number": 404,
    "word": "じゃあ",
    "kanji": "",
    "meaning": "→じゃ. ‘では’의 스스럼없는 말씨"
  },
  {
    "number": 405,
    "word": "しゃかい",
    "kanji": "社会",
    "meaning": "사회"
  },
  {
    "number": 406,
    "word": "しやくしょ",
    "kanji": "市役所",
    "meaning": "시청"
  },
  {
    "number": 407,
    "word": "しやくしょ",
    "kanji": "市役所",
    "meaning": "시청"
  },
  {
    "number": 408,
    "word": "しゃちょう",
    "kanji": "社長",
    "meaning": "사장"
  },
  {
    "number": 409,
    "word": "しゃどう",
    "kanji": "車道",
    "meaning": "차도. 찻길"
  },
  {
    "number": 410,
    "word": "じゃま",
    "kanji": "邪魔",
    "meaning": "방해. 장애"
  },
  {
    "number": 411,
    "word": "じゆう",
    "kanji": "自由",
    "meaning": "자유"
  },
  {
    "number": 412,
    "word": "じゅう",
    "kanji": "中",
    "meaning": "동안. …중. …동안. …내내"
  },
  {
    "number": 413,
    "word": "しゅうかん",
    "kanji": "習慣",
    "meaning": "습관. 관습"
  },
  {
    "number": 414,
    "word": "しゅうかん",
    "kanji": "週間",
    "meaning": "주간"
  },
  {
    "number": 415,
    "word": "じゅうしょ",
    "kanji": "住所",
    "meaning": "주소"
  },
  {
    "number": 416,
    "word": "じゅうどう",
    "kanji": "柔道",
    "meaning": "유도"
  },
  {
    "number": 417,
    "word": "じゅうぶん",
    "kanji": "十分·充分",
    "meaning": "충분"
  },
  {
    "number": 418,
    "word": "じゅぎょう",
    "kanji": "授業",
    "meaning": "수업"
  },
  {
    "number": 419,
    "word": "しゅじん",
    "kanji": "主人",
    "meaning": "①주인. ②남편"
  },
  {
    "number": 420,
    "word": "しゅっせき",
    "kanji": "出席",
    "meaning": "출석"
  },
  {
    "number": 421,
    "word": "しゅっぱつ",
    "kanji": "出発",
    "meaning": "출발"
  },
  {
    "number": 422,
    "word": "しゅみ",
    "kanji": "趣味",
    "meaning": "취미"
  },
  {
    "number": 423,
    "word": "じゅんび",
    "kanji": "準備",
    "meaning": "준비"
  },
  {
    "number": 424,
    "word": "しょうかい",
    "kanji": "紹介",
    "meaning": "소개"
  },
  {
    "number": 425,
    "word": "しょうがつ",
    "kanji": "正月",
    "meaning": "설날. 정월"
  },
  {
    "number": 426,
    "word": "しょうがっこう",
    "kanji": "小学校",
    "meaning": "초등학교"
  },
  {
    "number": 427,
    "word": "しょうせつ",
    "kanji": "小説",
    "meaning": "소설"
  },
  {
    "number": 428,
    "word": "しょうたい",
    "kanji": "招待",
    "meaning": "초대"
  },
  {
    "number": 429,
    "word": "しょうゆ",
    "kanji": "醬油",
    "meaning": "간장"
  },
  {
    "number": 430,
    "word": "しょうらい",
    "kanji": "将来",
    "meaning": "장래"
  },
  {
    "number": 431,
    "word": "しょくじ",
    "kanji": "食事",
    "meaning": "식사"
  },
  {
    "number": 432,
    "word": "しょくりょうひん",
    "kanji": "食料品",
    "meaning": "식료품"
  },
  {
    "number": 433,
    "word": "じょせい",
    "kanji": "女性",
    "meaning": "여성"
  },
  {
    "number": 434,
    "word": "しらせる",
    "kanji": "知らせる",
    "meaning": "알리다. 통지하다. 통보하다"
  },
  {
    "number": 435,
    "word": "しらべる",
    "kanji": "調べる",
    "meaning": "조사하다. 찾다. 수색하다"
  },
  {
    "number": 436,
    "word": "しる",
    "kanji": "知る",
    "meaning": "알다"
  },
  {
    "number": 437,
    "word": "じんこう",
    "kanji": "人口",
    "meaning": "인구"
  },
  {
    "number": 438,
    "word": "じんじゃ",
    "kanji": "神社",
    "meaning": "신사"
  },
  {
    "number": 439,
    "word": "しんねん",
    "kanji": "新年",
    "meaning": "신년. 새해"
  },
  {
    "number": 440,
    "word": "しんぱい",
    "kanji": "心配",
    "meaning": "걱정. 근심"
  },
  {
    "number": 441,
    "word": "すいえい",
    "kanji": "水泳",
    "meaning": "수영"
  },
  {
    "number": 442,
    "word": "すいどう",
    "kanji": "水道",
    "meaning": "수도. 상수도·하수도의 총칭"
  },
  {
    "number": 443,
    "word": "ずいぶん",
    "kanji": "随分",
    "meaning": "대단히. 몹시. 꽤. 충분히"
  },
  {
    "number": 444,
    "word": "すうがく",
    "kanji": "数学",
    "meaning": "수학"
  },
  {
    "number": 445,
    "word": "すぎる",
    "kanji": "過ぎる",
    "meaning": "지나다. 통과하다. 지내다"
  },
  {
    "number": 446,
    "word": "すく",
    "kanji": "空く",
    "meaning": "틈이 나다. 짬이 나다. 속이 비다"
  },
  {
    "number": 447,
    "word": "すぐに",
    "kanji": "",
    "meaning": "곧. 즉시. 곧바로"
  },
  {
    "number": 448,
    "word": "すごい",
    "kanji": "凄い",
    "meaning": "대단하다"
  },
  {
    "number": 449,
    "word": "すずしい",
    "kanji": "涼しい",
    "meaning": "시원하다. 선선하다"
  },
  {
    "number": 450,
    "word": "すすむ",
    "kanji": "進む",
    "meaning": "나아가다. 진출하다"
  },
  {
    "number": 451,
    "word": "すっかり",
    "kanji": "",
    "meaning": "죄다. 모두. 아주. 완전히"
  },
  {
    "number": 452,
    "word": "ずっと",
    "kanji": "",
    "meaning": "훨씬. 더"
  },
  {
    "number": 453,
    "word": "すてる",
    "kanji": "捨てる",
    "meaning": "버리다"
  },
  {
    "number": 454,
    "word": "すな",
    "kanji": "砂",
    "meaning": "모래"
  },
  {
    "number": 455,
    "word": "すばらしい",
    "kanji": "素晴らしい",
    "meaning": "훌륭하다. 근사하다. 굉장하다"
  },
  {
    "number": 456,
    "word": "すべる",
    "kanji": "滑る",
    "meaning": "미끄러지다"
  },
  {
    "number": 457,
    "word": "すり",
    "kanji": "",
    "meaning": "소매치기"
  },
  {
    "number": 458,
    "word": "すると",
    "kanji": "",
    "meaning": "그러자. 그러면. 그렇다면"
  },
  {
    "number": 459,
    "word": "せいかつ",
    "kanji": "生活",
    "meaning": "생활"
  },
  {
    "number": 460,
    "word": "せいさん",
    "kanji": "生産",
    "meaning": "생산"
  },
  {
    "number": 461,
    "word": "せいじ",
    "kanji": "政治",
    "meaning": "정치"
  },
  {
    "number": 462,
    "word": "せいよう",
    "kanji": "西洋",
    "meaning": "서양"
  },
  {
    "number": 463,
    "word": "せかい",
    "kanji": "世界",
    "meaning": "세계"
  },
  {
    "number": 464,
    "word": "せかいじゅう",
    "kanji": "世界中",
    "meaning": "온 세계. 전 세계"
  },
  {
    "number": 465,
    "word": "せき",
    "kanji": "席",
    "meaning": "자리. 좌석"
  },
  {
    "number": 466,
    "word": "せつめい",
    "kanji": "説明",
    "meaning": "설명"
  },
  {
    "number": 467,
    "word": "せなか",
    "kanji": "背中",
    "meaning": "등"
  },
  {
    "number": 468,
    "word": "せびろ",
    "kanji": "背広",
    "meaning": "신사복"
  },
  {
    "number": 469,
    "word": "せわ",
    "kanji": "世話",
    "meaning": "도와줌. 보살핌. 신세"
  },
  {
    "number": 470,
    "word": "せん",
    "kanji": "線",
    "meaning": "선"
  },
  {
    "number": 471,
    "word": "ぜんこく",
    "kanji": "全国",
    "meaning": "전국"
  },
  {
    "number": 472,
    "word": "せんしゅ",
    "kanji": "選手",
    "meaning": "선수"
  },
  {
    "number": 473,
    "word": "ぜんぜん",
    "kanji": "全然",
    "meaning": "전혀"
  },
  {
    "number": 474,
    "word": "せんせんげつ",
    "kanji": "先々月",
    "meaning": "지지난 달"
  },
  {
    "number": 475,
    "word": "せんせんしゅう",
    "kanji": "先々週",
    "meaning": "지지난 주"
  },
  {
    "number": 476,
    "word": "せんそう",
    "kanji": "戦争",
    "meaning": "전쟁"
  },
  {
    "number": 477,
    "word": "ぜんたい",
    "kanji": "全体",
    "meaning": "전체"
  },
  {
    "number": 478,
    "word": "せんたく",
    "kanji": "洗濯",
    "meaning": "세탁. 빨래"
  },
  {
    "number": 479,
    "word": "せんぱい",
    "kanji": "先輩",
    "meaning": "선배"
  },
  {
    "number": 480,
    "word": "ぜんぶ",
    "kanji": "全部",
    "meaning": "전부. 모두"
  },
  {
    "number": 481,
    "word": "せんもん",
    "kanji": "専門",
    "meaning": "전문"
  },
  {
    "number": 482,
    "word": "そう",
    "kanji": "",
    "meaning": "그렇게. 그리. 그래"
  },
  {
    "number": 483,
    "word": "そうじ",
    "kanji": "掃除",
    "meaning": "청소"
  },
  {
    "number": 484,
    "word": "そうして",
    "kanji": "",
    "meaning": "그리고. 그리고 나서. 그와 같이 해서. 그렇게 해서"
  },
  {
    "number": 485,
    "word": "そうたい",
    "kanji": "早退",
    "meaning": "조퇴"
  },
  {
    "number": 486,
    "word": "そうだん",
    "kanji": "相談",
    "meaning": "상담. 상의. 의논"
  },
  {
    "number": 487,
    "word": "そして",
    "kanji": "",
    "meaning": "그리고"
  },
  {
    "number": 488,
    "word": "そだてる",
    "kanji": "育てる",
    "meaning": "키우다. 기르다. 양육하다"
  },
  {
    "number": 489,
    "word": "そつぎょう",
    "kanji": "卒業",
    "meaning": "졸업"
  },
  {
    "number": 490,
    "word": "そとがわ",
    "kanji": "外側",
    "meaning": "바깥쪽. 외면"
  },
  {
    "number": 491,
    "word": "そふ",
    "kanji": "祖父",
    "meaning": "(나의) 할아버지"
  },
  {
    "number": 492,
    "word": "そぼ",
    "kanji": "祖母",
    "meaning": "(나의) 할머니"
  },
  {
    "number": 493,
    "word": "そる",
    "kanji": "剃る",
    "meaning": "(수염을) 깎다"
  },
  {
    "number": 494,
    "word": "それから",
    "kanji": "",
    "meaning": "그 다음에. 그리고. 그래서"
  },
  {
    "number": 495,
    "word": "それで",
    "kanji": "",
    "meaning": "그래서. 그런 까닭에. 그로 인해서"
  },
  {
    "number": 496,
    "word": "それでは",
    "kanji": "",
    "meaning": "그러면. 그럼. 그렇다면"
  },
  {
    "number": 497,
    "word": "それに",
    "kanji": "",
    "meaning": "그런데도. 그러함에도. 게다가"
  },
  {
    "number": 498,
    "word": "それほど",
    "kanji": "それ程",
    "meaning": "그렇게. 그다지. 그만큼"
  },
  {
    "number": 499,
    "word": "そろそろ",
    "kanji": "",
    "meaning": "시간이 다 되어가는 모양. 이제 슬슬"
  },
  {
    "number": 500,
    "word": "ぞんじる",
    "kanji": "存じる",
    "meaning": "알고 있다 (겸양어)"
  },
  {
    "number": 501,
    "word": "そんなに",
    "kanji": "",
    "meaning": "그렇게"
  },
  {
    "number": 502,
    "word": "たいいん",
    "kanji": "退院",
    "meaning": "퇴원"
  },
  {
    "number": 503,
    "word": "だいがくせい",
    "kanji": "大学生",
    "meaning": "대학생"
  },
  {
    "number": 504,
    "word": "たいしかん",
    "kanji": "大使館",
    "meaning": "대사관"
  },
  {
    "number": 505,
    "word": "だいじな",
    "kanji": "大事な",
    "meaning": "중요한. 소중한"
  },
  {
    "number": 506,
    "word": "たいせつな",
    "kanji": "大切な",
    "meaning": "소중한. 중요한"
  },
  {
    "number": 507,
    "word": "だいたい",
    "kanji": "大体",
    "meaning": "대체로. 대개. 대충"
  },
  {
    "number": 508,
    "word": "たいてい",
    "kanji": "大底·大抵",
    "meaning": "대개. 대부분. 대다수"
  },
  {
    "number": 509,
    "word": "だいぶ",
    "kanji": "大分",
    "meaning": "상당히. 어지간히. 꽤"
  },
  {
    "number": 510,
    "word": "たいふう",
    "kanji": "台風",
    "meaning": "태풍"
  },
  {
    "number": 511,
    "word": "たおれる",
    "kanji": "倒れる",
    "meaning": "쓰러지다. 자빠지다. 넘어지다"
  },
  {
    "number": 512,
    "word": "だから",
    "kanji": "",
    "meaning": "그러므로. 그러니까. 그래서"
  },
  {
    "number": 513,
    "word": "たけ",
    "kanji": "竹",
    "meaning": "대나무. 대"
  },
  {
    "number": 514,
    "word": "たしか",
    "kanji": "確か",
    "meaning": "확실함. 틀림없음. 믿을 수 있음. 확실히. 분명히. 틀림없이. 아마"
  },
  {
    "number": 515,
    "word": "たす",
    "kanji": "足す",
    "meaning": "더하다. 보태다"
  },
  {
    "number": 516,
    "word": "たすう",
    "kanji": "多数",
    "meaning": "다수"
  },
  {
    "number": 517,
    "word": "たずねる",
    "kanji": "訪ねる",
    "meaning": "찾다. 방문하다"
  },
  {
    "number": 518,
    "word": "ただいま",
    "kanji": "只今",
    "meaning": "지금. 현재. 방금. 이제 막. 집에 돌아왔을 때의 인사말"
  },
  {
    "number": 519,
    "word": "ただしい",
    "kanji": "正しい",
    "meaning": "옳다. 바르다. 맞다"
  },
  {
    "number": 520,
    "word": "たたみ",
    "kanji": "畳",
    "meaning": "다다미"
  },
  {
    "number": 521,
    "word": "たつ",
    "kanji": "建つ",
    "meaning": "세워지다"
  },
  {
    "number": 522,
    "word": "たて",
    "kanji": "縦",
    "meaning": "세로"
  },
  {
    "number": 523,
    "word": "たてる",
    "kanji": "建てる",
    "meaning": "세우다. 짓다. 건조하다"
  },
  {
    "number": 524,
    "word": "たとえば",
    "kanji": "例えば",
    "meaning": "예를 들면. 예컨대. 가령. 설령"
  },
  {
    "number": 525,
    "word": "たな",
    "kanji": "棚",
    "meaning": "선반"
  },
  {
    "number": 526,
    "word": "たのしみ",
    "kanji": "楽しみ",
    "meaning": "즐거움. 낙. 기대"
  },
  {
    "number": 527,
    "word": "たのむ",
    "kanji": "頼む",
    "meaning": "부탁하다"
  },
  {
    "number": 528,
    "word": "たぶん",
    "kanji": "多分",
    "meaning": "아마"
  },
  {
    "number": 529,
    "word": "たべすぎ",
    "kanji": "食べ過ぎ",
    "meaning": "과식"
  },
  {
    "number": 530,
    "word": "たまに",
    "kanji": "",
    "meaning": "드물게. 아주 가끔"
  },
  {
    "number": 531,
    "word": "ため",
    "kanji": "",
    "meaning": "-를 위하여(목적). -때문에(이유)"
  },
  {
    "number": 532,
    "word": "だめだ",
    "kanji": "駄目だ",
    "meaning": "안되다. 소용없음. 효과가 없음"
  },
  {
    "number": 533,
    "word": "たりない",
    "kanji": "足りない",
    "meaning": "모자라다. 부족하다. 충분치 않다"
  },
  {
    "number": 534,
    "word": "たりる",
    "kanji": "足りる",
    "meaning": "족하다. 충분하다"
  },
  {
    "number": 535,
    "word": "だんせい",
    "kanji": "男性",
    "meaning": "남성"
  },
  {
    "number": 536,
    "word": "ち",
    "kanji": "血",
    "meaning": "피"
  },
  {
    "number": 537,
    "word": "ちがう",
    "kanji": "違う",
    "meaning": "다르다. 틀리다. 잘못되다"
  },
  {
    "number": 538,
    "word": "ちから",
    "kanji": "力",
    "meaning": "힘"
  },
  {
    "number": 539,
    "word": "ちず",
    "kanji": "地図",
    "meaning": "지도"
  },
  {
    "number": 540,
    "word": "ちちおや",
    "kanji": "父親",
    "meaning": "부친"
  },
  {
    "number": 541,
    "word": "ちっとも",
    "kanji": "",
    "meaning": "조금도. 전혀"
  },
  {
    "number": 542,
    "word": "ちゃいろ",
    "kanji": "茶色",
    "meaning": "갈색"
  },
  {
    "number": 543,
    "word": "ちゃわん",
    "kanji": "茶わん",
    "meaning": "밥공기"
  },
  {
    "number": 544,
    "word": "ちゅうい",
    "kanji": "注意",
    "meaning": "주의. 조심"
  },
  {
    "number": 545,
    "word": "ちゅうがくせい",
    "kanji": "中学生",
    "meaning": "중학생"
  },
  {
    "number": 546,
    "word": "ちゅうがっこう",
    "kanji": "中学校",
    "meaning": "중학교"
  },
  {
    "number": 547,
    "word": "ちゅうし",
    "kanji": "中止",
    "meaning": "중지. 취소"
  },
  {
    "number": 548,
    "word": "ちゅうしゃ",
    "kanji": "駐車",
    "meaning": "주차"
  },
  {
    "number": 549,
    "word": "ちゅうしゃじょう",
    "kanji": "駐車場",
    "meaning": "주차장"
  },
  {
    "number": 550,
    "word": "ちょうど",
    "kanji": "",
    "meaning": "꼭. 정확히. 마치. 마침. 알맞게. 딱"
  },
  {
    "number": 551,
    "word": "ちり",
    "kanji": "地理",
    "meaning": "지리"
  },
  {
    "number": 552,
    "word": "つかまえる",
    "kanji": "捕まえる",
    "meaning": "붙잡다. 붙들다"
  },
  {
    "number": 553,
    "word": "つかれる",
    "kanji": "疲れる",
    "meaning": "지치다. 피로해지다"
  },
  {
    "number": 554,
    "word": "つき",
    "kanji": "月",
    "meaning": "달"
  },
  {
    "number": 555,
    "word": "つく",
    "kanji": "付く",
    "meaning": "붙다. 달라붙다. 묻다"
  },
  {
    "number": 556,
    "word": "つく",
    "kanji": "着く",
    "meaning": "닿다. 도착하다"
  },
  {
    "number": 557,
    "word": "つける",
    "kanji": "付ける",
    "meaning": "붙이다. 대다"
  },
  {
    "number": 558,
    "word": "つごう",
    "kanji": "都合",
    "meaning": "다른 일과의 관계. 형편"
  },
  {
    "number": 559,
    "word": "つたえる",
    "kanji": "伝える",
    "meaning": "전하다. 알리다. 전언하다"
  },
  {
    "number": 560,
    "word": "つづく",
    "kanji": "続く",
    "meaning": "계속되다. 잇따르다"
  },
  {
    "number": 561,
    "word": "つづける",
    "kanji": "続ける",
    "meaning": "계속하다"
  },
  {
    "number": 562,
    "word": "つつむ",
    "kanji": "包む",
    "meaning": "싸다. 포장하다"
  },
  {
    "number": 563,
    "word": "つとめる",
    "kanji": "勤める",
    "meaning": "근무하다"
  },
  {
    "number": 564,
    "word": "つま",
    "kanji": "妻",
    "meaning": "처. 아내"
  },
  {
    "number": 565,
    "word": "つまらない",
    "kanji": "",
    "meaning": "재미없다. 하찮다. 시시하다. 흥미가 없다"
  },
  {
    "number": 566,
    "word": "つめ",
    "kanji": "爪",
    "meaning": "손톱. 발톱"
  },
  {
    "number": 567,
    "word": "つめたい",
    "kanji": "冷たい",
    "meaning": "차갑다. 차다. 냉정하다. 쌀쌀하다"
  },
  {
    "number": 568,
    "word": "つもり",
    "kanji": "",
    "meaning": "(…할) 생각"
  },
  {
    "number": 569,
    "word": "つもる",
    "kanji": "積もる",
    "meaning": "쌓이다"
  },
  {
    "number": 570,
    "word": "つゆ",
    "kanji": "梅雨",
    "meaning": "장마"
  },
  {
    "number": 571,
    "word": "つる",
    "kanji": "釣る",
    "meaning": "낚다"
  },
  {
    "number": 572,
    "word": "つれる",
    "kanji": "連れる",
    "meaning": "데리다. 거느리다. 따르다"
  },
  {
    "number": 573,
    "word": "ていねい",
    "kanji": "丁寧",
    "meaning": "친절함. 정중함. 주의 깊고 신중함"
  },
  {
    "number": 574,
    "word": "でいりぐち",
    "kanji": "出入口",
    "meaning": "출입구"
  },
  {
    "number": 575,
    "word": "でかける",
    "kanji": "出掛ける",
    "meaning": "외출하다. 나가다"
  },
  {
    "number": 576,
    "word": "できる",
    "kanji": "",
    "meaning": "①할 수 있다. 할 줄 알다. 가능하다. ②생기다"
  },
  {
    "number": 577,
    "word": "できるだけ",
    "kanji": "",
    "meaning": "가능한 한. 되도록"
  },
  {
    "number": 578,
    "word": "てつだう",
    "kanji": "手伝う",
    "meaning": "도와주다"
  },
  {
    "number": 579,
    "word": "では",
    "kanji": "",
    "meaning": "그러면. 그렇다면. 그럼"
  },
  {
    "number": 580,
    "word": "てぶくろ",
    "kanji": "手袋",
    "meaning": "장갑"
  },
  {
    "number": 581,
    "word": "てもと",
    "kanji": "手元",
    "meaning": "손이 미치는 범위. 자기 주위"
  },
  {
    "number": 582,
    "word": "てら",
    "kanji": "寺",
    "meaning": "절"
  },
  {
    "number": 583,
    "word": "てん",
    "kanji": "点",
    "meaning": "점"
  },
  {
    "number": 584,
    "word": "てんいん",
    "kanji": "店員",
    "meaning": "점원"
  },
  {
    "number": 585,
    "word": "でんきだい",
    "kanji": "電気代",
    "meaning": "전기 요금"
  },
  {
    "number": 586,
    "word": "てんきよほう",
    "kanji": "天気予報",
    "meaning": "일기 예보"
  },
  {
    "number": 587,
    "word": "でんとう",
    "kanji": "電灯",
    "meaning": "전등"
  },
  {
    "number": 588,
    "word": "てんぷら",
    "kanji": "",
    "meaning": "튀김"
  },
  {
    "number": 589,
    "word": "でんぽう",
    "kanji": "電報",
    "meaning": "전보"
  },
  {
    "number": 590,
    "word": "てんらんかい",
    "kanji": "展覧会",
    "meaning": "전람회"
  },
  {
    "number": 591,
    "word": "ど",
    "kanji": "度",
    "meaning": "도. 정도. 온도·습도·각도·안경 등의 세기를 나타내는 말"
  },
  {
    "number": 592,
    "word": "と",
    "kanji": "戸",
    "meaning": "문짝. 문. 대문. 집의 출입구"
  },
  {
    "number": 593,
    "word": "どうぐ",
    "kanji": "道具",
    "meaning": "도구"
  },
  {
    "number": 594,
    "word": "とうとう",
    "kanji": "",
    "meaning": "드디어. 결국. 마침내"
  },
  {
    "number": 595,
    "word": "どうぶつえん",
    "kanji": "動物園",
    "meaning": "동물원"
  },
  {
    "number": 596,
    "word": "とおり",
    "kanji": "通り",
    "meaning": "길. 통함"
  },
  {
    "number": 597,
    "word": "とおる",
    "kanji": "通る",
    "meaning": "통하다. 걸어다니다"
  },
  {
    "number": 598,
    "word": "とき",
    "kanji": "時",
    "meaning": "시간. 때"
  },
  {
    "number": 599,
    "word": "とくに",
    "kanji": "特に",
    "meaning": "특히. 특별히"
  },
  {
    "number": 600,
    "word": "とくべつ",
    "kanji": "特別",
    "meaning": "특별"
  },
  {
    "number": 601,
    "word": "とこや",
    "kanji": "床屋",
    "meaning": "이발소"
  },
  {
    "number": 602,
    "word": "とじる",
    "kanji": "閉じる",
    "meaning": "닫다"
  },
  {
    "number": 603,
    "word": "とちゅう",
    "kanji": "途中",
    "meaning": "도중"
  },
  {
    "number": 604,
    "word": "とっきゅう",
    "kanji": "特急",
    "meaning": "특급"
  },
  {
    "number": 605,
    "word": "とどく",
    "kanji": "届く",
    "meaning": "닿다. 배달되다"
  },
  {
    "number": 606,
    "word": "とどける",
    "kanji": "届ける",
    "meaning": "닿게 하다. 배달하다. 보내주다. 신고하다"
  },
  {
    "number": 607,
    "word": "とまる",
    "kanji": "泊まる",
    "meaning": "묵다. 숙박하다"
  },
  {
    "number": 608,
    "word": "とまる",
    "kanji": "止まる",
    "meaning": "멈추다. 멎다. 그치다. 정지하다. 서다"
  },
  {
    "number": 609,
    "word": "とめる",
    "kanji": "泊める",
    "meaning": "숙박시키다. 묵게 하다. 정박시키다"
  },
  {
    "number": 610,
    "word": "とめる",
    "kanji": "止める",
    "meaning": "멈추다. 세우다. 정지시키다"
  },
  {
    "number": 611,
    "word": "とりかえる",
    "kanji": "取り替える·取り換える",
    "meaning": "바꾸다. 교환하다. 갈다"
  },
  {
    "number": 612,
    "word": "とる",
    "kanji": "取る",
    "meaning": "잡다. 들다. 쥐다"
  },
  {
    "number": 613,
    "word": "どろぼう",
    "kanji": "泥棒",
    "meaning": "도둑"
  },
  {
    "number": 614,
    "word": "どんどん",
    "kanji": "",
    "meaning": "자꾸. 계속. 부쩍부쩍. 일이 순조롭게 진척되는 모양"
  },
  {
    "number": 615,
    "word": "どんなに",
    "kanji": "",
    "meaning": "아무리"
  },
  {
    "number": 616,
    "word": "ないぶ",
    "kanji": "内部",
    "meaning": "내부"
  },
  {
    "number": 617,
    "word": "なおす",
    "kanji": "直す",
    "meaning": "고치다. 정정하다. 바로잡다"
  },
  {
    "number": 618,
    "word": "なおす",
    "kanji": "治す",
    "meaning": "고치다. 치료하다"
  },
  {
    "number": 619,
    "word": "なおる",
    "kanji": "直る",
    "meaning": "고쳐지다. 바로잡히다"
  },
  {
    "number": 620,
    "word": "なおる",
    "kanji": "治る",
    "meaning": "낫다. 치료되다"
  },
  {
    "number": 621,
    "word": "なかなか",
    "kanji": "",
    "meaning": "상당히. 꽤. 좀처럼. 그리 간단히는 일이 달성되기까지 시간이 걸리는 모양"
  },
  {
    "number": 622,
    "word": "ながれる",
    "kanji": "流れる",
    "meaning": "흐르다. 흘러내리다. 흘러가다"
  },
  {
    "number": 623,
    "word": "なく",
    "kanji": "鳴く",
    "meaning": "(동물이) 소리를 내다. 울다"
  },
  {
    "number": 624,
    "word": "なく",
    "kanji": "泣く",
    "meaning": "울다"
  },
  {
    "number": 625,
    "word": "なくす",
    "kanji": "無くす",
    "meaning": "없애다. 잃다"
  },
  {
    "number": 626,
    "word": "なくなる",
    "kanji": "亡くなる",
    "meaning": "죽다. 돌아가시다"
  },
  {
    "number": 627,
    "word": "なくなる",
    "kanji": "無くなる",
    "meaning": "없어지다. 보이지 않게 되다. 다 떨어지다. 다하다"
  },
  {
    "number": 628,
    "word": "なげる",
    "kanji": "投げる",
    "meaning": "던지다"
  },
  {
    "number": 629,
    "word": "なさる",
    "kanji": "",
    "meaning": "하시다 (する의 존경어)"
  },
  {
    "number": 630,
    "word": "など",
    "kanji": "等",
    "meaning": "따위. 등"
  },
  {
    "number": 631,
    "word": "なまビール",
    "kanji": "生ビール",
    "meaning": "생맥주"
  },
  {
    "number": 632,
    "word": "ならぶ",
    "kanji": "並ぶ",
    "meaning": "한 줄로 서다. 배치되다"
  },
  {
    "number": 633,
    "word": "ならべる",
    "kanji": "並べる",
    "meaning": "늘어놓다. 나란히 서게 하다. 배치하다"
  },
  {
    "number": 634,
    "word": "なる",
    "kanji": "鳴る",
    "meaning": "울리다. 소리가 나다"
  },
  {
    "number": 635,
    "word": "なる",
    "kanji": "",
    "meaning": "(…이) 되다"
  },
  {
    "number": 636,
    "word": "なるべく",
    "kanji": "",
    "meaning": "될 수 있는 한. 가능한 한. 되도록"
  },
  {
    "number": 637,
    "word": "なるほど",
    "kanji": "",
    "meaning": "정말. 과연"
  },
  {
    "number": 638,
    "word": "なれる",
    "kanji": "慣れる",
    "meaning": "익숙해지다. 길들다"
  },
  {
    "number": 639,
    "word": "なんど",
    "kanji": "何度",
    "meaning": "몇 번. 여러 번"
  },
  {
    "number": 640,
    "word": "にあう",
    "kanji": "似合う",
    "meaning": "잘 맞다. 어울리다"
  },
  {
    "number": 641,
    "word": "におい",
    "kanji": "匂い",
    "meaning": "냄새"
  },
  {
    "number": 642,
    "word": "にがい",
    "kanji": "苦い",
    "meaning": "쓰다. 씁쓸하다"
  },
  {
    "number": 643,
    "word": "にくや",
    "kanji": "肉屋",
    "meaning": "정육점"
  },
  {
    "number": 644,
    "word": "にげる",
    "kanji": "逃げる",
    "meaning": "도망치다. 달아나다"
  },
  {
    "number": 645,
    "word": "にっき",
    "kanji": "日記",
    "meaning": "일기"
  },
  {
    "number": 646,
    "word": "にもつ",
    "kanji": "荷物",
    "meaning": "화물. 짐"
  },
  {
    "number": 647,
    "word": "にゅういん",
    "kanji": "入院",
    "meaning": "입원"
  },
  {
    "number": 648,
    "word": "にゅうがく",
    "kanji": "入学",
    "meaning": "입학"
  },
  {
    "number": 649,
    "word": "にゅうしゃ",
    "kanji": "入社",
    "meaning": "입사"
  },
  {
    "number": 650,
    "word": "にる",
    "kanji": "似る",
    "meaning": "닮다. 비슷하다"
  },
  {
    "number": 651,
    "word": "にんぎょう",
    "kanji": "人形",
    "meaning": "인형. 꼭두각시"
  },
  {
    "number": 652,
    "word": "にんじん",
    "kanji": "人参",
    "meaning": "당근"
  },
  {
    "number": 653,
    "word": "ぬぐ",
    "kanji": "脱ぐ",
    "meaning": "벗다"
  },
  {
    "number": 654,
    "word": "ぬすむ",
    "kanji": "盗む",
    "meaning": "훔치다"
  },
  {
    "number": 655,
    "word": "ぬる",
    "kanji": "塗る",
    "meaning": "바르다. 칠하다"
  },
  {
    "number": 656,
    "word": "ぬるい",
    "kanji": "",
    "meaning": "미지근하다"
  },
  {
    "number": 657,
    "word": "ぬれる",
    "kanji": "濡れる",
    "meaning": "젖다"
  },
  {
    "number": 658,
    "word": "ねがう",
    "kanji": "願う",
    "meaning": "원하다. 바라다"
  },
  {
    "number": 659,
    "word": "ねだん",
    "kanji": "値段",
    "meaning": "값. 가격"
  },
  {
    "number": 660,
    "word": "ねつ",
    "kanji": "熱",
    "meaning": "열"
  },
  {
    "number": 661,
    "word": "ねぼう",
    "kanji": "寝坊",
    "meaning": "늦잠을 잠. 잠꾸러기"
  },
  {
    "number": 662,
    "word": "ねむい",
    "kanji": "眠い",
    "meaning": "졸리다"
  },
  {
    "number": 663,
    "word": "ねむたい",
    "kanji": "眠たい",
    "meaning": "졸리다"
  },
  {
    "number": 664,
    "word": "ねむる",
    "kanji": "眠る",
    "meaning": "자다. 잠자다"
  },
  {
    "number": 665,
    "word": "ねんだい",
    "kanji": "年代",
    "meaning": "연대. 경과한 시대"
  },
  {
    "number": 666,
    "word": "のこる",
    "kanji": "残る",
    "meaning": "남다"
  },
  {
    "number": 667,
    "word": "のど",
    "kanji": "喉",
    "meaning": "목구멍"
  },
  {
    "number": 668,
    "word": "のみすぎ",
    "kanji": "飲みすぎ",
    "meaning": "과음"
  },
  {
    "number": 669,
    "word": "のりかえ",
    "kanji": "乗り換え",
    "meaning": "갈아탐. 바꿔 탐"
  },
  {
    "number": 670,
    "word": "のりかえる",
    "kanji": "乗り換える",
    "meaning": "바꿔 타다. 갈아타다"
  },
  {
    "number": 671,
    "word": "のりもの",
    "kanji": "乗(り)物",
    "meaning": "탈것. 교통 기관"
  },
  {
    "number": 672,
    "word": "は",
    "kanji": "葉",
    "meaning": "잎. 잎사귀"
  },
  {
    "number": 673,
    "word": "は",
    "kanji": "歯",
    "meaning": "이"
  },
  {
    "number": 674,
    "word": "ばあい",
    "kanji": "場合",
    "meaning": "경우"
  },
  {
    "number": 675,
    "word": "はいけんする",
    "kanji": "拝見する",
    "meaning": "보다(見る의 겸양어)"
  },
  {
    "number": 676,
    "word": "はいざら",
    "kanji": "灰皿",
    "meaning": "재떨이"
  },
  {
    "number": 677,
    "word": "はいしゃ",
    "kanji": "歯医者",
    "meaning": "치과 의사"
  },
  {
    "number": 678,
    "word": "ばかり",
    "kanji": "",
    "meaning": "…만. …정도. …쯤"
  },
  {
    "number": 679,
    "word": "はく",
    "kanji": "",
    "meaning": "(바지를) 입다. (신발을) 신다"
  },
  {
    "number": 680,
    "word": "はくさい",
    "kanji": "白菜",
    "meaning": "배추"
  },
  {
    "number": 681,
    "word": "はこ",
    "kanji": "箱",
    "meaning": "상자"
  },
  {
    "number": 682,
    "word": "はこぶ",
    "kanji": "運ぶ",
    "meaning": "운반하다. 옮기다"
  },
  {
    "number": 683,
    "word": "はし",
    "kanji": "橋",
    "meaning": "다리"
  },
  {
    "number": 684,
    "word": "はじまり",
    "kanji": "始まり",
    "meaning": "시작. 시초"
  },
  {
    "number": 685,
    "word": "はじめて",
    "kanji": "初めて",
    "meaning": "처음. 첫 번째"
  },
  {
    "number": 686,
    "word": "はじめに",
    "kanji": "",
    "meaning": "우선. 먼저"
  },
  {
    "number": 687,
    "word": "はじめる",
    "kanji": "始める",
    "meaning": "시작하다. …하기 시작하다"
  },
  {
    "number": 688,
    "word": "ばしょ",
    "kanji": "場所",
    "meaning": "장소. 곳. 위치. 자리"
  },
  {
    "number": 689,
    "word": "はしる",
    "kanji": "走る",
    "meaning": "달리다. 뛰다"
  },
  {
    "number": 690,
    "word": "はず",
    "kanji": "",
    "meaning": "반드시 …할 것임. …할 리"
  },
  {
    "number": 691,
    "word": "はずかしい",
    "kanji": "恥ずかしい",
    "meaning": "부끄럽다. 면목 없다. 창피하다"
  },
  {
    "number": 692,
    "word": "はたらく",
    "kanji": "働く",
    "meaning": "일하다. 노동을 하다"
  },
  {
    "number": 693,
    "word": "はつおん",
    "kanji": "発音",
    "meaning": "발음"
  },
  {
    "number": 694,
    "word": "はっきり",
    "kanji": "",
    "meaning": "똑똑히. 명확히"
  },
  {
    "number": 695,
    "word": "はなみ",
    "kanji": "花見",
    "meaning": "꽃구경. 꽃놀이"
  },
  {
    "number": 696,
    "word": "はね",
    "kanji": "羽",
    "meaning": "날개. 새털. 깃"
  },
  {
    "number": 697,
    "word": "はやし",
    "kanji": "林",
    "meaning": "숲"
  },
  {
    "number": 698,
    "word": "はらう",
    "kanji": "払う",
    "meaning": "(돈을) 내다. 지불하다"
  },
  {
    "number": 699,
    "word": "はれ",
    "kanji": "晴れ",
    "meaning": "하늘이 갬. 날씨가 좋음"
  },
  {
    "number": 700,
    "word": "はれる",
    "kanji": "晴れる",
    "meaning": "(날씨가) 개다"
  },
  {
    "number": 701,
    "word": "ばん",
    "kanji": "晩",
    "meaning": "저녁때. 밤"
  },
  {
    "number": 702,
    "word": "はん",
    "kanji": "半",
    "meaning": "반. 절반"
  },
  {
    "number": 703,
    "word": "ばん",
    "kanji": "番",
    "meaning": "순서. 차례"
  },
  {
    "number": 704,
    "word": "ばんぐみ",
    "kanji": "番組",
    "meaning": "프로"
  },
  {
    "number": 705,
    "word": "はんたい",
    "kanji": "反対",
    "meaning": "반대"
  },
  {
    "number": 706,
    "word": "はんぶん",
    "kanji": "半分",
    "meaning": "절반. 반"
  },
  {
    "number": 707,
    "word": "パンや",
    "kanji": "パン屋",
    "meaning": "빵집"
  },
  {
    "number": 708,
    "word": "ひ",
    "kanji": "日",
    "meaning": "해. 햇빛. 볕"
  },
  {
    "number": 709,
    "word": "ひえる",
    "kanji": "冷える",
    "meaning": "차가워지다. 식다"
  },
  {
    "number": 710,
    "word": "ひかり",
    "kanji": "光",
    "meaning": "빛"
  },
  {
    "number": 711,
    "word": "ひかる",
    "kanji": "光る",
    "meaning": "빛나다. 빛을 내다. 번쩍이다"
  },
  {
    "number": 712,
    "word": "ひきだし",
    "kanji": "引き出し",
    "meaning": "서랍. 찾아냄. 인출"
  },
  {
    "number": 713,
    "word": "ひく",
    "kanji": "引く",
    "meaning": "당기다. 끌다"
  },
  {
    "number": 714,
    "word": "ひく",
    "kanji": "弾く",
    "meaning": "악기를 연주하다. 켜다. 타다"
  },
  {
    "number": 715,
    "word": "ひげ",
    "kanji": "",
    "meaning": "수염"
  },
  {
    "number": 716,
    "word": "ひこうじょう",
    "kanji": "飛行場",
    "meaning": "비행장"
  },
  {
    "number": 717,
    "word": "ひさしぶり",
    "kanji": "久しぶり",
    "meaning": "오래간만"
  },
  {
    "number": 718,
    "word": "びじゅつかん",
    "kanji": "美術館",
    "meaning": "미술관"
  },
  {
    "number": 719,
    "word": "ひじょうに",
    "kanji": "非常に",
    "meaning": "매우. 상당히"
  },
  {
    "number": 720,
    "word": "ひだり",
    "kanji": "左",
    "meaning": "좌. 왼쪽"
  },
  {
    "number": 721,
    "word": "びっくり",
    "kanji": "",
    "meaning": "깜짝 놀람"
  },
  {
    "number": 722,
    "word": "ひっこす",
    "kanji": "引(っ)越す",
    "meaning": "이사하다"
  },
  {
    "number": 723,
    "word": "ひつよう",
    "kanji": "必要",
    "meaning": "필요"
  },
  {
    "number": 724,
    "word": "ひどい",
    "kanji": "",
    "meaning": "심하다. 호되다. 지독하다. 엄청나다"
  },
  {
    "number": 725,
    "word": "ひとつき",
    "kanji": "一月",
    "meaning": "한 달. 1개월"
  },
  {
    "number": 726,
    "word": "ひらく",
    "kanji": "開く",
    "meaning": "열리다"
  },
  {
    "number": 727,
    "word": "ひるま",
    "kanji": "昼間",
    "meaning": "낮. 낮동안"
  },
  {
    "number": 728,
    "word": "ひるやすみ",
    "kanji": "昼休み",
    "meaning": "점심 후의 휴식. 점심시간"
  },
  {
    "number": 729,
    "word": "ひろう",
    "kanji": "拾う",
    "meaning": "줍다"
  },
  {
    "number": 730,
    "word": "ひろさ",
    "kanji": "広さ",
    "meaning": "넓이"
  },
  {
    "number": 731,
    "word": "ふうとう",
    "kanji": "封筒",
    "meaning": "봉투"
  },
  {
    "number": 732,
    "word": "ふえる",
    "kanji": "増える",
    "meaning": "늘다. 늘어나다. 증가하다"
  },
  {
    "number": 733,
    "word": "ふかい",
    "kanji": "深い",
    "meaning": "깊다"
  },
  {
    "number": 734,
    "word": "ふく",
    "kanji": "吹く",
    "meaning": "불다"
  },
  {
    "number": 735,
    "word": "ふくざつ",
    "kanji": "複雑",
    "meaning": "복잡"
  },
  {
    "number": 736,
    "word": "ふくしゅう",
    "kanji": "復習",
    "meaning": "복습"
  },
  {
    "number": 737,
    "word": "ぶたにく",
    "kanji": "豚肉",
    "meaning": "돼지고기"
  },
  {
    "number": 738,
    "word": "ぶちょう",
    "kanji": "部長",
    "meaning": "부장"
  },
  {
    "number": 739,
    "word": "ふつう",
    "kanji": "普通",
    "meaning": "보통"
  },
  {
    "number": 740,
    "word": "ぶつかる",
    "kanji": "",
    "meaning": "부딪다. 부닥치다. 충돌하다. 마주치다"
  },
  {
    "number": 741,
    "word": "ふとい",
    "kanji": "太い",
    "meaning": "굵다"
  },
  {
    "number": 742,
    "word": "ぶどう",
    "kanji": "葡萄",
    "meaning": "포도"
  },
  {
    "number": 743,
    "word": "ふとる",
    "kanji": "太る",
    "meaning": "살찌다"
  },
  {
    "number": 744,
    "word": "ふとん",
    "kanji": "布団",
    "meaning": "이불"
  },
  {
    "number": 745,
    "word": "ふね",
    "kanji": "船·舟",
    "meaning": "배"
  },
  {
    "number": 746,
    "word": "ふべん",
    "kanji": "不便",
    "meaning": "불편"
  },
  {
    "number": 747,
    "word": "ふむ",
    "kanji": "踏む",
    "meaning": "밟다"
  },
  {
    "number": 748,
    "word": "ふろ",
    "kanji": "風呂",
    "meaning": "목욕탕"
  },
  {
    "number": 749,
    "word": "ぶんか",
    "kanji": "文化",
    "meaning": "문화"
  },
  {
    "number": 750,
    "word": "ぶんがく",
    "kanji": "文学",
    "meaning": "문학"
  },
  {
    "number": 751,
    "word": "ぶんしょ",
    "kanji": "文書",
    "meaning": "문서. 서류"
  },
  {
    "number": 752,
    "word": "ぶんしょう",
    "kanji": "文章",
    "meaning": "문장"
  },
  {
    "number": 753,
    "word": "ぶんぽう",
    "kanji": "文法",
    "meaning": "문법"
  },
  {
    "number": 754,
    "word": "へた",
    "kanji": "下手",
    "meaning": "서투름. 어설픔. 잘 못함"
  },
  {
    "number": 755,
    "word": "べつに",
    "kanji": "別に",
    "meaning": "별로"
  },
  {
    "number": 756,
    "word": "ぺらぺら",
    "kanji": "",
    "meaning": "거침없이 잘 지껄이는 모양. 술술"
  },
  {
    "number": 757,
    "word": "へん",
    "kanji": "辺",
    "meaning": "변. 근처. 부근. 정도"
  },
  {
    "number": 758,
    "word": "へん",
    "kanji": "変",
    "meaning": "변. 보통이 아님. 이상함"
  },
  {
    "number": 759,
    "word": "へんじ",
    "kanji": "返事",
    "meaning": "대답. 답장. 응답"
  },
  {
    "number": 760,
    "word": "べんとう",
    "kanji": "弁当",
    "meaning": "도시락"
  },
  {
    "number": 761,
    "word": "ぼうえき",
    "kanji": "貿易",
    "meaning": "무역"
  },
  {
    "number": 762,
    "word": "ぼうし",
    "kanji": "帽子",
    "meaning": "모자"
  },
  {
    "number": 763,
    "word": "ほうそう",
    "kanji": "放送",
    "meaning": "방송"
  },
  {
    "number": 764,
    "word": "ほうりつ",
    "kanji": "法律",
    "meaning": "법률"
  },
  {
    "number": 765,
    "word": "ぼく",
    "kanji": "僕",
    "meaning": "남자의 자칭. 나"
  },
  {
    "number": 766,
    "word": "ほし",
    "kanji": "星",
    "meaning": "별"
  },
  {
    "number": 767,
    "word": "ほしい",
    "kanji": "欲しい",
    "meaning": "가지고 싶다. 탐나다. 바라다"
  },
  {
    "number": 768,
    "word": "ほそい",
    "kanji": "細い",
    "meaning": "가늘다. 폭이 좁다"
  },
  {
    "number": 769,
    "word": "ほとんど",
    "kanji": "",
    "meaning": "대부분. 거의"
  },
  {
    "number": 770,
    "word": "ほね",
    "kanji": "骨",
    "meaning": "뼈"
  },
  {
    "number": 771,
    "word": "ほめる",
    "kanji": "褒める",
    "meaning": "칭찬하다"
  },
  {
    "number": 772,
    "word": "ほんき",
    "kanji": "本気",
    "meaning": "본마음. 진심. 본정신"
  },
  {
    "number": 773,
    "word": "ほんだな",
    "kanji": "本棚",
    "meaning": "서가. 책장"
  },
  {
    "number": 774,
    "word": "ほんとう",
    "kanji": "本当",
    "meaning": "진실. 정말"
  },
  {
    "number": 775,
    "word": "ほんとうに",
    "kanji": "本当に",
    "meaning": "정말로. 참으로"
  },
  {
    "number": 776,
    "word": "ほんや",
    "kanji": "本屋",
    "meaning": "책방. 서점"
  },
  {
    "number": 777,
    "word": "まいつき",
    "kanji": "毎月",
    "meaning": "매월. 달마다"
  },
  {
    "number": 778,
    "word": "まいとし",
    "kanji": "毎年",
    "meaning": "매년. 해마다"
  },
  {
    "number": 779,
    "word": "まいる",
    "kanji": "参る",
    "meaning": "‘가다. 오다’의 겸양어"
  },
  {
    "number": 780,
    "word": "まける",
    "kanji": "負ける",
    "meaning": "지다. 패하다. 값을 깎아주다"
  },
  {
    "number": 781,
    "word": "まご",
    "kanji": "孫",
    "meaning": "손자"
  },
  {
    "number": 782,
    "word": "まじめな",
    "kanji": "真面目な",
    "meaning": "착실함. 성실함"
  },
  {
    "number": 783,
    "word": "まず",
    "kanji": "",
    "meaning": "우선. 첫째로"
  },
  {
    "number": 784,
    "word": "または",
    "kanji": "",
    "meaning": "또는. 혹은. 그게 아니면"
  },
  {
    "number": 785,
    "word": "まちがえる",
    "kanji": "間違える",
    "meaning": "잘못하다. 틀리다. 다른 것으로 착각하다. 잘못 알다"
  },
  {
    "number": 786,
    "word": "まどぐち",
    "kanji": "窓口",
    "meaning": "창구"
  },
  {
    "number": 787,
    "word": "まにあう",
    "kanji": "間に合う",
    "meaning": "시간에 대다. 제시간에 가다"
  },
  {
    "number": 788,
    "word": "まもる",
    "kanji": "守る",
    "meaning": "지키다"
  },
  {
    "number": 789,
    "word": "まるい",
    "kanji": "円い",
    "meaning": "둥글다"
  },
  {
    "number": 790,
    "word": "まわる",
    "kanji": "回る",
    "meaning": "돌다. 회전하다"
  },
  {
    "number": 791,
    "word": "まん",
    "kanji": "万",
    "meaning": "만"
  },
  {
    "number": 792,
    "word": "まんが",
    "kanji": "漫画",
    "meaning": "만화"
  },
  {
    "number": 793,
    "word": "まんなか",
    "kanji": "真ん中",
    "meaning": "한가운데"
  },
  {
    "number": 794,
    "word": "まんねんひつ",
    "kanji": "万年筆",
    "meaning": "만년필"
  },
  {
    "number": 795,
    "word": "みえる",
    "kanji": "見える",
    "meaning": "보이다"
  },
  {
    "number": 796,
    "word": "みつかる",
    "kanji": "見付かる",
    "meaning": "발견되다. 찾게 되다"
  },
  {
    "number": 797,
    "word": "みつける",
    "kanji": "見付ける",
    "meaning": "찾아내다. 발견하다"
  },
  {
    "number": 798,
    "word": "みな",
    "kanji": "皆",
    "meaning": "다. 모두. 전부"
  },
  {
    "number": 799,
    "word": "みなと",
    "kanji": "港",
    "meaning": "항구"
  },
  {
    "number": 800,
    "word": "むかえる",
    "kanji": "迎える",
    "meaning": "맞이하다. 마중하다"
  },
  {
    "number": 801,
    "word": "むかし",
    "kanji": "昔",
    "meaning": "옛날"
  },
  {
    "number": 802,
    "word": "むこう",
    "kanji": "向(こ)う",
    "meaning": "저쪽. 건너편"
  },
  {
    "number": 803,
    "word": "むし",
    "kanji": "虫",
    "meaning": "벌레. 곤충"
  },
  {
    "number": 804,
    "word": "むすこ",
    "kanji": "息子",
    "meaning": "아들"
  },
  {
    "number": 805,
    "word": "むすこさん",
    "kanji": "息子さん",
    "meaning": "아드님"
  },
  {
    "number": 806,
    "word": "むすめ",
    "kanji": "娘",
    "meaning": "딸"
  },
  {
    "number": 807,
    "word": "むすめさん",
    "kanji": "娘さん",
    "meaning": "따님"
  },
  {
    "number": 808,
    "word": "むら",
    "kanji": "村",
    "meaning": "마을. 촌. 시골"
  },
  {
    "number": 809,
    "word": "むり",
    "kanji": "無理",
    "meaning": "무리. 억지"
  },
  {
    "number": 810,
    "word": "めしあがる",
    "kanji": "召し上がる",
    "meaning": "잡수시다. 드시다.‘飲む’‘食べる’의 존경어"
  },
  {
    "number": 811,
    "word": "めずらしい",
    "kanji": "珍しい",
    "meaning": "드물다. 희귀하다. 귀하다"
  },
  {
    "number": 812,
    "word": "もう",
    "kanji": "",
    "meaning": "벌써. 이미. 더"
  },
  {
    "number": 813,
    "word": "もうしあげる",
    "kanji": "申し上げる",
    "meaning": "말씀드리다"
  },
  {
    "number": 814,
    "word": "もうす",
    "kanji": "申す",
    "meaning": "말하다. ‘言う’의 겸양어"
  },
  {
    "number": 815,
    "word": "もうすぐ",
    "kanji": "",
    "meaning": "이제. 곧. 머지않아"
  },
  {
    "number": 816,
    "word": "もうひとつ",
    "kanji": "もう一つ",
    "meaning": "하나 더. 조금 더"
  },
  {
    "number": 817,
    "word": "もし",
    "kanji": "",
    "meaning": "만약. 만일"
  },
  {
    "number": 818,
    "word": "もちかえり",
    "kanji": "持ち帰り",
    "meaning": "가지고 돌아감. 특히 산 물건을 직접 갖고 감"
  },
  {
    "number": 819,
    "word": "もちろん",
    "kanji": "勿論",
    "meaning": "물론"
  },
  {
    "number": 820,
    "word": "もどす",
    "kanji": "戻す",
    "meaning": "되돌리다"
  },
  {
    "number": 821,
    "word": "もどる",
    "kanji": "戻る",
    "meaning": "되돌아가다"
  },
  {
    "number": 822,
    "word": "もの",
    "kanji": "",
    "meaning": "것. 물건"
  },
  {
    "number": 823,
    "word": "もめん",
    "kanji": "木綿",
    "meaning": "무명. 면직물. 솜"
  },
  {
    "number": 824,
    "word": "もらう",
    "kanji": "",
    "meaning": "받다. 얻다"
  },
  {
    "number": 825,
    "word": "もり",
    "kanji": "森",
    "meaning": "수풀. 삼림"
  },
  {
    "number": 826,
    "word": "やかん",
    "kanji": "夜間",
    "meaning": "야간"
  },
  {
    "number": 827,
    "word": "やく",
    "kanji": "焼く",
    "meaning": "굽다. 태우다"
  },
  {
    "number": 828,
    "word": "やくそく",
    "kanji": "約束",
    "meaning": "약속"
  },
  {
    "number": 829,
    "word": "やくにたつ",
    "kanji": "役に立つ",
    "meaning": "도움이 되다. 쓸모가 있다"
  },
  {
    "number": 830,
    "word": "やける",
    "kanji": "焼ける",
    "meaning": "타다. 구워지다"
  },
  {
    "number": 831,
    "word": "やさしい",
    "kanji": "易しい",
    "meaning": "쉽다"
  },
  {
    "number": 832,
    "word": "やさしい",
    "kanji": "優しい",
    "meaning": "상냥하다. 온순하다. 정답다"
  },
  {
    "number": 833,
    "word": "やせる",
    "kanji": "痩せる",
    "meaning": "여위다. 살이 빠지다"
  },
  {
    "number": 834,
    "word": "やっと",
    "kanji": "",
    "meaning": "겨우. 가까스로 やっぱり ＝"
  },
  {
    "number": 835,
    "word": "やはり",
    "kanji": "",
    "meaning": "역시. 예상과 같이"
  },
  {
    "number": 836,
    "word": "やまみち",
    "kanji": "山道",
    "meaning": "산길"
  },
  {
    "number": 837,
    "word": "やむ",
    "kanji": "止む",
    "meaning": "멈추다. 그치다. 멎다"
  },
  {
    "number": 838,
    "word": "やめる",
    "kanji": "止める",
    "meaning": "그만두다. 중지하다. 끊다"
  },
  {
    "number": 839,
    "word": "やる",
    "kanji": "",
    "meaning": "①(아랫사람에게) 주다. ② 하다 (する의 회화체)"
  },
  {
    "number": 840,
    "word": "やわらかい",
    "kanji": "柔らかい",
    "meaning": "부드럽다"
  },
  {
    "number": 841,
    "word": "ゆうしょく",
    "kanji": "夕食",
    "meaning": "저녁밥. 저녁 식사"
  },
  {
    "number": 842,
    "word": "ゆうびんきょく",
    "kanji": "郵便局",
    "meaning": "우체국"
  },
  {
    "number": 843,
    "word": "ゆうべ",
    "kanji": "夕べ",
    "meaning": "저녁때. 저녁때부터 시작하는 모임. 특정한 모임을 갖는 밤"
  },
  {
    "number": 844,
    "word": "ゆうべ",
    "kanji": "昨夜",
    "meaning": "어제 저녁. 어젯밤"
  },
  {
    "number": 845,
    "word": "ゆうめい",
    "kanji": "有名",
    "meaning": "유명"
  },
  {
    "number": 846,
    "word": "ゆく",
    "kanji": "行く",
    "meaning": "가다. 떠나다 ＝いく"
  },
  {
    "number": 847,
    "word": "ゆしゅつ",
    "kanji": "輸出",
    "meaning": "수출"
  },
  {
    "number": 848,
    "word": "ゆにゅう",
    "kanji": "輸入",
    "meaning": "수입"
  },
  {
    "number": 849,
    "word": "ゆび",
    "kanji": "指",
    "meaning": "손가락"
  },
  {
    "number": 850,
    "word": "ゆびわ",
    "kanji": "指輪",
    "meaning": "반지. 가락지"
  },
  {
    "number": 851,
    "word": "ゆめ",
    "kanji": "夢",
    "meaning": "꿈"
  },
  {
    "number": 852,
    "word": "ゆれる",
    "kanji": "揺れる",
    "meaning": "흔들리다"
  },
  {
    "number": 853,
    "word": "よい",
    "kanji": "酔い",
    "meaning": "취함. 취기"
  },
  {
    "number": 854,
    "word": "ようい",
    "kanji": "用意",
    "meaning": "용의. 준비. 대비"
  },
  {
    "number": 855,
    "word": "ようじ",
    "kanji": "用事",
    "meaning": "볼일. 용건"
  },
  {
    "number": 856,
    "word": "よく",
    "kanji": "",
    "meaning": "잘. 자주. 좋게"
  },
  {
    "number": 857,
    "word": "よごれる",
    "kanji": "汚れる",
    "meaning": "더러워지다. 지저분해지다"
  },
  {
    "number": 858,
    "word": "よしゅう",
    "kanji": "予習",
    "meaning": "예습"
  },
  {
    "number": 859,
    "word": "よてい",
    "kanji": "予定",
    "meaning": "예정"
  },
  {
    "number": 860,
    "word": "よみかた",
    "kanji": "読み方",
    "meaning": "읽는 법"
  },
  {
    "number": 861,
    "word": "よみもの",
    "kanji": "読(み)物",
    "meaning": "읽게 만들어진 것. 읽을거리"
  },
  {
    "number": 862,
    "word": "よやく",
    "kanji": "予約",
    "meaning": "예약"
  },
  {
    "number": 863,
    "word": "よる",
    "kanji": "寄る",
    "meaning": "들르다. 접근하다. 다가가다"
  },
  {
    "number": 864,
    "word": "よろこぶ",
    "kanji": "喜ぶ",
    "meaning": "기뻐하다. 즐거워하다"
  },
  {
    "number": 865,
    "word": "よろしい",
    "kanji": "",
    "meaning": "いい의 공손한 말씨. 좋다. 적절하다. 알맞다. 해도 되다"
  },
  {
    "number": 866,
    "word": "りっぱな",
    "kanji": "立派な",
    "meaning": "훌륭한"
  },
  {
    "number": 867,
    "word": "りゆう",
    "kanji": "理由",
    "meaning": "이유"
  },
  {
    "number": 868,
    "word": "りよう",
    "kanji": "利用",
    "meaning": "이용"
  },
  {
    "number": 869,
    "word": "りょうしん",
    "kanji": "両親",
    "meaning": "양친. 부모"
  },
  {
    "number": 870,
    "word": "りょうほう",
    "kanji": "両方",
    "meaning": "양방. 쌍방. 양쪽"
  },
  {
    "number": 871,
    "word": "りょかん",
    "kanji": "旅館",
    "meaning": "여관"
  },
  {
    "number": 872,
    "word": "りょこう",
    "kanji": "旅行",
    "meaning": "여행"
  },
  {
    "number": 873,
    "word": "りんご",
    "kanji": "",
    "meaning": "사과"
  },
  {
    "number": 874,
    "word": "るす",
    "kanji": "留守",
    "meaning": "외출하고 집에 없음. 부재중"
  },
  {
    "number": 875,
    "word": "れい",
    "kanji": "零",
    "meaning": "영. 제로 ＝ゼロ"
  },
  {
    "number": 876,
    "word": "れいぞうこ",
    "kanji": "冷蔵庫",
    "meaning": "냉장고"
  },
  {
    "number": 877,
    "word": "れいぼう",
    "kanji": "冷房",
    "meaning": "냉방"
  },
  {
    "number": 878,
    "word": "れきし",
    "kanji": "歴史",
    "meaning": "역사"
  },
  {
    "number": 879,
    "word": "れっしゃ",
    "kanji": "列車",
    "meaning": "열차"
  },
  {
    "number": 880,
    "word": "れんしゅう",
    "kanji": "練習",
    "meaning": "연습"
  },
  {
    "number": 881,
    "word": "れんらく",
    "kanji": "連絡",
    "meaning": "연락"
  },
  {
    "number": 882,
    "word": "ろうか",
    "kanji": "廊下",
    "meaning": "복도"
  },
  {
    "number": 883,
    "word": "ろうじん",
    "kanji": "老人",
    "meaning": "노인"
  },
  {
    "number": 884,
    "word": "わかい",
    "kanji": "若い",
    "meaning": "젊다"
  },
  {
    "number": 885,
    "word": "わかす",
    "kanji": "沸かす",
    "meaning": "데우다. 끓이다"
  },
  {
    "number": 886,
    "word": "わかれる",
    "kanji": "別れる",
    "meaning": "헤어지다. 이별하다. 작별하다"
  },
  {
    "number": 887,
    "word": "わく",
    "kanji": "沸く",
    "meaning": "끓다"
  },
  {
    "number": 888,
    "word": "わけ",
    "kanji": "訳",
    "meaning": "의미. 뜻. 도리. 사리. 원인. 사정"
  },
  {
    "number": 889,
    "word": "わざわざ",
    "kanji": "",
    "meaning": "일부러. 고의로. →わざと"
  },
  {
    "number": 890,
    "word": "わすれもの",
    "kanji": "忘れ物",
    "meaning": "물건을 깜박 잊고 옴. 또는 그 잊은 물건"
  },
  {
    "number": 891,
    "word": "わすれる",
    "kanji": "忘れる",
    "meaning": "잊다. 잊어버리다"
  },
  {
    "number": 892,
    "word": "わたくし",
    "kanji": "私",
    "meaning": "わたし보다 더 공손한 말씨"
  },
  {
    "number": 893,
    "word": "わたす",
    "kanji": "渡す",
    "meaning": "건네주다. 건너가게 하다"
  },
  {
    "number": 894,
    "word": "わたる",
    "kanji": "渡る",
    "meaning": "건너다. 건너가다"
  },
  {
    "number": 895,
    "word": "わらう",
    "kanji": "笑う",
    "meaning": "웃다"
  },
  {
    "number": 896,
    "word": "わる",
    "kanji": "割る",
    "meaning": "나누다"
  },
  {
    "number": 897,
    "word": "われる",
    "kanji": "割れる",
    "meaning": "갈라지다. 갈리다. 분열되다"
  },
  {
    "number": 898,
    "word": "あつかましい",
    "kanji": "厚かましい",
    "meaning": "뻔뻔하다, 염치없다"
  },
  {
    "number": 899,
    "word": "あらい",
    "kanji": "荒い",
    "meaning": "거칠다, 난폭하다"
  },
  {
    "number": 900,
    "word": "うらやましい",
    "kanji": "羨ましい",
    "meaning": "부럽다"
  },
  {
    "number": 901,
    "word": "えらい",
    "kanji": "偉い",
    "meaning": "훌륭하다, 대단하다"
  },
  {
    "number": 902,
    "word": "おさない",
    "kanji": "幼い",
    "meaning": "어리다, 유치하다"
  },
  {
    "number": 903,
    "word": "おそろしい",
    "kanji": "恐ろしい",
    "meaning": "무섭다, 두렵다"
  },
  {
    "number": 904,
    "word": "おだやか",
    "kanji": "穏やか",
    "meaning": "온화하다, 평온하다"
  },
  {
    "number": 905,
    "word": "かって",
    "kanji": "勝手",
    "meaning": "제멋대로임, 형편"
  },
  {
    "number": 906,
    "word": "きちょう",
    "kanji": "貴重",
    "meaning": "귀중하다"
  },
  {
    "number": 907,
    "word": "きょだい",
    "kanji": "巨大",
    "meaning": "거대하다"
  },
  {
    "number": 908,
    "word": "きゅう",
    "kanji": "急",
    "meaning": "급하다, 갑작스럽다"
  },
  {
    "number": 909,
    "word": "きよらか",
    "kanji": "清らか",
    "meaning": "맑고 깨끗하다"
  },
  {
    "number": 910,
    "word": "くわしい",
    "kanji": "詳しい",
    "meaning": "자세하다, 상세하다"
  },
  {
    "number": 911,
    "word": "みごと",
    "kanji": "見事",
    "meaning": "훌륭함, 멋짐"
  },
  {
    "number": 912,
    "word": "こうへい",
    "kanji": "公平",
    "meaning": "공평하다, 공정하다"
  },
  {
    "number": 913,
    "word": "せいかく",
    "kanji": "正確",
    "meaning": "정확하다"
  },
  {
    "number": 914,
    "word": "こまか",
    "kanji": "細か",
    "meaning": "섬세함, 자잘함"
  },
  {
    "number": 915,
    "word": "こんなん",
    "kanji": "困難",
    "meaning": "곤란하다, 어렵다"
  },
  {
    "number": 916,
    "word": "さかん",
    "kanji": "盛ん",
    "meaning": "왕성하다, 번성하다"
  },
  {
    "number": 917,
    "word": "さまざま",
    "kanji": "様々",
    "meaning": "가지각색, 다양함"
  },
  {
    "number": 918,
    "word": "しんせん",
    "kanji": "新鮮",
    "meaning": "신선하다"
  },
  {
    "number": 919,
    "word": "すなお",
    "kanji": "素直",
    "meaning": "고분고분함, 솔직함"
  },
  {
    "number": 920,
    "word": "するどい",
    "kanji": "鋭い",
    "meaning": "날카롭다, 예리하다"
  },
  {
    "number": 921,
    "word": "たいくつ",
    "kanji": "退屈",
    "meaning": "지루하다, 따분하다"
  },
  {
    "number": 922,
    "word": "かくじつ",
    "kanji": "確実",
    "meaning": "확실하다, 틀림없다"
  },
  {
    "number": 923,
    "word": "たのもしい",
    "kanji": "頼もしい",
    "meaning": "믿음직하다"
  },
  {
    "number": 924,
    "word": "だいたん",
    "kanji": "大胆",
    "meaning": "대담하다"
  },
  {
    "number": 925,
    "word": "じみ",
    "kanji": "地味",
    "meaning": "수수하다, 소박하다"
  },
  {
    "number": 926,
    "word": "とうぜん",
    "kanji": "当然",
    "meaning": "당연하다, 마땅하다"
  },
  {
    "number": 927,
    "word": "とくゆう",
    "kanji": "特有",
    "meaning": "특유하다, 고유하다"
  },
  {
    "number": 928,
    "word": "のどか",
    "kanji": "のどか",
    "meaning": "한가롭다, 평화롭다"
  },
  {
    "number": 929,
    "word": "ねっしん",
    "kanji": "熱心",
    "meaning": "열심이다, 열중하다"
  },
  {
    "number": 930,
    "word": "はで",
    "kanji": "派手",
    "meaning": "화려하다, 야하다"
  },
  {
    "number": 931,
    "word": "ひみつ",
    "kanji": "秘密",
    "meaning": "비밀이다"
  },
  {
    "number": 932,
    "word": "ふけつ",
    "kanji": "不潔",
    "meaning": "불결하다, 더럽다"
  },
  {
    "number": 933,
    "word": "ふり",
    "kanji": "不利",
    "meaning": "불리하다"
  },
  {
    "number": 934,
    "word": "へいぼん",
    "kanji": "平凡",
    "meaning": "평범하다"
  },
  {
    "number": 935,
    "word": "まっか",
    "kanji": "真っ赤",
    "meaning": "새빨갛다"
  },
  {
    "number": 936,
    "word": "まんぞく",
    "kanji": "満足",
    "meaning": "만족하다"
  },
  {
    "number": 937,
    "word": "ゆうり",
    "kanji": "有利",
    "meaning": "유리하다"
  },
  {
    "number": 938,
    "word": "ゆたか",
    "kanji": "豊か",
    "meaning": "풍요롭다, 풍부하다"
  },
  {
    "number": 939,
    "word": "らく",
    "kanji": "楽",
    "meaning": "편안함, 수월함"
  },
  {
    "number": 940,
    "word": "てきとう",
    "kanji": "適当",
    "meaning": "적당하다, 적절하다"
  },
  {
    "number": 941,
    "word": "れいたん",
    "kanji": "冷淡",
    "meaning": "냉담하다"
  },
  {
    "number": 942,
    "word": "あいまい",
    "kanji": "曖昧",
    "meaning": "애매하다, 모호하다"
  },
  {
    "number": 943,
    "word": "いがい",
    "kanji": "意外",
    "meaning": "의외이다"
  },
  {
    "number": 944,
    "word": "いだい",
    "kanji": "偉大",
    "meaning": "위대하다"
  },
  {
    "number": 945,
    "word": "いっぱん",
    "kanji": "一般",
    "meaning": "일반적이다"
  },
  {
    "number": 946,
    "word": "はなやか",
    "kanji": "華やか",
    "meaning": "화려하다, 찬란하다"
  },
  {
    "number": 947,
    "word": "かがくてき",
    "kanji": "科学的",
    "meaning": "과학적이다"
  },
  {
    "number": 948,
    "word": "かっぱつ",
    "kanji": "活発",
    "meaning": "활발하다"
  },
  {
    "number": 949,
    "word": "かんぺき",
    "kanji": "完璧",
    "meaning": "완벽하다"
  },
  {
    "number": 950,
    "word": "きらく",
    "kanji": "気楽",
    "meaning": "마음 편하다"
  },
  {
    "number": 951,
    "word": "げんじゅう",
    "kanji": "厳重",
    "meaning": "엄중하다, 철저하다"
  },
  {
    "number": 952,
    "word": "こうふく",
    "kanji": "幸福",
    "meaning": "행복하다"
  },
  {
    "number": 953,
    "word": "さいこう",
    "kanji": "最高",
    "meaning": "최고이다"
  },
  {
    "number": 954,
    "word": "さいあく",
    "kanji": "最悪",
    "meaning": "최악이다"
  },
  {
    "number": 955,
    "word": "しょうじき",
    "kanji": "正直",
    "meaning": "정직하다, 솔직하다"
  },
  {
    "number": 956,
    "word": "じょうぶ",
    "kanji": "丈夫",
    "meaning": "튼튼하다"
  },
  {
    "number": 957,
    "word": "しんこく",
    "kanji": "深刻",
    "meaning": "심각하다"
  },
  {
    "number": 958,
    "word": "そぼく",
    "kanji": "素朴",
    "meaning": "소박하다, 순진하다"
  },
  {
    "number": 959,
    "word": "おおげさ",
    "kanji": "大げさ",
    "meaning": "과장됨"
  },
  {
    "number": 960,
    "word": "とくしゅ",
    "kanji": "特殊",
    "meaning": "특수하다"
  },
  {
    "number": 961,
    "word": "とつぜん",
    "kanji": "突然",
    "meaning": "돌연하다, 갑작스럽다"
  },
  {
    "number": 962,
    "word": "ふかけつ",
    "kanji": "不可欠",
    "meaning": "불가결하다"
  },
  {
    "number": 963,
    "word": "ふまん",
    "kanji": "不満",
    "meaning": "불만이다"
  },
  {
    "number": 964,
    "word": "むだ",
    "kanji": "無駄",
    "meaning": "헛됨, 쓸데없음"
  },
  {
    "number": 965,
    "word": "むちゅう",
    "kanji": "夢中",
    "meaning": "열중함, 몰두함"
  },
  {
    "number": 966,
    "word": "ゆうこう",
    "kanji": "有効",
    "meaning": "유효하다"
  },
  {
    "number": 967,
    "word": "たんじゅん",
    "kanji": "単純",
    "meaning": "단순하다"
  },
  {
    "number": 968,
    "word": "そっちょく",
    "kanji": "率直",
    "meaning": "솔직하다"
  },
  {
    "number": 969,
    "word": "じゅうなん",
    "kanji": "柔軟",
    "meaning": "유연하다"
  },
  {
    "number": 970,
    "word": "てきせつ",
    "kanji": "適切",
    "meaning": "적절하다"
  },
  {
    "number": 971,
    "word": "ひっす",
    "kanji": "必須",
    "meaning": "필수적이다"
  },
  {
    "number": 972,
    "word": "びんぼう",
    "kanji": "貧乏",
    "meaning": "가난하다"
  },
  {
    "number": 973,
    "word": "ふよう",
    "kanji": "不要",
    "meaning": "불필요하다"
  },
  {
    "number": 974,
    "word": "へいきんてき",
    "kanji": "平均的",
    "meaning": "평균적이다"
  },
  {
    "number": 975,
    "word": "りそうてき",
    "kanji": "理想的",
    "meaning": "이상적이다"
  },
  {
    "number": 976,
    "word": "れいせい",
    "kanji": "冷静",
    "meaning": "냉정하다"
  },
  {
    "number": 977,
    "word": "あきらめる",
    "kanji": "諦める",
    "meaning": "포기하다"
  },
  {
    "number": 978,
    "word": "あきる",
    "kanji": "飽きる",
    "meaning": "질리다, 싫증나다"
  },
  {
    "number": 979,
    "word": "あずかる",
    "kanji": "預かる",
    "meaning": "맡다, 보관하다"
  },
  {
    "number": 980,
    "word": "あずける",
    "kanji": "預ける",
    "meaning": "맡기다"
  },
  {
    "number": 981,
    "word": "あらわす",
    "kanji": "表す",
    "meaning": "나타내다, 표현하다"
  },
  {
    "number": 982,
    "word": "あらわれる",
    "kanji": "現れる",
    "meaning": "나타나다, 드러나다"
  },
  {
    "number": 983,
    "word": "いかす",
    "kanji": "生かす",
    "meaning": "살리다, 활용하다"
  },
  {
    "number": 984,
    "word": "うつす",
    "kanji": "移す",
    "meaning": "옮기다, 이동시키다"
  },
  {
    "number": 985,
    "word": "える",
    "kanji": "得る",
    "meaning": "얻다, 획득하다"
  },
  {
    "number": 986,
    "word": "おいつく",
    "kanji": "追いつく",
    "meaning": "따라잡다"
  },
  {
    "number": 987,
    "word": "おいこす",
    "kanji": "追い越す",
    "meaning": "추월하다"
  },
  {
    "number": 988,
    "word": "おさめる",
    "kanji": "収める",
    "meaning": "거두다, 납부하다"
  },
  {
    "number": 989,
    "word": "おさめる",
    "kanji": "治める",
    "meaning": "다스리다, 통치하다"
  },
  {
    "number": 990,
    "word": "おそわる",
    "kanji": "教わる",
    "meaning": "배우다, 가르침을 받다"
  },
  {
    "number": 991,
    "word": "おとる",
    "kanji": "劣る",
    "meaning": "뒤떨어지다, 못하다"
  },
  {
    "number": 992,
    "word": "おどかす",
    "kanji": "脅かす",
    "meaning": "위협하다, 겁주다"
  },
  {
    "number": 993,
    "word": "かける",
    "kanji": "掛ける",
    "meaning": "(안경 등을) 걸다, (시간 등을) 들이다"
  },
  {
    "number": 994,
    "word": "かぎる",
    "kanji": "限る",
    "meaning": "한정하다, ~에 한하다"
  },
  {
    "number": 995,
    "word": "かたむく",
    "kanji": "傾く",
    "meaning": "기울다, 경사지다"
  },
  {
    "number": 996,
    "word": "かたむける",
    "kanji": "傾ける",
    "meaning": "기울이다"
  },
  {
    "number": 997,
    "word": "かたまる",
    "kanji": "固まる",
    "meaning": "굳어지다, 한데 모이다"
  },
  {
    "number": 998,
    "word": "かためる",
    "kanji": "固める",
    "meaning": "굳히다, 단단하게 하다"
  },
  {
    "number": 999,
    "word": "かねる",
    "kanji": "兼ねる",
    "meaning": "겸하다, ~하기 어렵다"
  },
  {
    "number": 1000,
    "word": "かぶる",
    "kanji": "被る",
    "meaning": "(모자 등을) 쓰다, 뒤집어쓰다"
  },
  {
    "number": 1001,
    "word": "かかわる",
    "kanji": "関わる",
    "meaning": "관계하다, 관련되다"
  },
  {
    "number": 1002,
    "word": "きく",
    "kanji": "効く",
    "meaning": "효과가 있다, 듣다"
  },
  {
    "number": 1003,
    "word": "きざむ",
    "kanji": "刻む",
    "meaning": "새기다, 잘게 썰다"
  },
  {
    "number": 1004,
    "word": "きれる",
    "kanji": "切れる",
    "meaning": "잘리다, 끊어지다"
  },
  {
    "number": 1005,
    "word": "くわえる",
    "kanji": "加える",
    "meaning": "더하다, 가하다"
  },
  {
    "number": 1006,
    "word": "くわわる",
    "kanji": "加わる",
    "meaning": "더해지다, 참가하다"
  },
  {
    "number": 1007,
    "word": "こえる",
    "kanji": "越える",
    "meaning": "넘다, 초과하다"
  },
  {
    "number": 1008,
    "word": "こえる",
    "kanji": "超える",
    "meaning": "(수준 등을) 넘다, 초월하다"
  },
  {
    "number": 1009,
    "word": "こころみる",
    "kanji": "試みる",
    "meaning": "시도하다, 시험해 보다"
  },
  {
    "number": 1010,
    "word": "こげる",
    "kanji": "焦げる",
    "meaning": "타다, 눌어붙다"
  },
  {
    "number": 1011,
    "word": "こたえる",
    "kanji": "答える",
    "meaning": "답하다, (기대에) 부응하다"
  },
  {
    "number": 1012,
    "word": "こる",
    "kanji": "凝る",
    "meaning": "응고하다, (취미에) 열중하다"
  },
  {
    "number": 1013,
    "word": "さからう",
    "kanji": "逆らう",
    "meaning": "거스르다, 거역하다"
  },
  {
    "number": 1014,
    "word": "さます",
    "kanji": "覚ます",
    "meaning": "깨우다"
  },
  {
    "number": 1015,
    "word": "さめる",
    "kanji": "覚める",
    "meaning": "깨다, 잠이 깨다"
  },
  {
    "number": 1016,
    "word": "しんじる",
    "kanji": "信じる",
    "meaning": "믿다"
  },
  {
    "number": 1017,
    "word": "すすめる",
    "kanji": "進める",
    "meaning": "나아가게 하다, 추진하다"
  },
  {
    "number": 1018,
    "word": "すぐれる",
    "kanji": "優れる",
    "meaning": "뛰어나다, 우수하다"
  },
  {
    "number": 1019,
    "word": "そだつ",
    "kanji": "育つ",
    "meaning": "자라다, 성장하다"
  },
  {
    "number": 1020,
    "word": "ぞくする",
    "kanji": "属する",
    "meaning": "속하다"
  },
  {
    "number": 1021,
    "word": "そなえる",
    "kanji": "備える",
    "meaning": "갖추다, 대비하다"
  },
  {
    "number": 1022,
    "word": "そそぐ",
    "kanji": "注ぐ",
    "meaning": "쏟다, 따르다"
  },
  {
    "number": 1023,
    "word": "たえる",
    "kanji": "耐える",
    "meaning": "견디다, 참다"
  },
  {
    "number": 1024,
    "word": "たしかめる",
    "kanji": "確かめる",
    "meaning": "확인하다, 분명히 하다"
  },
  {
    "number": 1025,
    "word": "たすかる",
    "kanji": "助かる",
    "meaning": "구원받다, 살다"
  },
  {
    "number": 1026,
    "word": "たすける",
    "kanji": "助ける",
    "meaning": "돕다, 구하다"
  },
  {
    "number": 1027,
    "word": "たつ",
    "kanji": "立つ",
    "meaning": "서다, (냄새가) 나다"
  },
  {
    "number": 1028,
    "word": "ためす",
    "kanji": "試す",
    "meaning": "시험하다, 테스트하다"
  },
  {
    "number": 1029,
    "word": "たっする",
    "kanji": "達する",
    "meaning": "달성하다, 도달하다"
  },
  {
    "number": 1030,
    "word": "たよる",
    "kanji": "頼る",
    "meaning": "의지하다, 기대다"
  },
  {
    "number": 1031,
    "word": "つきる",
    "kanji": "尽きる",
    "meaning": "다하다, 끝나다"
  },
  {
    "number": 1032,
    "word": "ついやす",
    "kanji": "費やす",
    "meaning": "소비하다, 낭비하다"
  },
  {
    "number": 1033,
    "word": "つとめる",
    "kanji": "努める",
    "meaning": "노력하다, 힘쓰다"
  },
  {
    "number": 1034,
    "word": "とう",
    "kanji": "問う",
    "meaning": "묻다, 질문하다"
  },
  {
    "number": 1035,
    "word": "とらえる",
    "kanji": "捉える",
    "meaning": "붙잡다, 포착하다"
  },
  {
    "number": 1036,
    "word": "とらえる",
    "kanji": "捕らえる",
    "meaning": "붙잡다, 체포하다"
  },
  {
    "number": 1037,
    "word": "のぞく",
    "kanji": "除く",
    "meaning": "제외하다, 없애다"
  },
  {
    "number": 1038,
    "word": "のばす",
    "kanji": "延ばす",
    "meaning": "늘리다, 연기하다"
  },
  {
    "number": 1039,
    "word": "のびる",
    "kanji": "延びる",
    "meaning": "늘어나다, 연기되다"
  },
  {
    "number": 1040,
    "word": "はかる",
    "kanji": "測る",
    "meaning": "재다, 측정하다"
  },
  {
    "number": 1041,
    "word": "はかる",
    "kanji": "図る",
    "meaning": "도모하다, 계획하다"
  },
  {
    "number": 1042,
    "word": "はずす",
    "kanji": "外す",
    "meaning": "떼어내다, 벗기다"
  },
  {
    "number": 1043,
    "word": "はずれる",
    "kanji": "外れる",
    "meaning": "빠지다, 벗어나다"
  },
  {
    "number": 1044,
    "word": "はたせる",
    "kanji": "果たせる",
    "meaning": "완수하다, 이루다"
  },
  {
    "number": 1045,
    "word": "ひろがる",
    "kanji": "広がる",
    "meaning": "넓어지다, 퍼지다"
  },
  {
    "number": 1046,
    "word": "ひろげる",
    "kanji": "広げる",
    "meaning": "넓히다, 펼치다"
  },
  {
    "number": 1047,
    "word": "ふかまる",
    "kanji": "深まる",
    "meaning": "깊어지다"
  },
  {
    "number": 1048,
    "word": "ふかめる",
    "kanji": "深める",
    "meaning": "깊게 하다"
  },
  {
    "number": 1049,
    "word": "ふくむ",
    "kanji": "含む",
    "meaning": "포함하다, 함유하다"
  },
  {
    "number": 1050,
    "word": "ふせぐ",
    "kanji": "防ぐ",
    "meaning": "막다, 방지하다"
  },
  {
    "number": 1051,
    "word": "むかう",
    "kanji": "向かう",
    "meaning": "향하다, 마주하다"
  },
  {
    "number": 1052,
    "word": "むける",
    "kanji": "向ける",
    "meaning": "향하게 하다"
  },
  {
    "number": 1053,
    "word": "めいじる",
    "kanji": "命じる",
    "meaning": "명하다, 명령하다"
  },
  {
    "number": 1054,
    "word": "もうける",
    "kanji": "設ける",
    "meaning": "설치하다, 마련하다"
  },
  {
    "number": 1055,
    "word": "もうける",
    "kanji": "儲ける",
    "meaning": "(돈을) 벌다, 이익을 얻다"
  },
  {
    "number": 1056,
    "word": "もえる",
    "kanji": "燃える",
    "meaning": "타다, 불타다"
  },
  {
    "number": 1057,
    "word": "もやす",
    "kanji": "燃やす",
    "meaning": "태우다"
  },
  {
    "number": 1058,
    "word": "よせる",
    "kanji": "寄せる",
    "meaning": "가까이 대다, (마음을) 보내다"
  },
  {
    "number": 1059,
    "word": "わかれる",
    "kanji": "分かれる",
    "meaning": "나뉘다, 헤어지다"
  },
  {
    "number": 1060,
    "word": "わける",
    "kanji": "分ける",
    "meaning": "나누다, 분리하다"
  },
  {
    "number": 1061,
    "word": "えいきょう",
    "kanji": "影響",
    "meaning": "영향"
  },
  {
    "number": 1062,
    "word": "おか",
    "kanji": "丘",
    "meaning": "언덕"
  },
  {
    "number": 1063,
    "word": "おく",
    "kanji": "奥",
    "meaning": "안쪽, 깊숙한 곳"
  },
  {
    "number": 1064,
    "word": "はいけい",
    "kanji": "拝啓",
    "meaning": "(편지 첫머리) 삼가 아뢰옵니다"
  },
  {
    "number": 1065,
    "word": "かもつ",
    "kanji": "貨物",
    "meaning": "화물"
  },
  {
    "number": 1066,
    "word": "ぎかい",
    "kanji": "議会",
    "meaning": "의회"
  },
  {
    "number": 1067,
    "word": "きぎょう",
    "kanji": "企業",
    "meaning": "기업"
  },
  {
    "number": 1068,
    "word": "ぎろん",
    "kanji": "議論",
    "meaning": "의론, 토론"
  },
  {
    "number": 1069,
    "word": "こっきょう",
    "kanji": "国境",
    "meaning": "국경"
  },
  {
    "number": 1070,
    "word": "こくど",
    "kanji": "国土",
    "meaning": "국토"
  },
  {
    "number": 1071,
    "word": "こんご",
    "kanji": "今後",
    "meaning": "금후, 앞으로"
  },
  {
    "number": 1072,
    "word": "さいてい",
    "kanji": "最低",
    "meaning": "최저"
  },
  {
    "number": 1073,
    "word": "さぎょう",
    "kanji": "作業",
    "meaning": "작업"
  },
  {
    "number": 1074,
    "word": "しじ",
    "kanji": "支持",
    "meaning": "지지"
  },
  {
    "number": 1075,
    "word": "ししゅつ",
    "kanji": "支出",
    "meaning": "지출"
  },
  {
    "number": 1076,
    "word": "してん",
    "kanji": "支店",
    "meaning": "지점"
  },
  {
    "number": 1077,
    "word": "しつぎょう",
    "kanji": "失業",
    "meaning": "실업"
  },
  {
    "number": 1078,
    "word": "しゅうにゅう",
    "kanji": "収入",
    "meaning": "수입"
  },
  {
    "number": 1079,
    "word": "しゅうきょう",
    "kanji": "宗教",
    "meaning": "종교"
  },
  {
    "number": 1080,
    "word": "しゅるい",
    "kanji": "種類",
    "meaning": "종류"
  },
  {
    "number": 1081,
    "word": "しょうがい",
    "kanji": "生涯",
    "meaning": "생애"
  },
  {
    "number": 1082,
    "word": "しょうひ",
    "kanji": "消費",
    "meaning": "소비"
  },
  {
    "number": 1083,
    "word": "しんよう",
    "kanji": "信用",
    "meaning": "신용"
  },
  {
    "number": 1084,
    "word": "せいちょう",
    "kanji": "成長",
    "meaning": "성장"
  },
  {
    "number": 1085,
    "word": "せいげん",
    "kanji": "制限",
    "meaning": "제한"
  },
  {
    "number": 1086,
    "word": "せいひん",
    "kanji": "製品",
    "meaning": "제품"
  },
  {
    "number": 1087,
    "word": "せつび",
    "kanji": "設備",
    "meaning": "설비"
  },
  {
    "number": 1088,
    "word": "せきにん",
    "kanji": "責任",
    "meaning": "책임"
  },
  {
    "number": 1089,
    "word": "そしき",
    "kanji": "組織",
    "meaning": "조직"
  },
  {
    "number": 1090,
    "word": "だいとうりょう",
    "kanji": "大統領",
    "meaning": "대통령"
  },
  {
    "number": 1091,
    "word": "たちば",
    "kanji": "立場",
    "meaning": "입장"
  },
  {
    "number": 1092,
    "word": "たんご",
    "kanji": "単語",
    "meaning": "단어"
  },
  {
    "number": 1093,
    "word": "ちい",
    "kanji": "地位",
    "meaning": "지위"
  },
  {
    "number": 1094,
    "word": "ちえ",
    "kanji": "知恵",
    "meaning": "지혜"
  },
  {
    "number": 1095,
    "word": "ちほう",
    "kanji": "地方",
    "meaning": "지방"
  },
  {
    "number": 1096,
    "word": "ちょしゃ",
    "kanji": "著者",
    "meaning": "저자"
  },
  {
    "number": 1097,
    "word": "ていしゅつ",
    "kanji": "提出",
    "meaning": "제출"
  },
  {
    "number": 1098,
    "word": "ていあん",
    "kanji": "提案",
    "meaning": "제안"
  },
  {
    "number": 1099,
    "word": "てきよう",
    "kanji": "適用",
    "meaning": "적용"
  },
  {
    "number": 1100,
    "word": "でんとう",
    "kanji": "伝統",
    "meaning": "전통"
  },
  {
    "number": 1101,
    "word": "どりょく",
    "kanji": "努力",
    "meaning": "노력"
  },
  {
    "number": 1102,
    "word": "ねっちゅう",
    "kanji": "熱中",
    "meaning": "열중"
  },
  {
    "number": 1103,
    "word": "のうりょく",
    "kanji": "能力",
    "meaning": "능력"
  },
  {
    "number": 1104,
    "word": "はくぶつかん",
    "kanji": "博物館",
    "meaning": "박물관"
  },
  {
    "number": 1105,
    "word": "はってん",
    "kanji": "発展",
    "meaning": "발전"
  },
  {
    "number": 1106,
    "word": "はんざい",
    "kanji": "犯罪",
    "meaning": "범죄"
  },
  {
    "number": 1107,
    "word": "ひょうげん",
    "kanji": "表現",
    "meaning": "표현"
  },
  {
    "number": 1108,
    "word": "ひょうか",
    "kanji": "評価",
    "meaning": "평가"
  },
  {
    "number": 1109,
    "word": "ふそく",
    "kanji": "不足",
    "meaning": "부족"
  },
  {
    "number": 1110,
    "word": "へいきん",
    "kanji": "平均",
    "meaning": "평균"
  },
  {
    "number": 1111,
    "word": "ほうこく",
    "kanji": "報告",
    "meaning": "보고"
  },
  {
    "number": 1112,
    "word": "ほうほう",
    "kanji": "方法",
    "meaning": "방법"
  },
  {
    "number": 1113,
    "word": "ぼしゅう",
    "kanji": "募集",
    "meaning": "모집"
  },
  {
    "number": 1114,
    "word": "もんだい",
    "kanji": "問題",
    "meaning": "문제"
  },
  {
    "number": 1115,
    "word": "ゆうしょう",
    "kanji": "優勝",
    "meaning": "우승"
  },
  {
    "number": 1116,
    "word": "ゆうしゅう",
    "kanji": "優秀",
    "meaning": "우수"
  },
  {
    "number": 1117,
    "word": "ゆうびん",
    "kanji": "郵便",
    "meaning": "우편"
  },
  {
    "number": 1118,
    "word": "ようてん",
    "kanji": "要点",
    "meaning": "요점"
  },
  {
    "number": 1119,
    "word": "りゅうがく",
    "kanji": "留学",
    "meaning": "유학"
  },
  {
    "number": 1120,
    "word": "れい",
    "kanji": "例",
    "meaning": "예, 사례"
  },
  {
    "number": 1121,
    "word": "わるぐち",
    "kanji": "悪口",
    "meaning": "험담, 욕"
  },
  {
    "number": 1122,
    "word": "いしき",
    "kanji": "意識",
    "meaning": "의식"
  },
  {
    "number": 1123,
    "word": "いはん",
    "kanji": "違反",
    "meaning": "위반"
  },
  {
    "number": 1124,
    "word": "えん",
    "kanji": "縁",
    "meaning": "인연, 테두리"
  },
  {
    "number": 1125,
    "word": "かんきょう",
    "kanji": "環境",
    "meaning": "환경"
  },
  {
    "number": 1126,
    "word": "かんげき",
    "kanji": "感激",
    "meaning": "감격"
  },
  {
    "number": 1127,
    "word": "きげん",
    "kanji": "期限",
    "meaning": "기한"
  },
  {
    "number": 1128,
    "word": "こうりつ",
    "kanji": "効率",
    "meaning": "효율"
  },
  {
    "number": 1129,
    "word": "ざいさん",
    "kanji": "財産",
    "meaning": "재산"
  },
  {
    "number": 1130,
    "word": "じしん",
    "kanji": "自信",
    "meaning": "자신"
  },
  {
    "number": 1131,
    "word": "じじょう",
    "kanji": "事情",
    "meaning": "사정, 형편"
  },
  {
    "number": 1132,
    "word": "しゅじゅつ",
    "kanji": "手術",
    "meaning": "수술"
  },
  {
    "number": 1133,
    "word": "しょうぶ",
    "kanji": "勝負",
    "meaning": "승부"
  },
  {
    "number": 1134,
    "word": "そんがい",
    "kanji": "損害",
    "meaning": "손해"
  },
  {
    "number": 1135,
    "word": "たんい",
    "kanji": "単位",
    "meaning": "단위"
  },
  {
    "number": 1136,
    "word": "ちょうじょう",
    "kanji": "頂上",
    "meaning": "정상"
  },
  {
    "number": 1137,
    "word": "とうろく",
    "kanji": "登録",
    "meaning": "등록"
  },
  {
    "number": 1138,
    "word": "ほうそく",
    "kanji": "法則",
    "meaning": "법칙"
  },
  {
    "number": 1139,
    "word": "みらい",
    "kanji": "未来",
    "meaning": "미래"
  },
  {
    "number": 1140,
    "word": "やくわり",
    "kanji": "役割",
    "meaning": "역할"
  }
];
