const HANGUL = new Map ([
    ['q',{fix:'ㅂ',fnum:7}],
    ['Q',{fix:'ㅃ',fnum:8}],
    ['w',{fix:'ㅈ',fnum:12}],
    ['W',{fix:'ㅉ',fnum:13}],
    ['e',{fix:'ㄷ',fnum:3}],
    ['E',{fix:'ㄸ',fnum:4}],
    ['r',{fix:'ㄱ',fnum:0}],
    ['R',{fix:'ㄲ',fnum:1}],
    ['t',{fix:'ㅅ',fnum:9}],
    ['T',{fix:'ㅆ',fnum:10}],
    ['a',{fix:'ㅁ',fnum:6}],
    ['s',{fix:'ㄴ',fnum:2}],
    ['d',{fix:'ㅇ',fnum:11}],
    ['f',{fix:'ㄹ',fnum:5}],
    ['g',{fix:'ㅎ',fnum:18}],
    ['z',{fix:'ㅋ',fnum:15}],
    ['x',{fix:'ㅌ',fnum:16}],
    ['c',{fix:'ㅊ',fnum:14}],
    ['v',{fix:'ㅍ',fnum:17}],

    ['y',{fix:'ㅛ',unfix:''}],
    ['u',{fix:'ㅕ',unfix:''}],
    ['i',{fix:'ㅑ',unfix:''}],
    ['o',{fix:'ㅐ',unfix:''}],
    ['O',{fix:'ㅒ',unfix:''}],
    ['p',{fix:'ㅔ',unfix:''}],
    ['P',{fix:'ㅖ',unfix:''}],
    ['h',{fix:'ㅗ',unfix:''}],
    ['j',{fix:'ㅓ',unfix:''}],
    ['k',{fix:'ㅏ',unfix:''}],
    ['l',{fix:'ㅣ',unfix:''}],
    ['b',{fix:'ㅠ',unfix:''}],
    ['n',{fix:'ㅜ',unfix:''}],
    ['m',{fix:'ㅡ',unfix:''}],
    ['hk',{fix:'ㅘ',unfix:''}],
    ['ho',{fix:'ㅙ',unfix:''}],
    ['hl',{fix:'ㅚ',unfix:''}],
    ['nj',{fix:'ㅝ',unfix:''}],
    ['np',{fix:'ㅞ',unfix:''}],
    ['nl',{fix:'ㅟ',unfix:''}],
    ['ml',{fix:'ㅢ',unfix:''}],

])

// 'ㄱ','ㄴ','ㄷ','ㄹ','ㅁ','ㅂ','ㅅ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ','ㄲ','ㄸ','ㅃ','ㅆ','ㅉ','ㅏ','ㅑ','ㅓ','ㅕ','ㅗ','ㅛ','ㅜ','ㅠ','ㅡ','ㅣ','ㅐ','ㅒ','ㅔ','ㅖ','ㅘ','ㅙ','ㅚ','ㅝ','ㅞ','ㅟ','ㅢ'
// ㄺ, ㄻ, ㄿ,ㄳ, ㄵ, ㄶ, ㅀ, ㄾ, ㅄ, ㄽ, ㄼ 2重パッチム

// 