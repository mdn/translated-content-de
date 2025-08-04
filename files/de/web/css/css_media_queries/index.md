---
title: CSS Media Queries
slug: Web/CSS/CSS_media_queries
l10n:
  sourceCommit: bc761c19c07b875eb889d4aad87b18d8443da339
---

Das **CSS Media Queries**-Modul ermöglicht das Testen und Abfragen von Ansichtsfensterwerten sowie von Browser- oder Gerätemerkmalen, um CSS-Stile bedingt basierend auf der aktuellen Benutzerumgebung anzuwenden. Media Queries werden in der CSS-`@media`-Regel und in anderen Kontexten und Sprachen wie HTML und JavaScript verwendet.

Media Queries sind ein zentraler Bestandteil des [responsiven Designs](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design). Sie ermöglichen die bedingte Einstellung von CSS-Stilen abhängig von vorhandenen oder definierten Gerätecharakteristiken. Es ist üblich, ein Media Query basierend auf der {{Glossary("viewport", "Viewport")}}-Größe zu verwenden, um auf Geräten mit unterschiedlichen Bildschirmgrößen geeignete Layouts festzulegen — zum Beispiel drei Spalten auf einem breiten Bildschirm oder eine einzelne Spalte auf einem schmalen Bildschirm.

Weitere typische Beispiele sind das Erhöhen der Schriftgröße und das Ausblenden von Navigationsmenüs beim Drucken einer Seite, das Anpassen des Abstands zwischen Absätzen, wenn eine Seite im Hoch- oder Querformat betrachtet wird, oder das Vergrößern von Schaltflächen, um eine größere Trefferfläche auf Touchscreens bereitzustellen.

In [CSS](/de/docs/Web/CSS) verwenden Sie die {{cssxref("@media")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule), um Teile eines Stylesheets bedingt zu verwenden, basierend auf dem Ergebnis einer Media Query. Um ein ganzes Stylesheet bedingt anzuwenden, verwenden Sie {{cssxref("@import")}}.

Beim Entwerfen von wiederverwendbaren HTML-Komponenten können Sie auch [Container Queries](/de/docs/Web/CSS/CSS_containment/Container_queries) verwenden, die es ermöglichen, Stile basierend auf der Größe eines enthaltenen Elements und nicht auf dem Viewport oder anderen Gerätemerkmalen anzuwenden.

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

Das CSS Media Queries Level 5 Modul führt auch die `environment-blending`, `horizontal-viewport-segments`, `nav-controls`, `vertical-viewport-segments` und `video-color-gamut` `@media`-Deskriptoren ein. Aktuell unterstützen keine Browser diese Funktionen.

> [!NOTE]
> CSS Media Queries Level 4 hat drei `@media`-Deskriptoren veraltet: {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}, {{cssxref("@media/device-height", "device-height")}}, und {{cssxref("@media/device-width", "device-width")}}.

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
  - : Einführung in Media Queries, deren Syntax, sowie die Operatoren und Medienmerkmale zur Erstellung von Media Query-Ausdrücken.

- [Lernen: Grundlagen der Media Queries](/de/docs/Learn_web_development/Core/CSS_layout/Media_queries)
  - : Einführung in Media Queries und Ansätze zu ihrer Verwendung zur Erstellung von responsiven Designs.

- [Testen von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
  - : Beschreibt, wie man Media Queries im eigenen JavaScript-Code verwendet, um den Zustand eines Geräts zu bestimmen und Listener einzurichten, die den Code benachrichtigen, wenn sich die Ergebnisse von Media Queries ändern (zum Beispiel wenn der Benutzer den Bildschirm dreht oder den Browser neu dimensioniert).

- [Verwendung von Media Queries für Barrierefreiheit](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries_for_accessibility)
  - : Erfahren Sie, wie Media Queries Benutzern helfen können, Ihre Website besser zu verstehen.

- [Drucken](/de/docs/Web/CSS/CSS_media_queries/Printing)
  - : Tipps und Techniken zur Verbesserung der Druckausgabe von Webinhalten.

- [Responsiven Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
  - : Erfahren Sie, wie Media Queries mit `sizes` verwendet werden, um Lösungen für responsive Bilder auf Websites umzusetzen.

## Verwandte Konzepte

- [CSS Containment](/de/docs/Web/CSS/CSS_containment) Modul
  - {{cssxref("@container")}} At-Regel
  - [Verwendung von Container Queries](/de/docs/Web/CSS/CSS_containment/Container_queries)
  - [Verwendung von Größen- und Stil-Container-Queries](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [CSS Bedingte Regeln](/de/docs/Web/CSS/CSS_conditional_rules) Modul
  - {{cssxref("@supports")}} At-Regel
  - [Verwendung von Feature Queries](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [CSS Paged Media](/de/docs/Web/CSS/CSS_paged_media) Modul
  - {{cssxref("@page")}} At-Regel
- [CSS Objekt-Modell](/de/docs/Web/API/CSS_Object_Model) Modul
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
  - [Viewport-`<meta>`-Tag](/de/docs/Web/HTML/Guides/Viewport_meta_element)
- SVG [`media`](/de/docs/Web/SVG/Reference/Attribute/media) Attribut

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Container Queries](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung der `srcset`- und `sizes`-Attribute](/de/docs/Web/HTML/Reference/Elements/img#using_the_srcset_and_sizes_attributes)
- [CSS Paged Media](/de/docs/Web/CSS/CSS_paged_media)
- Verwenden Sie {{cssxref("@supports")}}, um Stile anzuwenden, die von der Unterstützung des Browsers für verschiedene CSS-Technologien abhängen.
