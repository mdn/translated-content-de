---
title: Keyboard
slug: Web/API/Keyboard
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}{{securecontext_header}}

Die **`Keyboard`**-Schnittstelle der [Keyboard API](/de/docs/Web/API/Keyboard_API) bietet Funktionen, die Tastaturlayout-Karten abrufen und das Erfassen von Tastendrücken von der physischen Tastatur umschalten.

Eine Liste gültiger Code-Werte finden Sie in der Spezifikation [UI Events KeyboardEvent code Values](https://w3c.github.io/uievents-code/).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von ihrer Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Instanz-Methoden

_Erbt auch Methoden von ihrer Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Keyboard.getLayoutMap()`](/de/docs/Web/API/Keyboard/getLayoutMap) {{experimental_inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das mit einer Instanz von [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap) aufgelöst wird, die ein Map-ähnliches Objekt mit Funktionen zum Abrufen der Strings ist, die mit bestimmten physischen Tasten verbunden sind.
- [`Keyboard.lock()`](/de/docs/Web/API/Keyboard/lock) {{experimental_inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das sich auflöst, nachdem das Erfassen von Tastendrücken für eine oder alle Tasten auf der physischen Tastatur aktiviert wurde.
- [`Keyboard.unlock()`](/de/docs/Web/API/Keyboard/unlock) {{experimental_inline}}
  - : Entsperrt alle Tasten, die durch die Methode `lock()` erfasst wurden, und gibt synchron zurück.

## Beispiel

### Tastaturzuordnung

Das folgende Beispiel zeigt, wie man den orts- oder layoutspezifischen String erhält, der der Taste entspricht, die der 'W'-Taste auf einer englischen QWERTY-Tastatur entspricht.

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

Das folgende Beispiel erfasst die Tasten <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D>`, indem `lock()` mit einer Liste aufgerufen wird, die den Schlüsselattributwert für jede dieser Tasten enthält:

```js
navigator.keyboard.lock(["KeyW", "KeyA", "KeyS", "KeyD"]);
```

Dies erfasst diese Tasten unabhängig davon, welche Modifikatoren mit dem Tastendruck verwendet werden. Angenommen, ein Standard-QWERTY-Layout der Vereinigten Staaten ist in Verwendung, stellt die Registrierung `KeyW` sicher, dass <kbd>W</kbd>, <kbd>Shift+W</kbd>, <kbd>Control+W</kbd>, <kbd>Control+Shift+W</kbd>, und alle anderen Tastenmodifikator-Kombinationen mit <kbd>W</kbd> an die App gesendet werden. Das Gleiche gilt für `KeyA`, `KeyS` und `KeyD`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
