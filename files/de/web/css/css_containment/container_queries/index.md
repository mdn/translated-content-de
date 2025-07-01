---
title: CSS-Containerabfragen
short-title: Container queries
slug: Web/CSS/CSS_containment/Container_queries
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{CSSRef}}

Containerabfragen ermöglichen es Ihnen, einem Element basierend auf bestimmten Attributen seines Containers Stile zuzuweisen:

- Die Größe des Containers.
- Auf den Container angewendete Stile.
- Der Scroll-Zustand des Containers oder der seines scrollenden Vorfahren.

Containerabfragen sind eine Alternative zu [Media Queries](/de/docs/Web/CSS/CSS_media_queries), die Stile basierend auf der Größe des Viewports oder anderen Geräteeigenschaften anwenden.

Dieser Artikel bietet eine Einführung in die Verwendung von Containerabfragen, wobei der Schwerpunkt speziell auf Größen-Containerabfragen liegt. Andere Leitfäden behandeln [Stil-](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries) und [Scroll-Zustand-](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) Containerabfragen im Detail.

![Zwei verschiedene Abfragetypen. Erstens, eine Media Query, die auf der Breite des Viewports basiert, welcher die volle Breite des Browsers ist. Zweitens, eine Containerabfrage, die auf der Breite eines Containerelements basiert.](container-query.svg)

## Verwendung von Größen-Containerabfragen

Während Containerabfragen Stile basierend auf dem Containertyp anwenden, wenden Größen-Containerabfragen Stile speziell basierend auf den Dimensionen des Containers an. Um Größen-Containerabfragen zu verwenden, müssen Sie einen **Containment-Kontext** auf einem Element deklarieren, damit der Browser weiß, dass Sie möglicherweise später die Dimensionen dieses Containers abfragen möchten.
Dazu verwenden Sie die Eigenschaft {{cssxref("container-type")}} mit einem Wert von `size`, `inline-size` oder `normal`.

Diese Werte haben die folgenden Auswirkungen:

- `size`
  - : Die Abfrage basiert auf den [inline und block](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) Dimensionen des Containers.
    Wendet Layout-, Stil- und Größen-[Containment](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) auf den Container an.
- `inline-size`
  - : Die Abfrage basiert auf den [inline](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) Dimensionen des Containers.
    Wendet Layout-, Stil- und inline-size Containment auf das Element an.
- `normal`
  - : Das Element ist kein Abfragecontainer für irgendwelche Größencontainerabfragen, bleibt aber ein Abfragecontainer für Container-Stilabfragen.

Betrachten Sie das folgende Beispiel eines Kartenkomponenten für einen Blogbeitrag mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Sie können einen Containment-Kontext mit der `container-type` Eigenschaft erstellen:

```css
.post {
  container-type: inline-size;
}
```

Verwenden Sie anschließend die @container-Regel, um eine Containerabfrage zu definieren.
Die Abfrage im folgenden Beispiel wird Stile auf Elemente basierend auf der Größe des nächsten Vorfahren mit einem Containment-Kontext anwenden.
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

Durch die Verwendung von Containerabfragen kann die Karte in mehreren Bereichen einer Seite wiederverwendet werden, ohne dass jedes Mal spezifisch bekannt sein muss, wo sie platziert wird.
Wenn der Container mit der Karte schmaler als `700px` ist, wird die Schrift des Kartentitels klein sein, und wenn die Karte in einem Container ist, der breiter als `700px` ist, wird die Schrift des Kartentitels größer sein.

Weitere Informationen zur Syntax von Containerabfragen finden Sie auf der {{cssxref("@container")}} Seite.

### Benennung von Containment-Kontexten

Im vorherigen Abschnitt hat eine Containerabfrage Stile basierend auf dem nächsten Vorfahren mit einem Containment-Kontext angewendet.
Es ist möglich, einem Containment-Kontext einen Namen zu geben, indem die Eigenschaft {{Cssxref("container-name")}} verwendet wird. Einmal benannt, kann der Name in einer `@container` Abfrage verwendet werden, um einen spezifischen Container anzusprechen.
Das folgende Beispiel erstellt einen Containment-Kontext mit dem Namen `sidebar`:

