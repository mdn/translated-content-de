---
title: CSS-Bedingungsregeln
slug: Web/CSS/CSS_conditional_rules
l10n:
  sourceCommit: c9c86abc12c3bdd3fdb07c73a0d1cf88cdd0e1bc
---

{{CSSRef}}

Das Modul der **CSS-Bedingungsregeln** definiert CSS-Medien- und Support-Abfragen und ermöglicht es Ihnen, Stile nur dann anzuwenden, wenn bestimmte Bedingungen erfüllt sind. Die in diesem Modul definierten Bedingungsregeln basieren auf Geräte-, Benutzeragent- und Viewport-Fähigkeiten. Mit Bedingungsregeln können Sie CSS-Stile basierend auf Abfragewerten oder Browser- und Gerätefunktionen unabhängig vom gerenderten Dokument anpassen.

Die ersten CSS-Bedingungsregeln waren [Medientypen](/de/docs/Web/CSS/@media#media_types), die das vorgesehene Zielmedium für die verknüpften Stile angaben, wie z.B. `screen` oder `print`. Diese wurden als Wert der HTML-{{HTMLElement("link")}}- und {{HTMLElement("style")}}-Elemente `media`-Attribute oder als durch Kommas getrennte Liste von Medientypen innerhalb eines {{cssxref("@import")}}-Statements oder einer Regel festgelegt. Die Möglichkeit, CSS-Regeln bedingt anzuwenden, wurde seit den Implementierungen von CSS 2.1 und HTML 4.01, die bedingte Abfragen auf einige Medientypen beschränkten, erheblich erweitert.

CSS-Bedingungsregeln umfassen jetzt Feature-Abfragen; die `@supports`-Regel ermöglicht das Anpassen von CSS-Stilen basierend auf den CSS-Fähigkeiten eines Benutzeragents. Zusätzliche Bedingungen umfassen, welche Selektoren, Schriftformate und Schrifttechnologien unterstützt werden.

Das Modul der CSS-Bedingungsregeln erweitert auch `@media`, um das Verschachteln von Regeln zu ermöglichen. Das verwandte Modul der [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) entfernt ungenutzte Medientypen und fügt viele medienfeatures und Bedingungen hinzu, die gezielt angesprochen werden können.

Das [Modul für CSS-Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) definiert ähnliche Bedingungsregeln, jedoch basierend auf dem übergeordneten Element anstelle des Viewports.

Es gibt Pläne, die möglichen Abfragen weiter zu erweitern, indem die generalisierte Bedingungsregel `@when` und die verkettete Bedingungsregel `@else` hinzugefügt werden. Diese beiden Regeln werden derzeit noch nicht unterstützt.

## Referenz

### At-Rules

- {{cssxref("@media")}}
- {{cssxref("@supports")}}

> [!NOTE]
> Das CSS-Bedingungsregelmodul führt zwei At-Rules ein, die nicht implementiert wurden: `@else` und `@when`.

### Funktionen

- [`font-tech()`](/de/docs/Web/CSS/@supports#font-tech)
- [`font-format()`](/de/docs/Web/CSS/@supports#font-format)
- [`selector()`](/de/docs/Web/CSS/@supports#function_syntax)
- [`supports()`](/de/docs/Web/CSS/@import#supports-condition)

> [!NOTE]
> Das CSS-Bedingungsregelmodul führt eine CSS-Funktion ein, die nicht implementiert wurde: `media()`.

### Datentypen

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

- [CSS-Feature-Abfragen verwenden](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)

  - : Selektives Anwenden von CSS-Regeln nach Überprüfung der Browserunterstützung für die angegebenen Eigenschaften und Werte über Feature-Abfragen.

- [Verwendung von CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)

  - : Einführung in Medienabfragen, deren Syntax sowie die Operatoren und Medienfeatures, die zur Erstellung von Medienabfrage-Ausdrücken verwendet werden.

- [Ältere Browser unterstützen: Feature-Abfragen](/de/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers#feature_queries)

  - : Wie man Feature-Abfragen verwendet, um CSS basierend auf dem Unterstützungsniveau des Browsers für Web-Features zu tarieren.

- [Browser-Feature-Erkennung: CSS `@supports`](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection#supports)

  - : Einblick in JavaScript- und CSS-Feature-Erkennung, einschließlich CSS `@supports`.

## Verwandte Konzepte

- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul

  - {{cssxref("@import")}} Regel

- [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) Modul

  - [`<media-feature>`](/de/docs/Web/CSS/@media#media_features)
  - [`<media-type>`](/de/docs/Web/CSS/@media#media_types)
  - [`<media-condition>`](/de/docs/Web/CSS/@media#logical_operators)
  - [`<media-query-list>`](/de/docs/Web/SVG/Attribute/media)
  - [Logische Operatoren in CSS](/de/docs/Web/CSS/@media#logical_operators) (`not`, `or`, und `and`)

- [CSS-Einschluss](/de/docs/Web/CSS/CSS_containment)

  - {{cssxref("@container")}} Regel

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

- [CSS-Namensräume](/de/docs/Web/CSS/CSS_namespaces) Modul

  - {{cssxref("@namespace")}} Regel

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) Modul
- [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) Modul
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
