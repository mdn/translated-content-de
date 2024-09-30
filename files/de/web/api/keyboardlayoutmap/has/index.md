---
title: "KeyboardLayoutMap: has()-Methode"
short-title: has()
slug: Web/API/KeyboardLayoutMap/has
l10n:
  sourceCommit: bcb654104082a8d12d51aecfad047d7a4a26116f
---

{{APIRef("Keyboard API")}}{{SeeCompatTable}}

Die **`has()`**-Methode der
[`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap)-Schnittstelle gibt einen booleschen Wert zurück, der angibt, ob das
Objekt ein Element mit dem angegebenen Schlüssel enthält.

Eine Liste gültiger Schlüssel finden Sie in der
[UI Events KeyboardEvent code Values](https://www.w3.org/TR/uievents-code/#key-alphanumeric-writing-system) Spezifikation.

Die Methode ist ansonsten identisch mit {{jsxref("Map.prototype.has()")}}.

## Syntax

```js-nolint
has(key)
```

### Parameter

- `key`
  - : Der Schlüssel eines Elements, nach dem in der Map gesucht werden soll.

### Rückgabewert

Ein {{jsxref('Boolean')}}, der angibt, ob der angegebene Schlüssel gefunden wurde.

## Beispiele

Im folgenden Beispiel wird überprüft, ob die orts- oder layoutspezifische Zeichenfolge, die dem Tastaturcode entspricht, der der 'W'-Taste auf einer englischen QWERTY-Tastatur zugeordnet ist, existiert.

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
