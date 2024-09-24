---
title: "XPathResult: snapshotItem()-Methode"
short-title: snapshotItem()
slug: Web/API/XPathResult/snapshotItem
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM XPath")}}

Die **`snapshotItem()`**-Methode des {{domxref("XPathResult")}}-Interfaces gibt ein Element der Snapshot-Sammlung oder `null` zurück, falls der Index nicht innerhalb des Bereichs der Knoten liegt. Im Gegensatz zum Iterator-Ergebnis wird der Snapshot nicht ungültig, könnte jedoch nicht dem aktuellen Dokument entsprechen, wenn dieses verändert wird.

## Syntax

```js-nolint
snapshotItem(i)
```

### Parameter

- `i`
  - : Eine Zahl, der Index des Elements.

### Rückgabewert

Der {{domxref("Node")}} am angegebenen Index innerhalb der Knotengruppe des `XPathResult`.

### Ausnahmen

#### TYPE_ERR

Falls {{domxref("XPathResult.resultType")}} nicht `UNORDERED_NODE_SNAPSHOT_TYPE` oder `ORDERED_NODE_SNAPSHOT_TYPE` ist, wird eine {{domxref("XPathException")}} vom Typ `TYPE_ERR` ausgelöst.

## Beispiele

Das folgende Beispiel zeigt die Verwendung der `snapshotItem()`-Methode.

### HTML

```html
<div>XPath-Beispiel</div>
<div>Tag-Namen der übereinstimmenden Knoten: <output></output></div>
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
