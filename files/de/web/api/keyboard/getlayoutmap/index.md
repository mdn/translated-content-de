---
title: "Keyboard: getLayoutMap() Methode"
short-title: getLayoutMap()
slug: Web/API/Keyboard/getLayoutMap
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Keyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`getLayoutMap()`** Methode des
[`Keyboard`](/de/docs/Web/API/Keyboard) Interfaces gibt ein {{jsxref('Promise')}} zurück, das mit
einer Instanz von [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap) aufgelöst wird. Diese ist ein map-ähnliches Objekt mit
Funktionen zum Abrufen der Zeichenfolgen, die mit bestimmten physischen Tasten verknüpft sind.

## Syntax

```js-nolint
getLayoutMap()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}} das mit einer Instanz von
[`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap) aufgelöst wird.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert wird.

## Beispiele

Das folgende Beispiel zeigt, wie man die orts- oder layout-spezifische Zeichenfolge
erhält, die der Taste entspricht, die auf einer englischen QWERTY-Tastatur der 'W'-Taste entspricht.

```js
const keyboard = navigator.keyboard;
keyboard.getLayoutMap().then((keyboardLayoutMap) => {
  const upKey = keyboardLayoutMap.get("KeyW");
  window.alert(`Press ${upKey} to move up.`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl")}}
