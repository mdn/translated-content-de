---
title: HTMLModElement
slug: Web/API/HTMLModElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{ APIRef("HTML DOM") }}

Das **`HTMLModElement`**-Interface bietet spezielle Eigenschaften (zusätzlich zu den regulären Methoden und Eigenschaften, die sie durch die Vererbung der {{domxref("HTMLElement")}}-Schnittstelle ebenfalls zur Verfügung haben) zum Manipulieren von Modifikationselementen, das heißt {{HTMLElement("del")}} und {{HTMLElement("ins")}}.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("HTMLElement")}}._

- {{domxref("HTMLModElement.cite")}}
  - : Ein String, der das [`cite`](/de/docs/Web/HTML/Element/del#cite) HTML-Attribut widerspiegelt und eine URI einer Ressource enthält, die die Änderung erklärt.
- {{domxref("HTMLModElement.dateTime")}}
  - : Ein String, der das [`datetime`](/de/docs/Web/HTML/Element/del#datetime) HTML-Attribut widerspiegelt und einen Datum-und-Uhrzeit-String enthält, der einen Zeitstempel für die Änderung darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Elemente, die diese Schnittstelle implementieren: {{HTMLElement("ins")}}, {{HTMLElement("del")}}.
