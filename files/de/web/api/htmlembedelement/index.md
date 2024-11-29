---
title: HTMLEmbedElement
slug: Web/API/HTMLEmbedElement
l10n:
  sourceCommit: 64088e3a95e2cc9c8cf44d1338d0be21f1fadfed
---

{{APIRef("HTML DOM")}}

Die **`HTMLEmbedElement`**-Schnittstelle bietet spezielle Eigenschaften (zusätzlich zu der regulären [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle, die sie ebenfalls durch Vererbung zur Verfügung gestellt bekommt) zur Manipulation von {{HTMLElement("embed")}}-Elementen.

> [!NOTE]
> Dieses Thema beschreibt die `HTMLEmbedElement`-Schnittstelle, wie sie im Standard definiert ist. Es wird nicht auf frühere, nicht standardisierte Versionen der Schnittstelle eingegangen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLEmbedElement.align`](/de/docs/Web/API/HTMLEmbedElement/align) {{deprecated_inline}}
  - : Ein String, der eine aufgezählte Eigenschaft darstellt, die die Ausrichtung des Inhalts des Elements im Verhältnis zum umgebenden Kontext angibt. Die möglichen Werte sind `"left"`, `"right"`, `"center"` und `"justify"`.
- [`HTMLEmbedElement.height`](/de/docs/Web/API/HTMLEmbedElement/height)
  - : Ein String, der das [`height`](/de/docs/Web/HTML/Element/embed#height) HTML-Attribut widerspiegelt und die angezeigte Höhe der Ressource enthält.
- [`HTMLEmbedElement.name`](/de/docs/Web/API/HTMLEmbedElement/name) {{deprecated_inline}}
  - : Ein String, der den Namen des eingebetteten Objekts darstellt.
- [`HTMLEmbedElement.src`](/de/docs/Web/API/HTMLEmbedElement/src)
  - : Ein String, der das [`src`](/de/docs/Web/HTML/Element/embed#src) HTML-Attribut widerspiegelt und die Adresse der Ressource enthält.
- [`HTMLEmbedElement.type`](/de/docs/Web/API/HTMLEmbedElement/type)
  - : Ein String, der das [`type`](/de/docs/Web/HTML/Element/embed#type) HTML-Attribut widerspiegelt und den Typ der Ressource enthält.
- [`HTMLEmbedElement.width`](/de/docs/Web/API/HTMLEmbedElement/width)
  - : Ein String, der das [`width`](/de/docs/Web/HTML/Element/embed#width) HTML-Attribut widerspiegelt und die angezeigte Breite der Ressource enthält.

## Instanz-Methoden

_Erbt auch Methoden von ihrer Elternschnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLEmbedElement.getSVGDocument()`](/de/docs/Web/API/HTMLEmbedElement/getSVGDocument)
  - : Gibt das eingebettete SVG als [`Document`](/de/docs/Web/API/Document) zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("embed") }}
