---
title: "HTMLInputElement: selectionchange-Ereignis"
short-title: selectionchange
slug: Web/API/HTMLInputElement/selectionchange_event
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef}}{{SeeCompatTable}}

Das **`selectionchange`**-Ereignis der [Selection API](/de/docs/Web/API/Selection) wird ausgelöst, wenn die Textauswahl innerhalb eines {{HTMLElement("input")}}-Elements geändert wird. Dies umfasst sowohl Änderungen im ausgewählten Zeichnungsbereich als auch, wenn sich der Cursor bewegt.

Dieses Ereignis ist nicht abbrechbar.

Das Ereignis wird in der Regel verarbeitet, indem ein Ereignis-Listener auf dem {{HTMLElement("input")}} hinzugefügt wird, und in der Handlerfunktion wird auf die Eigenschaften `selectionStart`, `selectionEnd` und `selectionDirection` des {{domxref("HTMLInputElement")}} zugegriffen.

Es ist auch möglich, einen Listener für den `onselectionchange`-Ereignis-Handler hinzuzufügen und innerhalb der Handlerfunktion {{domxref("Document.getSelection()")}} zu verwenden, um die {{domxref("Selection", "Auswahl")}} zu erhalten. Dies ist jedoch nicht sehr nützlich, um Änderungen an _Textauswahlen_ zu erhalten.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("selectionchange", (event) => {});

onselectionchange = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Das folgende Beispiel zeigt, wie der im {{HTMLElement("input")}}-Element ausgewählte Text ermittelt werden kann.

### HTML

```html
<div>
  Geben Sie hier Text ein und wählen Sie ihn aus:<br /><input id="mytext" rows="2" cols="20" />
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
