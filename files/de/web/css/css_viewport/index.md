---
title: CSS-Viewport
slug: Web/CSS/CSS_viewport
l10n:
  sourceCommit: 2e427c5c185433c5a6612c63bf877753a5fedc99
---

Das **CSS-Viewport**-Modul ermöglicht die Festlegung der Größe, des Zoomfaktors und der Ausrichtung des anfänglichen, enthaltenen Blocks des Benutzeragenten, oder _Viewport_.

Inhalte, die für große Viewports gestaltet sind, können eine Vielzahl von Fehlern aufweisen, wenn sie in kleineren Viewports betrachtet werden. Dazu gehören ungewolltes Umbrechen, abgeschnittene Inhalte und falsch dimensionierte {{Glossary("scroll_container", "Scroll-Container")}}. HTML bietet ein [Viewport-Meta-Tag](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport), `<meta name="viewport">`, um Hinweise zur anfänglichen Größe des Viewports zu geben. Wenn die Website nicht für kleine Viewports optimiert ist und dieses Tag weggelassen wird, rendern einige mobile Browser die Website mit einer festen Anfangsbreite des enthaltenen Blocks, typischerweise `980px`. Der Inhalt wird dann verkleinert, wodurch die CSS-Pixelgröße kleiner als ein tatsächlicher Pixel wird. Die resultierende Seite passt in den verfügbaren Bildschirmraum, ist jedoch unleserlich, was den Benutzer zwingt, zu zoomen und zu schwenken, um den Inhalt zu betrachten.

Der {{Glossary("viewport", "Viewport")}} anfänglich enthaltene Block für kontinuierliche Medien hat die Abmessungen des Viewports. Da der Viewport in der Regel nicht größer als das Display ist, präsentieren Geräte mit kleineren Displays, wie Telefone oder Tablets, typischerweise einen kleineren Viewport als größere Geräte wie Desktops oder Laptops.

## Referenz

### Eigenschaften

- {{cssxref("zoom")}}

### Schnittstellen

- [`Window.Viewport`](/de/docs/Web/API/Window/viewport)
- [`Viewport`](/de/docs/Web/API/Viewport)
  - [`Viewport.segments`](/de/docs/Web/API/Viewport/segments)

### Glossarbegriffe und Definitionen

- {{Glossary("Viewport", "Viewport")}}
- [Tatsächlicher Viewport](/de/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts#actual_viewport)
- [Anfänglicher Viewport](/de/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts#initial_viewport)

## Leitfäden

- [Viewport-Konzepte](/de/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts)
  - : Das Konzept des Viewports — was es ist, seine Auswirkungen in Bezug auf CSS, SVG und mobile Geräte — und der Unterschied zwischen dem visuellen Viewport und dem Layout-Viewport.

- [Verwendung von Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables/Using)
  - : Ein Überblick darüber, was Umgebungsvariablen sind, browserdefinierte Umgebungsvariablen und wie man die `env()`-Funktion verwendet.

- [Verwendung der Viewport-Segmente-API](/de/docs/Web/API/Viewport_segments_API/Using)
  - : Erstellen Sie responsive Designs, die für unterschiedliche Größen und Anordnungen von Viewport-Segmenten mit der API und Umgebungsvariablen optimiert sind.

## Verwandte Konzepte

- [CSS-Media-Queries](/de/docs/Web/CSS/Guides/Media_queries) Modul
  - {{cssxref("@media")}}
  - {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}} Deskriptor
  - {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}} Deskriptor

- [CSS-Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables)
  - {{cssxref("env()")}}
  - [`<environment-variable-name>`](/de/docs/Web/CSS/Guides/Environment_variables/Using#browser-defined_environment_variables)

- [Device Posture API](/de/docs/Web/API/Device_Posture_API)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSSOM-Ansicht](/de/docs/Web/CSS/Guides/CSSOM_view) Modul
