export const gujaratiLettersWithIds = [
  // Vowels (14)
  { letter: 'અ', id: '10001' },
  { letter: 'આ', id: '10002' },
  { letter: 'ઇ', id: '10003' },
  { letter: 'ઈ', id: '10004' },
  { letter: 'ઉ', id: '10005' },
  { letter: 'ઊ', id: '10006' },
  { letter: 'ઋ', id: '10007' },
  { letter: 'ૠ', id: '10008' },   
  { letter: 'ઍ', id: '10009' },   
  
  { letter: 'એ', id: '10010' },
  { letter: 'ઐ', id: '10011' },
  { letter: 'ઑ', id: '10012' },   
  { letter: 'ઓ', id: '10013' },
  { letter: 'ઔ', id: '10014' },

  // Consonants (34)
  { letter: 'ક', id: '10015' },
  { letter: 'ખ', id: '10016' },
  { letter: 'ગ', id: '10017' },
  { letter: 'ઘ', id: '10018' },
  { letter: 'ઙ', id: '10019' },

  { letter: 'ચ', id: '10020' },
  { letter: 'છ', id: '10021' },
  { letter: 'જ', id: '10022' },
  { letter: 'ઝ', id: '10023' },
  { letter: 'ઞ', id: '10024' },
  { letter: 'ટ', id: '10025' },
  { letter: 'ઠ', id: '10026' },
  { letter: 'ડ', id: '10027' },
  { letter: 'ઢ', id: '10028' },
  { letter: 'ણ', id: '10029' },

  { letter: 'ત', id: '10030' },
  { letter: 'થ', id: '10031' },
  { letter: 'દ', id: '10032' },
  { letter: 'ધ', id: '10033' },
  { letter: 'ન', id: '10034' },
  { letter: 'પ', id: '10035' },
  { letter: 'ફ', id: '10036' },
  { letter: 'બ', id: '10037' },
  { letter: 'ભ', id: '10038' },
  { letter: 'મ', id: '10039' },

  { letter: 'ય', id: '10040' },
  { letter: 'ર', id: '10041' },
  { letter: 'લ', id: '10042' },
  { letter: 'ળ', id: '10043' },
  { letter: 'વ', id: '10044' },
  { letter: 'શ', id: '10045' },
  { letter: 'ષ', id: '10046' },
  { letter: 'સ', id: '10047' },
  { letter: 'હ', id: '10048' }
];

// Optional quick lookup map
export const letterIdMap = gujaratiLettersWithIds.reduce((map, obj) => {
  map[obj.letter] = obj.id;
  return map;
}, {});

// Extract vowels and consonants by their position
export const vowels = gujaratiLettersWithIds.slice(0, 14).map(obj => obj.letter);
export const consonants = gujaratiLettersWithIds.slice(14).map(obj => obj.letter);