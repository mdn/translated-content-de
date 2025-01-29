---
title: CSS-Kontainment
slug: Web/CSS/CSS_containment
l10n:
  sourceCommit: d6ceca91f9183956e320f334b761542dc3409091
---

{{CSSRef}}

Das **CSS-Kontainment**-Modul definiert Kontainment und Container-Abfragen.

Kontainment ermöglicht die Isolation von Teilbäumen der Seite vom Rest des DOM. Der Browser kann dann die Leistung verbessern, indem er das Rendering dieser unabhängigen Teile optimiert.

Container-Abfragen ähneln dimensionsbasierten [Media Queries](/de/docs/Web/CSS/CSS_media_queries), abgesehen davon, dass die Abfragen auf den Dimensionen eines bestimmten Containerelements basieren, das als _Kontainment-Kontext_ definiert ist, anstatt auf den Dimensionen des Viewports. Container-Abfragen ermöglichen die Abfrage der Größe, Eigenschaften und Werte eines Containers, um CSS-Stile bedingt anzuwenden. Beim Anwenden dieser bedingten Stile können Sie Container-Abfrage-Längeneinheiten verwenden, die Längen relativ zu den Abmessungen des Abfragecontainers angeben. Zusätzliche Eigenschaften werden definiert, um es zu ermöglichen, ein bestimmtes Element als Abfragecontainer festzulegen und ihm einen spezifischen Namen zu geben.

## Referenz

### Eigenschaften

- {{cssxref("contain")}}
- {{cssxref("content-visibility")}}

### At-Rules und Deskriptoren

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

- [CSS Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)

  - : Ein Leitfaden zur Verwendung von Container-Abfragen mit `@container`, einschließlich der Benennung von Kontainment-Kontexten.

- [Verwendung von CSS-Kontainment](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment)

  - : Beschreibt die grundlegenden Ziele des CSS-Kontainment und wie man `contain` und `content-visibility` für ein besseres Benutzererlebnis nutzt.

- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)

  - : Ein Leitfaden zum Schreiben von Containergrößen- und Stilabfragen mit `@container`, einschließlich Stilabfragen für benutzerdefinierte Eigenschaften, Abfragesyntax und Namen sowie das Verschachteln von Containerabfragen.

## Verwandte Konzepte

- [Layout und der Containing-Block](/de/docs/Web/CSS/Containing_block)
- [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)

- [CSS bedingte Regeln](/de/docs/Web/CSS/CSS_conditional_rules) Modul

  - {{CSSxRef("container")}} Eigenschaft
  - {{CSSxRef("container-name")}} Eigenschaft
  - {{CSSxRef("container-type")}} Eigenschaft

- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries) Modul

  - {{cssxref("@media")}} At-Regel
  - [CSS logische Operatoren](/de/docs/Web/CSS/@media#logical_operators) (`not`, `or`, und `and`)

- [CSS Übergänge](/de/docs/Web/CSS/CSS_transitions) Modul

  - {{cssxref("@starting-style")}} At-Regel
  - {{cssxref("transition-behavior")}} Eigenschaft

- [CSS Box-Größenänderung](/de/docs/Web/CSS/CSS_box_sizing) Modul

  - {{CSSxRef("aspect-ratio")}} Eigenschaft
  - {{cssxref("contain-intrinsic-size")}} Kurzform Eigenschaft
  - {{CSSxRef("contain-intrinsic-inline-size")}} Eigenschaft
  - {{CSSxRef("contain-intrinsic-size")}} Eigenschaft
  - {{CSSxRef("contain-intrinsic-width")}} Eigenschaft
  - {{CSSxRef("contain-intrinsic-height")}} Eigenschaft

- [CSS Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul

  - [Verwendung von CSS-Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) Leitfaden

- [CSS Verschachtelung](/de/docs/Web/CSS/CSS_nesting) Modul

  - [CSS Verschachtelungs-At-Rules](/de/docs/Web/CSS/CSS_nesting/Nesting_at-rules) Leitfaden

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Verwendung von Funktionsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [Verwendung von CSS-Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- {{cssxref("@supports")}} At-Regel
