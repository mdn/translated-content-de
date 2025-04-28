---
title: "Keyboard: lock() Methode"
short-title: lock()
slug: Web/API/Keyboard/lock
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{APIRef("Keyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`lock()`** Methode der [`Keyboard`](/de/docs/Web/API/Keyboard)-Schnittstelle gibt ein {{jsxref('Promise')}} zurück, das sich auflöst, nachdem das Erfassen von Tastendrücken für alle oder bestimmte Tasten der physischen Tastatur aktiviert wurde. Diese Methode kann nur Tasten erfassen, die vom zugrunde liegenden Betriebssystem freigegeben wurden.

Wenn `lock()` mehrmals aufgerufen wird, werden nur die Tastencodes der zuletzt aufgerufenen Methode gesperrt. Alle Tasten, die durch einen vorherigen Aufruf von `lock()` gesperrt wurden, werden entsperrt.

## Syntax

```js-nolint
lock()
lock(keyCodes)
```

### Parameter

- `keyCodes` {{optional_inline}}
  - : Ein {{jsxref('Array')}} von einem oder mehreren zu sperrenden Tastencodes. Wenn keine Tastencodes angegeben werden, werden alle Tasten gesperrt. Eine Liste gültiger Code-Werte finden Sie in der Spezifikation [UI Events KeyboardEvent Code Values](https://w3c.github.io/uievents-code/#key-alphanumeric-writing-system).

### Rückgabewert

Ein {{jsxref('Promise')}}, das sich mit {{jsxref('undefined')}} auflöst, wenn die Sperrung erfolgreich war.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein neuer Aufruf von `lock()` gemacht wird, bevor der aktuelle abgeschlossen ist.
- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine Taste in `keyCodes` keinen gültigen [Tastencode-Attributwert](https://www.w3.org/TR/uievents-code/#key-code-attribute-value) hat.
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

Das folgende Beispiel erfasst die Tasten "W", "A", "S" und "D". Es erfasst diese Tasten unabhängig davon, welche Modifikatoren zusammen mit der Taste gedrückt werden. Bei einem Standard-US-QWERTY-Layout sorgt das Registrieren von `"KeyW"` dafür, dass "W", Shift+"W", Control+"W", Control+Shift+"W" und alle anderen Tastenkombinationen mit "W" an die Anwendung gesendet werden. Dasselbe gilt für `"KeyA"`, `"KeyS"` und `"KeyD"`.

```js
navigator.keyboard.lock(["KeyW", "KeyA", "KeyS", "KeyD"]);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
