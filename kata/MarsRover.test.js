const MarsRover = require('./MarsRover');

describe('MarsRover class', () => {
    
    const instance = new MarsRover();
    
    beforeEach(() => {
        instance.direction = 'N';
        instance.coordX = 0;
        instance.coordY = 0;

      })

    describe('move()', () => {
    
      test(`move(['f']) return [0,1,'N']`, () => {
        expect(instance.move(['f'])).toEqual([0,1,'N']);
      });
      test(`move(['b']) return [-1,0,'N']`, () => {
        expect(instance.move(['b'])).toEqual([0,-1,'N']);
      });
      test(`move(['f']) return [1,0,'N']`, () => {
        instance.direction = 'E';
        expect(instance.move(['f'])).toEqual([1,0,'E']);
      });
      test(`move(['b']) return [1,0,'N']`, () => {
        instance.direction = 'W';
        expect(instance.move(['b'])).toEqual([1,0,'W']);
      });
      test(`move(['r']) return [0,0,'E']`, () => {
        expect(instance.move(['r'])).toEqual([0,0,'E']);
      });
      test(`move(['l']) return [0,0,'W']`, () => {
        expect(instance.move(['l'])).toEqual([0,0,'W']);
      });
      test(`move(['l','f','f']) return [-2,0,'W']`, () => {
        expect(instance.move(['l','f','f'])).toEqual([-2,0,'W']);
      });
      test(`move(['l','l','f','f']) return [0,-2,'S']`, () => {
        expect(instance.move(['l','l','f','f'])).toEqual([0,-2,'S']);
      });
    
    });
})