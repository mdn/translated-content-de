---
title: CSS-Containerabfragen
slug: Web/CSS/CSS_containment/Container_queries
l10n:
  sourceCommit: a69f9903e7444d42adcf2432eaa511c05761c757
---

{{CSSRef}}

Containerabfragen ermöglichen es Ihnen, Stile auf ein Element basierend auf bestimmten Attributen seines Containers anzuwenden:

- Die Größe des Containers.
- Auf den Container angewendete Stile.
- Der Scroll-Zustand des Containers oder seines scrollenden Vorfahren.

Containerabfragen sind eine Alternative zu [Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries), die Stile für Elemente basierend auf der Viewport-Größe oder anderen Gerätemerkmalen anwenden.

Dieser Artikel bietet eine Einführung in die Verwendung von Containerabfragen und konzentriert sich speziell auf Größen-Containerabfragen. Andere Leitfäden behandeln [Stil-](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries) und [Scroll-Zustand-](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) Containerabfragen im Detail.

![Zwei verschiedene Abfragetypen. Erstens, eine Media-Abfrage basierend auf der Breite des Viewports, die die volle Breite des Browsers ist. Zweitens, eine Containerabfrage basierend auf der Breite eines Containerelements.](container-query.svg)

## Verwendung von Containergrößen-Abfragen

Containerabfragen testen Elemente basierend auf ihrem Containertyp. Um Containergrößen-Abfragen zu verwenden, müssen Sie einen **Einschließungs-Kontext** für ein Element deklarieren, damit der Browser weiß, dass Sie eventuell später die Dimensionen dieses Containers abfragen möchten.
Verwenden Sie dazu die {{cssxref("container-type")}}-Eigenschaft mit einem Wert von `size`, `inline-size` oder `normal`.

Diese Werte haben folgende Auswirkungen:

- `size`
  - : Die Abfrage basiert auf den [Inline- und Block-](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) Dimensionen des Containers.
    Wendet Layout, Stil und Größen [Einschließung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) auf den Container an.
- `inline-size`
  - : Die Abfrage basiert auf den [Inline-](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) Dimensionen des Containers.
    Wendet Layout, Stil und Inline-Größen-Einschließung auf das Element an.
- `normal`
  - : Das Element ist kein Abfragecontainer für irgendwelche Containergrößen-Abfragen, bleibt jedoch ein Abfragecontainer für Container-Stilabfragen.

Betrachten Sie folgendes Beispiel eines Kartenkomponents für einen Blogpost mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Sie können einen Einschließungs-Kontext mit der `container-type`-Eigenschaft erstellen:

```css
.post {
  container-type: inline-size;
}
```

Verwenden Sie als nächstes die {{cssxref("@container")}}-Regel, um eine Containerabfrage zu definieren.
Die Abfrage im folgenden Beispiel wird Stile auf Elemente basierend auf der Größe des nächsten Vorfahren mit einem Einschließungs-Kontext anwenden.
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

Mit Containerabfragen kann die Karte an mehreren Stellen auf einer Seite wiederverwendet werden, ohne genau wissen zu müssen, wo sie jedes Mal platziert wird.
Wenn der Container mit der Karte schmaler als `700px` ist, wird die Schrift des Kartentitels klein sein, und wenn die Karte in einem Container ist, der breiter als `700px` ist, wird die Schrift des Kartentitels größer sein.

Für weitere Informationen zur Syntax von Containerabfragen siehe die {{cssxref("@container")}}-Seite.

### Benennung von Einschließungs-Kontexten

Im vorherigen Abschnitt haben Containerabfragen Stile basierend auf dem nächstgelegenen Vorfahren mit einem Einschließungs-Kontext angewendet.
Es ist möglich, einem Einschließungs-Kontext mit der {{Cssxref("container-name")}}-Eigenschaft einen Namen zu geben. Sobald benannt, kann der Name in einer `@container`-Abfrage verwendet werden, um einen bestimmten Container anzusprechen.
Das folgende Beispiel erstellt einen Einschließungs-Kontext mit dem Namen `sidebar`:

