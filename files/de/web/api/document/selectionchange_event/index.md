---
title: "Dokument: selectionchange Ereignis"
short-title: selectionchange
slug: Web/API/Document/selectionchange_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Selection API")}}

Das **`selectionchange`** Ereignis der [Selection API](/de/docs/Web/API/Selection) wird ausgelöst, wenn die aktuelle [`Selection`](/de/docs/Web/API/Selection) eines [`Documents`](/de/docs/Web/API/Document) geändert wird.

Dieses Ereignis ist nicht abbrechbar und wird nicht propagiert.

Das Ereignis kann durch Hinzufügen eines Ereignis-Listeners für `selectionchange` oder durch Verwendung des `onselectionchange` Ereignis-Handlers behandelt werden.

> [!NOTE]
> Dieses Ereignis ist nicht ganz dasselbe wie die `selectionchange` Ereignisse, die ausgelöst werden, wenn die Textauswahl in einem {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} Element geändert wird. Siehe das [`selectionchange`](/de/docs/Web/API/HTMLInputElement/selectionchange_event) Ereignis von `HTMLInputElement` für weitere Details.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

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
