const isSpecialKeyExactlyRight = (isKeyRequired: boolean, isKeyPressed: boolean): boolean => {
  return (isKeyRequired && isKeyPressed) || (!isKeyRequired && !isKeyPressed);
};

export const checkKeyCombo = (ev: KeyboardEvent, comboToTest: string) => {
  if (comboToTest) {
    const comboKeys: string[] = comboToTest.split('+');
    const standardKey: string = comboKeys[comboKeys.length - 1];
    const sk = comboKeys.splice(0);
    sk.splice(-1, 1);

    return isSpecialKeyExactlyRight(sk.includes('Ctrl'), ev.ctrlKey)
      && isSpecialKeyExactlyRight(sk.includes('Alt'), ev.altKey)
      && isSpecialKeyExactlyRight(sk.includes('Meta'), ev.metaKey)
      && (!(sk.includes('Shift')) || ev.shiftKey === true)
      && ev.key === standardKey;
  } else {
    return null;
  }
};
