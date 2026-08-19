---
title: "HTMLTableElement: createTBody() Methode"
short-title: createTBody()
slug: Web/API/HTMLTableElement/createTBody
l10n:
  sourceCommit: ea061caed30f127a79157d07c538d26f01b8702b
---

{{APIRef("HTML DOM")}}

Die **`createTBody()`** Methode der [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement) Schnittstelle erstellt ein {{HTMLElement("tbody")}}-Element, fügt es unmittelbar nach dem letzten {{HTMLElement("tbody")}}-Kindelement des angegebenen {{HTMLElement("table")}} ein oder als letztes Kindelement, wenn kein solches Element existiert, und gibt es zurück.

Diese Methode erstellt und fügt das Element direkt ein, ohne separate Aufrufe von Methoden wie [`Document.createElement()`](/de/docs/Web/API/Document/createElement), [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) und [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) zu erfordern.

> [!NOTE]
> Im Gegensatz zu [`HTMLTableElement.createTHead()`](/de/docs/Web/API/HTMLTableElement/createTHead) und [`HTMLTableElement.createTFoot()`](/de/docs/Web/API/HTMLTableElement/createTFoot) erstellt `createTBody()` immer ein neues `<tbody>`-Element, selbst wenn die Tabelle bereits ein oder mehrere `tbody`-Elemente enthält.

## Syntax

```js-nolint
createTBody()
```

### Parameter

Keine.

### Rückgabewert

Ein [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement) (das immer ein `tbody` ist).

## Beispiele

```js
const myBody = myTable.createTBody();
// Now this should be true: myBody === myTable.tBodies.item(myTable.tBodies.length - 1)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTableElement.createCaption()`](/de/docs/Web/API/HTMLTableElement/createCaption)
- [`HTMLTableElement.createTFoot()`](/de/docs/Web/API/HTMLTableElement/createTFoot)
- [`HTMLTableElement.createTHead()`](/de/docs/Web/API/HTMLTableElement/createTHead)
