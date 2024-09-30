---
title: "XPathResult: invalidIteratorState-Eigenschaft"
short-title: invalidIteratorState
slug: Web/API/XPathResult/invalidIteratorState
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("DOM XPath")}} {{AvailableInWorkers}}

Die schreibgeschützte **`invalidIteratorState`**-Eigenschaft der
[`XPathResult`](/de/docs/Web/API/XPathResult)-Schnittstelle zeigt an, dass der Iterator ungültig geworden ist. Sie ist `true`, wenn [`XPathResult.resultType`](/de/docs/Web/API/XPathResult/resultType)
`UNORDERED_NODE_ITERATOR_TYPE` oder `ORDERED_NODE_ITERATOR_TYPE` ist und das Dokument seit der Rückgabe dieses Ergebnisses geändert wurde.

## Wert

Ein boolescher Wert, der angibt, ob der Iterator ungültig geworden ist.

## Beispiele

Das folgende Beispiel zeigt die Verwendung der `invalidIteratorState`-Eigenschaft.

### HTML

```html
<div>XPath example</div>
<p>Iterator state: <output></output></p>
```

### JavaScript

```js
const xpath = "//div";
const result = document.evaluate(
  xpath,
  document,
  null,
  XPathResult.ANY_TYPE,
  null,
);
// Invalidates the iterator state
document.querySelector("div").remove();
document.querySelector("output").textContent = result.invalidIteratorState
  ? "invalid"
  : "valid";
```

### Ergebnis

{{EmbedLiveSample('Examples', 400, 70)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
