---
title: HTMLEmbedElement
slug: Web/API/HTMLEmbedElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Das **`HTMLEmbedElement`**-Interface bietet spezielle Eigenschaften (zusätzlich zu den regulären Eigenschaften des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interface, die es ebenfalls durch Vererbung zur Verfügung hat) zur Manipulation von {{HTMLElement("embed")}}-Elementen.

> [!NOTE]
> Dieses Thema beschreibt das `HTMLEmbedElement`-Interface, wie es im Standard definiert ist. Es behandelt keine früheren, nicht standardisierten Versionen des Interface.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLEmbedElement.align`](/de/docs/Web/API/HTMLEmbedElement/align) {{deprecated_inline}}
  - : Ein String, der eine aufgezählte Eigenschaft darstellt, die die Ausrichtung der Inhalte des Elements in Bezug auf den umgebenden Kontext angibt. Mögliche Werte sind `"left"`, `"right"`, `"center"` und `"justify"`.
- [`HTMLEmbedElement.height`](/de/docs/Web/API/HTMLEmbedElement/height)
  - : Ein String, der das [`height`](/de/docs/Web/HTML/Reference/Elements/embed#height)-HTML-Attribut wiedergibt und die angezeigte Höhe der Ressource enthält.
- [`HTMLEmbedElement.name`](/de/docs/Web/API/HTMLEmbedElement/name) {{deprecated_inline}}
  - : Ein String, der den Namen des eingebetteten Objekts darstellt.
- [`HTMLEmbedElement.src`](/de/docs/Web/API/HTMLEmbedElement/src)
  - : Ein String, der das [`src`](/de/docs/Web/HTML/Reference/Elements/embed#src)-HTML-Attribut wiedergibt und die Adresse der Ressource enthält.
- [`HTMLEmbedElement.type`](/de/docs/Web/API/HTMLEmbedElement/type)
  - : Ein String, der das [`type`](/de/docs/Web/HTML/Reference/Elements/embed#type)-HTML-Attribut wiedergibt und den Typ der Ressource enthält.
- [`HTMLEmbedElement.width`](/de/docs/Web/API/HTMLEmbedElement/width)
  - : Ein String, der das [`width`](/de/docs/Web/HTML/Reference/Elements/embed#width)-HTML-Attribut wiedergibt und die angezeigte Breite der Ressource enthält.

## Instanz-Methoden

_Erbt auch Methoden von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLEmbedElement.getSVGDocument()`](/de/docs/Web/API/HTMLEmbedElement/getSVGDocument)
  - : Gibt das eingebettete SVG als [`Document`](/de/docs/Web/API/Document) zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{ HTMLElement("embed") }}
