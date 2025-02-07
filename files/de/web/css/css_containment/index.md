---
title: CSS containment
slug: Web/CSS/CSS_containment
l10n:
  sourceCommit: 95ebe59b5ea55b7f21dd5ec85395772527ce300a
---

{{CSSRef}}

Das **CSS Containment** Modul definiert Containment und Container-Abfragen.

Containment ermöglicht die Isolierung von Teilbäumen einer Seite vom Rest des DOM. Dadurch kann der Browser die Performance verbessern, indem er die Darstellung dieser unabhängigen Teile optimiert.

Container-Abfragen ähneln Dimensions-[Media Queries](/de/docs/Web/CSS/CSS_media_queries), mit dem Unterschied, dass die Abfragen auf den Dimensionen eines spezifischen Containerelements basieren, das als _Containment Context_ definiert ist, anstatt auf den Dimensionen des Viewports. Container-Abfragen ermöglichen es, die Größe, Eigenschaften und Eigenschaftswerte eines Containers abzufragen, um CSS-Stile bedingt anzuwenden. Zum Anwenden dieser bedingten Stile können Sie Container-Abfrage-Längeneinheiten verwenden, die Längen relativ zu den Dimensionen des Abfragecontainers angeben. Zusätzliche Eigenschaften werden definiert, um ein spezifisches Element als Abfragecontainer festzulegen und ihm einen spezifischen Namen zu geben.

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

- [CSS Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)

  - : Ein Leitfaden zur Nutzung von Container-Abfragen mit `@container`, einschließlich der Benennung von Containment-Kontexten.

- [Verwendung von CSS Containment](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment)

  - : Beschreibt die grundlegenden Ziele von CSS Containment und wie Sie `contain` und `content-visibility` für eine bessere Benutzererfahrung nutzen können.

- [Verwendung von Größen- und Stilabfragen für Container](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)

  - : Ein Leitfaden zum Schreiben von Größen- und Stilabfragen für Container mit `@container`, einschließlich Stilabfragen für benutzerdefinierte Eigenschaften, Abfragesyntax und -namen sowie das Verschachteln von Container-Abfragen.

## Verwandte Konzepte

- [Layout und der umschließende Block](/de/docs/Web/CSS/Containing_block)
- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)

- [CSS bedingte Regeln](/de/docs/Web/CSS/CSS_conditional_rules) Modul

  - {{cssxref("@container")}} At-Regel
  - {{CSSxRef("container")}} Eigenschaft
  - {{CSSxRef("container-name")}} Eigenschaft
  - {{CSSxRef("container-type")}} Eigenschaft

- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries) Modul

  - {{cssxref("@media")}} At-Regel
  - [CSS logische Operatoren](/de/docs/Web/CSS/@media#logical_operators) (`not`, `or` und `and`)

- [CSS Übergänge](/de/docs/Web/CSS/CSS_transitions) Modul

  - {{cssxref("@starting-style")}} At-Regel
  - {{cssxref("transition-behavior")}} Eigenschaft

- [CSS Box Sizing](/de/docs/Web/CSS/CSS_box_sizing) Modul

  - {{CSSxRef("aspect-ratio")}} Eigenschaft
  - {{cssxref("contain-intrinsic-size")}} Kurzschreibweise
  - {{CSSxRef("contain-intrinsic-inline-size")}} Eigenschaft
  - {{CSSxRef("contain-intrinsic-size")}} Eigenschaft
  - {{CSSxRef("contain-intrinsic-width")}} Eigenschaft
  - {{CSSxRef("contain-intrinsic-height")}} Eigenschaft

- [CSS Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul

  - [Verwendung von CSS Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) Anleitung

- [CSS Verschachtelung](/de/docs/Web/CSS/CSS_nesting) Modul

  - [CSS At-Regeln für Verschachtelung](/de/docs/Web/CSS/CSS_nesting/Nesting_at-rules) Leitfaden

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Verwendung von Feature-Queries](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [Verwendung von CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- {{cssxref("@supports")}} At-Regel
