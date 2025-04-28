---
title: Keyboard
slug: Web/API/Keyboard
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}{{securecontext_header}}

Das **`Keyboard`**-Interface der [Keyboard API](/de/docs/Web/API/Keyboard_API) bietet Funktionen zum Abrufen von Tastaturlayout-Karten und zum Umschalten der Erfassung von Tastenanschlägen von der physischen Tastatur.

Eine Liste gültiger Codewerte finden Sie in der Spezifikation zu [UI Events KeyboardEvent code Values](https://www.w3.org/TR/uievents-code/#key-alphanumeric-writing-system).

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von seiner übergeordneten Schnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Instanzmethoden

_Erbt auch Methoden von seiner übergeordneten Schnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Keyboard.getLayoutMap()`](/de/docs/Web/API/Keyboard/getLayoutMap) {{experimental_inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das mit einer Instanz von [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap) aufgelöst wird, einem kartenähnlichen Objekt mit Funktionen zum Abrufen der mit bestimmten physischen Tasten verbundenen Strings.
- [`Keyboard.lock()`](/de/docs/Web/API/Keyboard/lock) {{experimental_inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das aufgelöst wird, nachdem die Erfassung von Tastenanschlägen für eine oder alle Tasten auf der physischen Tastatur aktiviert wurde.
- [`Keyboard.unlock()`](/de/docs/Web/API/Keyboard/unlock) {{experimental_inline}}
  - : Entsperrt alle durch die `lock()`-Methode erfassten Tasten und gibt synchron zurück.

## Beispiel

### Tastaturzuordnung

Das folgende Beispiel zeigt, wie der standort- oder layout-spezifische String abgerufen wird, der der Taste entspricht, die der 'W'-Taste auf einer englischen QWERTY-Tastatur entspricht.

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

Das folgende Beispiel erfasst die <kbd>W</kbd>-, <kbd>A</kbd>-, <kbd>S</kbd>- und <kbd>D</kbd>-Tasten, indem `lock()` mit einer Liste aufgerufen wird, die den Schlüsselcodeattributwert für jede dieser Tasten enthält:

```js
navigator.keyboard.lock(["KeyW", "KeyA", "KeyS", "KeyD"]);
```

Dies erfasst diese Tasten unabhängig davon, welche Modifikatoren mit dem Tastendruck verwendet werden. Angenommen, es handelt sich um ein standardmäßiges US-QWERTY-Layout, stellt die Registrierung von `KeyW` sicher, dass <kbd>W</kbd>, <kbd>Shift+W</kbd>, <kbd>Control+W</kbd>, <kbd>Control+Shift+W</kbd> und alle anderen Schlüsselmodifikator-Kombinationen mit <kbd>W</kbd> an die App gesendet werden. Dasselbe gilt für `KeyA`, `KeyS` und `KeyD`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
