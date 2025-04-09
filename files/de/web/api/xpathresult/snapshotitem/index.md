---
title: "XPathResult: snapshotItem() Methode"
short-title: snapshotItem()
slug: Web/API/XPathResult/snapshotItem
l10n:
  sourceCommit: b8cd964ef488e9691252e02f6ad1ebd3293b8eaa
---

{{APIRef("DOM XPath")}}

Die **`snapshotItem()`**-Methode der [`XPathResult`](/de/docs/Web/API/XPathResult)-Schnittstelle gibt ein Element der Snapshot-Sammlung zurück oder `null`, falls der Index nicht innerhalb des Bereichs der Knoten liegt. Im Gegensatz zum Iterator-Resultat wird der Snapshot nicht ungültig, kann jedoch nicht mehr dem aktuellen Dokument entsprechen, wenn es verändert wird.

## Syntax

```js-nolint
snapshotItem(i)
```

### Parameter

- `i`
  - : Eine Zahl, der Index des Elements.

### Rückgabewert

Der [`Node`](/de/docs/Web/API/Node) am angegebenen Index innerhalb des Knotensets des
`XPathResult`.

### Ausnahmen

#### TYPE_ERR

Falls [`XPathResult.resultType`](/de/docs/Web/API/XPathResult/resultType) nicht
`UNORDERED_NODE_SNAPSHOT_TYPE` oder `ORDERED_NODE_SNAPSHOT_TYPE` ist, wird eine
[`DOMException`](/de/docs/Web/API/DOMException) vom Typ `TYPE_ERR` ausgelöst.

## Beispiele

Das folgende Beispiel zeigt die Verwendung der `snapshotItem()`-Methode.

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
