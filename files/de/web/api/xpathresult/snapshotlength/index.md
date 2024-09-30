---
title: "XPathResult: snapshotLength-Eigenschaft"
short-title: snapshotLength
slug: Web/API/XPathResult/snapshotLength
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("DOM XPath")}} {{AvailableInWorkers}}

Die schreibgeschützte **`snapshotLength`**-Eigenschaft der [`XPathResult`](/de/docs/Web/API/XPathResult)-Schnittstelle stellt die Anzahl der Knoten im Ergebnissnapshot dar.

## Wert

Ein Integer-Wert, der die Anzahl der Knoten im Ergebnissnapshot darstellt.

### Ausnahmen

#### TYPE_ERR

Falls [`XPathResult.resultType`](/de/docs/Web/API/XPathResult/resultType) nicht
`UNORDERED_NODE_SNAPSHOT_TYPE` oder `ORDERED_NODE_SNAPSHOT_TYPE` ist, wird eine
[`XPathException`](/de/docs/Web/API/XPathException) vom Typ `TYPE_ERR` ausgelöst.

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
