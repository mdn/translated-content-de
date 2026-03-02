---
title: "CloseWatcher: requestClose() Methode"
short-title: requestClose()
slug: Web/API/CloseWatcher/requestClose
l10n:
  sourceCommit: de5b557883e8eff2514f0fe6eeb180db782575b1
---

{{APIRef("HTML DOM")}}

Die **`requestClose()`**-Methode des [`CloseWatcher`](/de/docs/Web/API/CloseWatcher)-Interfaces löst ein `cancel`-Ereignis aus. Wenn dieses Ereignis nicht mit [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) abgebrochen wird, wird ein `close`-Ereignis ausgelöst, und schließlich wird der Close Watcher deaktiviert, als ob `destroy()` aufgerufen wurde.

## Syntax

```js-nolint
requestClose()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

### Verwendung der `requestClose()`-Methode

In diesem Beispiel haben Sie eine eigene UI-Komponente (einen Picker) und möchten sowohl die standardmäßige Schließmethode der Plattform (z.B. die <kbd>Esc</kbd>-Taste) als auch Ihre eigene Schließmethode (einen Schließen-Button) unterstützen.

Der `onclick`-Handler Ihrer UI-Komponente kann `requestClose` aufrufen, um eine Schließung anzufordern und Ihre Schließanforderung über denselben `onclose`-Handler zu leiten, den die Schließmethode der Plattform verwendet.

```js
const watcher = new CloseWatcher();
const picker = setUpAndShowPickerDOMElement();
let chosenValue = null;

watcher.onclose = () => {
  chosenValue = picker.querySelector("input").value;
  picker.remove();
};

picker.querySelector(".close-button").onclick = () => watcher.requestClose();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
