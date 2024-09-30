---
title: "Document: selectionchange Ereignis"
short-title: selectionchange
slug: Web/API/Document/selectionchange_event
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef}}

Das **`selectionchange`** Ereignis der [Selection API](/de/docs/Web/API/Selection) wird ausgelöst, wenn die aktuelle [`Selection`](/de/docs/Web/API/Selection) eines [`Document`](/de/docs/Web/API/Document) geändert wird.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergegeben.

Das Ereignis kann durch Hinzufügen eines Event-Listeners für `selectionchange` oder durch die Verwendung des `onselectionchange` Ereignishandlers behandelt werden.

> [!NOTE]
> Dieses Ereignis ist nicht dasselbe wie die `selectionchange` Ereignisse, die ausgelöst werden, wenn die Textauswahl in einem {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} Element geändert wird. Weitere Informationen finden Sie im [`selectionchange`](/de/docs/Web/API/HTMLInputElement/selectionchange_event) Ereignis des `HTMLInputElement`.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("selectionchange", (event) => {});

onselectionchange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

```js
// addEventListener version
document.addEventListener("selectionchange", () => {
  console.log(document.getSelection());
});

// onselectionchange version
document.onselectionchange = () => {
  console.log(document.getSelection());
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`selectstart`](/de/docs/Web/API/Node/selectstart_event)
- [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection)
- [`Selection`](/de/docs/Web/API/Selection)
