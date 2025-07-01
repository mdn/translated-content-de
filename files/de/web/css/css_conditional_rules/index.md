---
title: CSS-Bedingungsregeln
slug: Web/CSS/CSS_conditional_rules
l10n:
  sourceCommit: 466ca1db767535c1aa9984b4e6c0db41b3a53475
---

{{CSSRef}}

Das **CSS-Bedingungsregeln**-Modul definiert CSS-Medien- und unterstützende Abfragen, die es Ihnen ermöglichen, Styles festzulegen, die nur angewendet werden, wenn bestimmte Bedingungen erfüllt sind. Die im Modul definierten bedingten Regeln basieren auf den Fähigkeiten von Gerät, Benutzeragent und Ansichtsfenster. Mit bedingten Regeln können Sie CSS-Styles basierend auf Abfragewerten oder auf Browser- und Gerätefunktionen anwenden, unabhängig von dem Dokument, das gerendert wird.

Die ersten CSS-Bedingungsregeln waren [Medientypen](/de/docs/Web/CSS/@media#media_types), die das beabsichtigte Zielmedium für die verknüpften Styles spezifizierten, zum Beispiel `screen` oder `print`. Diese wurden als Wert der HTML {{HTMLElement("link")}} und {{HTMLElement("style")}} Elemente `media` Attribute oder als kommagetrennte Liste von Medientypen innerhalb eines {{cssxref("@import")}} Statements oder At-Regeln festgelegt. Die Fähigkeit, CSS-Regeln bedingt anzuwenden, wurde seit den Implementierungen von CSS 2.1 und HTML 4.01, die bedingte Abfragen auf wenige Medientypen beschränkten, erheblich erweitert.

CSS-Bedingungsregeln umfassen jetzt Funktionsabfragen; die `@supports` At-Regel ermöglicht die Zielsetzung von CSS-Styles basierend auf den CSS-Fähigkeiten eines Benutzeragenten. Zusätzliche Bedingungen umfassen, welche Selektoren, Schriftartenformate und Schriftartentechnologien unterstützt werden.

Das CSS-Bedingungsregeln-Modul erweitert auch `@media`, um das Schachteln von At-Regeln zu ermöglichen. Das verwandte [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) Modul entfernt nicht benötigte Medientypen und fügt viele Medieneigenschaften und -bedingungen hinzu, die gezielt verwendet werden können.

Das [CSS-Containerabfragen-Modul](/de/docs/Web/CSS/CSS_containment/Container_queries) definiert ähnliche bedingte Regeln, basierend jedoch auf dem übergeordneten Element statt dem Ansichtsfenster.

Es gibt Pläne, mögliche Abfragen weiter zu erweitern, indem die generalisierte bedingte Regel `@when` und die verkettete bedingte Regel `@else` hinzugefügt werden. Diese beiden At-Regeln werden derzeit nicht unterstützt.

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
> Das CSS-Bedingungsregeln-Modul führt zwei At-Regeln ein, die noch nicht implementiert sind: `@else` und `@when`.

### Funktionen

- [`style()`](/de/docs/Web/CSS/@container#container_style_queries)
- [`font-tech()`](/de/docs/Web/CSS/@supports#font-tech)
- [`font-format()`](/de/docs/Web/CSS/@supports#font-format)
- [`selector()`](/de/docs/Web/CSS/@supports#function_syntax)
- [`supports()`](/de/docs/Web/CSS/@import#supports-condition)

> [!NOTE]
> Das CSS-Bedingungsregeln-Modul führt eine CSS-Funktion ein, die noch nicht implementiert ist: `media()`.

### Datentypen

- [`<container-name>`](/de/docs/Web/CSS/@container#container-name)
- [`<style-feature>`](/de/docs/Web/CSS/@container#container_style_queries)
- Container-relative `<length>` Einheiten
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
- Unterstützungsabfrage (siehe [Funktionsabfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries))

## Leitfäden

- [Verwendung von CSS-Funktionsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
  - : Selektives Anwenden von CSS-Regeln nach Überprüfung der Browserunterstützung für die angegebenen Eigenschaften und Werte mittels Funktionsabfragen.

- [Verwendung von CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
  - : Einführung in Medienabfragen, deren Syntax und die Operatoren und Medieneigenschaften, die zur Konstruktion von Medienabfrage-Ausdrücken verwendet werden.

- [Unterstützung älterer Browser: Funktionsabfragen](/de/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers#feature_queries)
  - : Wie man Funktionsabfragen verwendet, um CSS basierend auf dem Unterstützungsgrad des Browsers für Webfunktionen zu zielen.

- [Browser-Feature-Erkennung: CSS `@supports`](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection#supports)
  - : Ein Blick auf die Erkennung von JavaScript- und CSS-Features, einschließlich CSS `@supports`.

- [Verwendung von Container-Scroll-Status-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
  - : Verwendung von Container-Scroll-Status-Abfragen mit einem Beispiel für jede Art.

## Verwandte Konzepte

- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
  - {{cssxref("@import")}} At-Regel

- [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) Modul
  - [`<media-feature>`](/de/docs/Web/CSS/@media#media_features)
  - [`<media-type>`](/de/docs/Web/CSS/@media#media_types)
  - [`<media-condition>`](/de/docs/Web/CSS/@media#logical_operators)
  - [`<media-query-list>`](/de/docs/Web/SVG/Reference/Attribute/media)
  - [CSS-logische Operatoren](/de/docs/Web/CSS/@media#logical_operators) (`not`, `or`, und `and`)

- [CSSOM Ansicht](/de/docs/Web/CSS/CSSOM_view) Modul
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
  - {{cssxref("@namespace")}} At-Regel

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) Modul
- [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) Modul
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
