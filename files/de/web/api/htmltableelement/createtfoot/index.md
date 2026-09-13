---
title: "HTMLTableElement: createTFoot() Methode"
short-title: createTFoot()
slug: Web/API/HTMLTableElement/createTFoot
l10n:
  sourceCommit: ea061caed30f127a79157d07c538d26f01b8702b
---

{{APIRef("HTML DOM")}}

Die **`createTFoot()`** Methode des [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement) Interfaces erstellt ein {{HTMLElement("tfoot")}}-Element, fügt es als letztes Kind des gegebenen {{HTMLElement("table")}} ein und gibt es zurück. Wenn die Tabelle bereits ein `<tfoot>`-Element als Kind hat, gibt diese Methode das erste solche Kind zurück, ohne ein neues zu erstellen.

Wenn eine Erstellung erforderlich ist, erstellt und fügt diese Methode das Element direkt ein, ohne dass separate Aufrufe von Methoden wie [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) erforderlich sind.

## Syntax

```js-nolint
createTFoot()
```

### Parameter

Keine.

### Rückgabewert

Ein [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement) (das immer ein `tfoot` ist).

## Beispiele

```js
const myFoot = myTable.createTFoot();
// Now this should be true: myFoot === myTable.tFoot
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTableElement.createCaption()`](/de/docs/Web/API/HTMLTableElement/createCaption)
- [`HTMLTableElement.createTBody()`](/de/docs/Web/API/HTMLTableElement/createTBody)
- [`HTMLTableElement.createTHead()`](/de/docs/Web/API/HTMLTableElement/createTHead)
- [`HTMLTableElement.deleteTFoot()`](/de/docs/Web/API/HTMLTableElement/deleteTFoot)
