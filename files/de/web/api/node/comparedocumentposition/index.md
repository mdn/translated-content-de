---
title: "Node: compareDocumentPosition()-Methode"
short-title: compareDocumentPosition()
slug: Web/API/Node/compareDocumentPosition
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("DOM")}}

Die **`compareDocumentPosition()`**-Methode der [`Node`](/de/docs/Web/API/Node)-Schnittstelle
gibt die Position des Argumentknotens relativ zu dem Knoten zurück, auf dem sie aufgerufen wird.

## Syntax

```js-nolint
compareDocumentPosition(otherNode)
```

### Parameter

- `otherNode`
  - : Der [`Node`](/de/docs/Web/API/Node), für den die Position relativ zu dem Knoten angegeben werden soll.

### Rückgabewert

Ein ganzzahliger Wert, der die Position von `otherNode` relativ zu `node` darstellt
als [Bitmaske](<https://en.wikipedia.org/wiki/Mask_(computing)>) in Kombination mit den
folgenden Konstanten-Eigenschaften von [`Node`](/de/docs/Web/API/Node):

- `Node.DOCUMENT_POSITION_DISCONNECTED` (`1`)
  - : Beide Knoten befinden sich in verschiedenen Dokumenten oder in unterschiedlichen Bäumen im selben Dokument.
- `Node.DOCUMENT_POSITION_PRECEDING` (`2`)
  - : `otherNode` geht dem Knoten voraus in entweder einer [Pre-Order-Tiefensuche](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR) eines die beiden enthaltenden Baums (z.B. als Vorfahr oder vorheriges Geschwister oder ein Nachfahre eines vorherigen Geschwisters oder vorheriges Geschwister eines Vorfahren) oder (wenn sie nicht verbunden sind) in einer beliebigen, aber konsistenten Anordnung.
- `Node.DOCUMENT_POSITION_FOLLOWING` (`4`)
  - : `otherNode` folgt dem Knoten in entweder einer [Pre-Order-Tiefensuche](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR) eines die beiden enthaltenden Baums (z.B. als Nachfahre oder folgendes Geschwister oder ein Nachfahre eines folgenden Geschwisters oder folgendes Geschwister eines Vorfahren) oder (wenn sie nicht verbunden sind) in einer beliebigen, aber konsistenten Anordnung.
- `Node.DOCUMENT_POSITION_CONTAINS` (`8`)
  - : `otherNode` ist ein Vorfahr des Knotens.
- `Node.DOCUMENT_POSITION_CONTAINED_BY` (`16`)
  - : `otherNode` ist ein Nachfahre des Knotens.
- `Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC` (`32`)
  - : Das Ergebnis hängt von einem willkürlichen und/oder Implementierung-spezifischen Verhalten ab und ist nicht garantiert portabel.

Abhängig von den zutreffenden Szenarien können null oder mehr Bits gesetzt werden. Zum Beispiel, wenn
`otherNode` früher im Dokument positioniert ist **_und_**
den Knoten enthält, auf dem `compareDocumentPosition()` aufgerufen wurde,
dann würden sowohl die `DOCUMENT_POSITION_CONTAINS`- als auch die
`DOCUMENT_POSITION_PRECEDING`-Bits gesetzt sein, was einen Wert von `10` (`0x0A`) ergibt.

## Beispiel

```js
const head = document.head;
const body = document.body;

if (head.compareDocumentPosition(body) & Node.DOCUMENT_POSITION_FOLLOWING) {
  console.log("Well-formed document");
} else {
  console.error("<head> is not before <body>");
}
```

> [!NOTE]
> Da das Ergebnis, das von `compareDocumentPosition()` zurückgegeben wird, eine Bitmaske ist,
> muss der [Bitweise UND-Operator](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)
> für sinnvolle Ergebnisse verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Node.contains()`](/de/docs/Web/API/Node/contains)
