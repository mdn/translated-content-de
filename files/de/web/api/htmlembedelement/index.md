---
title: HTMLEmbedElement
slug: Web/API/HTMLEmbedElement
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Das **`HTMLEmbedElement`** Interface bietet spezielle Eigenschaften (zusätzlich zu den regulären Eigenschaften der [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle, die es ebenfalls durch Vererbung zur Verfügung hat) für die Manipulation von {{HTMLElement("embed")}} Elementen.

> [!NOTE]
> Dieses Thema beschreibt das `HTMLEmbedElement` Interface, wie es im Standard definiert ist. Es behandelt nicht frühere, nicht standardisierte Versionen der Schnittstelle.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLEmbedElement.align`](/de/docs/Web/API/HTMLEmbedElement/align) {{deprecated_inline}}
  - : Ein String, der eine enumerierte Eigenschaft repräsentiert, die die Ausrichtung des Inhalts des Elements im Hinblick auf den umgebenden Kontext angibt. Die möglichen Werte sind `"left"`, `"right"`, `"center"` und `"justify"`.
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

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("embed") }}
