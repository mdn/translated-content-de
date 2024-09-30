---
title: "HTMLTableElement: createTHead() Methode"
short-title: createTHead()
slug: Web/API/HTMLTableElement/createTHead
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die **`createTHead()`** Methode von
[`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)-Objekten gibt das {{HTMLElement("thead")}}-Element zurück,
das mit einem gegebenen {{HtmlElement("table")}} verbunden ist. Falls kein Header in der Tabelle existiert, wird dieser
durch diese Methode erstellt und dann zurückgegeben.

> [!NOTE]
> Wenn kein Header existiert, fügt `createTHead()` einen neuen
> Header direkt in die Tabelle ein. Der Header muss nicht separat hinzugefügt werden, wie es der Fall gewesen wäre, wenn
> [`Document.createElement()`](/de/docs/Web/API/Document/createElement) verwendet worden wäre, um das neue `<thead>`-Element zu erstellen.

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
let myhead = mytable.createTHead();
// Now this should be true: myhead === mytable.tHead
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
