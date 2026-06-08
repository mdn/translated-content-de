---
title: CSS-Container-Abfragen
short-title: Container queries
slug: Web/CSS/Guides/Containment/Container_queries
l10n:
  sourceCommit: 2ce88199869b63f8da3bbeafd899400f7579cce9
---

Container-Abfragen ermöglichen es Ihnen, einem Element basierend auf bestimmten Attributen seines Containers Stile zuzuweisen:

- Dem {{cssxref("container-name")}}.
- Der Größe des Containers.
- Auf den Container angewendeten Stilen.
- Der Scroll-Position des Containers oder dessen scrollendem Vorfahren.
- Ob der Container [ankerpositioniert](/de/docs/Web/CSS/Guides/Anchor_positioning) ist und eine [Fallback-Option für die Positionsprüfung](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) darauf angewendet wurde.

Container-Abfragen sind eine Alternative zu [Media Queries](/de/docs/Web/CSS/Guides/Media_queries), die Stile auf Elemente basierend auf der Größe des Viewports oder anderen Gerätemerkmalen anwenden.

Dieser Artikel bietet eine Einführung in die Verwendung von Container-Abfragen, mit einem besonderen Fokus auf Größen-Container-Abfragen. Andere Leitfäden behandeln [Stil-](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries), [Scroll-Zustand-](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries) und [ankerbezogene](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries) Container-Abfragen im Detail.

![Zwei verschiedene Abfragetypen. Erstens, eine Media Query basierend auf der Breite des Viewports, die die volle Breite des Browsers ist. Zweitens, eine Container-Abfrage basierend auf der Breite eines Containerelements.](container-query.svg)

## Verwendung von Container-Größen-Abfragen

