---
title: CSS-Bedingungsregeln
slug: Web/CSS/CSS_conditional_rules
l10n:
  sourceCommit: d13c1276b80bbfc940a1091b62f333fe9edc78a2
---

{{CSSRef}}

Das Modul **CSS-Bedingungsregeln** definiert CSS-Medien- und Support-Abfragen, die es Ihnen ermöglichen, Stile zu definieren, die nur angewendet werden, wenn bestimmte Bedingungen erfüllt sind. Die in diesem Modul definierten Bedingungsregeln basieren auf den Fähigkeiten von Gerät, Benutzeragent und Viewport. Mit Bedingungsregeln können Sie CSS-Stile basierend auf Abfragewerten oder Browser- und Gerätefunktionen gezielt anwenden, unabhängig vom gerenderten Dokument.

Die ersten CSS-Bedingungsregeln waren [Medientypen](/de/docs/Web/CSS/@media#media_types), die das beabsichtigte Zielmedium für die verlinkten Stile spezifizierten, beispielsweise `screen` oder `print`. Diese wurden als Wert der `media`-Attribute der HTML-Elemente {{HTMLElement("link")}} und {{HTMLElement("style")}} gesetzt oder als kommagetrennte Liste von Medientypen innerhalb einer {{cssxref("@import")}}-Anweisung oder At-Regel. Die Möglichkeit, CSS-Regeln bedingt anzuwenden, wurde seit den Implementierungen von CSS 2.1 und HTML 4.01, die bedingte Abfragen auf wenige Medientypen beschränkten, erheblich erweitert.

CSS-Bedingungsregeln umfassen jetzt Feature-Abfragen; die `@supports`-At-Regel ermöglicht das gezielte Anwenden von CSS-Stilen basierend auf den CSS-Fähigkeiten eines Benutzeragents. Zusätzliche Bedingungen schließen ein, welcher Selektor, welche Schriftformatierungen und welche Schrifttechnologien unterstützt werden.

Das CSS-Bedingungsregel-Modul erweitert auch `@media`, um das Verschachteln von At-Regeln zu ermöglichen, wobei das verwandte [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) Modul ungenutzte Medientypen entfernt und viele Medienfunktionen und -bedingungen hinzufügt, die gezielt werden können.

Das [CSS-Container-Abfragen-Modul](/de/docs/Web/CSS/CSS_containment/Container_queries) definiert ähnliche Bedingungsregeln, jedoch basierend auf dem Elternelement eines Elements und nicht auf dem Viewport.

Es gibt Pläne, die möglichen Abfragen weiter zu erweitern, indem die generalisierten Bedingungsregel `@when` und die verkettete Bedingungsregel `@else` hinzugefügt werden. Diese beiden At-Regeln werden derzeit nicht unterstützt.

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
> Das CSS-Bedingungsregel-Modul führt zwei At-Regeln ein, die noch nicht implementiert wurden: `@else` und `@when`.

### Funktionen

- [`style()`](/de/docs/Web/CSS/@container#container_style_queries)
- [`font-tech()`](/de/docs/Web/CSS/@supports#font-tech)
- [`font-format()`](/de/docs/Web/CSS/@supports#font-format)
- [`selector()`](/de/docs/Web/CSS/@supports#function_syntax)
- [`supports()`](/de/docs/Web/CSS/@import#supports-condition)

> [!NOTE]
> Das CSS-Bedingungsregel-Modul führt eine CSS-Funktion ein, die noch nicht implementiert wurde: `media()`.

### Datentypen

- [`<container-name>`](/de/docs/Web/CSS/@container#values)
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

## Leitfaden

- [Verwendung von CSS-Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)

  - : Selektives Anwenden von CSS-Regeln nach Überprüfung der Browserunterstützung für die angegebenen Eigenschaften und Werte mittels Feature-Abfragen.

- [Verwendung von CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)

  - : Einführung in Medienabfragen, ihre Syntax und die Operatoren und Medienfeatures, die verwendet werden, um Medienabfrage-Ausdrücke zu konstruieren.

- [Unterstützung älterer Browser: Feature-Abfragen](/de/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers#feature_queries)

  - : Wie man Feature-Abfragen nutzt, um CSS basierend auf dem Unterstützungsgrad des Browsers für Webfeatures zu zielen.

- [Browser-Feature-Erkennung: CSS `@supports`](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection#supports)

  - : Ein Blick auf JavaScript- und CSS-Feature-Erkennung einschließlich CSS `@supports`.

## Verwandte Konzepte

- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul

  - {{cssxref("@import")}} At-Regel

- [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) Modul

  - [`<media-feature>`](/de/docs/Web/CSS/@media#media_features)
  - [`<media-type>`](/de/docs/Web/CSS/@media#media_types)
  - [`<media-condition>`](/de/docs/Web/CSS/@media#logical_operators)
  - [`<media-query-list>`](/de/docs/Web/SVG/Attribute/media)
  - [CSS logische Operatoren](/de/docs/Web/CSS/@media#logical_operators) (`not`, `or`, and `and`)

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
  - [Stilregel](/de/docs/Web/API/CSSStyleRule) Begriff

- [CSS-Namespace](/de/docs/Web/CSS/CSS_namespaces) Modul

  - {{cssxref("@namespace")}} At-Regel

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) Modul
- [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) Modul
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
