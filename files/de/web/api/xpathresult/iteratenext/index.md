---
title: "XPathResult: iterateNext() Methode"
short-title: iterateNext()
slug: Web/API/XPathResult/iterateNext
l10n:
  sourceCommit: b8cd964ef488e9691252e02f6ad1ebd3293b8eaa
---

{{APIRef("DOM XPath")}}

Die **`iterateNext()`**-Methode der
[`XPathResult`](/de/docs/Web/API/XPathResult)-Schnittstelle durchläuft ein Node-Set-Ergebnis und gibt den
nächsten Knoten daraus zurück oder `null`, wenn keine weiteren Knoten vorhanden sind.

## Syntax

```js-nolint
iterateNext()
```

### Parameter

Keine.

### Rückgabewert

Der nächste [`Node`](/de/docs/Web/API/Node) innerhalb des Node-Sets des `XPathResult`.

### Ausnahmen

#### TYPE_ERR

Falls [`XPathResult.resultType`](/de/docs/Web/API/XPathResult/resultType) nicht
`UNORDERED_NODE_ITERATOR_TYPE` oder `ORDERED_NODE_ITERATOR_TYPE` ist, wird eine
[`DOMException`](/de/docs/Web/API/DOMException) vom Typ `TYPE_ERR` ausgelöst.

#### INVALID_STATE_ERR

Falls das Dokument verändert wurde, seit das Ergebnis zurückgegeben wurde, wird eine
[`DOMException`](/de/docs/Web/API/DOMException) vom Typ `INVALID_STATE_ERR` ausgelöst.

## Beispiele

Das folgende Beispiel zeigt die Nutzung der `iterateNext()`-Methode.

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
