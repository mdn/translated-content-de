---
title: CSS-Einschränkung
short-title: Containment
slug: Web/CSS/Guides/Containment
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSS Containment** Modul definiert Einschränkungen und Container-Abfragen.

Einschränkungen ermöglichen die Isolierung von Teilbäumen einer Seite vom Rest des DOMs. Der Browser kann dann die Leistung verbessern, indem er die Darstellung dieser unabhängigen Teile optimiert.

Container-Abfragen sind ähnlich wie Dimensionen-[Media Queries](/de/docs/Web/CSS/Guides/Media_queries), außer dass die Abfragen auf den Dimensionen eines bestimmten Container-Elements basieren, das als _Containment Context_ definiert ist, anstatt auf den Dimensionen des Viewports. Container-Abfragen ermöglichen das Abfragen von Größe, Eigenschaften und Eigenschaftswerten eines Containers, um CSS-Stile bedingt anzuwenden. Bei der Anwendung dieser bedingten Stile können Sie Containereinheitslängen verwenden, die Längen relativ zu den Dimensionen des Abfragecontainers angeben. Zusätzliche Eigenschaften werden definiert, um ein bestimmtes Element als Abfragecontainer zu etablieren und ihm einen bestimmten Namen zu geben.

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

- [CSS Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
  - : Ein Leitfaden zur Verwendung von Container-Abfragen mit `@container`, einschließlich der Benennung von Containment-Kontexten.

- [Verwendung von CSS-Einschränkungen](/de/docs/Web/CSS/Guides/Containment/Using)
  - : Beschreibt die grundlegenden Ziele der CSS-Einschränkung und wie `contain` und `content-visibility` für eine bessere Benutzererfahrung genutzt werden können.

- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
  - : Ein Leitfaden zum Schreiben von Containergrößen- und Stilabfragen mit `@container`, einschließlich Stilabfragen für benutzerdefinierte Eigenschaften, Abfragesyntax und Namen sowie zur Verschachtelung von Containerabfragen.

## Verwandte Konzepte

- [Layout und der umschließende Block](/de/docs/Web/CSS/Guides/Display/Containing_block)
- [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context)

- [CSS-Bedingungsregeln](/de/docs/Web/CSS/Guides/Conditional_rules) Modul
  - {{cssxref("@container")}} At-Regel
  - {{CSSxRef("container")}} Eigenschaft
  - {{CSSxRef("container-name")}} Eigenschaft
  - {{CSSxRef("container-type")}} Eigenschaft

- [CSS Media Queries](/de/docs/Web/CSS/Guides/Media_queries) Modul
  - {{cssxref("@media")}} At-Regel
  - [Logische Operatoren in CSS](/de/docs/Web/CSS/Reference/At-rules/@media#logical_operators) (`not`, `or`, und `and`)

- [CSS-Übergänge](/de/docs/Web/CSS/Guides/Transitions) Modul
  - {{cssxref("@starting-style")}} At-Regel
  - {{cssxref("transition-behavior")}} Eigenschaft

- [CSS-Box-Sizing](/de/docs/Web/CSS/Guides/Box_sizing) Modul
  - {{CSSxRef("aspect-ratio")}} Eigenschaft
  - {{cssxref("contain-intrinsic-size")}} Kurzschreibweise
  - {{CSSxRef("contain-intrinsic-inline-size")}} Eigenschaft
  - {{CSSxRef("contain-intrinsic-block-size")}} Eigenschaft
  - {{CSSxRef("contain-intrinsic-width")}} Eigenschaft
  - {{CSSxRef("contain-intrinsic-height")}} Eigenschaft

- [CSS-Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles) Modul
  - [Verwendung von CSS-Zählern](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters) Leitfaden

- [CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting) Modul
  - [CSS-Verschachtelungsregeln](/de/docs/Web/CSS/Guides/Nesting/At-rules) Leitfaden

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Verwendung von Feature-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
- [Verwendung von CSS Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
- {{cssxref("@supports")}} At-Regel
