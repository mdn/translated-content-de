---
title: CSS-Media-Queries
slug: Web/CSS/CSS_media_queries
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Das **CSS-Media-Queries**-Modul ermöglicht das Testen und Abfragen von Viewport-Werten sowie von Browser- oder Geräteeigenschaften, um CSS-Stile abhängig von der aktuellen Benutzerumgebung bedingt anzuwenden. Media-Queries werden in der CSS-`@media`-Regel sowie in anderen Kontexten und Sprachen wie HTML und JavaScript verwendet.

Media-Queries sind ein Schlüsselaspekt des [responsive Designs](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design). Sie gestatten die bedingte Festlegung von CSS-Stilen in Abhängigkeit von der Präsenz oder dem Wert von Geräteeigenschaften. Häufig wird eine Media-Query basierend auf der {{Glossary("viewport", "Viewport")}}-Größe verwendet, um ein passendes Layout für Geräte mit unterschiedlichen Bildschirmgrößen festzulegen – beispielsweise drei Spalten auf einem breiten Bildschirm oder eine Spalte auf einem schmalen Bildschirm.

Weitere häufige Beispiele sind die Erhöhung der Schriftgröße und das Ausblenden von Navigationsmenüs beim Drucken einer Seite, das Anpassen der Abstände zwischen Absätzen, wenn eine Seite im Hoch- oder Querformat angesehen wird, oder das Vergrößern von Schaltflächen, um auf Touchscreens größere Trefferflächen bereitzustellen.

In [CSS](/de/docs/Web/CSS) verwenden Sie die {{cssxref("@media")}}-[At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule), um Teile eines Stylesheets basierend auf dem Ergebnis einer Media-Query bedingt anzuwenden. Um ein ganzes Stylesheet bedingt anzuwenden, verwenden Sie {{cssxref("@import")}}.

Beim Entwerfen wiederverwendbarer HTML-Komponenten können Sie auch [Container-Queries](/de/docs/Web/CSS/CSS_containment/Container_queries) verwenden, die es Ihnen ermöglichen, Stile basierend auf der Größe eines enthaltenen Elements anzuwenden, anstatt auf den Viewport oder andere Geräteeigenschaften.

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
> CSS-Media-Queries-Level 5 führt fünf `@media`-Deskriptoren ein, die nicht implementiert wurden: {{cssxref("@media/environment-blending", "environment-blending")}}, {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}}, {{cssxref("@media/nav-controls", "nav-controls")}}, {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}} und {{cssxref("@media/video-color-gamut", "video-color-gamut")}}.

> [!NOTE]
> CSS-Media-Queries-Level 4 hat drei `@media`-Deskriptoren veraltet erklärt: {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}, {{cssxref("@media/device-height", "device-height")}} und {{cssxref("@media/device-width", "device-width")}}.

### Datentypen und Operatoren

- [`<media-types>`](/de/docs/Web/CSS/@media#media_types)
- [`<media-features>`](/de/docs/Web/CSS/@media#media_features)
- [`<resolution>`](/de/docs/Web/CSS/resolution)
- [Logische Operatoren](/de/docs/Web/CSS/@media#logical_operators)

### Glossarbegriffe

- {{Glossary("Media/CSS", "Media")}}
- {{Glossary("Media_query", "Media-Query")}}

## Leitfäden

- [Verwendung von Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)

  - : Einführung in Media-Queries, ihre Syntax sowie die Operatoren und Media-Features, die zur Konstruktion von Media-Query-Ausdrücken verwendet werden.

- [Lernen: Grundlagen zu Media-Queries](/de/docs/Learn_web_development/Core/CSS_layout/Media_queries)

  - : Einführung in Media-Queries und Ansätze, sie zur Erstellung von responsiven Designs zu nutzen.

- [Media-Queries testen](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)

  - : Beschreibt, wie Media-Queries in JavaScript-Code verwendet werden können, um den Status eines Geräts zu bestimmen, und wie Listener eingerichtet werden, die den Code benachrichtigen, wenn sich die Ergebnisse von Media-Queries ändern (z. B. wenn der Bildschirm gedreht oder das Browserfenster geändert wird).

- [Verwendung von Media-Queries für Barrierefreiheit](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries_for_accessibility)

  - : Lernen Sie, wie Media-Queries den Nutzern helfen können, Ihre Website besser zu verstehen.

- [Drucken](/de/docs/Web/CSS/CSS_media_queries/Printing)

  - : Tipps und Techniken, um die Druckausgabe von Webinhalten zu verbessern.

- [Responsive Bilder](/de/docs/Web/HTML/Responsive_images)

  - : Lernen Sie, wie Media-Queries mit `sizes` verwendet werden können, um responsive Bildlösungen auf Websites zu implementieren.

## Verwandte Konzepte

- [CSS-Containment](/de/docs/Web/CSS/CSS_containment)-Modul
  - {{cssxref("@container")}}-Regel
  - [Verwendung von Container-Queries](/de/docs/Web/CSS/CSS_containment/Container_queries)
  - [Verwendung von Größen- und Stil-Container-Queries](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [CSS-Bedingungsregeln](/de/docs/Web/CSS/CSS_conditional_rules)-Modul
  - {{cssxref("@supports")}}-Regel
  - [Verwendung von Feature-Queries](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [CSS-Paged-Media](/de/docs/Web/CSS/CSS_paged_media)-Modul
  - {{cssxref("@page")}}-Regel
- [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model)-Modul
  - [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Schnittstelle
    - [`matches`](/de/docs/Web/API/MediaQueryList/matches)-Eigenschaft
    - [`media`](/de/docs/Web/API/MediaQueryList/media)-Eigenschaft
    - [`change`](/de/docs/Web/API/MediaQueryList/change_event)-Ereignis
  - [`MediaList`](/de/docs/Web/API/MediaList)-Schnittstelle
    - [`mediaText`](/de/docs/Web/API/MediaList/mediaText)-Eigenschaft
  - [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)-Objekt
- [Device-Posture-API](/de/docs/Web/API/Device_Posture_API)
  - {{cssxref("@media/device-posture", "device-posture")}}-Deskriptor
- HTML
  - `sizes`-Attribut für [`<img>`](/de/docs/Web/HTML/Element/img#sizes), [`<link>`](/de/docs/Web/HTML/Element/link#sizes) und [`<source>`](/de/docs/Web/HTML/Element/source#sizes) für {{HTMLElement("picture")}}
  - `media`-Attribut für [`<link>`](/de/docs/Web/HTML/Element/link#media), [`<source>`](/de/docs/Web/HTML/Element/source#media) und [`<style>`](/de/docs/Web/HTML/Element/style#media) [HTML](/de/docs/Web/HTML)
  - [Viewport-`<meta>`-Tag](/de/docs/Web/HTML/Viewport_meta_tag)
- SVG-[`media`](/de/docs/Web/SVG/Attribute/media)-Attribut

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Container-Queries](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung der `srcset`- und `sizes`-Attribute](/de/docs/Web/HTML/Element/img#using_the_srcset_and_sizes_attributes)
- [CSS-Paged-Media](/de/docs/Web/CSS/CSS_paged_media)
- Verwendung von {{cssxref("@supports")}}, um Stile anzuwenden, die von der Browserunterstützung verschiedener CSS-Technologien abhängen.
