---
title: "HTMLElement: cancel Ereignis"
short-title: cancel
slug: Web/API/HTMLElement/cancel_event
l10n:
  sourceCommit: 682c529a1be5f26ae378cb6affd56cdc15dddd4d
---

{{APIRef}}

Das **`cancel`** Ereignis wird von {{HTMLElement("input")}} und {{HTMLElement("dialog")}} Elementen ausgelöst. Das Ereignis wird ausgelöst, wenn der Benutzer den aktuell geöffneten Dialog durch Schließen mit der <kbd>Esc</kbd>-Taste abbricht. Es wird auch vom [Dateieingabefeld](/de/docs/Web/HTML/Element/input/file) ausgelöst, wenn der Benutzer den Dateiauswahldialog über die <kbd>Esc</kbd>-Taste oder die Abbrechen-Schaltfläche abbricht und wenn der Benutzer dieselben Dateien erneut auswählt, die zuvor ausgewählt wurden.

Dieses Ereignis wird nicht gebubbelt.

Wenn ein `<dialog>` mit der <kbd>Esc</kbd>-Taste geschlossen wird, werden sowohl das `cancel` als auch das {{domxref("HTMLDialogElement/close_event", "close")}} Ereignis ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("cancel", (event) => {});

oncancel = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

### Einen Dialog abbrechen

#### HTML

```html
<dialog class="example-dialog">
  <button class="close" type="reset">Schließen</button>
</dialog>

<button class="open-dialog">Dialog öffnen</button>

<div class="result"></div>
```

```css hidden
button,
div {
  margin: 0.5rem;
}
```

#### JavaScript

```js
const result = document.querySelector(".result");

const dialog = document.querySelector(".example-dialog");

dialog.addEventListener("cancel", (event) => {
  result.textContent = "dialog was canceled";
});

const openDialog = document.querySelector(".open-dialog");
openDialog.addEventListener("click", () => {
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
    result.textContent = "";
  } else {
    result.textContent = "The dialog API is not supported by this browser";
  }
});

const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", () => {
  dialog.close();
});
```

#### Ergebnis

{{ EmbedLiveSample('Canceling a dialog', '100%', '100px') }}

### Ein Eingabeelement abbrechen

#### HTML

```html
<label for="file">Select or file. Or don't.</label>
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

Öffnen Sie den Dateiauswahldialog und schließen Sie ihn dann mit der Escape-Taste oder der Abbrechen-Schaltfläche. Beide Aktionen lösen das Abbrechen-Ereignis aus. Versuchen Sie auch, eine lokale Datei auf Ihrem Computer auszuwählen; öffnen Sie dann das Dateiauswahlfenster erneut und wählen Sie dieselbe Datei erneut aus. Auch dies löst das Abbrechen-Ereignis aus.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- HTML {{HTMLElement("input")}} Element
- HTML {{HTMLElement("dialog")}} Element
- {{domxref("HTMLDialogElement/close_event", "close")}}
