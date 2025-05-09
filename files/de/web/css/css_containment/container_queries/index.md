---
title: CSS-Containerabfragen
slug: Web/CSS/CSS_containment/Container_queries
l10n:
  sourceCommit: 4bc3d0a06c539c0810917e9396cfdcbb3c57ab6d
---

{{CSSRef}}

[Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) ermöglichen es Ihnen, Stile auf ein Element anzuwenden, basierend auf bestimmten Attributen seines Containers:

- Die Größe des Containers.
- Stile, die auf den Container angewendet werden.
- Der Scroll-Zustand des Containers oder eines seiner scrollenden Vorfahren.

Container-Abfragen sind eine Alternative zu [Media-Queries](/de/docs/Web/CSS/CSS_media_queries), die Stile auf Elemente basierend auf der Größe des Ansichtsfensters oder anderen Geräteeigenschaften anwenden.

Dieser Artikel bietet eine Einführung in die Verwendung von Container-Abfragen und konzentriert sich speziell auf Größen-Container-Abfragen. Andere Leitfäden behandeln [Stil](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries) und [Scroll-Zustand](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) Container-Abfragen im Detail.

![Zwei verschiedene Abfragetypen. Erstens, eine Media-Query basierend auf der Breite des Ansichtsfensters, die die volle Breite des Browsers ist. Zweitens, eine Container-Abfrage basierend auf der Breite eines Containerelements.](container-query.svg)

## Verwenden von Größen-Container-Abfragen

Während Container-Abfragen Stile basierend auf dem Container-Typ anwenden, wenden Größen-Container-Abfragen Stile speziell basierend auf den Abmessungen des Containers an. Um Größen-Container-Abfragen zu verwenden, müssen Sie einen **Containment-Kontext** auf einem Element deklarieren, sodass der Browser weiß, dass Sie später die Abmessungen dieses Containers abfragen möchten.
Verwenden Sie dazu die {{cssxref("container-type")}}-Eigenschaft mit einem Wert von `size`, `inline-size` oder `normal`.

Diese Werte haben die folgenden Auswirkungen:

- `size`
  - : Die Abfrage basiert auf den [inline und block](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) Abmessungen des Containers.
    Wendet Layout, Stil und Größen-[Eindämmung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) auf den Container an.
- `inline-size`
  - : Die Abfrage basiert auf den [inline](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) Abmessungen des Containers.
    Wendet Layout, Stil und inline-size Eindämmung auf das Element an.
- `normal`
  - : Das Element ist kein Abfrage-Container für Größen-Container-Abfragen, bleibt jedoch ein Abfrage-Container für Stil-Container-Abfragen.

Betrachten Sie das folgende Beispiel eines Kartenkomponents für einen Blogpost mit einem Titel und etwas Text:

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

Verwenden Sie anschließend die {{cssxref("@container")}} at-Regel, um eine Container-Abfrage zu definieren.
Die Abfrage im folgenden Beispiel wendet Stile auf Elemente basierend auf der Größe des nächsten Vorfahren mit einem Containment-Kontext an.
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

Mit Container-Abfragen kann die Karte in mehreren Bereichen einer Seite wiederverwendet werden, ohne jedes Mal genau wissen zu müssen, wo sie platziert wird.
Wenn der Container mit der Karte schmaler als `700px` ist, wird die Schrift der Karte klein sein, und wenn die Karte in einem Container ist, der breiter als `700px` ist, wird die Schriftgröße des Kartentitels größer sein.

Für weitere Informationen zur Syntax von Container-Abfragen siehe die {{cssxref("@container")}}-Seite.

### Benennen von Containment-Kontexten

Im vorherigen Abschnitt wendete eine Container-Abfrage Stile basierend auf dem nächsten Vorfahren mit einem Containment-Kontext an.
Es ist möglich, einem Containment-Kontext mit der {{Cssxref("container-name")}}-Eigenschaft einen Namen zu geben. Einmal benannt, kann der Name in einer `@container`-Abfrage verwendet werden, um einen bestimmten Container anzusprechen.
Das folgende Beispiel erstellt einen Containment-Kontext mit dem Namen `sidebar`:

