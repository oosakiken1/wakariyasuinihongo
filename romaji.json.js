const ROMAJI = new Map ([
    ['1',{fix:'１',unfix:''}],
    ['2',{fix:'２',unfix:''}],
    ['3',{fix:'３',unfix:''}],
    ['4',{fix:'４',unfix:''}],
    ['5',{fix:'５',unfix:''}],
    ['6',{fix:'６',unfix:''}],
    ['7',{fix:'７',unfix:''}],
    ['8',{fix:'８',unfix:''}],
    ['9',{fix:'９',unfix:''}],
    ['0',{fix:'０',unfix:''}],
    [',',{fix:'、',unfix:''}],
    ['.',{fix:'。',unfix:''}],
    ['-',{fix:'ー',unfix:''}],
    ['~',{fix:'～',unfix:''}],
    ['?',{fix:'？',unfix:''}],
    ['!',{fix:'！',unfix:''}],
    ['/',{fix:'・',unfix:''}],
    ['[',{fix:'「',unfix:''}],
    [']',{fix:'」',unfix:''}],
    ['a',{fix:'あ',unfix:''}],
    ['i',{fix:'い',unfix:''}],
    ['u',{fix:'う',unfix:''}],
    ['e',{fix:'え',unfix:''}],
    ['o',{fix:'お',unfix:''}],
    ['ba',{fix:'ば',unfix:''}],
    ['bi',{fix:'び',unfix:''}],
    ['bu',{fix:'ぶ',unfix:''}],
    ['be',{fix:'べ',unfix:''}],
    ['bo',{fix:'ぼ',unfix:''}],
    ['bya',{fix:'びゃ',unfix:''}],
    ['byi',{fix:'びぃ',unfix:''}],
    ['byu',{fix:'びゅ',unfix:''}],
    ['bye',{fix:'びぇ',unfix:''}],
    ['byo',{fix:'びょ',unfix:''}],
    ['bb',{fix:'っ',unfix:'b'}],
    ['ca',{fix:'か',unfix:''}],
    ['ci',{fix:'し',unfix:''}],
    ['cu',{fix:'く',unfix:''}],
    ['ce',{fix:'せ',unfix:''}],
    ['co',{fix:'こ',unfix:''}],
    ['cha',{fix:'ちゃ',unfix:''}],
    ['chi',{fix:'ち',unfix:''}],
    ['chu',{fix:'ちゅ',unfix:''}],
    ['che',{fix:'ちぇ',unfix:''}],
    ['cho',{fix:'ちょ',unfix:''}],
    ['cya',{fix:'ちゃ',unfix:''}],
    ['cyi',{fix:'ちぃ',unfix:''}],
    ['cyu',{fix:'ちゅ',unfix:''}],
    ['cye',{fix:'ちぇ',unfix:''}],
    ['cyo',{fix:'ちょ',unfix:''}],
    ['cc',{fix:'っ',unfix:'c'}],
    ['da',{fix:'だ',unfix:''}],
    ['di',{fix:'ぢ',unfix:''}],
    ['du',{fix:'づ',unfix:''}],
    ['de',{fix:'で',unfix:''}],
    ['do',{fix:'ど',unfix:''}],
    ['dha',{fix:'でゃ',unfix:''}],
    ['dhi',{fix:'でぃ',unfix:''}],
    ['dhu',{fix:'でゅ',unfix:''}],
    ['dhe',{fix:'でぇ',unfix:''}],
    ['dho',{fix:'でょ',unfix:''}],
    ['dwa',{fix:'どぁ',unfix:''}],
    ['dwi',{fix:'どぃ',unfix:''}],
    ['dwu',{fix:'どぅ',unfix:''}],
    ['dwe',{fix:'どぇ',unfix:''}],
    ['dwo',{fix:'どぉ',unfix:''}],
    ['dya',{fix:'ぢゃ',unfix:''}],
    ['dyi',{fix:'ぢぃ',unfix:''}],
    ['dyu',{fix:'ぢゅ',unfix:''}],
    ['dye',{fix:'ぢぇ',unfix:''}],
    ['dyo',{fix:'ぢょ',unfix:''}],
    ['dd',{fix:'っ',unfix:'d'}],
    ['fa',{fix:'ふぁ',unfix:''}],
    ['fi',{fix:'ふぃ',unfix:''}],
    ['fu',{fix:'ふ',unfix:''}],
    ['fe',{fix:'ふぇ',unfix:''}],
    ['fo',{fix:'ふぉ',unfix:''}],
    ['fya',{fix:'ふゃ',unfix:''}],
    ['fyi',{fix:'ふぃ',unfix:''}],
    ['fyu',{fix:'ふゅ',unfix:''}],
    ['fye',{fix:'ふぇ',unfix:''}],
    ['fyo',{fix:'ふょ',unfix:''}],
    ['ff',{fix:'っ',unfix:'f'}],
    ['ga',{fix:'が',unfix:''}],
    ['gi',{fix:'ぎ',unfix:''}],
    ['gu',{fix:'ぐ',unfix:''}],
    ['ge',{fix:'げ',unfix:''}],
    ['go',{fix:'ご',unfix:''}],
    ['gwa',{fix:'ぐぁ',unfix:''}],
    ['gwi',{fix:'ぐぃ',unfix:''}],
    ['gwu',{fix:'ぐぅ',unfix:''}],
    ['gwe',{fix:'ぐぇ',unfix:''}],
    ['gwo',{fix:'ぐぉ',unfix:''}],
    ['gya',{fix:'ぎゃ',unfix:''}],
    ['gyi',{fix:'ぎぃ',unfix:''}],
    ['gyu',{fix:'ぎゅ',unfix:''}],
    ['gye',{fix:'ぎぇ',unfix:''}],
    ['gyo',{fix:'ぎょ',unfix:''}],
    ['gg',{fix:'っ',unfix:'g'}],
    ['ha',{fix:'は',unfix:''}],
    ['hi',{fix:'ひ',unfix:''}],
    ['hu',{fix:'ふ',unfix:''}],
    ['he',{fix:'へ',unfix:''}],
    ['ho',{fix:'ほ',unfix:''}],
    ['hya',{fix:'ひゃ',unfix:''}],
    ['hyi',{fix:'ひぃ',unfix:''}],
    ['hyu',{fix:'ひゅ',unfix:''}],
    ['hye',{fix:'ひぇ',unfix:''}],
    ['hyo',{fix:'ひょ',unfix:''}],
    ['hh',{fix:'っ',unfix:'h'}],
    ['ja',{fix:'じゃ',unfix:''}],
    ['ji',{fix:'じ',unfix:''}],
    ['ju',{fix:'じゅ',unfix:''}],
    ['je',{fix:'じぇ',unfix:''}],
    ['jo',{fix:'じょ',unfix:''}],
    ['jya',{fix:'じゃ',unfix:''}],
    ['jyi',{fix:'じぃ',unfix:''}],
    ['jyu',{fix:'じゅ',unfix:''}],
    ['jye',{fix:'じぇ',unfix:''}],
    ['jyo',{fix:'じょ',unfix:''}],
    ['jj',{fix:'っ',unfix:'j'}],
    ['ka',{fix:'か',unfix:''}],
    ['ki',{fix:'き',unfix:''}],
    ['ku',{fix:'く',unfix:''}],
    ['ke',{fix:'け',unfix:''}],
    ['ko',{fix:'こ',unfix:''}],
    ['kwa',{fix:'くぁ',unfix:''}],
    ['kya',{fix:'きゃ',unfix:''}],
    ['kyi',{fix:'きぃ',unfix:''}],
    ['kyu',{fix:'きゅ',unfix:''}],
    ['kye',{fix:'きぇ',unfix:''}],
    ['kyo',{fix:'きょ',unfix:''}],
    ['kk',{fix:'っ',unfix:'k'}],
    ['la',{fix:'ぁ',unfix:''}],
    ['li',{fix:'ぃ',unfix:''}],
    ['lu',{fix:'ぅ',unfix:''}],
    ['le',{fix:'ぇ',unfix:''}],
    ['lo',{fix:'ぉ',unfix:''}],
    ['ltu',{fix:'っ',unfix:''}],
    ['ltsu',{fix:'っ',unfix:''}],
    ['lya',{fix:'ゃ',unfix:''}],
    ['lyi',{fix:'ぃ',unfix:''}],
    ['lyu',{fix:'ゅ',unfix:''}],
    ['lye',{fix:'ぇ',unfix:''}],
    ['lyo',{fix:'ょ',unfix:''}],
    ['ll',{fix:'っ',unfix:'l'}],
    ['ma',{fix:'ま',unfix:''}],
    ['mi',{fix:'み',unfix:''}],
    ['mu',{fix:'む',unfix:''}],
    ['me',{fix:'め',unfix:''}],
    ['mo',{fix:'も',unfix:''}],
    ['mya',{fix:'みゃ',unfix:''}],
    ['myi',{fix:'みぃ',unfix:''}],
    ['myu',{fix:'みゅ',unfix:''}],
    ['mye',{fix:'みぇ',unfix:''}],
    ['myo',{fix:'みょ',unfix:''}],
    ['mm',{fix:'っ',unfix:'m'}],
    ['pa',{fix:'ぱ',unfix:''}],
    ['pi',{fix:'ぴ',unfix:''}],
    ['pu',{fix:'ぷ',unfix:''}],
    ['pe',{fix:'ぺ',unfix:''}],
    ['po',{fix:'ぽ',unfix:''}],
    ['pya',{fix:'ぴゃ',unfix:''}],
    ['pyi',{fix:'ぴぃ',unfix:''}],
    ['pyu',{fix:'ぴゅ',unfix:''}],
    ['pye',{fix:'ぴぇ',unfix:''}],
    ['pyo',{fix:'ぴょ',unfix:''}],
    ['pp',{fix:'っ',unfix:'p'}],
    ['qa',{fix:'くぁ',unfix:''}],
    ['qi',{fix:'くぃ',unfix:''}],
    ['qu',{fix:'く',unfix:''}],
    ['qe',{fix:'くぇ',unfix:''}],
    ['qo',{fix:'くぉ',unfix:''}],
    ['qwa',{fix:'くぁ',unfix:''}],
    ['qwi',{fix:'くぃ',unfix:''}],
    ['qwu',{fix:'くぅ',unfix:''}],
    ['qwe',{fix:'くぇ',unfix:''}],
    ['qwo',{fix:'くぉ',unfix:''}],
    ['qya',{fix:'くゃ',unfix:''}],
    ['qyi',{fix:'くぃ',unfix:''}],
    ['qyu',{fix:'くゅ',unfix:''}],
    ['qye',{fix:'くぇ',unfix:''}],
    ['qyo',{fix:'くょ',unfix:''}],
    ['qq',{fix:'っ',unfix:'q'}],
    ['ra',{fix:'ら',unfix:''}],
    ['ri',{fix:'り',unfix:''}],
    ['ru',{fix:'る',unfix:''}],
    ['re',{fix:'れ',unfix:''}],
    ['ro',{fix:'ろ',unfix:''}],
    ['rya',{fix:'りゃ',unfix:''}],
    ['ryi',{fix:'りぃ',unfix:''}],
    ['ryu',{fix:'りゅ',unfix:''}],
    ['rye',{fix:'りぇ',unfix:''}],
    ['ryo',{fix:'りょ',unfix:''}],
    ['rr',{fix:'っ',unfix:'r'}],
    ['sa',{fix:'さ',unfix:''}],
    ['si',{fix:'し',unfix:''}],
    ['su',{fix:'す',unfix:''}],
    ['se',{fix:'せ',unfix:''}],
    ['so',{fix:'そ',unfix:''}],
    ['sha',{fix:'しゃ',unfix:''}],
    ['shi',{fix:'し',unfix:''}],
    ['shu',{fix:'しゅ',unfix:''}],
    ['she',{fix:'しぇ',unfix:''}],
    ['sjo',{fix:'しょ',unfix:''}],
    ['swa',{fix:'すぁ',unfix:''}],
    ['swi',{fix:'すぃ',unfix:''}],
    ['swu',{fix:'すぅ',unfix:''}],
    ['swe',{fix:'すぇ',unfix:''}],
    ['swo',{fix:'すぉ',unfix:''}],
    ['sya',{fix:'しゃ',unfix:''}],
    ['syi',{fix:'しぃ',unfix:''}],
    ['syu',{fix:'しゅ',unfix:''}],
    ['sye',{fix:'しぇ',unfix:''}],
    ['syo',{fix:'しょ',unfix:''}],
    ['ss',{fix:'っ',unfix:'s'}],
    ['ta',{fix:'た',unfix:''}],
    ['ti',{fix:'ち',unfix:''}],
    ['tu',{fix:'つ',unfix:''}],
    ['te',{fix:'て',unfix:''}],
    ['to',{fix:'と',unfix:''}],
    ['tha',{fix:'てゃ',unfix:''}],
    ['thi',{fix:'てぃ',unfix:''}],
    ['thu',{fix:'てゅ',unfix:''}],
    ['the',{fix:'てぇ',unfix:''}],
    ['tho',{fix:'てょ',unfix:''}],
    ['tsa',{fix:'つぁ',unfix:''}],
    ['tsi',{fix:'つぃ',unfix:''}],
    ['tsu',{fix:'つ',unfix:''}],
    ['tse',{fix:'つぇ',unfix:''}],
    ['tso',{fix:'つぉ',unfix:''}],
    ['twa',{fix:'とぁ',unfix:''}],
    ['twi',{fix:'とぃ',unfix:''}],
    ['twu',{fix:'とぅ',unfix:''}],
    ['twe',{fix:'とぇ',unfix:''}],
    ['two',{fix:'とぉ',unfix:''}],
    ['tya',{fix:'ちゃ',unfix:''}],
    ['tyi',{fix:'ちぃ',unfix:''}],
    ['tyu',{fix:'ちゅ',unfix:''}],
    ['tye',{fix:'ちぇ',unfix:''}],
    ['tyo',{fix:'ちょ',unfix:''}],
    ['tt',{fix:'っ',unfix:'t'}],
    ['va',{fix:'ゔぁ',unfix:''}],
    ['vi',{fix:'ゔぃ',unfix:''}],
    ['vu',{fix:'ゔ',unfix:''}],
    ['ve',{fix:'ゔぇ',unfix:''}],
    ['vo',{fix:'ゔぉ',unfix:''}],
    ['vya',{fix:'ゔゃ',unfix:''}],
    ['vyi',{fix:'ゔぃ',unfix:''}],
    ['vyu',{fix:'ゔゅ',unfix:''}],
    ['vye',{fix:'ゔぇ',unfix:''}],
    ['vyo',{fix:'ゔょ',unfix:''}],
    ['vv',{fix:'っ',unfix:'v'}],
    ['wa',{fix:'わ',unfix:''}],
    ['wi',{fix:'うぃ',unfix:''}],
    ['wu',{fix:'う',unfix:''}],
    ['we',{fix:'うぇ',unfix:''}],
    ['wo',{fix:'を',unfix:''}],
    ['wha',{fix:'うぁ',unfix:''}],
    ['whi',{fix:'うぃ',unfix:''}],
    ['whu',{fix:'う',unfix:''}],
    ['whe',{fix:'うぇ',unfix:''}],
    ['who',{fix:'うぉ',unfix:''}],
    ['wyi',{fix:'ゐ',unfix:''}],
    ['wye',{fix:'ゑ',unfix:''}],
    ['ww',{fix:'っ',unfix:'w'}],
    ['xa',{fix:'ぁ',unfix:''}],
    ['xi',{fix:'ぃ',unfix:''}],
    ['xu',{fix:'ぅ',unfix:''}],
    ['xe',{fix:'ぇ',unfix:''}],
    ['xo',{fix:'ぉ',unfix:''}],
    ['xn',{fix:'ん',unfix:''}],
    ['xtu',{fix:'っ',unfix:''}],
    ['xtsu',{fix:'っ',unfix:''}],
    ['xya',{fix:'ゃ',unfix:''}],
    ['xyi',{fix:'ぃ',unfix:''}],
    ['xyu',{fix:'ゅ',unfix:''}],
    ['xye',{fix:'ぇ',unfix:''}],
    ['xyo',{fix:'ょ',unfix:''}],
    ['xx',{fix:'っ',unfix:'x'}],
    ['ya',{fix:'や',unfix:''}],
    ['yi',{fix:'い',unfix:''}],
    ['yu',{fix:'ゆ',unfix:''}],
    ['ye',{fix:'いぇ',unfix:''}],
    ['yo',{fix:'よ',unfix:''}],
    ['yy',{fix:'っ',unfix:'y'}],
    ['za',{fix:'ざ',unfix:''}],
    ['zi',{fix:'じ',unfix:''}],
    ['zu',{fix:'ず',unfix:''}],
    ['ze',{fix:'ぜ',unfix:''}],
    ['zo',{fix:'ぞ',unfix:''}],
    ['zya',{fix:'じゃ',unfix:''}],
    ['zyi',{fix:'じぃ',unfix:''}],
    ['zyu',{fix:'じゅ',unfix:''}],
    ['zye',{fix:'じぇ',unfix:''}],
    ['zyo',{fix:'じょ',unfix:''}],
    ['zz',{fix:'っ',unfix:'z'}],
    ['na',{fix:'な',unfix:''}],
    ['ni',{fix:'に',unfix:''}],
    ['nu',{fix:'ぬ',unfix:''}],
    ['ne',{fix:'ね',unfix:''}],
    ['no',{fix:'の',unfix:''}],
    ['nn',{fix:'ん',unfix:''}],
    ['nya',{fix:'にゃ',unfix:''}],
    ['nyi',{fix:'にぃ',unfix:''}],
    ['nyu',{fix:'にゅ',unfix:''}],
    ['nye',{fix:'にぇ',unfix:''}],
    ['nyo',{fix:'にょ',unfix:''}],
])
