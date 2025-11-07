---
title: CSS-Containerabfragen
short-title: Container queries
slug: Web/CSS/CSS_containment/Container_queries
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Containerabfragen ermöglichen es Ihnen, einem Element basierend auf bestimmten Attributen seines Containers Stile zuzuweisen:

- Die Größe des Containers.
- Auf den Container angewendete Stile.
- Der Scroll-Zustand des Containers oder dessen scrollenden Vorfahren.

Containerabfragen sind eine Alternative zu [Media-Queries](/de/docs/Web/CSS/CSS_media_queries), die Stile für Elemente basierend auf der Größe des Viewports oder anderen Gerätemerkmalen anwenden.

Dieser Artikel bietet eine Einführung in die Verwendung von Containerabfragen, wobei speziell auf Größen-Containerabfragen eingegangen wird. Andere Leitfäden diskutieren [Stil-](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries) und [Scroll-Zustand](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) Containerabfragen im Detail.

![Zwei verschiedene Abfragearten. Erstens eine Media-Query basierend auf der Breite des Viewports, der die volle Breite des Browsers ist. Zweitens eine Containerabfrage basierend auf der Breite eines Containerelements.](container-query.svg)

## Verwendung von Containergrößenabfragen

Während Containerabfragen Stile basierend auf dem Containertyp anwenden, wenden Containergrößenabfragen Stile spezifisch basierend auf den Abmessungen des Containers an. Um Containergrößenabfragen zu verwenden, müssen Sie einen **Einschließungskontext** auf einem Element deklarieren, damit der Browser weiß, dass Sie später die Abmessungen dieses Containers abfragen möchten.
Um dies zu tun, verwenden Sie die {{cssxref("container-type")}} Eigenschaft mit einem Wert von `size`, `inline-size` oder `normal`.

Diese Werte haben folgende Auswirkungen:

- `size`
  - : Die Abfrage basiert auf den [Inline- und Block-](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) Abmessungen des Containers.
    Wendet Layout-, Stil- und Größen-[Einschließung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) auf den Container an.
- `inline-size`
  - : Die Abfrage basiert auf den [Inline-](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) Abmessungen des Containers.
    Wendet Layout-, Stil- und Inline-Größeneinschließung auf das Element an.
- `normal`
  - : Das Element ist kein Abfragecontainer für Containergrößenabfragen, bleibt jedoch ein Abfragecontainer für Containerstilabfragen.

Betrachten Sie das folgende Beispiel eines Kartenkomponenten für einen Blogartikel mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Sie können einen Einschließungskontext mit der Eigenschaft `container-type` erstellen:

```css
.post {
  container-type: inline-size;
}
```

Als nächstes verwenden Sie die {{cssxref("@container")}} At-Regel, um eine Containerabfrage zu definieren.
Die Abfrage im folgenden Beispiel wendet Stile auf Elemente basierend auf der Größe des nächsten Vorfahren mit einem Einschließungskontext an.
Genauer gesagt, wird diese Abfrage eine größere Schriftgröße für den Kartentitel anwenden, wenn der Container breiter als `700px` ist:

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

Mit Containerabfragen kann die Karte in mehreren Bereichen einer Seite wiederverwendet werden, ohne genau zu wissen, wo sie jedes Mal platziert wird.
Wenn der Container mit der Karte schmaler als `700px` ist, wird die Schrift des Kartentitels klein sein, und wenn die Karte in einem Container ist, der breiter als `700px` ist, wird die Schrift des Kartentitels größer sein.

Für weitere Informationen zur Syntax von Containerabfragen siehe die {{cssxref("@container")}} Seite.

### Benennung von Einschließungskontexten

Im vorherigen Abschnitt hat eine Containerabfrage Stile basierend auf dem nächsten Vorfahren mit einem Einschließungskontext angewendet.
Es ist möglich, einem Einschließungskontext einen Namen zu geben, indem man die {{Cssxref("container-name")}} Eigenschaft verwendet. Einmal benannt, kann der Name in einer `@container` Abfrage verwendet werden, um einen bestimmten Container anzusprechen.
Das folgende Beispiel erstellt einen Einschließungskontext mit dem Namen `sidebar`:

