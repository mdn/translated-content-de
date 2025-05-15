---
title: "HTMLTextAreaElement: selectionchange-Ereignis"
short-title: selectionchange
slug: Web/API/HTMLTextAreaElement/selectionchange_event
l10n:
  sourceCommit: 81e43a2d1ee5178b01346436c0ec782773fa1bc9
---

{{APIRef}}

Das **`selectionchange`**-Ereignis der [Selection API](/de/docs/Web/API/Selection) wird ausgelöst, wenn die Textauswahl innerhalb eines {{HTMLElement("textarea")}}-Elements verändert wird.
Dies umfasst sowohl Änderungen im ausgewählten Bereich von Zeichen als auch das Verschieben des Cursors.

Dieses Ereignis kann nicht abgebrochen werden.

Das Ereignis wird üblicherweise verarbeitet, indem man einen Ereignislistener auf das {{HTMLElement("textarea")}} hinzufügt und in der Handlerfunktion die `selectionStart`-, `selectionEnd`- und `selectionDirection`-Eigenschaften des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) ausliest.

Es ist auch möglich, einen Listener auf den globalen `onselectionchange`-Ereignishandler hinzuzufügen und innerhalb der Handlerfunktion [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection) zu verwenden, um die [`Selection`](/de/docs/Web/API/Selection) zu erhalten. Dies ist jedoch nicht sehr nützlich, um Änderungen an Textauswahlen zu erhalten.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("selectionchange", (event) => { })

onselectionchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Das folgende Beispiel zeigt, wie man den Text erhält, der in einem {{HTMLElement("textarea")}}-Element ausgewählt ist.

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
