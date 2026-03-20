---
title: "Node: compareDocumentPosition()-Methode"
short-title: compareDocumentPosition()
slug: Web/API/Node/compareDocumentPosition
l10n:
  sourceCommit: 59f510e3cca77e928a0300b61a5112386a990046
---

{{APIRef("DOM")}}

Die **`compareDocumentPosition()`**-Methode des [`Node`](/de/docs/Web/API/Node)-Interfaces gibt die Position des Argumentknotens im Verhältnis zu dem Knoten, auf dem sie aufgerufen wird, an.

## Syntax

```js-nolint
compareDocumentPosition(otherNode)
```

### Parameter

- `otherNode`
  - : Der [`Node`](/de/docs/Web/API/Node), dessen Position relativ zum Knoten gemeldet werden soll.

### Rückgabewert

Ein Ganzzahlenwert, der die Position von `otherNode` relativ zu `node` als [Bitmaske](<https://en.wikipedia.org/wiki/Mask_(computing)>) darstellt, indem er die folgenden konstanten Eigenschaften von [`Node`](/de/docs/Web/API/Node) kombiniert oder `0`, falls `otherNode` derselbe Knoten ist wie dieser:

- `Node.DOCUMENT_POSITION_DISCONNECTED` (`1`)
  - : Beide Knoten befinden sich in verschiedenen Dokumenten oder in verschiedenen Bäumen desselben Dokuments.
- `Node.DOCUMENT_POSITION_PRECEDING` (`2`)
  - : `otherNode` geht dem Knoten voraus in einer [präorderigen erweiterten Tiefensuche](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR) eines Baums, der beide Knoten enthält (z. B. als Vorfahre oder vorheriges Geschwister oder Nachkomme eines vorherigen Geschwisters oder vorheriges Geschwister eines Vorfahren) oder (wenn sie getrennt sind) in einer willkürlichen, aber konsistenten Reihenfolge.
- `Node.DOCUMENT_POSITION_FOLLOWING` (`4`)
  - : `otherNode` folgt dem Knoten in einer [präorderigen erweiterten Tiefensuche](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR) eines Baums, der beide Knoten enthält (z. B. als Nachkomme oder folgendes Geschwister oder Nachkomme eines folgenden Geschwisters oder folgendes Geschwister eines Vorfahren) oder (wenn sie getrennt sind) in einer willkürlichen, aber konsistenten Reihenfolge.
- `Node.DOCUMENT_POSITION_CONTAINS` (`8`)
  - : `otherNode` ist ein Vorfahre des Knotens.
- `Node.DOCUMENT_POSITION_CONTAINED_BY` (`16`)
  - : `otherNode` ist ein Nachkomme des Knotens.
- `Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC` (`32`)
  - : Das Ergebnis beruht auf willkürlichem und/oder spezifikationsspezifischem Verhalten und ist nicht garantiert portierbar.

Je nach den zutreffenden Szenarien können null oder mehr Bits gesetzt werden. Zum Beispiel, wenn `otherNode` sich früher im Dokument befindet **_und_** den Knoten enthält, auf dem `compareDocumentPosition()` aufgerufen wurde, dann würden sowohl die Bits `DOCUMENT_POSITION_CONTAINS` als auch `DOCUMENT_POSITION_PRECEDING` gesetzt sein, was einen Wert von `10` (`0x0A`) ergibt.

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
> Da das Ergebnis, das von `compareDocumentPosition()` zurückgegeben wird, eine Bitmaske ist, muss der [Bitweise UND-Operator](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND) für sinnvolle Ergebnisse verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Node.contains()`](/de/docs/Web/API/Node/contains)
