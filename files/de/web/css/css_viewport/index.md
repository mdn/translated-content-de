---
title: CSS-Viewport
slug: Web/CSS/CSS_viewport
l10n:
  sourceCommit: 9f1ac4351350c32273d5e0501c2fb895d561a0e8
---

Das **CSS-Viewport**-Modul ermöglicht es, die Größe, den Zoomfaktor und die Ausrichtung des initialen Containing Blocks des User-Agents, oder _Viewport_, festzulegen.

Inhalte, die für große Viewports entworfen wurden, können in kleineren Viewports eine Vielzahl von Fehlern aufweisen, darunter unbeabsichtigte Zeilenumbrüche, abgeschnittene Inhalte und falsch dimensionierte {{Glossary("scroll_container", "Scroll-Container")}}. HTML bietet ein [Viewport-Meta-Tag](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport), `<meta name="viewport">`, um Hinweise zur anfänglichen Größe des Viewports zu geben. Wenn die Seite nicht für kleine Viewports optimiert ist und dieses Tag weggelassen wird, rendern einige mobile Browser die Seite mit einer festen anfänglichen Breite des Containing Blocks, typischerweise `980px`. Der Inhalt wird dann verkleinert, was die CSS-Pixelgröße kleiner als ein tatsächliches Pixel macht. Die resultierende Seite passt in den verfügbaren Bildschirmbereich, ist jedoch unleserlich, sodass der Benutzer zoomen und scrollen muss, um den Inhalt zu sehen.

Der {{Glossary("viewport", "Viewport")}} Initial Containing Block für kontinuierliche Medien hat die Abmessungen des Viewports. Da der Viewport im Allgemeinen nicht größer als das Display ist, präsentieren Geräte mit kleineren Displays, wie Telefone oder Tablets, typischerweise einen kleineren Viewport als größere Geräte wie Desktops oder Laptops.

## Referenz

### Eigenschaften

- {{cssxref("zoom")}}

### Schnittstellen

- [`Window.Viewport`](/de/docs/Web/API/Window/Viewport)
- [`Viewport`](/de/docs/Web/API/Viewport)
  - [`Viewport.segments`](/de/docs/Web/API/Viewport/segments)
- [`Viewport-Segmente`](/de/docs/Web/API/Viewport_Segments)

### Glossarbegriffe und Definitionen

- {{Glossary("Viewport", "Viewport")}}
- [Tatsächlicher Viewport](/de/docs/Web/CSS/CSSOM_view/Viewport_concepts#actual_viewport)
- [Anfänglicher Viewport](/de/docs/Web/CSS/CSSOM_view/Viewport_concepts#initial_viewport)

## Leitfäden

- [Viewport-Konzepte](/de/docs/Web/CSS/CSSOM_view/Viewport_concepts)
  - : Das Konzept des Viewports — was es ist, seine Auswirkungen im Hinblick auf CSS, SVG und mobile Geräte — und der Unterschied zwischen dem visuellen Viewport und dem Layout-Viewport.

- [Verwendung von Umgebungsvariablen](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables)
  - : Ein Überblick darüber, was Umgebungsvariablen sind, browserdefinierte Umgebungsvariablen und wie die Funktion `env()` verwendet wird.

- [Verwendung der Viewport Segments API](/de/docs/Web/API/Viewport_segments_API/Using)
  - : Erstellen Sie responsive Designs, die für verschiedene Viewport-Segmentgrößen und Anordnungen optimiert sind, mit der API und Umgebungsvariablen.

## Verwandte Konzepte

- [CSS-Media-Queries](/de/docs/Web/CSS/CSS_media_queries) Modul
  - {{cssxref("@media")}}
  - {{cssxref("media/horizontal-viewport-segments", "horizontal-viewport-segments")}} Deskriptor
  - {{cssxref("media/vertical-viewport-segments", "vertical-viewport-segments")}} Deskriptor

- [CSS-Umgebungsvariablen](/de/docs/Web/CSS/CSS_environment_variables)
  - {{cssxref("env()")}}
  - [`<environment-variable-name>`](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables#browser-defined_environment_variables)

- [Device Posture API](/de/docs/Web/API/Device_Posture_API)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSSOM View](/de/docs/Web/CSS/CSSOM_view) Modul
