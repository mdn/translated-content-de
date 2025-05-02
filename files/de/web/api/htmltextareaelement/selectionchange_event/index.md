---
title: "HTMLTextAreaElement: selectionchange event"
short-title: selectionchange
slug: Web/API/HTMLTextAreaElement/selectionchange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}{{SeeCompatTable}}

Das **`selectionchange`**-Ereignis der [Selection API](/de/docs/Web/API/Selection) wird ausgelöst, wenn die Textauswahl innerhalb eines {{HTMLElement("textarea")}}-Elements geändert wird. Dies beinhaltet sowohl Änderungen im ausgewählten Zeichenbereich als auch das Verschieben des Cursors.

Dieses Ereignis kann nicht abgebrochen werden.

Das Ereignis wird normalerweise verarbeitet, indem ein Ereignislistener auf das {{HTMLElement("textarea")}} hinzugefügt wird und in der Handlerfunktion die Eigenschaften `selectionStart`, `selectionEnd` und `selectionDirection` des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) ausgelesen werden.

Es ist auch möglich, einen Listener am globalen `onselectionchange`-Ereignishandler hinzuzufügen und innerhalb der Handlerfunktion mittels [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection) die [`Selection`](/de/docs/Web/API/Selection) abzurufen. Dies ist jedoch nicht sehr nützlich, um Änderungen an _Textauswahlen_ zu erkennen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("selectionchange", (event) => { })

onselectionchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Das folgende Beispiel zeigt, wie man den im {{HTMLElement("textarea")}}-Element ausgewählten Text erhält.

### HTML

```html
<div>
  Enter and select text here:<br /><textarea
    id="my-text"
    rows="2"
    cols="20"></textarea>
</div>
<div>selectionStart: <span id="start"></span></div>
<div>selectionEnd: <span id="end"></span></div>
<div>selectionDirection: <span id="direction"></span></div>
```

### JavaScript

```js
const myInput = document.getElementById("my-text");

myInput.addEventListener("selectionchange", () => {
  document.getElementById("start").textContent = myInput.selectionStart;
  document.getElementById("end").textContent = myInput.selectionEnd;
  document.getElementById("direction").textContent = myInput.selectionDirection;
});
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
