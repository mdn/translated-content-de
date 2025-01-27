---
title: SVG als Bild
slug: Web/SVG/SVG_as_an_Image
l10n:
  sourceCommit: bd6d98893c48e00bfcbdafd60c684bf30e0fa406
---

{{SVGRef}}

SVG-Bilder können als Bildformat in verschiedenen Kontexten verwendet werden. Browser unterstützen SVG-Bilder in:

- HTML-{{HTMLElement("img")}}- oder {{SVGElement("svg")}}-Elementen
- CSS {{cssxref("background-image")}}
- CSS {{cssxref("list-style-image")}}
- CSS {{cssxref("content")}}
- SVG-{{SVGElement("image")}}-Element
- SVG-{{SVGElement("feImage")}}-Element
- Canvas-Funktion [`drawImage`](/de/docs/Web/API/Canvas_API/Tutorial/Using_images#drawing_images)

## Einschränkungen

Aus Sicherheitsgründen legt Gecko einige Einschränkungen für SVG-Inhalte fest, wenn diese als Bild verwendet werden:

- [JavaScript](/de/docs/Web/JavaScript) ist deaktiviert.
- Externe Ressourcen (z. B. Bilder, Stylesheets) können nicht geladen werden, sie können jedoch verwendet werden, wenn sie über data:-URLs eingebettet sind.
- {{cssxref(":visited")}}-Link-Stile werden nicht gerendert.
- Plattform-native Widget-Stile (basierend auf dem OS-Theme) sind deaktiviert.

Beachten Sie, dass die obigen Einschränkungen spezifisch für Bildkontexte gelten; sie gelten nicht, wenn SVG-Inhalte direkt angezeigt werden oder wenn sie als Dokument über die {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}}-Elemente eingebettet sind.

## Spezifikationen

{{Specifications}}
