---
title: CSS Container Queries
slug: Web/CSS/CSS_containment/Container_queries
l10n:
  sourceCommit: 4b6b77bc36496c88dcbe477ec46da678a85d8e6e
---

{{CSSRef}}

Mit Container-Abfragen können Sie Stile auf ein Element basieren auf der Größe des Containers des Elements anwenden. Wenn beispielsweise ein Container im umgebenden Kontext weniger Platz hat, können Sie bestimmte Elemente ausblenden oder kleinere Schriftarten verwenden.

Container-Abfragen sind eine Alternative zu [Media Queries](/de/docs/Web/CSS/CSS_media_queries), die Stile auf Elemente basierend auf der Größe des Ansichtsfensters oder anderen Geräteeigenschaften anwenden.

![Zwei verschiedene Abfragetypen. Erstens, eine Media Query basierend auf der Breite des Ansichtsfensters, die die volle Breite des Browsers ist. Zweitens, eine Container-Abfrage basierend auf der Breite eines Containerelements.](container-query.svg)

## Verwendung von Container-Abfragen

Um Container-Abfragen zu verwenden, müssen Sie einen **Containment-Kontext** auf einem Element deklarieren, damit der Browser weiß, dass Sie später möglicherweise die Abmessungen dieses Containers abfragen möchten.
Verwenden Sie dazu die Eigenschaft {{cssxref("container-type")}} mit einem Wert von `size`, `inline-size` oder `normal`.

Diese Werte haben folgende Auswirkungen:

- `size`
  - : Die Abfrage basiert auf den [Inline- und Blockdimensionen](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) des Containers.
    Wendet Layout-, Stil- und Größen[containment](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) auf den Container an.
- `inline-size`
  - : Die Abfrage basiert auf den [Inline-Dimensionen](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) des Containers.
    Wendet Layout-, Stil- und Inline-Größen-Containment auf das Element an.
- `normal`
  - : Das Element ist kein Abfragecontainer für Containergrößen-Abfragen, bleibt aber ein Abfragecontainer für Container-Stil-Abfragen.

Betrachten Sie das folgende Beispiel eines Karten-Komponenten für einen Blogpost mit einem Titel und einigen Texten:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Sie können einen Containment-Kontext mit der Eigenschaft `container-type` erstellen:

```css
.post {
  container-type: inline-size;
}
```

Verwenden Sie als nächstes die Regel {{cssxref("@container")}}, um eine Container-Abfrage zu definieren.
Die Abfrage im folgenden Beispiel wird Stile auf Elemente basierend auf der Größe des nächsten Vorfahrens mit einem Containment-Kontext anwenden.
Insbesondere wird diese Abfrage eine größere Schriftgröße für den Kartentitel anwenden, wenn der Container breiter als `700px` ist:

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

Mit Container-Abfragen kann die Karte in mehreren Bereichen einer Seite wiederverwendet werden, ohne genau zu wissen, wo sie jedes Mal platziert wird.
Wenn der Container mit der Karte schmaler als `700px` ist, wird die Schriftgröße des Kartentitels klein sein, und wenn die Karte in einem Container ist, der breiter als `700px` ist, wird die Schriftgröße des Kartentitels größer sein.

Weitere Informationen zur Syntax von Container-Abfragen finden Sie auf der Seite {{cssxref("@container")}}.

### Benennung von Containment-Kontexten

Im vorherigen Abschnitt wurden Stile basierend auf dem nächsten Vorfahren mit einem Containment-Kontext angewendet.
Es ist möglich, einem Containment-Kontext einen Namen zu geben, indem Sie die Eigenschaft {{Cssxref("container-name")}} verwenden. Sobald benannt, kann der Name in einer `@container`-Abfrage verwendet werden, um einen bestimmten Container anzusprechen.
Das folgende Beispiel erstellt einen Containment-Kontext mit dem Namen `sidebar`:

```css
.post {
  container-type: inline-size;
  container-name: sidebar;
}
```

Sie können dann diesen Containment-Kontext mit der `@container`-Regel ansprechen:

```css
@container sidebar (min-width: 700px) {
  .card {
    font-size: 2em;
  }
}
```

Weitere Informationen zur Benennung von Containment-Kontexten finden Sie auf der Seite {{cssxref("container-name")}}.

### Kurzschrift-Container-Syntax

Die Kurzschriftmethode zur Deklaration eines Containment-Kontexts besteht darin, die Eigenschaft `container` zu verwenden:

```css
.post {
  container: sidebar / inline-size;
}
```

Weitere Informationen zu dieser Eigenschaft finden Sie in der Referenz {{Cssxref("container")}}.

### Längeneinheiten für Container-Abfragen

Wenn Sie Container-Abfragen verwenden, können Sie Längeneinheiten für Container-Abfragen verwenden.
Diese Einheiten geben eine Länge relativ zu den Abmessungen eines Abfragecontainers an.
Komponenten, die Längeneinheiten relativ zu ihrem Container verwenden, sind in verschiedenen Containern flexibler einsetzbar, ohne die exakten Längenwerte neu berechnen zu müssen.

Die Längeneinheiten für Container-Abfragen sind:

- `cqw`: 1% der Breite eines Abfragecontainers
- `cqh`: 1% der Höhe eines Abfragecontainers
- `cqi`: 1% der Inline-Größe eines Abfragecontainers
- `cqb`: 1% der Block-Größe eines Abfragecontainers
- `cqmin`: Der kleinere Wert von entweder `cqi` oder `cqb`
- `cqmax`: Der größere Wert von entweder `cqi` oder `cqb`

Das folgende Beispiel verwendet die Einheit `cqi`, um die Schriftgröße einer Überschrift basierend auf der Inline-Größe des Containers festzulegen:

```css
@container (min-width: 700px) {
  .card h2 {
    font-size: max(1.5em, 1.23em + 2cqi);
  }
}
```

Weitere Informationen zu diesen Einheiten finden Sie in der Referenz zu [Längeneinheiten für Container-Abfragen](/de/docs/Web/CSS/length#container_query_length_units).

## Fallbacks für Container-Abfragen

Für Browser, die Container-Abfragen noch nicht unterstützen, können {{cssxref("grid")}} und {{cssxref("flex")}} verwendet werden, um einen ähnlichen Effekt für die auf dieser Seite verwendete Kartenkomponente zu schaffen.
Das folgende Beispiel verwendet eine Deklaration {{cssxref("grid-template-columns")}}, um ein Zwei-Spalten-Layout für die Kartenkomponente zu erstellen.

```css
.card {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
```

Wenn Sie ein Ein-Spalten-Layout für Geräte mit einem kleineren Ansichtsfenster verwenden möchten, können Sie eine Media Query verwenden, um das Rastervorlage zu ändern:

```css
@media (max-width: 700px) {
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
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Say Hello to CSS Container Queries](https://ishadeed.com/article/say-hello-to-css-container-queries/) von Ahmad Shadeed
- [Container Queries: a Quick Start Guide](https://www.oddbird.net/2021/04/05/containerqueries/)
- [Sammlung von Container-Abfrage Artikeln](https://github.com/sturobson/Awesome-Container-Queries)
