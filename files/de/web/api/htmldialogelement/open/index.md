---
title: "HTMLDialogElement: open-Eigenschaft"
short-title: open
slug: Web/API/HTMLDialogElement/open
l10n:
  sourceCommit: 661a04e7a61abe3d8c7245f04cdd1d0bc865fe69
---

{{ APIRef("HTML DOM") }}

Die **`open`**-Eigenschaft der
[`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Schnittstelle ist ein boolescher Wert, der das
[`open`](/de/docs/Web/HTML/Reference/Elements/dialog#open) HTML-Attribut widerspiegelt und angibt, ob das {{htmlelement("dialog")}} zur Interaktion verfügbar ist.

## Wert

Ein boolescher Wert, der den Zustand des [`open`](/de/docs/Web/HTML/Reference/Elements/dialog#open) HTML-Attributs darstellt. Ein Wert von `true` bedeutet, dass das Dialogfeld angezeigt wird, während `false` bedeutet, dass es nicht angezeigt wird.

> [!WARNING]
> Obwohl die `open`-Eigenschaft technisch gesehen nicht schreibgeschützt ist und direkt gesetzt werden kann, wird davon stark abgeraten. [Die HTML-Spezifikation](https://html.spec.whatwg.org/multipage/interactive-elements.html#note-dialog-remove-open-attribute) weist darauf hin, dass dies zu unerwartetem Verhalten bei der normalen Dialog-Interaktion führen kann.
> Zum Beispiel wird das [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis nicht ausgelöst, wenn `open` programmatisch auf `false` gesetzt wird, und nachfolgende Aufrufe der Methoden [`close()`](/de/docs/Web/API/HTMLDialogElement/close) und [`requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose) haben keine Wirkung.
> Stattdessen sollten Methoden wie [`show()`](/de/docs/Web/API/HTMLDialogElement/show), [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal), `close()` und `requestClose()` verwendet werden, um den Wert des `open`-Attributs zu ändern.

## Beispiele

### Öffnen eines Dialogs

Das folgende Beispiel zeigt einen einfachen Button, der beim Klicken ein {{htmlelement("dialog")}} mit einem Formular über die `showModal()`-Methode öffnet.
Von dort aus können Sie den _Abbrechen_-Button klicken, um das Dialogfeld zu schließen (über die [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode), oder das Formular über den Senden-Button absenden.

Der Code protokolliert den Wert von `open`, wenn sich der Dialogstatus ändert.

#### HTML

```html
<!-- Simple pop-up dialog box -->
<dialog id="dialog">
  <form method="dialog">
    <button type="submit">Close</button>
  </form>
</dialog>

<button id="open">Open Dialog</button>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 170px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const dialog = document.getElementById("dialog");
const openButton = document.getElementById("open");

function openCheck(dialog) {
  log(dialog.open ? "Dialog: open" : "Dialog: closed");
}

openButton.addEventListener("click", () => {
  dialog.showModal();
  openCheck(dialog);
});

dialog.addEventListener("close", () => {
  openCheck(dialog);
});
```

### Ergebnis

{{ EmbedLiveSample('Opening a dialog', '100%', '250px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML {{htmlelement("dialog")}}-Element
