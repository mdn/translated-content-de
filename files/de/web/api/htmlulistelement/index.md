---
title: HTMLUListElement
slug: Web/API/HTMLUListElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{ APIRef("HTML DOM") }}

Die **`HTMLUListElement`**-Schnittstelle bietet spezielle Eigenschaften (zusätzlich zu denen, die auf der regulären [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle durch Vererbung verfügbar sind) zum Manipulieren von ungeordneten Listen-<`ul`>-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLUListElement.type`](/de/docs/Web/API/HTMLUListElement/type) {{deprecated_inline}}
  - : Ein Zeichenfolgenwert, der den [`type`](/de/docs/Web/HTML/Element/ul#type) widerspiegelt und die Art des verwendeten Markers definiert. Die Werte sind browserabhängig und wurden nie standardisiert.
- [`HTMLUListElement.compact`](/de/docs/Web/API/HTMLUListElement/compact) {{deprecated_inline}}
  - : Ein boolescher Wert, der anzeigt, dass der Abstand zwischen Listenelementen reduziert werden sollte. Diese Eigenschaft spiegelt nur das [`compact`](/de/docs/Web/HTML/Element/ul#compact)-Attribut wider, berücksichtigt jedoch nicht die {{cssxref("line-height")}} CSS-Eigenschaft, die für dieses Verhalten auf modernen Seiten verwendet wird.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("ul") }}.
