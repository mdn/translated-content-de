---
title: CSS-Bedingungsregeln
slug: Web/CSS/CSS_conditional_rules
l10n:
  sourceCommit: a69f9903e7444d42adcf2432eaa511c05761c757
---

{{CSSRef}}

Das **CSS-Bedingungsregeln**-Modul definiert CSS-Medien- und Support-Abfragen und ermöglicht es Ihnen, Stile zu definieren, die nur angewendet werden, wenn bestimmte Bedingungen erfüllt sind. Die in diesem Modul definierten Bedingungsregeln basieren auf Geräte-, Benutzeragent- und Viewport-Fähigkeiten. Mit Bedingungsregeln können Sie CSS-Stile basierend auf Abfragewerten oder Browser- und Gerätefunktionen anwenden, unabhängig von dem Dokument, das gerendert wird.

Die ersten CSS-Bedingungsregeln waren [Medientypen](/de/docs/Web/CSS/@media#media_types), die das vorgesehene Zielmedium für die verknüpften Stile spezifizierten, zum Beispiel `screen` oder `print`. Diese wurden als Wert der HTML {{HTMLElement("link")}} und {{HTMLElement("style")}} Elemente `media`-Attribute oder als eine durch Kommas getrennte Liste von Medientypen innerhalb einer {{cssxref("@import")}} Erklärung oder at-rule festgelegt. Die Möglichkeit, CSS-Regeln bedingt anzuwenden, wurde seit der CSS 2.1 und HTML 4.01 Implementierung, die bedingte Abfragen auf wenige Medientypen beschränkte, stark erweitert.

CSS-Bedingungsregeln beinhalten jetzt Feature-Abfragen; die `@supports` at-rule ermöglicht das Anzielen von CSS-Stilen basierend auf den CSS-Fähigkeiten eines Benutzeragenten. Zusätzliche Bedingungen beinhalten, welche Selektoren, Schriftformate und Schrifttechnologien unterstützt werden.

Das CSS-Bedingungsregeln-Modul erweitert auch `@media`, um das Verschachteln von at-rules zu ermöglichen, wobei das verwandte [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) Modul ungenutzte Medientypen entfernt und viele Medien-Features und Bedingungen hinzufügt, die gezielt angesprochen werden können.

Das [CSS-Containerabfragen-Modul](/de/docs/Web/CSS/CSS_containment/Container_queries) definiert ähnliche Bedingungsregeln, jedoch basierend auf dem übergeordneten Element und nicht auf dem Viewport.

Es gibt Pläne, die möglichen Abfragen weiter zu erweitern, indem die allgemeine Bedingungsregel `@when` und die verkettete Bedingungsregel `@else` hinzugefügt werden. Diese beiden at-rules werden noch nicht unterstützt.

## Referenz

### Eigenschaften

- {{cssxref("container")}}
- {{cssxref("container-name")}}
- {{cssxref("container-type")}}

### At-rules

- {{cssxref("@container")}}
- {{cssxref("@media")}}
- {{cssxref("@supports")}}

> [!NOTE]
> Das CSS-Bedingungsregeln-Modul führt zwei at-rules ein, die noch nicht implementiert wurden: `@else` und `@when`.

### Funktionen

- [`style()`](/de/docs/Web/CSS/@container#container_style_queries)
- [`font-tech()`](/de/docs/Web/CSS/@supports#font-tech)
- [`font-format()`](/de/docs/Web/CSS/@supports#font-format)
- [`selector()`](/de/docs/Web/CSS/@supports#function_syntax)
- [`supports()`](/de/docs/Web/CSS/@import#supports-condition)

> [!NOTE]
> Das CSS-Bedingungsregeln-Modul führt eine CSS-Funktion ein, die noch nicht implementiert wurde: `media()`.

### Datentypen

- [`<container-name>`](/de/docs/Web/CSS/@container#values)
- [`<style-feature>`](/de/docs/Web/CSS/@container#container_style_queries)
- [Containerverwandte `<length>` Einheiten](/de/docs/Web/CSS/length#container_query_length_units)
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
- Unterstützungsabfrage (siehe [Feature-Abfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries))

## Leitfäden

- [CSS-Feature-Abfragen verwenden](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)

  - : Selektives Anwenden von CSS-Regeln nach Prüfung der Browser-Unterstützung für die angegebenen Eigenschaften und Werte über Feature-Abfragen.

- [CSS-Medienabfragen verwenden](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)

  - : Einführung in Medienabfragen, deren Syntax sowie die Operatoren und Medien-Features, die zur Erstellung von Medien-Abfrageausdrücken verwendet werden.

- [Unterstützung älterer Browser: Feature-Abfragen](/de/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers#feature_queries)

  - : Anleitung zur Verwendung von Feature-Abfragen, um CSS basierend auf dem Unterstützungsniveau des Browsers für Web-Features anzusprechen.

- [Browser-Feature-Erkennung: CSS `@supports`](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection#supports)

  - : Ein Blick auf JavaScript- und CSS-Feature-Erkennung, einschließlich CSS `@supports`.

- [Verwendung von Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)

  - : Verwendung von Container-Scroll-Zustandsabfragen mit einem Beispiel für jeden Typ.

## Verwandte Konzepte

- [CSS Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul

  - {{cssxref("@import")}} at-rule

- [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) Modul

  - [`<media-feature>`](/de/docs/Web/CSS/@media#media_features)
  - [`<media-type>`](/de/docs/Web/CSS/@media#media_types)
  - [`<media-condition>`](/de/docs/Web/CSS/@media#logical_operators)
  - [`<media-query-list>`](/de/docs/Web/SVG/Attribute/media)
  - [CSS logische Operatoren](/de/docs/Web/CSS/@media#logical_operators) (`not`, `or` und `and`)

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
  - {{Glossary("parse", "parsen")}} Begriff
  - [Stilregel](/de/docs/Web/API/CSSStyleRule) Begriff

- [CSS-Namensräume](/de/docs/Web/CSS/CSS_namespaces) Modul

  - {{cssxref("@namespace")}} at-rule

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) Modul
- [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) Modul
- [CSS Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
