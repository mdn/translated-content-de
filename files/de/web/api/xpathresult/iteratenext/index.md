---
title: "XPathResult: Methode iterateNext()"
short-title: iterateNext()
slug: Web/API/XPathResult/iterateNext
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM XPath")}}

Die **`iterateNext()`**-Methode der {{domxref("XPathResult")}}-Schnittstelle iteriert über ein Knoten-Set-Ergebnis und gibt den nächsten Knoten daraus zurück oder `null`, wenn keine weiteren Knoten vorhanden sind.

## Syntax

```js-nolint
iterateNext()
```

### Parameter

Keine.

### Rückgabewert

Der nächste {{domxref("Node")}} innerhalb des Knoten-Sets des `XPathResult`.

### Ausnahmen

#### TYPE_ERR

Falls {{domxref("XPathResult.resultType")}} nicht `UNORDERED_NODE_ITERATOR_TYPE` oder `ORDERED_NODE_ITERATOR_TYPE` ist, wird eine {{domxref("XPathException")}} vom Typ `TYPE_ERR` ausgelöst.

#### INVALID_STATE_ERR

Falls das Dokument seit der Rückgabe des Ergebnisses verändert wurde, wird eine {{domxref("XPathException")}} vom Typ `INVALID_STATE_ERR` ausgelöst.

## Beispiele

Das folgende Beispiel zeigt die Verwendung der `iterateNext()`-Methode.

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
  XPathResult.ANY_TYPE,
  null,
);
let node = null;
const tagNames = [];
while ((node = result.iterateNext())) {
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
