---
title: "HTMLInputElement: selectionchange-Ereignis"
short-title: selectionchange
slug: Web/API/HTMLInputElement/selectionchange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}{{SeeCompatTable}}

Das **`selectionchange`**-Ereignis der [Selection API](/de/docs/Web/API/Selection) wird ausgelöst, wenn sich die Textauswahl innerhalb eines {{HTMLElement("input")}}-Elements ändert.
Dies umfasst sowohl Änderungen im ausgewählten Zeichenbereich als auch Bewegungen des Cursors.

Dieses Ereignis kann nicht abgebrochen werden.

Das Ereignis wird normalerweise verarbeitet, indem ein Event Listener auf das {{HTMLElement("input")}} hinzugefügt wird, und in der Handler-Funktion werden die `selectionStart`, `selectionEnd` und `selectionDirection` Eigenschaften des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) ausgelesen.

Es ist auch möglich, einen Listener auf den `onselectionchange`-Ereignishandler zu setzen und innerhalb der Handler-Funktion [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection) zu verwenden, um die [`Selection`](/de/docs/Web/API/Selection) zu erhalten. Dies ist jedoch nicht sehr nützlich, um Änderungen an _Text_-Auswahlen zu erkennen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("selectionchange", (event) => { })

onselectionchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Das folgende Beispiel zeigt, wie der im {{HTMLElement("input")}}-Element ausgewählte Text abgerufen wird.

### HTML

```html
<div>
  Enter and select text here:<br /><input id="my-text" rows="2" cols="20" />
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
