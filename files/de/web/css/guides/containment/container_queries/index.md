---
title: CSS-Container-Abfragen
short-title: Container queries
slug: Web/CSS/Guides/Containment/Container_queries
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

Container-Abfragen ermöglichen es Ihnen, Stile auf ein Element basierend auf bestimmten Attributen seines Containers anzuwenden:

- Der {{cssxref("container-name")}}.
- Die Größe des Containers.
- Auf den Container angewendete Stile.
- Der Scrollzustand des Containers oder der eines seiner scrollenden Vorfahren.
- Ob der Container [anker-positioniert](/de/docs/Web/CSS/Guides/Anchor_positioning) ist und eine [Fallback-Option für Position-Try](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) angewendet wurde.

Container-Abfragen sind eine Alternative zu [Media Queries](/de/docs/Web/CSS/Guides/Media_queries), die auf Elemente basierend auf der Größe des Viewports oder anderen Gerätemerkmalen angewendet werden.

Dieser Artikel bietet eine Einführung in die Verwendung von Container-Abfragen, wobei der Schwerpunkt speziell auf Größen-Container-Abfragen liegt. Andere Leitfäden behandeln [Stil](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries), [Scroll-Zustand](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries) und [verankerte](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries) Container-Abfragen im Detail.

![Zwei verschiedene Abfragetypen: Erstens, eine Media Query, die auf der Breite des Viewports basiert, der die volle Breite des Browsers ist. Zweitens, eine Container-Abfrage, die auf der Breite eines Containerelements basiert.](container-query.svg)

## Verwendung von Größen-Container-Abfragen

