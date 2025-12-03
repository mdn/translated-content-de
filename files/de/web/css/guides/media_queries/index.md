---
title: CSS Media Queries
short-title: Media Queries
slug: Web/CSS/Guides/Media_queries
l10n:
  sourceCommit: 3ee2355c3c90cf92c3119b82f8ebfa5d16c91c53
---

Das **CSS Media Queries**-Modul ermöglicht das Testen und Abfragen von Viewport-Werten sowie Browser- oder Geräteeigenschaften, um CSS-Stile bedingt basierend auf dem aktuellen Benutzerumfeld anzuwenden. Media Queries werden in der CSS-`@media`-Regel und anderen Kontexten und Sprachen wie HTML und JavaScript verwendet.

Media Queries sind ein wesentlicher Bestandteil des [Responsive Designs](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design). Sie ermöglichen die bedingte Anwendung von CSS-Stilen abhängig von der Präsenz oder dem Wert von Geräteeigenschaften. Es ist üblich, eine Media Query basierend auf der {{Glossary("viewport", "Viewport")}}-Größe zu verwenden, um auf Geräten mit unterschiedlichen Bildschirmgrößen geeignete Layouts festzulegen – zum Beispiel drei Spalten auf einem breiten Bildschirm oder eine einzige Spalte auf einem schmalen Bildschirm.

Weitere gängige Beispiele umfassen die Erhöhung der Schriftgröße und das Ausblenden von Navigationsmenüs beim Drucken einer Seite, das Anpassen des Abstands zwischen Absätzen, wenn eine Seite im Hoch- oder Querformat angezeigt wird, oder das Vergrößern von Schaltflächen, um eine größere Trefffläche auf Touchscreens bereitzustellen.

In [CSS](/de/docs/Web/CSS) verwenden Sie die {{cssxref("@media")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules), um bedingt einen Teil eines Stylesheets basierend auf dem Ergebnis einer Media Query anzuwenden. Um bedingt ein komplettes Stylesheet anzuwenden, verwenden Sie {{cssxref("@import")}}.

Beim Entwerfen wiederverwendbarer HTML-Komponenten können Sie auch [Container Queries](/de/docs/Web/CSS/Guides/Containment/Container_queries) verwenden, die es ermöglichen, Stile basierend auf der Größe eines enthaltenen Elements anstelle des Viewports oder anderer Geräteeigenschaften anzuwenden.

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

Das CSS Media Queries Level 5 Modul führt auch die `environment-blending`, `nav-controls` und `video-color-gamut` `@media`-Deskriptoren ein. Derzeit unterstützt kein Browser diese Funktionen.

> [!NOTE]
> CSS Media Queries Level 4 hat drei `@media`-Deskriptoren veraltet: {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}, {{cssxref("@media/device-height", "device-height")}}, und {{cssxref("@media/device-width", "device-width")}}.

### Datentypen und Operatoren

- [`<media-types>`](/de/docs/Web/CSS/Reference/At-rules/@media#media_types)
- [`<media-features>`](/de/docs/Web/CSS/Reference/At-rules/@media#media_features)
- [`<resolution>`](/de/docs/Web/CSS/Reference/Values/resolution)
- [Logische Operatoren](/de/docs/Web/CSS/Reference/At-rules/@media#logical_operators)

### Glossarbegriffe

- {{Glossary("Media/CSS", "media")}}
- {{Glossary("Media_query", "media query")}}

## Leitfaden

- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
  - : Einführung in Media Queries, ihre Syntax und die Operatoren und Medienfunktionen, die verwendet werden, um Media Query-Ausdrücke zu konstruieren.

- [Lernen: Grundlagen der Media Query](/de/docs/Learn_web_development/Core/CSS_layout/Media_queries)
  - : Einführung in Media Queries und Ansätze zu ihrer Verwendung für die Erstellung von Responsive Designs.

- [Testen von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Testing)
  - : Beschreibt, wie Media Queries in Ihrem JavaScript-Code verwendet werden können, um den Zustand eines Geräts zu bestimmen, und wie Listener eingerichtet werden, die Ihren Code benachrichtigen, wenn sich die Ergebnisse von Media Queries ändern (z. B. wenn der Benutzer den Bildschirm dreht oder den Browser in der Größe ändert).

- [Verwendung von Media Queries für Barrierefreiheit](/de/docs/Web/CSS/Guides/Media_queries/Using_for_accessibility)
  - : Lernen Sie, wie Media Queries Benutzern helfen können, Ihre Webseite besser zu verstehen.

- [Drucken](/de/docs/Web/CSS/Guides/Media_queries/Printing)
  - : Tipps und Techniken zur Verbesserung der Druckausgabe von Webinhalten.

- [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
  - : Lernen Sie, wie Sie Media Queries mit `sizes` verwenden, um auf Websites responsive Bildlösungen zu implementieren.

## Verwandte Konzepte

- [CSS Containment](/de/docs/Web/CSS/Guides/Containment) Modul
  - {{cssxref("@container")}} At-Regel
  - [Verwendung von Container Queries](/de/docs/Web/CSS/Guides/Containment/Container_queries)
  - [Verwendung von Größen- und Stil-Container Queries](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [CSS Conditional Rules](/de/docs/Web/CSS/Guides/Conditional_rules) Modul
  - {{cssxref("@supports")}} At-Regel
  - [Verwendung von Feature Queries](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
- [CSS Environment Variablen](/de/docs/Web/CSS/Guides/Environment_variables)
  - {{cssxref("env()")}} Funktion
- [CSS Paged Media](/de/docs/Web/CSS/Guides/Paged_media) Modul
  - {{cssxref("@page")}} At-Regel
- [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) Modul
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

- [Container Queries](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Verwenden der `srcset` und `sizes` Attribute](/de/docs/Web/HTML/Reference/Elements/img#using_the_srcset_and_sizes_attributes)
- [CSS Paged Media](/de/docs/Web/CSS/Guides/Paged_media)
- Verwenden Sie {{cssxref("@supports")}}, um Stile anzuwenden, die von der Unterstützung des Browsers für verschiedene CSS-Technologien abhängen.
