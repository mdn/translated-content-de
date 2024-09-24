---
title: XPathResult
slug: Web/API/XPathResult
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{APIRef}}

Das **`XPathResult`** Interface repräsentiert die Ergebnisse, die durch die Auswertung eines XPath-Ausdrucks im Kontext eines gegebenen Knotens generiert werden.

Da XPath-Ausdrücke eine Vielzahl von Ergebnistypen hervorbringen können, ermöglicht dieses Interface es, den Typ und den Wert des Ergebnisses zu bestimmen und zu handhaben.

## Instanz-Eigenschaften

- {{domxref("XPathResult.booleanValue")}} {{ReadOnlyInline}}
  - : Ein `boolean`, der den Wert des Ergebnisses darstellt, wenn `resultType` `BOOLEAN_TYPE` ist.
- {{domxref("XPathResult.invalidIteratorState")}} {{ReadOnlyInline}}
  - : Zeigt an, dass der Iterator ungültig geworden ist. Es ist `wahr`, wenn `resultType` `UNORDERED_NODE_ITERATOR_TYPE` oder `ORDERED_NODE_ITERATOR_TYPE` ist und das Dokument seit der Rückgabe dieses Ergebnisses geändert wurde.
- {{domxref("XPathResult.numberValue")}} {{ReadOnlyInline}}
  - : Eine `number`, die den Wert des Ergebnisses darstellt, wenn `resultType` `NUMBER_TYPE` ist.
- {{domxref("XPathResult.resultType")}} {{ReadOnlyInline}}
  - : Ein `number` Code, der den Typ des Ergebnisses darstellt, wie durch die Typkonstanten definiert.
- {{domxref("XPathResult.singleNodeValue")}} {{ReadOnlyInline}}
  - : Ein {{domxref("Node")}}, der den Wert des Einzelknoten-Ergebnisses darstellt, das `null` sein kann.
- {{domxref("XPathResult.snapshotLength")}} {{ReadOnlyInline}}
  - : Die Anzahl der Knoten im Ergebnis-Snapshot.
- {{domxref("XPathResult.stringValue")}} {{ReadOnlyInline}}
  - : Ein String, der den Wert des Ergebnisses darstellt, wenn `resultType` `STRING_TYPE` ist.

## Instanz-Methoden

- {{domxref("XPathResult.iterateNext()")}}
  - : Wenn das Ergebnis ein Knoten-Set ist, iteriert diese Methode darüber und gibt den nächsten Knoten daraus zurück oder `null`, wenn es keine weiteren Knoten gibt.
- {{domxref("XPathResult.snapshotItem()")}}
  - : Gibt ein Element der Snapshot-Sammlung zurück oder `null`, falls der Index nicht innerhalb der Knotenreichweite liegt. Im Gegensatz zum Iterator-Ergebnis wird der Snapshot nicht ungültig, könnte jedoch nicht mit dem aktuellen Dokument übereinstimmen, wenn es verändert wird.

## Konstanten

<table class="no-markdown">
  <thead>
    <tr>
      <th>Resultattyp-definierte Konstante</th>
      <th>Wert</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ANY_TYPE</code></td>
      <td><code>0</code></td>
      <td>
        Ein Ergebnis-Set, das enthält, welchen Typ auch immer die Auswertung des Ausdrucks natürlich ergibt. Beachten Sie, dass wenn das Ergebnis ein Knoten-Set ist, dann
        <code>UNORDERED_NODE_ITERATOR_TYPE</code> immer der resultierende Typ ist.
      </td>
    </tr>
    <tr>
      <td><code>NUMBER_TYPE</code></td>
      <td><code>1</code></td>
      <td>
        Ein Ergebnis, das eine einzelne Zahl enthält. Dies ist nützlich, beispielsweise bei einem XPath-Ausdruck, der die <code>count()</code>-Funktion verwendet.
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
        Ein Ergebnis, das einen einzelnen boolean Wert enthält. Dies ist nützlich, beispielsweise bei einem XPath-Ausdruck, der die <code>not()</code>-Funktion verwendet.
      </td>
    </tr>
    <tr>
      <td><code>UNORDERED_NODE_ITERATOR_TYPE</code></td>
      <td><code>4</code></td>
      <td>
        Ein Ergebnis-Knoten-Set, das alle Knoten enthält, die dem Ausdruck entsprechen. Die Knoten müssen nicht notwendigerweise in der gleichen Reihenfolge sein, in der sie im Dokument erscheinen.
      </td>
    </tr>
    <tr>
      <td><code>ORDERED_NODE_ITERATOR_TYPE</code></td>
      <td><code>5</code></td>
      <td>
        Ein Ergebnis-Knoten-Set, das alle Knoten enthält, die dem Ausdruck entsprechen. Die Knoten im Ergebnis-Set sind in der gleichen Reihenfolge, in der sie im Dokument erscheinen.
      </td>
    </tr>
    <tr>
      <td><code>UNORDERED_NODE_SNAPSHOT_TYPE</code></td>
      <td><code>6</code></td>
      <td>
        Ein Ergebnis-Knoten-Set, das Snapshots aller Knoten enthält, die dem Ausdruck entsprechen. Die Knoten müssen nicht notwendigerweise in der gleichen Reihenfolge sein, in der sie im Dokument erscheinen.
      </td>
    </tr>
    <tr>
      <td><code>ORDERED_NODE_SNAPSHOT_TYPE</code></td>
      <td><code>7</code></td>
      <td>
        Ein Ergebnis-Knoten-Set, das Snapshots aller Knoten enthält, die dem Ausdruck entsprechen. Die Knoten im Ergebnis-Set sind in der gleichen Reihenfolge, in der sie im Dokument erscheinen.
      </td>
    </tr>
    <tr>
      <td><code>ANY_UNORDERED_NODE_TYPE</code></td>
      <td><code>8</code></td>
      <td>
        Ein Ergebnis-Knoten-Set, das einen beliebigen einzelnen Knoten enthält, der dem Ausdruck entspricht. Der Knoten ist nicht notwendigerweise der erste Knoten im Dokument, der dem Ausdruck entspricht.
      </td>
    </tr>
    <tr>
      <td><code>FIRST_ORDERED_NODE_TYPE</code></td>
      <td><code>9</code></td>
      <td>
        Ein Ergebnis-Knoten-Set, das den ersten Knoten im Dokument enthält, der dem Ausdruck entspricht.
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Document.evaluate()")}}
- {{domxref("XPathExpression")}}
- [Dottoro Web Reference - XPathResult Objekt](http://help.dottoro.com/ljagksjc.php)
