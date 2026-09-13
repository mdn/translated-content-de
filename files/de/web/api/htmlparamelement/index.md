---
title: HTMLParamElement
slug: Web/API/HTMLParamElement
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

Das **`HTMLParamElement`**-Interface bietet spezielle Eigenschaften (über die des regulären [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Objekt-Interfaces, das es erbt, hinaus) zur Manipulation von {{HTMLElement("param")}}-Elementen, die ein Paar aus Schlüssel und Wert darstellen und als Parameter für ein {{HTMLElement("object")}}-Element fungieren.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLParamElement.name`](/de/docs/Web/API/HTMLParamElement/name) {{Deprecated_Inline}}
  - : Ein String, der den Namen des Parameters repräsentiert. Er spiegelt das [`name`](/de/docs/Web/HTML/Reference/Elements/param#name)-Attribut wider.
- [`HTMLParamElement.value`](/de/docs/Web/API/HTMLParamElement/value) {{Deprecated_Inline}}
  - : Ein String, der den mit dem Parameter assoziierten Wert repräsentiert. Er spiegelt das [`value`](/de/docs/Web/HTML/Reference/Elements/param#value)-Attribut wider.
- [`HTMLParamElement.type`](/de/docs/Web/API/HTMLParamElement/type) {{Deprecated_Inline}}
  - : Ein String, der den Typ des Parameters enthält, wenn `valueType` den Wert `"ref"` hat. Er spiegelt das [`type`](/de/docs/Web/HTML/Reference/Elements/param#type)-Attribut wider.
- [`HTMLParamElement.valueType`](/de/docs/Web/API/HTMLParamElement/valueType) {{Deprecated_Inline}}
  - : Ein String, der den Typ des `value` enthält. Er spiegelt das [valuetype](/de/docs/Web/HTML/Reference/Elements/param#valuetype)-Attribut wider und hat einen der Werte: `"data"`, `"ref"` oder `"object"`.

## Instanz-Methoden

_Keine spezifischen Methoden, erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{ HTMLElement("param") }}.
