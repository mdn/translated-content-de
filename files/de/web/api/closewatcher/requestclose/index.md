---
title: "CloseWatcher: Methode requestClose()"
short-title: requestClose()
slug: Web/API/CloseWatcher/requestClose
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

Die **`requestClose()`**-Methode der [`CloseWatcher`](/de/docs/Web/API/CloseWatcher)-Schnittstelle löst ein `cancel`-Ereignis aus und, falls dieses Ereignis nicht mit [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) abgebrochen wird, wird anschließend ein `close`-Ereignis ausgelöst und der Close-Watcher wird schließlich deaktiviert, als ob `destroy()` aufgerufen wurde.

## Syntax

```js-nolint
requestClose()
```

### Parameter

Keine.

### Rückgabewert

Kein Wert ({{jsxref("undefined")}}).

## Beispiele

### Verwendung der `requestClose()`-Methode

In diesem Beispiel haben Sie eine eigene UI-Komponente (einen Picker) und möchten sowohl die standardmäßige Schließmethode der Plattform (z.B. die <kbd>Esc</kbd>-Taste) als auch Ihre benutzerdefinierte Schließmethode (einen Schließen-Button) unterstützen.

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
