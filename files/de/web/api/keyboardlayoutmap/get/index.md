---
title: "KeyboardLayoutMap: get() Methode"
short-title: get()
slug: Web/API/KeyboardLayoutMap/get
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{APIRef("Keyboard API")}}{{SeeCompatTable}}

Die **`get()`**-Methode der [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap)-Schnittstelle gibt das Element mit dem angegebenen Schlüssel zurück.

Eine Liste gültiger Schlüssel ist in der [UI Events KeyboardEvent code Values](https://w3c.github.io/uievents-code/)-Spezifikation zu finden.

Die Methode ist ansonsten identisch mit {{jsxref("Map.prototype.get()")}}.

## Syntax

```js-nolint
get(key)
```

### Parameter

- `key`
  - : Der Schlüssel des Elements, das aus der Map zurückgegeben werden soll.

### Rückgabewert

Der Wert des angegebenen Schlüssels.

## Beispiele

Das folgende Beispiel demonstriert, wie man den orts- oder layoutspezifischen String erhält, der dem Keyboard-Code entspricht, der auf einer englischen QWERTY-Tastatur der 'W'-Taste zugeordnet ist.

```js
navigator.keyboard.getLayoutMap().then((keyboardLayoutMap) => {
  const upKey = keyboardLayoutMap.get("KeyW");
  window.alert(`Press ${upKey} to move up.`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Map.prototype.get()")}}
