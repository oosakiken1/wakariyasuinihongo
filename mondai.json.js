const mondaiTexts = {
s1:[
//問題例
//q1
    '彼（かれ）は今（いま）、新薬（しんやく）の研究開発（けんきゅうかいはつ）に挑（いど）んでいる。',
    '住民（じゅうみん）が建設会社（けんせつがいしゃ）を相手（あいて）に、訴訟（そしょう）を起（お）こした。',
//q2
    '推測（すいそく）/私（わたし）の主張（しゅちょう）は単（たん）なる推測（すいそく）ではなく、確（かく）たる証拠（しょうこ）に基（もと）づいている。',
    '誤動作（ごどうさ）/事故（じこ）の原因（げんいん）は、機械（きかい）の誤動作（ごどうさ）にあると考（かんが）えられている。',
//q3
    'ややこしい/このマニュアルの説明（せつめい）はややこしい。',
    'あざむく/人（ひと）をあざむいて、利益（りえき）を得（え）てはいけない。',
//q4
    'いたわる/弱（よわ）い立場（たちば）の人（ひと）をいたわるのは大切（たいせつ）なことです。',
    'キャリア/彼（かれ）のキャリアはそれほど長（なが）くないが、この仕事（しごと）をよく理解（りかい）している。',
//q5
     'ところで/いまさら後悔（こうかい）してみたところで、してしまったことは取（と）り返（かえ）しがつかない。',
     'いいようなものの/勝（か）ったからいいようなものの、今日（きょう）の試合（しあい）の内容（ないよう）は決（けっ）してほめられるものではなかった。',
//q6
    'にもまして/人類（じんるい）は、生物学的（せいぶつがくてき）存在（そんざい）であると同時（どうじ）に、他（ほか）のどの種（しゅ）にもまして文化的（ぶんかてき）存在（そんざい）でもある。',
    'ながらも/休（やす）みのたびに、今日（きょう）こそは片付（かたづ）けようと思（おも）いながらも、実際（じっさい）にはなかなか実行（じっこう）できない。',

//2018
//q1
    '人脈（じんみゃく）/社会活動（しゃかいかつどう）に参加（さんか）することで、人脈（じんみゃく）を広（ひろ）げることができた。',
    '賢（かしこ）い/鈴木（すずき）さんは指摘（してき）がいつも的確（てきかく）で、本当（ほんとう）に賢（かしこ）い人（ひと）だと思（おも）う。',
    '顕著（けんちょ）/文化（ぶんか）の違（ちが）いが食生活（しょくせいかつ）に顕著（けんちょ）に現（あらわ）れている。',
    '多岐（たき）/相談（そうだん）の内容（ないよう）は多岐（たき）にわたった。',
    'その風習（ふうしゅう）は、今（いま）はもう廃（すた）れてしまった。',
    '家賃（やちん）の相場（そうば）は地域（ちいき）によって違（ちが）う。',
//q2
    '基盤（きばん）/私（わたし）はこの土地（とち）で定職（ていしょく）に就（つ）き、生活（せいかつ）の基盤（きばん）を築（きず）いた。',
    'すんなり/議論（ぎろん）は難航（なんこう）すると思（おも）ったが、すぐに意見（いけん）がまとまり、すんなり結論（けつろん）がでた。',
    '見（み）かける/さっき駅前（えきまえ）で佐藤（さとう）さんを見（み）かけたんですが、今（いま）、海外（かいがい）にいるはずなのに変（へん）ですね。',
    '一掃（いっそう）/市長（しちょう）の責任（せきにん）ある行動（こうどう）が住民（じゅうみん）の不安（ふあん）を一掃（いっそう）し、行政（ぎょうせい）に対（たい）する期待（きたい）が一気（いっき）に高（たか）まった。',
    '染（し）みる/十分（じゅうぶん）に煮（に）た野菜（やさい）は味（あじ）が染（し）みて柔（やわ）らかく、とてもおいしかった。',
    '愛着（あいちゃく）/このテーブルは私（わたし）が子（こ）どものころから使（つか）っているので、愛着（あいちゃく）があって捨（す）てられない。',
    'ノウハウ/現社長（げんしゃちょう）は創立者（そうりつしゃ）から経営（けいえい）のノウハウを学（まな）んだ。',
//q3
    'かねがね/高橋（たかはし）さんにはかねがねお会（あ）いしたいと思（おも）っていました。',
    '故意（こい）に/林（はやし）さんはそれを故意（こい）に捨（す）てたらしい。',
    'お詫（わ）びする/昨日（きのう）、鈴木（すずき）さんにお詫（わ）びした。',
    '意気込（いきご）み/中村（なかむら）さんの言葉（ことば）からは強（つよ）い意気込（いきご）みが伝（つた）わってくる。',
    'おびえる/妹（いもうと）は少（すこ）しおびえているようだった。',
    '安堵（あんど）する/私（わたし）はその一言（ひとこと）で安堵（あんど）した。',
//q4
    '閑静（かんせい）/そのレストランは繁華街（はんかがい）から外（はず）れた閑静（かんせい）な場所（ばしょ）にある。',
    'たやすい/この問題（もんだい）は想像（そうぞう）以上（いじょう）に複雑（ふくざつ）で、たやすく解決（かいけつ）できるものではなかった。',
    '察（さっ）する/鈴木（すずき）さんは、私（わたし）が何（なに）も言（い）わなくても、私（わたし）の気持（きもち）を察（さっ）して慰（なぐさ）めてくれた。',
    '内訳（うちわけ）/前回（ぜんかい）の出張費（しゅっちょうひ）の内訳（うちわけ）をみたら、交通費（こうつうひ）の割合（わりあい）が予想外（よそうがい）に高（たか）かった。',
    '食（く）い違（ちが）う/この事件（じけん）は、複数（ふくすう）の目撃者（もくげきしゃ）の話（はなし）がそれぞれ食（く）い違（ちが）っており、不明（ふめい）な点（てん）が多（おお）い。',
    '過密（かみつ）/今回（こんかい）の出張（しゅっちょう）は過密（かみつ）なスケジュールで、ゆっくり食事（しょくじ）する時間（じかん）もなさそうだ。',

//q5
// 'よそに/朝（あさ）の満員電車（まんいんでんしゃ）。車内（しゃない）の混雑（こんざつ）をよそに、私（わたし）の目（め）の前（まえ）に座（すわ）っている学生風（がくせいふう）の男（おとこ）は、平然（へいぜん）とノートパソコンを広（ひろ）げて、作業（さぎょう）に没頭（ぼっとう）していた。',
// 'もしない/私（わたし）の父（ちち）は、読（よ）みもしないで漫画（まんが）を批判（ひはん）するから、本当（ほんとう）に嫌（いや）になる。',
// 'もっとも/「学生時代（がくせいじだい）にやったことで、今（いま）の仕事（しごと）に役立（やくだ）っていることは何（なん）でしょうか。」「ラグビー部（ぶ）での経験（けいけん）ですね。チームワークの大切（たいせつ）さを痛感（つうかん）しました。もっとも、それは去年（きょねん）企画（きかく）チームのリーダーになって初（はじ）めて気（き）づいたことですが。」',
// 'おいでになる/村（むら）の郷土史（きょうどし）をまとめるにあたり、今年（ことし）９０歳（さい）になる元村長（もとそんちょう）の東山（ひがしやま）さんにお話（はな）しを伺（うかが）った。村（むら）に初（はじ）めて汽車（きしゃ）が走（はし）ったときのことを鮮明（せんめい）に覚（おぼ）えておいでになり、その記憶力（きおくりょく）に驚（おどろ）いた。',
// 'に越（こ）したことはない/インテリアに関（かん）する知識（ちしき）がないのですが、働（はたら）けますか。研修（けんしゅう）があるので大丈夫（だいじょうぶ）です。知識（ちしき）はあるに越（こ）したことはありませんが、それよりも人柄（ひとがら）や仕事（しごと）に取（と）り組（く）む姿勢（しせい）を重視（じゅうし）しています。',
// '次第（しだい）では/水道管（すいどうかん）破裂（はれつ）による断水（だんすい）のため、８月（がつ）１２日（にち）まで市民（しみん）プールの営業（えいぎょう）を休止（きゅうし）します。復旧状況（ふっきゅうじょうきょう）次第（しだい）では、営業再開（えいぎょうさいかい）が遅（おく）れる可能性（かのうせい）がありますので、ご了承（りょうしょう）ください。',
// '知（し）られては/クレジットカードの番号（ばんごう）等（とう）、他人（たにん）に知（し）られては困（こま）る情報（じょうほう）は、電子（でんし）メールには書（か）かないほうがいいそうだ。',
// 'すればいいというものではない/仕事（しごと）は、決（き）められた時間内（じかんない）に、いかに成果（せいか）を上（あ）げるかが大切（たいせつ）であり、単（たん）に時間（じかん）をかけてがんばればいいというものではないと私（わたし）は思（おも）う。',
// 'ものと思（おも）われる/現在（げんざい）、潜水調査船（せんすいちょうさせん）を用（もち）いた調査研究（ちょうさけんきゅう）が進展中（しんてんちゅう）であり、いずれ近（ちか）いうちに海底（かいてい）のより詳細（しょうさい）な地質構造（ちしつこうぞう）が明（あき）らかになるものと思（おも）われる。',
// 'させてもらう/山下（やました）「あのう、西村（にしむら）先輩（せんぱい）。私（わたし）、今日（きょう）でこのサークルを辞（や）めさせてもらおうかと思（おも）って。」西村（にしむら）「ええ？辞（や）める？急（きゅう）にどうして？」',

//2012
//q1
'利益（りえき）/去年（きょねん）より利益（りえき）がわずかに増（ふ）えた。',
'逃（のが）れた/橋本（はしもと）選手（せんしゅ）の活躍（かつやく）で、なんとかピンチを逃（のが）れた。',
'考慮（こうりょ）/子（こ）どものおもちゃは、安全性（あんぜんせい）を考慮（こうりょ）して選（えら）ぶようにしている。',
'遮（さえぎ）る/この辺（あた）りは視界（しかい）を遮（さえぎ）る物（もの）が何（なに）もない。',
'根拠（こんきょ）/この説（せつ）は科学的（かがくてき）な根拠（こんきょ）に乏（とぼ）しい。',
'肝心（かんじん）/何事（なにごと）も初（はじ）めが肝心（かんじん）だ。',

'まみれ/物置（ものおき）の隅（すみ）で、ほこりまみれになっている古（ふる）い人形（にんぎょう）を見（み）つけた。',
'弾（はず）む/木村（きむら）さんとは共通（きょうつう）の趣味（しゅみ）があるので、いつも会話（かいわ）が弾（はず）む。',
'実情（じつじょう）/地域（ちいき）の実情（じつじょう）に合（あ）った医療（いりょう）のシステムが求（もと）められている。',
'逸材（いつざい）/その選手（せんしゅ）は、十年（じゅうねん）に一人（ひとり）の逸材（いつざい）だと言（い）われている。',
'不備（ふび）/書類（しょるい）に不備（ふび）があった場合（ばあい）、申請（しんせい）は受理（じゅり）されません。',
'修復（しゅうふく）/約（やく）３００年前（ねんまえ）の絵画（かいが）の修復（しゅうふく）が終（お）わり、来月（らいげつ）から公開（こうかい）される予定（よてい）だ。',
'強（つよ）み/経済（けいざい）だけでなく、法律（ほうりつ）にも詳（くわ）しいのが彼（かれ）の強（つよ）みだ。',

'画期的（かっきてき）な/この映画（えいが）は画期的（かっきてき）な手法（しゅほう）で製作（せいさく）された。',
'もくろむ/あの企業（きぎょう）は海外市場（かいがいしじょう）への進出（しんしゅつ）をもくろんでいる。',
'手（て）がかり/問題（もんだい）を解決（かいけつ）するために、もう少（すこ）し手（て）がかりが欲（ほ）しい。',
'にわかには/あの人（ひと）の話（はなし）はにわかには信（しん）じられない。',
'重宝（ちょうほう）する/この鍋（なべ）は重宝（ちょうほう）している。',
'シビアだ/中村（なかむら）さんは仕事（しごと）に対（たい）していつもシビアだ。',

'連携（れんけい）/学校（がっこう）は地域（ちいき）と連携（れんけい）して生徒（せいと）の安全（あんぜん）を守（まも）っている。',
'不服（ふふく）/審判（しんぱん）の判定（はんてい）に不服（ふふく）を唱（とな）えることはできない。',
'かなう/自分（じぶん）の店（みせ）を持（も）つという夢（ゆめ）が、とうとうかなった。',
'目覚（めざ）ましい/あの新人（しんじん）選手（せんしゅ）は目覚（めざ）ましい成長（せいちょう）を見（み）せている。',
'ほどける/靴（くつ）のひもがほどけないようにしっかり結（むす）んだ。',
'赴任（ふにん）/部長（ぶちょう）が海外（かいがい）の支社（ししゃ）に赴任（ふにん）するので、みんなで送別会（そうべつかい）を開（ひら）いた。',

],
s2:[
// 2018
//q1
    '貴重（きちょう）/先生（せんせい）に貴重（きちょう）な資料（しりょう）を見（み）せていただいた。',
    '怪（あや）しい/その話（はなし）を聞（き）いて、とても怪（あや）しいと思（おも）った。',
    '容姿（ようし）/佐藤（さとう）さんは容姿（ようし）も性格（せいかく）もいい。',
    '伴（ともな）う/これは危険（きけん）を伴（ともな）う実験（じっけん）だ。',
    '願望（がんぼう）/以前（いぜん）は、海外（かいがい）で暮（く）らしたいという願望（がんぼう）が強（つよ）かった。',
// q2
    '招（まね）く/友人（ゆうじん）を家（いえ）に招（まね）いた。',
    '保証（ほしょう）/この商品（しょうひん）は安全性（あんぜんせい）が保証（ほしょう）されている。',
    '催（もよお）し/この企業（きぎょう）では、さまざまな催（もよお）しを行（おこな）っている。',
    '硬貨（こうか）/銀行（ぎんこう）に行（い）って、お札（さつ）を硬貨（こうか）に変（か）えた。',
    '製造（せいぞう）/わが社（しゃ）の商品（しょうひん）はここで製造（せいぞう）されている。',

// q3
    '結婚感（けっこんかん）/男女（だんじょ）の結婚感（けっこんかん）の違（ちが）いについて調（しら）べた。',
    '高水準（こうすいじゅん）/ここでは高水準（こうすいじゅん）の医療（いりょう）が受（う）けられる。',
    '日本式（にほんしき）/今日（きょう）は大学（だいがく）の講義（こうぎ）で日本式（にほんしき）の経営（けいえい）について学（まな）んだ。',
    '未使用（みしよう）/開封（かいふう）しても、未使用（みしよう）の物（もの）は返品（へんぴん）可能（かのう）です。',
    '勉強（べんきょう）漬（づ）け/受験生（じゅけんせい）なので、勉強（べんきょう）漬（づ）けの毎日（まいにち）だ。',

// q4
    '提供（ていきょう）/この大学（だいがく）では一般向（いっぱんむ）けの講座（こうざ）を開（ひら）き、社会（しゃかい）に学習（がくしゅう）の場（ば）を提供（ていきょう）している。',
    'ぐったり/今年（ことし）の夏（なつ）は暑（あつ）さが厳（きび）しく、仕事（しごと）から家（いえ）に帰（かえ）ると疲（つか）れてぐったりしてしまう。',
    'ショック/学生時代（がくせいじだい）の友人（ゆうじん）が私（わたし）の名前（なまえ）を忘（わす）れていたので、とてもショックだった。',
    '邪魔（じゃま）/通路（つうろ）に荷物（にもつ）を置（お）いたら、通（とお）る人（ひと）の邪魔（じゃま）になりますよ。',
    'なだらかだ/少（すこ）し長（なが）めの上（のぼ）り坂（ざか）だったが、なだらかだったので、それほど疲（つか）れなかった。',
    '活発（かっぱつ）に/出席者（しゅっせきしゃ）は皆（みな）会議（かいぎ）に積極的（せっきょくてき）に参加（さんか）し、意見（いけん）を活発（かっぱつ）に交換（こうかん）し合（あ）った。',
    '割（わ）り込（こ）む/列（れつ）に並（なら）んでいたら、私（わたし）の前（まえ）に強引（ごういん）に割（わ）り込（こ）んできた人（ひと）がいて、嫌（いや）な気分（きぶん）になった。',
// q5
    '愉快（ゆかい）な/高橋（たかはし）さんはとても愉快（ゆかい）な人（ひと）だ。',
    'やむをえない/それは確（たし）かにやむをえないことだと思（おも）う。',
    '息抜（いきぬ）きする/少（すこ）し息抜（いきぬ）きしたほうがいいよ。',
    'ついていた/今日（きょう）はとてもついていた。',
    'つねに/私（わたし）はつねに言葉遣（ことばづか）いに気（き）を付（つ）けている。',
// q6
    '延長（えんちょう）/予定（よてい）の時間内（じかんない）に結論（けつろん）が出（で）ず、会議（かいぎ）が１時間（じかん）延長（えんちょう）されることになった。',
    'さびる/この鉄（てつ）の棒（ぼう）はずっと家（いえ）の外（そと）に置（お）いてあったので、さびて茶色（ちゃいろ）くなっている。',
    '目上（めうえ）/勉強会（べんきょうかい）に参加（さんか）した社員（しゃいん）がすべて目上（めうえ）だったので、新人（しんじん）の私（わたし）はとても緊張（きんちょう）した。',
    '大（おお）げさ/あの人（ひと）は小（ちい）さなことを大（おお）げさに言（い）うので、そのまま信（しん）じないほうがよい。',
    '反省（はんせい）/今回（こんかい）の企画（きかく）では、私（わたし）の準備不足（じゅんびぶそく）で回（まわ）りに迷惑（めいわく）をかけたことをとても反省（はんせい）しています。',

// 2012
// q1
    '敗（やぶ）れる/ずっと好調（こうちょう）だったのに、最後（さいご）の試合（しあい）で敗（やぶ）れてしまった。',
    '要求（ようきゅう）される/この仕事（しごと）には高（たか）い語学力（ごがくりょく）が要求（ようきゅう）される。',
    '祝（いわ）う/友達（ともだち）の合格（ごうかく）をみんなで祝（いわ）った。',
    '調節（ちょうせつ）/寒（さむ）かったら、エアコンの温度（おんど）を調節（ちょうせつ）してください。',
    '至急（しきゅう）/この書類（しょるい）を至急（しきゅう）コピーしてきてください。',
// q2
    '象徴（しょうちょう）/ハトは平和（へいわ）の象徴（しょうちょう）だと言（い）われている。',
    '激（はげ）しい/退院（たいいん）しても、しばらくの間（あいだ）、激（はげ）しい運動（うんどう）はしないでください。',
    '登録（とうろく）/携帯電話（けいたいでんわ）に友達（ともだち）の電話番号（でんわばんごう）を登録（とうろく）した。',
    '誘（さそ）った/岡田（おかだ）さんを話題（わだい）の映画（えいが）に誘（さそ）った。',
    '変更（へんこう）/待（ま）ち合（あ）わせ時間（じかん）を６時（じ）に変更（へんこう）してもらった。',
// q3
    '医学界（いがっかい）/彼（かれ）は医学界（いがっかい）ではかなり知（し）られた存在（そんざい）だ。',
    '準優勝（じゅんゆうしょう）/決勝戦（けっしょうせん）で負（ま）けて、準優勝（じゅんゆうしょう）に終（お）わった。',
    '現段階（げんだんかい）/現段階（げんだんかい）では詳細（しょうさい）は決（き）まっていないらしい。',
    '非公式（ひこうしき）/今回（こんかい）の大臣（だいじん）の訪問（ほうもん）は非公式（ひこうしき）に行（おこな）われた。',
    '総売上（そううりあげ）/わが社（しゃ）の今年（ことし）の総売上（そううりあげ）は、昨年（さくねん）を上回（うわまわ）った。',
// q4
    '分析（ぶんせき）/さまざまなデータを分析（ぶんせき）した結果（けっか）、事故（じこ）の原因（げんいん）が明（あき）らかになった。',
    'ぶらぶら/街（まち）をぶらぶらしていたら、山本（やまもと）さんに会（あ）った。',
    '活気（かっき）/祭（まつ）りの日（ひ）は町（まち）が活気（かっき）にあふれている。',
    'つまって/コピー機（き）に紙（かみ）がつまって、出（で）てこない。',
    '反映（はんえい）/この小説（しょうせつ）は今（いま）の時代（じだい）を反映（はんえい）した作品（さくひん）だ。',
    'ぼんやり/田中（たなか）さんは長（なが）い間（あいだ）ぼんやり窓（まど）の外（そと）を見（み）ていた。',
    '強（つよ）み/経済（けいざい）だけでなく、法律（ほうりつ）にも詳（くわ）しいのが彼（かれ）の強（つよ）みだ。',
// q5
    'ブーム/このブームは長（なが）く続（つづ）かないだろう。',
    '慎重（しんちょう）に/この作業（さぎょう）は慎重（しんちょう）にやってください。',
    'ちぢんで/シャツがちぢんでしまった。',
    'ほぼ/宿題（しゅくだい）のレポートはほぼ終（お）わった。',
    '回復（かいふく）する/来週（らいしゅう）は天気（てんき）が回復（かいふく）するそうだ。',
// q6
    '方針（ほうしん）/教育（きょういく）に関（かん）する政府（せいふ）の方針（ほうしん）が大（おお）きく変（か）わった。',
    '範囲（はんい）/明日（あす）は広（ひろ）い範囲（はんい）で強（つよ）い雨（あめ）が降（ふ）るでしょう。',
    'せめて/京都（きょうと）に行（い）くなら、せめて１泊（ぱく）はしたい。',
    '利益（りえき）/この値段（ねだん）で売（う）ったら、店（みせ）の利益（りえき）はほとんどない。',
    'かなう/自分（じぶん）の店（みせ）を持（も）つという夢（ゆめ）が、とうとうかなった。',

//問題例
//q1
    '貧（まず）しい/戦後（せんご）、日本（にほん）は貧（まず）しい時代（じだい）を経験（けいけん）した。',
    '種（たね）/この黒（くろ）い種（たね）からどんな花（はな）がさくのだろうか。',
//q2
    '収集（しゅうしゅう）/今日（きょう）は、ごみ収集日（しゅうしゅうび）ですか。',
    '優（すぐ）れている/このカメラはデザインも性能（せいのう）も優（すぐ）れている。',
//q3
    '飛（と）びまわる/新（あたら）しい商品（しょうひん）を売（う）るために、彼（かれ）は毎日（まいにち）忙（いそが）しく飛（と）びまわっている。',
    '名場面（めいばめん）/あの映画（えいが）の最後（さいご）は名場面（めいばめん）として知（し）られている。',
//q4
    '寿命（じゅみょう）/日本人（にほんじん）の平均（へいきん）寿命（じゅみょう）は、男性（だんせい）が７９歳（さい）、女性（じょせい）が８６歳（さい）である。',
    '連続（れんぞく）/CDの売上（うりあげ）は３年（ねん）連続（れんぞく）で減少（げんしょう）しているそうだ。',
//q5７９
    '単（たん）なる/田中（たなか）さんは単（たん）なる友人（ゆうじん）です。',
    'ほがらか/あの人（ひと）のお母（かあ）さんはいつもほがらかです。',
//q6
    '余計（よけい）/話（はなし）が複雑（ふくざつ）になるから、余計（よけい）なことは言（い）わないで。',
    '率直（そっちょく）/このアンケートには、皆様（みなさま）のご意見（いけん）を率直（そっちょく）にお書（か）きください。',
//q7 文法
    // '最終（さいしゅう）のバスに間（ま）に合（あ）わなくて困（こま）っていたところに、運（うん）よくタクシーが通（とお）りかかり、無事（ぶじ）帰宅（きたく）できた。',
    // '親（おや）が他人（たにん）をいつもうらやんでばかりいると、子（こ）どもも人（ひと）をうらやむようになるというのが父（ちち）の口癖（くちぐせ）だった。',
],

s3:[
// 2018
// q1
    '観客（かんきゃく）/開場（かいじょう）には大勢（おおぜい）の観客（かんきゃく）がいた。',
    '払（はら）う/田村（たむら）さんが払（はら）ってくれました。',
    '到着（とうちゃく）/ホテルには３時（じ）ごろ到着（とうちゃく）します。',
    '加（くわ）える/山下（やました）さんが説明（せつめい）を加（くわ）えました。',
    '訓練（くんれん）/今（いま）から訓練（くんれん）を行（おこな）います。',
    '豆（まめ）/この豆（まめ）はスープに使（つか）うといいですよ。',
    '共通（きょうつう）/社会（しゃかい）には共通（きょうつう）のルールがあります。',
    '税金（ぜいきん）/来年（らいねん）から税金（ぜいきん）が上（あ）がるそうです。',
// q2
    '波（なみ）/しばらく、きれいな波（なみ）を見（み）ていた。',
    '早（はや）い/もう少（すこ）し早（はや）く歩（ある）きましょう。',
    '満足（まんぞく）/わたしは今（いま）の生活（せいかつ）に満足（まんぞく）している。',
    '組（く）む/父（ちち）は腕（うで）を組（く）んで何（なに）か考（かんが）えていた。',
    '輸出（ゆしゅつ）/この国（くに）は主（おも）に米（こめ）を輸出（ゆしゅつ）している。',
    '眠（ねむ）る/赤（あか）ちゃんが母親（ははおや）に抱（だ）かれて眠（ねむ）っています。',
// q3
    '特長（とくちょう）/この紙（かみ）は、ぬれても破（やぶ）れにくいという特長（とくちょう）があります。',
    'イメージ/佐藤（さとう）さんには、おとなしいイメージがあるが、本当（ほんとう）は活動的（かつどうてき）な人（ひと）らしい。',
    '囲（かこ）む/正月（しょうがつ）には親戚（しんせき）が集（あつ）まって、みんなでテーブルを囲（かこ）み、楽（たの）しく食事（しょくじ）をした。',
    'がらがら/このレストランの料理（りょうり）はおいしくないので、店内（てんない）はいつもがらがらだ。',
    'うわさ/高田（たかだ）さんが引（ひ）っ越（こ）すといううわさを聞（き）いたが、本当（ほんとう）かどうか気（き）になる。',
    '許（ゆる）す/父（ちち）から借（か）りた本（ほん）をなくしてしまったので謝（あやま）ったら、父（ちち）はすぐに許（ゆる）してくれた。',
    '姿勢（しせい）/パソコンの前（まえ）でずっと同（おな）じ姿勢（しせい）でいたので、体（からだ）が痛（いた）くなった。',
    'たしかめて/申込書（もうしこみしょ）に間違（まちが）いがないか、よくたしかめてから受付（うけつけ）に出（だ）した。',
    '農業（のうぎょう）/わたしのふるさとは農業（のうぎょう）が盛（さか）んで、米（こめ）や野菜（やさい）をたくさん作（つく）っています。',
    'しずむ/水（みず）に浮（う）かんでいる木（こ）の葉（は）が、しばらくすると水（みず）の中（なか）にしずんでしまった。',
    '内緒（ないしょ）/この話（はなし）は誰（だれ）にも言（い）わずに、ずっと内緒（ないしょ）にしていた。',
// q4
    'かがやく/水（みず）の表面（ひょうめん）がかがやいています。',
    'がっかりする/その知（し）らせを聞（き）いたとき、わたしはとてもがっかりした。',
    '当然（とうぜん）/留学（りゅうがく）生活（せいかつ）に不安（ふあん）は当然（とうぜん）ありました。',
    'あまる/パーティーの料理（りょうり）があまりました。',
    '横断禁止（おうだんきんし）/ここは横断禁止（おうだんきんし）です。',
//q5
    '急（きゅう）/部屋（へや）から急（きゅう）に人（ひと）が飛（と）び出（だ）してきたので、ぶつかりそうになった。',
    '沸騰（ふっとう）/鍋（なべ）のお湯（ゆ）が沸騰（ふっとう）したら、とうふを入（い）れて火（ひ）を少（すこ）し弱（よわ）くしてください。',
    'まげる/けがは良（よ）くなったが、腕（うで）を伸（の）ばしたりまげたりすると、まだ少（すこ）し痛（いた）む。',
    '出張（しゅっちょう）/営業（えいぎょう）のため、来週（らいしゅう）一週間（いっしゅうかん）、課長（かちょう）とアメリカに出張（しゅっちょう）します。',
    '慰（なぐさ）める/仕事（しごと）で失敗（しっぱい）してしまったが、友人（ゆうじん）が慰（なぐさ）めてくれたので元気（げんき）がでた。',

    // // b1
    // '彼（かれ）は小説家（しょうせつか）として有名（ゆうめい）になったが、普段（ふだん）は小（ちい）さな病院（びょういん）で働（はたら）く医者（いしゃ）だ。',
    // '先週（せんしゅう）、会社（かいしゃ）の面接（めんせつ）で「もし自分（じぶん）を色（いろ）で表（あらわ）すとしたら、何色（なにいろ）ですか。」と聞（き）かれ、オレンジ色（いろ）と答（こた）えた。「元気（げんき）」や「健康（けんこう）」のイメージがあるからだ。',
    // '昨日（きのう）の夜（よる）、寝（ね）る前（まえ）にどうしてもヨーグルトが食（た）べたくなって、夜中（よなか）なのにコンビニに買（か）いに行（い）ってしまった。',
    // 'このケーキは材料（ざいりょう）を混（ま）ぜて焼（や）くだけだから、誰（だれ）でも失敗（しっぱい）せずにおいしく作（つく）れる。',
    // '私（わたし）の町（まち）では毎年（まいとし）８月（がつ）最後（さいご）の日曜日（にちようび）に夏祭（なつまつ）りが行（おこな）われます。',
    // 'すみません。この靴（くつ）のもう一（ひと）つ大（おお）きいサイズはありますか。あ、はい、確認（かくにん）しますので、少々（しょうしょう）お待（ま）ちください。',
    // 'はい、Ｘ建設（けんせつ）営業部（えいぎょうぶ）です。あ、私（わたし）、ＡＢＣ銀行（ぎんこう）の中田（なかた）と申（もう）しますが、山石（やまいし）さんをお願（ねが）いします。',
    // '息子（むすこ）が通（かよ）う高校（こうこう）では、お昼（ひる）にパンや飲（の）み物（もの）が買（か）える場所（ばしょ）もあるが、基本的（きほんてき）には全員（ぜんいん）がお弁当（べんとう）を持（も）っていくことになっている。',
    // '昼寝（ひるね）をするのは気持（きも）ちがいいが、夜（よる）寝（ね）られないと困（こま）るので、いつも１５分（ふん）ぐらいで起（お）きる。',
    // 'Ａ市（し）は、保育園（ほいくえん）を利用（りよう）したくても利用（りよう）できない人（ひと）がいることが問題（もんだい）になっている。',
    // 'ねえ、ちょっと買（か）い物（もの）に行（い）ってくるから、今夜（こんや）行（い）くレストランの予約（よやく）をお願（ねが）いできる？うん、わかった。予約（よやく）しておくよ。１９時（じ）からで大丈夫（だいじょうぶ）？ええ、ありがとう。',
    // 'ねえ、このトマト、もう食（た）べられる？赤（あか）くなっているよ。うん。そろそろ食（た）べてもよさそうだね。',
    // '山下（やました）さん、来（き）ませんね。携帯（けいたい）に電話（でんわ）をしても出（で）ないし、どうしますか。これ以上（いじょう）待（ま）つと私（わたし）たちも間（ま）に合（あ）わないから、先（さき）にいってしまいましょうか。そうですね。いきますか。',

// // b2
//     'この写真の鳥はとても珍しくて、この鳥の研究をしている専門家でもなかなか見る機会がないそうだ。',
//     '春から大学生になる娘には、勉強以外にも大学時代にしかできない経験をいろいろしてほしい。',
//     '土曜日は買い物をしたり友人と食事をしたりし、日曜日はどこにも出かけずに家で過ごすというのが私の好きな週末の過ごし方だ。',
//     'すみません。15分ぐらい前に案内をお願いして、しばらうここで待てって言われたから待っているんですけど。まだですか。\n大変申し訳ありません。',
//     '歴史を勉強すればするほど、もっと学びたいと思うようになって、歴史学科への進学を決めた。',
    // 2012

// 2012
'首都（しゅと）/日本（にほん）の首都（しゅと）はどこですか。',
'地球（ちきゅう）/地球（ちきゅう）は太陽（たいよう）のまわりを回（まわ）っている。',
'遅（おく）れる/あの時計（とけい）は遅（おく）れている。',
'協力（きょうりょく）/二人（ふたり）で協力（きょうりょく）すれば、仕事（しごと）も早（はや）く終（お）わるだろう。',
'応募（おうぼ）/大学（だいがく）の奨学金（しょうがくきん）に応募（おうぼ）した。',
'疑問（ぎもん）/子（こ）どもの疑問（ぎもん）に答（こた）えた。',
'発表（はっぴょう）/試験（しけん）の成績（せいせき）が発表（はっぴょう）された。',
'単語（たんご）/単語（たんご）のリストはとなりのページにあります。',

'解決（かいけつ）/みんなで話（はな）し合（あ）って、問題（もんだい）を解決（かいけつ）した。',
'案内（あんない）/山口（やまぐち）さんに東京（とうきょう）を案内（あんない）してもらった。',
'健康（けんこう）/わたしは健康（けんこう）のために毎日（まいにち）走（はし）っています。',
'気温（きおん）/今年（ことし）の夏（なつ）は気温（きおん）が高（たか）かった。',
'痛（いた）い/頭（あたま）が痛（いた）いので、薬（くすり）を飲（の）んだ。',
'大量（たいりょう）/このシャツは工場（こうじょう）で大量（たいりょう）に作（つく）られている。',

'不満（ふまん）/この携帯電話（けいたいでんわ）はボタンを押（お）しにくいという不満（ふまん）を持（も）つ利用者（りようしゃ）もいる。',
'ぶらぶら/街（まち）をぶらぶらしていたら、山本（やまもと）さんに会（あ）った。',
'申込書（もうしこみしょ）/セミナーに参加（さんか）したい人（ひと）は、申込書（もうしこみしょ）に住所（じゅうしょ）、氏名（しめい）、希望日（きぼうび）を書（か）いてください。',
'複雑（ふくざつ）/この計算（けいさん）は複雑（ふくざつ）なので、コンピューターを使（つか）っても時間（じかん）がかかる。',
'アメリカ産（さん）/このオレンジはアメリカ産（さん）です。',
'インタビュー/優勝（ゆうしょう）した選手（せんしゅ）にインタビューをして記事（きじ）を書（か）いた。',
'主張（しゅちょう）/全員（ぜんいん）が自分（じぶん）の意見（いけん）を主張（しゅちょう）したので、会議（かいぎ）がなかなか終（お）わらなかった。',
'からから/朝（あさ）から何（なに）も飲（の）んでいないので、のどがからからです。',
'ためる/将来（しょうらい）のために、お金（かね）をためています。',

'通勤（つうきん）する/わたしは妻（つま）と一緒（いっしょ）に通勤（つうきん）しています。',
'おそろしい/とてもおそろしい経験（けいけん）をした。',
'わけ/先生（せんせい）にわけを話（はな）した。',
'へる/最近（さいきん）、この川（かわ）は水（みず）がへった気（き）がする。',
'やりなおす/実験（じっけん）がうまくいかなかったので、やりなおした。',

'ころぶ/階段（かいだん）でころんでけがをした。',
'指示（しじ）/「この書類（しょるい）、３０部（ぶ）コピーしておいて」と秘書（ひしょ）に指示（しじ）した。',
'見送（みおく）る/国（くに）に帰（かえ）る友人（ゆうじん）を空港（くうこう）まで見送（みおく）った。',
'植（う）える/近所（きんじょ）の公園（こうえん）にはいろいろな花（はな）が植（う）えてある。',
'正直（しょうじき）/小川（おがわ）さんは正直（しょうじき）な人（ひと）なので、決（けっ）してうそは言（い）いません。',

//問題例
'山本（やまもと）さんはクラスの代表（だいひょう）に選（えら）ばれた。',
'三日前（みっかまえ）から雨（あめ）が続（つづ）いている。',
'アルバイトの面接（めんせつ）は来週（らいしゅう）の土曜日（どようび）だ。',
'困（こま）っているときに、先生（せんせい）に助（たす）けていただきました。',
'ぐっすり寝（ね）たので、気持（きも）ちがいい。',
'ここのパソコンはだれでも使（つか）えますが、コピーは有料（ゆうりょう）です。',
'次々（つぎつぎ）に新（あたら）しいゲームが作（つく）られる。',
'明日（あす）の飛行機（ひこうき）の予約（よやく）を確認（かくにん）してください。',
'今（いま）ごろ東京（とうきょう）では桜（さくら）が咲（さ）いているでしょう。',
'山田（やまだ）さんは子（こ）どもをとてもかわいがっています。',

],
s4:[
// 2018 bunnpou 
'私（わたし）は　毎朝（まいあさ）　新聞（しんぶん）を　読（よ）みます。',
'きのうの　しゅくだいは　すくなかったので、２０分（ぷん）で　終わりました。',
'この　ロボットは　人（ひと）と　会話（かいわ）することが　できます。',
'弟（おとうと）は　ちいさいとき　よく　けがを　して、両親（りょうしん）を　心配（しんぱい）させました。',
'ホテルの　朝（あさ）ご飯（はん）の　パンが　とても　おいしかったので八（やっ）つも　食（た）べました。',
'この　日本語（にほんご）の　じしょは、１５０年前（ねんまえ）に　外国人（がいこくじん）によって　作（つく）られました。',
'Ａ市（し）の　運動場（うんどうじょう）は　だれでも　使（つか）えますが、予約（よやく）が　ひつようです。',
// '前田（まえだ）「リーさん、いつも　どうやって　国（くに）の　かぞくに　れんらくしますか。」リー「メールを　書（か）くことが　多（おお）いです。」',
'リーさん、いつも　どうやって　国（くに）の　かぞくに　れんらくしますか。メールを　書（か）くことが　多（おお）いです。',
'娘（むすめ）は　先月（せんげつ）　高校（こうこう）を　卒業（そつぎょう）しました。もうすぐ　大学（だいがく）の　入学式（にゅうがくしき）です。',
'今朝（けさ）は　駅（えき）に　行（い）く　バスが　なかなか　来（こ）なかったので、タクシーで行（い）きました。',
// '山下（やました）「南（みなみ）さん、あしたか　あさって、カラオケに　行（い）かない？」南（みなみ）「あ、いいね。あしたは　都合（つごう）が悪（わる）いけど、あさって　なら　だいじょうぶだよ。」',
'南（みなみ）さん、あしたか　あさって、カラオケに　行（い）かない？あ、いいね。あしたは　都合（つごう）が悪（わる）いけど、あさって　なら　だいじょうぶだよ。',
'私（わたし）は　夏休（なつやす）みの間（あいだ）、スーパーで　アルバイトを　して　いました。',
'先週（せんしゅう）　庭（にわ）の　木（き）の　えだを　切（き）りました。ぜんぶ　切（き）るのに　２時間（じかん）　かかりました。',
// '木村（きむら）「山田（やまだ）さん、あしたの　午後（ごご）、サッカーの　練習（れんしゅう）に　いきますか。」山田（やまだ）「ええ、いきます。でも、午前中（ごぜんちゅう）　用事（ようじ）があるので、遅（おく）れるかもしれません。」',
'あしたの　午後（ごご）、サッカーの　練習（れんしゅう）に　いきます。でも、午前中（ごぜんちゅう）　用事（ようじ）があるので、遅（おく）れるかもしれません。',
// '森（もり）「空（あ）いて　いる　席（せき）が　ありませんね。」田中（たなか）「ええ。あ、でも、あそこの　席（せき）が　空（あ）きそうですよ。」森（もり）「本当（ほんとう）ですね。空（あ）くまで、少（すこ）し　待（ま）ちましょう。」',
'あそこの　席（せき）が　空（あ）きそうですよ。空（あ）くまで、少（すこ）し　待（ま）ちましょう。',
// '林（はやし）「上田（うえだ）さん、会議（かいぎ）の　じゅんびは　終（お）わりましたか。てつだいましょうか。」上田（うえだ）「ありがとうございます。じゃあ、いすが　一（ひと）つ　足（た）りないので、となりの会議室（かいぎしつ）から　持（も）って　きて　もらえますか。」林（はやし）「はい、わかりました。」',
'いすが　一（ひと）つ　足（た）りないので、となりの会議室（かいぎしつ）から　持（も）って　きて　もらえますか。',

'先月（せんげつ）まで　花屋（はなや）が　あった　場所（ばしょ）に　できた　きっさてんは　りんごの　ケーキが　おいしいです。',
'きのうの　夜（よる）　家（いえ）に　帰（かえ）ってから、かぎを　どこに　置（お）いたか　覚（おぼ）えて　いません。',
'私（わたし）は　ピアノを　ひくのが　好（す）きですが、最近（さいきん）　いそがしくて　ひく　時間（じかん）が　ありません。',
'私（わたし）は　２０さいの　たんじょうびに　そふが　くれた　カメラを　大切（たいせつ）に　使（つか）って　います。',
// '林（はやし）「来週（らいしゅう）、野球（やきゅう）の　試合（しあい）を　見（み）に　行（い）こうと　思（おも）って　いるんですが、リーさんも　いっしょに　どうですか。」リー「えっ、野球（やきゅう）の　試合（しあい）ですか。いいですね。見（み）に　行（い）ったことが　ないので　ぜひ　行（い）きたいです。」',
'来週（らいしゅう）、野球（やきゅう）の　試合（しあい）を　見（み）に　行（い）こうと　思（おも）って　いるんですが、リーさんも　いっしょに　どうですか。',
'えっ、野球（やきゅう）の　試合（しあい）ですか。いいですね。見（み）に　行（い）ったことが　ないので　ぜひ　行（い）きたいです。',

// 2018
'これは　一（ひと）つ　千円（せんえん）です。',
'楽（たの）しい/今日（きょう）は　とても　楽（たの）しかったですね。',
'味（あじ）/わたしは　この　味（あじ）が　すきです。',
'不便（ふべん）/この　あたりは　ちょっと　不便（ふべん）ですね。',
'切（き）ります/やさいを　切（き）って　ください。',
'以外（いがい）/はやしさん以外（いがい）は　みんな　来（き）ました。',
'雲（くも）/まどから　ずっと　雲（くも）を　見（み）て　いました。',
'急行（きゅうこう）/その　電車（でんしゃ）は　急行（きゅうこう）ですよ。',
'写（うつ）します/これは　写（うつ）さないで　ください。',
'反対（はんたい）/その　いけんには　反対（はんたい）です。',

'ちょっと　口（くち）を　あけて　ください。',
'黒（くろ）い/黒（くろ）い　くつしたが　ほしいです。',
'計画（けいかく）/なつやすみの　計画（けいかく）は　まだ　きまって　いません。',
'医者（いしゃ）/わたしは　医者（いしゃ）に　なりたいです。',
'夜（よる）/あしたの　夜（よる）　かぞくと　出（で）かけます。',
'貸（か）す/かさを　貸（か）して　ください。',
'試合（しあい）/あしたは　サッカーの　試合（しあい）が　あります。',

'ざっしが　２さつ　あります。',
'しんぱい/さとうさんが　けがを　したと　聞（き）いて、みんな　しんぱいしました。',
'ゆめ/わたしには、しょうらい　かしゅに　なると　いう　ゆめが　あります。',
'ぜひ/リーさんも　こんどの　パーティーに　ぜひ　来（き）て　くださいね。',
'せつめい/これから　きかいの　つかいかたを　せつめい　しますから、よく　聞（き）いて　ください。',
'かたい/はが　わるいので、かたい　ものは　食（た）べられません。',
'さそいます/もりさんを　デートに　さそいましたが、行（い）けないと　言（い）われました。',
'センチ/わたしの　むすこは、１年（ねん）で　５センチくらい　せが　高（たか）く　なりました。',
'くらべます/お店（みせ）で　３だいの　パソコンを　くらべて、いちばん　かるい　パソコンを　えらびました。',
'るす/たなかさんの　いえの　電気（でんき）が　ついて　いませんね。たなかさんは　るすの　ようです。',
'見（み）つかります/へやの　かぎを　さがして　いますが、まだ　見（み）つかりません。',

'にねんまえに　きょうとへ　行（い）きました。',
'アルバイト/おとうさんは　あの　きっさてんで　アルバイトを　して　います。',
'すいえい/わたしは　すいえいが　すきです。',
'びっくりします/それを　聞（き）いて　びっくりしました。',
'うつくしい/あの　人（ひと）は　うつくしいですね。',
'ゆにゅう/この　国（くに）は　こめを　ゆにゅうして　います。',

'ここに　いらない　ものを　すてて　ください。',
'さいきん/きむらさんは　さいきん　けっこんした　そうです。',
'おと/ラジオの　おとが　大（おお）きいので、もう　少（すこ）し　小（ちい）さく　して　ください。',
'けんがく/先生（せんせい）や　友（とも）だちと　こうじょうを　けんがくしました。',
'かざります/おきゃくさんが　来（き）ますから、へやに　花（はな）を　かざりましょう。',
'こうじ/この　みちは　こうじを　して　いるので、とおれません。',

// 2012
'わたしの　せんもんは　文学（ぶんがく）です。',
'くつに　石（いし）が　入（はい）って　いました。',
'にほんで　いろいろな　経験（けいけん）を　しました。',
'店員（てんいん）に　トイレが　どこに　あるか　聞（き）きました。',
'きょうは　食堂（しょくどう）が　こんで　いました。',
'この　まどから　港（みなと）が　見（み）えます。',
'この　小説（しょうせつ）は　おもしろかったです。',
'まいばん　日記（にっき）を　書（か）いて　います。',
'夕方（ゆうがた）、雨（あめ）が　ふりました。',
'もうすぐ　秋（あき）ですね。',

'ふねで　にもつを　送（おく）ります。',
'すずきさんは　青（あお）い　シャツを　きて　います。',
'かいぎの　場所（ばしょ）を　おしえて　ください。',
'わたしの　いえは　えきから　歩（ある）いて　５分（ふん）です。',
'ちかてつが　できて　便利（べんり）に　なりました。',
'とても　眠（ねむ）かったので、コーヒーを　飲（の）みました。',
'きょうは　雪（ゆき）が　ふって　います。',

'スーパーで　もらった　レシートを　見（み）ると、何（なに）を　買（か）ったか　わかります。',
'けさ　せんたくした　ふくが　まだ　かわいて　いません。',
'スミスさんは　いつも　ねっしんに　べんきょうして　います。',
'わたしは　にほんの　まんがに　きょうみが　あります。',
'わたしは　テニスの　ルールを　よく　しりません。',
'りょこうの　にもつは　もう　ようい　できましたか。',
'おとうとと　そうだんして　母（はは）に　あげる　プレゼントを　えらびました。',
'この　にもつを　あそこに　はこんで　ください。',
'この　きかいは　つかいかたを　まちがえると　とても　きけん　です。',
'入口（いりぐち）の　前（まえ）には　車（くるま）を　とめないで　ください。',

'でんしゃの　中（なか）で　さわがないで　ください。',
'バスが　しゅっぱつしました。',
'もっと　ていねいに　かいて　ください。',
'あには　えが　うまいです。',
'きのうは　ねぼうしました。',
'たなかさんは　先生（せんせい）に　ほめられました。',

// 'ここに　いらない　ものを　すてて　ください。',
'ともだちの　いえに　行（い）ったら　るすでした。',
'この　びょういんの　おいしゃさんは　とても　しんせつですよ。',
'この　くすりは　とても　にがいです。',
'おさらを　おとして、わって　しまいました。',
'じゅぎょうに　ちこくして　すみません。',

// 問題例
// 文字語彙
'あには　バスで　会社（かいしゃ）に　通（かよ）って　います。',
'わたしの　せんもんは　医学（いがく）です。',
//'ふねで　にもつを　送（おく）ります。',
'毎日（まいにち）　ラジオで　音楽（おんがく）を　聞（き）いています。',
//'スーパーで　もらった　レシートを　見（み）ると、何（なに）を　買（か）ったか　わかります。',
'えんりょ　しないで、どうぞ　たくさん　たべて　ください。',
'だいどころに　りょうりが　のこって　います。',
'パスポート　ばんごうを　しらせて　ください。',
'きのう、ともだちと　きょうとの　まちを　けんぶつしました。',
'ここに　あなたの　うちの　じゅうしょを　かいてください。',



],
h1:[
    'あ','い','う','え','お', 'か','き','く','け','こ', 'さ','し','す','せ','そ', 'た','ち','つ','て','と', 'な','に','ぬ','ね','の',
    'は','ひ','ふ','へ','ほ', 'ま','み','む','め','も', 'や','ゆ','よ',           'ら','り','る','れ','ろ', 'わ','を','ん',
    'が','ぎ','ぐ','げ','ご', 'ざ','じ','ず','ぜ','ぞ', 'だ','ぢ','づ','で','ど', 'ば','び','ぶ','べ','ぼ', 'ぱ','ぴ','ぷ','ぺ','ぽ',
    'ー','、','。'
],
h2:[
    'あ','い','う','え','お', 'か','き','く','け','こ', 'さ','し','す','せ','そ', 'た','ち','つ','て','と', 'な','に','ぬ','ね','の',
    'は','ひ','ふ','へ','ほ', 'ま','み','む','め','も', 'や','ゆ','よ',           'ら','り','る','れ','ろ', 'わ','を','ん',
    'が','ぎ','ぐ','げ','ご', 'ざ','じ','ず','ぜ','ぞ', 'だ','ぢ','づ','で','ど', 'ば','び','ぶ','べ','ぼ', 'ぱ','ぴ','ぷ','ぺ','ぽ',
    'きゃ','きゅ','きょ','ぎゃ','ぎゅ','ぎょ',
    'しゃ','しゅ','しょ','じゃ','じゅ','じょ',
    'ちゃ','ちゅ','ちょ','ぢゃ','ぢゅ','ぢょ',
    'にゃ','にゅ','にょ',
    'ひゃ','ひゅ','ひょ','びゃ','びゅ','びょ',
    'みゃ','みゅ','みょ',
    'りゃ','りゅ','りょ',
    'ファ','フィ','フェ','フォ',
    'トァ','トィ','トゥ','トェ','トォ',
    'ヴァ','ヴィ','ヴ','ヴェ','ヴォ',
    'ー','、','。'
],
a1:[
    // 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',',','.',';','/',

    'F','R','V','FRFVF','FRFRFVFVF',
    'J','U','M','JUJMJ','JUJUJMJMJ',
    'G','T','B','FGFTFBF','FGFGFTFTFBFBF',
    'H','Y','N','JHJYJNJ','JHJHJYJYJNJNJ',
    'D','E','C','DEDCD','DEDEDCDCD',
    'K','I','，','KIK，K','KIKIK，K，K',
    'S','W','X','SWSXS','SWSWSXSXS',
    'L','O','．','LOL．L','LOLOL．L．L',
    'A','Q','Z','AQAZA','AQAQAZAZA',
    '；','P','／','；P；／；','；P；P；／；／；',

    'ABCDEFG','HIJKLMNOP','QRST','UVWXYZ',


]
}


// 'ぁ','ぃ','ぅ','ぇ','ぉ', 'ゃ','ゅ','ょ','っ',
