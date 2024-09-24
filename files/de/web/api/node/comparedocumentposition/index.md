---
title: "Node: compareDocumentPosition() Methode"
short-title: compareDocumentPosition()
slug: Web/API/Node/compareDocumentPosition
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("DOM")}}

Die **`compareDocumentPosition()`**-Methode der {{domxref("Node")}}-Schnittstelle berichtet über die Position des Argumentknotens relativ zu dem Knoten, auf dem sie aufgerufen wird.

## Syntax

```js-nolint
compareDocumentPosition(otherNode)
```

### Parameter

- `otherNode`
  - : Der {{domxref("Node")}}, dessen Position relativ zu dem Knoten berichtet werden soll.

### Rückgabewert

Ein ganzzahliger Wert, der die Position von `otherNode` relativ zu `node` als ein [Bitmaske](<https://en.wikipedia.org/wiki/Mask_(computing)>) darstellt, die die folgenden konstanten Eigenschaften von {{domxref("Node")}} kombiniert:

- `Node.DOCUMENT_POSITION_DISCONNECTED` (`1`)
  - : Beide Knoten befinden sich in verschiedenen Dokumenten oder in verschiedenen Bäumen im selben Dokument.
- `Node.DOCUMENT_POSITION_PRECEDING` (`2`)
  - : `otherNode` geht dem Knoten voraus in einer [prä-order Tiefensuche](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR) eines Baums, der beide enthält (z. B. als Vorfahre oder vorheriges Geschwisterkind oder als Nachkomme eines vorherigen Geschwisterkindes oder vorheriges Geschwisterkind eines Vorfahren) oder (wenn sie nicht verbunden sind) in einer beliebigen, aber konsistenten Reihenfolge.
- `Node.DOCUMENT_POSITION_FOLLOWING` (`4`)
  - : `otherNode` folgt dem Knoten in einer [prä-order Tiefensuche](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR) eines Baums, der beide enthält (z. B. als Nachkomme oder folgendes Geschwisterkind oder als Nachkomme eines folgenden Geschwisterkindes oder folgendes Geschwisterkind eines Vorfahren) oder (wenn sie nicht verbunden sind) in einer beliebigen, aber konsistenten Reihenfolge.
- `Node.DOCUMENT_POSITION_CONTAINS` (`8`)
  - : `otherNode` ist ein Vorfahre des Knotens.
- `Node.DOCUMENT_POSITION_CONTAINED_BY` (`16`)
  - : `otherNode` ist ein Nachkomme des Knotens.
- `Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC` (`32`)
  - : Das Ergebnis beruht auf willkürlichem und/oder implementationsspezifischem Verhalten und ist möglicherweise nicht portierbar.

Null oder mehr Bits können gesetzt sein, abhängig davon, welche Szenarien zutreffen. Zum Beispiel, wenn `otherNode` früher im Dokument liegt **_und_** den Knoten enthält, auf dem `compareDocumentPosition()` aufgerufen wurde, dann wären sowohl die `DOCUMENT_POSITION_CONTAINS` als auch die `DOCUMENT_POSITION_PRECEDING` Bits gesetzt, was einen Wert von `10` (`0x0A`) ergibt.

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
> muss der [Bitweise-UND-Operator](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)
> für sinnvolle Ergebnisse verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("Node.contains()")}}
