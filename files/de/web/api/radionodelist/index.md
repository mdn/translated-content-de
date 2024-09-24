---
title: RadioNodeList
slug: Web/API/RadioNodeList
l10n:
  sourceCommit: dc254715954a0224318e4d25e1de77d595fed769
---

{{APIRef("HTML DOM")}}

Die **`RadioNodeList`**-Schnittstelle repräsentiert eine Sammlung von Elementen in einem {{HTMLElement("form")}}, die durch einen Aufruf von {{domxref("HTMLFormControlsCollection.namedItem()")}} zurückgegeben wird.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Die `RadioNodeList`-Schnittstelle erbt die Eigenschaften von_ {{domxref("NodeList")}}.

- {{domxref("RadioNodeList.value")}}
  - : Wenn die zugrunde liegende Elementsammlung Radio-Buttons enthält, repräsentiert die Eigenschaft `value` den ausgewählten Radio-Button. Beim Abrufen der `value`-Eigenschaft wird der `value` des derzeit `checked` Radio-Buttons als Zeichenkette zurückgegeben. Wenn die Sammlung keine Radio-Buttons enthält oder keiner der Radio-Buttons in der Sammlung im `checked`-Zustand ist, wird die leere Zeichenkette zurückgegeben. Beim Setzen der `value`-Eigenschaft wird das erste Radio-Button-Input-Element, dessen `value`-Eigenschaft dem neuen Wert entspricht, auf `checked` gesetzt.

## Instanz-Methoden

_Die `RadioNodeList`-Schnittstelle erbt die Methoden von_ {{domxref("NodeList")}}.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Die {{HTMLElement("form")}}, {{HTMLElement("input")}}-Elemente.