```css
.post {
  container-type: inline-size;
  container-name: sidebar;
}
```

Sie können diesen Einschließungs-Kontext dann mit der `@container`-Regel ansprechen:

```css
@container sidebar (min-width: 700px) {
  .card {
    font-size: 2em;
  }
}
```

Weitere Informationen zur Benennung von Einschließungs-Kontexten finden Sie auf der {{cssxref("container-name")}}-Seite.

### Verkürzte Container-Syntax

Die verkürzte Methode, einen Einschließungs-Kontext zu deklarieren, besteht in der Verwendung der `container`-Eigenschaft:

```css
.post {
  container: sidebar / inline-size;
}
```

Für weitere Informationen zu dieser Eigenschaft siehe die {{Cssxref("container")}}-Referenz.

### Containerabfrage-Längeneinheiten

Beim Anwenden von Stilen auf einen Container mit Containerabfragen können Sie Containerabfrage-Längeneinheiten verwenden.
Diese Einheiten geben eine Länge relativ zu den Dimensionen eines Abfragecontainers an.
Komponenten, die Längeneinheiten relativ zu ihrem Container verwenden, sind flexibler in verschiedenen Containern einsetzbar, ohne feste Längenwerte neu berechnen zu müssen.

Die Containerabfrage-Längeneinheiten sind:

- `cqw`: 1% der Breite eines Abfragecontainers
- `cqh`: 1% der Höhe eines Abfragecontainers
- `cqi`: 1% der Inline-Größe eines Abfragecontainers
- `cqb`: 1% der Block-Größe eines Abfragecontainers
- `cqmin`: Der kleinere Wert von entweder `cqi` oder `cqb`
- `cqmax`: Der größere Wert von entweder `cqi` oder `cqb`

Das folgende Beispiel verwendet die `cqi`-Einheit, um die Schriftgröße einer Überschrift basierend auf der Inline-Größe des Containers festzulegen:

```css
@container (min-width: 700px) {
  .card h2 {
    font-size: max(1.5em, 1.23em + 2cqi);
  }
}
```

Für weitere Informationen zu diesen Einheiten, siehe die [Containerabfrage-Längeneinheiten](/de/docs/Web/CSS/length#container_query_length_units) Referenz.

## Fallbacks für Containerabfragen

Für Browser, die Containerabfragen noch nicht unterstützen, können {{cssxref("grid")}} und {{cssxref("flex")}} verwendet werden, um einen ähnlichen Effekt für das hier auf dieser Seite verwendete Kartenkomponent zu erzielen.
Das folgende Beispiel verwendet eine {{cssxref("grid-template-columns")}}-Deklaration, um ein zweispaltiges Layout für das Kartenkomponent zu erstellen.

```css
.card {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
```

Wenn Sie ein einspaltiges Layout für Geräte mit einem kleineren Viewport verwenden möchten, können Sie eine Media-Abfrage verwenden, um das Grid-Template zu ändern:

```css
@media (max-width: 700px) {
  .card {
    grid-template-columns: 1fr;
  }
}
```

## Siehe auch

- [Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries)
- CSS {{Cssxref("@container")}} Regel
- CSS {{Cssxref("contain")}} Eigenschaft
- CSS {{Cssxref("container")}} Kurzform-Eigenschaft
- CSS {{Cssxref("container-name")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
- [Verwendung von Größen- und Stilcontainern](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Verwendung von Scroll-Zustand Containern](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- [Say Hello to CSS Container Queries](https://ishadeed.com/article/say-hello-to-css-container-queries/) von Ahmad Shadeed
- [Container Queries: a Quick Start Guide](https://www.oddbird.net/2021/04/05/containerqueries/)
- [Sammlung von Container-Abfragen Artikeln](https://github.com/sturobson/Awesome-Container-Queries)
