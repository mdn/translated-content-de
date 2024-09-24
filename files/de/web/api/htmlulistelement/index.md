---
title: HTMLUListElement
slug: Web/API/HTMLUListElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{ APIRef("HTML DOM") }}

Das **`HTMLUListElement`** Interface bietet spezielle Eigenschaften (über die hinaus, die auf dem regulären {{domxref("HTMLElement")}} Interface verfügbar sind, das es auch durch Vererbung zur Verfügung hat) zur Manipulation von ungeordneten Listen ({{HTMLElement("ul")}}) Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elterninterface, {{domxref("HTMLElement")}}._

- {{domxref("HTMLUListElement.type")}} {{deprecated_inline}}
  - : Ein String-Wert, der den [`type`](/de/docs/Web/HTML/Element/ul#type) widerspiegelt und die Art des zu verwendenden Markers definiert. Die Werte sind browserabhängig und wurden nie standardisiert.
- {{domxref("HTMLUListElement.compact")}} {{deprecated_inline}}
  - : Ein boolescher Wert, der anzeigt, dass der Abstand zwischen Listenelementen verringert werden soll. Diese Eigenschaft spiegelt nur das [`compact`](/de/docs/Web/HTML/Element/ul#compact) Attribut wider, sie berücksichtigt nicht die {{cssxref("line-height")}} CSS-Eigenschaft, die für dieses Verhalten auf modernen Seiten verwendet wird.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von seinem Elterninterface, {{domxref("HTMLElement")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{ HTMLElement("ul") }}.
