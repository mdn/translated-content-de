---
title: "Tastatur: getLayoutMap()-Methode"
short-title: getLayoutMap()
slug: Web/API/Keyboard/getLayoutMap
l10n:
  sourceCommit: 165d921f6f96711117be2b6513944ce36c70703f
---

{{APIRef("Keyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`getLayoutMap()`**-Methode des
{{domxref("Keyboard")}}-Interfaces gibt ein {{jsxref('Promise')}} zurück, das mit
einer Instanz von {{domxref('KeyboardLayoutMap')}} aufgelöst wird, die ein kartenähnliches Objekt ist mit Funktionen zum Abrufen der Zeichenfolgen, die bestimmten physischen Tasten zugeordnet sind.

## Syntax

```js-nolint
getLayoutMap()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}} das mit einer Instanz von
{{domxref('KeyboardLayoutMap')}} aufgelöst wird.

### Ausnahmen

- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Aufruf durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert wird.

## Beispiele

Das folgende Beispiel demonstriert, wie man den standort- oder layoutspezifischen String
erhält, der der Taste entspricht, die der 'W'-Taste auf einer englischen QWERTY-Tastatur zugeordnet ist.

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
