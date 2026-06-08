---
title: CSS-Einschluss
short-title: Containment
slug: Web/CSS/Guides/Containment
l10n:
  sourceCommit: 2ce88199869b63f8da3bbeafd899400f7579cce9
---

Das **CSS Containment**-Modul definiert Einschluss- und Containeranfragen.

Einschluss ermöglicht die Isolierung von Seitenteilen vom Rest des DOM. Der Browser kann dann die Leistung verbessern, indem er das Rendering dieser unabhängigen Teile optimiert.

Containeranfragen sind ähnlich wie Dimensionen [Media Queries](/de/docs/Web/CSS/Guides/Media_queries), außer dass die Anfragen auf den Dimensionen eines bestimmten Containerelements basieren, das als [Containment-Kontext](/de/docs/Web/CSS/Guides/Containment/Container_queries#naming_containment_contexts) definiert ist, anstatt auf den Dimensionen des Viewports. Containeranfragen ermöglichen das Abfragen der Größe eines Containers, seiner Eigenschaften, seiner Eigenschaftswerte oder sogar nur seines zugewiesenen {{cssxref("container-name")}}, um conditionale CSS-Stile anzuwenden. Beim Anwenden dieser conditionellen Stile können Sie Längeneinheiten für Containeranfragen verwenden, die Längen relativ zu den Dimensionen des Anfragecontainers angeben. Zusätzliche Eigenschaften werden definiert, um ein bestimmtes Element als Anfragecontainer zu etablieren und ihm einen spezifischen Namen zu geben.

## Referenz

### Eigenschaften

- {{cssxref("contain")}}
- {{cssxref("content-visibility")}}

### Ereignisse

- [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)

### Schnittstellen

- [`ContentVisibilityAutoStateChangeEvent`](/de/docs/Web/API/ContentVisibilityAutoStateChangeEvent)
  - [`skipped`](/de/docs/Web/API/ContentVisibilityAutoStateChangeEvent/skipped) Eigenschaft
- [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule)
  - [`CSSContainerRule.containerName`](/de/docs/Web/API/CSSContainerRule/containerName)
  - [`CSSContainerRule.containerQuery`](/de/docs/Web/API/CSSContainerRule/containerQuery)

## Leitfäden

- [CSS-Containeranfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
  - : Ein Leitfaden zur Verwendung von Containeranfragen mit `@container`, einschließlich der Benennung von Containment-Kontexten.

- [Verwendung von CSS-Einschluss](/de/docs/Web/CSS/Guides/Containment/Using)
  - : Beschreibt die grundlegenden Ziele des CSS-Einschlusses und wie man `contain` und `content-visibility` für ein besseres Benutzererlebnis einsetzt.

- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
  - : Ein Leitfaden zum Schreiben von Containergrößen- und Stilabfragen mit `@container`, einschließlich Stilabfragen für benutzerdefinierte Eigenschaften, Abfragesyntax und Namen sowie das Verschachteln von Containeranfragen.

## Verwandte Konzepte

- [Layout und der enthaltene Block](/de/docs/Web/CSS/Guides/Display/Containing_block)
- [Blockformatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context)

- [CSS-Bedingungsregeln](/de/docs/Web/CSS/Guides/Conditional_rules) Modul
  - {{cssxref("@container")}} At-Regel
  - {{CSSxRef("container")}} Eigenschaft
  - {{CSSxRef("container-name")}} Eigenschaft
  - {{CSSxRef("container-type")}} Eigenschaft

- [CSS-Media-Queries](/de/docs/Web/CSS/Guides/Media_queries) Modul
  - {{cssxref("@media")}} At-Regel
  - [CSS-logische Operatoren](/de/docs/Web/CSS/Reference/At-rules/@media#logical_operators) (`not`, `or` und `and`)

- [CSS-Übergänge](/de/docs/Web/CSS/Guides/Transitions) Modul
  - {{cssxref("@starting-style")}} At-Regel
  - {{cssxref("transition-behavior")}} Eigenschaft

- [CSS-Box-Größenanpassung](/de/docs/Web/CSS/Guides/Box_sizing) Modul
  - {{CSSxRef("aspect-ratio")}} Eigenschaft
  - {{cssxref("contain-intrinsic-size")}} Kurzschriebweise
  - {{CSSxRef("contain-intrinsic-inline-size")}} Eigenschaft
  - {{CSSxRef("contain-intrinsic-block-size")}} Eigenschaft
  - {{CSSxRef("contain-intrinsic-width")}} Eigenschaft
  - {{CSSxRef("contain-intrinsic-height")}} Eigenschaft

- [CSS-Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles) Modul
  - [Verwendung von CSS-Zählern](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters) Leitfaden

- [CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting) Modul
  - [CSS-Verschachtelung von At-Regeln](/de/docs/Web/CSS/Guides/Nesting/At-rules) Leitfaden

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Verwendung von Feature-Queries](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
- [Verwendung von CSS-Media-Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
- {{cssxref("@supports")}} At-Regel
