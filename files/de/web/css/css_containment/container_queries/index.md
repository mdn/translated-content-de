---
title: CSS-Containerabfragen
slug: Web/CSS/CSS_containment/Container_queries
l10n:
  sourceCommit: ff31fa134873d7fc271ea37a020a5cf12f6f1dd8
---

{{CSSRef}}

Containerabfragen ermöglichen es Ihnen, Stile auf ein Element basierend auf bestimmten Attributen seines Containers anzuwenden:

- Die Größe des Containers.
- Auf den Container angewendete Stile.
- Der Scroll-Zustand des Containers oder der seines scrollbaren Vorfahren.

Containerabfragen sind eine Alternative zu [Media Queries](/de/docs/Web/CSS/CSS_media_queries), die Stile auf Elemente basierend auf der Größe des Ansichtsfensters oder anderen Gerätemerkmalen anwenden.

Dieser Artikel bietet eine Einführung in die Verwendung von Containerabfragen, wobei der Schwerpunkt auf Größen-Containerabfragen liegt. Andere Leitfäden behandeln [Style-](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries) und [Scroll-Zustands-](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) Containerabfragen im Detail.

![Zwei verschiedene Abfragetypen. Erstens, eine Media Query basierend auf der Breite des Ansichtsfensters, die die volle Breite des Browsers ist. Zweitens, eine Containerabfrage basierend auf der Breite eines Containerelements.](container-query.svg)

## Verwendung von Containergrößenabfragen

Während Containerabfragen Stile basierend auf dem Container-Typ anwenden, wenden Containergrößenabfragen Stile speziell basierend auf den Dimensionen des Containers an. Um Containergrößenabfragen zu verwenden, müssen Sie einen **Containment-Kontext** auf einem Element deklarieren, damit der Browser weiß, dass Sie später die Dimensionen dieses Containers abfragen möchten.
Verwenden Sie dazu die Eigenschaft {{cssxref("container-type")}} mit einem Wert von `size`, `inline-size` oder `normal`.

Diese Werte haben die folgenden Effekte:

- `size`
  - : Die Abfrage wird basierend auf den [Inline- und Block-](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) Dimensionen des Containers ausgeführt. Wendet Layout-, Stil- und Größen-[Containment](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) auf den Container an.
- `inline-size`
  - : Die Abfrage wird basierend auf den [Inline-](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) Dimensionen des Containers ausgeführt. Wendet Layout-, Stil- und Inline-Größen-Containment auf das Element an.
- `normal`
  - : Das Element ist kein Abfragecontainer für irgendeine Containergrößenabfrage, bleibt jedoch ein Abfragecontainer für Containerstilabfragen.

Betrachten Sie das folgende Beispiel eines Kartenkomponenten für einen Blogbeitrag mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
  </div>
