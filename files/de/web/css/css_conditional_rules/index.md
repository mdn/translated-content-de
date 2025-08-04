---
title: CSS-Bedingungsregeln
slug: Web/CSS/CSS_conditional_rules
l10n:
  sourceCommit: bc761c19c07b875eb889d4aad87b18d8443da339
---

Das **CSS Conditional Rules-Modul** definiert CSS-Medien- und Supportabfragen und ermöglicht Ihnen die Definition von Stilen, die nur angewendet werden, wenn bestimmte Bedingungen erfüllt sind. Die in diesem Modul definierten Bedingungsregeln basieren auf Geräte-, User-Agent- und Viewport-Funktionen. Mit Bedingungsregeln können Sie CSS-Stile basierend auf Abfragewerten oder Browser- und Gerätefunktionen gezielt einsetzen, unabhängig vom aktuell gerenderten Dokument.

Die ersten CSS-Bedingungsregeln waren [Medientypen](/de/docs/Web/CSS/@media#media_types), die das beabsichtigte Zielmedium für die verknüpften Stile festlegten, beispielsweise `screen` oder `print`. Diese wurden als Wert der `media`-Attribute der HTML-{{HTMLElement("link")}}- und {{HTMLElement("style")}}-Elemente oder als kommagetrennte Liste von Medientypen innerhalb einer {{cssxref("@import")}}-Anweisung oder Regel gesetzt. Die Möglichkeit, CSS-Regeln bedingt anzuwenden, hat sich seit den Implementierungen von CSS 2.1 und HTML 4.01, die bedingte Abfragen auf wenige Medientypen beschränkten, stark erweitert.

CSS-Bedingungsregeln beinhalten jetzt Feature-Abfragen; die `@supports`-Regel ermöglicht es, CSS-Stile basierend auf den CSS-Fähigkeiten eines User-Agents gezielt anzuwenden. Zusätzliche Bedingungen umfassen, welche Selektoren, Schriftformate und Schrifttechniken unterstützt werden.

Das CSS Conditional Rules-Modul erweitert ebenfalls `@media`, um das Verschachteln von Regeln zu ermöglichen. Das entsprechende [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries)-Modul entfernt ungenutzte Medientypen und fügt viele Medienfunktionen und Bedingungen hinzu, die gezielt angesprochen werden können.

Das [CSS-Container-Abfragen-Modul](/de/docs/Web/CSS/CSS_containment/Container_queries) definiert ähnliche Bedingungsregeln, jedoch basierend auf dem übergeordneten Element anstelle des Viewports.

Es gibt Pläne, mögliche Abfragen weiter zu erweitern, indem die generalisierte Bedingungsregel `@when` und die verkettete Bedingungsregel `@else` hinzugefügt werden. Diese beiden Regeln werden derzeit nicht unterstützt.

## Referenz

### Eigenschaften

- {{cssxref("container")}}
- {{cssxref("container-name")}}
- {{cssxref("container-type")}}

### At-Regeln

- {{cssxref("@container")}}
- {{cssxref("@media")}}
- {{cssxref("@supports")}}

Das CSS Conditional Rules-Modul führt auch die `@else`- und `@when`-Regeln ein. Derzeit unterstützen keine Browser diese Funktionen.

### Funktionen

- [`style()`](/de/docs/Web/CSS/@container#container_style_queries)
- [`font-tech()`](/de/docs/Web/CSS/@supports#font-tech)
- [`font-format()`](/de/docs/Web/CSS/@supports#font-format)
- [`selector()`](/de/docs/Web/CSS/@supports#function_syntax)
- [`supports()`](/de/docs/Web/CSS/@import#supports-condition)

Das CSS Conditional Rules-Modul führt auch eine `media()`-CSS-Funktion ein. Derzeit unterstützen keine Browser diese Funktion.

### Datentypen

- [`<container-name>`](/de/docs/Web/CSS/@container#container-name)
- [`<style-feature>`](/de/docs/Web/CSS/@container#container_style_queries)
- Container-relative `<length>` Einheiten](/de/docs/Web/CSS/length#container_query_length_units)
- [`<media-query>`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax)
- [`<supports-condition>`](/de/docs/Web/CSS/@import#importing_css_rules_conditional_on_feature_support)
- `<supports-feature>` (siehe [`supports()`](/de/docs/Web/CSS/@import#supports-condition))

### Schnittstellen

- [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule)
- [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule)
- [`CSSSupportsRule`](/de/docs/Web/API/CSSSupportsRule)
- [`supports()`](/de/docs/Web/API/CSS/supports_static) Methode

### Begriffe und Glossardefinitionen

- {{Glossary("media/CSS", "Media")}}
- Support-Abfrage (siehe [Feature-Abfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries))

## Leitfäden

- [Verwendung von CSS-Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
  - : Selektives Anwenden von CSS-Regeln nach Überprüfung der Browserunterstützung für die angegebenen Eigenschaften und Werte über Feature-Abfragen.

- [Verwendung von CSS-Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
  - : Einführung in Media Queries, ihre Syntax und die Operatoren und Medienfunktionen, die zur Konstruktion von Media-Query-Ausdrücken verwendet werden.

- [Unterstützung älterer Browser: Feature-Abfragen](/de/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers#feature_queries)
  - : Wie Sie Feature-Abfragen verwenden, um CSS basierend auf dem Unterstützungsniveau des Browsers für Web-Features zu zielen.

- [Browser-Feature-Erkennung: CSS `@supports`](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection#supports)
  - : Ein Blick auf JavaScript- und CSS-Feature-Erkennung, einschließlich CSS `@supports`.

- [Verwendung von Container-Scrollzustand-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
  - : Verwendung von Abfragen zum Scrollzustand von Containern, mit einem Beispiel für jeden Typ.

## Verwandte Konzepte

- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
  - {{cssxref("@import")}} At-Regel

- [CSS-Media-Queries](/de/docs/Web/CSS/CSS_media_queries) Modul
  - [`<media-feature>`](/de/docs/Web/CSS/@media#media_features)
  - [`<media-type>`](/de/docs/Web/CSS/@media#media_types)
  - [`<media-condition>`](/de/docs/Web/CSS/@media#logical_operators)
  - [`<media-query-list>`](/de/docs/Web/SVG/Reference/Attribute/media)
  - [CSS logische Operatoren](/de/docs/Web/CSS/@media#logical_operators) (`not`, `or` und `and`)

- [CSSOM-View](/de/docs/Web/CSS/CSSOM_view) Modul
  - [`CSS`](/de/docs/Web/API/CSS) API
  - [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) API
  - [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) API
  - [`CSSRule`](/de/docs/Web/API/CSSRule) API
  - [`MediaList`](/de/docs/Web/API/MediaList) Schnittstelle
    - [`MediaList.mediaText`](/de/docs/Web/API/MediaList/mediaText) Eigenschaft

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
  - {{cssxref("@charset")}} Deklaration
  - {{cssxref("at-rule")}} Begriff
  - [`invalid`](/de/docs/Web/CSS/CSS_syntax/Error_handling) Begriff
  - {{Glossary("parse", "parse")}} Begriff
  - [Style-Regel](/de/docs/Web/API/CSSStyleRule) Begriff

- [CSS-Namespaces](/de/docs/Web/CSS/CSS_namespaces) Modul
  - {{cssxref("@namespace")}} At-Regel

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) Modul
- [CSS-Media-Queries](/de/docs/Web/CSS/CSS_media_queries) Modul
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
