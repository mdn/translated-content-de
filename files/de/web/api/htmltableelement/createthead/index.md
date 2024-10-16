---
title: "HTMLTableElement: createTHead() Methode"
short-title: createTHead()
slug: Web/API/HTMLTableElement/createTHead
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("HTML DOM")}}

Die **`createTHead()`** Methode von
[`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement) Objekten gibt das {{HTMLElement("thead")}}-Element zurück, das mit einer bestimmten {{HtmlElement("table")}} verknüpft ist. Wenn in der Tabelle kein Header vorhanden ist, erstellt diese Methode ihn und gibt ihn dann zurück.

> [!NOTE]
> Wenn kein Header existiert, fügt `createTHead()` einen neuen Header direkt in die Tabelle ein. Der Header muss nicht separat hinzugefügt werden, wie es der Fall wäre, wenn [`Document.createElement()`](/de/docs/Web/API/Document/createElement) verwendet worden wäre, um das neue `<thead>`-Element zu erstellen.

## Syntax

```js-nolint
createTHead()
```

### Parameter

Keine.

### Rückgabewert

[`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement)

## Beispiele

```js
let myHead = myTable.createTHead();
// Now this should be true: myHead === myTable.tHead
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
