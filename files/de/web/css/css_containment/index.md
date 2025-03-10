---
title: CSS-Kontainment
slug: Web/CSS/CSS_containment
l10n:
  sourceCommit: da2fb2fbfca57a93dacfa9ca06dad83fcbb6be01
---

{{CSSRef}}

Das **CSS-Kontainment**-Modul definiert Kontainment und Containerabfragen.

Kontainment ermöglicht die Isolation von Teilbäumen einer Seite vom Rest des DOM. Dadurch kann der Browser die Leistung verbessern, indem er das Rendering dieser unabhängigen Teile optimiert.

Containerabfragen sind ähnlich wie Dimensionen-[Media Queries](/de/docs/Web/CSS/CSS_media_queries), außer dass die Abfragen auf den Dimensionen eines bestimmten Containerelements basieren, das als _Kontainment-Kontext_ definiert ist, anstatt auf den Dimensionen des Viewports. Containerabfragen ermöglichen es, die Größe, Eigenschaften und Eigenschaftswerte eines Containers abzufragen, um CSS-Stile bedingt anzuwenden. Beim Anwenden dieser bedingten Stile können Sie Containerabfrage-Längeneinheiten verwenden, die Längen relativ zu den Dimensionen des Abfragecontainers angeben. Zusätzliche Eigenschaften werden definiert, um ein spezifisches Element als Abfragecontainer zu etablieren und ihm einen bestimmten Namen zu geben.

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

- [CSS-Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)

  - : Ein Leitfaden zur Verwendung von Containerabfragen mit `@container`, einschließlich Benennung von Kontainment-Kontexten.

- [Verwendung von CSS-Kontainment](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment)

  - : Beschreibt die grundlegenden Ziele von CSS-Kontainment und wie `contain` und `content-visibility` für eine bessere Benutzererfahrung genutzt werden können.

- [Verwendung von Containergröße und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)

  - : Ein Leitfaden zum Schreiben von Containergrößen- und Stilabfragen mit `@container`, einschließlich Stilabfragen für benutzerdefinierte Eigenschaften, Abfragesyntax und -namen, sowie das Verschachteln von Containerabfragen.

## Verwandte Konzepte

- [Layout und das umgebende Blockelement](/de/docs/Web/CSS/CSS_display/Containing_block)
- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)

- [CSS bedingte Regeln](/de/docs/Web/CSS/CSS_conditional_rules) Modul

  - {{cssxref("@container")}} Regel
  - {{CSSxRef("container")}} Eigenschaft
  - {{CSSxRef("container-name")}} Eigenschaft
  - {{CSSxRef("container-type")}} Eigenschaft

- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries) Modul

  - {{cssxref("@media")}} Regel
  - [CSS logische Operatoren](/de/docs/Web/CSS/@media#logical_operators) (`not`, `or`, und `and`)

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) Modul

  - {{cssxref("@starting-style")}} Regel
  - {{cssxref("transition-behavior")}} Eigenschaft

- [CSS Box-Größenbestimmung](/de/docs/Web/CSS/CSS_box_sizing) Modul

  - {{CSSxRef("aspect-ratio")}} Eigenschaft
  - {{cssxref("contain-intrinsic-size")}} Kurzschreibweise
  - {{CSSxRef("contain-intrinsic-inline-size")}} Eigenschaft
  - {{CSSxRef("contain-intrinsic-block-size")}} Eigenschaft
  - {{CSSxRef("contain-intrinsic-width")}} Eigenschaft
  - {{CSSxRef("contain-intrinsic-height")}} Eigenschaft

- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul

  - [Verwendung von CSS-Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) Anleitung

- [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting) Modul

  - [CSS-Verschachtelungsregeln](/de/docs/Web/CSS/CSS_nesting/Nesting_at-rules) Anleitung

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Verwendung von Funktionsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [Verwendung von CSS-Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- {{cssxref("@supports")}} Regel
