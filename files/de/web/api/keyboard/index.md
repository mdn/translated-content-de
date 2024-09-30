---
title: Keyboard
slug: Web/API/Keyboard
l10n:
  sourceCommit: 722a5edf794b8fb7a379cdf79729fd913b0b264f
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}{{securecontext_header}}

Das **`Keyboard`**-Interface der [Keyboard-API](/de/docs/Web/API/Keyboard_API) bietet Funktionen, die Tastaturlayout-Karten abrufen und das Erfassen von Tastendrücken von der physischen Tastatur ein- und ausschalten.

Eine Liste gültiger Code-Werte finden Sie in der [UI Events KeyboardEvent code Values](https://www.w3.org/TR/uievents-code/#key-alphanumeric-writing-system)-Spezifikation.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Instanz-Methoden

_Erbt auch Methoden von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Keyboard.getLayoutMap()`](/de/docs/Web/API/Keyboard/getLayoutMap) {{experimental_inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das mit einer Instanz von [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap) aufgelöst wird, einem kartenähnlichen Objekt mit Funktionen zum Abrufen der Zeichenketten, die bestimmten physischen Tasten zugeordnet sind.
- [`Keyboard.lock()`](/de/docs/Web/API/Keyboard/lock) {{experimental_inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, nachdem das Erfassen von Tastendrücken für eine oder alle Tasten auf der physischen Tastatur aktiviert wurde.
- [`Keyboard.unlock()`](/de/docs/Web/API/Keyboard/unlock) {{experimental_inline}}
  - : Entsperrt alle von der `lock()`-Methode erfassten Tasten und gibt synchron zurück.

## Beispiel

### Tastaturzuordnung

Das folgende Beispiel zeigt, wie man die orts- oder layoutspezifische Zeichenkette erhält, die der Taste entspricht, die auf einer englischen QWERTY-Tastatur der 'W'-Taste entspricht.

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

Das folgende Beispiel erfasst die Tasten <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D>, indem es `lock()` mit einer Liste aufruft, die den Keycode-Attributwert für jede dieser Tasten enthält:

```js
navigator.keyboard.lock(["KeyW", "KeyA", "KeyS", "KeyD"]);
```

Diese Tasten werden erfasst, unabhängig davon, welche Modifikatoren mit dem Tastendruck verwendet werden. Angenommen, es wird ein Standard-Layout der Vereinigten Staaten QWERTY verwendet, stellt die Registrierung von `KeyW` sicher, dass <kbd>W</kbd>, <kbd>Shift+W</kbd>, <kbd>Control+W</kbd>, <kbd>Control+Shift+W</kbd> und alle anderen Tastenkombinationen mit <kbd>W</kbd> an die App gesendet werden. Gleiches gilt für `KeyA`, `KeyS` und `KeyD`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
