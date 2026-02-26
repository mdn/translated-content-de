---
title: "Keyboard: lock() Methode"
short-title: lock()
slug: Web/API/Keyboard/lock
l10n:
  sourceCommit: a3fd44c5d567b2edd9bdb971a158a0540995d11e
---

{{APIRef("Keyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`lock()`** Methode des
[`Keyboard`](/de/docs/Web/API/Keyboard) Interfaces gibt ein {{jsxref('Promise')}} zurück, das sich erfüllt, nachdem das Erfassen von Tastendrücken für einen oder alle Tasten auf der physischen Tastatur aktiviert wurde. Diese Methode kann nur Tasten erfassen, für die das zugrunde liegende Betriebssystem Zugriff gewährt.

Wenn `lock()` mehrmals aufgerufen wird, werden nur die Tasten-Codes gesperrt, die im letzten Aufruf angegeben wurden.
Alle Tasten, die durch einen vorherigen Aufruf von `lock()` gesperrt wurden, werden entsperrt.

## Syntax

```js-nolint
lock()
lock(keyCodes)
```

### Parameter

- `keyCodes` {{optional_inline}}
  - : Ein {{jsxref('Array')}} von einem oder mehreren zu sperrenden Tasten-Codes. Wenn keine Tasten-Codes angegeben werden,
    werden alle Tasten gesperrt. Eine Liste gültiger Code-Werte findet sich in der [UI Events KeyboardEvent code Values](https://w3c.github.io/uievents-code/#key-alphanumeric-writing-system) Spezifikation.

### Rückgabewert

Ein {{jsxref('Promise')}} das mit {{jsxref('undefined')}} erfüllt wird, wenn die Sperre erfolgreich war.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein neuer Aufruf von `lock()` erfolgt, bevor der aktuelle abgeschlossen ist.
- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn irgendeine Taste in `keyCodes` kein gültiger [key code attribute value](https://w3c.github.io/uievents-code/#key-code-attribute-value) ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `lock()` nicht in einem aktiven, obersten Browsing-Kontext aufgerufen wird.

## Sicherheit

[Vorübergehende Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

### Erfassen aller Tasten

Das folgende Beispiel erfasst alle Tastendrücke.

```js
navigator.keyboard.lock();
```

### Erfassen spezifischer Tasten

Das folgende Beispiel erfasst die Tasten <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd>. Diese Tasten werden unabhängig davon erfasst, welche Modifikatoren bei der Tastenbetätigung verwendet werden. Bei einem Standard-US-QWERTY-Layout sorgt die Registrierung von `"KeyW"` dafür, dass <kbd>W</kbd>, <kbd>Shift</kbd>+<kbd>W</kbd>, <kbd>Control</kbd>+<kbd>W</kbd>, <kbd>Control</kbd>+<kbd>Shift</kbd>+<kbd>W</kbd> und alle anderen Tastenmodifikator-Kombinationen mit <kbd>W</kbd> an die App gesendet werden.
Dasselbe gilt für `"KeyA"`, `"KeyS"` und `"KeyD"`.

```js
navigator.keyboard.lock(["KeyW", "KeyA", "KeyS", "KeyD"]);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
