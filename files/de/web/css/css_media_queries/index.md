---
title: CSS-Media-Queries
slug: Web/CSS/CSS_media_queries
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Das **CSS-Media-Queries**-Modul ermöglicht das Testen und Abfragen von Viewport-Werten sowie von Browser- oder Gerätemerkmalen, um konditional CSS-Stile basierend auf der aktuellen Benutzerumgebung anzuwenden. Media-Queries werden in der CSS-`@media`-Regel und anderen Kontexten und Sprachen wie HTML und JavaScript verwendet.

Media-Queries sind ein wesentlicher Bestandteil des [Responsive Designs](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design). Sie ermöglichen die bedingte Festlegung von CSS-Stilen in Abhängigkeit vom Vorhandensein oder Wert von Gerätemerkmalen. Häufig wird eine Media-Query basierend auf der {{Glossary("viewport", "Viewport")}}-Größe verwendet, um geeignete Layouts auf Geräten mit unterschiedlichen Bildschirmgrößen festzulegen – zum Beispiel drei Spalten auf einem breiten Bildschirm oder eine einzelne Spalte auf einem schmalen Bildschirm.

Andere gängige Beispiele umfassen die Erhöhung der Schriftgröße und das Ausblenden von Navigationsmenüs beim Drucken einer Seite, das Anpassen des Abstands zwischen Absätzen, wenn eine Seite im Hoch- oder Querformat angezeigt wird, oder die Vergrößerung von Schaltflächen, um eine größere Trefferfläche auf Touchscreens bereitzustellen.

In [CSS](/de/docs/Web/CSS) verwenden Sie die {{cssxref("@media")}} [At-Regel](/de/docs/Web/CSS/At-rule), um einen Teil eines Stylesheets bedingt basierend auf dem Ergebnis einer Media-Query anzuwenden. Um ein gesamtes Stylesheet bedingt anzuwenden, verwenden Sie {{cssxref("@import")}}.

Beim Entwerfen von wiederverwendbaren HTML-Komponenten können Sie auch [Container-Queries](/de/docs/Web/CSS/CSS_containment/Container_queries) verwenden, die es ermöglichen, Stile basierend auf der Größe eines enthaltenden Elements statt des Viewports oder anderer Gerätemerkmale anzuwenden.

## Referenz

### At-Regeln

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
> CSS-Media-Queries Level 5 führt fünf `@media`-Deskriptoren ein, die nicht implementiert wurden: {{cssxref("@media/environment-blending", "environment-blending")}}, {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}}, {{cssxref("@media/nav-controls", "nav-controls")}}, {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}} und {{cssxref("@media/video-color-gamut", "video-color-gamut")}}

> [!NOTE]
> CSS-Media-Queries Level 4 hat drei `@media`-Deskriptoren veraltet erklärt: {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}, {{cssxref("@media/device-height", "device-height")}} und {{cssxref("@media/device-width", "device-width")}}.

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

  - : Einführung in Media-Queries, deren Syntax sowie die Operatoren und Medienmerkmale, die zur Konstruktion von Media-Query-Ausdrücken verwendet werden.

- [Lernen: Grundlagen der Media-Queries](/de/docs/Learn_web_development/Core/CSS_layout/Media_queries)

  - : Einführung in Media-Queries und Ansätze zu deren Nutzung zur Erstellung von Responsive Designs.

- [Testing von Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)

  - : Beschreibt, wie Media-Queries in Ihrem JavaScript-Code verwendet werden können, um den Status eines Geräts zu bestimmen, und wie Listener eingerichtet werden, die Ihren Code benachrichtigen, wenn sich die Ergebnisse von Media-Queries ändern (z.B. wenn der Benutzer den Bildschirm dreht oder den Browser anpasst).

- [Verwendung von Media-Queries für Barrierefreiheit](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries_for_accessibility)

  - : Erfahren Sie, wie Media-Queries Benutzern helfen können, Ihre Website besser zu verstehen.

- [Drucken](/de/docs/Web/CSS/CSS_media_queries/Printing)

  - : Tipps und Techniken zur Verbesserung der Druckausgabe von Web-Inhalten.

- [Responsive Bilder](/de/docs/Web/HTML/Responsive_images)

  - : Lernen Sie, wie Media-Queries mit `sizes` verwendet werden können, um auf Websites responsive Bildlösungen umzusetzen.

## Verwandte Konzepte

- [CSS-Containment](/de/docs/Web/CSS/CSS_containment) Modul
  - {{cssxref("@container")}} At-Regel
  - [Verwendung von Container-Queries](/de/docs/Web/CSS/CSS_containment/Container_queries)
  - [Verwendung von Größen- und Stil-Container-Queries](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [CSS-Konditionalregeln](/de/docs/Web/CSS/CSS_conditional_rules) Modul
  - {{cssxref("@supports")}} At-Regel
  - [Verwendung von Funktions-Queries](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [CSS-Paged-Media](/de/docs/Web/CSS/CSS_paged_media) Modul
  - {{cssxref("@page")}} At-Regel
- [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model) Modul
  - [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) Schnittstelle
    - [`matches`](/de/docs/Web/API/MediaQueryList/matches) Eigenschaft
    - [`media`](/de/docs/Web/API/MediaQueryList/media) Eigenschaft
    - [`change`](/de/docs/Web/API/MediaQueryList/change_event) Ereignis
  - [`MediaList`](/de/docs/Web/API/MediaList) Schnittstelle
    - [`mediaText`](/de/docs/Web/API/MediaList/mediaText) Eigenschaft
  - [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent) Objekt
- HTML
  - `sizes` Attribut für [`<img>`](/de/docs/Web/HTML/Element/img#sizes), [`<link>`](/de/docs/Web/HTML/Element/link#sizes) und [`<source>`](/de/docs/Web/HTML/Element/source#sizes) für {{HTMLElement("picture")}}
  - `media` Attribut für [`<link>`](/de/docs/Web/HTML/Element/link#media), [`<source>`](/de/docs/Web/HTML/Element/source#media) und [`<style>`](/de/docs/Web/HTML/Element/style#media) [HTML](/de/docs/Web/HTML)
  - [Viewport `<meta>` Tag](/de/docs/Web/HTML/Viewport_meta_tag)
- SVG [`media`](/de/docs/Web/SVG/Attribute/media) Attribut

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Container-Queries](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung der `srcset` und `sizes` Attribute](/de/docs/Web/HTML/Element/img#using_the_srcset_and_sizes_attributes)
- [CSS-Paged-Media](/de/docs/Web/CSS/CSS_paged_media)
- Verwendung von {{cssxref("@supports")}}, um Stile anzuwenden, die von der Browser-Unterstützung für verschiedene CSS-Technologien abhängen.
