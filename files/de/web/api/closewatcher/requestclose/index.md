---
title: "CloseWatcher: requestClose()-Methode"
short-title: requestClose()
slug: Web/API/CloseWatcher/requestClose
l10n:
  sourceCommit: 883b9460f2f47fecc7f50c09625465326c35bb82
---

{{APIRef("HTML DOM")}}

Die **`requestClose()`**-Methode der [`CloseWatcher`](/de/docs/Web/API/CloseWatcher)-Schnittstelle löst ein `cancel`-Ereignis aus und, wenn dieses Ereignis nicht mit [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) abgebrochen wird, fährt es fort, ein `close`-Ereignis auszulösen und deaktiviert schließlich den Close Watcher, als ob `destroy()` aufgerufen worden wäre.

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

In diesem Beispiel haben Sie Ihre eigene UI-Komponente (einen Picker) und möchten sowohl die Standard-Schließmethode der Plattform (z. B. die <kbd>Esc</kbd>-Taste) als auch Ihre benutzerdefinierte Schließmethode (eine Schaltfläche zum Schließen) unterstützen.

Der `onclick`-Handler Ihrer UI-Komponente kann `requestClose` aufrufen, um ein Schließen anzufordern und Ihre Schließanforderung über denselben `onclose`-Handler zu leiten, den die Plattform-Schließmethode verwendet.

```js
const watcher = new CloseWatcher();
const picker = setUpAndShowPickerDOMElement();
let chosenValue = null;

watcher.onclose = () => {
  chosenValue = picker.querySelector("input").value;
  picker.remove();
};

picker.querySelector(".close-button").onclick = () => {
  watcher.requestClose();
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
