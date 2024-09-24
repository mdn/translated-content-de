---
title: "CloseWatcher: requestClose()-Methode"
short-title: requestClose()
slug: Web/API/CloseWatcher/requestClose
l10n:
  sourceCommit: 600202fd27f25e1131ed8fa8696fab064d3eb973
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

Die **`requestClose()`**-Methode der {{domxref("CloseWatcher")}}-Schnittstelle löst ein `cancel`-Ereignis aus. Wenn dieses Ereignis nicht mit {{domxref("Event.preventDefault()")}} abgebrochen wird, wird anschließend ein `close`-Ereignis ausgelöst und schließlich der Close Watcher deaktiviert, als ob `destroy()` aufgerufen wurde.

## Syntax

```js-nolint
requestClose()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Verwenden der `requestClose()`-Methode

In diesem Beispiel haben Sie eine eigene UI-Komponente (einen Picker) und möchten sowohl die standardmäßige Schließmethode der Plattform (z.B. die <kbd>Esc</kbd>-Taste) als auch Ihre benutzerdefinierte Schließmethode (eine Schaltfläche zum Schließen) unterstützen.

Der `onclick`-Handler Ihrer UI-Komponente kann `requestClose` aufrufen, um ein Schließen anzufordern und Ihre Schließanforderung durch denselben `onclose`-Handler zu routen, den die Plattform-Schließmethode verwendet.

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