Während Container-Abfragen Stile basierend auf dem Containernamen oder -typ anwenden, beziehen sich Container-Größen-Abfragen speziell auf die Abmessungen des Containers. Um Container-Größen-Abfragen zu verwenden, müssen Sie einen [Containment-Kontext](/de/docs/Web/CSS/Guides/Containment/Container_queries#naming_containment_contexts) auf einem Element deklarieren, damit der Browser weiß, dass Sie möglicherweise später die Abmessungen dieses Containers abfragen möchten.
Verwenden Sie dazu die {{cssxref("container-type")}} Eigenschaft mit einem Wert von `size`, `inline-size` oder `normal`.

Diese Werte haben die folgenden Effekte:

- `size`
  - : Die Abfrage basiert auf den [Inline- und Block-](/de/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts#block_and_inline_dimensions) Abmessungen des Containers.
    Wendet Layout-, Stil- und Größen-[Einschränkung](/de/docs/Web/CSS/Guides/Containment/Using) auf den Container an.
- `inline-size`
  - : Die Abfrage basiert auf den [Inline-](/de/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts#block_and_inline_dimensions) Abmessungen des Containers.
    Wendet Layout-, Stil- und Inline-Größeneinschränkung auf das Element an.
- `normal`
  - : Der Standardwert. Das Element ist kein Abfragecontainer für Container-Größen-Abfragen, kann aber dennoch als Abfragecontainer für [nur-namens-Container-Abfragen](#nur-namens-container-abfragen) oder Container-Stil-Abfragen verwendet werden.

Betrachten Sie das folgende Beispiel eines Kartenbausteins für einen Blogbeitrag mit einem Titel und etwas Text:

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

Mit Container-Abfragen kann die Karte in mehreren Bereichen einer Seite wiederverwendet werden, ohne dass es erforderlich ist, zu wissen, wo genau sie jedes Mal platziert wird.
Wenn der Container mit der Karte schmaler als `700px` ist, wird die Schrift des Kartentitels klein sein, und wenn die Karte in einem Container ist, der breiter als `700px` ist, wird die Schrift des Kartentitels größer sein.

Für weitere Informationen zur Syntax von Container-Abfragen, siehe die {{cssxref("@container")}} Seite.

## Benennung von Containment-Kontexten

Im vorherigen Abschnitt wurden Stile basierend auf dem nächsten Vorfahren mit einem Containment-Kontext angewendet.
Es ist möglich, einem Containment-Kontext einen Namen zu geben, indem die {{Cssxref("container-name")}} Eigenschaft verwendet wird. Einmal benannt, kann der Name in einer `@container` Abfrage verwendet werden, um einen bestimmten Container zu adressieren.
Das folgende Beispiel erstellt einen Containment-Kontext mit dem Namen `sidebar`:

```css
.post {
  container-type: inline-size;
  container-name: sidebar;
}
```

Sie können dann diesen Containment-Kontext mit der `@container` At-Regel ansprechen:

```css
@container sidebar (width > 700px) {
  .card {
    font-size: 2em;
  }
}
```

Weitere Informationen zum Benennen von Containment-Kontexten finden Sie auf der {{cssxref("container-name")}} Seite.

## Nur-namens-Container-Abfragen

Neben der Verwendung eines {{cssxref("container-name")}} zusammen mit einem [`<container-query>`](/de/docs/Web/CSS/Reference/At-rules/@container#container-query), können Sie einen Container nur mit seinem Namen abfragen. Diese sogenannten **nur-namens-Container-Abfragen** ermöglichen es, Stile selektiv auf Elemente anzuwenden, basierend darauf, ob sie einen Vorfahren mit einem bestimmten `container-name` haben.

Betrachten Sie zum Beispiel das folgende HTML:

```html
<div id="container">
  <p>I'm in the container.</p>
  <p>I'm also in the container.</p>
</div>
<p>I'm not in the container.</p>
```

Wenn wir dem Container einen Namen zuweisen:

```css
#container {
  container-name: my-container;
}
```

Können wir dann Stile nur selektiv auf Elemente innerhalb dieses Containers anwenden:

```css
@container my-container {
  p {
    background-color: lime;
    font-size: 1.3rem;
    width: 50vw;
    padding: 0.5rem;
    font-family: sans-serif;
  }
}
```

In diesem Beispiel würden die angegebenen Stile nur auf die ersten und zweiten {{htmlelement("p")}} Elemente angewendet, nicht jedoch auf das dritte.

## Kurzschreibweise bei Container-Syntax

Die Kurzschreibweise zur Deklarierung eines Containment-Kontextes ist die Verwendung der `container` Eigenschaft:

```css
.post {
  container: sidebar / inline-size;
}
```

Für weitere Informationen zu dieser Eigenschaft, siehe die {{Cssxref("container")}} Referenz.

## Längeneinheiten für Container-Abfragen

Bei der Anwendung von Stilen auf die Nachkommen eines Containers unter Verwendung von Größen-Container-Abfragen (d.h. die {{cssxref("container-type")}} ist auf `size` oder `inline-size` gesetzt), können Sie Container-Abfrage-Längeneinheiten verwenden.
Diese Einheiten geben eine Länge relativ zu den Abmessungen eines Abfragecontainers an.
Komponenten, die Längeneinheiten relativ zu ihrem Container verwenden, sind flexibler in verschiedenen Containern zu verwenden, ohne dass die konkreten Längenwerte neu berechnet werden müssen.

Wenn kein geeigneter Container für die Abfrage verfügbar ist, ist die Container-Abfrage-Längeneinheit standardmäßig die [kleine Viewport-Einheit](/de/docs/Web/CSS/Reference/Values/length#small_viewport_units) für diese Achse (`sv*`).

Die Container-Abfrage-Längeneinheiten sind:

- `cqw`: 1% der Breite eines Abfragecontainers
- `cqh`: 1% der Höhe eines Abfragecontainers
- `cqi`: 1% der Inline-Größe eines Abfragecontainers
- `cqb`: 1% der Block-Größe eines Abfragecontainers
- `cqmin`: Der kleinere Wert von entweder `cqi` oder `cqb`
- `cqmax`: Der größere Wert von entweder `cqi` oder `cqb`

Das folgende Beispiel verwendet die `cqi` Einheit, um die Schriftgröße einer Überschrift basierend auf der Inline-Größe des Containers zu setzen:

```css
@container (width > 700px) {
  .card h2 {
    font-size: max(1.5em, 1.23em + 2cqi);
  }
}
```

Für weitere Informationen zu diesen Einheiten siehe die [Container-Abfrage Längeneinheiten](/de/docs/Web/CSS/Reference/Values/length#container_query_length_units) Referenz.

## Fallback-Lösungen für Container-Abfragen

Für Browser, die Container-Abfragen noch nicht unterstützen, können {{cssxref("grid")}} und {{cssxref("flex")}} verwendet werden, um einen ähnlichen Effekt für den auf dieser Seite verwendeten Kartenkomponenten zu erzielen.
Das folgende Beispiel verwendet eine {{cssxref("grid-template-columns")}} Deklaration, um ein zweispaltiges Layout für die Kartenkomponente zu erstellen.

```css
.card {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
```

Wenn Sie ein einspaltiges Layout für Geräte mit kleinerem Viewport verwenden möchten, können Sie eine Media Query verwenden, um die Rastervorlage zu ändern:

```css
@media (width <= 700px) {
  .card {
    grid-template-columns: 1fr;
  }
}
```

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/Guides/Media_queries)
- CSS {{Cssxref("@container")}} At-Regel
- CSS {{Cssxref("contain")}} Eigenschaft
- CSS {{Cssxref("container")}} Kurzschreibweise
- CSS {{Cssxref("container-name")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
- [Verwendung von Container-Größen- und Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [Verwendung von ankerbezogenen Container-Abfragen](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries)
- [Say Hello to CSS Container Queries](https://ishadeed.com/article/say-hello-to-css-container-queries/) von Ahmad Shadeed
- [Container Queries: a Quick Start Guide](https://www.oddbird.net/2021/04/05/containerqueries/)
- [Sammlung von Artikeln zu Container-Abfragen](https://github.com/sturobson/Awesome-Container-Queries)
