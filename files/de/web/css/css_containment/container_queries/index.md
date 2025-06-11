---
title: CSS Container-Abfragen
short-title: Container queries
slug: Web/CSS/CSS_containment/Container_queries
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Container-Abfragen ermöglichen es Ihnen, Stile für ein Element basierend auf bestimmten Attributen seines Containers anzuwenden:

- Die Größe des Containers.
- Auf den Container angewendete Stile.
- Der Scroll-Status des Containers oder seines scrollenden Vorfahren.

Container-Abfragen sind eine Alternative zu [Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries), die Stile für Elemente basierend auf der Größe des Ansichtsfensters oder anderen Gerätemerkmalen anwenden.

Dieser Artikel gibt eine Einführung in die Verwendung von Container-Abfragen, mit einem speziellen Schwerpunkt auf Größen-Container-Abfragen. Andere Leitfäden behandeln [Stil-](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries) und [Scroll-Status-](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) Container-Abfragen im Detail.

![Zwei verschiedene Abfragetypen. Erstens eine Media-Abfrage basierend auf der Breite des Ansichtsfensters, was die volle Breite des Browsers ist. Zweitens eine Container-Abfrage basierend auf der Breite eines Container-Elements.](container-query.svg)

## Verwendung von Größen-Container-Abfragen

Während Container-Abfragen Stile basierend auf dem Containertyp anwenden, wenden Größen-Container-Abfragen Stile speziell basierend auf den Abmessungen des Containers an. Um Größen-Container-Abfragen zu nutzen, müssen Sie einen **Containment-Kontext** für ein Element deklarieren, damit der Browser weiß, dass Sie möglicherweise später die Abmessungen dieses Containers abfragen möchten.
Dazu verwenden Sie die {{cssxref("container-type")}} Eigenschaft mit einem Wert von `size`, `inline-size` oder `normal`.

Diese Werte haben folgende Auswirkungen:

- `size`
  - : Die Abfrage basiert auf den [Inline- und Block-](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) Dimensionen des Containers.
    Wendet Layout-, Stil- und Größen-[Einschränkungen](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) auf den Container an.
- `inline-size`
  - : Die Abfrage basiert auf den [Inline-](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) Dimensionen des Containers.
    Wendet Layout-, Stil- und Inline-Größen-Einschränkungen auf das Element an.
- `normal`
  - : Das Element ist kein Abfrage-Container für Größen-Container-Abfragen, bleibt jedoch ein Abfrage-Container für Stil-Container-Abfragen.

Betrachten Sie das folgende Beispiel eines Kartenkomponenten für einen Blogeintrag mit einem Titel und etwas Text:

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

Verwenden Sie anschließend die {{cssxref("@container")}} At-Regel, um eine Container-Abfrage zu definieren.
Die Abfrage im folgenden Beispiel wird Stile für Elemente basierend auf der Größe des nächsten Vorfahren mit einem Containment-Kontext anwenden.
Speziell wird diese Abfrage eine größere Schriftgröße für den Kartentitel anwenden, wenn der Container breiter als `700px` ist:

```css
/* Default heading styles for the card title */
.card h2 {
  font-size: 1em;
}

/* If the container is larger than 700px */
@container (min-width: 700px) {
  .card h2 {
    font-size: 2em;
  }
}
```

Mit Container-Abfragen kann die Karte in mehreren Bereichen einer Seite wiederverwendet werden, ohne jedes Mal genau wissen zu müssen, wo sie platziert wird.
Wenn der Container mit der Karte schmaler als `700px` ist, wird die Schrift des Kartentitels klein sein, und wenn die Karte in einem Container ist, der breiter als `700px` ist, wird die Schrift des Kartentitels größer sein.

Weitere Informationen zur Syntax von Container-Abfragen finden Sie auf der {{cssxref("@container")}} Seite.

### Benennung von Containment-Kontexten

Im vorherigen Abschnitt hat eine Container-Abfrage Stile basierend auf dem nächsten Vorfahren mit einem Containment-Kontext angewendet.
Es ist möglich, einem Containment-Kontext einen Namen zu geben, indem die {{Cssxref("container-name")}} Eigenschaft verwendet wird. Einmal benannt, kann der Name in einer `@container` Abfrage verwendet werden, um einen bestimmten Container zu zielen.
Das folgende Beispiel erstellt einen Containment-Kontext mit dem Namen `sidebar`:

