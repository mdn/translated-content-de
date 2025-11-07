---
title: CSS-Container-Abfragen
short-title: Container queries
slug: Web/CSS/Guides/Containment/Container_queries
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Container-Abfragen ermöglichen es Ihnen, Stile auf ein Element basierend auf bestimmten Attributen seines Containers anzuwenden:

- Die Größe des Containers.
- Auf den Container angewendete Stile.
- Der Scroll-Status des Containers oder eines seiner scrollenden Vorfahren.

Container-Abfragen sind eine Alternative zu [Media Queries](/de/docs/Web/CSS/Guides/Media_queries), die Stile für Elemente basierend auf der Größe des Ansichtsfensters oder anderen Geräteeigenschaften anwenden.

Dieser Artikel bietet eine Einführung in die Nutzung von Container-Abfragen, mit speziellem Fokus auf Größen-Container-Abfragen. Andere Leitfäden behandeln [Stil-](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) und [Scroll-Status-](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries) Container-Abfragen im Detail.

![Zwei verschiedene Abfragetypen. Erstens, eine Media Query basierend auf der Breite des Ansichtsfensters, die die volle Breite des Browsers umfasst. Zweitens, eine Container-Abfrage basierend auf der Breite eines Container-Elements.](container-query.svg)

## Verwendung von Größen-Container-Abfragen

Während Container-Abfragen Stile basierend auf dem Containertyp anwenden, beziehen sich Größen-Container-Abfragen spezifisch auf die Abmessungen des Containers. Um Größen-Container-Abfragen zu verwenden, müssen Sie einen **Containment-Kontext** auf einem Element deklarieren, damit der Browser weiß, dass Sie später möglicherweise die Abmessungen dieses Containers abfragen möchten.
Dazu verwenden Sie die {{cssxref("container-type")}}-Eigenschaft mit einem Wert von `size`, `inline-size` oder `normal`.

Diese Werte haben folgende Auswirkungen:

