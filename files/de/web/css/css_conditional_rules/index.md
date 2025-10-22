---
title: CSS-Bedingungsregeln
slug: Web/CSS/CSS_conditional_rules
l10n:
  sourceCommit: 016ecd8ccaed866c4d8d995fb18379c6e48f3b50
---

Das **CSS-Bedingungsregeln**-Modul definiert CSS-Medien- und Support-Abfragen und ermöglicht es Ihnen, Stile zu definieren, die nur angewendet werden, wenn bestimmte Bedingungen erfüllt sind. Die im Modul definierten Bedingungsregeln basieren auf den Fähigkeiten von Geräten, Benutzeragenten und Ansichtsfenstern (Viewports). Mit Bedingungsregeln können Sie CSS-Stile basierend auf Abfragewerten oder auf Browser- und Gerätefunktionen festlegen, unabhängig vom darzustellenden Dokument.

Die ersten CSS-Bedingungsregeln waren [Medientypen](/de/docs/Web/CSS/@media#media_types), die das beabsichtigte Zielmedium für die verknüpften Stile spezifizierten, zum Beispiel `screen` oder `print`. Diese wurden als Wert der `media`-Attribute der HTML {{HTMLElement("link")}}- und {{HTMLElement("style")}}-Elemente gesetzt oder als kommagetrennte Liste von Medientypen innerhalb eines {{cssxref("@import")}}-Statements oder einer At-Regel. Die Möglichkeit, CSS-Regeln bedingt anzuwenden, wurde seit den Implementierungen von CSS 2.1 und HTML 4.01, die konditionale Abfragen auf wenige Medientypen beschränkten, erheblich erweitert.

CSS-Bedingungsregeln umfassen jetzt Funktionsabfragen; die `@supports` At-Regel ermöglicht es, CSS-Stile basierend auf den CSS-Fähigkeiten eines Benutzeragenten zu zielen. Zusätzliche Bedingungen beinhalten, welcher Selektor, welche Schriftformate und welche Schrifttechnologien unterstützt werden.

Das CSS-Bedingungsregeln-Modul erweitert auch `@media`, um das Verschachteln von At-Regeln zu ermöglichen, wobei das verwandte [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) Modul ungenutzte Medientypen entfernt und viele gezielte Medienmerkmale und -bedingungen hinzufügt.

Das [CSS-Containerabfragen-Modul](/de/docs/Web/CSS/CSS_containment/Container_queries) definiert ähnliche Bedingungsregeln, allerdings basierend auf dem übergeordneten Element und nicht auf dem Ansichtsfenster.

Es gibt Pläne, die möglichen Abfragen weiter zu erweitern, indem die verallgemeinerte Bedingungsregel `@when` und die verkettete Bedingungsregel `@else` hinzugefügt werden. Diese beiden At-Regeln werden derzeit nicht unterstützt.

## Referenz

### Eigenschaften

- {{cssxref("container")}}
- {{cssxref("container-name")}}
- {{cssxref("container-type")}}

### At-Regeln und Deskriptoren

- {{cssxref("@container")}}
- {{cssxref("@media")}}
- {{cssxref("@supports")}}

Das CSS-Bedingungsregeln-Modul führt auch die `@else` und `@when` At-Regeln ein. Derzeit unterstützen keine Browser diese Funktionen.

### Funktionen

- [`style()`](/de/docs/Web/CSS/@container#container_style_queries)
- [`font-tech()`](/de/docs/Web/CSS/@supports#font-tech)
- [`font-format()`](/de/docs/Web/CSS/@supports#font-format)
- [`selector()`](/de/docs/Web/CSS/@supports#function_syntax)
- [`supports()`](/de/docs/Web/CSS/@import#supports-condition)

Das CSS-Bedingungsregeln-Modul führt auch eine `media()` CSS-Funktion ein. Derzeit unterstützen keine Browser diese Funktion.

### Datentypen

- [`<container-name>`](/de/docs/Web/CSS/@container#container-name)
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

### Begriffe und Glossar-Definitionen

- {{Glossary("media/CSS", "Media")}}
- Unterstützungsabfrage (siehe [Funktionsabfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries))

## Leitfäden

- [Verwendung von CSS-Funktionsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
  - : Selektives Anwenden von CSS-Regeln nach Überprüfung der Browserunterstützung für die angegebenen Eigenschaften und Werte über Funktionsabfragen.

- [Verwendung von CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
  - : Einführung in Medienabfragen, deren Syntax und die Operatoren und Medienmerkmale, die zur Konstruktion von Medienabfrage-Ausdrücken verwendet werden.

- [Unterstützung älterer Browser: Funktionsabfragen](/de/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers#feature_queries)
  - : Anleitung zur Verwendung von Funktionsabfragen, um CSS basierend auf dem Unterstützungsniveau des Browsers für Webfunktionen zu zielen.

- [Browser-Funktionserkennung: CSS `@supports`](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection#supports)
  - : Ein Überblick über JavaScript- und CSS-Funktionserkennung, einschließlich CSS `@supports`.

- [Verwendung von Containerabfragen für den Scroll-Zustand](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
  - : Verwendung von Containerabfragen für den Scroll-Zustand, mit einem Beispiel für jeden Typ.

## Verwandte Konzepte

- [CSS Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
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
  - [Stilregel](/de/docs/Web/API/CSSStyleRule) Begriff

- [CSS-Namensräume](/de/docs/Web/CSS/CSS_namespaces) Modul
  - {{cssxref("@namespace")}} At-Regel

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) Modul
- [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) Modul
- [CSS Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