```css
.post {
  container-type: inline-size;
  container-name: sidebar;
}
```

Sie können dann diesen Containment-Kontext mit der `@container` Regel ansprechen:

```css
@container sidebar (width > 700px) {
  .card {
    font-size: 2em;
  }
}
```

Weitere Informationen zur Benennung von Containment-Kontexten sind auf der {{cssxref("container-name")}} Seite verfügbar.

### Kurzschrift Container-Syntax

Die Kurzschrift zur Deklaration eines Containment-Kontextes ist die Verwendung der Eigenschaft `container`:

```css
.post {
  container: sidebar / inline-size;
}
```

Weitere Informationen zu dieser Eigenschaft finden Sie in der {{Cssxref("container")}} Referenz.

### Längeneinheiten für Containerabfragen

Beim Anwenden von Stilen auf einen Container mit Containerabfragen können Sie Längeneinheiten für Containerabfragen verwenden.
Diese Einheiten geben eine Länge relativ zu den Dimensionen eines Abfragecontainers an.
Komponenten, die Längeneinheiten relativ zu ihrem Container verwenden, sind flexibler in unterschiedlichen Containern einsetzbar, ohne konkrete Längenwerte neu berechnen zu müssen.

Wenn kein geeigneter Container für die Abfrage verfügbar ist, verwendet die Containerabfrage-Längeneinheit standardmäßig die [kleine Viewport-Einheit](/de/docs/Web/CSS/length#small_viewport_units) für diese Achse (`sv*`).

Die Längeneinheiten für Containerabfragen sind:

- `cqw`: 1% der Breite eines Abfragecontainers
- `cqh`: 1% der Höhe eines Abfragecontainers
- `cqi`: 1% der inline Größe eines Abfragecontainers
- `cqb`: 1% der block Größe eines Abfragecontainers
- `cqmin`: Der kleinere Wert entweder von `cqi` oder `cqb`
- `cqmax`: Der größere Wert entweder von `cqi` oder `cqb`

Das folgende Beispiel verwendet die Einheit `cqi`, um die Schriftgröße einer Überschrift basierend auf der inline Größe des Containers festzulegen:

```css
@container (width > 700px) {
  .card h2 {
    font-size: max(1.5em, 1.23em + 2cqi);
  }
}
```

Weitere Informationen zu diesen Einheiten finden Sie in der Referenz zu [Containerabfrage-Längeneinheiten](/de/docs/Web/CSS/length#container_query_length_units).

## Rückgriffmöglichkeiten für Containerabfragen

Für Browser, die Containerabfragen noch nicht unterstützen, können {{cssxref("grid")}} und {{cssxref("flex")}} verwendet werden, um einen ähnlichen Effekt für die auf dieser Seite verwendete Kartenkomponente zu erzeugen.
Das folgende Beispiel verwendet eine Deklaration von {{cssxref("grid-template-columns")}}, um ein Layout mit zwei Spalten für die Kartenkomponente zu erstellen.

```css
.card {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
```

Wenn Sie ein Layout mit einer einzelnen Spalte für Geräte mit einem kleineren Viewport verwenden möchten, können Sie eine Media Query verwenden, um das Grid-Template zu ändern:

```css
@media (width <= 700px) {
  .card {
    grid-template-columns: 1fr;
  }
}
```

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/CSS_media_queries)
- CSS {{Cssxref("@container")}} Regel
- CSS {{Cssxref("contain")}} Eigenschaft
- CSS {{Cssxref("container")}} Kurzschrift Eigenschaft
- CSS {{Cssxref("container-name")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
- [Verwendung von Größen- und Stilcontainerabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Verwendung von Scroll-Zustand-Containerabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- [Say Hello to CSS Container Queries](https://ishadeed.com/article/say-hello-to-css-container-queries/) von Ahmad Shadeed
- [Container Queries: a Quick Start Guide](https://www.oddbird.net/2021/04/05/containerqueries/)
- [Sammlung von Artikeln über Containerabfragen](https://github.com/sturobson/Awesome-Container-Queries)
