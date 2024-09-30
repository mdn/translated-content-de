---
title: "HTMLInputElement: selectionchange Ereignis"
short-title: selectionchange
slug: Web/API/HTMLInputElement/selectionchange_event
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef}}{{SeeCompatTable}}

Das **`selectionchange`** Ereignis der [Selection API](/de/docs/Web/API/Selection) wird ausgelöst, wenn die Textauswahl innerhalb eines {{HTMLElement("input")}}-Elements verändert wird. Dies umfasst sowohl Änderungen im ausgewählten Zeichenbereich als auch die Bewegung des Cursors.

Dieses Ereignis kann nicht abgebrochen werden.

In der Regel wird das Ereignis verarbeitet, indem ein Ereignislistener auf das {{HTMLElement("input")}} hinzugefügt wird und in der Handler-Funktion die Eigenschaften `selectionStart`, `selectionEnd` und `selectionDirection` des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) gelesen werden.

Es ist auch möglich, einen Listener auf den `onselectionchange` Ereignishandler hinzuzufügen und innerhalb der Handler-Funktion [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection) zu verwenden, um die [`Selection`](/de/docs/Web/API/Selection) zu erhalten. Dies ist jedoch nicht sehr nützlich, um Änderungen an _Text_-Auswahlen zu erhalten.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("selectionchange", (event) => {});

onselectionchange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Das folgende Beispiel zeigt, wie der im {{HTMLElement("input")}} ausgewählte Text abgerufen wird.

### HTML

```html
<div>
  Enter and select text here:<br /><input id="mytext" rows="2" cols="20" />
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
