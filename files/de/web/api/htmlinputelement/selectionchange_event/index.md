---
title: "HTMLInputElement: `selectionchange`-Ereignis"
short-title: selectionchange
slug: Web/API/HTMLInputElement/selectionchange_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Selection API")}}

Das **`selectionchange`**-Ereignis der [Selection API](/de/docs/Web/API/Selection) wird ausgelöst, wenn die Textauswahl innerhalb eines {{HTMLElement("input")}}-Elements geändert wird.
Dies umfasst sowohl Änderungen im ausgewählten Bereich von Zeichen oder wenn der Cursor sich bewegt.

Dieses Ereignis kann nicht abgebrochen werden.

Das Ereignis wird üblicherweise verarbeitet, indem ein Event-Listener auf das {{HTMLElement("input")}} hinzugefügt wird. In der Handler-Funktion wird dann auf die `selectionStart`, `selectionEnd` und `selectionDirection` Eigenschaften des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) zugegriffen.

Es ist auch möglich, einen Listener auf dem `onselectionchange`-Ereignis-Handler hinzuzufügen und innerhalb der Handler-Funktion [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection) zu verwenden, um die [`Selection`](/de/docs/Web/API/Selection) zu erhalten. Dies ist jedoch nicht besonders nützlich, um Änderungen an _Text_-Auswahlen zu erhalten.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("selectionchange", (event) => { })

onselectionchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Das folgende Beispiel zeigt, wie man den im {{HTMLElement("input")}}-Element ausgewählten Text erhält.

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
