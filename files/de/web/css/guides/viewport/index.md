---
title: CSS-Viewport
short-title: Viewport
slug: Web/CSS/Guides/Viewport
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSS-Viewport**-Modul ermöglicht es, die Größe, den Zoomfaktor und die Ausrichtung des initialen umschließenden Blocks des User-Agents, oder _Viewport_, festzulegen.

Inhalte, die für große Viewports gestaltet sind, können bei der Ansicht in kleineren Viewports verschiedene Probleme aufweisen, darunter unbeabsichtigtes Umbruchverhalten, abgeschnittene Inhalte und falsch dimensionierte {{Glossary("scroll_container", "Scroll-Container")}}. HTML stellt ein [Viewport-Meta-Tag](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport), `<meta name="viewport">`, zur Verfügung, um Hinweise über die anfängliche Größe des Viewports zu geben. Wenn die Seite nicht für kleine Viewports optimiert ist und dieses Tag weggelassen wird, rendern einige mobile Browser die Seite mit einer festen Breite des initialen umschließenden Blocks, typischerweise `980px`. Die Inhalte werden dann verkleinert, was dazu führt, dass die CSS-Pixelgröße kleiner als ein tatsächlicher Pixel ist. Die resultierende Seite passt zwar in den verfügbaren Bildschirmraum, ist jedoch unleserlich, wodurch der Benutzer zoomen und schwenken muss, um die Inhalte zu sehen.

Der {{Glossary("viewport", "Viewport")}} initiale umschließende Block für kontinuierliche Medien hat die Dimensionen des Viewports. Da der Viewport im Allgemeinen nicht größer als das Display ist, präsentieren Geräte mit kleineren Displays, wie Telefone oder Tablets, typischerweise einen kleineren Viewport als größere Geräte wie Desktops oder Laptops.

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
- [Initialer Viewport](/de/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts#initial_viewport)

## Leitfäden

- [Viewport-Konzepte](/de/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts)
  - : Das Konzept des Viewports — was es ist, seine Auswirkungen im Hinblick auf CSS, SVG und mobile Geräte — und der Unterschied zwischen dem visuellen Viewport und dem Layout-Viewport.

- [Verwenden von Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables/Using)
  - : Ein Überblick darüber, was Umgebungsvariablen sind, browserdefinierte Umgebungsvariablen und wie die `env()`-Funktion verwendet wird.

- [Verwenden der Viewport-Segmente API](/de/docs/Web/API/Viewport_segments_API/Using)
  - : Erstellen von responsiven Designs, die für verschiedene Viewport-Segmentgrößen und -anordnungen mit der API und Umgebungsvariablen optimiert sind.

## Verwandte Konzepte

- [CSS-Mediaqueries](/de/docs/Web/CSS/Guides/Media_queries)-Modul
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

- [CSSOM-View](/de/docs/Web/CSS/Guides/CSSOM_view)-Modul
