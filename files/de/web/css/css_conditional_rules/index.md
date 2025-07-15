---
title: Bedingte CSS-Regeln
slug: Web/CSS/CSS_conditional_rules
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **Modul für bedingte CSS-Regeln** definiert CSS-Medien- und Supportabfragen und ermöglicht es Ihnen, Styles zu definieren, die nur angewendet werden, wenn bestimmte Bedingungen erfüllt sind. Die in diesem Modul definierten bedingten Regeln basieren auf den Fähigkeiten des Geräts, des Benutzeragenten und des Ansichtsfensters. Mit bedingten Regeln können Sie CSS-Styles basierend auf Abfragewerten oder Browser- und Gerätemerkmalen unabhängig vom gerenderten Dokument anpassen.

Die ersten bedingten CSS-Regeln waren [Medientypen](/de/docs/Web/CSS/@media#media_types), die das beabsichtigte Zielmedium für die verknüpften Styles angaben, zum Beispiel `screen` oder `print`. Diese wurden als Wert der `media`-Attribute der HTML-Elemente {{HTMLElement("link")}} und {{HTMLElement("style")}} festgelegt oder als kommagetrennte Liste von Medientypen innerhalb einer {{cssxref("@import")}}-Anweisung oder einer At-Regel angegeben. Die Möglichkeit, CSS-Regeln bedingt anzuwenden, hat sich seit den Implementierungen von CSS 2.1 und HTML 4.01, die bedingte Abfragen auf wenige Medientypen beschränkten, stark erweitert.

Bedingte CSS-Regeln beinhalten jetzt Feature-Abfragen; die `@supports`-At-Regel ermöglicht es, CSS-Styles basierend auf den CSS-Fähigkeiten eines Benutzeragenten anzupassen. Zusätzliche Bedingungen umfassen, welche Selektoren, Schriftformate und Schrifttechnologien unterstützt werden.

Das Modul für bedingte CSS-Regeln erweitert auch `@media`, um das Verschachteln von At-Regeln zu ermöglichen, wobei das verwandte [Modul für CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) ungenutzte Medientypen entfernt und viele Medienmerkmale und Bedingungen hinzufügt, die gezielt werden können.

Das [Modul für CSS-Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) definiert ähnliche bedingte Regeln, jedoch basierend auf dem Elternelement eines Elements anstatt des Ansichtsfensters.

Es gibt Pläne, mögliche Abfragen weiter zu erweitern, indem die verallgemeinerte bedingte Regel `@when` und die verkettete bedingte Regel `@else` hinzugefügt werden. Diese beiden At-Regeln werden derzeit noch nicht unterstützt.

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
> Das Modul für bedingte CSS-Regeln führt zwei At-Regeln ein, die nicht implementiert wurden: `@else` und `@when`.

### Funktionen

- [`style()`](/de/docs/Web/CSS/@container#container_style_queries)
- [`font-tech()`](/de/docs/Web/CSS/@supports#font-tech)
- [`font-format()`](/de/docs/Web/CSS/@supports#font-format)
- [`selector()`](/de/docs/Web/CSS/@supports#function_syntax)
- [`supports()`](/de/docs/Web/CSS/@import#supports-condition)

> [!NOTE]
> Das Modul für bedingte CSS-Regeln führt eine CSS-Funktion ein, die nicht implementiert wurde: `media()`.

### Datentypen

- [`<container-name>`](/de/docs/Web/CSS/@container#container-name)
- [`<style-feature>`](/de/docs/Web/CSS/@container#container_style_queries)
- [Container relative `<length>` Einheiten](/de/docs/Web/CSS/length#container_query_length_units)
- [`<media-query>`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax)
- [`<supports-condition>`](/de/docs/Web/CSS/@import#importing_css_rules_conditional_on_feature_support)
- `<supports-feature>` (siehe [`supports()`](/de/docs/Web/CSS/@import#supports-condition))

### Schnittstellen

- [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule)
- [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule)
- [`CSSSupportsRule`](/de/docs/Web/API/CSSSupportsRule)
- [`supports()`](/de/docs/Web/API/CSS/supports_static) Methode

### Begriffe und Glossareinträge

- {{Glossary("media/CSS", "Medien")}}
- Support-Abfrage (siehe [Feature-Abfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries))

## Leitfäden

- [Verwendung von CSS-Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
  - : Selektives Anwenden von CSS-Regeln, nachdem die Browserunterstützung für die angegebenen Eigenschaften und Werte über Feature-Abfragen überprüft wurde.

- [Verwendung von CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
  - : Einführung in Medienabfragen, deren Syntax und die Operatoren und Medienmerkmale, die zur Konstruktion von Medienabfrage-Ausdrücken verwendet werden.

- [Unterstützung älterer Browser: Feature-Abfragen](/de/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers#feature_queries)
  - : Wie man Feature-Abfragen verwendet, um CSS basierend auf dem Unterstützungsgrad eines Browsers für Webfeatures zu nutzen.

- [Browser-Feature-Erkennung: CSS `@supports`](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection#supports)
  - : Ein Blick auf JavaScript- und CSS-Feature-Erkennung, einschließlich CSS `@supports`.

- [Verwendung von Container-Scrollstatus-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
  - : Verwendung von Container-Scrollstatus-Abfragen, mit einem Beispiel für jeden Typ.

## Verwandte Konzepte

- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
  - {{cssxref("@import")}} At-Regel

- [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) Modul
  - [`<media-feature>`](/de/docs/Web/CSS/@media#media_features)
  - [`<media-type>`](/de/docs/Web/CSS/@media#media_types)
  - [`<media-condition>`](/de/docs/Web/CSS/@media#logical_operators)
  - [`<media-query-list>`](/de/docs/Web/SVG/Reference/Attribute/media)
  - [CSS logische Operatoren](/de/docs/Web/CSS/@media#logical_operators) (`not`, `or`, und `and`)

- [CSSOM-Ansicht](/de/docs/Web/CSS/CSSOM_view) Modul
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

- [CSS-Namespace](/de/docs/Web/CSS/CSS_namespaces) Modul
  - {{cssxref("@namespace")}} At-Regel

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) Modul
- [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) Modul
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
