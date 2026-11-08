// 줄넘기 레이스 — 동물 픽셀 캐릭터 10종
// 오른쪽을 보고 달리는 모습. 외곽선은 코드로 자동 생성.
(function () {
  const OUTLINE = '#2b2020';
  const K = '#2b2020';

  const ANIMALS = {
    rabbit: {
      name: '토끼',
      pal: { w: '#f7f4ef', p: '#f4a3b8', k: K },
      rows: [
        '..........ww.ww.',
        '..........wp.wp.',
        '..........wp.wp.',
        '..........wwwww.',
        '.........wwwwkww',
        '.........wwwwwwp',
        '...wwwwwwwwwww..',
        '.wwwwwwwwwwww...',
        'wwwwwwwwwwwww...',
        'wwwwwwwwwwwww...',
        '.wwwwwwwwwww....',
        '..wwwwwwwwww....',
      ],
      legs: { c: 'w', back: 3, front: 10, len: 2 },
    },
    turtle: {
      name: '거북이',
      pal: { h: '#c98a3c', s: '#4f8a3a', g: '#8cc95a', k: K },
      rows: [
        '....hhhhhh......',
        '...hsshsshh.....',
        '..hssssssssh.gg.',
        '.hsshssssshshggg',
        '.hsssssssssshgkg',
        'hhhhhhhhhhhhhggg',
        '.gggggggggggg...',
      ],
      legs: { c: 'g', back: 2, front: 10, len: 2 },
    },
    snail: {
      name: '달팽이',
      pal: { o: '#f2a33a', b: '#b8652a', y: '#f3dfa8', k: K },
      rows: [
        '.............k.k',
        '....oooo.....y.y',
        '..oobbbboo...y.y',
        '.obooooobo..yyyy',
        '.oboobbobo..ykyy',
        'oboobobbobo.yyyy',
        'obooboobbo..yyy.',
        'obooobbbo..yyy..',
        '.obooooo..yyyy..',
        'yyoooooyyyyyyy..',
        'yyyyyyyyyyyyyy..',
      ],
      legs: null,
    },
    dog: {
      name: '강아지',
      pal: { b: '#c98a52', d: '#7a4a2a', w: '#f6ead6', k: K },
      rows: [
        '..........dd....',
        '.........dbbbb..',
        '.........dbbkbb.',
        '.........dbbbwwk',
        '..b......dbbwww.',
        '..bb....bbbbbb..',
        '...bbbbbbbbbb...',
        '...bbbbbbbbbb...',
        '...bwwwwwwwbb...',
        '....bbbbbbbb....',
      ],
      legs: { c: 'b', back: 4, front: 10, len: 2 },
    },
    cat: {
      name: '고양이',
      pal: { o: '#f39a3b', s: '#c96a1e', w: '#fff5e6', k: K, p: '#f48fa8' },
      rows: [
        '..........o...o.',
        '..........oo.oo.',
        '..........ooooo.',
        '..........okoko.',
        '..o.......owpwo.',
        '...o......ooooo.',
        '...o.ooooooooo..',
        '....ososososoo..',
        '....oooooooooo..',
        '....owwwwwwwwo..',
        '.....oooooooo...',
      ],
      legs: { c: 'o', back: 5, front: 11, len: 2 },
    },
    penguin: {
      name: '펭귄',
      pal: { k: '#262a36', w: '#f7f7f7', y: '#f6a623' },
      rows: [
        '......kkkk......',
        '.....kkkkkk.....',
        '.....kkkkwkk....',
        '.....kkkkkkyy...',
        '....kkkwwwkk....',
        '...kkkwwwwwkk...',
        '...kkwwwwwwkk...',
        '..kkkwwwwwwkk...',
        '...kkwwwwwwkk...',
        '...kkwwwwwwkk...',
        '....kkwwwwkk....',
        '.....kkkkkk.....',
      ],
      legs: { c: 'y', back: 5, front: 8, len: 1 },
    },
    lion: {
      name: '사자',
      pal: { m: '#c8641e', y: '#f2c14e', k: K, n: '#5a3a2a' },
      rows: [
        '.........mmmm...',
        '........mmmmmm..',
        '.......mmyyyymm.',
        '.......mmyykyym.',
        '.......mmyyyyyn.',
        '........mmyyyy..',
        '.my......mmmm...',
        '..y.yyyyyyyyy...',
        '...yyyyyyyyyy...',
        '...yyyyyyyyyy...',
        '....yyyyyyyy....',
      ],
      legs: { c: 'y', back: 4, front: 10, len: 2 },
    },
    panda: {
      name: '판다',
      pal: { w: '#fafafa', k: '#262626' },
      rows: [
        '........kk..kk..',
        '.......wwwwwwww.',
        '.......wwwwwwwww',
        '.......wwkkwwwww',
        '.......wwkkwwwwk',
        '........wwwwwww.',
        '..wwwwwkkkkkk...',
        '.wwwwwwkkkkkk...',
        '.wwwwwwwkkkkw...',
        '.wwwwwwwwwwww...',
        '..wwwwwwwwwww...',
      ],
      legs: { c: 'k', back: 3, front: 10, len: 2 },
    },
    frog: {
      name: '개구리',
      pal: { g: '#5cbf4a', l: '#c8eb8a', w: '#ffffff', k: K, r: '#d9534f' },
      rows: [
        '..........www...',
        '.........wwkw...',
        '.........gwwwg..',
        '...ggggggggggggg',
        '..gggggggggggggr',
        '..gggggggggggg..',
        '.gglllllllllgg..',
        '.ggllllllllgg...',
        '..ggggggggggg...',
      ],
      legs: { c: 'g', back: 2, front: 10, len: 2 },
    },
    cheetah: {
      name: '치타',
      pal: { y: '#f1b84a', s: '#6b4320', w: '#fff3dc', k: K },
      rows: [
        '...........yy...',
        '..........yyyyy.',
        '..........ykyyy.',
        '..........ysyyyk',
        '...........yyww.',
        '..s.......yyy...',
        '..s.yysyyyyyyy..',
        '...yyyyysyyysy..',
        '...ysyyyyyyyyy..',
        '....yywwwwwyy...',
      ],
      legs: { c: 'y', back: 4, front: 11, len: 3 },
    },
  };

  const ORDER = ['rabbit', 'turtle', 'snail', 'dog', 'cat', 'penguin', 'lion', 'panda', 'frog', 'cheetah'];
  const cache = {};

  function buildGrid(a, frame) {
    const W = 16;
    const grid = a.rows.map(r => {
      const row = [];
      for (let x = 0; x < W; x++) {
        const ch = r[x] || '.';
        row.push(ch === '.' ? null : a.pal[ch]);
      }
      return row;
    });
    if (a.legs) {
      const { c, back, front, len } = a.legs;
      const bx = frame === 0 ? back - 1 : back + 1;
      const fx = frame === 0 ? front + 1 : front - 1;
      for (let i = 0; i < len; i++) {
        const row = new Array(W).fill(null);
        [bx, bx + 1, fx, fx + 1].forEach(x => { if (x >= 0 && x < W) row[x] = a.pal[c]; });
        grid.push(row);
      }
    } else if (frame === 1) {
      // 다리 없는 캐릭터(달팽이): 몸을 살짝 늘였다 줄였다
      const last = grid[grid.length - 1].slice();
      grid.splice(grid.length - 1, 0, last);
      grid.shift();
    }
    return grid;
  }

  // 외곽선 포함 1배율 캔버스
  function frameCanvas(key, frame) {
    const id = key + ':' + frame;
    if (cache[id]) return cache[id];
    const a = ANIMALS[key];
    const g = buildGrid(a, frame);
    const H = g.length, W = 16;
    const cv = document.createElement('canvas');
    cv.width = W + 2; cv.height = H + 2;
    const ctx = cv.getContext('2d');
    const filled = (x, y) => y >= 0 && y < H && x >= 0 && x < W && g[y][x];
    ctx.fillStyle = OUTLINE;
    for (let y = -1; y <= H; y++) for (let x = -1; x <= W; x++) {
      if (filled(x, y)) continue;
      if (filled(x - 1, y) || filled(x + 1, y) || filled(x, y - 1) || filled(x, y + 1)) ctx.fillRect(x + 1, y + 1, 1, 1);
    }
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      if (g[y][x]) { ctx.fillStyle = g[y][x]; ctx.fillRect(x + 1, y + 1, 1, 1); }
    }
    cache[id] = cv;
    return cv;
  }

  // (x, y) = 발 밑 중앙 기준
  function drawAnimal(ctx, key, frame, x, y, scale) {
    const cv = frameCanvas(key, frame);
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(cv, Math.round(x - cv.width * scale / 2), Math.round(y - cv.height * scale), cv.width * scale, cv.height * scale);
  }

  window.Sprites = { ANIMALS, ORDER, frameCanvas, drawAnimal };
})();
