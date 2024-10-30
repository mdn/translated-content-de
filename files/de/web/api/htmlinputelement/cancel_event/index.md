---
title: "HTMLInputElement: cancel event"
short-title: cancel
slug: Web/API/HTMLInputElement/cancel_event
l10n:
  sourceCommit: d2421d25d1676cc11b01cc4981061e4d0aa78e95
---

{{APIRef}}

Das **`cancel`** Ereignis wird auf einem {{HTMLElement("input")}} Element ausgelöst, wenn der Benutzer das Dateiauswahldialogfeld über die <kbd>Esc</kbd>-Taste oder die Abbrechen-Schaltfläche schließt und wenn der Benutzer dieselben Dateien erneut auswählt, die zuvor mit `type="file"` ausgewählt wurden.

Dieses Ereignis kann nicht abgebrochen werden, kann jedoch weitergegeben werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("cancel", (event) => {});

oncancel = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Abbrechen eines Eingabeelements

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

Öffnen Sie den Dateiauswahldialog und schließen Sie ihn dann mit der Escape-Taste oder der Abbrechen-Schaltfläche. Beide Aktionen lösen das Cancel-Ereignis aus. Versuchen Sie auch, eine lokale Datei auf Ihrem Computer auszuwählen; öffnen Sie dann das Dateiauswahlfenster erneut und wählen Sie dieselbe Datei erneut aus. Auch dies löst das Cancel-Ereignis aus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML {{HTMLElement("input")}} Element