```css
.post {
  container-type: inline-size;
  container-name: sidebar;
}
```

Sie können diesen Containment-Kontext dann mit der `@container`-at-Regel ansprechen:

```css
@container sidebar (min-width: 700px) {
  .card {
    font-size: 2em;
  }
}
```

Weitere Informationen zum Benennen von Containment-Kontexten finden Sie auf der {{cssxref("container-name")}}-Seite.

### Kurzsyntax für Container

Die Kurzsyntax zur Deklaration eines Containment-Kontextes ist die Verwendung der `container`-Eigenschaft:

```css
.post {
  container: sidebar / inline-size;
}
```

Für weitere Informationen zu dieser Eigenschaft siehe die {{Cssxref("container")}}-Referenz.

### Container-Abfrage Längeneinheiten

Wenn Sie Stile auf einen Container mithilfe von Container-Abfragen anwenden, können Sie Container-Abfrage-Längeneinheiten verwenden.
Diese Einheiten geben eine Länge relativ zu den Abmessungen eines Abfrage-Containers an.
Komponenten, die Längeneinheiten relativ zu ihrem Container verwenden, sind flexibler in verschiedenen Containern einsetzbar, ohne die konkreten Längenwerte neu berechnen zu müssen.

Wenn kein geeigneter Container für die Abfrage verfügbar ist, entspricht die Container-Abfrage-Längeneinheit der [kleinen Ansichtsfenstereinheit](/de/docs/Web/CSS/length#small_viewport_units) für diese Achse (`sv*`).

Die Container-Abfrage-Längeneinheiten sind:

- `cqw`: 1% der Breite eines Abfrage-Containers
- `cqh`: 1% der Höhe eines Abfrage-Containers
- `cqi`: 1% der inline size eines Abfrage-Containers
- `cqb`: 1% der block size eines Abfrage-Containers
- `cqmin`: Der kleinere Wert von entweder `cqi` oder `cqb`
- `cqmax`: Der größere Wert von entweder `cqi` oder `cqb`

Das folgende Beispiel verwendet die `cqi` Einheit, um die Schriftgröße einer Überschrift basierend auf der inline size des Containers festzulegen:

```css
@container (min-width: 700px) {
  .card h2 {
    font-size: max(1.5em, 1.23em + 2cqi);
  }
}
```

Für weitere Informationen zu diesen Einheiten siehe die [Container-Abfrage-Längeneinheiten](/de/docs/Web/CSS/length#container_query_length_units)-Referenz.

## Fallbacks für Container-Abfragen

Für Browser, die Container-Abfragen noch nicht unterstützen, können {{cssxref("grid")}} und {{cssxref("flex")}} verwendet werden, um einen ähnlichen Effekt für das hier verwendete Kartenkomponent zu erzielen.
Das folgende Beispiel verwendet eine {{cssxref("grid-template-columns")}}-Deklaration, um ein zweispaltiges Layout für das Kartenkomponent zu erstellen.

```css
.card {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
```

Wenn Sie ein einspaltiges Layout für Geräte mit einem kleineren Ansichtsfenster verwenden möchten, können Sie eine Media-Query verwenden, um das Grid-Template zu ändern:

```css
@media (max-width: 700px) {
  .card {
    grid-template-columns: 1fr;
  }
}
```

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/CSS_media_queries)
- CSS {{Cssxref("@container")}} at-Regel
- CSS {{Cssxref("contain")}}-Eigenschaft
- CSS {{Cssxref("container")}}-Kurzschreibweise
- CSS {{Cssxref("container-name")}}-Eigenschaft
- CSS {{cssxref("content-visibility")}}-Eigenschaft
- [Verwendung von Größen- und Stilcontainer-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Verwendung von Scroll-Zustand-Container-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- [Say Hello to CSS Container Queries](https://ishadeed.com/article/say-hello-to-css-container-queries/) von Ahmad Shadeed
- [Container Queries: a Quick Start Guide](https://www.oddbird.net/2021/04/05/containerqueries/)
- [Sammlung von Artikeln über Container-Abfragen](https://github.com/sturobson/Awesome-Container-Queries)
