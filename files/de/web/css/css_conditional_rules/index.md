---
title: CSS-Bedingungsregeln
slug: Web/CSS/CSS_conditional_rules
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{CSSRef}}

Das **CSS conditional rules** Modul definiert CSS Medien- und Unterstützungabfragen und ermöglicht es Ihnen, Styles zu definieren, die nur angewendet werden, wenn bestimmte Bedingungen erfüllt sind. Die in diesem Modul definierten Bedingungsregeln basieren auf Geräte-, Benutzeragent- und Viewport-Fähigkeiten. Mit Bedingungsregeln können Sie CSS-Styles basierend auf Abfragewerten oder Funktionen von Browsern und Geräten anwenden, unabhängig vom zu rendernden Dokument.

Die ersten CSS-Bedingungsregeln waren [Medientypen](/de/docs/Web/CSS/@media#media_types), die das vorgesehene Zielmedium für die verlinkten Styles spezifizieren, zum Beispiel `screen` oder `print`. Diese wurden als Wert der `media` Attribute der HTML {{HTMLElement("link")}} und {{HTMLElement("style")}} Elemente festgelegt oder als kommagetrennte Liste von Medientypen innerhalb eines {{cssxref("@import")}} Statements oder einer At-Regel. Die Möglichkeit, CSS-Regeln bedingt anzuwenden, wurde seit den CSS 2.1 und HTML 4.01 Implementierungen, die bedingte Abfragen auf wenige Medientypen beschränkten, stark erweitert.

CSS-Bedingungsregeln umfassen jetzt Funktionsabfragen; die `@supports` At-Regel ermöglicht das Anzielen von CSS-Styles basierend auf den CSS-Fähigkeiten eines Benutzeragenten. Zusätzliche Bedingungen umfassen, welche Selektoren, Schriftartformate und -technologien unterstützt werden.

Das CSS-Bedingungsregeln Modul erweitert auch `@media`, um das Verschachteln von At-Regeln zu ermöglichen, wobei das verwandte [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) Modul nicht verwendete Medientypen entfernt und viele Medienfunktionen und -bedingungen hinzufügt, die gezielt werden können.

Das [CSS Container-Abfragen Modul](/de/docs/Web/CSS/CSS_containment/Container_queries) definiert ähnliche Bedingungsregeln, die jedoch auf dem übergeordneten Element anstelle des Viewports basieren.

Es gibt Pläne, mögliche Abfragen durch Hinzufügen der allgemeinen Bedingungsregel `@when` und der verketteten Bedingungsregel `@else` weiter zu erweitern. Diese beiden At-Regeln werden derzeit nicht unterstützt.

## Referenz

### Eigenschaften

- {{cssxref("container")}}
- {{cssxref("container-name")}}
- {{cssxref("container-type")}}

### At-Regeln

- {{cssxref("@container")}}
- {{cssxref("@media")}}
- {{cssxref("@supports")}}

> [!NOTE]
> Das CSS-Bedingungsregeln Modul führt zwei At-Regeln ein, die noch nicht implementiert sind: `@else` und `@when`.

### Funktionen

- [`style()`](/de/docs/Web/CSS/@container#container_style_queries)
- [`font-tech()`](/de/docs/Web/CSS/@supports#font-tech)
- [`font-format()`](/de/docs/Web/CSS/@supports#font-format)
- [`selector()`](/de/docs/Web/CSS/@supports#function_syntax)
- [`supports()`](/de/docs/Web/CSS/@import#supports-condition)

> [!NOTE]
> Das CSS-Bedingungsregeln Modul führt eine CSS-Funktion ein, die noch nicht implementiert ist: `media()`.

### Datentypen

- [`<container-name>`](/de/docs/Web/CSS/@container#values)
- [`<style-feature>`](/de/docs/Web/CSS/@container#container_style_queries)
- Container relative `<length>` Einheiten](/de/docs/Web/CSS/length#container_query_length_units)
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
- Supports-Abfrage (siehe [feature query](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries))

## Leitfäden

- [CSS Funktionsabfragen verwenden](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)

  - : Selektives Anwenden von CSS-Regeln, nachdem die Browser-Unterstützung für die angegebenen Eigenschaften und Werte durch Funktionsabfragen geprüft wurde.

- [CSS Medienabfragen verwenden](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)

  - : Einführung in Medienabfragen, deren Syntax sowie die Operatoren und Medienfunktionen, die zur Konstruktion von Medienabfrageausdrücken verwendet werden.

- [Ältere Browser unterstützen: Funktionsabfragen](/de/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers#feature_queries)

  - : Wie man Funktionsabfragen verwendet, um CSS basierend auf dem Unterstützungsniveau des Browsers für Web-Funktionen anzusprechen.

- [Browser-Feature-Erkennung: CSS `@supports`](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection#supports)

  - : Ein Blick auf JavaScript und CSS-Feature-Erkennung, einschließlich CSS `@supports`.

- [Container-Scrollstatusabfragen verwenden](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)

  - : Verwendung von Container-Scrollstatusabfragen, mit einem Beispiel für jeden Typ.

## Verwandte Konzepte

- [CSS Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul

  - {{cssxref("@import")}} At-Regel

- [CSS Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) Modul

  - [`<media-feature>`](/de/docs/Web/CSS/@media#media_features)
  - [`<media-type>`](/de/docs/Web/CSS/@media#media_types)
  - [`<media-condition>`](/de/docs/Web/CSS/@media#logical_operators)
  - [`<media-query-list>`](/de/docs/Web/SVG/Reference/Attribute/media)
  - [CSS logische Operatoren](/de/docs/Web/CSS/@media#logical_operators) (`not`, `or`, und `and`)

- [CSSOM Ansicht](/de/docs/Web/CSS/CSSOM_view) Modul

  - [`CSS`](/de/docs/Web/API/CSS) API
  - [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) API
  - [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) API
  - [`CSSRule`](/de/docs/Web/API/CSSRule) API
  - [`MediaList`](/de/docs/Web/API/MediaList) Schnittstelle
    - [`MediaList.mediaText`](/de/docs/Web/API/MediaList/mediaText) Eigenschaft

- [CSS Syntax](/de/docs/Web/CSS/CSS_syntax) Modul

  - {{cssxref("@charset")}} Deklaration
  - {{cssxref("at-rule")}} Begriff
  - [`invalid`](/de/docs/Web/CSS/CSS_syntax/Error_handling) Begriff
  - {{Glossary("parse", "parse")}} Begriff
  - [Stilregel](/de/docs/Web/API/CSSStyleRule) Begriff

- [CSS-Namespace](/de/docs/Web/CSS/CSS_namespaces) Modul

  - {{cssxref("@namespace")}} At-Regel

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Container-Anfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) Modul
- [CSS Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) Modul
- [CSS Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
