---
title: CSS containment
slug: Web/CSS/CSS_containment
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Das **CSS Containment**-Modul definiert Containment und Container-Abfragen.

Containment ermöglicht die Isolation von Teilbäumen der Seite vom Rest des DOM. Der Browser kann somit die Leistung verbessern, indem die Darstellung dieser unabhängigen Teile optimiert wird.

Container-Abfragen ähneln Dimensions-[Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries), außer dass die Abfragen auf den Dimensionen eines spezifischen Container-Elements basieren, das als _Containment-Kontext_ definiert ist, anstatt auf den Dimensionen des Ansichtsfensters. Container-Abfragen ermöglichen es, die Größe, Eigenschaften und Eigenschaftswerte eines Containers abzufragen, um CSS-Stile bedingt anzuwenden. Beim Anwenden dieser bedingten Stile können Sie Längeneinheiten für Container-Abfragen verwenden, die Längen relativ zu den Dimensionen des Abfrage-Containers spezifizieren. Zusätzliche Eigenschaften werden definiert, um ein spezifisches Element als Abfrage-Container zu etablieren und ihm einen spezifischen Namen zu geben.

## Referenz

### Eigenschaften

- {{cssxref("contain")}}
- {{cssxref("content-visibility")}}

### Ereignisse

- [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)

### Schnittstellen

- [`ContentVisibilityAutoStateChangeEvent`](/de/docs/Web/API/ContentVisibilityAutoStateChangeEvent)
  - [`skipped`](/de/docs/Web/API/ContentVisibilityAutoStateChangeEvent/skipped)-Eigenschaft
- [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule)
  - [`CSSContainerRule.containerName`](/de/docs/Web/API/CSSContainerRule/containerName)
  - [`CSSContainerRule.containerQuery`](/de/docs/Web/API/CSSContainerRule/containerQuery)

## Leitfäden

- [CSS-Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)

  - : Ein Leitfaden zur Verwendung von Container-Abfragen mit `@container`, einschließlich der Benennung von Containment-Kontexten.

- [Verwendung von CSS-Containment](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment)

  - : Beschreibt die grundlegenden Ziele von CSS-Containment und wie man `contain` und `content-visibility` für eine bessere Benutzererfahrung nutzt.

- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
  - : Ein Leitfaden zum Schreiben von Containergrößen- und Stilabfragen mit `@container`, einschließlich Stilabfragen für benutzerdefinierte Eigenschaften, Abfragesyntax und Namen sowie das Verschachteln von Container-Abfragen.

## Verwandte Konzepte

- [Layout und das enthaltende Block](/de/docs/Web/CSS/CSS_display/Containing_block)
- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)

- [CSS-Bedingungsregeln](/de/docs/Web/CSS/CSS_conditional_rules) Modul

  - {{cssxref("@container")}} Regel
  - {{CSSxRef("container")}} Eigenschaft
  - {{CSSxRef("container-name")}} Eigenschaft
  - {{CSSxRef("container-type")}} Eigenschaft

- [CSS-Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries) Modul

  - {{cssxref("@media")}} Regel
  - [CSS logische Operatoren](/de/docs/Web/CSS/@media#logical_operators) (`not`, `or`, und `and`)

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) Modul

  - {{cssxref("@starting-style")}} Regel
  - {{cssxref("transition-behavior")}} Eigenschaft

- [CSS-Box-Größenanpassung](/de/docs/Web/CSS/CSS_box_sizing) Modul

  - {{CSSxRef("aspect-ratio")}} Eigenschaft
  - {{cssxref("contain-intrinsic-size")}} Kurzschreibweise
  - {{CSSxRef("contain-intrinsic-inline-size")}} Eigenschaft
  - {{CSSxRef("contain-intrinsic-block-size")}} Eigenschaft
  - {{CSSxRef("contain-intrinsic-width")}} Eigenschaft
  - {{CSSxRef("contain-intrinsic-height")}} Eigenschaft

- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul

  - [Verwendung von CSS-Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) Leitfaden

- [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting) Modul
  - [CSS-Verschachtelungsregeln](/de/docs/Web/CSS/CSS_nesting/Nesting_at-rules) Leitfaden

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Verwendung von Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [Verwendung von CSS-Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- {{cssxref("@supports")}} Regel
