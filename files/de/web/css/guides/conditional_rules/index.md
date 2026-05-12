---
title: CSS-Bedingungsregeln
short-title: Conditional rules
slug: Web/CSS/Guides/Conditional_rules
l10n:
  sourceCommit: ddf85bfec1b6e43cdacb404de0c38a801c561640
---

Das **CSS-Bedingungsregel**-Modul definiert CSS-Media- und Supportabfragen, die es ermöglichen, Stile zu definieren, die nur angewendet werden, wenn bestimmte Bedingungen erfüllt sind. Die in diesem Modul definierten Bedingungsregeln basieren auf den Fähigkeiten des Geräts, des User-Agents und des Viewports. Mit Bedingungsregeln können Sie CSS-Stile basierend auf Abfragewerten oder Browser- und Geräteeigenschaften anvisieren, unabhängig von dem Dokument, das gerendert wird.

Die ersten CSS-Bedingungsregeln waren [Medientypen](/de/docs/Web/CSS/Reference/At-rules/@media#media_types), die das beabsichtigte Zielmedium für die verlinkten Stile spezifizierten, zum Beispiel `screen` oder `print`. Diese wurden als Wert der `media`-Attribute der HTML-{{HTMLElement("link")}}- und {{HTMLElement("style")}}-Elemente oder als kommagetrennte Liste von Medientypen innerhalb einer {{cssxref("@import")}}-Anweisung oder At-Regel festgelegt. Die Möglichkeit, CSS-Regeln bedingt anzuwenden, wurde stark erweitert seit den Implementierungen von CSS 2.1 und HTML 4.01, die bedingte Abfragen auf wenige Medientypen beschränkten.

CSS-Bedingungsregeln umfassen jetzt auch Feature-Abfragen; die `@supports`-At-Regel ermöglicht es, CSS-Stile basierend auf den CSS-Fähigkeiten eines User-Agents zu definieren. Zusätzliche Bedingungen umfassen, welche Selektoren, Schriftformate und Schrifttechnologien unterstützt werden.

Das CSS-Bedingungsregel-Modul erweitert auch `@media`, um das Schachteln von At-Regeln zu ermöglichen, wobei das zugehörige [CSS-Mediaqueries-](/de/docs/Web/CSS/Guides/Media_queries)-Modul ungenutzte Medientypen entfernt und viele Medienfunktionen und -bedingungen hinzufügt, die anvisiert werden können.

Das [CSS-Containerabfragen-Modul](/de/docs/Web/CSS/Guides/Containment/Container_queries) definiert ähnliche Bedingungsregeln, jedoch basierend auf dem Elternteil eines Elements anstelle des Viewports.

Es gibt Pläne, die möglichen Abfragen weiter zu erweitern, indem die verallgemeinerte Bedingungsregel `@when` und die verkettete Bedingungsregel `@else` hinzugefügt werden. Diese beiden At-Regeln werden derzeit noch nicht unterstützt.

## Referenz

### Eigenschaften

- {{cssxref("container")}}
- {{cssxref("container-name")}}
- {{cssxref("container-type")}}

### At-Regeln und Deskriptoren

- {{cssxref("@container")}}
  - [`aspect-ratio`](/de/docs/Web/CSS/Reference/At-rules/@container#aspect-ratio)
  - [`block-size`](/de/docs/Web/CSS/Reference/At-rules/@container#block-size)
  - [`fallback`](/de/docs/Web/CSS/Reference/At-rules/@container#fallback)
  - [`height`](/de/docs/Web/CSS/Reference/At-rules/@container#height)
  - [`inline-size`](/de/docs/Web/CSS/Reference/At-rules/@container#inline-size)
  - [`orientation`](/de/docs/Web/CSS/Reference/At-rules/@container#orientation)
  - [`scrollable`](/de/docs/Web/CSS/Reference/At-rules/@container#scrollable)
  - [`snapped`](/de/docs/Web/CSS/Reference/At-rules/@container#snapped)
  - [`stuck`](/de/docs/Web/CSS/Reference/At-rules/@container#stuck)
  - [`width`](/de/docs/Web/CSS/Reference/At-rules/@container#width)
- {{cssxref("@media")}}
- {{cssxref("@supports")}}

Das CSS-Bedingungsregel-Modul führt auch die `@else`- und `@when`-At-Regeln ein. Derzeit unterstützen keine Browser diese Funktionen.

### Funktionen

- [`anchored()`](/de/docs/Web/CSS/Reference/At-rules/@container#anchored_container_descriptors)
- [`style()`](/de/docs/Web/CSS/Reference/At-rules/@container#container_style_queries)
- [`font-tech()`](/de/docs/Web/CSS/Reference/At-rules/@supports#font-tech)
- [`font-format()`](/de/docs/Web/CSS/Reference/At-rules/@supports#font-format)
- [`scroll-state()`](/de/docs/Web/CSS/Reference/At-rules/@container#scroll-state_container_descriptors)
- [`selector()`](/de/docs/Web/CSS/Reference/At-rules/@supports#function_syntax)
- [`supports()`](/de/docs/Web/CSS/Reference/At-rules/@import#supports-condition)

Das CSS-Bedingungsregel-Modul führt auch eine `media()`-CSS-Funktion ein. Derzeit unterstützen keine Browser diese Funktion.

### Datentypen

- [`<container-name>`](/de/docs/Web/CSS/Reference/At-rules/@container#container-name)
- [`<style-feature>`](/de/docs/Web/CSS/Reference/At-rules/@container#container_style_queries)
- [Container relative `\<length>`-Einheiten](/de/docs/Web/CSS/Reference/Values/length#container_query_length_units)
- [`<media-query>`](/de/docs/Web/CSS/Guides/Media_queries/Using#syntax)
- [`<supports-condition>`](/de/docs/Web/CSS/Reference/At-rules/@import#importing_css_rules_conditional_on_feature_support)
- `<supports-feature>` (siehe [`supports()`](/de/docs/Web/CSS/Reference/At-rules/@import#supports-condition))

### Schnittstellen

- [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule)
- [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule)
- [`CSSSupportsRule`](/de/docs/Web/API/CSSSupportsRule)
- [`supports()`](/de/docs/Web/API/CSS/supports_static) Methode

### Begriffe und Glossareinträge

- {{Glossary("media/CSS", "Media")}}
- Supports Query (siehe [Feature Query](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries))

## Leitfäden

- [Verwendung von CSS-Feature-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
  - : Selektive Anwendung von CSS-Regeln nach Überprüfung der Browser-Unterstützung für die angegebenen Eigenschaften und Werte über Feature-Abfragen.

- [Verwendung von CSS-Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries/Using)
  - : Einführung in Medienabfragen, ihre Syntax, sowie die Operatoren und Medienmerkmale, die zur Konstruktion von Medienabfrageausdrücken verwendet werden.

- [Unterstützung älterer Browser: Feature-Abfragen](/de/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers#feature_queries)
  - : Wie man Feature-Abfragen verwendet, um CSS basierend auf dem Unterstützungsniveau des Browsers für Web-Funktionen auszurichten.

- [Browser-Feature-Erkennung: CSS `@supports`](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection#supports)
  - : Ein Blick auf die Erkennung von JavaScript- und CSS-Funktionen, einschließlich CSS `@supports`.

- [Verwendung von Container-Scroll-State-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
  - : Verwendung von Container-Scroll-State-Abfragen, mit einem Beispiel für jeden Typ.

## Verwandte Konzepte

- [CSS Überlagerung und Vererbung](/de/docs/Web/CSS/Guides/Cascade) Modul
  - {{cssxref("@import")}} At-Regel

- [CSS Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries) Modul
  - [`<media-feature>`](/de/docs/Web/CSS/Reference/At-rules/@media#media_features)
  - [`<media-type>`](/de/docs/Web/CSS/Reference/At-rules/@media#media_types)
  - [`<media-condition>`](/de/docs/Web/CSS/Reference/At-rules/@media#logical_operators)
  - [`<media-query-list>`](/de/docs/Web/SVG/Reference/Attribute/media)
  - [CSS-logische Operatoren](/de/docs/Web/CSS/Reference/At-rules/@media#logical_operators) (`not`, `or`, und `and`)

- [CSSOM-Ansicht](/de/docs/Web/CSS/Guides/CSSOM_view) Modul
  - [`CSS`](/de/docs/Web/API/CSS) API
  - [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) API
  - [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) API
  - [`CSSRule`](/de/docs/Web/API/CSSRule) API
  - [`MediaList`](/de/docs/Web/API/MediaList) Schnittstelle
    - [`MediaList.mediaText`](/de/docs/Web/API/MediaList/mediaText) Eigenschaft

- [CSS Syntax](/de/docs/Web/CSS/Guides/Syntax) Modul
  - {{cssxref("@charset")}} Deklaration
  - [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) Begriff
  - [`invalid`](/de/docs/Web/CSS/Guides/Syntax/Error_handling) Begriff
  - {{Glossary("parse", "parse")}} Begriff
  - [Style-Regel](/de/docs/Web/API/CSSStyleRule) Begriff

- [CSS-Namespace](/de/docs/Web/CSS/Guides/Namespaces) Modul
  - {{cssxref("@namespace")}} At-Regel

- [CSS Verankerungs-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
  - [Verwendung von Ankercontainerabfragen](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Containerabfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries) Modul
- [CSS Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries) Modul
- [CSS Überlagerung und Vererbung](/de/docs/Web/CSS/Guides/Cascade) Modul
