---
title: Keyboard
slug: Web/API/Keyboard
l10n:
  sourceCommit: 722a5edf794b8fb7a379cdf79729fd913b0b264f
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}{{securecontext_header}}

Die **`Keyboard`**-Schnittstelle der [Keyboard API](/de/docs/Web/API/Keyboard_API) bietet Funktionen, die Tastaturlayout-Karten abrufen und das Erfassen von Tastendrücken auf der physischen Tastatur umschalten.

Eine Liste gültiger Codewerte finden Sie in der [UI Events KeyboardEvent code Values](https://www.w3.org/TR/uievents-code/#key-alphanumeric-writing-system) Spezifikation.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von ihrer Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Instanz-Methoden

_Erbt auch Methoden von ihrer Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Keyboard.getLayoutMap()`](/de/docs/Web/API/Keyboard/getLayoutMap) {{experimental_inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das mit einer Instanz von [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap) aufgelöst wird, welches ein kartenähnliches Objekt mit Funktionen zum Abrufen der Strings ist, die mit bestimmten physischen Tasten verbunden sind.
- [`Keyboard.lock()`](/de/docs/Web/API/Keyboard/lock) {{experimental_inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, nachdem es das Erfassen von Tastendrücken für alle oder bestimmte Tasten auf der physischen Tastatur ermöglicht hat.
- [`Keyboard.unlock()`](/de/docs/Web/API/Keyboard/unlock) {{experimental_inline}}
  - : Entsperrt alle von der `lock()`-Methode erfassten Tasten und gibt synchron zurück.

## Beispiel

### Tastenbelegung

Das folgende Beispiel zeigt, wie man den orts- oder layoutspezifischen String abruft, der der Taste entspricht, die der 'W'-Taste auf einer englischen QWERTY-Tastatur zugeordnet ist.

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

### Tasten-Sperrung

Das folgende Beispiel erfasst die <kbd>W</kbd>-, <kbd>A</kbd>-, <kbd>S</kbd>- und <kbd>D</kbd>-Tasten und ruft `lock()` mit einer Liste auf, die den Keycode-Attributswert für jede dieser Tasten enthält:

```js
navigator.keyboard.lock(["KeyW", "KeyA", "KeyS", "KeyD"]);
```

Dies erfasst diese Tasten, unabhängig davon, welche Modifikatoren mit dem Tastendruck verwendet werden. Bei einem standardmäßigen QWERTY-Layout in den Vereinigten Staaten sorgt die Registrierung von `KeyW` dafür, dass <kbd>W</kbd>, <kbd>Shift+W</kbd>, <kbd>Control+W</kbd>, <kbd>Control+Shift+W</kbd> und alle anderen Tastenkombinationen mit <kbd>W</kbd> an die App gesendet werden. Das Gleiche gilt für `KeyA`, `KeyS` und `KeyD`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
