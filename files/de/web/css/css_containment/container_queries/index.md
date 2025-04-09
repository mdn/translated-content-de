---
title: CSS-Containerabfragen
slug: Web/CSS/CSS_containment/Container_queries
l10n:
  sourceCommit: 8905094f4366d2e4d5876a3d75b88880d0aba60b
---

{{CSSRef}}

Containerabfragen ermöglichen es Ihnen, einem Element basierend auf bestimmten Attributen seines Containers Stile zuzuweisen:

- Die Größe des Containers.
- Auf den Container angewendete Stile.
- Der Scroll-Zustand des Containers oder dessen scrollendem Vorfahren.

Containerabfragen sind eine Alternative zu [Media Queries](/de/docs/Web/CSS/CSS_media_queries), die Stile auf Elemente basierend auf der Größe des Ansichtsfensters oder anderen Geräteeigenschaften anwenden.

Dieser Artikel bietet eine Einführung in die Verwendung von Containerabfragen mit speziellem Fokus auf Größen-Containerabfragen. Andere Leitfäden besprechen [Stil-](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries) und [Scroll-Zustands-](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) Containerabfragen im Detail.

![Zwei verschiedene Abfragetypen. Erstens eine Media Query, die auf der Breite des Ansichtsfensters basiert, das die volle Breite des Browsers hat. Zweitens eine Containerabfrage, die auf der Breite eines Containerelements basiert.](container-query.svg)

## Verwendung von Größen-Containerabfragen

Containerabfragen testen Elemente basierend auf ihrem Containertyp. Um Größen-Containerabfragen zu verwenden, müssen Sie einen **Einschließungskontext** auf einem Element deklarieren, damit der Browser weiß, dass Sie möglicherweise später die Abmessungen dieses Containers abfragen möchten.
Verwenden Sie dazu die {{cssxref("container-type")}}-Eigenschaft mit einem Wert von `size`, `inline-size` oder `normal`.

Diese Werte haben die folgenden Effekte:

- `size`
  - : Die Abfrage basiert auf den [Inline- und Block-](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) Abmessungen des Containers.
    Wendet Layout-, Stil- und Größen-[Einschließung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) auf den Container an.
- `inline-size`
  - : Die Abfrage basiert auf den [Inline-](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) Abmessungen des Containers.
    Wendet Layout-, Stil- und Inline-Größe-Einschließung auf das Element an.
- `normal`
  - : Das Element ist kein Abfragecontainer für Größen-Containerabfragen, bleibt jedoch ein Abfragecontainer für Container-Stilabfragen.

Betrachten Sie das folgende Beispiel eines Kartenkomponents für einen Blogbeitrag mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Sie können einen Einschließungskontext mit der `container-type`-Eigenschaft erstellen:

```css
.post {
  container-type: inline-size;
}
```

Verwenden Sie anschließend die {{cssxref("@container")}}-Regel, um eine Containerabfrage zu definieren.
Die Abfrage im folgenden Beispiel wird Stile auf Elemente basierend auf der Größe des nächstgelegenen Vorfahren mit einem Einschließungskontext anwenden.
Konkret wird diese Abfrage eine größere Schriftgröße für den Kartentitel anwenden, wenn der Container breiter als `700px` ist:

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

Mit Containerabfragen kann die Karte in mehreren Bereichen einer Seite wiederverwendet werden, ohne zu wissen, wo sie jedes Mal platziert wird.
Wenn der Container mit der Karte schmaler als `700px` ist, wird die Schrift des Kartentitels klein sein, und wenn die Karte in einem Container ist, der breiter als `700px` ist, wird die Schrift des Kartentitels größer sein.

Weitere Informationen zur Syntax von Containerabfragen finden Sie auf der {{cssxref("@container")}}-Seite.

### Benennung von Einschließungskontexten

Im vorherigen Abschnitt hat eine Containerabfrage Stile basierend auf dem nächstgelegenen Vorfahren mit einem Einschließungskontext angewendet.
Es ist möglich, einem Einschließungskontext mit der {{Cssxref("container-name")}}-Eigenschaft einen Namen zu geben. Sobald ein Name vergeben ist, kann dieser in einer `@container`-Abfrage verwendet werden, um einen bestimmten Container zu targetieren.
Das folgende Beispiel erstellt einen Einschließungskontext mit dem Namen `sidebar`:

