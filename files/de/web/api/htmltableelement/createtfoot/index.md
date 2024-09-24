---
title: "HTMLTableElement: Methode createTFoot()"
short-title: createTFoot()
slug: Web/API/HTMLTableElement/createTFoot
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die **`createTFoot()`** Methode von
{{domxref("HTMLTableElement")}} Objekten gibt das {{HTMLElement("tfoot")}}-Element
zurück, das mit einem gegebenen {{HtmlElement("table")}} verknüpft ist. Falls im Table kein Footer vorhanden ist, wird dieser durch die Methode erstellt und anschließend zurückgegeben.

> [!NOTE]
> Falls kein Footer existiert, fügt `createTFoot()` direkt einen neuen
> Footer in die Tabelle ein. Der Footer muss nicht separat hinzugefügt werden, wie es der Fall wäre, wenn {{domxref("Document.createElement()")}} verwendet worden wäre, um das neue `<tfoot>`-Element zu erstellen.

## Syntax

```js-nolint
createTFoot()
```

### Parameter

Keine.

### Rückgabewert

{{domxref("HTMLTableSectionElement")}}

## Beispiele

```js
let myfoot = mytable.createTFoot();
// Now this should be true: myfoot === mytable.tFoot
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}
