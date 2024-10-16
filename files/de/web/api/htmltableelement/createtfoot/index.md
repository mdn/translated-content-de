---
title: "HTMLTableElement: createTFoot() Methode"
short-title: createTFoot()
slug: Web/API/HTMLTableElement/createTFoot
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("HTML DOM")}}

Die **`createTFoot()`**-Methode von [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)-Objekten gibt das mit einem bestimmten {{HtmlElement("table")}} verbundene {{HTMLElement("tfoot")}}-Element zurück. Falls kein Fußzeilen-Element in der Tabelle existiert, wird dieses durch die Methode erstellt und anschließend zurückgegeben.

> [!NOTE]
> Wenn keine Fußzeile existiert, fügt `createTFoot()` eine neue Fußzeile direkt in die Tabelle ein. Die Fußzeile muss nicht separat hinzugefügt werden, was der Fall wäre, wenn [`Document.createElement()`](/de/docs/Web/API/Document/createElement) verwendet worden wäre, um das neue `<tfoot>`-Element zu erstellen.

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
let myFoot = myTable.createTFoot();
// Now this should be true: myFoot === myTable.tFoot
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
