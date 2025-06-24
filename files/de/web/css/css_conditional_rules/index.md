---
title: Bedingte CSS-Regeln
slug: Web/CSS/CSS_conditional_rules
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Das Modul der **bedingten CSS-Regeln** definiert CSS-Medien- und Supportabfragen, die es Ihnen ermöglichen, Stile zu definieren, die nur angewendet werden, wenn bestimmte Bedingungen erfüllt sind. Die in diesem Modul definierten bedingten Regeln basieren auf Geräte-, Benutzeragent- und Viewport-Fähigkeiten. Mit bedingten Regeln können Sie CSS-Stile basierend auf Abfragewerten oder Browser- und Gerätefunktionen unabhängig vom gerenderten Dokument anpassen.

Die ersten bedingten CSS-Regeln waren [Medientypen](/de/docs/Web/CSS/@media#media_types), die das vorgesehene Zielmedium für die verknüpften Stile spezifizierten, zum Beispiel `screen` oder `print`. Diese wurden als Wert der `media`-Attribute der HTML {{HTMLElement("link")}}- und {{HTMLElement("style")}}-Elemente oder als kommagetrennte Liste von Medientypen innerhalb einer {{cssxref("@import")}}-Anweisung oder eines At-Regelsatzes gesetzt. Die Möglichkeit, CSS-Regeln bedingt anzuwenden, wurde seit den CSS 2.1- und HTML 4.01-Implementierungen, die bedingte Abfragen auf wenige Medientypen beschränkten, erheblich erweitert.

Bedingte CSS-Regeln umfassen jetzt Feature-Abfragen; die `@supports`-At-Regel ermöglicht das Anpassen von CSS-Stilen basierend auf den CSS-Fähigkeiten eines Benutzeragents. Zusätzliche Bedingungen umfassen unterstützte Selektoren, Schriftformatierungen und Schrifttechnologien.

Das Modul der bedingten CSS-Regeln erweitert auch `@media`, um das Verschachteln von At-Regeln zu ermöglichen, wobei das zugehörige [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) Modul ungenutzte Medientypen entfernt und viele Medienmerkmale und Bedingungen hinzufügt, die gezielt angesprochen werden können.

Das [CSS-Containerabfragen-Modul](/de/docs/Web/CSS/CSS_containment/Container_queries) definiert ähnliche bedingte Regeln, jedoch basierend auf dem übergeordneten Element anstatt auf dem Viewport.

Es gibt Pläne, mögliche Abfragen weiter zu erweitern, indem die allgemeine bedingte Regel `@when` und die verkettete bedingte Regel `@else` hinzugefügt werden. Diese zwei At-Regeln werden bisher noch nicht unterstützt.

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
> Das Modul der bedingten CSS-Regeln führt zwei At-Regeln ein, die noch nicht implementiert wurden: `@else` und `@when`.

### Funktionen

- [`style()`](/de/docs/Web/CSS/@container#container_style_queries)
- [`font-tech()`](/de/docs/Web/CSS/@supports#font-tech)
- [`font-format()`](/de/docs/Web/CSS/@supports#font-format)
- [`selector()`](/de/docs/Web/CSS/@supports#function_syntax)
- [`supports()`](/de/docs/Web/CSS/@import#supports-condition)

> [!NOTE]
> Das Modul der bedingten CSS-Regeln führt eine CSS-Funktion ein, die noch nicht implementiert wurde: `media()`.

### Datentypen

- [`<container-name>`](/de/docs/Web/CSS/@container#values)
- [`<style-feature>`](/de/docs/Web/CSS/@container#container_style_queries)
- Container-relative `<length>`-Einheiten](/de/docs/Web/CSS/length#container_query_length_units)
- [`<media-query>`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax)
- [`<supports-condition>`](/de/docs/Web/CSS/@import#importing_css_rules_conditional_on_feature_support)
- `<supports-feature>` (siehe [`supports()`](/de/docs/Web/CSS/@import#supports-condition))

### Schnittstellen

- [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule)
- [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule)
- [`CSSSupportsRule`](/de/docs/Web/API/CSSSupportsRule)
- [`supports()`](/de/docs/Web/API/CSS/supports_static) Methode

### Begriffe und Glossareinträge

- {{Glossary("media/CSS", "Media")}}
- Support-Abfrage (Siehe [Feature-Abfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries))

## Leitfaden

- [Verwendung von CSS-Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)

  - : Selektives Anwenden von CSS-Regeln nach Prüfung der Browserunterstützung für die angegebenen Eigenschaften und Werte über Feature-Abfragen.

- [Verwendung von CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)

  - : Einführung in Medienabfragen, deren Syntax sowie die Operatoren und Medienmerkmale, die zur Konstruktion von Medienabfrage-Ausdrücken verwendet werden.

- [Unterstützung älterer Browser: Feature-Abfragen](/de/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers#feature_queries)

  - : Wie man Feature-Abfragen verwendet, um CSS basierend auf dem Unterstützungslevel des Browsers für Web-Features zu zielen.

- [Erkennung von Browser-Features: CSS `@supports`](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection#supports)

  - : Ein Blick auf JavaScript- und CSS-Feature-Erkennung, einschließlich CSS `@supports`.

- [Verwendung von Container-Scrollstatus-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
  - : Verwendung von Container-Scrollstatus-Abfragen mit einem Beispiel für jeden Typ.

## Verwandte Konzepte

- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul

  - {{cssxref("@import")}} at-rule

- [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) Modul

  - [`<media-feature>`](/de/docs/Web/CSS/@media#media_features)
  - [`<media-type>`](/de/docs/Web/CSS/@media#media_types)
  - [`<media-condition>`](/de/docs/Web/CSS/@media#logical_operators)
  - [`<media-query-list>`](/de/docs/Web/SVG/Reference/Attribute/media)
  - [CSS-logische Operatoren](/de/docs/Web/CSS/@media#logical_operators) (`not`, `or`, und `and`)

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

- [CSS-Namensräume](/de/docs/Web/CSS/CSS_namespaces) Modul
  - {{cssxref("@namespace")}} at-rule

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) Modul
- [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) Modul
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
