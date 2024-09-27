---
title: CSS containment
slug: Web/CSS/CSS_containment
l10n:
  sourceCommit: 2ef2c905a7322f5a533cf7c96ec5a337fc614359
---

{{CSSRef}}

Das **CSS containment** Modul definiert Containment und Container-Abfragen.

Containment ermöglicht die Isolation von Seitenunterbäumen vom Rest des DOM. Der Browser kann dann die Leistung verbessern, indem er das Rendering dieser unabhängigen Teile optimiert.

Container-Abfragen sind ähnlich wie Dimensionen [Media Queries](/de/docs/Web/CSS/CSS_media_queries), außer dass die Abfragen auf den Abmessungen eines spezifischen Containerelements basieren, das als _Containment-Kontext_ definiert ist, anstatt auf den Abmessungen des Ansichtsfensters. Container-Abfragen ermöglichen das Abfragen der Größe, Eigenschaften und Eigenschaftswerte eines Containers, um bedingt CSS-Stile anzuwenden. Beim Anwenden dieser bedingten Stile können Sie Container-Abfrage-Längeneinheiten verwenden, die Längen relativ zu den Abmessungen des Abfragecontainers angeben. Zusätzliche Eigenschaften werden definiert, um das Festlegen eines spezifischen Elements als Abfragecontainer zu ermöglichen und ihm einen spezifischen Namen zu geben.

## Referenz

### Eigenschaften

- {{cssxref("contain")}}
- {{cssxref("container")}} Kurzschreibweise
  - {{cssxref("container-name")}}
  - {{cssxref("container-type")}}
- {{cssxref("content-visibility")}}

### At-Regeln und Deskriptoren

- {{cssxref("@container")}}
- [`@container` Deskriptoren](/de/docs/Web/CSS/@container#descriptors):
  - `aspect-ratio`
  - `block-size`
  - `height`
  - `inline-size`
  - `orientation`
  - `width`

### Funktionen

- [`style()`](/de/docs/Web/CSS/@container#container_style_queries)

### Datentypen

- [`<container-name>`](/de/docs/Web/CSS/@container#values)
- [`<style-feature>`](/de/docs/Web/CSS/@container#container_style_queries)
- [Container relative `<length>` Einheiten](/de/docs/Web/CSS/length#container_query_length_units)

### Ereignisse

- [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)

### Schnittstellen

- [`ContentVisibilityAutoStateChangeEvent`](/de/docs/Web/API/ContentVisibilityAutoStateChangeEvent)
  - [`skipped`](/de/docs/Web/API/ContentVisibilityAutoStateChangeEvent/skipped) Eigenschaft
- [`CSSContainerRule`](/de/docs/Web/API/CSSContainerRule)
  - [`CSSContainerRule.containerName`](/de/docs/Web/API/CSSContainerRule/containerName)
  - [`CSSContainerRule.containerQuery`](/de/docs/Web/API/CSSContainerRule/containerQuery)

## Leitfäden

- [CSS-Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)

  - : Ein Leitfaden zur Nutzung von Container-Abfragen mit `@container`, einschließlich der Benennung von Containment-Kontexten.

- [Verwendung von CSS containment](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment)

  - : Beschreibt die grundlegenden Ziele von CSS containment und wie man `contain` und `content-visibility` für ein besseres Nutzererlebnis nutzt.

- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)

  - : Ein Leitfaden zum Schreiben von Containergrößen- und Stilabfragen mit `@container`, einschließlich Stilabfragen für benutzerdefinierte Eigenschaften, Abfragesyntax und Namen sowie das Verschachteln von Container-Abfragen.

## Verwandte Konzepte

- [Layout und das enthaltende Block](/de/docs/Web/CSS/Containing_block)
- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)

- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries) Modul

  - {{cssxref("@media")}} At-Regel
  - [CSS logische Operatoren](/de/docs/Web/CSS/@media#logical_operators) (`not`, `or`, und `and`)

- [CSS Transitions](/de/docs/Web/CSS/CSS_transitions) Modul

  - {{cssxref("@starting-style")}} At-Regel
  - {{cssxref("transition-behavior")}} Eigenschaft

- CSS Box-Sizing Modul

  - {{CSSxRef("aspect-ratio")}} Eigenschaft
  - {{cssxref("contain-intrinsic-size")}} Kurzschreibweise
  - {{CSSxRef("contain-intrinsic-inline-size")}} Eigenschaft
  - {{CSSxRef("contain-intrinsic-size")}} Eigenschaft
  - {{CSSxRef("contain-intrinsic-width")}} Eigenschaft
  - {{CSSxRef("contain-intrinsic-height")}} Eigenschaft

- [CSS Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul

  - [Verwendung von CSS-Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) Anleitung

- [CSS Nesting](/de/docs/Web/CSS/CSS_nesting) Modul
  - [CSS Nesting At-Regeln](/de/docs/Web/CSS/CSS_nesting/Nesting_at-rules) Anleitung

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Verwendung von Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [Verwendung von CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- {{cssxref("@supports")}} At-Regel