Während Container-Abfragen Stile basierend auf dem Container-Namen oder Typ anwenden, beziehen sich Größen-Container-Abfragen speziell auf die Abmessungen eines Containers. Um Größen-Container-Abfragen zu verwenden, müssen Sie einen [Containment-Kontext](#benennen_von_containment-kontexten) auf einem Element deklarieren, damit der Browser weiß, dass Sie später die Abmessungen dieses Containers abfragen möchten.
Verwenden Sie dazu die Eigenschaft {{cssxref("container-type")}} mit einem Wert von `size`, `inline-size` oder `normal`.

Diese Werte haben folgende Auswirkungen:

- `size`
  - : Die Abfrage basiert auf den [Inline- und Block-Abmessungen](/de/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts#block_and_inline_dimensions) des Containers.
    Wendet Layout-, Stil- und Größen- [Containment](/de/docs/Web/CSS/Guides/Containment/Using) auf den Container an.
- `inline-size`
  - : Die Abfrage wird basierend auf den [Inline-Abmessungen](/de/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts#block_and_inline_dimensions) des Containers durchgeführt.
    Wendet Layout-, Stil- und Inline-Größencontainment auf das Element an.
- `normal`
  - : Der Standardwert. Das Element ist kein Abfragecontainer für Größen-Container-Abfragen, kann aber dennoch als Abfragecontainer für [nur namensbasierte Container-Abfragen](#nur_namensbasierte_container-abfragen) oder Container-Stil-Abfragen verwendet werden.

Betrachten Sie das folgende Beispiel eines Kartenkomponenten für einen Blogbeitrag mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Sie können einen Containment-Kontext mit der `container-type` Eigenschaft erzeugen:

```css
.post {
  container-type: inline-size;
}
```

Verwenden Sie anschließend die @container-Regel von {{cssxref("@container")}} um eine Container-Abfrage zu definieren.
Die Abfrage im folgenden Beispiel wird Stile auf Elemente basierend auf der Größe des nächstgelegenen Vorfahren mit einem Containment-Kontext anwenden.
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

Mit Container-Abfragen kann die Karte in mehreren Bereichen einer Seite wiederverwendet werden, ohne jedes Mal genau zu wissen, wo sie platziert wird.
Wenn der Container mit der Karte schmaler als `700px` ist, wird die Schrift des Kartentitels klein sein, und wenn die Karte in einem Container ist, der breiter als `700px` ist, wird die Schrift des Kartentitels größer sein.

Weitere Informationen zur Syntax von Container-Abfragen finden Sie auf der Seite {{cssxref("@container")}}.

## Benennen von Containment-Kontexten

Im vorherigen Abschnitt wurden Stile basierend auf dem nächstgelegenen Vorfahren mit einem Containment-Kontext angewendet.
Es ist möglich, einem Containment-Kontext mit der Eigenschaft {{cssxref("container-name")}} einen Namen zu geben. Einmal benannt, kann der Name in einer `@container`-Abfrage verwendet werden, um einen bestimmten Container anzusprechen.
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

Weitere Informationen zum Benennen von Containment-Kontexten finden Sie auf der Seite {{cssxref("container-name")}}.

## Nur namensbasierte Container-Abfragen

Neben der Verwendung eines {{cssxref("container-name")}} zusammen mit einem [`<container-query>`](/de/docs/Web/CSS/Reference/At-rules/@container#container-query), können Sie einen Container nur anhand seines Namens abfragen. Diese sogenannten **nur namensbasierten Container-Abfragen** ermöglichen die selektive Anwendung von Stilen auf Elemente basierend darauf, ob sie einen Vorfahren mit einem bestimmten `container-name` haben oder nicht.

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

Können wir selektiv nur auf die Elemente in diesem Container Stile anwenden:

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

In diesem Beispiel würden die angegebenen Stile nur auf die ersten zwei {{htmlelement("p")}}-Elemente angewendet werden, nicht jedoch auf das dritte.

## Kurzschrift für Container-Syntax

Die Kurzschrift-Methode zum Deklarieren eines Containment-Kontexts besteht darin, die `container`-Eigenschaft zu verwenden:

```css
.post {
  container: sidebar / inline-size;
}
```

Weitere Informationen zu dieser Eigenschaft finden Sie in der {{cssxref("container")}}-Referenz.

## Container-Abfragelängen-Einheiten

Beim Anwenden von Stilen auf die Nachkommen eines Containers mithilfe von Größen-Container-Abfragen (das heißt, dessen {{cssxref("container-type")}} auf `size` oder `inline-size` gesetzt ist), können Sie Container-Abfragelängen-Einheiten verwenden.
Diese Einheiten geben eine Länge relativ zu den Abmessungen eines Abfragecontainers an.
Komponenten, die Längeneinheiten relativ zu ihrem Container verwenden, sind flexibler, in verschiedenen Containern verwendet zu werden, ohne konkrete Längenwerte neu berechnen zu müssen.

Wenn kein geeigneter Container für die Abfrage verfügbar ist, entsprechen die Container-Abfragelängen-Einheiten der [Small Viewport Unit](/de/docs/Web/CSS/Reference/Values/length#small_viewport_units) für diese Achse (`sv*`).

Die Container-Abfragelängen-Einheiten sind:

- `cqw`: 1% der Breite eines Abfragecontainers
- `cqh`: 1% der Höhe eines Abfragecontainers
- `cqi`: 1% der Inline-Größe eines Abfragecontainers
- `cqb`: 1% der Blockgröße eines Abfragecontainers
- `cqmin`: Der kleinere Wert von `cqi` oder `cqb`
- `cqmax`: Der größere Wert von `cqi` oder `cqb`

Das folgende Beispiel verwendet die `cqi`-Einheit, um die Schriftgröße einer Überschrift basierend auf der Inline-Größe des Containers festzulegen:

```css
@container (width > 700px) {
  .card h2 {
    font-size: max(1.5em, 1.23em + 2cqi);
  }
}
```

Weitere Informationen zu diesen Einheiten finden Sie in der [Container-Abfragelängen-Einheiten](/de/docs/Web/CSS/Reference/Values/length#container_query_length_units) Referenz.

## Fallbacks für Container-Abfragen

Für Browser, die Container-Abfragen noch nicht unterstützen, können {{cssxref("grid")}} und {{cssxref("flex")}} verwendet werden, um einen ähnlichen Effekt für die auf dieser Seite verwendete Kartenkomponente zu erzeugen.
Das folgende Beispiel verwendet eine {{cssxref("grid-template-columns")}}-Deklaration, um ein Zwei-Spalten-Layout für die Kartenkomponente zu erstellen.

```css
.card {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
```

Wenn Sie ein Einzelspalten-Layout für Geräte mit einem kleineren Viewport verwenden möchten, können Sie eine Media Query verwenden, um das Rastertemplate zu ändern:

```css
@media (width <= 700px) {
  .card {
    grid-template-columns: 1fr;
  }
}
```

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/Guides/Media_queries)
- CSS-{{Cssxref("@container")}}-Regel
- CSS-{{Cssxref("contain")}}-Eigenschaft
- CSS-{{Cssxref("container")}}-Kurzschrift-Eigenschaft
- CSS-{{Cssxref("container-name")}}-Eigenschaft
- CSS-{{cssxref("content-visibility")}}-Eigenschaft
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [Verwendung von verankerten Container-Abfragen](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries)
- [Say Hello to CSS Container Queries](https://ishadeed.com/article/say-hello-to-css-container-queries/) von Ahmad Shadeed
- [Container Queries: ein schneller Startleitfaden](https://www.oddbird.net/2021/04/05/containerqueries/)
- [Sammlung von Artikeln zu Container-Abfragen](https://github.com/sturobson/Awesome-Container-Queries)
