---
title: CSS-Container-Abfragen
slug: Web/CSS/CSS_containment/Container_queries
l10n:
  sourceCommit: 4b6b77bc36496c88dcbe477ec46da678a85d8e6e
---

{{CSSRef}}

Container-Abfragen ermöglichen es Ihnen, Stile basierend auf der Größe des Containers eines Elements anzuwenden. Wenn beispielsweise in einem Container weniger Platz im umgebenden Kontext verfügbar ist, können Sie bestimmte Elemente ausblenden oder kleinere Schriftarten verwenden.

Container-Abfragen sind eine Alternative zu [Media-Queries](/de/docs/Web/CSS/CSS_media_queries), die Stile auf Elemente basierend auf der Größe des Ansichtsfensters oder anderen Gerätemerkmalen anwenden.

![Zwei verschiedene Abfragetypen. Erstens, eine Media-Query basierend auf der Breite des Ansichtsfensters, d.h. der vollen Breite des Browsers. Zweitens, eine Container-Abfrage basierend auf der Breite eines Containerelements.](container-query.svg)

## Verwendung von Container-Abfragen

Um Container-Abfragen zu verwenden, müssen Sie einen **Eindämmungskontext** auf einem Element deklarieren, damit der Browser weiß, dass Sie möglicherweise später die Abmessungen dieses Containers abfragen möchten.
Dazu verwenden Sie die {{cssxref("container-type")}} Eigenschaft mit einem Wert von `size`, `inline-size` oder `normal`.

Diese Werte haben folgende Auswirkungen:

- `size`
  - : Die Abfrage basiert auf den [Inline- und Block-Abmessungen](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) des Containers.
    Wendet Layout-, Stil- und Größen-[Eindämmung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) auf den Container an.
- `inline-size`
  - : Die Abfrage basiert auf den [Inline-Abmessungen](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) des Containers.
    Wendet Layout-, Stil- und Inlinegrößen-Eindämmung auf das Element an.
- `normal`
  - : Das Element ist kein Abfrage-Container für Containergrößen-Abfragen, bleibt aber ein Abfrage-Container für Container-Stil-Abfragen.

Betrachten Sie das folgende Beispiel einer Kartenkomponente für einen Blogbeitrag mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Sie können einen Eindämmungskontext mit der `container-type` Eigenschaft erstellen:

```css
.post {
  container-type: inline-size;
}
```

Verwenden Sie anschließend die {{cssxref("@container")}} At-Regel, um eine Container-Abfrage zu definieren.
Die Abfrage im folgenden Beispiel wird Stile auf Elemente anwenden, basierend auf der Größe des nächstgelegenen Vorfahren mit einem Eindämmungskontext.
Genauer gesagt wird diese Abfrage eine größere Schriftgröße für den Kartentitel anwenden, wenn der Container breiter als `700px` ist:

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

Weitere Informationen zur Syntax von Container-Abfragen finden Sie auf der {{cssxref("@container")}} Seite.

### Benennung von Eindämmungskontexten

Im vorherigen Abschnitt hat eine Container-Abfrage Stile basierend auf dem nächstgelegenen Vorfahren mit einem Eindämmungskontext angewendet.
Es ist möglich, einem Eindämmungskontext mit der {{Cssxref("container-name")}} Eigenschaft einen Namen zu geben. Nachdem sie benannt wurde, kann der Name in einer `@container` Abfrage verwendet werden, um einen bestimmten Container anzusprechen.
Das folgende Beispiel erstellt einen Eindämmungskontext mit dem Namen `sidebar`:

```css
.post {
  container-type: inline-size;
  container-name: sidebar;
}
```

Sie können dann diesen Eindämmungskontext mit der `@container` At-Regel ansprechen:

```css
@container sidebar (min-width: 700px) {
  .card {
    font-size: 2em;
  }
}
```

Weitere Informationen zur Benennung von Eindämmungskontexten sind auf der {{cssxref("container-name")}} Seite verfügbar.

### Kurzschreibtweise für Container

Die Kurzschreibweise zur Deklaration eines Eindämmungskontexts ist die Verwendung der `container` Eigenschaft:

```css
.post {
  container: sidebar / inline-size;
}
```

Weitere Informationen zu dieser Eigenschaft finden Sie in der {{Cssxref("container")}} Referenz.

### Längeneinheiten bei Container-Abfragen

Wenn Sie Stile auf einen Container mit Container-Abfragen anwenden, können Sie Längeneinheiten für Container-Abfragen verwenden.
Diese Einheiten geben eine Länge relativ zu den Abmessungen eines Abfrage-Containers an.
Komponenten, die Längeneinheiten relativ zu ihrem Container verwenden, sind flexibler in verschiedenen Containern einsetzbar, ohne die konkreten Längenwerte neu berechnen zu müssen.

Die Längeneinheiten bei Container-Abfragen sind:

- `cqw`: 1% der Breite eines Abfrage-Containers
- `cqh`: 1% der Höhe eines Abfrage-Containers
- `cqi`: 1% der Inlinegröße eines Abfrage-Containers
- `cqb`: 1% der Blockgröße eines Abfrage-Containers
- `cqmin`: Der kleinere Wert von entweder `cqi` oder `cqb`
- `cqmax`: Der größere Wert von entweder `cqi` oder `cqb`

Das folgende Beispiel verwendet die `cqi` Einheit, um die Schriftgröße einer Überschrift basierend auf der Inlinegröße des Containers festzulegen:

```css
@container (min-width: 700px) {
  .card h2 {
    font-size: max(1.5em, 1.23em + 2cqi);
  }
}
```

Weitere Informationen zu diesen Einheiten finden Sie in der [Container-Abfrage-Längeneinheiten](/de/docs/Web/CSS/length#container_query_length_units) Referenz.

## Fallbacks für Container-Abfragen

Für Browser, die Container-Abfragen noch nicht unterstützen, können {{cssxref("grid")}} und {{cssxref("flex")}} verwendet werden, um einen ähnlichen Effekt für die Kartenkomponente auf dieser Seite zu erzeugen.
Das folgende Beispiel verwendet eine {{cssxref("grid-template-columns")}} Deklaration, um ein Zwei-Spalten-Layout für die Kartenkomponente zu erstellen.

```css
.card {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
```

Wenn Sie ein Ein-Spalten-Layout für Geräte mit einem kleineren Ansichtsfenster verwenden möchten, können Sie eine Media-Query verwenden, um das Grid-Template zu ändern:

```css
@media (max-width: 700px) {
  .card {
    grid-template-columns: 1fr;
  }
}
```

## Siehe auch

- [Media-Queries](/de/docs/Web/CSS/CSS_media_queries)
- CSS {{Cssxref("@container")}} At-Regel
- CSS {{Cssxref("contain")}} Eigenschaft
- CSS {{Cssxref("container")}} Kurzschreibweise
- CSS {{Cssxref("container-name")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
- [Verwendung von Containergrößen- und Stil-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Say Hello to CSS Container Queries](https://ishadeed.com/article/say-hello-to-css-container-queries/) von Ahmad Shadeed
- [Container Queries: a Quick Start Guide](https://www.oddbird.net/2021/04/05/containerqueries/)
- [Sammlung von Artikeln über Container-Abfragen](https://github.com/sturobson/Awesome-Container-Queries)
