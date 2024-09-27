---
title: "HTMLTableElement: Methode createTBody()"
short-title: createTBody()
slug: Web/API/HTMLTableElement/createTBody
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die **`createTBody()`**-Methode von
[`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)-Objekten erstellt und gibt ein neues
{{HTMLElement("tbody")}}-Element zurück, das mit einem gegebenen {{HtmlElement("table")}} verbunden ist.

> [!NOTE]
> Im Gegensatz zu [`HTMLTableElement.createTHead()`](/de/docs/Web/API/HTMLTableElement/createTHead) und
> [`HTMLTableElement.createTFoot()`](/de/docs/Web/API/HTMLTableElement/createTFoot) erstellt `createTBody()`
> systematisch ein neues `<tbody>`-Element, selbst wenn die Tabelle bereits einen oder mehrere `tbody`-Elemente enthält. In diesem Fall wird das neue `<tbody>` hinter den bestehenden eingefügt.

## Syntax

```js-nolint
createTBody()
```

### Parameter

Keine.

### Rückgabewert

[`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement)

## Beispiele

```js
let mybody = mytable.createTBody();
// Now this should be true: mybody === mytable.tBodies.item(mytable.tBodies.length - 1)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
