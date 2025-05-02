---
title: "HTMLInputElement: cancel event"
short-title: cancel
slug: Web/API/HTMLInputElement/cancel_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`cancel`**-Ereignis wird auf einem {{HTMLElement("input")}}-Element ausgelöst, wenn der Benutzer den Dateiauswahldialog mit der <kbd>Esc</kbd>-Taste oder der Abbrechen-Schaltfläche schließt und wenn der Benutzer die gleichen Dateien erneut auswählt, die zuvor von `type="file"` ausgewählt wurden.

Dieses Ereignis kann nicht abgebrochen werden, kann jedoch weitergegeben werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("cancel", (event) => { })

oncancel = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Abbrechen eines Input-Elements

#### HTML

```html
<label for="file">Select a file. Or don't.</label>
<input type="file" id="file" name="file" />

<div id="result"></div>
```

```css hidden
div {
  margin-bottom: 10px;
}
```

#### JavaScript

```js
const elem = document.getElementById("file");

const result = document.getElementById("result");

elem.addEventListener("cancel", () => {
  result.textContent = "Canceled.";
});

elem.addEventListener("change", () => {
  if (elem.files.length == 1) {
    result.textContent = "File Selected.";
  }
});
```

#### Ergebnis

{{ EmbedLiveSample('Canceling an input element', '100%', '100px') }}

Öffnen Sie den Dateiwähler und schließen Sie dann das Auswahldialogfeld mit der Escape-Taste oder der Abbrechen-Schaltfläche. Beide Aktionen führen dazu, dass das cancel-Ereignis ausgelöst wird. Versuchen Sie auch, eine lokale Datei auf Ihrem Computer auszuwählen; öffnen Sie dann das Dateiauswahlfenster erneut und wählen Sie dieselbe Datei erneut aus. Auch dies löst das cancel-Ereignis aus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML {{HTMLElement("input")}}-Element
