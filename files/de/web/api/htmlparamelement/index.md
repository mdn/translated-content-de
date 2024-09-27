---
title: HTMLParamElement
slug: Web/API/HTMLParamElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

Das **`HTMLParamElement`**-Interface bietet spezielle Eigenschaften (zusätzlich zu denen des regulären [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Objekt-Interfaces, das es erbt) zur Manipulation von {{HTMLElement("param")}}-Elementen. Diese Elemente repräsentieren ein Paar aus Schlüssel und Wert, das als Parameter für ein {{HTMLElement("object")}}-Element fungiert.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLParamElement.name`](/de/docs/Web/API/HTMLParamElement/name) {{Deprecated_Inline}}
  - : Ein String, der den Namen des Parameters darstellt. Er spiegelt das [`name`](/de/docs/Web/HTML/Element/param#name)-Attribut wider.
- [`HTMLParamElement.value`](/de/docs/Web/API/HTMLParamElement/value) {{Deprecated_Inline}}
  - : Ein String, der den mit dem Parameter assoziierten Wert darstellt. Er spiegelt das [`value`](/de/docs/Web/HTML/Element/param#value)-Attribut wider.
- [`HTMLParamElement.type`](/de/docs/Web/API/HTMLParamElement/type) {{Deprecated_Inline}}
  - : Ein String, der den Typ des Parameters enthält, wenn `valueType` den `"ref"`-Wert hat. Er spiegelt das [`type`](/de/docs/Web/HTML/Element/param#type)-Attribut wider.
- [`HTMLParamElement.valueType`](/de/docs/Web/API/HTMLParamElement/valueType) {{Deprecated_Inline}}
  - : Ein String, der den Typ des `value` enthält. Er spiegelt das [valuetype](/de/docs/Web/HTML/Element/param#valuetype)-Attribut wider und hat einen der Werte: `"data"`, `"ref"` oder `"object"`.

## Instanzmethoden

_Keine speziellen Methoden, erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{ HTMLElement("param") }}.
