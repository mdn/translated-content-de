---
title: HTMLModElement
slug: Web/API/HTMLModElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{ APIRef("HTML DOM") }}

Die **`HTMLModElement`**-Schnittstelle bietet spezielle Eigenschaften (zusätzlich zu den regulären Methoden und Eigenschaften, die über die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle durch Vererbung ebenfalls verfügbar sind) zur Manipulation von Änderungen an Elementen, d.h. {{HTMLElement("del")}} und {{HTMLElement("ins")}}.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLModElement.cite`](/de/docs/Web/API/HTMLModElement/cite)
  - : Ein String, der das HTML-Attribut [`cite`](/de/docs/Web/HTML/Element/del#cite) widerspiegelt und eine URI einer Ressource enthält, die die Änderung erklärt.
- [`HTMLModElement.dateTime`](/de/docs/Web/API/HTMLModElement/dateTime)
  - : Ein String, der das HTML-Attribut [`datetime`](/de/docs/Web/HTML/Element/del#datetime) widerspiegelt und einen Datums- und Zeitstring enthält, der einen Zeitstempel für die Änderung darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Elemente, die diese Schnittstelle implementieren: {{HTMLElement("ins")}}, {{HTMLElement("del")}}.
