---
title: HTMLUListElement
slug: Web/API/HTMLUListElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`HTMLUListElement`**-Schnittstelle bietet spezielle Eigenschaften (über die hinaus, die auf der regulären [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle definiert sind, die ihr ebenfalls durch Vererbung zur Verfügung stehen) zur Manipulation von ungeordneten Listen-({{HTMLElement("ul")}})-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem übergeordneten Element, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLUListElement.type`](/de/docs/Web/API/HTMLUListElement/type) {{deprecated_inline}}
  - : Ein String-Wert, der den [`type`](/de/docs/Web/HTML/Reference/Elements/ul#type) widerspiegelt und die Art des Markers definiert, der zur Anzeige verwendet werden soll. Die Werte sind browserabhängig und wurden nie standardisiert.
- [`HTMLUListElement.compact`](/de/docs/Web/API/HTMLUListElement/compact) {{deprecated_inline}}
  - : Ein Boolean-Wert, der anzeigt, dass der Abstand zwischen Listenelementen reduziert werden sollte. Diese Eigenschaft spiegelt nur das [`compact`](/de/docs/Web/HTML/Reference/Elements/ul#compact)-Attribut wider, berücksichtigt jedoch nicht die {{cssxref("line-height")}}-CSS-Eigenschaft, die für dieses Verhalten in modernen Seiten verwendet wird.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von ihrem übergeordneten Element, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("ul") }}.
