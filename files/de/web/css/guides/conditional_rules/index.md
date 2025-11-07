---
title: CSS bedingte Regeln
short-title: Bedingte Regeln
slug: Web/CSS/Guides/Conditional_rules
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das Modul **CSS bedingte Regeln** definiert CSS-Medien- und Unterstützungsabfragen, mit denen Sie Stile definieren können, die nur angewendet werden, wenn bestimmte Bedingungen erfüllt sind. Die in diesem Modul definierten bedingten Regeln basieren auf Geräte-, Benutzeragenten- und Viewport-Funktionen. Mit bedingten Regeln können Sie CSS-Stile basierend auf Abfragewerten oder Browser- und Gerätefunktionen gezielt anwenden, unabhängig von dem Dokument, das gerendert wird.

Die ersten CSS-bedingten Regeln waren [Medientypen](/de/docs/Web/CSS/Reference/At-rules/@media#media_types), die das beabsichtigte Zielmedium für die verknüpften Stile spezifizieren, zum Beispiel `screen` oder `print`. Diese wurden als Wert der HTML-{{HTMLElement("link")}} und {{HTMLElement("style")}}-Elemente der `media`-Attribute oder als kommaseparierte Liste von Medientypen innerhalb einer {{cssxref("@import")}}-Anweisung oder At-Regel festgelegt. Die Möglichkeit, CSS-Regeln bedingt anzuwenden, wurde seit den CSS 2.1- und HTML 4.01-Implementierungen, die bedingte Abfragen auf wenige Medientypen beschränkten, erheblich erweitert.

CSS-bedingte Regeln umfassen jetzt Funktionsabfragen; die `@supports`-At-Regel ermöglicht es, CSS-Stile basierend auf den CSS-Fähigkeiten eines Benutzeragenten anzuwenden. Zusätzliche Bedingungen umfassen, welche Selektoren, Schriftformate und Schrifttechnologien unterstützt werden.

Das CSS-bedingte Regel-Modul erweitert auch `@media`, um das Verschachteln von At-Regeln zu ermöglichen, wobei das verwandte [CSS-Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries)-Modul nicht verwendete Medientypen entfernt und viele Medienfunktionen und Bedingungen hinzufügt, die gezielt werden können.

Das [CSS-Containerabfragen-Modul](/de/docs/Web/CSS/Guides/Containment/Container_queries) definiert ähnliche bedingte Regeln, die jedoch auf dem übergeordneten Element und nicht auf dem Viewport basieren.

Es gibt Pläne, mögliche Abfragen weiter zu erweitern, indem die verallgemeinerte bedingte Regel `@when` und die verkettete bedingte Regel `@else` hinzugefügt werden. Diese beiden At-Regeln werden derzeit jedoch noch nicht unterstützt.

## Referenz

### Eigenschaften

- {{cssxref("container")}}
- {{cssxref("container-name")}}
- {{cssxref("container-type")}}

### At-Regeln und Deskriptoren

- {{cssxref("@container")}}
- {{cssxref("@media")}}
- {{cssxref("@supports")}}

Das CSS-bedingte Regel-Modul führt auch die `@else` und `@when` At-Regeln ein. Derzeit unterstützen keine Browser diese Funktionen.

### Funktionen

- [`style()`](/de/docs/Web/CSS/Reference/At-rules/@container#container_style_queries)
- [`font-tech()`](/de/docs/Web/CSS/Reference/At-rules/@supports#font-tech)
- [`font-format()`](/de/docs/Web/CSS/Reference/At-rules/@supports#font-format)
- [`selector()`](/de/docs/Web/CSS/Reference/At-rules/@supports#function_syntax)
- [`supports()`](/de/docs/Web/CSS/Reference/At-rules/@import#supports-condition)

Das CSS-bedingte Regel-Modul führt auch eine `media()` CSS-Funktion ein. Derzeit unterstützen keine Browser diese Funktion.

### Datentypen

- [`<container-name>`](/de/docs/Web/CSS/Reference/At-rules/@container#container-name)
- [`<style-feature>`](/de/docs/Web/CSS/Reference/At-rules/@container#container_style_queries)
- Container-relative `<length>` Einheiten [Container relative `<length>` units](/de/docs/Web/CSS/Reference/Values/length#container_query_length_units)
- [`<media-query>`](/de/docs/Web/CSS/Guides/Media_queries/Using#syntax)
- [`<supports-condition>`](/de/docs/Web/CSS/Reference/At-rules/@import#importing_css_rules_conditional_on_feature_support)
- `<supports-feature>` (siehe [`supports()`](/de/docs/Web/CSS/Reference/At-rules/@import#supports-condition))

### Schnittstellen

- [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule)
- [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule)
- [`CSSSupportsRule`](/de/docs/Web/API/CSSSupportsRule)
- [`supports()`](/de/docs/Web/API/CSS/supports_static) Methode

### Begriffe und Glossar-Definitionen

- {{Glossary("media/CSS", "Medien")}}
- Unterstützungsabfrage (siehe [Funktionsabfrage](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries))

## Leitfäden

- [Verwendung von CSS-Funktionsabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
  - : Selektives Anwenden von CSS-Regeln nach Überprüfung der Browserunterstützung für die angegebenen Eigenschaften und Werte über Funktionsabfragen.

- [Verwendung von CSS-Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries/Using)
  - : Einführung in Medienabfragen, deren Syntax und die Operatoren und Medienfunktionen, die zur Konstruktion von Medienabfrageausdrücken verwendet werden.

- [Unterstützung älterer Browser: Funktionsabfragen](/de/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers#feature_queries)
  - : Wie man Funktionsabfragen verwendet, um CSS basierend auf dem Unterstützungsniveau des Browsers für Webfeatures zu schalten.

- [Browser-Feature-Erkennung: CSS `@supports`](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection#supports)
  - : Ein Blick auf JavaScript- und CSS-Feature-Erkennung, einschließlich CSS `@supports`.

- [Verwendung von Container-Scroll-State-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
  - : Verwendung von Container-Scroll-State-Abfragen mit einem Beispiel für jeden Typ.

## Verwandte Konzepte

- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade) Modul
  - {{cssxref("@import")}} At-Regel

- [CSS-Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries) Modul
  - [`<media-feature>`](/de/docs/Web/CSS/Reference/At-rules/@media#media_features)
  - [`<media-type>`](/de/docs/Web/CSS/Reference/At-rules/@media#media_types)
  - [`<media-condition>`](/de/docs/Web/CSS/Reference/At-rules/@media#logical_operators)
  - [`<media-query-list>`](/de/docs/Web/SVG/Reference/Attribute/media)
  - [CSS logische Operatoren](/de/docs/Web/CSS/Reference/At-rules/@media#logical_operators) (`not`, `or` und `and`)

- [CSSOM-Ansicht](/de/docs/Web/CSS/Guides/CSSOM_view) Modul
  - [`CSS`](/de/docs/Web/API/CSS) API
  - [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) API
  - [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) API
  - [`CSSRule`](/de/docs/Web/API/CSSRule) API
  - [`MediaList`](/de/docs/Web/API/MediaList) Schnittstelle
    - [`MediaList.mediaText`](/de/docs/Web/API/MediaList/mediaText) Eigenschaft

- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax) Modul
  - {{cssxref("@charset")}} Deklaration
  - {{cssxref("at-rule")}} Begriff
  - [`ungültig`](/de/docs/Web/CSS/Guides/Syntax/Error_handling) Begriff
  - {{Glossary("parse", "parsen")}} Begriff
  - [Stilregel](/de/docs/Web/API/CSSStyleRule) Begriff

- [CSS-Namespace](/de/docs/Web/CSS/Guides/Namespaces) Modul
  - {{cssxref("@namespace")}} At-Regel

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Containerabfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries) Modul
- [CSS-Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries) Modul
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade) Modul