```css
.post {
  container-type: inline-size;
  container-name: sidebar;
}
```

Sie können dann diesen Einschließungskontext mit der `@container` At-Regel ansprechen:

```css
@container sidebar (width > 700px) {
  .card {
    font-size: 2em;
  }
}
```

Weitere Informationen zur Benennung von Einschließungskontexten finden Sie auf der {{cssxref("container-name")}} Seite.

### Kurzsyntax für Container

Die Kurzform zur Deklaration eines Einschließungskontextes ist die Verwendung der Eigenschaft `container`:

```css
.post {
  container: sidebar / inline-size;
}
```

Weitere Informationen zu dieser Eigenschaft finden Sie in der {{Cssxref("container")}} Referenz.

### Container-Abfragelängeneinheiten

Wenn Sie Stile auf einen Container mithilfe von Containerabfragen anwenden, können Sie Container-Abfragelängeneinheiten verwenden.
Diese Einheiten geben eine Länge relativ zu den Abmessungen eines Abfragecontainers an.
Komponenten, die Längeneinheiten relativ zu ihrem Container verwenden, sind flexibler in verschiedenen Containern einsetzbar, ohne konkrete Längenwerte neu berechnen zu müssen.

Wenn kein geeigneter Container für die Abfrage verfügbar ist, fällt die Container-Abfragelängeneinheit auf die [kleine Vieuporteinheit](/de/docs/Web/CSS/Reference/Values/length#small_viewport_units) für diese Achse (`sv*`) zurück.

Die Container-Abfragelängeneinheiten sind:

- `cqw`: 1% der Breite eines Abfragecontainers
- `cqh`: 1% der Höhe eines Abfragecontainers
- `cqi`: 1% der Inline-Größe eines Abfragecontainers
- `cqb`: 1% der Blockgröße eines Abfragecontainers
- `cqmin`: Der kleinere Wert entweder von `cqi` oder `cqb`
- `cqmax`: Der größere Wert entweder von `cqi` oder `cqb`

Das folgende Beispiel verwendet die Einheit `cqi`, um die Schriftgröße einer Überschrift basierend auf der Inline-Größe des Containers festzulegen:

```css
@container (width > 700px) {
  .card h2 {
    font-size: max(1.5em, 1.23em + 2cqi);
  }
}
```

Weitere Informationen zu diesen Einheiten finden Sie im Referenzabschnitt [Container-Abfragelängeneinheiten](/de/docs/Web/CSS/Reference/Values/length#container_query_length_units).

## Fallbacks für Containerabfragen

Für Browser, die Containerabfragen noch nicht unterstützen, können {{cssxref("grid")}} und {{cssxref("flex")}} verwendet werden, um einen ähnlichen Effekt für die auf dieser Seite verwendete Kartenkomponente zu erzeugen.
Das folgende Beispiel verwendet eine {{cssxref("grid-template-columns")}} Deklaration, um ein Zweispalten-Layout für die Kartenkomponente zu erstellen.

```css
.card {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
```

Wenn Sie ein Einspalten-Layout für Geräte mit einem kleineren Viewport verwenden möchten, können Sie eine Media-Query verwenden, um das Grid-Template zu ändern:

```css
@media (width <= 700px) {
  .card {
    grid-template-columns: 1fr;
  }
}
```

## Siehe auch

- [Media-Queries](/de/docs/Web/CSS/CSS_media_queries)
- CSS {{Cssxref("@container")}} At-Regel
- CSS {{Cssxref("contain")}} Eigenschaft
- CSS {{Cssxref("container")}} Kurzform-Eigenschaft
- CSS {{Cssxref("container-name")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
- [Verwendung von Größen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Verwendung von Scroll-Zustandabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- [Say Hello to CSS Container Queries](https://ishadeed.com/article/say-hello-to-css-container-queries/) von Ahmad Shadeed
- [Container Queries: a Quick Start Guide](https://www.oddbird.net/2021/04/05/containerqueries/)
- [Sammlung von Artikeln zu Containerabfragen](https://github.com/sturobson/Awesome-Container-Queries)
