---
title: HTMLParamElement
slug: Web/API/HTMLParamElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

Die **`HTMLParamElement`**-Schnittstelle bietet spezielle Eigenschaften (über die des regulären {{domxref("HTMLElement")}}-Objektinterfaces hinaus), um {{HTMLElement("param")}}-Elemente zu manipulieren. Diese repräsentieren ein Paar aus Schlüssel und Wert, das als Parameter für ein {{HTMLElement("object")}}-Element fungiert.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("HTMLElement")}}._

- {{domxref("HTMLParamElement.name")}} {{Deprecated_Inline}}
  - : Ein String, der den Namen des Parameters darstellt. Es spiegelt das [`name`](/de/docs/Web/HTML/Element/param#name)-Attribut wider.
- {{domxref("HTMLParamElement.value")}} {{Deprecated_Inline}}
  - : Ein String, der den dem Parameter zugeordneten Wert darstellt. Es spiegelt das [`value`](/de/docs/Web/HTML/Element/param#value)-Attribut wider.
- {{domxref("HTMLParamElement.type")}} {{Deprecated_Inline}}
  - : Ein String, der den Typ des Parameters enthält, wenn `valueType` den `"ref"`-Wert hat. Es spiegelt das [`type`](/de/docs/Web/HTML/Element/param#type)-Attribut wider.
- {{domxref("HTMLParamElement.valueType")}} {{Deprecated_Inline}}
  - : Ein String, der den Typ des `value` enthält. Es spiegelt das [valuetype](/de/docs/Web/HTML/Element/param#valuetype)-Attribut wider und hat einen der Werte: `"data"`, `"ref"` oder `"object"`.

## Instanz-Methoden

_Keine spezifischen Methoden, erbt Methoden von seinem Elternteil, {{domxref("HTMLElement")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("param") }}.
