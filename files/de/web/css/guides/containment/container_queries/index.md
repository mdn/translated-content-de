---
title: CSS Container-Abfragen
short-title: Container queries
slug: Web/CSS/Guides/Containment/Container_queries
l10n:
  sourceCommit: 879a1aece3a1d4eb28c0024f0baac6aa1b96638e
---

Container-Abfragen ermöglichen es Ihnen, Stile basierend auf bestimmten Attributen ihres Containers auf ein Element anzuwenden:

- Die Größe des Containers.
- Auf den Container angewendete Stile.
- Der Scroll-Status des Containers oder der eines scrollenden Vorfahren.
- Ob der Container [anker-positioniert](/de/docs/Web/CSS/Guides/Anchor_positioning) ist und ob eine [Position-Try-Option](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) angewendet wird.

Container-Abfragen sind eine Alternative zu [Media-Abfragen](/de/docs/Web/CSS/Guides/Media_queries), die Stile basierend auf der Größe des Ansichtsfensters oder anderen Geräteeigenschaften anwenden.

Dieser Artikel bietet eine Einführung in die Verwendung von Container-Abfragen, wobei der Fokus insbesondere auf Größen-Container-Abfragen liegt. Andere Leitfäden behandeln [Stil](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries)-, [Scroll-Status](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)- und [Anker-basierte](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries) Container-Abfragen im Detail.

![Zwei verschiedene Abfragearten. Erstens eine Media-Abfrage basierend auf der Breite des Ansichtsfensters, welche die gesamte Breite des Browsers umfasst. Zweitens eine Container-Abfrage basierend auf der Breite eines Container-Elements.](container-query.svg)

## Verwendung von Größen-Container-Abfragen

Während Container-Abfragen Stile basierend auf dem Container-Typ anwenden, beziehen sich Größen-Container-Abfragen spezifisch auf die Abmessungen des Containers. Um Größen-Container-Abfragen zu verwenden, müssen Sie einen **Containment-Kontext** auf einem Element deklarieren, damit der Browser weiß, dass Sie später die Abmessungen dieses Containers abfragen möchten.
Dazu verwenden Sie die Eigenschaft {{cssxref("container-type")}} mit einem Wert von `size`, `inline-size` oder `normal`.

Diese Werte haben folgende Effekte:

