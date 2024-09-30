---
title: "Keyboard: lock() Methode"
short-title: lock()
slug: Web/API/Keyboard/lock
l10n:
  sourceCommit: 722a5edf794b8fb7a379cdf79729fd913b0b264f
---

{{APIRef("Keyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`lock()`**-Methode des
[`Keyboard`](/de/docs/Web/API/Keyboard)-Interfaces gibt ein {{jsxref('Promise')}} zurück, nachdem das Erfassen von Tastendrücken für beliebige oder alle Tasten auf der physischen Tastatur aktiviert wurde. Diese Methode kann nur Tasten erfassen, die vom zugrunde liegenden Betriebssystem freigegeben sind.

Wenn `lock()` mehrmals aufgerufen wird, werden nur die Tastencodes gesperrt, die im jüngsten Aufruf angegeben wurden. Alle Tasten, die durch einen vorherigen `lock()`-Aufruf gesperrt wurden, werden entsperrt.

## Syntax

```js-nolint
lock()
lock(keyCodes)
```

### Parameter

- `keyCodes` {{optional_inline}}
  - : Ein {{jsxref('Array')}} von einem oder mehreren zu sperrenden Tastencodes. Wenn keine Tastencodes angegeben werden, werden alle Tasten gesperrt. Eine Liste gültiger Code-Werte finden Sie in der [UI Events KeyboardEvent code Values](https://w3c.github.io/uievents-code/#key-alphanumeric-writing-system) Spezifikation.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit {{jsxref('undefined')}} aufgelöst wird, wenn die Sperrung erfolgreich war.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein neuer `lock()`-Aufruf gemacht wird, bevor der aktuelle abgeschlossen ist.
- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Schlüssel in `keyCodes` kein gültiger [Tastencode-Attributwert](https://www.w3.org/TR/uievents-code/#key-code-attribute-value) ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `lock()` nicht in einem aktiven, obersten Browsing-Kontext aufgerufen wird.

## Sicherheit

[Vorübergehende Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

### Erfassen aller Tasten

Das folgende Beispiel erfasst alle Tastendrücke.

```js
navigator.keyboard.lock();
```

### Erfassen spezifischer Tasten

Das folgende Beispiel erfasst die Tasten "W", "A", "S" und "D". Es erfasst diese Tasten unabhängig davon, welche Modifikatoren mit dem Tastendruck verwendet werden. Bei einer Standard-QWERTY-Tastaturbelegung stellt die Registrierung von `"KeyW"` sicher, dass "W", Shift+"W", Control+"W", Control+Shift+"W" und alle anderen Tastenkombinationen mit Modifikatoren zusammen mit "W" an die Anwendung gesendet werden. Das gleiche gilt für `"KeyA"`, `"KeyS"` und `"KeyD"`.

```js
navigator.keyboard.lock(["KeyW", "KeyA", "KeyS", "KeyD"]);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
