---
title: SVG als Bild
slug: Web/SVG/Guides/SVG_as_an_image
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
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

Aus Sicherheitsgründen unterliegt SVG-Inhalt, wenn er als Bild verwendet wird, einigen Einschränkungen in Gecko:

- [JavaScript](/de/docs/Web/JavaScript) ist deaktiviert.
- Externe Ressourcen (z.B. Bilder, Stylesheets) können nicht geladen werden, obwohl sie verwendet werden können, wenn sie über Data-URLs eingebettet sind.
- {{cssxref(":visited")}}-Link-Stile werden nicht gerendert.
- Die plattformnative Widget-Stilgebung (basierend auf dem Betriebssystem-Thema) ist deaktiviert.

Beachten Sie, dass die oben genannten Einschränkungen spezifisch für Bildkontexte sind; sie gelten nicht, wenn SVG-Inhalt direkt angesehen oder als Dokument über die {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}}-Elemente eingebettet wird.

## Spezifikationen

{{Specifications}}