```css
.post {
  container-type: inline-size;
  container-name: sidebar;
}
```

Sie können dann diesen Containment-Kontext mit der `@container` At-Regel anvisieren:

```css
@container sidebar (min-width: 700px) {
  .card {
    font-size: 2em;
  }
}
```

Weitere Informationen zur Benennung von Containment-Kontexten sind auf der {{cssxref("container-name")}} Seite verfügbar.

### Shorthand-Container-Syntax

Die Kurzschreibweise zur Deklaration eines Containment-Kontexts ist die Verwendung der `container` Eigenschaft:

```css
.post {
  container: sidebar / inline-size;
}
```

Weitere Informationen zu dieser Eigenschaft finden Sie im {{Cssxref("container")}} Referenz.

### Container-Abfrage-Längeneinheiten

Beim Anwenden von Stilen auf einen Container mit Container-Abfragen können Sie Container-Abfrage-Längeneinheiten verwenden.
Diese Einheiten spezifizieren eine Länge relativ zu den Abmessungen eines Abfrage-Containers.
Komponenten, die Längeneinheiten relativ zu ihrem Container verwenden, sind flexibler in unterschiedlichen Containern zu verwenden, ohne konkrete Längenwerte neu berechnen zu müssen.

Wenn kein geeigneter Container für die Abfrage verfügbar ist, wird die Container-Abfrage-Längeneinheit standardmäßig auf die [kleine Ansichtsfenstereinheit](/de/docs/Web/CSS/length#small_viewport_units) für diese Achse (`sv*`) festgelegt.

Die Container-Abfrage-Längeneinheiten sind:

- `cqw`: 1% der Breite eines Abfrage-Containers
- `cqh`: 1% der Höhe eines Abfrage-Containers
- `cqi`: 1% der Inline-Größe eines Abfrage-Containers
- `cqb`: 1% der Blockgröße eines Abfrage-Containers
- `cqmin`: Der kleinere Wert von entweder `cqi` oder `cqb`
- `cqmax`: Der größere Wert von entweder `cqi` oder `cqb`

Das folgende Beispiel verwendet die `cqi` Einheit, um die Schriftgröße eines Headings basierend auf der Inline-Größe des Containers festzulegen:

```css
@container (min-width: 700px) {
  .card h2 {
    font-size: max(1.5em, 1.23em + 2cqi);
  }
}
```

Weitere Informationen zu diesen Einheiten finden Sie in der [Container query length units](/de/docs/Web/CSS/length#container_query_length_units) Referenz.

## Fallbacks für Container-Abfragen

Für Browser, die Container-Abfragen noch nicht unterstützen, können {{cssxref("grid")}} und {{cssxref("flex")}} verwendet werden, um einen ähnlichen Effekt für die hier verwendete Kartenkomponente zu erzeugen.
Das folgende Beispiel verwendet eine {{cssxref("grid-template-columns")}} Deklaration, um ein zweispaltiges Layout für die Kartenkomponente zu erstellen.

```css
.card {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
```

Wenn Sie ein einkolumniges Layout für Geräte mit einem kleineren Ansichtsfenster verwenden möchten, können Sie eine Media-Abfrage verwenden, um das Gitter-Template zu ändern:

```css
@media (max-width: 700px) {
  .card {
    grid-template-columns: 1fr;
  }
}
```

## Siehe auch

- [Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries)
- CSS {{Cssxref("@container")}} At-Regel
- CSS {{Cssxref("contain")}} Eigenschaft
- CSS {{Cssxref("container")}} Kurzschreibweise
- CSS {{Cssxref("container-name")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
- [Verwendung von Größen- und Stilcontainer-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Verwendung von Scroll-Status-Container-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- [Say Hello to CSS Container Queries](https://ishadeed.com/article/say-hello-to-css-container-queries/) von Ahmad Shadeed
- [Container-Abfragen: ein Schnellstart-Leitfaden](https://www.oddbird.net/2021/04/05/containerqueries/)
- [Sammlung von Container-Abfrage-Artikeln](https://github.com/sturobson/Awesome-Container-Queries)
