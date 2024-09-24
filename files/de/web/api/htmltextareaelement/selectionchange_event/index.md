---
title: "HTMLTextAreaElement: selectionchange-Ereignis"
short-title: selectionchange
slug: Web/API/HTMLTextAreaElement/selectionchange_event
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef}}{{SeeCompatTable}}

Das **`selectionchange`**-Ereignis der [Selection API](/de/docs/Web/API/Selection) wird ausgelöst, wenn die Textauswahl innerhalb eines {{HTMLElement("textarea")}}-Elements geändert wird. Dies umfasst sowohl Änderungen im ausgewählten Zeichenbereich als auch das Bewegen des Cursors.

Dieses Ereignis ist nicht abbrechbar.

Das Ereignis wird normalerweise verarbeitet, indem ein Ereignislistener auf das {{HTMLElement("textarea")}} hinzugefügt wird, in der Handler-Funktion werden die Eigenschaften `selectionStart`, `selectionEnd` und `selectionDirection` des {{domxref("HTMLTextAreaElement")}} ausgelesen.

Es ist auch möglich, einen Listener auf den globalen `onselectionchange` Ereignis-Handler hinzuzufügen und in der Handler-Funktion {{domxref("Document.getSelection()")}} zu verwenden, um an die {{domxref("Selection", "Selektion")}} zu gelangen. Dies ist jedoch nicht sehr nützlich, um Änderungen bei _Text_-Auswahlen zu erhalten.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("selectionchange", (event) => {});

onselectionchange = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Das untenstehende Beispiel zeigt, wie man den in einem {{HTMLElement("textarea")}}-Element ausgewählten Text ermitteln kann.

### HTML

```html
<div>
  Geben Sie hier Text ein und wählen Sie ihn aus:<br /><textarea
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
