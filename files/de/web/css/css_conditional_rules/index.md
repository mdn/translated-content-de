---
title: CSS-Bedingungsregeln
slug: Web/CSS/CSS_conditional_rules
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{CSSRef}}

Das **CSS-Bedingungsregeln**-Modul definiert CSS-Medien- und Unterstützungsabfragen und ermöglicht Ihnen, Stile zu definieren, die nur angewendet werden, wenn bestimmte Bedingungen erfüllt sind. Die in diesem Modul definierten Bedingungsregeln basieren auf Geräte-, Benutzeragent- und Ansichtsfenster-Fähigkeiten. Mit Bedingungsregeln können Sie CSS-Stile basierend auf Abfragewerten oder Browser- und Gerätefunktionen zielgerichtet anwenden, unabhängig vom gerenderten Dokument.

Die ersten CSS-Bedingungsregeln waren [Medientypen](/de/docs/Web/CSS/@media#media_types), die das beabsichtigte Zielmedium für die verknüpften Stile angaben, zum Beispiel `screen` oder `print`. Diese wurden als Wert der HTML {{HTMLElement("link")}} und {{HTMLElement("style")}} Elemente `media`-Attribute oder als kommagetrennte Liste von Medientypen in einer {{cssxref("@import")}}-Anweisung oder At-Regel festgelegt. Die Möglichkeit, CSS-Regeln bedingt anzuwenden, wurde seit den Implementierungen von CSS 2.1 und HTML 4.01, die bedingte Abfragen auf wenige Medientypen beschränkten, stark erweitert.

CSS-Bedingungsregeln umfassen jetzt auch Funktionsabfragen; die `@supports` At-Regel ermöglicht das Zielsetzungen von CSS-Stilen basierend auf den CSS-Fähigkeiten eines Benutzeragenten. Zusätzliche Bedingungen umfassen, welche Selektoren, Schriftformats und Schrifttechnologien unterstützt werden.

Das CSS-Bedingungsregeln-Modul erweitert `@media`, um das Verschachteln von At-Regeln zu ermöglichen, wobei das verwandte [CSS-Medienabfragen-Modul](/de/docs/Web/CSS/CSS_media_queries) ungenutzte Medientypen entfernt und viele medienbezogene Merkmale und Bedingungen hinzufügt, die gezielt anvisiert werden können.

Das [CSS-Containerabfragen-Modul](/de/docs/Web/CSS/CSS_containment/Container_queries) definiert ähnliche Bedingungsregeln, jedoch basierend auf dem Elternelement eines Elements statt auf dem Ansichtsfenster.

Es gibt Pläne, die möglichen Abfragen weiter zu erweitern, indem die generalisierte Bedingungsregel `@when` und die verkettete Bedingungsregel `@else` hinzugefügt werden. Diese beiden At-Regeln werden derzeit nicht unterstützt.

## Referenz

### At-Regeln

- {{cssxref("@media")}}
- {{cssxref("@supports")}}

> [!NOTE]
> Das CSS-Bedingungsregeln-Modul führt zwei At-Regeln ein, die noch nicht implementiert wurden: `@else` und `@when`.

### Funktionen

- [`font-tech()`](/de/docs/Web/CSS/@supports#font-tech)
- [`font-format()`](/de/docs/Web/CSS/@supports#font-format)
- [`selector()`](/de/docs/Web/CSS/@supports#function_syntax)
- [`supports()`](/de/docs/Web/CSS/@import#supports-condition)

> [!NOTE]
> Das CSS-Bedingungsregeln-Modul führt eine CSS-Funktion ein, die noch nicht implementiert wurde: `media()`.

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

- [Medien](/de/docs/Glossary/media/CSS)
- Unterstützungsabfrage (siehe [Funktionsabfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries))

## Leitfäden

- [Verwendung von CSS-Funktionsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)

  - : Selektives Anwenden von CSS-Regeln nach Überprüfung der Browserunterstützung für die angegebenen Eigenschaften und Werte mittels Funktionsabfragen.

- [Verwendung von CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)

  - : Einführung in Medienabfragen, deren Syntax und die Operatoren und Medienmerkmale, die zur Konstruktion von Medienabfrage-Ausdrücken verwendet werden.

- [Unterstützung älterer Browser: Funktionsabfragen](/de/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers#feature_queries)

  - : Anleitung zur Verwendung von Funktionsabfragen, um CSS basierend auf dem Unterstützungsniveau des Browsers für Web-Features zu verwenden.

- [Browser-Feature-Erkennung: CSS `@supports`](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection#supports)

  - : Einblick in JavaScript und CSS-Feature-Erkennung, einschließlich CSS `@supports`.

## Verwandte Konzepte

- [CSS-Kaskade und -Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul

  - {{cssxref("@import")}} At-Regel

- [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) Modul

  - [`<media-feature>`](/de/docs/Web/CSS/@media#media_features)
  - [`<media-type>`](/de/docs/Web/CSS/@media#media_types)
  - [`<media-condition>`](/de/docs/Web/CSS/@media#logical_operators)
  - [`<media-query-list>`](/de/docs/Web/SVG/Attribute/media)
  - [CSS logische Operatoren](/de/docs/Web/CSS/@media#logical_operators) (`not`, `or`, und `and`)

- [CSS-Einschränkungen](/de/docs/Web/CSS/CSS_containment)

  - {{cssxref("@container")}} At-Regel

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
  - [parse](/de/docs/Glossary/parse) Begriff
  - [Stilregel](/de/docs/Web/API/CSSStyleRule) Begriff

- [CSS-Namespace](/de/docs/Web/CSS/CSS_namespaces) Modul

  - {{cssxref("@namespace")}} At-Regel

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) Modul
- [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) Modul
- [CSS-Kaskade und -Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
