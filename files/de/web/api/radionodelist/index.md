---
title: RadioNodeList
slug: Web/API/RadioNodeList
l10n:
  sourceCommit: dc254715954a0224318e4d25e1de77d595fed769
---

{{APIRef("HTML DOM")}}

Das **`RadioNodeList`**-Interface repräsentiert eine Sammlung von Elementen in einem {{HTMLElement("form")}}, die durch einen Aufruf von [`HTMLFormControlsCollection.namedItem()`](/de/docs/Web/API/HTMLFormControlsCollection/namedItem) zurückgegeben wird.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Das `RadioNodeList`-Interface erbt die Eigenschaften von_ [`NodeList`](/de/docs/Web/API/NodeList).

- [`RadioNodeList.value`](/de/docs/Web/API/RadioNodeList/value)
  - : Wenn die zugrunde liegende Elementsammlung Radioknöpfe enthält, repräsentiert die Eigenschaft `value` den ausgewählten Radioknopf. Beim Abrufen der Eigenschaft `value` wird der `value`-Wert des derzeit `checked` Radioknopfes als Zeichenfolge zurückgegeben. Wenn die Sammlung keine Radioknöpfe enthält oder keiner der Radioknöpfe in der Sammlung auf `checked` steht, wird die leere Zeichenfolge zurückgegeben. Beim Setzen der Eigenschaft `value` wird das erste Radioknopf-Eingabeelement, dessen Eigenschaft `value` dem neuen Wert entspricht, auf `checked` gesetzt.

## Instanz-Methoden

_Das `RadioNodeList`-Interface erbt die Methoden von_ [`NodeList`](/de/docs/Web/API/NodeList).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{HTMLElement("form")}}, {{HTMLElement("input")}} Elemente.
