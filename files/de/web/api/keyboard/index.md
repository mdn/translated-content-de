---
title: Keyboard
slug: Web/API/Keyboard
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}{{securecontext_header}}

Das **`Keyboard`** Interface der [Keyboard API](/de/docs/Web/API/Keyboard_API) bietet Funktionen, die Tastaturlayout-Karten abrufen und das Erfassen von Tastendrücken von der physischen Tastatur umschalten können.

Eine Liste gültiger Code-Werte findet sich in der [UI Events KeyboardEvent code Values](https://w3c.github.io/uievents-code/) Spezifikation.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Eltern-Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Instanz-Methoden

_Erbt auch Methoden von seinem Eltern-Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Keyboard.getLayoutMap()`](/de/docs/Web/API/Keyboard/getLayoutMap) {{experimental_inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das mit einer Instanz von [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap) aufgelöst wird, welches ein map-ähnliches Objekt mit Funktionen zum Abrufen der Strings ist, die mit bestimmten physischen Tasten verbunden sind.
- [`Keyboard.lock()`](/de/docs/Web/API/Keyboard/lock) {{experimental_inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das nach der Aktivierung der Erfassung von Tastendrücken für eine oder alle Tasten auf der physischen Tastatur aufgelöst wird.
- [`Keyboard.unlock()`](/de/docs/Web/API/Keyboard/unlock) {{experimental_inline}}
  - : Entsperrt alle durch die Methode `lock()` erfassten Tasten und gibt synchron zurück.

## Beispiel

### Tastaturzuordnung

Das folgende Beispiel zeigt, wie man den positions- oder layout-spezifischen String erhält, der mit der Taste korrespondiert, die der 'W'-Taste auf einer englischen QWERTY-Tastatur entspricht.

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

Das folgende Beispiel erfasst die <kbd>W</kbd>-, <kbd>A</kbd>-, <kbd>S</kbd>- und <kbd>D</kbd>-Tasten, indem `lock()` mit einer Liste aufgerufen wird, die den Schlüsselattributwert für jede dieser Tasten enthält:

```js
navigator.keyboard.lock(["KeyW", "KeyA", "KeyS", "KeyD"]);
```

Dies erfasst diese Tasten unabhängig davon, welche Modifikatoren beim Tastendruck verwendet werden. Angenommen, es handelt sich um ein standardmäßiges US-englisches QWERTY-Layout, stellt das Registrieren von `KeyW` sicher, dass <kbd>W</kbd>, <kbd>Shift+W</kbd>, <kbd>Control+W</kbd>, <kbd>Control+Shift+W</kbd> und alle anderen Tastenkombinationen mit <kbd>W</kbd> an die App gesendet werden. Dasselbe gilt für `KeyA`, `KeyS` und `KeyD`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
