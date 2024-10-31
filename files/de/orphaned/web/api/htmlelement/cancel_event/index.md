---
title: "HTMLElement: cancel-Ereignis"
slug: orphaned/Web/API/HTMLElement/cancel_event
original_slug: Web/API/HTMLElement/cancel_event
l10n:
  sourceCommit: 682c529a1be5f26ae378cb6affd56cdc15dddd4d
---

{{APIRef}}

Das **`cancel`**-Ereignis wird von {{HTMLElement("input")}}- und {{HTMLElement("dialog")}}-Elementen ausgelöst. Dieses Ereignis tritt auf, wenn der Benutzer das aktuell geöffnete Dialogfeld schließt, indem er die <kbd>Escape</kbd>-Taste drückt. Es wird auch von der [Dateieingabe](/de/docs/Web/HTML/Element/input/file) ausgelöst, wenn der Benutzer das Dateiauswahlfenster über die <kbd>Escape</kbd>-Taste oder die Abbrechen-Schaltfläche schließt und wenn der Benutzer die zuvor ausgewählten Dateien erneut auswählt.

Dieses Ereignis blubbert nicht.

Wenn ein `<dialog>` mit der <kbd>Escape</kbd>-Taste geschlossen wird, werden sowohl das `cancel`- als auch das [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("cancel", (event) => {});

oncancel = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Abbrechen eines Dialogs

#### HTML

```html
<dialog class="example-dialog">
  <button class="close" type="reset">Close</button>
</dialog>

<button class="open-dialog">Open dialog</button>

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

### Abbrechen eines Eingabeelements

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

Öffnen Sie den Dateiauswahldialog und schließen Sie dann das Auswahldialogfeld mit der Escape-Taste oder der Abbrechen-Schaltfläche. Beides führt dazu, dass das cancel-Ereignis ausgelöst wird. Wählen Sie auch eine lokale Datei auf Ihrem Computer aus; öffnen Sie dann das Dateiauswahlfenster erneut und wählen Sie dieselbe Datei erneut aus. Auch dies führt dazu, dass das cancel-Ereignis ausgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML {{HTMLElement("input")}}-Element
- HTML {{HTMLElement("dialog")}}-Element
- [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)
