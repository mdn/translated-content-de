---
title: CSS-Media-Queries
slug: Web/CSS/CSS_media_queries
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{CSSRef}}

Das Modul der **CSS-Media-Queries** ermöglicht das Testen und Abfragen von Viewport-Werten sowie von Browser- oder Geräteeigenschaften, um CSS-Stile bedingt basierend auf der aktuellen Benutzerumgebung anzuwenden. Media Queries werden in der CSS-`@media`-Regel und in anderen Kontexten und Sprachen wie HTML und JavaScript verwendet.

Media Queries sind ein wesentlicher Bestandteil des [responsiven Designs](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design). Sie ermöglichen es, CSS-Stile bedingt abhängig von der Anwesenheit oder dem Wert von Geräteeigenschaften zu setzen. Es ist üblich, eine Media Query basierend auf der {{Glossary("viewport", "Viewport")}}-Größe zu verwenden, um auf Geräten mit unterschiedlichen Bildschirmgrößen geeignete Layouts festzulegen - zum Beispiel drei Spalten auf einem breiten Bildschirm oder eine einzelne Spalte auf einem schmalen Bildschirm.

Andere gängige Beispiele umfassen das Erhöhen der Schriftgröße und das Verbergen von Navigationsmenüs beim Drucken einer Seite, das Anpassen des Abstands zwischen Absätzen, wenn eine Seite im Hoch- oder Querformat angezeigt wird, oder das Erhöhen der Größe von Schaltflächen, um auf Touchscreens einen größeren Trefferbereich zu bieten.

In [CSS](/de/docs/Web/CSS) verwenden Sie die {{cssxref("@media")}}-[Regel](/de/docs/Web/CSS/CSS_syntax/At-rule), um bedingt einen Teil eines Stylesheets basierend auf dem Ergebnis einer Media Query anzuwenden. Um bedingt ein gesamtes Stylesheet anzuwenden, verwenden Sie {{cssxref("@import")}}.

Beim Entwerfen von wiederverwendbaren HTML-Komponenten können Sie auch [Container-Queries](/de/docs/Web/CSS/CSS_containment/Container_queries) verwenden, die es Ihnen ermöglichen, Stile basierend auf der Größe eines enthaltenen Elements und nicht auf dem Viewport oder anderen Geräteeigenschaften anzuwenden.

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
> CSS Media Queries Level 5 führt fünf `@media`-Deskriptoren ein, die nicht implementiert wurden: {{cssxref("@media/environment-blending", "environment-blending")}}, {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}}, {{cssxref("@media/nav-controls", "nav-controls")}}, {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}}, und {{cssxref("@media/video-color-gamut", "video-color-gamut")}}.

> [!NOTE]
> CSS Media Queries Level 4 hat drei `@media`-Deskriptoren veraltet: {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}, {{cssxref("@media/device-height", "device-height")}}, und {{cssxref("@media/device-width", "device-width")}}.

### Datentypen und Operatoren

- [`<media-types>`](/de/docs/Web/CSS/@media#media_types)
- [`<media-features>`](/de/docs/Web/CSS/@media#media_features)
- [`<resolution>`](/de/docs/Web/CSS/resolution)
- [Logische Operatoren](/de/docs/Web/CSS/@media#logical_operators)

### Glossarbegriffe

- {{Glossary("Media/CSS", "Media")}}
- {{Glossary("Media_query", "Media Query")}}

## Leitfäden

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)

  - : Einführung in Media Queries, deren Syntax sowie die Operatoren und Medieneigenschaften, die zum Erstellen von Media Query-Ausdrücken verwendet werden.

- [Lernen: Grundlagen der Media Queries](/de/docs/Learn_web_development/Core/CSS_layout/Media_queries)

  - : Einführung in Media Queries und Ansätze, um mit ihnen responsive Designs zu erstellen.

- [Medienabfragen testen](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)

  - : Beschreibt, wie Sie Media Queries in Ihrem JavaScript-Code verwenden, um den Zustand eines Geräts zu bestimmen und Listener einzurichten, die Ihren Code benachrichtigen, wenn sich die Ergebnisse von Media Queries ändern (z. B. wenn der Benutzer den Bildschirm dreht oder den Browser verkleinert).

- [Media Queries für Barrierefreiheit verwenden](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries_for_accessibility)

  - : Lernen Sie, wie Media Queries Benutzern helfen können, Ihre Website besser zu verstehen.

- [Drucken](/de/docs/Web/CSS/CSS_media_queries/Printing)

  - : Tipps und Techniken zur Verbesserung der Druckerausgabe von Webinhalten.

- [Responsive Bilder](/de/docs/Web/HTML/Responsive_images)

  - : Lernen Sie, wie Sie Media Queries mit `sizes` verwenden, um responsive Bildlösungen auf Websites zu implementieren.

## Verwandte Konzepte

- [CSS Containment](/de/docs/Web/CSS/CSS_containment) Modul
  - {{cssxref("@container")}} Regel
  - [Verwendung von Container Queries](/de/docs/Web/CSS/CSS_containment/Container_queries)
  - [Verwendung von Größen- und Stil-Container-Queries](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [CSS Bedingte Regeln](/de/docs/Web/CSS/CSS_conditional_rules) Modul
  - {{cssxref("@supports")}} Regel
  - [Verwendung von Feature Queries](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [CSS Seitenbasierte Medien](/de/docs/Web/CSS/CSS_paged_media) Modul
  - {{cssxref("@page")}} Regel
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
  - [Viewport-`<meta>`-Tag](/de/docs/Web/HTML/Viewport_meta_tag)
- SVG [`media`](/de/docs/Web/SVG/Reference/Attribute/media) Attribut

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Container Queries](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung der `srcset` und `sizes` Attribute](/de/docs/Web/HTML/Element/img#using_the_srcset_and_sizes_attributes)
- [CSS Seitenbasierte Medien](/de/docs/Web/CSS/CSS_paged_media)
- Verwenden Sie {{cssxref("@supports")}}, um Stile anzuwenden, die von der Browserunterstützung für verschiedene CSS-Technologien abhängen.
