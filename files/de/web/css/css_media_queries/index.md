---
title: CSS-Media-Queries
slug: Web/CSS/CSS_media_queries
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Das Modul **CSS-Media-Queries** ermöglicht das Testen und Abfragen von Viewport-Werten sowie Browser- oder Gerätefunktionen, um bedingt CSS-Stile basierend auf der aktuellen Benutzerumgebung anzuwenden. Media-Queries werden in der CSS-`@media`-Regel und anderen Kontexten und Sprachen wie HTML und JavaScript verwendet.

Media-Queries sind ein wesentlicher Bestandteil des [Responsive Designs](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design). Sie ermöglichen die bedingte Festlegung von CSS-Stilen in Abhängigkeit von den Eigenschaften eines Geräts. Häufig wird eine Media-Query basierend auf der {{Glossary("viewport", "Viewport")}}-Größe verwendet, um geeignete Layouts auf Geräten mit unterschiedlichen Bildschirmgrößen zu setzen – zum Beispiel drei Spalten auf einem breiten Bildschirm oder eine einzelne Spalte auf einem schmalen Bildschirm.

Andere häufige Beispiele sind das Vergrößern der Schriftgröße und das Ausblenden von Navigationsmenüs beim Drucken einer Seite, das Anpassen des Abstands zwischen Absätzen, wenn eine Seite im Hoch- oder Querformat betrachtet wird, oder das Vergrößern von Schaltflächen, um eine größere Trefffläche auf Touchscreens bereitzustellen.

In [CSS](/de/docs/Web/CSS) verwenden Sie die {{cssxref("@media")}}-Regel [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule), um bedingt einen Teil eines Stylesheets basierend auf dem Ergebnis einer Media-Query anzuwenden. Um ein ganzes Stylesheet bedingt anzuwenden, verwenden Sie {{cssxref("@import")}}.

Beim Entwerfen von wiederverwendbaren HTML-Komponenten können Sie auch [Container-Queries](/de/docs/Web/CSS/CSS_containment/Container_queries) verwenden, mit denen Sie Stile basierend auf der Größe eines enthaltenen Elements und nicht auf dem Viewport oder anderen Geräteeigenschaften anwenden können.

## Referenz

### At-Rules

- {{cssxref("@import")}}
- {{cssxref("@media")}}

### Deskriptoren

