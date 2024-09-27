---
title: HTMLEmbedElement
slug: Web/API/HTMLEmbedElement
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Die **`HTMLEmbedElement`**-Schnittstelle bietet spezielle Eigenschaften (zusätzlich zu den regulären Eigenschaften des [`HTMLElement`](/de/docs/Web/API/HTMLElement), die es durch Vererbung auch zur Verfügung hat) für die Manipulation von {{HTMLElement("embed")}}-Elementen.

> [!NOTE]
> Dieses Thema beschreibt die `HTMLEmbedElement`-Schnittstelle, wie sie im Standard definiert ist. Es behandelt nicht die frühen, nicht standardisierten Versionen der Schnittstelle.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLEmbedElement.align`](/de/docs/Web/API/HTMLEmbedElement/align) {{deprecated_inline}}
  - : Ein String, der eine aufgezählte Eigenschaft darstellt, die die Ausrichtung der Inhalte des Elements im Verhältnis zum umgebenden Kontext angibt. Die möglichen Werte sind `"left"`, `"right"`, `"center"` und `"justify"`.
- [`HTMLEmbedElement.height`](/de/docs/Web/API/HTMLEmbedElement/height)
  - : Ein String, der das [`height`](/de/docs/Web/HTML/Element/embed#height)-HTML-Attribut widerspiegelt und die angezeigte Höhe der Ressource enthält.
- [`HTMLEmbedElement.name`](/de/docs/Web/API/HTMLEmbedElement/name) {{deprecated_inline}}
  - : Ein String, der den Namen des eingebetteten Objekts darstellt.
- [`HTMLEmbedElement.src`](/de/docs/Web/API/HTMLEmbedElement/src)
  - : Ein String, der das [`src`](/de/docs/Web/HTML/Element/embed#src)-HTML-Attribut widerspiegelt und die Adresse der Ressource enthält.
- [`HTMLEmbedElement.type`](/de/docs/Web/API/HTMLEmbedElement/type)
  - : Ein String, der das [`type`](/de/docs/Web/HTML/Element/embed#type)-HTML-Attribut widerspiegelt und den Typ der Ressource enthält.
- [`HTMLEmbedElement.width`](/de/docs/Web/API/HTMLEmbedElement/width)
  - : Ein String, der das [`width`](/de/docs/Web/HTML/Element/embed#width)-HTML-Attribut widerspiegelt und die angezeigte Breite der Ressource enthält.

## Instanzmethoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("embed") }}
