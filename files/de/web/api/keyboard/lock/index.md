---
title: "Keyboard: lock() Methode"
short-title: lock()
slug: Web/API/Keyboard/lock
l10n:
  sourceCommit: d2dfabf734bc4dbba589eae6f40227b9b2068adc
---

{{APIRef("Keyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`lock()`**-Methode der [`Keyboard`](/de/docs/Web/API/Keyboard)-Schnittstelle gibt ein {{jsxref('Promise')}} zurück, das sich nach dem Aktivieren des Erfassens von Tastendrücken für eine beliebige oder alle Tasten auf der physischen Tastatur auflöst. Diese Methode kann nur Tasten erfassen, auf die das zugrunde liegende Betriebssystem Zugriff gewährt.

Wenn `lock()` mehrfach aufgerufen wird, werden nur die Tastencodes, die im letzten Aufruf angegeben wurden, gesperrt. Alle Tasten, die durch einen vorherigen Aufruf von `lock()` gesperrt wurden, werden entsperrt.

## Syntax

```js-nolint
lock()
lock(keyCodes)
```

### Parameter

- `keyCodes` {{optional_inline}}
  - : Ein {{jsxref('Array')}} von einem oder mehreren zu sperrenden Tastencodes. Wenn keine Tastencodes angegeben sind, werden alle Tasten gesperrt. Eine Liste gültiger Code-Werte finden Sie in der [UI Events KeyboardEvent code Values](https://w3c.github.io/uievents-code/#key-alphanumeric-writing-system) Spezifikation.

### Rückgabewert

Ein {{jsxref('Promise')}}, das sich mit {{jsxref('undefined')}} auflöst, wenn die Sperre erfolgreich war.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein neuer Aufruf von `lock()` gemacht wird, bevor der aktuelle abgeschlossen ist.
- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine beliebige Taste in `keyCodes` keinen gültigen [key code attribute value](https://www.w3.org/TR/uievents-code/#key-code-attribute-value) aufweist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `lock()` nicht in einem aktiven obersten Browsing-Kontext aufgerufen wird.

## Sicherheit

Eine [transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

### Erfassen aller Tasten

Das folgende Beispiel erfasst alle Tastendrücke.

```js
navigator.keyboard.lock();
```

### Erfassen spezifischer Tasten

Das folgende Beispiel erfasst die "W", "A", "S" und "D" Tasten. Es erfasst diese Tasten unabhängig davon, welche Modifikatoren mit dem Tastendruck verwendet werden. Bei einer Standard-QWERTY-Tastaturbelegung wird durch das Registrieren von `"KeyW"` sichergestellt, dass "W", Shift+"W", Control+"W", Control+Shift+"W" und alle anderen Tastenkombinationen mit "W" an die App gesendet werden. Dasselbe gilt für `"KeyA"`, `"KeyS"` und `"KeyD"`.

```js
navigator.keyboard.lock(["KeyW", "KeyA", "KeyS", "KeyD"]);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
