---
title: "XPathResult: resultType-Eigenschaft"
short-title: resultType
slug: Web/API/XPathResult/resultType
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("DOM")}} {{AvailableInWorkers}}

Die schreibgeschützte **`resultType`**-Eigenschaft des [`XPathResult`](/de/docs/Web/API/XPathResult)-Interfaces repräsentiert den Typ des Ergebnisses, wie durch die Typkonstanten definiert.

## Wert

Ein ganzzahliger Wert, der den Typ des Ergebnisses darstellt, wie durch die Typkonstanten definiert.

## Konstanten

<table class="no-markdown">
  <thead>
    <tr>
      <th>Definierte Resultattyp-Konstante</th>
      <th>Wert</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ANY_TYPE</code></td>
      <td><code>0</code></td>
      <td>
        Ein Ergebnismenge, die den von der Auswertung des Ausdrucks natürlich resultierenden Typ enthält. Beachten Sie, dass wenn das Ergebnis eine Knotenmenge ist, <code>UNORDERED_NODE_ITERATOR_TYPE</code> immer der resultierende Typ ist.
      </td>
    </tr>
    <tr>
      <td><code>NUMBER_TYPE</code></td>
      <td><code>1</code></td>
      <td>
        Ein Ergebnis, das eine einzelne Zahl enthält. Dies ist nützlich zum Beispiel in einem XPath-Ausdruck, der die <code>count()</code>-Funktion verwendet.
      </td>
    </tr>
    <tr>
      <td><code>STRING_TYPE</code></td>
      <td><code>2</code></td>
      <td>Ein Ergebnis, das eine einzelne Zeichenkette enthält.</td>
    </tr>
    <tr>
      <td><code>BOOLEAN_TYPE</code></td>
      <td><code>3</code></td>
      <td>
        Ein Ergebnis, das einen einzelnen booleschen Wert enthält. Dies ist nützlich zum Beispiel in einem XPath-Ausdruck, der die <code>not()</code>-Funktion verwendet.
      </td>
    </tr>
    <tr>
      <td><code>UNORDERED_NODE_ITERATOR_TYPE</code></td>
      <td><code>4</code></td>
      <td>
        Eine Ergebnisknotenmenge, die alle Knoten enthält, die mit dem Ausdruck übereinstimmen. Die Knoten müssen nicht unbedingt in der gleichen Reihenfolge sein, wie sie im Dokument erscheinen.
      </td>
    </tr>
    <tr>
      <td><code>ORDERED_NODE_ITERATOR_TYPE</code></td>
      <td><code>5</code></td>
      <td>
        Eine Ergebnisknotenmenge, die alle Knoten enthält, die mit dem Ausdruck übereinstimmen. Die Knoten in der Ergebnismenge sind in der gleichen Reihenfolge, wie sie im Dokument erscheinen.
      </td>
    </tr>
    <tr>
      <td><code>UNORDERED_NODE_SNAPSHOT_TYPE</code></td>
      <td><code>6</code></td>
      <td>
        Eine Ergebnisknotenmenge, die Schnappschüsse aller Knoten enthält, die mit dem Ausdruck übereinstimmen. Die Knoten müssen nicht unbedingt in der gleichen Reihenfolge sein, wie sie im Dokument erscheinen.
      </td>
    </tr>
    <tr>
      <td><code>ORDERED_NODE_SNAPSHOT_TYPE</code></td>
      <td><code>7</code></td>
      <td>
        Eine Ergebnisknotenmenge, die Schnappschüsse aller Knoten enthält, die mit dem Ausdruck übereinstimmen. Die Knoten in der Ergebnismenge sind in der gleichen Reihenfolge, wie sie im Dokument erscheinen.
      </td>
    </tr>
    <tr>
      <td><code>ANY_UNORDERED_NODE_TYPE</code></td>
      <td><code>8</code></td>
      <td>
        Eine Ergebnisknotenmenge, die einen beliebigen einzelnen Knoten enthält, der mit dem Ausdruck übereinstimmt. Der Knoten ist nicht unbedingt der erste Knoten im Dokument, der mit dem Ausdruck übereinstimmt.
      </td>
    </tr>
    <tr>
      <td><code>FIRST_ORDERED_NODE_TYPE</code></td>
      <td><code>9</code></td>
      <td>
        Eine Ergebnisknotenmenge, die den ersten Knoten im Dokument enthält, der mit dem Ausdruck übereinstimmt.
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

Das folgende Beispiel zeigt die Verwendung der `resultType`-Eigenschaft.

### HTML

```html
<div>XPath example</div>
<div>Is XPath result a node set: <output></output></div>
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
document.querySelector("output").textContent =
  result.resultType >= XPathResult.UNORDERED_NODE_ITERATOR_TYPE &&
  result.resultType <= XPathResult.FIRST_ORDERED_NODE_TYPE;
```

### Ergebnis

{{EmbedLiveSample('Examples', 400, 70)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
