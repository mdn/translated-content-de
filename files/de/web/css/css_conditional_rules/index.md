---
title: CSS-Bedingungsregeln
slug: Web/CSS/CSS_conditional_rules
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Das Modul der **CSS-Bedingungsregeln** definiert CSS-Media- und Unterstützungsabfragen, mit denen Sie Stile definieren können, die nur angewendet werden, wenn bestimmte Bedingungen erfüllt sind. Die in diesem Modul definierten Bedingungsregeln basieren auf Geräte-, User-Agent- und Viewport-Fähigkeiten. Mit Bedingungsregeln können Sie CSS-Stile basierend auf Abfragewerten oder Browser- und Gerätefunktionen anwenden, unabhängig vom gerenderten Dokument.

Die ersten CSS-Bedingungsregeln waren [Medientypen](/de/docs/Web/CSS/@media#media_types), die das angestrebte Zielmedium für die verlinkten Stylesheets spezifizierten, zum Beispiel `screen` oder `print`. Diese wurden als Wert der `media`-Attribute der HTML-{{HTMLElement("link")}} und {{HTMLElement("style")}}-Elemente oder als kommagetrennte Liste von Medientypen innerhalb einer {{cssxref("@import")}}-Anweisung oder At-Regel festgelegt. Die Möglichkeit, CSS-Regeln bedingt anzuwenden, wurde seit den Implementierungen von CSS 2.1 und HTML 4.01, die bedingte Abfragen auf wenige Medientypen beschränkten, erheblich erweitert.

CSS-Bedingungsregeln umfassen jetzt Funktionsabfragen; die `@supports`-At-Regel ermöglicht das Targeting von CSS-Stilen basierend auf den CSS-Fähigkeiten eines User-Agents. Zusätzliche Bedingungen beinhalten, welche Selektoren, Schriftformate und Schrifttechnologien unterstützt werden.

Das CSS-Bedingungsregelmodul erweitert auch `@media`, um das Schachteln von At-Regeln zu ermöglichen, wobei das verwandte [CSS-Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries)-Modul ungenutzte Medientypen entfernt und viele Medienmerkmale und Bedingungen hinzufügt, die gezielt werden können.

Das [CSS-Container-Abfragen-Modul](/de/docs/Web/CSS/CSS_containment/Container_queries) definiert ähnliche Bedingungsregeln, jedoch basierend auf dem übergeordneten Element statt dem Viewport.

Es gibt Pläne, die möglichen Abfragen weiter zu erweitern, indem die verallgemeinerte Bedingungsregel `@when` und die verkettete Bedingungsregel `@else` hinzugefügt werden. Diese beiden At-Regeln werden noch nicht unterstützt.

## Referenz

### At-Regeln

- {{cssxref("@media")}}
- {{cssxref("@supports")}}

> [!NOTE]
> Das CSS-Bedingungsregelmodul führt zwei At-Regeln ein, die nicht implementiert wurden: `@else` und `@when`.

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
- [`supports()`](/de/docs/Web/API/CSS/supports_static)-Methode

### Begriffe und Glossareinträge

- {{Glossary("media/CSS", "Media")}}
- Unterstützungsabfrage (siehe [Funktionsabfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries))

## Leitfäden

- [Verwendung von CSS-Funktionsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)

  - : Selektive Anwendung von CSS-Regeln nach Überprüfung der Browserunterstützung für die angegebenen Eigenschaften und Werte über Funktionsabfragen.

- [Verwendung von CSS-Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)

  - : Einführung in Media-Abfragen, ihre Syntax und die Operatoren und Medienmerkmale, die zur Konstruktion von Media-Abfrage-Ausdrücken verwendet werden.

- [Unterstützung älterer Browser: Funktionsabfragen](/de/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers#feature_queries)

  - : Wie man Funktionsabfragen verwendet, um CSS basierend auf dem Unterstützungsgrad des Browsers für Web-Features zu steuern.

- [Browser-Feature-Erkennung: CSS `@supports`](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection#supports)

  - : Ein Blick auf JavaScript- und CSS-Feature-Erkennung, einschließlich CSS `@supports`.

## Verwandte Konzepte

- [CSS Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul

  - {{cssxref("@import")}} At-Regel

- [CSS-Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries) Modul

  - [`<media-feature>`](/de/docs/Web/CSS/@media#media_features)
  - [`<media-type>`](/de/docs/Web/CSS/@media#media_types)
  - [`<media-condition>`](/de/docs/Web/CSS/@media#logical_operators)
  - [`<media-query-list>`](/de/docs/Web/SVG/Attribute/media)
  - [CSS logische Operatoren](/de/docs/Web/CSS/@media#logical_operators) (`not`, `or`, und `and`)

- [CSS-Einschluss](/de/docs/Web/CSS/CSS_containment)

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
  - {{Glossary("parse", "parsen")}} Begriff
  - [Stilregel](/de/docs/Web/API/CSSStyleRule) Begriff

- [CSS-Namensräume](/de/docs/Web/CSS/CSS_namespaces) Modul

  - {{cssxref("@namespace")}} At-Regel

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) Modul
- [CSS-Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries) Modul
- [CSS Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
