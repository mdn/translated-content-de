---
title: HTMLMeterElement
slug: Web/API/HTMLMeterElement
l10n:
  sourceCommit: ec8d5627e822d866f350d9d8c06f0df58948015e
---

{{APIRef("HTML DOM")}}

Die HTML {{HTMLElement("meter")}}-Elemente stellen die **`HTMLMeterElement`**-Schnittstelle bereit, die spezielle Eigenschaften und Methoden (über das hinaus, was die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Objektschnittstelle, die sie auch durch Vererbung zur Verfügung haben, bietet) für die Manipulation des Layouts und der Präsentation von {{HTMLElement("meter")}}-Elementen bereitstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLMeterElement.high`](/de/docs/Web/API/HTMLMeterElement/high)
  - : Ein `double`, das den Wert der oberen Grenze darstellt und das [`high`](/de/docs/Web/HTML/Element/meter#high)-Attribut widerspiegelt.
- [`HTMLMeterElement.low`](/de/docs/Web/API/HTMLMeterElement/low)
  - : Ein `double`, das den Wert der unteren Grenze darstellt und das [`low`](/de/docs/Web/HTML/Element/meter#low)-Attribut widerspiegelt.
- [`HTMLMeterElement.max`](/de/docs/Web/API/HTMLMeterElement/max)
  - : Ein `double`, das den maximalen Wert darstellt und das [`max`](/de/docs/Web/HTML/Element/meter#max)-Attribut widerspiegelt.
- [`HTMLMeterElement.min`](/de/docs/Web/API/HTMLMeterElement/min)
  - : Ein `double`, das den minimalen Wert darstellt und das [`min`](/de/docs/Web/HTML/Element/meter#min)-Attribut widerspiegelt.
- [`HTMLMeterElement.optimum`](/de/docs/Web/API/HTMLMeterElement/optimum)
  - : Ein `double`, das das Optimum darstellt und das [`optimum`](/de/docs/Web/HTML/Element/meter#optimum)-Attribut widerspiegelt.
- [`HTMLMeterElement.value`](/de/docs/Web/API/HTMLMeterElement/value)
  - : Ein `double`, das den aktuellen Wert darstellt und das [`value`](/de/docs/Web/HTML/Element/meter#value)-Attribut widerspiegelt.
- [`HTMLMeterElement.labels`](/de/docs/Web/API/HTMLMeterElement/labels) {{ReadOnlyInline}}
  - : Eine [`NodeList`](/de/docs/Web/API/NodeList) von {{HTMLElement("label")}}-Elementen, die mit dem Element verknüpft sind.

## Instanz-Methoden

_Diese Schnittstelle implementiert keine spezifischen Methoden, erbt jedoch Methoden von ihrem übergeordneten, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("meter")}}
