---
title: Tastatur
slug: Web/API/Keyboard
l10n:
  sourceCommit: 722a5edf794b8fb7a379cdf79729fd913b0b264f
---

{{SeeCompatTable}}{{APIRef("Keyboard API")}}{{securecontext_header}}

Das **`Keyboard`**-Interface der {{domxref("Keyboard API", "", "", "nocode")}} bietet Funktionen, die Tastaturlayout-Karten abrufen und das Erfassen von Tastenanschlägen von der physischen Tastatur umschalten.

Eine Liste gültiger Code-Werte finden Sie in der [UI Events KeyboardEvent code Values](https://www.w3.org/TR/uievents-code/#key-alphanumeric-writing-system)-Spezifikation.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner übergeordneten Schnittstelle, {{DOMxRef("EventTarget")}}._

## Instanz-Methoden

_Erbt auch Methoden von seiner übergeordneten Schnittstelle, {{DOMxRef("EventTarget")}}._

- {{domxref('Keyboard.getLayoutMap()')}} {{experimental_inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das mit einer Instanz von {{domxref('KeyboardLayoutMap')}} aufgelöst wird, einem objektähnlichen Element mit Funktionen zum Abrufen der Zeichenfolgen, die mit bestimmten physischen Tasten verbunden sind.
- {{domxref('Keyboard.lock()')}} {{experimental_inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, nachdem das Erfassen von Tastenanschlägen für beliebige oder alle Tasten der physischen Tastatur aktiviert wurde.
- {{domxref('Keyboard.unlock()')}} {{experimental_inline}}
  - : Entsperrt alle Tasten, die durch die `lock()`-Methode erfasst wurden und gibt synchron zurück.

## Beispiel

### Tastaturzuordnung

Das folgende Beispiel zeigt, wie man die standort- oder layoutspezifische Zeichenfolge erhält, die der Taste entspricht, die der 'W'-Taste auf einer englischen QWERTY-Tastatur entspricht.

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

Das folgende Beispiel erfasst die Tasten <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd>, indem `lock()` mit einer Liste aufgerufen wird, die den Tasten-Code-Attributswert für jede dieser Tasten enthält:

```js
navigator.keyboard.lock(["KeyW", "KeyA", "KeyS", "KeyD"]);
```

Dies erfasst diese Tasten unabhängig davon, welche Modifikatoren mit dem Tastendruck verwendet werden. Bei einem standardmäßigen US-QWERTY-Layout stellt die Registrierung von `KeyW` sicher, dass <kbd>W</kbd>, <kbd>Shift+W</kbd>, <kbd>Control+W</kbd>, <kbd>Control+Shift+W</kbd> und alle anderen Tastenkombinationen mit Modifikatoren zusammen mit <kbd>W</kbd> an die App gesendet werden. Das Gleiche gilt für `KeyA`, `KeyS` und `KeyD`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
