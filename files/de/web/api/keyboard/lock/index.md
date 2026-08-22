---
title: "Tastatur: lock()-Methode"
short-title: lock()
slug: Web/API/Keyboard/lock
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("Keyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`lock()`**-Methode der
[`Keyboard`](/de/docs/Web/API/Keyboard)-Schnittstelle gibt ein {{jsxref('Promise')}} zurück, das nach dem Aktivieren der Erfassung von Tastendrücken für einen oder alle Tasten auf der physischen Tastatur erfüllt wird. Diese Methode kann nur Tasten erfassen, die vom zugrunde liegenden Betriebssystem freigegeben sind.

Wenn `lock()` mehrfach aufgerufen wird, werden nur die in dem zuletzt aufgerufenen Befehl angegebenen Tastencodes gesperrt.
Alle Tasten, die durch einen früheren `lock()`-Aufruf gesperrt wurden, werden entsperrt.

## Syntax

```js-nolint
lock()
lock(keyCodes)
```

### Parameter

- `keyCodes` {{optional_inline}}
  - : Ein {{jsxref('Array')}} von einem oder mehreren zu sperrenden Tastencodes. Wenn keine Tastencodes angegeben werden, werden alle Tasten gesperrt. Eine Liste gültiger Code-Werte ist in der Spezifikation [UI Events KeyboardEvent code Values](https://w3c.github.io/uievents-code/#key-alphanumeric-writing-system) zu finden.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit {{jsxref('undefined')}} erfüllt wird, wenn die Sperre erfolgreich war.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein neuer Aufruf von `lock()` erfolgt, bevor der aktuelle abgeschlossen ist.
- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Schlüssel in `keyCodes` kein gültiger [key code attribute value](https://w3c.github.io/uievents-code/#key-code-attribute-value) ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `lock()` nicht in einem aktiven Top-Level-Browsing-Kontext aufgerufen wird.

## Sicherheit

[Vorübergehende Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit dieses Feature funktioniert.

## Beispiele

### Erfassen aller Tasten

Das folgende Beispiel erfasst alle Tastendrücke.

```js
navigator.keyboard.lock();
```

### Erfassen bestimmter Tasten

Das folgende Beispiel erfasst die Tasten <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd>. Es erfasst diese Tasten unabhängig davon, welche Modifikatoren mit dem Tastendruck verwendet werden. Unter der Annahme eines standardmäßigen US-QWERTY-Layouts stellt die Registrierung von `"KeyW"` sicher, dass <kbd>W</kbd>, <kbd>Shift</kbd>+<kbd>W</kbd>, <kbd>Control</kbd>+<kbd>W</kbd>,
<kbd>Control</kbd>+<kbd>Shift</kbd>+<kbd>W</kbd> und alle anderen Tastenkombinationen mit <kbd>W</kbd> an die Anwendung gesendet werden.
Dasselbe gilt für `"KeyA"`, `"KeyS"` und
`"KeyD"`.

```js
navigator.keyboard.lock(["KeyW", "KeyA", "KeyS", "KeyD"]);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
