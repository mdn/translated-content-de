---
title: "HTMLTableElement: createTHead() Methode"
short-title: createTHead()
slug: Web/API/HTMLTableElement/createTHead
l10n:
  sourceCommit: ea061caed30f127a79157d07c538d26f01b8702b
---

{{APIRef("HTML DOM")}}

Die **`createTHead()`** Methode des [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement) Interface erstellt ein {{HTMLElement("thead")}}-Element, fügt es vor dem ersten Kind-Element des gegebenen {{HTMLElement("table")}} ein, das weder ein {{HTMLElement("caption")}} noch ein {{HTMLElement("colgroup")}} ist, oder als letztes Kind, wenn kein solcher Einfügeort gefunden wird, und gibt es zurück. Wenn die Tabelle bereits ein `<thead>`-Element hat, gibt diese Methode das erste solche Kind zurück, ohne ein neues zu erstellen.

Wenn die Erstellung erforderlich ist, erstellt und fügt diese Methode das Element direkt ein, ohne dass separate Aufrufe von Methoden wie [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) erforderlich sind.

## Syntax

```js-nolint
createTHead()
```

### Parameter

Keine.

### Rückgabewert

Ein [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement) (das immer ein `thead` ist).

## Beispiele

```js
const myHead = myTable.createTHead();
// Now this should be true: myHead === myTable.tHead
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTableElement.createCaption()`](/de/docs/Web/API/HTMLTableElement/createCaption)
- [`HTMLTableElement.createTBody()`](/de/docs/Web/API/HTMLTableElement/createTBody)
- [`HTMLTableElement.createTFoot()`](/de/docs/Web/API/HTMLTableElement/createTFoot)
- [`HTMLTableElement.deleteTHead()`](/de/docs/Web/API/HTMLTableElement/deleteTHead)
