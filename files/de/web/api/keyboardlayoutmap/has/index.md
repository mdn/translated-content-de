---
title: "KeyboardLayoutMap: has() Methode"
short-title: has()
slug: Web/API/KeyboardLayoutMap/has
l10n:
  sourceCommit: bcb654104082a8d12d51aecfad047d7a4a26116f
---

{{APIRef("Keyboard API")}}{{SeeCompatTable}}

Die **`has()`** Methode der Schnittstelle [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap) gibt einen booleschen Wert zurück, der anzeigt, ob das Objekt ein Element mit dem angegebenen Schlüssel enthält.

Eine Liste der gültigen Schlüssel finden Sie in der Spezifikation [UI Events KeyboardEvent code Values](https://www.w3.org/TR/uievents-code/#key-alphanumeric-writing-system).

Die Methode ist ansonsten die gleiche wie {{jsxref("Map.prototype.has()")}}.

## Syntax

```js-nolint
has(key)
```

### Parameter

- `key`
  - : Der Schlüssel eines Elements, nach dem in der Map gesucht wird.

### Rückgabewert

Ein {{jsxref('Boolean')}}, der angibt, ob der angegebene Schlüssel gefunden wurde.

## Beispiele

Das folgende Beispiel überprüft, ob der standort- oder layout-spezifische String, der mit dem Tastaturcode korrespondiert, der der 'W'-Taste auf einer englischen QWERTY-Tastatur entspricht, vorhanden ist.

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
