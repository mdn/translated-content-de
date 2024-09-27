---
title: "Keyboard: lock()-Methode"
short-title: lock()
slug: Web/API/Keyboard/lock
l10n:
  sourceCommit: 722a5edf794b8fb7a379cdf79729fd913b0b264f
---

{{APIRef("Keyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`lock()`**-Methode des [`Keyboard`](/de/docs/Web/API/Keyboard)-Interfaces gibt ein {{jsxref('Promise')}} zurück, nachdem die Erfassung von Tastendrücken für alle oder bestimmte Tasten auf der physischen Tastatur aktiviert wurde. Diese Methode kann nur die Tasten erfassen, die durch das zugrunde liegende Betriebssystem zugelassen sind.

Wenn `lock()` mehrmals aufgerufen wird, werden nur die Tastencodes, die im letzten Aufruf angegeben wurden, gesperrt. Alle Tasten, die durch einen vorherigen Aufruf von `lock()` gesperrt wurden, werden entsperrt.

## Syntax

```js-nolint
lock()
lock(keyCodes)
```

### Parameter

- `keyCodes` {{optional_inline}}
  - : Ein {{jsxref('Array')}} von einem oder mehreren zu sperrenden Tastencodes. Wenn keine Tastencodes angegeben werden, werden alle Tasten gesperrt. Eine Liste gültiger Codewerte ist in der [UI Events KeyboardEvent code Values](https://w3c.github.io/uievents-code/#key-alphanumeric-writing-system)-Spezifikation zu finden.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit {{jsxref('undefined')}} aufgelöst wird, wenn die Sperre erfolgreich war.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein neuer Aufruf von `lock()` erfolgt, bevor der aktuelle abgeschlossen ist.
- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine Taste in `keyCodes` keinen gültigen [key code attribute value](https://www.w3.org/TR/uievents-code/#key-code-attribute-value) besitzt.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `lock()` nicht in einem aktiven Top-Level-Browsing-Kontext aufgerufen wird.

## Sicherheit

Eine [transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

### Erfassen aller Tasten

Das folgende Beispiel erfasst alle Tastendrücke.

```js
navigator.keyboard.lock();
```

### Erfassen spezifischer Tasten

Das folgende Beispiel erfasst die "W", "A", "S" und "D"-Tasten. Es erfasst diese Tasten unabhängig davon, welche Modifikatoren mit dem Tastendruck verwendet werden. Bei einer standardmäßigen US-QWERTY-Tastatur sorgt die Registrierung von `"KeyW"` dafür, dass "W", Shift+"W", Control+"W", Control+Shift+"W" und alle anderen Tastenmodifikator-Kombinationen mit "W" an die App gesendet werden. Dasselbe gilt für `"KeyA"`, `"KeyS"` und `"KeyD"`.

```js
navigator.keyboard.lock(["KeyW", "KeyA", "KeyS", "KeyD"]);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
