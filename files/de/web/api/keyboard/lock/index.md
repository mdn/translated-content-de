---
title: "Keyboard: lock() Methode"
short-title: lock()
slug: Web/API/Keyboard/lock
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Keyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`lock()`** Methode der
[`Keyboard`](/de/docs/Web/API/Keyboard) Schnittstelle gibt ein {{jsxref('Promise')}} zurück, das nach Aktivierung der
Erfassung von Tastenanschlägen für eine oder alle Tasten auf der physischen Tastatur erfüllt wird. Diese Methode
kann nur Tasten erfassen, die vom zugrunde liegenden Betriebssystem Zugriff erhalten haben.

Wenn `lock()` mehrmals aufgerufen wird, werden nur die in dem jüngsten Aufruf angegebenen Tasten-Codes gesperrt.
Alle Tasten, die durch einen früheren Aufruf von `lock()` gesperrt wurden, werden entsperrt.

## Syntax

```js-nolint
lock()
lock(keyCodes)
```

### Parameter

- `keyCodes` {{optional_inline}}
  - : Ein {{jsxref('Array')}} von einem oder mehreren zu sperrenden Tasten-Codes. Wenn keine Tasten-Codes angegeben sind,
    werden alle Tasten gesperrt. Eine Liste gültiger Code-Werte befindet sich in der Spezifikation [UI Events KeyboardEvent code Values](https://w3c.github.io/uievents-code/#key-alphanumeric-writing-system).

### Rückgabewert

Ein {{jsxref('Promise')}} das mit {{jsxref('undefined')}} erfüllt wird, wenn die Sperrung erfolgreich war.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein neuer Aufruf von `lock()` erfolgt, bevor der aktuelle beendet ist.
- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn irgendein Schlüssel in `keyCodes` kein gültiger [key code attribute value](https://w3c.github.io/uievents-code/#key-code-attribute-value) ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `lock()` nicht in einem aktiven Top-Level-Browsing-Kontext aufgerufen wird.

## Sicherheit

[Vorübergehende Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem Benutzeroberflächenelement interagieren, damit diese Funktion funktioniert.

## Beispiele

### Erfassen aller Tasten

Das folgende Beispiel erfasst alle Tastenanschläge.

```js
navigator.keyboard.lock();
```

### Erfassen spezifischer Tasten

Das folgende Beispiel erfasst die Tasten "W", "A", "S" und "D". Es erfasst diese Tasten
unabhängig davon, welche Modifikatoren mit dem Tastendruck verwendet werden. Angenommen, ein standardmäßiges US-QWERTY
Layout, die Registrierung mit `"KeyW"` stellt sicher, dass "W", Umschalt+"W", Strg+"W",
Strg+Umschalt+"W" und alle anderen Tastenkombinationen mit "W" an die Anwendung gesendet werden.
Das Gleiche gilt für `"KeyA"`, `"KeyS"` und
`"KeyD"`.

```js
navigator.keyboard.lock(["KeyW", "KeyA", "KeyS", "KeyD"]);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
