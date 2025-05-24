---
title: "HTMLTextAreaElement: selectionchange-Event"
short-title: selectionchange
slug: Web/API/HTMLTextAreaElement/selectionchange_event
l10n:
  sourceCommit: 58cc81b21f777d745877ec1430df8ba2852ff411
---

{{APIRef}}

Das **`selectionchange`**-Ereignis der [Selection API](/de/docs/Web/API/Selection) wird ausgelöst, wenn die Textauswahl innerhalb eines {{HTMLElement("textarea")}}-Elements geändert wird. Dies umfasst sowohl Änderungen im ausgewählten Zeichenbereich als auch, wenn der Cursor bewegt wird.

Dieses Ereignis ist nicht abbrechbar.

Das Ereignis wird üblicherweise verarbeitet, indem ein Ereignis-Listener auf das {{HTMLElement("textarea")}} hinzugefügt wird, und in der Handler-Funktion werden die Eigenschaften `selectionStart`, `selectionEnd` und `selectionDirection` des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) ausgelesen.

Es ist auch möglich, einen Listener auf den globalen `onselectionchange`-Event-Handler hinzuzufügen und innerhalb der Handler-Funktion [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection) zu verwenden, um die [`Selection`](/de/docs/Web/API/Selection) zu erhalten. Dies ist jedoch nicht sehr nützlich, um Änderungen an _Text_-Auswahlen zu erhalten.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("selectionchange", (event) => { })

onselectionchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Das folgende Beispiel zeigt, wie der im {{HTMLElement("textarea")}}-Element ausgewählte Text abgerufen wird.

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
