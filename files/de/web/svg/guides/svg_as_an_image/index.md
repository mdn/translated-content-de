---
title: SVG als Bild
slug: Web/SVG/Guides/SVG_as_an_image
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

SVG-Bilder können in verschiedenen Kontexten als Bildformat verwendet werden. Browser unterstützen SVG-Bilder in:

- HTML-{{HTMLElement("img")}}- oder {{SVGElement("svg")}}-Elementen
- CSS-{{cssxref("background-image")}}
- CSS-{{cssxref("list-style-image")}}
- CSS-{{cssxref("content")}}
- SVG-{{SVGElement("image")}}-Element
- SVG-{{SVGElement("feImage")}}-Element
- Canvas-Funktion [`drawImage`](/de/docs/Web/API/Canvas_API/Tutorial/Using_images#drawing_images)

## Einschränkungen

Aus Sicherheitsgründen legt Gecko einige Einschränkungen für SVG-Inhalte fest, wenn sie als Bild verwendet werden:

- [JavaScript](/de/docs/Web/JavaScript) ist deaktiviert.
- Externe Ressourcen (z.B. Bilder, Stylesheets) können nicht geladen werden, obwohl sie in Form von eingebetteten Daten-URLs verwendet werden können.
- {{cssxref(":visited")}}-Link-Stile werden nicht gerendert.
- Plattformnative Widget-Stilierung (basierend auf dem OS-Design) ist deaktiviert.

Beachten Sie, dass die oben genannten Einschränkungen spezifisch für Bildkontexte sind; sie gelten nicht, wenn SVG-Inhalt direkt angesehen wird oder wenn es als Dokument über die {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}}-Elemente eingebettet ist.

## Spezifikationen

{{Specifications}}
