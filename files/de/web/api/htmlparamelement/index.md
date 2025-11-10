---
title: HTMLParamElement
slug: Web/API/HTMLParamElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

Das **`HTMLParamElement`**-Interface bietet spezielle Eigenschaften (über die des regulären [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Objekt-Interfaces hinaus, das es erbt) zum Manipulieren von {{HTMLElement("param")}}-Elementen, die ein Paar aus Schlüssel und Wert darstellen und als Parameter für ein {{HTMLElement("object")}}-Element dienen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLParamElement.name`](/de/docs/Web/API/HTMLParamElement/name) {{Deprecated_Inline}}
  - : Eine Zeichenkette, die den Namen des Parameters darstellt. Sie spiegelt das [`name`](/de/docs/Web/HTML/Reference/Elements/param#name)-Attribut wider.
- [`HTMLParamElement.value`](/de/docs/Web/API/HTMLParamElement/value) {{Deprecated_Inline}}
  - : Eine Zeichenkette, die den mit dem Parameter verknüpften Wert darstellt. Sie spiegelt das [`value`](/de/docs/Web/HTML/Reference/Elements/param#value)-Attribut wider.
- [`HTMLParamElement.type`](/de/docs/Web/API/HTMLParamElement/type) {{Deprecated_Inline}}
  - : Eine Zeichenkette, die den Typ des Parameters enthält, wenn `valueType` den Wert `"ref"` hat. Sie spiegelt das [`type`](/de/docs/Web/HTML/Reference/Elements/param#type)-Attribut wider.
- [`HTMLParamElement.valueType`](/de/docs/Web/API/HTMLParamElement/valueType) {{Deprecated_Inline}}
  - : Eine Zeichenkette, die den Typ des `value` enthält. Sie spiegelt das [valuetype](/de/docs/Web/HTML/Reference/Elements/param#valuetype)-Attribut wider und hat einen der Werte: `"data"`, `"ref"` oder `"object"`.

## Instanzmethoden

_Keine spezifischen Methoden, erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{ HTMLElement("param") }}.