- `size`
  - : Die Abfrage basiert auf den [inline und block](/de/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts#block_and_inline_dimensions) Abmessungen des Containers.
    Wendet Layout-, Stil- und Größen-[Containment](/de/docs/Web/CSS/Guides/Containment/Using) auf den Container an.
- `inline-size`
  - : Die Abfrage basiert auf den [inline](/de/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts#block_and_inline_dimensions) Abmessungen des Containers.
    Wendet Layout-, Stil- und Inline-Größen-Containment auf das Element an.
- `normal`
  - : Das Element ist kein Abfrage-Container für Größen-Container-Abfragen, bleibt jedoch ein Abfrage-Container für Stil-Container-Abfragen.

Betrachten Sie das folgende Beispiel eines Kartenkomponents für einen Blog-Beitrag mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Sie können einen Containment-Kontext mithilfe der `container-type` Eigenschaft erstellen:

```css
.post {
  container-type: inline-size;
}
```

Verwenden Sie anschließend die @container-Regel, um eine Container-Abfrage zu definieren. Die Abfrage im folgenden Beispiel wird Stile auf Elemente basierend auf der Größe des nächsten Vorfahren mit einem Containment-Kontext anwenden. Insbesondere wird diese Abfrage eine größere Schriftgröße für den Kartentitel anwenden, wenn der Container breiter als `700px` ist:

```css
/* Default heading styles for the card title */
.card h2 {
  font-size: 1em;
}

/* If the container is larger than 700px */
@container (width > 700px) {
  .card h2 {
    font-size: 2em;
  }
}
```

Mit Container-Abfragen kann die Karte mehrfach in verschiedenen Bereichen einer Seite verwendet werden, ohne dass spezifisch bekannt sein muss, wo sie jedes Mal platziert wird. Wenn der Container mit der Karte schmaler als `700px` ist, wird die Schrift des Kartentitels klein sein, und wenn die Karte in einem Container ist, der breiter als `700px` ist, wird die Schrift des Kartentitels größer sein.

Für mehr Informationen zur Syntax von Container-Abfragen, sehen Sie sich die {{cssxref("@container")}} Seite an.

### Benennung von Containment-Kontexten

Im vorherigen Abschnitt wendet eine Container-Abfrage Stile basierend auf dem nächstgelegenen Vorfahren mit einem Containment-Kontext an. Es ist möglich, einem Containment-Kontext einen Namen zu geben, indem Sie die {{Cssxref("container-name")}} Eigenschaft verwenden. Einmal benannt, kann der Name in einer `@container`-Abfrage verwendet werden, um einen spezifischen Container anzusprechen. Das folgende Beispiel erstellt einen Containment-Kontext mit dem Namen `sidebar`:

```css
.post {
  container-type: inline-size;
  container-name: sidebar;
}
```

Sie können dann diesen Containment-Kontext mit der @container-Regel ansprechen:

```css
@container sidebar (width > 700px) {
  .card {
    font-size: 2em;
  }
}
```

Mehr Informationen zur Benennung von Containment-Kontexten finden Sie auf der {{cssxref("container-name")}} Seite.

### Kurznotation für Container-Syntax

Der Kurzwahlweg, um einen Containment-Kontext zu deklarieren, besteht darin, die `container` Eigenschaft zu verwenden:

```css
.post {
  container: sidebar / inline-size;
}
```

Weitere Informationen zu dieser Eigenschaft finden Sie in der {{Cssxref("container")}} Referenz.

### Container-Abfrage-Längeneinheiten

Wenn Sie Stile auf einen Container mit Container-Abfragen anwenden, können Sie Container-Abfrage-Längeneinheiten verwenden. Diese Einheiten geben eine Länge relativ zu den Abmessungen eines Abfrage-Containers an. Komponenten, die Längeneinheiten relativ zu ihrem Container verwenden, sind in verschiedenen Containern flexibler einsetzbar, ohne dass verbindliche Längenwerte neu berechnet werden müssen.

Wenn kein geeigneter Container für die Abfrage verfügbar ist, fällt die Container-Abfrage-Längeneinheit auf die [kleine Ansichtsfenster-Einheit](/de/docs/Web/CSS/Reference/Values/length#small_viewport_units) für diese Achse zurück (`sv*`).

Die Container-Abfrage-Längeneinheiten sind:

- `cqw`: 1 % der Breite eines Abfrage-Containers
- `cqh`: 1 % der Höhe eines Abfrage-Containers
- `cqi`: 1 % der Inlinegröße eines Abfrage-Containers
- `cqb`: 1 % der Blockgröße eines Abfrage-Containers
- `cqmin`: Der kleinere Wert von entweder `cqi` oder `cqb`
- `cqmax`: Der größere Wert von entweder `cqi` oder `cqb`

Das folgende Beispiel verwendet die `cqi` Einheit, um die Schriftgröße einer Überschrift basierend auf der Inlinegröße des Containers festzulegen:

```css
@container (width > 700px) {
  .card h2 {
    font-size: max(1.5em, 1.23em + 2cqi);
  }
}
```

Weitere Informationen zu diesen Einheiten finden Sie in der [Container-Abfrage-Längeneinheiten](/de/docs/Web/CSS/Reference/Values/length#container_query_length_units) Referenz.

## Fallbacks für Container-Abfragen

Für Browser, die Container-Abfragen noch nicht unterstützen, können Sie {{cssxref("grid")}} und {{cssxref("flex")}} verwenden, um einen ähnlichen Effekt für den in dieser Seite verwendeten Kartenkomponent zu erzielen. Das folgende Beispiel verwendet eine {{cssxref("grid-template-columns")}}-Deklaration, um ein zweispaltiges Layout für den Kartenkomponent zu erstellen.

```css
.card {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
```

Wenn Sie ein einspaltiges Layout für Geräte mit einem kleineren Ansichtsfenster verwenden möchten, können Sie eine Media-Abfrage verwenden, um das Gitter-Template zu ändern:

```css
@media (width <= 700px) {
  .card {
    grid-template-columns: 1fr;
  }
}
```

## Siehe auch

- [Media-Abfragen](/de/docs/Web/CSS/Guides/Media_queries)
- CSS {{Cssxref("@container")}} Regel
- CSS {{Cssxref("contain")}} Eigenschaft
- CSS {{Cssxref("container")}} Kurznotationseigenschaft
- CSS {{Cssxref("container-name")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
- [Verwendung von Größen- und Stil-Containern-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Status-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [Verwendung von Anker-basierten Container-Abfragen](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries)
- [Say Hello to CSS Container Queries](https://ishadeed.com/article/say-hello-to-css-container-queries/) von Ahmad Shadeed
- [Container Queries: a Quick Start Guide](https://www.oddbird.net/2021/04/05/containerqueries/)
- [Sammlung von Container-Abfragen Artiken](https://github.com/sturobson/Awesome-Container-Queries)
