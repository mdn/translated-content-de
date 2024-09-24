---
title: HTMLMeterElement
slug: Web/API/HTMLMeterElement
l10n:
  sourceCommit: ec8d5627e822d866f350d9d8c06f0df58948015e
---

{{APIRef("HTML DOM")}}

Die HTML-{{HTMLElement("meter")}}-Elemente implementieren die **`HTMLMeterElement`**-Schnittstelle, die spezielle Eigenschaften und Methoden bereitstellt (zusätzlich zur {{domxref("HTMLElement")}}-Objektschnittstelle, die ihnen durch Vererbung ebenfalls zur Verfügung steht) zur Manipulation des Layouts und der Präsentation von {{HTMLElement("meter")}}-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternteil, {{domxref("HTMLElement")}}._

- {{domxref("HTMLMeterElement.high")}}
  - : Ein `double`, der den Wert der oberen Grenze darstellt und das [`high`](/de/docs/Web/HTML/Element/meter#high)-Attribut widerspiegelt.
- {{domxref("HTMLMeterElement.low")}}
  - : Ein `double`, der den Wert der unteren Grenze darstellt und das [`low`](/de/docs/Web/HTML/Element/meter#low)-Attribut widerspiegelt.
- {{domxref("HTMLMeterElement.max")}}
  - : Ein `double`, das den Maximalwert darstellt und das [`max`](/de/docs/Web/HTML/Element/meter#max)-Attribut widerspiegelt.
- {{domxref("HTMLMeterElement.min")}}
  - : Ein `double`, das den Minimalwert darstellt und das [`min`](/de/docs/Web/HTML/Element/meter#min)-Attribut widerspiegelt.
- {{domxref("HTMLMeterElement.optimum")}}
  - : Ein `double`, das das Optimum darstellt und das [`optimum`](/de/docs/Web/HTML/Element/meter#optimum)-Attribut widerspiegelt.
- {{domxref("HTMLMeterElement.value")}}
  - : Ein `double`, das den aktuellen Wert darstellt und das [`value`](/de/docs/Web/HTML/Element/meter#value)-Attribut widerspiegelt.
- {{domxref("HTMLMeterElement.labels")}} {{ReadOnlyInline}}
  - : Eine {{domxref("NodeList")}} von {{HTMLElement("label")}}-Elementen, die dem Element zugeordnet sind.

## Instanz-Methoden

_Diese Schnittstelle implementiert keine spezifischen Methoden, erbt jedoch Methoden von ihrem Elternteil, {{domxref("HTMLElement")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("meter")}}
