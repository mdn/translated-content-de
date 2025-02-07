---
title: CSS Media Queries
slug: Web/CSS/CSS_media_queries
l10n:
  sourceCommit: a3d19af7e3eeb1c40748c80cd6b5143cfa201c54
---

{{CSSRef}}

Das **CSS Media Queries** Modul ermöglicht das Testen und Abfragen von Viewport-Werten sowie von Browser- oder Geräteeigenschaften, um CSS-Stile basierend auf der aktuellen Benutzerumgebung bedingt anzuwenden. Media Queries werden in der CSS-`@media`-Regel sowie in anderen Kontexten und Sprachen, wie HTML und JavaScript, verwendet.

Media Queries sind ein zentraler Bestandteil des [responsiven Designs](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design). Sie ermöglichen die bedingte Festlegung von CSS-Stilen abhängig von den Merkmalen eines Geräts. Häufig verwendet man Media Queries, die auf der {{Glossary("viewport", "Viewport")}}-Größe basieren, um geeignete Layouts für Geräte mit unterschiedlichen Bildschirmgrößen einzurichten – zum Beispiel drei Spalten auf einem breiten Bildschirm oder eine einzelne Spalte auf einem schmalen Bildschirm.

Weitere häufige Beispiele umfassen das Vergrößern der Schriftgröße und das Ausblenden von Navigationsmenüs beim Drucken einer Seite, das Anpassen des Abstands zwischen Absätzen, je nachdem, ob eine Seite im Hoch- oder Querformat betrachtet wird, oder das Vergrößern von Schaltflächen, um auf Touchscreens eine größere Trefferfläche bereitzustellen.

Verwenden Sie in [CSS](/de/docs/Web/CSS) die {{cssxref("@media")}} [At-Regel](/de/docs/Web/CSS/At-rule), um einen Teil eines Stylesheets bedingt anzuwenden, basierend auf dem Ergebnis einer Media Query. Um ein ganzes Stylesheet bedingt anzuwenden, verwenden Sie {{cssxref("@import")}}.

Bei der Gestaltung wiederverwendbarer HTML-Komponenten können Sie auch [Container Queries](/de/docs/Web/CSS/CSS_containment/Container_queries) verwenden. Diese erlauben es, Stile basierend auf der Größe eines enthaltenen Elements (anstatt des Viewports oder anderer Geräteeigenschaften) anzuwenden.

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
> CSS Media Queries Level 5 führt fünf `@media`-Deskriptoren ein, die bislang nicht implementiert wurden: {{cssxref("@media/environment-blending", "environment-blending")}}, {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}}, {{cssxref("@media/nav-controls", "nav-controls")}}, {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}} und {{cssxref("@media/video-color-gamut", "video-color-gamut")}}.

> [!NOTE]
> CSS Media Queries Level 4 hat drei `@media`-Deskriptoren veraltet erklärt: {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}, {{cssxref("@media/device-height", "device-height")}} und {{cssxref("@media/device-width", "device-width")}}.

### Datentypen und Operatoren

- [`<media-types>`](/de/docs/Web/CSS/@media#media_types)
- [`<media-features>`](/de/docs/Web/CSS/@media#media_features)
- [`<resolution>`](/de/docs/Web/CSS/resolution)
- [Logische Operatoren](/de/docs/Web/CSS/@media#logical_operators)

### Glossarbegriffe

- {{Glossary("Media/CSS", "media")}}
- {{Glossary("Media_query", "media query")}}

## Leitfäden

- [Media Queries verwenden](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)

  - : Einführung in Media Queries, deren Syntax sowie die Operatoren und Media Features, die zur Konstruktion von Media Query-Ausdrücken verwendet werden.

- [Lernen: Grundlagen zu Media Queries](/de/docs/Learn_web_development/Core/CSS_layout/Media_queries)

  - : Einführung in Media Queries und Ansätze zu deren Verwendung, um responsive Designs zu erstellen.

- [Media Queries testen](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)

  - : Beschreibung, wie Media Queries in JavaScript verwendet werden können, um den Status eines Geräts zu bestimmen und Listener einzurichten, die den Code benachrichtigen, wenn sich die Ergebnisse von Media Queries ändern (z. B. beim Drehen des Bildschirms oder Ändern der Browsergröße).

- [Media Queries für Barrierefreiheit nutzen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries_for_accessibility)

  - : Lernen Sie, wie Media Queries den Nutzern helfen können, Ihre Website besser zu verstehen.

- [Drucken](/de/docs/Web/CSS/CSS_media_queries/Printing)

  - : Tipps und Techniken zur Verbesserung der Druckausgabe von Webinhalten.

- [Responsive Bilder](/de/docs/Web/HTML/Responsive_images)

  - : Lernen Sie, wie Media Queries mit `sizes` verwendet werden können, um responsive Bildlösungen auf Websites zu implementieren.

## Verwandte Konzepte

- [CSS Containment](/de/docs/Web/CSS/CSS_containment) Modul
  - {{cssxref("@container")}} At-Regel
  - [Container Queries verwenden](/de/docs/Web/CSS/CSS_containment/Container_queries)
  - [Größen- und Stil-Container-Queries verwenden](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [CSS Bedingte Regeln](/de/docs/Web/CSS/CSS_conditional_rules) Modul
  - {{cssxref("@supports")}} At-Regel
  - [Feature Queries verwenden](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [CSS Paged Media](/de/docs/Web/CSS/CSS_paged_media) Modul
  - {{cssxref("@page")}} At-Regel
- [CSS Objektmodell](/de/docs/Web/API/CSS_Object_Model) Modul
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
  - `sizes` Attribut für [`<img>`](/de/docs/Web/HTML/Element/img#sizes), [`<link>`](/de/docs/Web/HTML/Element/link#sizes) und [`<source>`](/de/docs/Web/HTML/Element/source#sizes) für {{HTMLElement("picture")}}
  - `media` Attribut für [`<link>`](/de/docs/Web/HTML/Element/link#media), [`<source>`](/de/docs/Web/HTML/Element/source#media) und [`<style>`](/de/docs/Web/HTML/Element/style#media) [HTML](/de/docs/Web/HTML)
  - [Viewport `<meta>` Tag](/de/docs/Web/HTML/Viewport_meta_tag)
- SVG [`media`](/de/docs/Web/SVG/Attribute/media) Attribut

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Container Queries](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Die Attribute `srcset` und `sizes` verwenden](/de/docs/Web/HTML/Element/img#using_the_srcset_and_sizes_attributes)
- [CSS Paged Media](/de/docs/Web/CSS/CSS_paged_media)
- Verwenden Sie {{cssxref("@supports")}}, um Stile anzuwenden, die vom Browser-Support für verschiedene CSS-Technologien abhängen.
