---
title: XPathResult
slug: Web/API/XPathResult
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{APIRef}}

Das **`XPathResult`** Interface repräsentiert die Ergebnisse, die durch die Auswertung eines XPath-Ausdrucks im Kontext eines bestimmten Knotens erzeugt werden.

Da XPath-Ausdrücke zu verschiedenen Ergebnistypen führen können, ermöglicht dieses Interface die Bestimmung und Behandlung des Typs und Werts des Ergebnisses.

## Instanzeigenschaften

- [`XPathResult.booleanValue`](/de/docs/Web/API/XPathResult/booleanValue) {{ReadOnlyInline}}
  - : Ein `boolean`, der den Wert des Ergebnisses darstellt, wenn `resultType` `BOOLEAN_TYPE` ist.
- [`XPathResult.invalidIteratorState`](/de/docs/Web/API/XPathResult/invalidIteratorState) {{ReadOnlyInline}}
  - : Zeigt an, dass der Iterator ungültig geworden ist. Es ist `true`, wenn `resultType` `UNORDERED_NODE_ITERATOR_TYPE` oder `ORDERED_NODE_ITERATOR_TYPE` ist und das Dokument seit der Rückgabe dieses Ergebnisses geändert wurde.
- [`XPathResult.numberValue`](/de/docs/Web/API/XPathResult/numberValue) {{ReadOnlyInline}}
  - : Eine `number`, die den Wert des Ergebnisses darstellt, wenn `resultType` `NUMBER_TYPE` ist.
- [`XPathResult.resultType`](/de/docs/Web/API/XPathResult/resultType) {{ReadOnlyInline}}
  - : Ein `number`-Code, der den Typ des Ergebnisses darstellt, wie durch die Typkonstanten definiert.
- [`XPathResult.singleNodeValue`](/de/docs/Web/API/XPathResult/singleNodeValue) {{ReadOnlyInline}}
  - : Ein [`Node`](/de/docs/Web/API/Node), der den Wert des einzelnen Knoten-Ergebnisses darstellt, der möglicherweise `null` ist.
- [`XPathResult.snapshotLength`](/de/docs/Web/API/XPathResult/snapshotLength) {{ReadOnlyInline}}
  - : Die Anzahl der Knoten im Snapshot-Ergebnis.
- [`XPathResult.stringValue`](/de/docs/Web/API/XPathResult/stringValue) {{ReadOnlyInline}}
  - : Ein String, der den Wert des Ergebnisses darstellt, wenn `resultType` `STRING_TYPE` ist.

## Instanzmethoden

- [`XPathResult.iterateNext()`](/de/docs/Web/API/XPathResult/iterateNext)
  - : Wenn das Ergebnis ein Knotenset ist, wird mit dieser Methode darüber iteriert und der nächste Knoten aus diesem zurückgegeben oder `null`, wenn keine weiteren Knoten vorhanden sind.
- [`XPathResult.snapshotItem()`](/de/docs/Web/API/XPathResult/snapshotItem)
  - : Gibt ein Element der Snapshot-Sammlung zurück oder `null`, falls der Index nicht innerhalb des Knotenbereichs liegt. Im Gegensatz zum Iterator-Ergebnis wird der Snapshot nicht ungültig, kann jedoch nicht mit dem aktuellen Dokument übereinstimmen, wenn es verändert wird.

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
        Ein Ergebnisset, das den Typ enthält, der natürlich aus der
        Auswertung des Ausdrucks resultiert. Beachten Sie, dass, wenn
        das Ergebnis ein Knotenset ist, <code>UNORDERED_NODE_ITERATOR_TYPE</code>
        immer der ergebende Typ ist.
      </td>
    </tr>
    <tr>
      <td><code>NUMBER_TYPE</code></td>
      <td><code>1</code></td>
      <td>
        Ein Ergebnis, das eine einzelne Zahl enthält. Dies ist nützlich,
        zum Beispiel in einem XPath-Ausdruck, der die
        <code>count()</code>-Funktion verwendet.
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
        Ein Ergebnis, das einen einzelnen boolean-Wert enthält. Dies ist
        nützlich, zum Beispiel in einem XPath-Ausdruck, der die
        <code>not()</code>-Funktion verwendet.
      </td>
    </tr>
    <tr>
      <td><code>UNORDERED_NODE_ITERATOR_TYPE</code></td>
      <td><code>4</code></td>
      <td>
        Ein Ergebnisknotenset, das alle die dem Ausdruck
        entsprechenden Knoten enthält. Die Knoten müssen nicht
        notwendigerweise in der Reihenfolge sein, in der sie im Dokument
        erscheinen.
      </td>
    </tr>
    <tr>
      <td><code>ORDERED_NODE_ITERATOR_TYPE</code></td>
      <td><code>5</code></td>
      <td>
        Ein Ergebnisknotenset, das alle die dem Ausdruck
        entsprechenden Knoten enthält. Die Knoten im Ergebnisset sind
        in der Reihenfolge, in der sie im Dokument erscheinen.
      </td>
    </tr>
    <tr>
      <td><code>UNORDERED_NODE_SNAPSHOT_TYPE</code></td>
      <td><code>6</code></td>
      <td>
        Ein Ergebnisknotenset, das Snapshots aller die dem Ausdruck
        entsprechenden Knoten enthält. Die Knoten müssen nicht
        notwendigerweise in der Reihenfolge sein, in der sie im Dokument
        erscheinen.
      </td>
    </tr>
    <tr>
      <td><code>ORDERED_NODE_SNAPSHOT_TYPE</code></td>
      <td><code>7</code></td>
      <td>
        Ein Ergebnisknotenset, das Snapshots aller die dem Ausdruck
        entsprechenden Knoten enthält. Die Knoten im Ergebnisset sind
        in der Reihenfolge, in der sie im Dokument erscheinen.
      </td>
    </tr>
    <tr>
      <td><code>ANY_UNORDERED_NODE_TYPE</code></td>
      <td><code>8</code></td>
      <td>
        Ein Ergebnisknotenset, das einen beliebigen einzelnen Knoten
        enthält, der dem Ausdruck entspricht. Der Knoten ist nicht
        notwendigerweise der erste Knoten im Dokument, der dem Ausdruck
        entspricht.
      </td>
    </tr>
    <tr>
      <td><code>FIRST_ORDERED_NODE_TYPE</code></td>
      <td><code>9</code></td>
      <td>
        Ein Ergebnisknotenset, das den ersten Knoten im Dokument enthält,
        der dem Ausdruck entspricht.
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
- [Dottoro Web Reference - XPathResult Objekt](http://help.dottoro.com/ljagksjc.php)
