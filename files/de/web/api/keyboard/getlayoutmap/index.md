---
title: "Keyboard: Methode getLayoutMap()"
short-title: getLayoutMap()
slug: Web/API/Keyboard/getLayoutMap
l10n:
  sourceCommit: 165d921f6f96711117be2b6513944ce36c70703f
---

{{APIRef("Keyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`getLayoutMap()`**-Methode der [`Keyboard`](/de/docs/Web/API/Keyboard)-Schnittstelle gibt ein {{jsxref('Promise')}} zurück, das mit einer Instanz von [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap) aufgelöst wird. Diese ist ein objektähnliches Mapping mit Funktionen zum Abrufen der Zeichenfolgen, die bestimmten physischen Tasten zugeordnet sind.

## Syntax

```js-nolint
getLayoutMap()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit einer Instanz von [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap) aufgelöst wird.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert wird.

## Beispiele

Das folgende Beispiel zeigt, wie der locations- oder layoutspezifische String abgerufen wird, der der Taste entspricht, die auf einer englischen QWERTY-Tastatur der Taste 'W' entspricht.

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
