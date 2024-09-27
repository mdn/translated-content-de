---
title: "HTMLTextAreaElement: selectionchange-Ereignis"
short-title: selectionchange
slug: Web/API/HTMLTextAreaElement/selectionchange_event
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef}}{{SeeCompatTable}}

Das **`selectionchange`**-Ereignis der [Selection API](/de/docs/Web/API/Selection) wird ausgelöst, wenn die Textauswahl innerhalb eines {{HTMLElement("textarea")}}-Elements geändert wird. Dies umfasst sowohl Änderungen im ausgewählten Zeichenbereich als auch das Bewegen des Cursors.

Dieses Ereignis kann nicht abgebrochen werden.

Das Ereignis wird normalerweise verarbeitet, indem ein Ereignislistener auf das {{HTMLElement("textarea")}} hinzugefügt wird. In der Handlerfunktion werden die `selectionStart`, `selectionEnd` und `selectionDirection` Eigenschaften des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) ausgelesen.

Es ist auch möglich, einen Listener auf den globalen `onselectionchange` Ereignishandler hinzuzufügen und innerhalb der Handlerfunktion [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection) zu verwenden, um die [`Selection`](/de/docs/Web/API/Selection) zu erhalten. Dies ist jedoch nicht sehr nützlich, um Änderungen an _Text_-Auswahlen zu erhalten.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("selectionchange", (event) => {});

onselectionchange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Das untenstehende Beispiel zeigt, wie man den im {{HTMLElement("textarea")}}-Element ausgewählten Text erhält.

### HTML

```html
<div>
  Enter and select text here:<br /><textarea
    id="mytext"
    rows="2"
    cols="20"></textarea>
</div>
<div>selectionStart: <span id="start"></span></div>
<div>selectionEnd: <span id="end"></span></div>
<div>selectionDirection: <span id="direction"></span></div>
```

### JavaScript

```js
const myinput = document.getElementById("mytext");

myinput.addEventListener("selectionchange", () => {
  document.getElementById("start").textContent = myinput.selectionStart;
  document.getElementById("end").textContent = myinput.selectionEnd;
  document.getElementById("direction").textContent = myinput.selectionDirection;
});
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
