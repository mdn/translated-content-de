---
title: CSS-Mediaqueries
short-title: Media queries
slug: Web/CSS/Guides/Media_queries
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Das Modul **CSS-Mediaqueries** ermöglicht das Testen und Abfragen von Viewport-Werten und Browser- oder Gerätefunktionen, um bedingt CSS-Stile basierend auf der aktuellen Benutzerumgebung anzuwenden. Mediaqueries werden in der CSS-`@media`-Regel und anderen Kontexten und Sprachen wie HTML und JavaScript verwendet.

Mediaqueries sind ein wesentlicher Bestandteil des [Responsive Designs](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design). Sie erlauben es, CSS-Stile je nach Vorhandensein oder Wert von Gerätemerkmalen bedingt festzulegen. Es ist üblich, eine Mediaquery basierend auf der {{Glossary("viewport", "Viewport")}}-Größe zu verwenden, um entsprechende Layouts auf Geräten mit unterschiedlichen Bildschirmgrößen einzurichten – zum Beispiel drei Spalten auf einem Breitbildschirm oder eine einzelne Spalte auf einem schmalen Bildschirm.

Weitere häufige Beispiele sind die Vergrößerung der Schriftgröße und das Ausblenden von Navigationsmenüs beim Drucken einer Seite, das Anpassen des Abstands zwischen Absätzen, wenn eine Seite im Hoch- oder Querformat angezeigt wird, oder das Vergrößern von Schaltflächen, um eine größere Trefferfläche auf Touchscreens zu bieten.

In [CSS](/de/docs/Web/CSS) verwenden Sie die {{cssxref("@media")}} [At-rule](/de/docs/Web/CSS/Guides/Syntax/At-rules), um bedingt einen Teil eines Stylesheets basierend auf dem Ergebnis einer Mediaquery anzuwenden. Um bedingt ein ganzes Stylesheet anzuwenden, verwenden Sie {{cssxref("@import")}}.

Beim Entwerfen wiederverwendbarer HTML-Komponenten können Sie auch [Container-Queries](/de/docs/Web/CSS/Guides/Containment/Container_queries) verwenden, die es Ihnen ermöglichen, Stile basierend auf der Größe eines enthaltenen Elements anstatt auf dem Viewport oder anderen Gerätemerkmalen anzuwenden.

## Referenz

### At-Regeln und Deskriptoren

- {{cssxref("@import")}}
- {{cssxref("@custom-media")}}
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

Das CSS-Mediaqueries Level 5 Modul führt auch die Deskriptoren `environment-blending`, `nav-controls` und `video-color-gamut` für `@media` ein. Derzeit unterstützt kein Browser diese Funktionen.

> [!NOTE]
> CSS-Mediaqueries Level 4 hat drei `@media` Deskriptoren veraltet: {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}, {{cssxref("@media/device-height", "device-height")}}, und {{cssxref("@media/device-width", "device-width")}}.

### Datentypen und Operatoren

- [`<media-types>`](/de/docs/Web/CSS/Reference/At-rules/@media#media_types)
- [`<media-features>`](/de/docs/Web/CSS/Reference/At-rules/@media#media_features)
- {{cssxref("resolution")}}
- [Logische Operatoren](/de/docs/Web/CSS/Reference/At-rules/@media#logical_operators)

### Glossarbegriffe

- {{Glossary("Media/CSS", "media")}}
- {{Glossary("Media_query", "media query")}}

## Leitfäden

- [Verwendung von Mediaqueries](/de/docs/Web/CSS/Guides/Media_queries/Using)
  - : Einführung in Mediaqueries, ihre Syntax sowie die Operatoren und Media-Features, die zur Konstruktion von Mediaquery-Ausdrücken verwendet werden.

- [Lernen: Grundlagen der Mediaqueries](/de/docs/Learn_web_development/Core/CSS_layout/Media_queries)
  - : Einführung in Mediaqueries und Ansätze zur Verwendung derselben für die Erstellung von responsiven Designs.

- [Testen von Mediaqueries](/de/docs/Web/CSS/Guides/Media_queries/Testing)
  - : Beschreibt, wie Medienabfragen im JavaScript-Code verwendet werden können, um den Zustand eines Geräts zu bestimmen, und wie Listener eingerichtet werden, die Ihren Code benachrichtigen, wenn sich die Ergebnisse von Medienabfragen ändern (zum Beispiel, wenn der Benutzer den Bildschirm dreht oder den Browser vergrößert).

- [Verwendung von Mediaqueries für Barrierefreiheit](/de/docs/Web/CSS/Guides/Media_queries/Using_for_accessibility)
  - : Lernen Sie, wie Mediaqueries den Benutzern helfen können, Ihre Website besser zu verstehen.

- [Drucken](/de/docs/Web/CSS/Guides/Media_queries/Printing)
  - : Tipps und Techniken zur Verbesserung der Druckerausgabe von Webinhalten.

- [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
  - : Lernen Sie, wie man Mediaqueries mit `sizes` verwendet, um responsive Bildlösungen auf Websites zu implementieren.

## Verwandte Konzepte

- [CSS-Containment](/de/docs/Web/CSS/Guides/Containment) Modul
  - {{cssxref("@container")}} At-rule
  - [Verwendung von Container-Queries](/de/docs/Web/CSS/Guides/Containment/Container_queries)
  - [Verwendung von Größen- und Stil-Container-Queries](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [CSS-Bedingungsregeln](/de/docs/Web/CSS/Guides/Conditional_rules) Modul
  - {{cssxref("@supports")}} At-rule
  - [Verwendung von Feature-Queries](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
- [CSS-Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables)
  - {{cssxref("env()")}} Funktion
- [CSS-gedruckte Medien](/de/docs/Web/CSS/Guides/Paged_media) Modul
  - {{cssxref("@page")}} At-rule
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
  - `sizes` Attribut für [`<img>`](/de/docs/Web/HTML/Reference/Elements/img#sizes), [`<link>`](/de/docs/Web/HTML/Reference/Elements/link#sizes) und [`<source>`](/de/docs/Web/HTML/Reference/Elements/source#sizes) für {{HTMLElement("picture")}}
  - `media` Attribut für [`<link>`](/de/docs/Web/HTML/Reference/Elements/link#media), [`<source>`](/de/docs/Web/HTML/Reference/Elements/source#media) und [`<style>`](/de/docs/Web/HTML/Reference/Elements/style#media) [HTML](/de/docs/Web/HTML)
  - [`<meta name="viewport">`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport)
- SVG [`media`](/de/docs/Web/SVG/Reference/Attribute/media) Attribut

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Container-Queries](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Verwendung der `srcset`- und `sizes`-Attribute](/de/docs/Web/HTML/Reference/Elements/img#using_the_srcset_and_sizes_attributes)
- [CSS-gedruckte Medien](/de/docs/Web/CSS/Guides/Paged_media)
- Verwenden Sie {{cssxref("@supports")}}, um Stile anzuwenden, die von der Browserunterstützung für verschiedene CSS-Technologien abhängen.
