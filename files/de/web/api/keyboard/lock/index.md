---
title: "Keyboard: lock() Methode"
short-title: lock()
slug: Web/API/Keyboard/lock
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{APIRef("Keyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`lock()`**-Methode des [`Keyboard`](/de/docs/Web/API/Keyboard)-Interfaces gibt ein {{jsxref('Promise')}} zurück, das aufgelöst wird, nachdem das Erfassen von Tastenanschlägen für beliebige oder alle Tasten auf der physischen Tastatur aktiviert wurde. Diese Methode kann nur Tasten erfassen, auf die das zugrunde liegende Betriebssystem Zugriff gewährt.

Wenn `lock()` mehrfach aufgerufen wird, werden nur die Tastencodes, die im letzten Aufruf angegeben wurden, gesperrt. Alle Tasten, die durch einen vorherigen Aufruf von `lock()` gesperrt wurden, werden entsperrt.

## Syntax

```js-nolint
lock()
lock(keyCodes)
```

### Parameter

- `keyCodes` {{optional_inline}}
  - : Ein {{jsxref('Array')}} aus einem oder mehreren zu sperrenden Tastencodes. Wenn keine Tastencodes angegeben sind, werden alle Tasten gesperrt. Eine Liste gültiger Code-Werte finden Sie in der [UI Events KeyboardEvent code Values](https://w3c.github.io/uievents-code/#key-alphanumeric-writing-system)-Spezifikation.

### Rückgabewert

Ein {{jsxref('Promise')}} das mit {{jsxref('undefined')}} aufgelöst wird, wenn die Sperre erfolgreich war.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein neuer Aufruf von `lock()` gemacht wird, bevor der aktuelle abgeschlossen ist.
- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine Taste in `keyCodes` kein gültiger [Tastencode-Attributwert](https://w3c.github.io/uievents-code/#key-code-attribute-value) ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `lock()` nicht in einem aktiven Top-Level-Browsing-Kontext aufgerufen wird.

## Sicherheit

[Temporäre Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit dieses Feature funktioniert.

## Beispiele

### Alle Tasten erfassen

Das folgende Beispiel erfasst alle Tastenanschläge.

```js
navigator.keyboard.lock();
```

### Bestimmte Tasten erfassen

Das folgende Beispiel erfasst die Tasten "W", "A", "S" und "D". Es erfasst diese Tasten unabhängig davon, welche Modifikatoren mit dem Tastenanschlag verwendet werden. Bei einem standardmäßigen US-QWERTY-Layout sorgt die Registrierung von `"KeyW"` dafür, dass "W", Shift+"W", Control+"W", Control+Shift+"W" und alle anderen Tastenkombinationen mit Modifikatoren für "W" an die App gesendet werden. Das Gleiche gilt für `"KeyA"`, `"KeyS"` und `"KeyD"`.

```js
navigator.keyboard.lock(["KeyW", "KeyA", "KeyS", "KeyD"]);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
