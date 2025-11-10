---
title: HTMLModElement
slug: Web/API/HTMLModElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Das **`HTMLModElement`**-Interface bietet spezielle Eigenschaften (über die regulären Methoden und Eigenschaften hinaus, die über das [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interface durch Vererbung verfügbar sind) zur Manipulation von Änderungs-Elementen, das heißt {{HTMLElement("del")}} und {{HTMLElement("ins")}}.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Eltern-Interface [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLModElement.cite`](/de/docs/Web/API/HTMLModElement/cite)
  - : Ein String, der das HTML-Attribut [`cite`](/de/docs/Web/HTML/Reference/Elements/del#cite) widerspiegelt und eine URI zu einer Ressource enthält, die die Änderung erklärt.
- [`HTMLModElement.dateTime`](/de/docs/Web/API/HTMLModElement/dateTime)
  - : Ein String, der das HTML-Attribut [`datetime`](/de/docs/Web/HTML/Reference/Elements/del#datetime) widerspiegelt und einen Datums- und Zeitstring enthält, der einen Zeitstempel für die Änderung darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Elemente, die dieses Interface implementieren: {{HTMLElement("ins")}}, {{HTMLElement("del")}}.
