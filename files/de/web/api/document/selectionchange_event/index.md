---
title: "Dokument: selectionchange Ereignis"
short-title: selectionchange
slug: Web/API/Document/selectionchange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`selectionchange`** Ereignis der [Selection API](/de/docs/Web/API/Selection) wird ausgelöst, wenn die aktuelle [`Selection`](/de/docs/Web/API/Selection) eines [`Dokuments`](/de/docs/Web/API/Document) geändert wird.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weiter verbreitet.

Das Ereignis kann durch Hinzufügen eines Ereignis-Listeners für `selectionchange` oder durch Verwendung des `onselectionchange` Ereignishandlers behandelt werden.

> [!NOTE]
> Dieses Ereignis ist nicht genau dasselbe wie die `selectionchange` Ereignisse, die ausgelöst werden, wenn die Textauswahl in einem {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} Element geändert wird. Weitere Details finden Sie im [`selectionchange`](/de/docs/Web/API/HTMLInputElement/selectionchange_event) Ereignis von `HTMLInputElement`.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("selectionchange", (event) => { })

onselectionchange = (event) => { }
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
