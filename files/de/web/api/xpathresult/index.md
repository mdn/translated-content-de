---
title: XPathResult
slug: Web/API/XPathResult
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("DOM")}}

Die Schnittstelle **`XPathResult`** repräsentiert die Ergebnisse, die bei der Auswertung eines XPath-Ausdrucks im Kontext eines bestimmten Knotens entstehen.

Da XPath-Ausdrücke unterschiedliche Ergebnistypen liefern können, ermöglicht diese Schnittstelle, den Typ und den Wert des Ergebnisses zu bestimmen und zu verarbeiten.

## Konstanten

<table class="no-markdown">
  <thead>
    <tr>
      <th>Konstante für den Ergebnistyp</th>
      <th>Wert</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ANY_TYPE</code></td>
      <td><code>0</code></td>
      <td>
        Ein Ergebnis des Typs, der sich bei der Auswertung des Ausdrucks ergibt.
        Beachten Sie, dass bei einer Knotenmenge immer
        <code>UNORDERED_NODE_ITERATOR_TYPE</code> der resultierende Typ ist.
      </td>
    </tr>
    <tr>
      <td><code>NUMBER_TYPE</code></td>
      <td><code>1</code></td>
      <td>
        Ein Ergebnis, das eine einzelne Zahl enthält. Dies ist beispielsweise
        bei einem XPath-Ausdruck mit der Funktion <code>count()</code> nützlich.
      </td>
    </tr>
    <tr>
      <td><code>STRING_TYPE</code></td>
      <td><code>2</code></td>
      <td>Ein Ergebnis, das eine einzelne Zeichenfolge enthält.</td>
    </tr>
    <tr>
      <td><code>BOOLEAN_TYPE</code></td>
      <td><code>3</code></td>
      <td>
        Ein Ergebnis, das einen einzelnen booleschen Wert enthält. Dies ist
        beispielsweise bei einem XPath-Ausdruck mit der Funktion
        <code>not()</code> nützlich.
      </td>
    </tr>
    <tr>
      <td><code>UNORDERED_NODE_ITERATOR_TYPE</code></td>
      <td><code>4</code></td>
      <td>
        Eine Ergebnisknotenmenge, die alle Knoten enthält, die dem Ausdruck
        entsprechen. Die Knoten sind nicht unbedingt in derselben Reihenfolge
        angeordnet wie im Dokument.
      </td>
    </tr>
    <tr>
      <td><code>ORDERED_NODE_ITERATOR_TYPE</code></td>
      <td><code>5</code></td>
      <td>
        Eine Ergebnisknotenmenge, die alle Knoten enthält, die dem Ausdruck
        entsprechen. Die Knoten in der Ergebnismenge sind in derselben
        Reihenfolge angeordnet wie im Dokument.
      </td>
    </tr>
    <tr>
      <td><code>UNORDERED_NODE_SNAPSHOT_TYPE</code></td>
      <td><code>6</code></td>
      <td>
        Eine Ergebnisknotenmenge, die Momentaufnahmen aller Knoten enthält,
        die dem Ausdruck entsprechen. Die Knoten sind nicht unbedingt in
        derselben Reihenfolge angeordnet wie im Dokument.
      </td>
    </tr>
    <tr>
      <td><code>ORDERED_NODE_SNAPSHOT_TYPE</code></td>
      <td><code>7</code></td>
      <td>
        Eine Ergebnisknotenmenge, die Momentaufnahmen aller Knoten enthält,
        die dem Ausdruck entsprechen. Die Knoten in der Ergebnismenge sind
        in derselben Reihenfolge angeordnet wie im Dokument.
      </td>
    </tr>
    <tr>
      <td><code>ANY_UNORDERED_NODE_TYPE</code></td>
      <td><code>8</code></td>
      <td>
        Eine Ergebnisknotenmenge, die einen beliebigen einzelnen Knoten enthält,
        der dem Ausdruck entspricht. Dieser Knoten ist nicht unbedingt der erste
        passende Knoten im Dokument.
      </td>
    </tr>
    <tr>
      <td><code>FIRST_ORDERED_NODE_TYPE</code></td>
      <td><code>9</code></td>
      <td>
        Eine Ergebnisknotenmenge, die den ersten Knoten im Dokument enthält,
        der dem Ausdruck entspricht.
      </td>
    </tr>
  </tbody>
</table>

## Instanzeigenschaften

- [`XPathResult.booleanValue`](/de/docs/Web/API/XPathResult/booleanValue) {{ReadOnlyInline}}
  - : Ein `boolean`, der den Wert des Ergebnisses angibt, wenn `resultType` den Wert `BOOLEAN_TYPE` hat.
- [`XPathResult.invalidIteratorState`](/de/docs/Web/API/XPathResult/invalidIteratorState) {{ReadOnlyInline}}
  - : Gibt an, ob der Iterator ungültig geworden ist. Der Wert ist `true`, wenn `resultType` den Wert `UNORDERED_NODE_ITERATOR_TYPE` oder `ORDERED_NODE_ITERATOR_TYPE` hat und das Dokument seit der Rückgabe dieses Ergebnisses geändert wurde.
- [`XPathResult.numberValue`](/de/docs/Web/API/XPathResult/numberValue) {{ReadOnlyInline}}
  - : Eine `number`, die den Wert des Ergebnisses angibt, wenn `resultType` den Wert `NUMBER_TYPE` hat.
- [`XPathResult.resultType`](/de/docs/Web/API/XPathResult/resultType) {{ReadOnlyInline}}
  - : Ein numerischer Code (`number`), der den Typ des Ergebnisses gemäß den Typkonstanten angibt.
- [`XPathResult.singleNodeValue`](/de/docs/Web/API/XPathResult/singleNodeValue) {{ReadOnlyInline}}
  - : Ein [`Node`](/de/docs/Web/API/Node), der den Wert des Ergebnisses mit einem einzelnen Knoten angibt und auch `null` sein kann.
- [`XPathResult.snapshotLength`](/de/docs/Web/API/XPathResult/snapshotLength) {{ReadOnlyInline}}
  - : Die Anzahl der Knoten in der Ergebnismomentaufnahme.
- [`XPathResult.stringValue`](/de/docs/Web/API/XPathResult/stringValue) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die den Wert des Ergebnisses angibt, wenn `resultType` den Wert `STRING_TYPE` hat.

## Instanzmethoden

- [`XPathResult.iterateNext()`](/de/docs/Web/API/XPathResult/iterateNext)
  - : Wenn das Ergebnis eine Knotenmenge ist, durchläuft diese Methode die Menge und gibt den nächsten Knoten zurück oder `null`, wenn keine weiteren Knoten vorhanden sind.
- [`XPathResult.snapshotItem()`](/de/docs/Web/API/XPathResult/snapshotItem)
  - : Gibt ein Element der Momentaufnahmensammlung zurück oder `null`, wenn der Index außerhalb des Knotenbereichs liegt. Anders als ein Iteratorergebnis wird die Momentaufnahme nicht ungültig. Wurde das Dokument jedoch geändert, entspricht sie ihm möglicherweise nicht mehr.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.evaluate()`](/de/docs/Web/API/Document/evaluate)
- [`XPathExpression`](/de/docs/Web/API/XPathExpression)