- `size`
  - : Die Abfrage basiert auf den [Inline- und Block-](/de/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts#block_and_inline_dimensions) Abmessungen des Containers.
    Wendet Layout-, Stil- und Größen-[Containment](/de/docs/Web/CSS/Guides/Containment/Using) auf den Container an.
- `inline-size`
  - : Die Abfrage basiert auf den [Inline-](/de/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts#block_and_inline_dimensions) Abmessungen des Containers.
    Wendet Layout-, Stil- und Inline-Größen-Containment auf das Element an.
- `normal`
  - : Das Element ist kein Abfragecontainer für Größen-Container-Abfragen, bleibt jedoch ein Abfragecontainer für Stil-Container-Abfragen.

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

Verwenden Sie anschließend die {{cssxref("@container")}}-At-Regel, um eine Container-Abfrage zu definieren.
Die Abfrage im folgenden Beispiel wendet Stile auf Elemente basierend auf der Größe des nächstgelegenen Vorfahren mit einem Containment-Kontext an.
Konkret wird diese Abfrage eine größere Schriftgröße für den Kartentitel anwenden, wenn der Container breiter als `700px` ist:

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
Wenn der Container mit der Karte schmaler als `700px` ist, wird die Schrift des Kartentitels klein sein, und wenn die Karte sich in einem Container befindet, der breiter als `700px` ist, wird die Schrift des Kartentitels größer sein.

Für weitere Informationen zur Syntax von Container-Abfragen siehe die {{cssxref("@container")}}-Seite.

### Benennung von Containment-Kontexten

Im vorherigen Abschnitt hat eine Container-Abfrage Stile basierend auf dem nächstgelegenen Vorfahren mit einem Containment-Kontext angewendet.
Es ist möglich, einem Containment-Kontext einen Namen zu geben, indem die {{Cssxref("container-name")}}-Eigenschaft verwendet wird. Einmal benannt, kann der Name in einer `@container`-Abfrage verwendet werden, um einen bestimmten Container zu zielen.
Das folgende Beispiel erstellt einen Containment-Kontext mit dem Namen `sidebar`:

```css
.post {
  container-type: inline-size;
  container-name: sidebar;
}
```

Sie können dann diesen Containment-Kontext mit der `@container`-At-Regel ansteuern:

```css
@container sidebar (width > 700px) {
  .card {
    font-size: 2em;
  }
}
```

Weitere Informationen zur Benennung von Containment-Kontexten finden Sie auf der {{cssxref("container-name")}}-Seite.

### Kurzschriftsyntax für Container

Die Kurzschriftsyntax zur Deklaration eines Containment-Kontextes ist die `container`-Eigenschaft:

```css
.post {
  container: sidebar / inline-size;
}
```

Für weitere Informationen zu dieser Eigenschaft siehe die {{Cssxref("container")}}-Referenz.

### Längeneinheiten für Container-Abfragen

Beim Anwenden von Stilen auf einen Container mittels Container-Abfragen können Sie Container-Abfrage-Längeneinheiten verwenden.
Diese Einheiten geben eine Länge relativ zu den Abmessungen eines Abfragecontainers an.
Komponenten, die Längeneinheiten relativ zu ihrem Container verwenden, sind flexibler in verschiedenen Containern einsetzbar, ohne konkrete Längenwerte neu berechnen zu müssen.

Wenn kein geeigneter Container für die Abfrage verfügbar ist, wird die Container-Abfrage-Längeneinheit auf die [kleine Ansichtsfenstereinheit](/de/docs/Web/CSS/Reference/Values/length#small_viewport_units) für diese Achse (`sv*`) voreingestellt.

Die Container-Abfrage-Längeneinheiten sind:

- `cqw`: 1% der Breite eines Abfragecontainers
- `cqh`: 1% der Höhe eines Abfragecontainers
- `cqi`: 1% der Inline-Größe eines Abfragecontainers
- `cqb`: 1% der Blockgröße eines Abfragecontainers
- `cqmin`: Der kleinere Wert von entweder `cqi` oder `cqb`
- `cqmax`: Der größere Wert von entweder `cqi` oder `cqb`

Das folgende Beispiel verwendet die `cqi`-Einheit, um die Schriftgröße einer Überschrift basierend auf der Inline-Größe des Containers festzulegen:

```css
@container (width > 700px) {
  .card h2 {
    font-size: max(1.5em, 1.23em + 2cqi);
  }
}
```

Für weitere Informationen zu diesen Einheiten siehe die [Container-Abfrage-Längeneinheiten](/de/docs/Web/CSS/Reference/Values/length#container_query_length_units)-Referenz.

## Fallbacks für Container-Abfragen

Für Browser, die Container-Abfragen noch nicht unterstützen, können {{cssxref("grid")}} und {{cssxref("flex")}} verwendet werden, um einen ähnlichen Effekt für die hier benutzte Kartenkomponente zu erstellen.
Das folgende Beispiel nutzt eine {{cssxref("grid-template-columns")}}-Deklaration, um ein zweispaltiges Layout für die Kartenkomponente zu erstellen.

```css
.card {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
```

Wenn Sie ein einspaltiges Layout für Geräte mit kleinerem Ansichtsfenster verwenden möchten, können Sie eine Media Query nutzen, um die Rastervorlage zu ändern:

```css
@media (width <= 700px) {
  .card {
    grid-template-columns: 1fr;
  }
}
```

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/Guides/Media_queries)
- CSS {{Cssxref("@container")}}-At-Regel
- CSS {{Cssxref("contain")}}-Eigenschaft
- CSS {{Cssxref("container")}}-Kurzschrift-Eigenschaft
- CSS {{Cssxref("container-name")}}-Eigenschaft
- CSS {{cssxref("content-visibility")}}-Eigenschaft
- [Verwendung von Größen- und Stil-Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [Verwendung von Scroll-Status-Container-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [Say Hello to CSS Container Queries](https://ishadeed.com/article/say-hello-to-css-container-queries/) von Ahmad Shadeed
- [Container Queries: a Quick Start Guide](https://www.oddbird.net/2021/04/05/containerqueries/)
- [Sammlung von Container-Abfrage-Artikeln](https://github.com/sturobson/Awesome-Container-Queries)
