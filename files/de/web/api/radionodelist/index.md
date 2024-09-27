---
title: RadioNodeList
slug: Web/API/RadioNodeList
l10n:
  sourceCommit: dc254715954a0224318e4d25e1de77d595fed769
---

{{APIRef("HTML DOM")}}

Die **`RadioNodeList`**-Schnittstelle repräsentiert eine Sammlung von Elementen in einem {{HTMLElement("form")}}, die durch einen Aufruf von [`HTMLFormControlsCollection.namedItem()`](/de/docs/Web/API/HTMLFormControlsCollection/namedItem) zurückgegeben wird.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Die `RadioNodeList`-Schnittstelle erbt die Eigenschaften von_ [`NodeList`](/de/docs/Web/API/NodeList).

- [`RadioNodeList.value`](/de/docs/Web/API/RadioNodeList/value)
  - : Wenn die zugrunde liegende Elementensammlung Radio-Buttons enthält, stellt die `value`-Eigenschaft den ausgewählten Radio-Button dar. Beim Abrufen der `value`-Eigenschaft wird der `value` des derzeit `checked` Radio-Buttons als Zeichenkette zurückgegeben. Wenn die Sammlung keine Radio-Buttons enthält oder keiner der Radio-Buttons in der Sammlung den `checked`-Zustand hat, wird die leere Zeichenkette zurückgegeben. Beim Setzen der `value`-Eigenschaft wird das erste Radio-Button-Input-Element, dessen `value`-Eigenschaft dem neuen Wert entspricht, auf `checked` gesetzt.

## Instanz-Methoden

_Die `RadioNodeList`-Schnittstelle erbt die Methoden von_ [`NodeList`](/de/docs/Web/API/NodeList).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{HTMLElement("form")}}, {{HTMLElement("input")}} Elemente.