- {{cssxref("@media/any-hover", "any-hover")}}
- {{cssxref("@media/any-pointer", "any-pointer")}}
- {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
- {{cssxref("@media/color", "color")}}
- {{cssxref("@media/color-gamut", "color-gamut")}}
- {{cssxref("@media/color-index", "color-index")}}
- {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}
- {{cssxref("@media/device-height", "device-height")}}
- {{cssxref("@media/device-width", "device-width")}}
- {{cssxref("@media/display-mode", "display-mode")}}
- {{cssxref("@media/dynamic-range", "dynamic-range")}}
- {{cssxref("@media/forced-colors", "forced-colors")}}
- {{cssxref("@media/grid", "grid")}}
- {{cssxref("@media/height", "height")}}
- {{cssxref("@media/hover", "hover")}}
- {{cssxref("@media/inverted-colors", "inverted-colors")}}
- {{cssxref("@media/monochrome", "monochrome")}}
- {{cssxref("@media/orientation", "orientation")}}
- {{cssxref("@media/overflow-block", "overflow-block")}}
- {{cssxref("@media/overflow-inline", "overflow-inline")}}
- {{cssxref("@media/pointer", "pointer")}}
- {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
- {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
- {{cssxref("@media/prefers-reduced-data", "prefers-reduced-data")}}
- {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
- {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}
- {{cssxref("@media/resolution", "resolution")}}
- {{cssxref("@media/scan", "scan")}}
- {{cssxref("@media/scripting", "scripting")}}
- {{cssxref("@media/update", "update")}}
- {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
- {{cssxref("@media/width", "width")}}

> [!NOTE]
> CSS-Media-Queries Level 5 führt fünf `@media`-Deskriptoren ein, die bisher nicht implementiert wurden: {{cssxref("@media/environment-blending", "environment-blending")}}, {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}}, {{cssxref("@media/nav-controls", "nav-controls")}}, {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}}, und {{cssxref("@media/video-color-gamut", "video-color-gamut")}}

> [!NOTE]
> CSS-Media-Queries Level 4 setzte drei `@media`-Deskriptoren außer Kraft: {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}, {{cssxref("@media/device-height", "device-height")}}, und {{cssxref("@media/device-width", "device-width")}}.

### Datentypen und Operatoren

- [`<media-types>`](/de/docs/Web/CSS/@media#media_types)
- [`<media-features>`](/de/docs/Web/CSS/@media#media_features)
- [`<resolution>`](/de/docs/Web/CSS/resolution)
- [Logische Operatoren](/de/docs/Web/CSS/@media#logical_operators)

### Glossarbegriffe

- {{Glossary("Media/CSS", "media")}}
- {{Glossary("Media_query", "media query")}}

## Leitfäden

- [Verwendung von Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)

  - : Einführung in Media-Queries, deren Syntax, sowie die Operatoren und Medienmerkmale, die zur Konstruktion von Media-Query-Ausdrücken verwendet werden.

- [Lernen: Grundlagen der Media-Queries](/de/docs/Learn_web_development/Core/CSS_layout/Media_queries)

  - : Einführung in Media-Queries und Ansätze für deren Verwendung zur Erstellung responsiver Designs.

- [Testen von Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)

  - : Beschreibt, wie Sie Media-Queries in Ihrem JavaScript-Code verwenden können, um den Zustand eines Geräts zu bestimmen und Listener einzurichten, die Ihren Code benachrichtigen, wenn sich die Ergebnisse von Media-Queries ändern (zum Beispiel, wenn der Benutzer den Bildschirm dreht oder den Browser vergrößert).

- [Verwendung von Media-Queries für Barrierefreiheit](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries_for_accessibility)

  - : Erlernen Sie, wie Media-Queries dazu beitragen können, dass Benutzer Ihre Website besser verstehen.

- [Drucken](/de/docs/Web/CSS/CSS_media_queries/Printing)

  - : Tipps und Techniken zur Verbesserung der Druckausgabe von Webinhalten.

- [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
  - : Lernen Sie, wie Sie Media-Queries mit `sizes` verwenden, um responsive Bildlösungen auf Websites umzusetzen.

## Verwandte Konzepte

- [CSS-Kontainment](/de/docs/Web/CSS/CSS_containment)-Modul
  - {{cssxref("@container")}} at-rule
  - [Verwendung von Container-Queries](/de/docs/Web/CSS/CSS_containment/Container_queries)
  - [Verwendung von Größen- und Stil-Container-Queries](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [CSS-bediente Regeln](/de/docs/Web/CSS/CSS_conditional_rules)-Modul
  - {{cssxref("@supports")}} at-rule
  - [Verwendung von Feature-Queries](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [CSS-gedruckte Medien](/de/docs/Web/CSS/CSS_paged_media)-Modul
  - {{cssxref("@page")}} at-rule
- [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model)-Modul
  - [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) Schnittstelle
    - [`matches`](/de/docs/Web/API/MediaQueryList/matches) Eigenschaft
    - [`media`](/de/docs/Web/API/MediaQueryList/media) Eigenschaft
    - [`change`](/de/docs/Web/API/MediaQueryList/change_event) Ereignis
  - [`MediaList`](/de/docs/Web/API/MediaList) Schnittstelle
    - [`mediaText`](/de/docs/Web/API/MediaList/mediaText) Eigenschaft
  - [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent) Objekt
- [Device Posture API](/de/docs/Web/API/Device_Posture_API)
  - {{cssxref("@media/device-posture", "device-posture")}} Deskriptor
- HTML
  - `sizes` Attribut für [`<img>`](/de/docs/Web/HTML/Reference/Elements/img#sizes), [`<link>`](/de/docs/Web/HTML/Reference/Elements/link#sizes) und [`<source>`](/de/docs/Web/HTML/Reference/Elements/source#sizes) für {{HTMLElement("picture")}}
  - `media` Attribut für [`<link>`](/de/docs/Web/HTML/Reference/Elements/link#media), [`<source>`](/de/docs/Web/HTML/Reference/Elements/source#media) und [`<style>`](/de/docs/Web/HTML/Reference/Elements/style#media) [HTML](/de/docs/Web/HTML)
  - [Viewport-`<meta>`-Tag](/de/docs/Web/HTML/Guides/Viewport_meta_element)
- SVG [`media`](/de/docs/Web/SVG/Reference/Attribute/media) Attribut

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Container-Querien](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung der `srcset`- und `sizes`-Attribute](/de/docs/Web/HTML/Reference/Elements/img#using_the_srcset_and_sizes_attributes)
- [CSS-gedruckte Medien](/de/docs/Web/CSS/CSS_paged_media)
- Verwenden Sie {{cssxref("@supports")}}, um Stile anzuwenden, die von der Browserunterstützung für verschiedene CSS-Technologien abhängen.
