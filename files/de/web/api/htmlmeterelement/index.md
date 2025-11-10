---
title: HTMLMeterElement
slug: Web/API/HTMLMeterElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die HTML {{HTMLElement("meter")}}-Elemente verwenden die **`HTMLMeterElement`**-Schnittstelle, die spezielle Eigenschaften und Methoden bietet (zusätzlich zu der Schnittstelle des [`HTMLElement`](/de/docs/Web/API/HTMLElement) Objekts, die sie auch durch Vererbung zur Verfügung haben), um das Layout und die Präsentation von {{HTMLElement("meter")}}-Elementen zu manipulieren.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLMeterElement.high`](/de/docs/Web/API/HTMLMeterElement/high)
  - : Ein `double`, das den Wert der oberen Grenze darstellt und das [`high`](/de/docs/Web/HTML/Reference/Elements/meter#high)-Attribut widerspiegelt.
- [`HTMLMeterElement.low`](/de/docs/Web/API/HTMLMeterElement/low)
  - : Ein `double`, das den Wert der unteren Grenze darstellt und das [`low`](/de/docs/Web/HTML/Reference/Elements/meter#low)-Attribut widerspiegelt.
- [`HTMLMeterElement.max`](/de/docs/Web/API/HTMLMeterElement/max)
  - : Ein `double`, das den Maximalwert darstellt und das [`max`](/de/docs/Web/HTML/Reference/Elements/meter#max)-Attribut widerspiegelt.
- [`HTMLMeterElement.min`](/de/docs/Web/API/HTMLMeterElement/min)
  - : Ein `double`, das den Minimalwert darstellt und das [`min`](/de/docs/Web/HTML/Reference/Elements/meter#min)-Attribut widerspiegelt.
- [`HTMLMeterElement.optimum`](/de/docs/Web/API/HTMLMeterElement/optimum)
  - : Ein `double`, das den Optimalwert darstellt und das [`optimum`](/de/docs/Web/HTML/Reference/Elements/meter#optimum)-Attribut widerspiegelt.
- [`HTMLMeterElement.value`](/de/docs/Web/API/HTMLMeterElement/value)
  - : Ein `double`, das den aktuellen Wert darstellt und das [`value`](/de/docs/Web/HTML/Reference/Elements/meter#value)-Attribut widerspiegelt.
- [`HTMLMeterElement.labels`](/de/docs/Web/API/HTMLMeterElement/labels) {{ReadOnlyInline}}
  - : Eine [`NodeList`](/de/docs/Web/API/NodeList) von {{HTMLElement("label")}}-Elementen, die mit dem Element verbunden sind.

## Instanzmethoden

_Diese Schnittstelle implementiert keine spezifischen Methoden, erbt jedoch Methoden von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("meter")}}
