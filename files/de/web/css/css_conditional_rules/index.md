---
title: CSS-Bedingungsregeln
slug: Web/CSS/CSS_conditional_rules
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das **CSS-Bedingungsregeln**-Modul definiert CSS-Medien- und Unterstützungsabfragen, die es Ihnen ermöglichen, Stile nur dann anzuwenden, wenn bestimmte Bedingungen erfüllt sind. Die in diesem Modul definierten Bedingungsregeln basieren auf Geräte-, Benutzeragenten- und Anzeigeerweiterungen. Mit Bedingungsregeln können Sie CSS-Stile basierend auf Abfragewerten oder Browser- und Gerätefunktionen unabhängig vom darzustellenden Dokument anvisieren.

Die ersten CSS-Bedingungsregeln waren [Medientypen](/de/docs/Web/CSS/Reference/At-rules/@media#media_types), die das beabsichtigte Zielmedium für die verknüpften Stile angaben, zum Beispiel `screen` oder `print`. Diese wurden als Wert der `media`-Attribute der HTML-{{HTMLElement("link")}}- und {{HTMLElement("style")}}-Elemente oder als kommagetrennte Liste von Medientypen innerhalb einer {{cssxref("@import")}}-Anweisung oder At-Regel festgelegt. Die Möglichkeit, CSS-Regeln bedingt anzuwenden, wurde seit den Implementierungen von CSS 2.1 und HTML 4.01, die sich auf wenige Medientypen beschränkten, erheblich erweitert.

CSS-Bedingungsregeln umfassen jetzt Feature-Abfragen; die `@supports`-At-Regel ermöglicht es, CSS-Stile basierend auf den CSS-Fähigkeiten eines Benutzeragenten anzuwenden. Zusätzliche Bedingungen umfassen, welche Selektoren, Schriftformate und Schrifttechnologien unterstützt werden.

Das CSS-Bedingungsregeln-Modul erweitert auch `@media`, um die Verschachtelung von At-Regeln zu ermöglichen, wobei das verwandte [CSS Media Queries](/de/docs/Web/CSS/Guides/Media_queries)-Modul unbenutzte Medientypen entfernt und viele Medienfeatures und Bedingungen hinzufügt, die gezielt werden können.

Das [CSS Container Queries-Modul](/de/docs/Web/CSS/Guides/Containment/Container_queries) definiert ähnliche Bedingungsregeln, jedoch basierend auf dem Elternelement eines Elements anstelle des Ansichtsfensters.

Es gibt Pläne, mögliche Abfragen weiter zu erweitern, indem die allgemeine Bedingungsregel `@when` und die verkettete Bedingungsregel `@else` hinzugefügt werden. Diese beiden At-Regeln werden derzeit noch nicht unterstützt.

## Referenz

### Eigenschaften

- {{cssxref("container")}}
- {{cssxref("container-name")}}
- {{cssxref("container-type")}}

### At-Regeln und Deskriptoren

- {{cssxref("@container")}}
- {{cssxref("@media")}}
- {{cssxref("@supports")}}

Das CSS-Bedingungsregeln-Modul führt auch die `@else`- und `@when`-At-Regeln ein. Derzeit unterstützt kein Browser diese Funktionen.

### Funktionen

- [`style()`](/de/docs/Web/CSS/Reference/At-rules/@container#container_style_queries)
- [`font-tech()`](/de/docs/Web/CSS/Reference/At-rules/@supports#font-tech)
- [`font-format()`](/de/docs/Web/CSS/Reference/At-rules/@supports#font-format)
- [`selector()`](/de/docs/Web/CSS/Reference/At-rules/@supports#function_syntax)
- [`supports()`](/de/docs/Web/CSS/Reference/At-rules/@import#supports-condition)

Das CSS-Bedingungsregeln-Modul führt auch eine `media()`-CSS-Funktion ein. Derzeit unterstützt kein Browser diese Funktion.

### Datentypen

- [`<container-name>`](/de/docs/Web/CSS/Reference/At-rules/@container#container-name)
- [`<style-feature>`](/de/docs/Web/CSS/Reference/At-rules/@container#container_style_queries)
- Container-relative `<length>` Einheiten](/de/docs/Web/CSS/Reference/Values/length#container_query_length_units)
- [`<media-query>`](/de/docs/Web/CSS/Guides/Media_queries/Using#syntax)
- [`<supports-condition>`](/de/docs/Web/CSS/Reference/At-rules/@import#importing_css_rules_conditional_on_feature_support)
- `<supports-feature>` (siehe [`supports()`](/de/docs/Web/CSS/Reference/At-rules/@import#supports-condition))

### Schnittstellen

- [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule)
- [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule)
- [`CSSSupportsRule`](/de/docs/Web/API/CSSSupportsRule)
- [`supports()`](/de/docs/Web/API/CSS/supports_static) Methode

### Begriffe und Glossardefinitionen

- {{Glossary("media/CSS", "Media")}}
- Unterstützungsabfrage (siehe [Feature-Abfrage](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries))

## Leitfäden

- [Verwendung von CSS-Feature-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
  - : Selektives Anwenden von CSS-Regeln nach Überprüfung des Browsers auf Unterstützung für die angegebenen Eigenschaften und Werte über Feature-Abfragen.

- [Verwendung von CSS-Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
  - : Einführung in Media Queries, ihre Syntax und die Operatoren und Medienmerkmale, die zur Erstellung von Media-Query-Ausdrücken verwendet werden.

- [Unterstützung älterer Browser: Feature-Abfragen](/de/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers#feature_queries)
  - : Wie man Feature-Abfragen verwendet, um CSS basierend auf dem Unterstützungslevel des Browsers für Web-Features auszurichten.

- [Browser-Feature-Erkennung: CSS `@supports`](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection#supports)
  - : Ein Blick auf die Erkennung von JavaScript- und CSS-Features, einschließlich CSS `@supports`.

- [Verwendung von Container-Scroll-State-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
  - : Verwendung von Container-Scroll-State-Abfragen, mit einem Beispiel für jeden Typ.

## Verwandte Konzepte

- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade) Modul
  - {{cssxref("@import")}} At-Regel

- [CSS-Media Queries](/de/docs/Web/CSS/Guides/Media_queries) Modul
  - [`<media-feature>`](/de/docs/Web/CSS/Reference/At-rules/@media#media_features)
  - [`<media-type>`](/de/docs/Web/CSS/Reference/At-rules/@media#media_types)
  - [`<media-condition>`](/de/docs/Web/CSS/Reference/At-rules/@media#logical_operators)
  - [`<media-query-list>`](/de/docs/Web/SVG/Reference/Attribute/media)
  - [CSS-logische Operatoren](/de/docs/Web/CSS/Reference/At-rules/@media#logical_operators) (`not`, `or`, und `and`)

- [CSSOM View](/de/docs/Web/CSS/Guides/CSSOM_view) Modul
  - [`CSS`](/de/docs/Web/API/CSS) API
  - [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) API
  - [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) API
  - [`CSSRule`](/de/docs/Web/API/CSSRule) API
  - [`MediaList`](/de/docs/Web/API/MediaList) Schnittstelle
    - [`MediaList.mediaText`](/de/docs/Web/API/MediaList/mediaText) Eigenschaft

- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax) Modul
  - {{cssxref("@charset")}} Deklaration
  - {{cssxref("at-rule")}} Begriff
  - [`invalid`](/de/docs/Web/CSS/Guides/Syntax/Error_handling) Begriff
  - {{Glossary("parse", "parsen")}} Begriff
  - [Stilregel](/de/docs/Web/API/CSSStyleRule) Begriff

- [CSS-Namensräume](/de/docs/Web/CSS/Guides/Namespaces) Modul
  - {{cssxref("@namespace")}} At-Regel

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Container Queries](/de/docs/Web/CSS/Guides/Containment/Container_queries) Modul
- [CSS Media Queries](/de/docs/Web/CSS/Guides/Media_queries) Modul
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade) Modul
