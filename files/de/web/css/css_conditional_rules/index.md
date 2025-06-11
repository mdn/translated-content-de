---
title: CSS-Bedingungsregeln
slug: Web/CSS/CSS_conditional_rules
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{CSSRef}}

Das Modul **CSS-Bedingungsregeln** definiert CSS-Media- und Support-Abfragen, die es ermöglichen, Stile nur dann anzuwenden, wenn bestimmte Bedingungen erfüllt sind. Die in diesem Modul definierten Bedingungsregeln basieren auf den Fähigkeiten des Geräts, des Benutzeragents und des Ansichtsfensters. Mit Bedingungsregeln können Sie CSS-Stile basierend auf Abfragewerten oder Browser- und Gerätefunktionen unabhängig vom darzustellenden Dokument anpassen.

Die ersten CSS-Bedingungsregeln waren [Medientypen](/de/docs/Web/CSS/@media#media_types), die das vorgesehene Zielmedium für die verknüpften Stile angaben, zum Beispiel `screen` oder `print`. Diese wurden als Wert der `media`-Attribute der HTML-Elemente {{HTMLElement("link")}} und {{HTMLElement("style")}} oder als kommagetrennte Liste von Medientypen innerhalb einer {{cssxref("@import")}}-Anweisung oder At-Regel festgelegt. Die Möglichkeit, CSS-Regeln bedingt anzuwenden, wurde seit den Implementierungen von CSS 2.1 und HTML 4.01, die bedingte Anfragen auf wenige Medientypen beschränkten, erheblich erweitert.

CSS-Bedingungsregeln umfassen jetzt Funktionsabfragen; die At-Regel `@supports` ermöglicht es, CSS-Stile basierend auf den CSS-Fähigkeiten eines Benutzeragents zu bestimmen. Zusätzliche Bedingungen umfassen, welche Selektoren, Schriftformate und Schrifttechnologien unterstützt werden.

Das CSS-Bedingungsregeln-Modul erweitert auch `@media`, um das Verschachteln von At-Regeln zu ermöglichen, wobei das verwandte Modul [CSS-Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries) ungenutzte Medientypen entfernt und viele Medienmerkmale und -bedingungen hinzufügt, die gezielt angesprochen werden können.

Das [Modul CSS-Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) definiert ähnliche Bedingungsregeln, die jedoch auf dem übergeordneten Element anstatt auf dem Ansichtsfenster basieren.

Es gibt Pläne, mögliche Anfragen weiter zu erweitern, indem die verallgemeinerte Bedingungsregel `@when` und die verkettete Bedingungsregel `@else` hinzugefügt werden. Diese beiden At-Regeln werden noch nicht unterstützt.

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
> Das CSS-Bedingungsregeln-Modul führt zwei At-Regeln ein, die noch nicht implementiert wurden: `@else` und `@when`.

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
- Container relative `\<length>`-Einheiten
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
- Supports-Abfrage (siehe [Funktionsabfrage](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries))

## Leitfäden

- [CSS-Funktionsabfragen verwenden](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)

  - : Selektives Anwenden von CSS-Regeln nach Überprüfung der Browserunterstützung für die angegebenen Eigenschaften und Werte über Funktionsabfragen.

- [CSS-Media-Abfragen verwenden](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)

  - : Einführung in Media-Abfragen, deren Syntax und die Operatoren und Medienmerkmale, die zur Erstellung von Media-Abfrageausdrücken verwendet werden.

- [Unterstützung älterer Browser: Funktionsabfragen](/de/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers#feature_queries)

  - : Wie man Funktionsabfragen verwendet, um CSS basierend auf dem Unterstützungsgrad des Browsers für Webfunktionen zu gestalten.

- [Browser-Funktionsdetektion: CSS `@supports`](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection#supports)

  - : Ein Blick auf JavaScript- und CSS-Funktionsdetektion, einschließlich CSS `@supports`.

- [Scroll-Zustandsabfragen für Container verwenden](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)

  - : Verwendung von Scroll-Zustandsabfragen für Container, mit einem Beispiel für jeden Typ.

## Verwandte Konzepte

- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul

  - {{cssxref("@import")}} At-Regel

- [CSS-Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries) Modul

  - [`<media-feature>`](/de/docs/Web/CSS/@media#media_features)
  - [`<media-type>`](/de/docs/Web/CSS/@media#media_types)
  - [`<media-condition>`](/de/docs/Web/CSS/@media#logical_operators)
  - [`<media-query-list>`](/de/docs/Web/SVG/Reference/Attribute/media)
  - [CSS-logische Operatoren](/de/docs/Web/CSS/@media#logical_operators) (`not`, `or` und `and`)

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

- [CSS-Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) Modul
- [CSS-Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries) Modul
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
