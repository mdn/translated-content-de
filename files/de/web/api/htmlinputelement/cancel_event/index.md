---
title: "HTMLInputElement: cancel event"
short-title: cancel
slug: Web/API/HTMLInputElement/cancel_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

Das **`cancel`** Ereignis wird auf einem {{HTMLElement("input")}} Element ausgelöst, wenn der Benutzer den Dateiauswahldialog über die <kbd>Esc</kbd>-Taste oder die Abbrechen-Schaltfläche abbricht und wenn derselbe bereits ausgewählte Datei erneut ausgewählt wird, bei `type="file"`.

Dieses Ereignis kann nicht abgebrochen werden, kann jedoch bubble.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("cancel", (event) => { })

oncancel = (event) => { }
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
  if (elem.files.length === 1) {
    result.textContent = "File Selected.";
  }
});
```

#### Ergebnis

{{ EmbedLiveSample('Canceling an input element', '100%', '100px') }}

Öffnen Sie den Dateiauswahldialog und schließen Sie dann das Auswahldialogfeld mit der Escape-Taste oder der Abbrechen-Schaltfläche. Beide Aktionen lösen das cancel-Ereignis aus. Versuchen Sie auch, eine lokale Datei auf Ihrem Rechner auszuwählen; öffnen Sie dann das Dateiauswahlfenster erneut und wählen Sie dieselbe Datei erneut aus. Auch dies löst das cancel-Ereignis aus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML {{HTMLElement("input")}} Element
