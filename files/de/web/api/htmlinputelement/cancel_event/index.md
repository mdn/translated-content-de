---
title: "HTMLInputElement: cancel-Ereignis"
short-title: cancel
slug: Web/API/HTMLInputElement/cancel_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("HTML DOM")}}

Das **`cancel`**-Ereignis wird auf einem {{HTMLElement("input")}}-Element ausgelöst, wenn der Benutzer den Dateiauswahldialog mit der <kbd>Esc</kbd>-Taste oder der Abbrechen-Schaltfläche schließt. Es wird auch ausgelöst, wenn der Benutzer bei einem Element mit `type="file"` dieselben Dateien erneut auswählt.

Dieses Ereignis kann nicht abgebrochen werden, kann aber aufsteigen.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("cancel", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
oncancel = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Abbrechen bei einem input-Element

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

Öffnen Sie die Dateiauswahl und schließen Sie den Dialog anschließend mit der Escape-Taste oder der Abbrechen-Schaltfläche. In beiden Fällen wird das `cancel`-Ereignis ausgelöst. Wählen Sie außerdem eine lokale Datei auf Ihrem Computer aus, öffnen Sie die Dateiauswahl erneut und wählen Sie dieselbe Datei noch einmal aus. Auch dadurch wird das `cancel`-Ereignis ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element {{HTMLElement("input")}}
