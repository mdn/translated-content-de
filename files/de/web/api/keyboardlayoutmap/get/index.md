---
title: "KeyboardLayoutMap: get()-Methode"
short-title: get()
slug: Web/API/KeyboardLayoutMap/get
l10n:
  sourceCommit: 33d8f835c12481741d0008c1ded4b91634e60d1c
---

{{APIRef("Keyboard API")}}{{SeeCompatTable}}

Die **`get()`**-Methode der
[`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap)-Schnittstelle gibt das Element mit dem angegebenen Schlüssel zurück.

Eine Liste gültiger Schlüssel finden Sie in der [UI Events KeyboardEvent code Values](https://www.w3.org/TR/uievents-code/#key-alphanumeric-writing-system) Spezifikation.

Die Methode funktioniert ansonsten genauso wie {{jsxref("Map.prototype.get()")}}.

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

Das folgende Beispiel zeigt, wie man den orts- oder layoutspezifischen String abruft, der dem Tastaturcode entspricht, der der 'W'-Taste auf einer englischen QWERTY-Tastatur entspricht.

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
