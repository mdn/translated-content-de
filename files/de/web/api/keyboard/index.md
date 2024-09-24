---
title: Keyboard
slug: Web/API/Keyboard
l10n:
  sourceCommit: d2dfabf734bc4dbba589eae6f40227b9b2068adc
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}{{securecontext_header}}

Die **`Keyboard`**-Schnittstelle der [Keyboard API](/de/docs/Web/API/Keyboard_API) bietet Funktionen, die Tastaturlayout-Karten abrufen und das Erfassen von Tastendrücken der physischen Tastatur umschalten.

Eine Liste gültiger Code-Werte finden Sie in der Spezifikation [UI Events KeyboardEvent code Values](https://www.w3.org/TR/uievents-code/#key-alphanumeric-writing-system).

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von ihrer Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Instanzmethoden

_Erbt auch Methoden von ihrer Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Keyboard.getLayoutMap()`](/de/docs/Web/API/Keyboard/getLayoutMap) {{experimental_inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das mit einer Instanz von [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap) aufgelöst wird, welches ein kartenähnliches Objekt mit Funktionen zum Abrufen der mit bestimmten physischen Tasten verbundenen Zeichenfolgen ist.
- [`Keyboard.lock()`](/de/docs/Web/API/Keyboard/lock) {{experimental_inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das nach dem Aktivieren des Tastendruckerfassens für beliebige oder alle Tasten auf der physischen Tastatur aufgelöst wird.
- [`Keyboard.unlock()`](/de/docs/Web/API/Keyboard/unlock) {{experimental_inline}}
  - : Entsperrt alle von der `lock()`-Methode erfassten Tasten und gibt synchron zurück.

## Beispiel

### Tastaturzuordnung

Das folgende Beispiel demonstriert, wie Sie die standort- oder layoutspezifische Zeichenfolge abrufen, die der Taste entspricht, die auf einer englischen QWERTY-Tastatur der Taste 'W' entspricht.

```js
if (navigator.keyboard) {
  const keyboard = navigator.keyboard;
  keyboard.getLayoutMap().then((keyboardLayoutMap) => {
    const upKey = keyboardLayoutMap.get("KeyW");
    window.alert(`Press ${upKey} to move up.`);
  });
} else {
  // Do something else.
}
```

### Tastatursperre

Das folgende Beispiel erfasst die Tasten <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D> und ruft `lock()` mit einer Liste auf, die den Schlüsselcode-Attributwert für jede dieser Tasten enthält:

```js
navigator.keyboard.lock(["KeyW", "KeyA", "KeyS", "KeyD"]);
```

Dies erfasst diese Tasten unabhängig davon, welche Modifikatoren mit dem Tastendruck verwendet werden. Bei einem Standard-Layout der Vereinigten Staaten QWERTY stellt das Registrieren von `KeyW` sicher, dass <kbd>W</kbd>, <kbd>Shift+W</kbd>, <kbd>Control+W</kbd>, <kbd>Control+Shift+W</kbd> und alle anderen Tastenkombinationen mit Modifikatoren für <kbd>W</kbd> an die App gesendet werden. Dasselbe gilt für `KeyA`, `KeyS` und `KeyD`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
