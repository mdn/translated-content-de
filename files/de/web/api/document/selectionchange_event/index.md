---
title: "Document: selectionchange-Ereignis"
short-title: selectionchange
slug: Web/API/Document/selectionchange_event
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef}}

Das **`selectionchange`**-Ereignis der [Selection API](/de/docs/Web/API/Selection) wird ausgelöst, wenn die aktuelle {{domxref("Selection")}} eines {{domxref("Document")}} geändert wird.

Dieses Ereignis kann nicht abgebrochen werden und es wird nicht weitergeleitet.

Das Ereignis kann behandelt werden, indem ein Ereignis-Listener für `selectionchange` hinzugefügt wird oder der `onselectionchange` Ereignishandler verwendet wird.

> [!NOTE]
> Dieses Ereignis ist nicht dasselbe wie die `selectionchange`-Ereignisse, die ausgelöst werden, wenn die Textauswahl in einem {{HTMLElement("input")}}- oder {{HTMLElement("textarea")}}-Element geändert wird. Siehe das {{domxref("HTMLInputElement.selectionchange_event", "selectionchange")}}-Ereignis von `HTMLInputElement` für weitere Details.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("selectionchange", (event) => {});

onselectionchange = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

```js
// addEventListener Version
document.addEventListener("selectionchange", () => {
  console.log(document.getSelection());
});

// onselectionchange Version
document.onselectionchange = () => {
  console.log(document.getSelection());
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Node/selectstart_event", "selectstart")}}
- {{domxref("Document.getSelection()")}}
- {{domxref("Selection", "Selection")}}
