---
title: SVG als Bild
slug: Web/SVG/SVG_as_an_Image
l10n:
  sourceCommit: 4a350ee6ef10402ec862849f628c5370e118f81c
---

{{SVGRef}}

SVG-Bilder können als Bildformat in verschiedenen Kontexten verwendet werden. Browser unterstützen SVG-Bilder in:

- HTML-Elementen {{HTMLElement("img")}} oder {{SVGElement("svg")}}
- CSS {{cssxref("background-image")}}
- CSS {{cssxref("list-style-image")}}
- CSS {{cssxref("content")}}
- SVG-Element {{SVGElement("image")}}
- SVG-Element {{SVGElement("feImage")}}
- Canvas-Funktion [`drawImage`](/de/docs/Web/API/Canvas_API/Tutorial/Using_images#drawing_images)

### Einschränkungen

Aus Sicherheitsgründen legt Gecko einige Einschränkungen für SVG-Inhalte fest, wenn diese als Bild verwendet werden:

- [JavaScript](/de/docs/Web/JavaScript) ist deaktiviert.
- Externe Ressourcen (z. B. Bilder, Stylesheets) können nicht geladen werden, obwohl sie genutzt werden können, wenn sie über data: URLs eingebettet sind.
- {{cssxref(":visited")}}-Link-Stile werden nicht gerendert.
- Die Plattform-native Widget-Stilgebung (basierend auf dem Betriebssystemthema) ist deaktiviert.

Beachten Sie, dass die oben genannten Einschränkungen speziell für Bildkontexte gelten; sie treffen nicht zu, wenn SVG-Inhalte direkt betrachtet werden oder wenn sie als Dokument über die Elemente {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} eingebettet sind.

## Spezifikationen

{{Specifications}}
