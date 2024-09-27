---
title: "CloseWatcher: requestClose() Methode"
short-title: requestClose()
slug: Web/API/CloseWatcher/requestClose
l10n:
  sourceCommit: 600202fd27f25e1131ed8fa8696fab064d3eb973
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

Die **`requestClose()`** Methode der [`CloseWatcher`](/de/docs/Web/API/CloseWatcher)-Schnittstelle löst ein `cancel`-Ereignis aus, und wenn dieses Ereignis nicht mit [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) abgebrochen wird, fährt sie fort, ein `close`-Ereignis auszulösen, und deaktiviert schließlich den Close Watcher, als ob `destroy()` aufgerufen worden wäre.

## Syntax

```js-nolint
requestClose()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Verwendung der `requestClose()` Methode

In diesem Beispiel haben Sie eine eigene UI-Komponente (einen Picker) und möchten sowohl die standardmäßige Schließmethode der Plattform (z. B. die <kbd>Esc</kbd>-Taste) als auch Ihre benutzerdefinierte Schließmethode (eine Schaltfläche zum Schließen) unterstützen.

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
