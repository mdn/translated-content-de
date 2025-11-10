---
title: "XPathResult: snapshotItem() Methode"
short-title: snapshotItem()
slug: Web/API/XPathResult/snapshotItem
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("DOM")}}

Die **`snapshotItem()`** Methode der
[`XPathResult`](/de/docs/Web/API/XPathResult) Schnittstelle gibt ein Element der Snapshot-Sammlung zurück oder
`null`, falls der Index nicht innerhalb des Bereichs der Knoten liegt. Im Gegensatz zum
Iteratorergebnis wird der Snapshot nicht ungültig, kann jedoch möglicherweise nicht mehr dem
aktuellen Dokument entsprechen, wenn dieses verändert wird.

## Syntax

```js-nolint
snapshotItem(i)
```

### Parameter

- `i`
  - : Eine Zahl, der Index des Elements.

### Rückgabewert

Der [`Node`](/de/docs/Web/API/Node) am angegebenen Index innerhalb der Knotengruppe des
`XPathResult`.

### Ausnahmen

#### TYPE_ERR

Falls [`XPathResult.resultType`](/de/docs/Web/API/XPathResult/resultType) nicht
`UNORDERED_NODE_SNAPSHOT_TYPE` oder `ORDERED_NODE_SNAPSHOT_TYPE` ist, wird ein
[`DOMException`](/de/docs/Web/API/DOMException) vom Typ `TYPE_ERR` ausgelöst.

## Beispiele

Das folgende Beispiel zeigt die Nutzung der `snapshotItem()` Methode.

### HTML

```html
<div>XPath example</div>
<div>Tag names of the matched nodes: <output></output></div>
```

### JavaScript

```js
const xpath = "//div";
const result = document.evaluate(
  xpath,
  document,
  null,
  XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
  null,
);
let node = null;
const tagNames = [];
for (let i = 0; i < result.snapshotLength; i++) {
  node = result.snapshotItem(i);
  tagNames.push(node.localName);
}
document.querySelector("output").textContent = tagNames.join(", ");
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
