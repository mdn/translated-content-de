---
title: CSS Media Queries
slug: Web/CSS/CSS_media_queries
l10n:
  sourceCommit: 016ecd8ccaed866c4d8d995fb18379c6e48f3b50
---

Das **CSS Media Queries** Modul ermöglicht das Testen und Abfragen von Viewport-Werten sowie von Browser- oder Gerätefunktionen, um CSS-Stile je nach aktuellem Benutzerumfeld bedingt anzuwenden. Media Queries werden in der CSS-`@media`-Regel sowie in anderen Kontexten und Sprachen wie HTML und JavaScript verwendet.

Media Queries sind ein wesentlicher Bestandteil des [Responsive Designs](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design). Sie ermöglichen es, CSS-Stile abhängig von der Präsenz oder dem Wert von Geräteeigenschaften bedingt festzulegen. Häufig wird eine Media Query basierend auf der {{Glossary("viewport", "Viewport")}}-Größe verwendet, um auf Geräten mit unterschiedlichen Bildschirmgrößen passende Layouts festzulegen – zum Beispiel drei Spalten auf einem breiten Bildschirm oder eine einzelne Spalte auf einem schmalen Bildschirm.

Weitere häufige Beispiele sind die Erhöhung der Schriftgröße und das Ausblenden von Navigationsmenüs beim Drucken einer Seite, das Anpassen des Abstands zwischen Absätzen, wenn eine Seite im Hoch- oder Querformat angezeigt wird, oder das Vergrößern von Schaltflächen, um auf Touchscreens eine größere Trefferfläche bereitzustellen.

In [CSS](/de/docs/Web/CSS) verwenden Sie die {{cssxref("@media")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule), um einen Teil eines Stylesheets abhängig vom Ergebnis einer Media Query bedingt anzuwenden. Um ein ganzes Stylesheet bedingt anzuwenden, verwenden Sie {{cssxref("@import")}}.

Bei der Gestaltung wiederverwendbarer HTML-Komponenten können Sie auch [Container-Queries](/de/docs/Web/CSS/CSS_containment/Container_queries) verwenden, die es Ihnen ermöglichen, Stile basierend auf der Größe eines enthaltenden Elements anzuwenden, anstatt auf den Viewport oder andere Geräteeigenschaften.

## Referenz

### At-Regeln und Deskriptoren

- {{cssxref("@import")}}
- {{cssxref("@media")}}
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
  - {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}}
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
  - {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}}
  - {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
  - {{cssxref("@media/width", "width")}}

Das CSS Media Queries Level 5 Modul führt auch die Deskriptoren `environment-blending`, `nav-controls` und `video-color-gamut` ein. Derzeit unterstützt kein Browser diese Funktionen.

> [!NOTE]
> CSS Media Queries Level 4 hat drei `@media` Deskriptoren veraltet: {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}, {{cssxref("@media/device-height", "device-height")}}, und {{cssxref("@media/device-width", "device-width")}}.

### Datentypen und Operatoren

- [`<media-types>`](/de/docs/Web/CSS/@media#media_types)
- [`<media-features>`](/de/docs/Web/CSS/@media#media_features)
- [`<resolution>`](/de/docs/Web/CSS/resolution)
- [Logische Operatoren](/de/docs/Web/CSS/@media#logical_operators)

### Glossarbegriffe

- {{Glossary("Media/CSS", "media")}}
- {{Glossary("Media_query", "media query")}}

## Leitfäden

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
  - : Einführung in Media Queries, deren Syntax sowie die Operatoren und Media-Funktionen, die zur Erstellung von Media Query-Ausdrücken verwendet werden.

- [Lernen: Grundlagen der Media Queries](/de/docs/Learn_web_development/Core/CSS_layout/Media_queries)
  - : Einführung in Media Queries und Ansätze, um mit diesen responsive Designs zu erstellen.

- [Media Queries testen](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
  - : Beschreibt, wie Media Queries in JavaScript-Code verwendet werden können, um den Status eines Geräts zu bestimmen und Listener einzurichten, die Ihren Code benachrichtigen, wenn sich die Ergebnisse von Media Queries ändern (z.B. wenn der Benutzer den Bildschirm dreht oder den Browser vergrößert).

- [Verwendung von Media Queries für Zugänglichkeit](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries_for_accessibility)
  - : Lernen Sie, wie Media Queries den Benutzern helfen können, Ihre Website besser zu verstehen.

- [Drucken](/de/docs/Web/CSS/CSS_media_queries/Printing)
  - : Tipps und Techniken zur Verbesserung der Druckausgabe von Webinhalten.

- [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
  - : Lernen Sie, wie Media Queries zusammen mit `sizes` für responsive Bildlösungen auf Webseiten eingesetzt werden können.

## Verwandte Konzepte

- [CSS Containment](/de/docs/Web/CSS/CSS_containment) Modul
  - {{cssxref("@container")}} At-Regel
  - [Verwendung von Container Queries](/de/docs/Web/CSS/CSS_containment/Container_queries)
  - [Verwendung von Größen- und Stil-Container-Queries](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [CSS Bedingte Regeln](/de/docs/Web/CSS/CSS_conditional_rules) Modul
  - {{cssxref("@supports")}} At-Regel
  - [Verwendung von Feature-Queries](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [CSS Umgebungsvariablen](/de/docs/Web/CSS/CSS_environment_variables)
  - {{cssxref("env()")}} Funktion
- [CSS Seitenmedien](/de/docs/Web/CSS/CSS_paged_media) Modul
  - {{cssxref("@page")}} At-Regel
- [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model) Modul
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
  - `sizes` Attribut für [`<img>`](/de/docs/Web/HTML/Reference/Elements/img#sizes), [`<link>`](/de/docs/Web/HTML/Reference/Elements/link#sizes), und [`<source>`](/de/docs/Web/HTML/Reference/Elements/source#sizes) für {{HTMLElement("picture")}}
  - `media` Attribut für [`<link>`](/de/docs/Web/HTML/Reference/Elements/link#media), [`<source>`](/de/docs/Web/HTML/Reference/Elements/source#media), und [`<style>`](/de/docs/Web/HTML/Reference/Elements/style#media) [HTML](/de/docs/Web/HTML)
  - [`<meta name="viewport">`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport)
- SVG [`media`](/de/docs/Web/SVG/Reference/Attribute/media) Attribut

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Container Queries](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung der `srcset` und `sizes` Attribute](/de/docs/Web/HTML/Reference/Elements/img#using_the_srcset_and_sizes_attributes)
- [CSS Seitenmedien](/de/docs/Web/CSS/CSS_paged_media)
- Verwenden Sie {{cssxref("@supports")}}, um Stile anzuwenden, die von der Unterstützung verschiedener CSS-Technologien durch den Browser abhängen.
