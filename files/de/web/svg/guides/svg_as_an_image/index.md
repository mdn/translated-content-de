---
title: SVG als Bild
slug: Web/SVG/Guides/SVG_as_an_image
l10n:
  sourceCommit: be9ba40fbef7f96beae73e5dd6d48a3ca875826f
---

SVG kann als Bildformat in HTML, CSS, bestimmten SVG-Elementen und über die Canvas-API verwendet werden. Diese Seite listet die Funktionen auf, bei denen Sie SVG als Bildquelle angeben können.

## Funktionen, die SVG unterstützen

Browser unterstützen SVG-Bilder in:

- HTML {{HTMLElement("img")}} oder {{SVGElement("svg")}} Elementen
- CSS {{cssxref("background-image")}}
- CSS {{cssxref("list-style-image")}}
- CSS {{cssxref("content")}}
- SVG {{SVGElement("image")}} Element
- SVG {{SVGElement("feImage")}} Element
- Canvas [`drawImage`](/de/docs/Web/API/Canvas_API/Tutorial/Using_images#drawing_images) Funktion

## Einschränkungen

Aus Sicherheitsgründen legen einige Browser Einschränkungen für SVG-Inhalte fest, wenn sie als Bild verwendet werden. Insbesondere können die folgenden Einschränkungen gelten:

- [JavaScript](/de/docs/Web/JavaScript) ist deaktiviert.
- Externe Ressourcen (z. B. Bilder, Stylesheets) können nicht geladen werden, obwohl sie verwendet werden können, wenn sie durch [`data:` URLs](/de/docs/Web/URI/Reference/Schemes/data) eingebettet sind.
- {{cssxref(":visited")}}-Link-Stile werden nicht dargestellt.
- Plattform-natives Widget-Styling (basierend auf dem Betriebssystem-Thema) ist deaktiviert.

Beachten Sie, dass die oben genannten Einschränkungen spezifisch für Bildkontexte sind; sie gelten nicht, wenn SVG-Inhalte direkt betrachtet werden oder wenn sie als Dokument über die {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, oder {{HTMLElement("embed")}} Elemente eingebettet werden.

## Spezifikationen

{{Specifications}}
