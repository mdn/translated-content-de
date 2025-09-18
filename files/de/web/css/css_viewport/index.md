---
title: CSS-Viewport
slug: Web/CSS/CSS_viewport
l10n:
  sourceCommit: 9036ccca6d55b90913ca424e6706b0c9ed1fa93b
---

Das **CSS-Viewport**-Modul ermöglicht es, die Größe, den Zoomfaktor und die Ausrichtung des Anfangsblocks, oder _Viewport_, des Benutzeragents festzulegen.

Inhalte, die für große Viewports entworfen wurden, können in kleineren Viewports eine Vielzahl von Fehlern aufweisen, einschließlich unbeabsichtigtem Umbruch, abgeschnittenem Inhalt und falsch dimensionierten {{Glossary("scroll_container", "Scroll-Containern")}}. HTML bietet ein [Viewport-Meta-Tag](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport), `<meta name="viewport">`, um Hinweise zur Anfangsgröße des Viewports zu geben. Wenn die Seite nicht für kleine Viewports optimiert ist und dieses Tag weggelassen wird, rendern einige mobile Browser die Seite mit einer festen Anfangsbreite des Containing-Blocks von typischerweise `980px`. Der Inhalt wird dann verkleinert, wodurch die CSS-Pixelgröße kleiner wird als ein tatsächliches Pixel. Die resultierende Seite passt in den verfügbaren Bildschirmbereich, ist jedoch unleserlich, sodass der Benutzer zoomen und scrollen muss, um den Inhalt anzuzeigen.

Der {{Glossary("viewport", "Viewport")}} des Anfangsblocks für kontinuierliche Medien hat die Dimensionen des Viewports. Da der Viewport im Allgemeinen nicht größer ist als das Display, präsentieren Geräte mit kleineren Displays, wie Telefone oder Tablets, typischerweise einen kleineren Viewport als größere Geräte wie Desktops oder Laptops.

## Referenz

### Eigenschaften

- {{cssxref("zoom")}}

### Schnittstellen

- [`Window.Viewport`](/de/docs/Web/API/Window/viewport)
- [`Viewport`](/de/docs/Web/API/Viewport)
  - [`Viewport.segments`](/de/docs/Web/API/Viewport/segments)

### Glossarbegriffe und Definitionen

- {{Glossary("Viewport", "Viewport")}}
- [Tatsächlicher Viewport](/de/docs/Web/CSS/CSSOM_view/Viewport_concepts#actual_viewport)
- [Anfänglicher Viewport](/de/docs/Web/CSS/CSSOM_view/Viewport_concepts#initial_viewport)

## Leitfäden

- [Viewport-Konzepte](/de/docs/Web/CSS/CSSOM_view/Viewport_concepts)
  - : Das Konzept des Viewports — was er ist, seine Auswirkungen in Bezug auf CSS, SVG und mobile Geräte — und der Unterschied zwischen dem visuellen Viewport und dem Layout-Viewport.

- [Verwendung von Umgebungsvariablen](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables)
  - : Ein Überblick über Umgebungsvariablen, browserdefinierte Umgebungsvariablen und wie die `env()`-Funktion verwendet wird.

- [Verwenden der Viewport-Segments-API](/de/docs/Web/API/Viewport_segments_API/Using)
  - : Erstellen Sie responsive Designs, die für verschiedene Viewport-Segmentgrößen und Anordnungen optimiert sind, mit der API und Umgebungsvariablen.

## Verwandte Konzepte

- [CSS-Media-Queries](/de/docs/Web/CSS/CSS_media_queries)-Modul
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

- [CSSOM-Sicht](/de/docs/Web/CSS/CSSOM_view)-Modul
