---
title: "HTMLInputElement: cancel Ereignis"
short-title: cancel
slug: Web/API/HTMLInputElement/cancel_event
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{APIRef}}

Das **`cancel`** Ereignis wird auf einem {{HTMLElement("input")}} Element ausgelöst, wenn der Benutzer den Dateiauswahldialog über die <kbd>Esc</kbd>-Taste oder die Abbrechen-Taste abbricht und wenn der Benutzer dieselben Dateien erneut auswählt, die vorher bei `type="file"` ausgewählt wurden.

Dieses Ereignis kann nicht abgebrochen werden, kann aber propagieren.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

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

{{ EmbedLiveSample('Abbrechen eines Eingabeelements', '100%', '100px') }}

Öffnen Sie den Dateiauswähler und schließen Sie dann das Auswahldialogfenster mit der Esc-Taste oder der Abbrechen-Taste. Beide Vorgänge lösen das cancel Ereignis aus. Versuchen Sie auch, eine lokale Datei auf Ihrem Computer auszuwählen; öffnen Sie dann das Dateiauswahlfenster erneut und wählen Sie dieselbe Datei erneut aus. Auch dies löst das cancel Ereignis aus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML {{HTMLElement("input")}} Element
