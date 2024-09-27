---
title: "HTMLTableElement: createTFoot() Methode"
short-title: createTFoot()
slug: Web/API/HTMLTableElement/createTFoot
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die **`createTFoot()`** Methode von
[`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement) Objekten gibt das {{HTMLElement("tfoot")}} Element
zurück, das mit einem gegebenen {{HtmlElement("table")}} verbunden ist. Wenn kein Footer in der Tabelle
vorhanden ist, erstellt diese Methode ihn und gibt ihn dann zurück.

> [!NOTE]
> Wenn kein Footer vorhanden ist, fügt `createTFoot()` einen neuen
> Footer direkt in die Tabelle ein. Der Footer muss nicht separat hinzugefügt werden, wie es der Fall wäre, wenn [`Document.createElement()`](/de/docs/Web/API/Document/createElement) verwendet worden wäre, um
> das neue `<tfoot>` Element zu erstellen.

## Syntax

```js-nolint
createTFoot()
```

### Parameter

Keine.

### Rückgabewert

[`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement)

## Beispiele

```js
let myfoot = mytable.createTFoot();
// Now this should be true: myfoot === mytable.tFoot
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
