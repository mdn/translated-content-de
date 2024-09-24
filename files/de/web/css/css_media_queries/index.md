---
title: CSS-Medienabfragen
slug: Web/CSS/CSS_media_queries
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Das **Modul für CSS-Medienabfragen** ermöglicht das Testen und Abfragen von Viewport-Werten sowie Browser- oder Geräteeigenschaften, um CSS-Stile basierend auf der aktuellen Benutzerumgebung bedingt anzuwenden. Medienabfragen werden in der CSS-`@media`-Regel und anderen Kontexten und Sprachen wie HTML und JavaScript verwendet.

Medienabfragen sind ein wesentlicher Bestandteil des [Responsive Designs](/de/docs/Learn/CSS/CSS_layout/Responsive_Design). Sie ermöglichen das bedingte Festlegen von CSS-Stilen in Abhängigkeit von Merkmalen des Geräts. Es ist üblich, eine Medienabfrage basierend auf der Größe des {{Glossary("viewport")}} zu verwenden, um geeignete Layouts auf Geräten mit unterschiedlichen Bildschirmgrößen festzulegen – beispielsweise drei Spalten auf einem großen Bildschirm oder eine einzelne Spalte auf einem schmalen Bildschirm.

Andere häufige Beispiele umfassen das Erhöhen der Schriftgröße und das Ausblenden von Navigationsmenüs beim Drucken einer Seite, das Anpassen des Abstands zwischen Absätzen, wenn eine Seite im Hoch- oder Querformat angezeigt wird, oder das Vergrößern von Schaltflächen, um eine größere Trefferfläche auf Touchscreens zu bieten.

In [CSS](/de/docs/Web/CSS) verwenden Sie die {{cssxref("@media")}} [Regel](/de/docs/Web/CSS/At-rule) um einen Teil eines Stylesheets abhängig vom Ergebnis einer Medienabfrage bedingt anzuwenden. Um ein gesamtes Stylesheet bedingt anzuwenden, verwenden Sie {{cssxref("@import")}}.

Beim Entwerfen wiederverwendbarer HTML-Komponenten können Sie auch [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) verwenden, die es ermöglichen, Stile basierend auf der Größe eines umgebenden Elements und nicht des Viewports oder anderer Geräteeigenschaften anzuwenden.

## Referenz

### Regeln

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
> CSS-Medienabfragen Level 5 führt fünf `@media`-Deskriptoren ein, die noch nicht implementiert wurden: {{cssxref("@media/environment-blending", "environment-blending")}}, {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}}, {{cssxref("@media/nav-controls", "nav-controls")}}, {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}} und {{cssxref("@media/video-color-gamut", "video-color-gamut")}}

> [!NOTE]
> CSS-Medienabfragen Level 4 hat drei `@media`-Deskriptoren veraltet: {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}, {{cssxref("@media/device-height", "device-height")}} und {{cssxref("@media/device-width", "device-width")}}.

### Datentypen und Operatoren

- [`<media-types>`](/de/docs/Web/CSS/@media#media_types)
- [`<media-features>`](/de/docs/Web/CSS/@media#media_features)
- [`<resolution>`](/de/docs/Web/CSS/resolution)
- [Logische Operatoren](/de/docs/Web/CSS/@media#logical_operators)

### Glossarbegriffe

- [media](/de/docs/Glossary/Media/CSS)
- [media query](/de/docs/Glossary/Media_query)

## Anleitungen

- [Verwendung von Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)

  - : Einführung in Medienabfragen, ihre Syntax sowie Operatoren und Medienmerkmale, die zur Konstruktion von Medienabfrage-Ausdrücken verwendet werden.

- [Anfängereinführung in Medienabfragen](/de/docs/Learn/CSS/CSS_layout/Media_queries)

  - : Einführung in Medienabfragen und Ansätze zur Verwendung derselben, um responsive Designs zu erstellen.

- [Testen von Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)

  - : Beschreibt, wie Medienabfragen im JavaScript-Code verwendet werden, um den Status eines Geräts zu bestimmen und Listener einzurichten, die Ihren Code benachrichtigen, wenn sich die Ergebnisse von Medienabfragen ändern (z. B. wenn der Benutzer den Bildschirm dreht oder den Browser verkleinert).

- [Verwendung von Medienabfragen für Barrierefreiheit](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries_for_accessibility)

  - : Erfahren Sie, wie Medienabfragen Benutzern helfen können, Ihre Website besser zu verstehen.

- [Drucken](/de/docs/Web/CSS/CSS_media_queries/Printing)

  - : Tipps und Techniken zur Verbesserung der Druckausgabe von Webinhalten.

- [Lernen: responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

  - : Lernen Sie, wie Sie Medienabfragen mit `sizes` verwenden, um responsive Bildlösungen auf Websites zu implementieren.

## Verwandte Konzepte

- [CSS-Einschluss](/de/docs/Web/CSS/CSS_containment) Modul
  - {{cssxref("@container")}} At-Regel
  - [Verwendung von Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
  - [Verwendung von Größen- und Stil-Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [CSS-Bedingungsregeln](/de/docs/Web/CSS/CSS_conditional_rules) Modul
  - {{cssxref("@supports")}} At-Regel
  - [Verwendung von Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [CSS-Paged-Media](/de/docs/Web/CSS/CSS_paged_media) Modul
  - {{cssxref("@page")}} At-Regel
- [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model) Modul
  - {{DOMxRef("MediaQueryList")}} Schnittstelle
    - {{DOMxRef("MediaQueryList.matches", "matches")}} Eigenschaft
    - {{DOMxRef("MediaQueryList.media", "media")}} Eigenschaft
    - {{DOMxRef("MediaQueryList.change_event", "change")}} Ereignis
  - {{DOMxRef("MediaList")}} Schnittstelle
    - {{DOMxRef("MediaList.mediaText", "mediaText")}} Eigenschaft
  - {{DOMxRef("MediaQueryListEvent")}} Objekt
- HTML
  - `sizes` Attribut für [`<img>`](/de/docs/Web/HTML/Element/img#sizes), [`<link>`](/de/docs/Web/HTML/Element/link#sizes), und [`<source>`](/de/docs/Web/HTML/Element/source#sizes) für {{HTMLElement("picture")}}
  - `media` Attribut für [`<link>`](/de/docs/Web/HTML/Element/link#media), [`<source>`](/de/docs/Web/HTML/Element/source#media), und [`<style>`](/de/docs/Web/HTML/Element/style#media) [HTML](/de/docs/Web/HTML)
  - [Viewport-`<meta>`-Tag](/de/docs/Web/HTML/Viewport_meta_tag)
- SVG [`media`](/de/docs/Web/SVG/Attribute/media) Attribut

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung der `srcset`- und `sizes`-Attribute](/de/docs/Web/HTML/Element/img#using_the_srcset_and_sizes_attributes)
- [CSS-Paged-Media](/de/docs/Web/CSS/CSS_paged_media)
- Verwenden Sie {{cssxref("@supports")}}, um Stile anzuwenden, die von der Browserunterstützung für verschiedene CSS-Technologien abhängen.
