---
title: "HTMLTableElement: createTBody() Methode"
short-title: createTBody()
slug: Web/API/HTMLTableElement/createTBody
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("HTML DOM")}}

Die **`createTBody()`**-Methode von [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)-Objekten erstellt und gibt ein neues {{HTMLElement("tbody")}}-Element zurück, das mit einem gegebenen {{HtmlElement("table")}} verknüpft ist.

> [!NOTE]
> Im Gegensatz zu [`HTMLTableElement.createTHead()`](/de/docs/Web/API/HTMLTableElement/createTHead) und [`HTMLTableElement.createTFoot()`](/de/docs/Web/API/HTMLTableElement/createTFoot) erstellt `createTBody()` systematisch ein neues `<tbody>`-Element, selbst wenn die Tabelle bereits ein oder mehrere `bodies` enthält. In diesem Fall wird das neue hinter den vorhandenen eingefügt.

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
let myBody = myTable.createTBody();
// Now this should be true: myBody === myTable.tBodies.item(myTable.tBodies.length - 1)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
