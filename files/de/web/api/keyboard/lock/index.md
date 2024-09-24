---
title: "Tastatur: lock()-Methode"
short-title: lock()
slug: Web/API/Keyboard/lock
l10n:
  sourceCommit: 722a5edf794b8fb7a379cdf79729fd913b0b264f
---

{{APIRef("Keyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`lock()`**-Methode der
{{domxref("Keyboard")}}-Schnittstelle gibt ein {{jsxref('Promise')}} zurück, nachdem das
Erfassen von Tastendrücken für alle oder bestimmte Tasten auf der physischen Tastatur aktiviert wurde. Diese Methode
kann nur Tasten erfassen, die vom zugrunde liegenden Betriebssystem zugelassen werden.

Wenn `lock()` mehrfach aufgerufen wird, werden nur die in dem neuesten Aufruf angegebenen Tasten gesperrt.
Alle zuvor durch einen vorherigen Aufruf von `lock()` gesperrten Tasten werden entsperrt.

## Syntax

```js-nolint
lock()
lock(keyCodes)
```

### Parameter

- `keyCodes` {{optional_inline}}
  - : Ein {{jsxref('Array')}} von einem oder mehreren zu sperrenden Tastencodes. Werden keine Tastencodes angegeben,
    werden alle Tasten gesperrt. Eine Liste gültiger Codewerte ist in der [UI Events KeyboardEvent code Values](https://w3c.github.io/uievents-code/#key-alphanumeric-writing-system) Spezifikation zu finden.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit {{jsxref('undefined')}} aufgelöst wird, wenn die Sperrung erfolgreich war.

### Ausnahmen

- `AbortError` {{domxref("DOMException")}}
  - : Wird geworfen, wenn ein neuer Aufruf von `lock()` erfolgt, bevor der aktuelle abgeschlossen ist.
- `InvalidAccessError` {{domxref("DOMException")}}
  - : Wird geworfen, wenn irgendein Schlüssel in `keyCodes` kein gültiger [Tastencode-Attributwert](https://www.w3.org/TR/uievents-code/#key-code-attribute-value) ist.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird geworfen, wenn `lock()` nicht in einem aktiven, obersten Browsing-Kontext aufgerufen wird.

## Sicherheit

Es wird eine [vorübergehende Benutzeraktivierung](/de/docs/Web/Security/User_activation) benötigt. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

### Erfassen aller Tasten

Im folgenden Beispiel werden alle Tastendrücke erfasst.

```js
navigator.keyboard.lock();
```

### Erfassen spezifischer Tasten

Im folgenden Beispiel werden die Tasten "W", "A", "S" und "D" erfasst. Diese Tasten werden
unabhängig davon erfasst, welche Modifikatoren beim Drücken der Taste verwendet werden. Bei einer standardmäßigen US-QWERTY-
Belegung sorgt die Registrierung von `"KeyW"` dafür, dass "W", Umschalt+"W", Steuerung+"W",
Steuerung+Umschalt+"W" und alle anderen Tastenkombinationen mit Modifikatoren mit "W" an die App gesendet werden.
Dasselbe gilt für `"KeyA"`, `"KeyS"` und
`"KeyD"`.

```js
navigator.keyboard.lock(["KeyW", "KeyA", "KeyS", "KeyD"]);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