```css
.post {
  container-type: inline-size;
  container-name: sidebar;
}
```

Sie können dann diesen Einschließungskontext mit der `@container`-Regel anvisieren:

```css
@container sidebar (min-width: 700px) {
  .card {
    font-size: 2em;
  }
}
```

Weitere Informationen zur Benennung von Einschließungskontexten finden Sie auf der {{cssxref("container-name")}}-Seite.

### Kurzschrift-Container-Syntax

Die Kurzschriftweise, einen Einschließungskontext zu deklarieren, ist die Verwendung der `container`-Eigenschaft:

```css
.post {
  container: sidebar / inline-size;
}
```

Weitere Informationen zu dieser Eigenschaft finden Sie in der {{Cssxref("container")}}-Referenz.

### Container-Abfragelängeneinheiten

Beim Anwenden von Stilen auf einen Container mithilfe von Containerabfragen können Container-Abfragelängeneinheiten verwendet werden.
Diese Einheiten geben eine Länge relativ zu den Abmessungen eines Abfragecontainers an.
Komponenten, die Längeneinheiten relativ zu ihrem Container verwenden, sind flexibler in verschiedenen Containern einsetzbar, ohne dass konkrete Längenwerte neu berechnet werden müssen.

Wenn kein geeigneter Container für die Abfrage verfügbar ist, wird die Container-Abfragelängeneinheit standardmäßig auf die [kleine Ansichtsfenstereinheit](/de/docs/Web/CSS/length#small_viewport_units) für diese Achse (`sv*`) gesetzt.

Die Container-Abfragelängeneinheiten sind:

- `cqw`: 1% der Breite eines Abfragecontainers
- `cqh`: 1% der Höhe eines Abfragecontainers
- `cqi`: 1% der Inline-Größe eines Abfragecontainers
- `cqb`: 1% der Blockgröße eines Abfragecontainers
- `cqmin`: Der kleinere Wert von entweder `cqi` oder `cqb`
- `cqmax`: Der größere Wert von entweder `cqi` oder `cqb`

Das folgende Beispiel verwendet die `cqi`-Einheit, um die Schriftgröße eines Titels basierend auf der Inline-Größe des Containers festzulegen:

```css
@container (min-width: 700px) {
  .card h2 {
    font-size: max(1.5em, 1.23em + 2cqi);
  }
}
```

Weitere Informationen zu diesen Einheiten finden Sie in der Referenz zu [Container-Abfragelängeneinheiten](/de/docs/Web/CSS/length#container_query_length_units).

## Fallbacks für Containerabfragen

Für Browser, die Containerabfragen noch nicht unterstützen, können {{cssxref("grid")}} und {{cssxref("flex")}} verwendet werden, um einen ähnlichen Effekt für den auf dieser Seite verwendeten Kartenkomponente zu erzeugen.
Das folgende Beispiel verwendet eine {{cssxref("grid-template-columns")}}-Deklaration, um ein Zweispaltenlayout für die Kartenkomponente zu erstellen.

```css
.card {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
```

Wenn Sie ein Einspaltenlayout für Geräte mit einem kleineren Ansichtsfenster verwenden möchten, können Sie eine Media Query verwenden, um die Rastervorlage zu ändern:

```css
@media (max-width: 700px) {
  .card {
    grid-template-columns: 1fr;
  }
}
```

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/CSS_media_queries)
- CSS {{Cssxref("@container")}} At-Regel
- CSS {{Cssxref("contain")}} Eigenschaft
- CSS {{Cssxref("container")}} Kürzel-Eigenschaft
- CSS {{Cssxref("container-name")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
- [Verwendung von Größen- und Stil-Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Verwendung von Scroll-Zustands-Containerabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- [Say Hello to CSS Container Queries](https://ishadeed.com/article/say-hello-to-css-container-queries/) von Ahmad Shadeed
- [Container Queries: a Quick Start Guide](https://www.oddbird.net/2021/04/05/containerqueries/)
- [Sammlung von Container Queries Artikeln](https://github.com/sturobson/Awesome-Container-Queries)
