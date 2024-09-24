---
title: CSS-Bedingungsregeln
slug: Web/CSS/CSS_conditional_rules
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{CSSRef}}

Das **CSS-Bedingungsregeln**-Modul definiert CSS-Medien- und Support-Abfragen, die es Ihnen ermöglichen, Stile zu definieren, die nur angewendet werden, wenn bestimmte Bedingungen erfüllt sind. Die in diesem Modul definierten Bedingungsregeln basieren auf den Fähigkeiten des Geräts, des User-Agents und des Viewports. Mit Bedingungsregeln können Sie CSS-Stile basierend auf Abfragewerten oder Browser- und Gerätefunktionen gezielt anwenden, unabhängig vom gerenderten Dokument.

Die ersten CSS-Bedingungsregeln waren [Medientypen](/de/docs/Web/CSS/@media#media_types), die das beabsichtigte Zielmedium für die verknüpften Stile angaben, zum Beispiel `screen` oder `print`. Diese wurden als Wert der HTML-Attribute `media` der {{HTMLElement("link")}}- und {{HTMLElement("style")}}-Elemente oder als kommagetrennte Liste von Medientypen innerhalb einer {{cssxref("@import")}}-Anweisung oder eines At-Regelsatzes festgelegt. Die Möglichkeit, CSS-Regeln bedingt anzuwenden, wurde seit den CSS 2.1 und HTML 4.01 Implementierungen, die bedingte Abfragen auf wenige Medientypen beschränkten, erheblich erweitert.

CSS-Bedingungsregeln umfassen jetzt Feature-Abfragen; die `@supports`-At-Regel ermöglicht es, CSS-Stile basierend auf den CSS-Fähigkeiten eines User-Agents gezielt anzuwenden. Zusätzliche Bedingungen umfassen, welche Selektoren, Schriftformate und Schriftechniken unterstützt werden.

Das CSS-Bedingungsregeln-Modul erweitert auch `@media`, um verschachtelte At-Regeln zu ermöglichen, wobei das verwandte [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries)-Modul nicht verwendete Medientypen entfernt und viele Medienfunktionen und -bedingungen hinzufügt, die gezielt angesprochen werden können.

Das [CSS-Container-Abfragen-Modul](/de/docs/Web/CSS/CSS_containment/Container_queries) definiert ähnliche Bedingungsregeln, jedoch basierend auf dem übergeordneten Element anstatt auf dem Viewport.

Es gibt Pläne, die möglichen Abfragen weiter zu erweitern, indem die generalisierte Bedingungsregel `@when` und die verkettete Bedingungsregel `@else` hinzugefügt werden. Diese beiden At-Regeln werden derzeit nicht unterstützt.

## Referenz

### At-Regeln

- {{cssxref("@media")}}
- {{cssxref("@supports")}}

> [!NOTE]
> Das CSS-Bedingungsregeln-Modul führt zwei At-Regeln ein, die noch nicht implementiert sind: `@else` und `@when`.

### Funktionen

- [`font-tech()`](/de/docs/Web/CSS/@supports#font-tech)
- [`font-format()`](/de/docs/Web/CSS/@supports#font-format)
- [`selector()`](/de/docs/Web/CSS/@supports#function_syntax)
- [`supports()`](/de/docs/Web/CSS/@import#supports-condition)

> [!NOTE]
> Das CSS-Bedingungsregeln-Modul führt eine CSS-Funktion ein, die noch nicht implementiert ist: `media()`.

### Datentypen

- [`<media-query>`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax)
- [`<supports-condition>`](/de/docs/Web/CSS/@import#importing_css_rules_conditional_on_feature_support)
- `<supports-feature>` (siehe [`supports()`](/de/docs/Web/CSS/@import#supports-condition))

### Schnittstellen

- {{domxref("CSSConditionRule")}}
- {{domxref("CSSMediaRule")}}
- {{domxref("CSSSupportsRule")}}
- {{domxref("CSS.supports_static", "supports()")}} Methode

### Begriffe und Glossary-Definitionen

- {{glossary("media/CSS", "Medien")}}
- Support-Abfrage (siehe [Feature-Abfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries))

## Leitfäden

- [Verwendung von CSS-Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)

  - : Selektives Anwenden von CSS-Regeln nach Überprüfung der Browserunterstützung für die angegebenen Eigenschaften und Werte über Feature-Abfragen.

- [Verwendung von CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)

  - : Einführung in Medienabfragen, ihre Syntax sowie die Operatoren und Medienfunktionen, die zum Erstellen von Medienabfrage-Ausdrücken verwendet werden.

- [Unterstützung älterer Browser: Feature-Abfragen](/de/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers#feature_queries)

  - : Wie man Feature-Abfragen verwendet, um CSS basierend auf dem Unterstützungsniveau des Browsers für Webfunktionen anzuwenden.

- [Browser-Feature-Erkennung: CSS `@supports`](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection#supports)

  - : Ein Überblick über JavaScript- und CSS-Feature-Erkennung, einschließlich CSS `@supports`.

## Verwandte Konzepte

- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul

  - {{cssxref("@import")}} At-Regel

- [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) Modul

  - [`<media-feature>`](/de/docs/Web/CSS/@media#media_features)
  - [`<media-type>`](/de/docs/Web/CSS/@media#media_types)
  - [`<media-condition>`](/de/docs/Web/CSS/@media#logical_operators)
  - [`<media-query-list>`](/de/docs/Web/SVG/Attribute/media)
  - [CSS logische Operatoren](/de/docs/Web/CSS/@media#logical_operators) (`not`, `or`, und `and`)

- [CSS-Einschränkung](/de/docs/Web/CSS/CSS_containment)

  - {{cssxref("@container")}} At-Regel

- [CSSOM-Ansicht](/de/docs/Web/CSS/CSSOM_view) Modul

  - {{domxref("CSS")}} API
  - {{domxref("CSSGroupingRule")}} API
  - {{domxref("MediaQueryList")}} API
  - {{domxref("CSSRule")}} API
  - {{domxref("MediaList")}} Schnittstelle
    - {{domxref("MediaList.mediaText")}} Eigenschaft

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul

  - {{cssxref("@charset")}} Deklaration
  - {{cssxref("at-rule")}} Begriff
  - [`invalid`](/de/docs/Web/CSS/CSS_syntax/Error_handling) Begriff
  - {{glossary("parse")}} Begriff
  - [Stilregel](/de/docs/Web/API/CSSStyleRule) Begriff

- [CSS-Namensräume](/de/docs/Web/CSS/CSS_namespaces) Modul

  - {{cssxref("@namespace")}} At-Regel

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) Modul
- [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) Modul
- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
