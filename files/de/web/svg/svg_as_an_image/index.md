---
title: SVG als Bild
slug: Web/SVG/SVG_as_an_Image
l10n:
  sourceCommit: 4a350ee6ef10402ec862849f628c5370e118f81c
---

{{SVGRef}}

SVG-Bilder können in verschiedenen Kontexten als Bildformat verwendet werden. Browser unterstützen SVG-Bilder in:

- HTML-{{HTMLElement("img")}} oder {{SVGElement("svg")}}-Elementen
- CSS {{cssxref("background-image")}}
- CSS {{cssxref("list-style-image")}}
- CSS {{cssxref("content")}}
- SVG-{{SVGElement("image")}}-Element
- SVG-{{SVGElement("feImage")}}-Element
- Canvas-Funktion [`drawImage`](/de/docs/Web/API/Canvas_API/Tutorial/Using_images#drawing_images)

### Einschränkungen

Aus Sicherheitsgründen gibt es bei Gecko einige Einschränkungen für SVG-Inhalte, wenn sie als Bild verwendet werden:

- [JavaScript](/de/docs/Web/JavaScript) ist deaktiviert.
- Externe Ressourcen (z. B. Bilder, Stylesheets) können nicht geladen werden, sie können jedoch verwendet werden, wenn sie über data:-URLs eingebettet sind.
- {{cssxref(":visited")}}-Link-Stile werden nicht dargestellt.
- Plattformnative Widget-Stilgebung (basierend auf dem Betriebssystem-Thema) ist deaktiviert.

Beachten Sie, dass die oben genannten Einschränkungen spezifisch für Bildkontexte sind; sie gelten nicht, wenn SVG-Inhalte direkt angezeigt werden oder wenn sie als Dokument über die {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}}-Elemente eingebettet werden.

## Spezifikationen

{{Specifications}}
