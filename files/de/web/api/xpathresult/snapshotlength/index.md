---
title: "XPathResult: snapshotLength-Eigenschaft"
short-title: snapshotLength
slug: Web/API/XPathResult/snapshotLength
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("DOM XPath")}} {{AvailableInWorkers}}

Die schreibgeschützte **`snapshotLength`**-Eigenschaft des
{{domxref("XPathResult")}}-Interfaces stellt die Anzahl der Knoten im Ergebnis-Snapshot dar.

## Wert

Ein ganzzahliger Wert, der die Anzahl der Knoten im Ergebnis-Snapshot darstellt.

### Ausnahmen

#### TYPE_ERR

Falls {{domxref("XPathResult.resultType")}} nicht
`UNORDERED_NODE_SNAPSHOT_TYPE` oder `ORDERED_NODE_SNAPSHOT_TYPE` ist, wird eine
{{domxref("XPathException")}} vom Typ `TYPE_ERR` ausgelöst.

## Beispiele

Das folgende Beispiel zeigt die Verwendung der `snapshotLength`-Eigenschaft.

### HTML

```html
<div>XPath-Beispiel</div>
<div>Anzahl der übereinstimmenden Knoten: <output></output></div>
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
