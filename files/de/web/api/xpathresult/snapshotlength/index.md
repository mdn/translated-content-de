---
title: "XPathResult: snapshotLength-Eigenschaft"
short-title: snapshotLength
slug: Web/API/XPathResult/snapshotLength
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("DOM")}} {{AvailableInWorkers}}

Die schreibgeschützte **`snapshotLength`**-Eigenschaft des
[`XPathResult`](/de/docs/Web/API/XPathResult)-Interfaces repräsentiert die Anzahl der Knoten im Ergebnis-Snapshot.

## Wert

Ein ganzzahliger Wert, der die Anzahl der Knoten im Ergebnis-Snapshot darstellt.

### Ausnahmen

#### TYPE_ERR

Falls [`XPathResult.resultType`](/de/docs/Web/API/XPathResult/resultType) nicht
`UNORDERED_NODE_SNAPSHOT_TYPE` oder `ORDERED_NODE_SNAPSHOT_TYPE` ist, wird ein
[`DOMException`](/de/docs/Web/API/DOMException) vom Typ `TYPE_ERR` ausgelöst.

## Beispiele

Das folgende Beispiel zeigt die Verwendung der `snapshotLength`-Eigenschaft.

### HTML

```html
<div>XPath example</div>
<div>Number of matched nodes: <output></output></div>
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
document.querySelector("output").textContent = result.snapshotLength;
```

### Ergebnis

{{EmbedLiveSample('Examples', 400, 70)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