</div>
```

Sie können einen Containment-Kontext mithilfe der Eigenschaft `container-type` erstellen:

```css
.post {
  container-type: inline-size;
}
```

Verwenden Sie als nächstes die Regel {{cssxref("@container")}}, um eine Containerabfrage zu definieren.
Die Abfrage im folgenden Beispiel wird Stile auf Elemente basierend auf der Größe des nächstgelegenen Vorfahren mit einem Containment-Kontext anwenden.
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

Durch die Verwendung von Containerabfragen kann die Karte in mehreren Bereichen einer Seite wiederverwendet werden, ohne jedes Mal genau wissen zu müssen, wo sie platziert wird.
Wenn der Container mit der Karte schmaler als `700px` ist, wird die Schrift des Kartentitels klein sein, und wenn die Karte sich in einem Container befindet, der breiter als `700px` ist, wird die Schrift des Kartentitels größer sein.

Weitere Informationen zur Syntax von Containerabfragen finden Sie auf der Seite {{cssxref("@container")}}.

### Benennung von Containment-Kontexten

Im vorherigen Abschnitt wurde eine Containerabfrage basierend auf dem nächstgelegenen Vorfahren mit einem Containment-Kontext angewendet.
Es ist möglich, einem Containment-Kontext mit der Eigenschaft {{Cssxref("container-name")}} einen Namen zu geben. Einmal benannt, kann der Name in einer `@container`-Abfrage verwendet werden, um einen bestimmten Container anzusprechen.
Das folgende Beispiel erstellt einen Containment-Kontext mit dem Namen `sidebar`:

```css
.post {
  container-type: inline-size;
  container-name: sidebar;
}
```

Sie können dann diesen Containment-Kontext mit der Regel `@container` ansprechen:

```css
@container sidebar (min-width: 700px) {
  .card {
    font-size: 2em;
  }
}
```

Weitere Informationen zur Benennung von Containment-Kontexten finden Sie auf der Seite {{cssxref("container-name")}}.

### Kurznotation für Container

Die Kurznotation zur Deklaration eines Containment-Kontexts ist die Verwendung der Eigenschaft `container`:

```css
.post {
  container: sidebar / inline-size;
}
```

Weitere Informationen zu dieser Eigenschaft finden Sie in der Referenz {{Cssxref("container")}}.

### Längeneinheiten für Containerabfragen

Bei der Anwendung von Stilen auf einen Container unter Verwendung von Containerabfragen können Sie Längeneinheiten für Containerabfragen verwenden.
Diese Einheiten geben eine Länge relativ zu den Dimensionen eines Abfragecontainers an.
Komponenten, die Längeneinheiten relativ zu ihrem Container verwenden, sind flexibler in unterschiedlichen Containern zu verwenden, ohne die konkreten Längenwerte neu berechnen zu müssen.

Wenn kein geeigneter Container für die Abfrage verfügbar ist, wird die Längeneinheit der Containerabfrage standardmäßig auf die [kleine Ansichtsfenstereinheit](/de/docs/Web/CSS/length#small_viewport_units) für diese Achse (`sv*`) gesetzt.

Die Längeneinheiten der Containerabfrage sind:

- `cqw`: 1% der Breite eines Abfragecontainers
- `cqh`: 1% der Höhe eines Abfragecontainers
- `cqi`: 1% der Inline-Größe eines Abfragecontainers
- `cqb`: 1% der Blockgröße eines Abfragecontainers
- `cqmin`: Der kleinere Wert entweder von `cqi` oder `cqb`
- `cqmax`: Der größere Wert entweder von `cqi` oder `cqb`

Das folgende Beispiel verwendet die Einheit `cqi`, um die Schriftgröße einer Überschrift basierend auf der Inline-Größe des Containers festzulegen:

```css
@container (min-width: 700px) {
  .card h2 {
    font-size: max(1.5em, 1.23em + 2cqi);
  }
}
```

Weitere Informationen zu diesen Einheiten finden Sie in der Referenz [Containerabfrage-Längeneinheiten](/de/docs/Web/CSS/length#container_query_length_units).

## Fallbacks für Containerabfragen

Für Browser, die Containerabfragen noch nicht unterstützen, können {{cssxref("grid")}} und {{cssxref("flex")}} verwendet werden, um einen ähnlichen Effekt für die Kartendarstellung auf dieser Seite zu erzielen.
Das folgende Beispiel verwendet eine {{cssxref("grid-template-columns")}}-Deklaration, um ein Zwei-Spalten-Layout für die Karte zu erstellen.

```css
.card {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
```

Wenn Sie ein Ein-Spalten-Layout für Geräte mit kleinerem Ansichtsfenster verwenden möchten, können Sie eine Media Query verwenden, um das Grid-Template zu ändern:

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
- CSS {{Cssxref("container")}} Kurznotation
- CSS {{Cssxref("container-name")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- [Say Hello to CSS Container Queries](https://ishadeed.com/article/say-hello-to-css-container-queries/) von Ahmad Shadeed
- [Container Queries: a Quick Start Guide](https://www.oddbird.net/2021/04/05/containerqueries/)
- [Sammlung von Artikeln zu Container-Abfragen](https://github.com/sturobson/Awesome-Container-Queries)
