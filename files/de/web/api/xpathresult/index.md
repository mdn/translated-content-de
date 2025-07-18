---
title: XPathResult
slug: Web/API/XPathResult
l10n:
  sourceCommit: 03d5115691a7a9fa3df3b6ebd20a0c7eed213252
---

{{APIRef}}

Das **`XPathResult`**-Interface repräsentiert die Ergebnisse, die durch die Auswertung eines XPath-Ausdrucks im Kontext eines gegebenen Knotens erzeugt werden.

Da XPath-Ausdrücke zu verschiedenen Ergebnisarten führen können, ermöglicht dieses Interface die Bestimmung und Handhabung des Typs und Werts des Ergebnisses.

## Instanzeigenschaften

- [`XPathResult.booleanValue`](/de/docs/Web/API/XPathResult/booleanValue) {{ReadOnlyInline}}
  - : Ein `boolean`, der den Wert des Ergebnisses darstellt, wenn `resultType` `BOOLEAN_TYPE` ist.
- [`XPathResult.invalidIteratorState`](/de/docs/Web/API/XPathResult/invalidIteratorState) {{ReadOnlyInline}}
  - : Bezeichnet, dass der Iterator ungültig geworden ist. Er ist `true`, wenn `resultType` `UNORDERED_NODE_ITERATOR_TYPE` oder `ORDERED_NODE_ITERATOR_TYPE` ist und das Dokument seit der Rückgabe dieses Ergebnisses geändert wurde.
- [`XPathResult.numberValue`](/de/docs/Web/API/XPathResult/numberValue) {{ReadOnlyInline}}
  - : Eine `number`, die den Wert des Ergebnisses darstellt, wenn `resultType` `NUMBER_TYPE` ist.
- [`XPathResult.resultType`](/de/docs/Web/API/XPathResult/resultType) {{ReadOnlyInline}}
  - : Ein `number`-Code, der den Typ des Ergebnisses repräsentiert, wie er durch die Typenkonstanten definiert ist.
- [`XPathResult.singleNodeValue`](/de/docs/Web/API/XPathResult/singleNodeValue) {{ReadOnlyInline}}
  - : Ein [`Node`](/de/docs/Web/API/Node), der den Wert des Einzelknotenergebnisses darstellt, welches `null` sein kann.
- [`XPathResult.snapshotLength`](/de/docs/Web/API/XPathResult/snapshotLength) {{ReadOnlyInline}}
  - : Die Anzahl der Knoten im Ergebnissnapshot.
- [`XPathResult.stringValue`](/de/docs/Web/API/XPathResult/stringValue) {{ReadOnlyInline}}
  - : Ein String, der den Wert des Ergebnisses darstellt, wenn `resultType` `STRING_TYPE` ist.

## Instanzmethoden

- [`XPathResult.iterateNext()`](/de/docs/Web/API/XPathResult/iterateNext)
  - : Wenn das Ergebnis ein Knotensatz ist, iteriert diese Methode darüber und gibt den nächsten Knoten daraus zurück oder `null`, wenn keine weiteren Knoten vorhanden sind.
- [`XPathResult.snapshotItem()`](/de/docs/Web/API/XPathResult/snapshotItem)
  - : Gibt ein Element der Snapshot-Sammlung zurück oder `null`, wenn der Index nicht innerhalb der Reichweite der Knoten liegt. Im Gegensatz zum Iterator-Ergebnis wird der Snapshot nicht ungültig, entspricht jedoch möglicherweise nicht dem aktuellen Dokument, wenn dieses verändert wird.

## Konstanten

<table class="no-markdown">
  <thead>
    <tr>
      <th>Ergebnistypdefinierte Konstante</th>
      <th>Wert</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ANY_TYPE</code></td>
      <td><code>0</code></td>
      <td>
        Ein Ergebnisdatensatz, der den Typ enthält, der sich natürlich aus der Auswertung des Ausdrucks ergibt. Beachten Sie, dass, wenn das Ergebnis ein Knotensatz ist, <code>UNORDERED_NODE_ITERATOR_TYPE</code> immer der resultierende Typ ist.
      </td>
    </tr>
    <tr>
      <td><code>NUMBER_TYPE</code></td>
      <td><code>1</code></td>
      <td>
        Ein Ergebnis, das eine einzelne Zahl enthält. Dies ist zum Beispiel nützlich in einem XPath-Ausdruck, der die <code>count()</code>-Funktion verwendet.
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
        Ein Ergebnis, das einen einzelnen booleschen Wert enthält. Dies ist zum Beispiel nützlich in einem XPath-Ausdruck, der die <code>not()</code>-Funktion verwendet.
      </td>
    </tr>
    <tr>
      <td><code>UNORDERED_NODE_ITERATOR_TYPE</code></td>
      <td><code>4</code></td>
      <td>
        Ein Ergebnis-Knotensatz, der alle Knoten enthält, die dem Ausdruck entsprechen. Die Knoten müssen nicht unbedingt in der gleichen Reihenfolge erscheinen, in der sie im Dokument vorkommen.
      </td>
    </tr>
    <tr>
      <td><code>ORDERED_NODE_ITERATOR_TYPE</code></td>
      <td><code>5</code></td>
      <td>
        Ein Ergebnis-Knotensatz, der alle Knoten enthält, die dem Ausdruck entsprechen. Die Knoten im Ergebnisset sind in der gleichen Reihenfolge, in der sie im Dokument erscheinen.
      </td>
    </tr>
    <tr>
      <td><code>UNORDERED_NODE_SNAPSHOT_TYPE</code></td>
      <td><code>6</code></td>
      <td>
        Ein Ergebnis-Knotensatz, der Schnappschüsse aller Knoten enthält, die dem Ausdruck entsprechen. Die Knoten müssen nicht unbedingt in der gleichen Reihenfolge erscheinen, in der sie im Dokument vorkommen.
      </td>
    </tr>
    <tr>
      <td><code>ORDERED_NODE_SNAPSHOT_TYPE</code></td>
      <td><code>7</code></td>
      <td>
        Ein Ergebnis-Knotensatz, der Schnappschüsse aller Knoten enthält, die dem Ausdruck entsprechen. Die Knoten im Ergebnisset sind in der gleichen Reihenfolge, in der sie im Dokument erscheinen.
      </td>
    </tr>
    <tr>
      <td><code>ANY_UNORDERED_NODE_TYPE</code></td>
      <td><code>8</code></td>
      <td>
        Ein Ergebnis-Knotensatz, der einen beliebigen einzelnen Knoten enthält, der dem Ausdruck entspricht. Der Knoten ist nicht notwendigerweise der erste Knoten im Dokument, der dem Ausdruck entspricht.
      </td>
    </tr>
    <tr>
      <td><code>FIRST_ORDERED_NODE_TYPE</code></td>
      <td><code>9</code></td>
      <td>
        Ein Ergebnis-Knotensatz, der den ersten Knoten im Dokument enthält, der dem Ausdruck entspricht.
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.evaluate()`](/de/docs/Web/API/Document/evaluate)
- [`XPathExpression`](/de/docs/Web/API/XPathExpression)
