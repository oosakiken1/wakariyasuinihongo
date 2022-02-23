const mondaiTexts = {
1:[
    '彼（かれ）は今（いま）、新薬（しんやく）の研究開発（けんきゅうかいはつ）に挑（いど）んでいる。',
    '住民（じゅうみん）が建設会社（けんせつがいしゃ）を相手（あいて）に、訴訟（そしょう）を起（お）こした。'
],
2:[
    '推測（すいそく）/私（わたし）の主張（しゅちょう）は単（たん）なる推測（すいそく）ではなく、確（かく）たる証拠（しょうこ）に基（もと）づいている。',
    '原因（げんいん）/事故（じこ）の原因（げんいん）は、機械（きかい）の誤動作（ごどうさ）にあると考（かんが）えられている。',
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
    '利益（りえき）/この値段（ねだん）で打（う）ったら、店（みせ）の利益（りえき）はほとんどない。',
    'かなう/自分（じぶん）の店（みせ）を持（も）つという夢（ゆめ）が、とうとうかなった。'
],
3:[
// q1
    '開場（かいじょう）には大勢（おおぜい）の観客（かんきゃく）がいた。',
    '田村（たむら）さんが払（はら）ってくれました。',
    'ホテルには３時（じ）ごろ到着（とうちゃく）します。',
    '山下（やました）さんが説明（せつめい）を加（くわ）えました。',
    '今（いま）から訓練（くんれん）を行（おこな）います。',
    'この豆（まめ）はスープに使（つか）うといいですよ。',
    '社会（しゃかい）には共通（きょうつう）のルールがあります。',
    '来年（らいねん）から税金（ぜいきん）が上（あ）がるそうです。',
// q2
    'しばらく、きれいな波（なみ）を見（み）ていた。',
    'もう少（すこ）し早（はや）く歩（ある）きましょう。',
    'わたしは今（いま）の生活（せいかつ）に満足（まんぞく）している。',
    '父（ちち）は腕（うで）を組（く）んで何（なに）か考（かんが）えていた。',
    'この国（くに）は主（おも）に米（こめ）を輸出（ゆしゅつ）している。',
    '赤（あか）ちゃんが母親（ははおや）に抱（だ）かれて眠（ねむ）っています。',

// q3
    'この紙（かみ）は、ぬれても破（やぶ）れにくいという特長（とくちょう）があります。',
    '佐藤（さとう）さんには、おとなしいイメージがあるが、本当（ほんとう）は活動的（かつどうてき）な人（ひと）らしい。',
    '正月（しょうがつ）には親戚（しんせき）が集（あつ）まって、みんなでテーブルを囲（かこ）み、楽（たの）しく食事（しょくじ）をした。',
    'このレストランの料理（りょうり）はおいしくないので、店内（てんない）はいつもがらがらだ。',
    '高田（たかだ）さんが引（ひ）っ越（こ）すといううわさを聞（き）いたが、本当（ほんとう）かどうか気（き）になる。',
    '父（ちち）から借（か）りた本（ほん）をなくしてしまったので謝（あやま）ったら、父（ちち）はすぐに許（ゆる）してくれた。',
    'パソコンの前（まえ）でずっと同（おな）じ姿勢（しせい）でいたので、体（からだ）が痛（いた）くなった。',
    '申込書（もうしこみしょ）に間違（まちが）いがないか、よくたしかめてから受付（うけつけ）に出（だ）した。',
    'わたしのふるさとは農業（のうぎょう）が盛（さか）んで、米（こめ）や野菜（やさい）をたくさん作（つく）っています。',
    '水（みず）に浮（う）かんでいる木（こ）の葉（は）が、しばらくすると水（みず）の中（なか）にしずんでしまった。',
    'この話（はなし）は誰（だれ）にも言（い）わずに、ずっと内緒（ないしょ）にしていた。',
// q4
    '水（みず）の表面（ひょうめん）がかがやいています。',
    'その知（し）らせを聞（き）いたとき、わたしはとてもがっかりした。',
    '留学（りゅうがく）生活（せいかつ）に不安（ふあん）は当然（とうぜん）ありました。',
    'パーティーの料理（りょうり）があまりました。',
    'ここは横断禁止（おうだんきんし）です。',
// b1
    '彼（かれ）は小説家（しょうせつか）として有名（ゆうめい）になったが、普段（ふだん）は小（ちい）さな病院（びょういん）で働（はたら）く医者（いしゃ）だ。',
    '先週（せんしゅう）、会社（かいしゃ）の面接（めんせつ）で「もし自分（じぶん）を色（いろ）で表（あらわ）すとしたら、何色（なにいろ）ですか。」と聞（き）かれ、オレンジ色（いろ）と答（こた）えた。\n「元気（げんき）」や「健康（けんこう）」のイメージがあるからだ。',
    '昨日（きのう）の夜（よる）、寝（ね）る前（まえ）にどうしてもヨーグルトが食（た）べたくなって、夜中（よなか）なのにコンビニに買（か）いに行（い）ってしまった。',
    'このケーキは材料（ざいりょう）を混（ま）ぜて焼（や）くだけだから、誰（だれ）でも失敗（しっぱい）せずにおいしく作（つく）れる。',
    '私（わたし）の町（まち）では毎年（まいとし）８月（がつ）最後（さいご）の日曜日（にちようび）に夏祭（なつまつ）りが行（おこな）われます。',
    'すみません。この靴（くつ）のもう一（ひと）つ大（おお）きいサイズはありますか。\nあ、はい、確認（かくにん）しますので、少々（しょうしょう）お待（ま）ちください。',
    'はい、Ｘ建設（けんせつ）営業部（えいぎょうぶ）です。\nあ、私（わたし）、ＡＢＣ銀行（ぎんこう）の中田（なかた）と申（もう）しますが、山石（やまいし）さんをお願（ねが）いします。',
    '息子（むすこ）が通（かよ）う高校（こうこう）では、お昼（ひる）にパンや飲（の）み物（もの）が買（か）える場所（ばしょ）もあるが、\n基本的（きほんてき）には全員（ぜんいん）がお弁当（べんとう）を持（も）っていくことになっている。',
    '昼寝をするのは気持ちがいいが、夜寝られないと困るので、いつも１５分ぐらいで起きる。',
    'Ａ市は、保育園を利用したくても利用できない人がいることが問題になっている。',
    'ねえ、ちょっと買い物に行ってくるから、今夜行くレストランの予約をお願いできる？\nうん、わかった。予約しておくよ。１９時からで大丈夫？\nええ、ありがとう。',
    'ねえ、このトマト、もう食べられる？赤くなっているよ。\nうん。そろそろ食べてもよさそうだね。',
    '山下さん、来ませんね。携帯に電話をしても出ないし、どうしますか。\nこれ以上待つと私たちも間に合わないから、先にいってしまいましょうか。\nそうですね。いきますか。',

// b2
    'この写真の鳥はとても珍しくて、この鳥の研究をしている専門家でもなかなか見る機会がないそうだ。',
    '春から大学生になる娘には、勉強以外にも大学時代にしかできない経験をいろいろしてほしい。',
    '土曜日は買い物をしたり友人と食事をしたりし、日曜日はどこにも出かけずに家で過ごすというのが私の好きな週末の過ごし方だ。',
    'すみません。15分ぐらい前に案内をお願いして、しばらうここで待てって言われたから待っているんですけど。まだですか。\n大変申し訳ありません。',
    '歴史を勉強すればするほど、もっと学びたいと思うようになって、歴史学科への進学を決めた。',
],
5:[
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
4:[
    'あ','い','う','え','お', 'か','き','く','け','こ', 'さ','し','す','せ','そ', 'た','ち','つ','て','と', 'な','に','ぬ','ね','の',
    'は','ひ','ふ','へ','ほ', 'ま','み','む','め','も', 'や','ゆ','よ',           'ら','り','る','れ','ろ', 'わ','を','ん',
    'が','ぎ','ぐ','げ','ご', 'ざ','じ','ず','ぜ','ぞ', 'だ','ぢ','づ','で','ど', 'ば','び','ぶ','べ','ぼ', 'ぱ','ぴ','ぷ','ぺ','ぽ',
    'ー','、','。'
],
6:[
    'んっさんっしゃんっってんちゃん'
]
}


// 'ぁ','ぃ','ぅ','ぇ','ぉ', 'ゃ','ゅ','ょ','っ',
