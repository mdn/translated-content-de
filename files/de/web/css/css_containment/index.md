---
title: CSS-Eindämmung
slug: Web/CSS/CSS_containment
l10n:
  sourceCommit: 2ef2c905a7322f5a533cf7c96ec5a337fc614359
---

{{CSSRef}}

Das **CSS Containment**-Modul definiert Eindämmung und Container-Abfragen.

Eindämmung ermöglicht die Isolation von Teilbäumen der Seite vom Rest des DOM. Der Browser kann dann die Leistung verbessern, indem er das Rendering dieser unabhängigen Teile optimiert.

Container-Abfragen ähneln Dimension-[Media Queries](/de/docs/Web/CSS/CSS_media_queries), außer dass die Abfragen auf den Dimensionen eines bestimmten Containerelements basieren, das als _Eindämmungskontext_ definiert ist, anstatt auf den Dimensionen des Ansichtsfensters. Container-Abfragen ermöglichen es, die Größe, Eigenschaften und Eigenschaftswerte eines Containers abzufragen, um CSS-Stile bedingt anzuwenden. Bei der Anwendung dieser bedingten Stile können Sie Containereingabe-Einheiten verwenden, die Längen relativ zu den Dimensionen des Abfragecontainers angeben. Zusätzliche Eigenschaften werden definiert, um ein bestimmtes Element als Abfragecontainer festzulegen und ihm einen spezifischen Namen zu geben.

## Referenz

### Eigenschaften

- {{cssxref("contain")}}
- {{cssxref("container")}} Abkürzung
  - {{cssxref("container-name")}}
  - {{cssxref("container-type")}}
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

- {{domxref("Element.contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}}

### Schnittstellen

- {{domxref("ContentVisibilityAutoStateChangeEvent")}}
  - {{domxref("ContentVisibilityAutoStateChangeEvent.skipped", "skipped")}} Eigenschaft
- {{domxref("CSSContainerRule")}}
  - {{domxref("CSSContainerRule.containerName")}}
  - {{domxref("CSSContainerRule.containerQuery")}}

## Anleitungen

- [CSS Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)

  - : Ein Leitfaden zur Verwendung von Container-Abfragen mit `@container`, einschließlich der Benennung von Eindämmungskontexten.

- [Verwendung von CSS-Eindämmung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment)

  - : Beschreibt die grundlegenden Ziele der CSS-Eindämmung und wie Sie `contain` und `content-visibility` für eine bessere Benutzererfahrung nutzen können.

- [Verwendung von Containergröße- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)

  - : Ein Leitfaden zum Schreiben von Containergröße- und Stilabfragen mit `@container`, einschließlich Stilabfragen für benutzerdefinierte Eigenschaften, Abfragesyntax und -namen sowie zum Verschachteln von Container-Abfragen.

## Verwandte Konzepte

- [Layout und der enthaltene Block](/de/docs/Web/CSS/Containing_block)
- [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)

- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries) Modul

  - {{cssxref("@media")}} At-Regel
  - [CSS logische Operatoren](/de/docs/Web/CSS/@media#logical_operators) (`not`, `or` und `and`)

- [CSS Transitionen](/de/docs/Web/CSS/CSS_transitions) Modul

  - {{cssxref("@starting-style")}} At-Regel
  - {{cssxref("transition-behavior")}} Eigenschaft

- CSS Boxgrößen-Modul

  - {{CSSxRef("aspect-ratio")}} Eigenschaft
  - {{cssxref("contain-intrinsic-size")}} Abkürzungseigenschaft
  - {{CSSxRef("contain-intrinsic-inline-size")}} Eigenschaft
  - {{CSSxRef("contain-intrinsic-size")}} Eigenschaft
  - {{CSSxRef("contain-intrinsic-width")}} Eigenschaft
  - {{CSSxRef("contain-intrinsic-height")}} Eigenschaft

- [CSS Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul

  - [Verwendung von CSS-Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) Anleitung

- [CSS Verschachtelung](/de/docs/Web/CSS/CSS_nesting) Modul
  - [CSS Verschachtelung von At-Regeln](/de/docs/Web/CSS/CSS_nesting/Nesting_at-rules) Anleitung

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Verwendung von Feature Queries](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [Verwendung von CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- {{cssxref("@supports")}} At-Regel
