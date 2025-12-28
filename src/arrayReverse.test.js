'use strict';
/* eslint-disable max-len */

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const res = arrayReverse(['a']);

    expect(res).toBeInstanceOf(Array);
  });

  it(`should reverse an array
    of the words consists of Latin letters,
    numbers and special symbols`, () => {
    const array1 = ['Mate', 'Academy'];
    const res1 = ['ymed', 'acAetaM'];
    const array2 = ['1,2,', '22!'];
    const res2 = ['!22,', '2,1'];
    const array3 = ['QWErty', '#$%~^'];
    const res3 = ['^~%$#y', 'trEWQ'];

    expect(arrayReverse(array1)).toEqual(res1);
    expect(arrayReverse(array2)).toEqual(res2);
    expect(arrayReverse(array3)).toEqual(res3);
  });

  it(`should keep the length of the strings from the original array`, () => {
    const array = ['1', '22', '333', '4444'];
    const res = ['4', '44', '433', '3221'];

    expect(arrayReverse(array)).toEqual(res);
  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    const array1 = ['', 'Mate', '', 'academy'];
    const array2 = ['', 'Mate', '', 'academy'];
    const res1 = ['', 'ymed', '', 'acaetaM'];
    const res2 = ['', 'ymed', '', 'acaetaM'];

    expect(arrayReverse(array1)).toEqual(res1);
    expect(arrayReverse(array2)).toEqual(res2);
  });
});
