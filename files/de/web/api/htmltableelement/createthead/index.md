---
title: "HTMLTableElement: Methode createTHead()"
short-title: createTHead()
slug: Web/API/HTMLTableElement/createTHead
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die **`createTHead()`**-Methode von
{{domxref("HTMLTableElement")}}-Objekten gibt das mit einem gegebenen {{HtmlElement("table")}}-Element verbundene {{HTMLElement("thead")}}-Element zurück. Wenn in der Tabelle kein Header existiert, erstellt diese Methode ihn und gibt ihn dann zurück.

> [!NOTE]
> Wenn kein Header existiert, fügt `createTHead()` einen neuen
> Header direkt in die Tabelle ein. Der Header muss nicht separat hinzugefügt werden, wie es der Fall wäre, wenn {{domxref("Document.createElement()")}} verwendet worden wäre, um das neue `<thead>`-Element zu erstellen.

## Syntax

```js-nolint
createTHead()
```

### Parameter

Keine.

### Rückgabewert

{{domxref("HTMLTableSectionElement")}}

## Beispiele

```js
let myhead = mytable.createTHead();
// Now this should be true: myhead === mytable.tHead
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
