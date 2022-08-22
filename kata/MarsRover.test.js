const MarsRover = require('./MarsRover');

describe('MarsRover class', () => {
    
    const instance = new MarsRover();
    
    beforeEach(() => {
        instance.direction = 'N';
        instance.coordX = 1;
        instance.coordY = 1;
      })

    describe('move()', () => {
    
      test(`move(['f']) return [1,2,'N']`, () => {
        expect(instance.move(['f'])).toEqual([1,2,'N']);
      });
      test(`move(['b']) return [1,0,'N']`, () => {
        expect(instance.move(['b'])).toEqual([1,5,'N']);
      });
      test(`move(['f']) return [2,1,'E']`, () => {
        instance.direction = 'E';
        expect(instance.move(['f'])).toEqual([2,1,'E']);
      });
      test(`move(['b']) return [2,1,'W']`, () => {
        instance.direction = 'W';
        expect(instance.move(['b'])).toEqual([2,1,'W']);
      });
      test(`move(['r']) return [1,1,'E']`, () => {
        expect(instance.move(['r'])).toEqual([1,1,'E']);
      });
      test(`move(['l']) return [1,1,'W']`, () => {
        expect(instance.move(['l'])).toEqual([1,1,'W']);
      });
      test(`move(['l','f','f']) return [-1,1,'W']`, () => {
        expect(instance.move(['l','f','f'])).toEqual([4,1,'W']);
      });
      test(`move(['l','l','f','f']) return [1,-1,'S']`, () => {
        expect(instance.move(['l','l','f','f'])).toEqual([1,4,'S']);
      });
    
    });
})