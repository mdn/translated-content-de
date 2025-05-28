---
title: "KeyboardLayoutMap: has()-Methode"
short-title: has()
slug: Web/API/KeyboardLayoutMap/has
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{APIRef("Keyboard API")}}{{SeeCompatTable}}

Die **`has()`**-Methode der [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap)-Schnittstelle gibt einen booleschen Wert zurück, der angibt, ob das Objekt ein Element mit dem angegebenen Schlüssel enthält.

Eine Liste gültiger Schlüssel finden Sie in der Spezifikation [UI Events KeyboardEvent code Values](https://w3c.github.io/uievents-code/).

Die Methode ist ansonsten identisch mit {{jsxref("Map.prototype.has()")}}.

## Syntax

```js-nolint
has(key)
```

### Parameter

- `key`
  - : Der Schlüssel eines Elements, das in der Map gesucht werden soll.

### Rückgabewert

Ein {{jsxref('Boolean')}}, der angibt, ob der angegebene Schlüssel gefunden wurde.

## Beispiele

Das folgende Beispiel überprüft, ob die standort- oder layoutspezifische Zeichenfolge, die dem Tastaturcode entspricht, der der 'W'-Taste auf einer englischen QWERTY-Tastatur entspricht, existiert.

```js
navigator.keyboard.getLayoutMap().then((keyboardLayoutMap) => {
  console.log(keyboardLayoutMap.has("KeyW"));
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Map.prototype.has()")}}
