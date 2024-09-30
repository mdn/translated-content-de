---
title: CSS bedingte Regeln
slug: Web/CSS/CSS_conditional_rules
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{CSSRef}}

Das Modul der **CSS-bedingten Regeln** definiert CSS-Medien- und Unterstützungsabfragen, die Ihnen ermöglichen, Stile zu definieren, die nur angewendet werden, wenn bestimmte Bedingungen erfüllt sind. Die in diesem Modul definierten bedingten Regeln basieren auf Geräte-, User-Agent- und Viewport-Fähigkeiten. Mit bedingten Regeln können Sie CSS-Stile basierend auf Abfragewerten oder Browser- und Gerätefunktionen anwenden, unabhängig vom gerenderten Dokument.

Die ersten CSS-bedingten Regeln waren [Medientypen](/de/docs/Web/CSS/@media#media_types), die das beabsichtigte Zielmedium für die verknüpften Stile spezifizierten, zum Beispiel `screen` oder `print`. Diese wurden als Wert der `media`-Attribute der HTML-Elemente {{HTMLElement("link")}} und {{HTMLElement("style")}} oder als kommagetrennte Liste von Medientypen innerhalb einer {{cssxref("@import")}}-Anweisung oder Regel festgelegt. Die Fähigkeit, CSS-Regeln bedingt anzuwenden, wurde seit den CSS 2.1- und HTML 4.01-Implementierungen, die bedingte Abfragen auf wenige Medientypen beschränkten, erheblich erweitert.

CSS-bedingte Regeln umfassen jetzt Funktionsabfragen; die `@supports`-Regel ermöglicht es, CSS-Stile basierend auf den CSS-Fähigkeiten eines User-Agent zu zielen. Zusätzliche Bedingungen umfassen unterstützte Selektoren, Schriftformate und Schrifttechniken.

Das Modul der CSS-bedingten Regeln erweitert auch `@media`, um die Verschachtelung von Regeln zu ermöglichen, wobei das verwandte [Modul der CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) ungenutzte Medientypen entfernt und viele Medienfunktionen und Bedingungen hinzufügt, die gezielt werden können.

Das [Modul der CSS-Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) definiert ähnliche bedingte Regeln, die jedoch auf dem übergeordneten Element basieren statt auf dem Viewport.

Es gibt Pläne, die möglichen Abfragen weiter zu erweitern, indem die allgemeine bedingte Regel `@when` und die verkettete bedingte Regel `@else` hinzugefügt werden. Diese beiden Regeln werden derzeit nicht unterstützt.

## Referenz

### Regeln

- {{cssxref("@media")}}
- {{cssxref("@supports")}}

> [!NOTE]
> Das Modul der CSS-bedingten Regeln führt zwei Regeln ein, die noch nicht implementiert wurden: `@else` und `@when`.

### Funktionen

- [`font-tech()`](/de/docs/Web/CSS/@supports#font-tech)
- [`font-format()`](/de/docs/Web/CSS/@supports#font-format)
- [`selector()`](/de/docs/Web/CSS/@supports#function_syntax)
- [`supports()`](/de/docs/Web/CSS/@import#supports-condition)

> [!NOTE]
> Das Modul der CSS-bedingten Regeln führt eine CSS-Funktion ein, die noch nicht implementiert wurde: `media()`.

### Daten Typen

- [`<media-query>`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax)
- [`<supports-condition>`](/de/docs/Web/CSS/@import#importing_css_rules_conditional_on_feature_support)
- `<supports-feature>` (siehe [`supports()`](/de/docs/Web/CSS/@import#supports-condition))

### Schnittstellen

- [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule)
- [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule)
- [`CSSSupportsRule`](/de/docs/Web/API/CSSSupportsRule)
- Methode [`supports()`](/de/docs/Web/API/CSS/supports_static)

### Begriffe und Glossareinträge

- [Media](/de/docs/Glossary/media/CSS)
- Unterstützungsabfrage (siehe [Funktionsabfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries))

## Leitfäden

- [Verwendung von CSS-Funktionsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)

  - : Selektive Anwendung von CSS-Regeln nach Überprüfung der Browserunterstützung für die angegebenen Eigenschaften und Werte mittels Funktionsabfragen.

- [Verwendung von CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)

  - : Einführung in Medienabfragen, ihre Syntax und die Operatoren und Medienfunktionen, die zur Erstellung von Medienausdrücken verwendet werden.

- [Unterstützung älterer Browser: Funktionsabfragen](/de/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers#feature_queries)

  - : Anleitung zur Nutzung von Funktionsabfragen, um CSS basierend auf dem Niveau der Browserunterstützung für Web-Funktionen zu verwenden.

- [Browserfunktions-Erkennung: CSS `@supports`](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection#supports)

  - : Ein Blick auf Javascript und CSS-Funktionserkennung, einschließlich CSS `@supports`.

## Verwandte Konzepte

- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade)-Modul

  - {{cssxref("@import")}}-Regel

- [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries)-Modul

  - [`<media-feature>`](/de/docs/Web/CSS/@media#media_features)
  - [`<media-type>`](/de/docs/Web/CSS/@media#media_types)
  - [`<media-condition>`](/de/docs/Web/CSS/@media#logical_operators)
  - [`<media-query-list>`](/de/docs/Web/SVG/Attribute/media)
  - [Logische Operatoren in CSS](/de/docs/Web/CSS/@media#logical_operators) (`not`, `or`, und `and`)

- [CSS-Containment](/de/docs/Web/CSS/CSS_containment)

  - {{cssxref("@container")}}-Regel

- [CSSOM-Ansicht](/de/docs/Web/CSS/CSSOM_view)-Modul

  - [`CSS`](/de/docs/Web/API/CSS)-API
  - [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule)-API
  - [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-API
  - [`CSSRule`](/de/docs/Web/API/CSSRule)-API
  - [`MediaList`](/de/docs/Web/API/MediaList)-Schnittstelle
    - [`MediaList.mediaText`](/de/docs/Web/API/MediaList/mediaText)-Eigenschaft

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax)-Modul

  - {{cssxref("@charset")}}-Deklaration
  - {{cssxref("at-rule")}}-Begriff
  - [`invalid`](/de/docs/Web/CSS/CSS_syntax/Error_handling)-Begriff
  - [parsen](/de/docs/Glossary/parse)-Begriff
  - [Stil-Regel](/de/docs/Web/API/CSSStyleRule)-Begriff

- [CSS-Namespace](/de/docs/Web/CSS/CSS_namespaces)-Modul

  - {{cssxref("@namespace")}}-Regel

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)-Modul
- [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries)-Modul
- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade)-Modul
