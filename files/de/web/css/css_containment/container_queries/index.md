---
title: CSS-Container-Abfragen
short-title: Container queries
slug: Web/CSS/CSS_containment/Container_queries
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Container-Abfragen ermöglichen es Ihnen, Stile auf ein Element basierend auf bestimmten Attributen seines Containers anzuwenden:

- Die Größe des Containers.
- Auf den Container angewendete Stile.
- Der Scroll-Zustand des Containers oder der seines scrollenden Vorgängers.

Container-Abfragen sind eine Alternative zu [Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries), die Stile basierend auf der Größe des Viewports oder anderen Gerätemerkmalen anwenden.

Dieser Artikel bietet eine Einführung in die Verwendung von Container-Abfragen, wobei der Schwerpunkt auf Größen-Container-Abfragen liegt. Andere Leitfäden behandeln [Stil-](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries) und [Scroll-Zustand-](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) Container-Abfragen im Detail.

![Zwei unterschiedliche Abfragetypen. Erstens, eine Media-Abfrage basierend auf der Breite des Viewports, die die gesamte Breite des Browsers einnimmt. Zweitens, eine Container-Abfrage basierend auf der Breite eines Container-Elements.](container-query.svg)

## Verwendung von Container-Größen-Abfragen

Während Container-Abfragen Stile basierend auf dem Container-Typ anwenden, beziehen sich Container-Größen-Abfragen speziell auf die Abmessungen des Containers. Um Container-Größen-Abfragen zu verwenden, müssen Sie einen **Containment-Kontext** auf einem Element deklarieren, damit der Browser weiß, dass Sie später möglicherweise die Abmessungen dieses Containers abfragen möchten.
Verwenden Sie hierzu die {{cssxref("container-type")}}-Eigenschaft mit einem Wert von `size`, `inline-size` oder `normal`.

Diese Werte haben die folgenden Effekte:

- `size`
  - : Die Abfrage wird auf den [block- und inline-](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) Dimensionen des Containers basieren.
    Wendet Layout-, Stil- und Größen-[Containment](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) auf den Container an.
- `inline-size`
  - : Die Abfrage wird auf den [inline-](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) Dimensionen des Containers basieren.
    Wendet Layout-, Stil- und inline-size-Containment auf das Element an.
- `normal`
  - : Das Element ist kein Abfrage-Container für Größen-Container-Abfragen, bleibt jedoch ein Abfrage-Container für Stil-Container-Abfragen.

Betrachten Sie das folgende Beispiel eines Kartenkomponenten für einen Blogbeitrag mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Sie können einen Containment-Kontext mit der `container-type`-Eigenschaft erstellen:

```css
.post {
  container-type: inline-size;
}
```

Verwenden Sie als nächstes die {{cssxref("@container")}}-Regel, um eine Container-Abfrage zu definieren.
Die Abfrage im folgenden Beispiel wird Stile auf Elemente basierend auf der Größe des nächstgelegenen Vorgängers mit einem Containment-Kontext anwenden.
Insbesondere wird diese Abfrage eine größere Schriftgröße für den Kartentitel anwenden, wenn der Container breiter als `700px` ist:

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

Mit Container-Abfragen kann die Karte in mehreren Bereichen einer Seite wiederverwendet werden, ohne jedes Mal genau wissen zu müssen, wo sie platziert wird.
Wenn der Container mit der Karte schmaler als `700px` ist, wird die Schrift des Kartentitels klein und, wenn die Karte in einem Container ist, der breiter als `700px` ist, wird die Schrift des Kartentitels größer.

Weitere Informationen zur Syntax von Container-Abfragen finden Sie auf der {{cssxref("@container")}}-Seite.

### Benennen von Containment-Kontexten

Im vorherigen Abschnitt hat eine Container-Abfrage Stile basierend auf dem nächstgelegenen Vorgänger mit einem Containment-Kontext angewendet.
Es ist möglich, einem Containment-Kontext einen Namen zu geben, indem Sie die {{cssxref("container-name")}}-Eigenschaft verwenden. Sobald benannt, kann der Name in einer `@container`-Abfrage verwendet werden, um einen bestimmten Container anzusprechen.
Das folgende Beispiel erstellt einen Containment-Kontext mit dem Namen `sidebar`:

```css
.post {
  container-type: inline-size;
  container-name: sidebar;
}
```

Sie können dann diesen Containment-Kontext mit der `@container`-Regel ansprechen:

```css
@container sidebar (width > 700px) {
  .card {
    font-size: 2em;
  }
}
```

Weitere Informationen zum Benennen von Containment-Kontexten finden Sie auf der {{cssxref("container-name")}}-Seite.

### Shorthand-Container-Syntax

Die Kurzform zur Deklaration eines Containment-Kontextes ist die Verwendung der `container`-Eigenschaft:

```css
.post {
  container: sidebar / inline-size;
}
```

Weitere Informationen zu dieser Eigenschaft finden Sie in der {{cssxref("container")}}-Referenz.

### Längeneinheiten für Container-Abfragen

Wenn Stile auf einen Container mit Container-Abfragen angewendet werden, können Container-Abfrage-Längeneinheiten verwendet werden.
Diese Einheiten geben eine Länge relativ zu den Dimensionen eines Abfragecontainers an.
Komponenten, die Längeneinheiten relativ zu ihrem Container verwenden, sind flexibler in verschiedenen Containern einsetzbar, ohne dass berechnete Längenwerte neu berechnet werden müssen.

Wenn kein geeigneter Container für die Abfrage verfügbar ist, wird die Container-Abfrage-Längeneinheit auf die [kleine Viewport-Einheit](/de/docs/Web/CSS/length#small_viewport_units) für diese Achse (`sv*`) standardisiert.

Die Container-Abfrage-Längeneinheiten sind:

- `cqw`: 1% der Breite eines Abfragecontainers
- `cqh`: 1% der Höhe eines Abfragecontainers
- `cqi`: 1% der inline-Größe eines Abfragecontainers
- `cqb`: 1% der Blockgröße eines Abfragecontainers
- `cqmin`: Der kleinere Wert von entweder `cqi` oder `cqb`
- `cqmax`: Der größere Wert von entweder `cqi` oder `cqb`

Das folgende Beispiel verwendet die `cqi`-Einheit, um die Schriftgröße einer Überschrift basierend auf der inline-Größe des Containers festzulegen:

```css
@container (width > 700px) {
  .card h2 {
    font-size: max(1.5em, 1.23em + 2cqi);
  }
}
```

Weitere Informationen zu diesen Einheiten finden Sie in der Referenz [Container-Abfrage-Längeneinheiten](/de/docs/Web/CSS/length#container_query_length_units).

## Fallbacks für Container-Abfragen

Für Browser, die Container-Abfragen noch nicht unterstützen, können {{cssxref("grid")}} und {{cssxref("flex")}} verwendet werden, um einen ähnlichen Effekt für die auf dieser Seite verwendete Kartenkomponente zu erzielen.
Das folgende Beispiel verwendet eine {{cssxref("grid-template-columns")}}-Deklaration, um ein zweispaltiges Layout für die Kartenkomponente zu erstellen.

```css
.card {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
```

Wenn Sie ein Layout mit einer Spalte für Geräte mit einem kleineren Viewport verwenden möchten, können Sie eine Media-Abfrage verwenden, um das Grid-Template zu ändern:

```css
@media (width <= 700px) {
  .card {
    grid-template-columns: 1fr;
  }
}
```

## Siehe auch

- [Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries)
- CSS {{cssxref("@container")}}-Regel
- CSS {{cssxref("contain")}}-Eigenschaft
- CSS {{cssxref("container")}}-Kurzform-Eigenschaft
- CSS {{cssxref("container-name")}}-Eigenschaft
- CSS {{cssxref("content-visibility")}}-Eigenschaft
- [Verwendung von Größen- und Stil-Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Verwendung von Scroll-Zustand-Container-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- [Say Hello to CSS Container Queries](https://ishadeed.com/article/say-hello-to-css-container-queries/) von Ahmad Shadeed
- [Container Queries: a Quick Start Guide](https://www.oddbird.net/2021/04/05/containerqueries/)
- [Sammlung von Artikeln zu Container-Abfragen](https://github.com/sturobson/Awesome-Container-Queries)
