---
title: "XPathResult: resultType-Eigenschaft"
short-title: resultType
slug: Web/API/XPathResult/resultType
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("DOM XPath")}} {{AvailableInWorkers}}

Die schreibgeschützte **`resultType`**-Eigenschaft der {{domxref("XPathResult")}}-Schnittstelle repräsentiert den Typ des Ergebnisses, wie durch die Typkonstanten definiert.

## Wert

Ein Ganzzahlwert, der den Typ des Ergebnisses repräsentiert, wie durch die Typkonstanten definiert.

## Konstanten

<table class="no-markdown">
  <thead>
    <tr>
      <th>Ergebnistyp Definierte Konstante</th>
      <th>Wert</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ANY_TYPE</code></td>
      <td><code>0</code></td>
      <td>
        Ein Ergebnis-Set, das den Typ enthält, der sich natürlich aus der
        Auswertung des Ausdrucks ergibt. Beachten Sie, dass, wenn das Ergebnis
        ein Knoten-Set ist, <code>UNORDERED_NODE_ITERATOR_TYPE</code> immer der
        resultierende Typ ist.
      </td>
    </tr>
    <tr>
      <td><code>NUMBER_TYPE</code></td>
      <td><code>1</code></td>
      <td>
        Ein Ergebnis, das eine einzelne Zahl enthält. Dies ist nützlich zum
        Beispiel in einem XPath-Ausdruck, der die <code>count()</code>-Funktion
        verwendet.
      </td>
    </tr>
    <tr>
      <td><code>STRING_TYPE</code></td>
      <td><code>2</code></td>
      <td>Ein Ergebnis, das einen einzelnen String enthält.</td>
    </tr>
    <tr>
      <td><code>BOOLEAN_TYPE</code></td>
      <td><code>3</code></td>
      <td>
        Ein Ergebnis, das einen einzelnen booleschen Wert enthält. Dies ist
        nützlich zum Beispiel in einem XPath-Ausdruck, der die
        <code>not()</code>-Funktion verwendet.
      </td>
    </tr>
    <tr>
      <td><code>UNORDERED_NODE_ITERATOR_TYPE</code></td>
      <td><code>4</code></td>
      <td>
        Ein Ergebnis-Knoten-Set, das alle Knoten enthält, die dem Ausdruck
        entsprechen. Die Knoten sind möglicherweise nicht in der gleichen
        Reihenfolge wie im Dokument.
      </td>
    </tr>
    <tr>
      <td><code>ORDERED_NODE_ITERATOR_TYPE</code></td>
      <td><code>5</code></td>
      <td>
        Ein Ergebnis-Knoten-Set, das alle Knoten enthält, die dem Ausdruck
        entsprechen. Die Knoten im Ergebnis-Set sind in der gleichen Reihenfolge,
        wie sie im Dokument erscheinen.
      </td>
    </tr>
    <tr>
      <td><code>UNORDERED_NODE_SNAPSHOT_TYPE</code></td>
      <td><code>6</code></td>
      <td>
        Ein Ergebnis-Knoten-Set, das Schnappschüsse aller Knoten enthält, die dem
        Ausdruck entsprechen. Die Knoten sind möglicherweise nicht in der gleichen
        Reihenfolge wie im Dokument.
      </td>
    </tr>
    <tr>
      <td><code>ORDERED_NODE_SNAPSHOT_TYPE</code></td>
      <td><code>7</code></td>
      <td>
        Ein Ergebnis-Knoten-Set, das Schnappschüsse aller Knoten enthält, die dem
        Ausdruck entsprechen. Die Knoten im Ergebnis-Set sind in der gleichen
        Reihenfolge, wie sie im Dokument erscheinen.
      </td>
    </tr>
    <tr>
      <td><code>ANY_UNORDERED_NODE_TYPE</code></td>
      <td><code>8</code></td>
      <td>
        Ein Ergebnis-Knoten-Set, das einen beliebigen einzelnen Knoten enthält, der
        dem Ausdruck entspricht. Der Knoten ist nicht unbedingt der erste Knoten,
        der im Dokument dem Ausdruck entspricht.
      </td>
    </tr>
    <tr>
      <td><code>FIRST_ORDERED_NODE_TYPE</code></td>
      <td><code>9</code></td>
      <td>
        Ein Ergebnis-Knoten-Set, das den ersten Knoten im Dokument enthält, der dem
        Ausdruck entspricht.
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

Das folgende Beispiel zeigt die Verwendung der `resultType`-Eigenschaft.

### HTML

```html
<div>XPath-Beispiel</div>
<div>Ist XPath-Ergebnis ein Knotenset: <output></output></div>
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
