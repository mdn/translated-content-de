---
title: CSS-Containerabfragen
slug: Web/CSS/CSS_containment/Container_queries
l10n:
  sourceCommit: 4b6b77bc36496c88dcbe477ec46da678a85d8e6e
---

{{CSSRef}}

Containerabfragen ermöglichen es Ihnen, Stile für ein Element basierend auf der Größe des Containers des Elements anzuwenden. Wenn beispielsweise in einem Container im umgebenden Kontext weniger Platz verfügbar ist, können Sie bestimmte Elemente ausblenden oder kleinere Schriftarten verwenden.

Containerabfragen sind eine Alternative zu [Media Queries](/de/docs/Web/CSS/CSS_media_queries), die Stile für Elemente basierend auf der Größe des Ansichtsfensters oder anderen Geräteeigenschaften anwenden.

![Zwei verschiedene Abfragetypen. Erstens eine Media Query basierend auf der Breite des Ansichtsfensters, das die volle Breite des Browsers umfasst. Zweitens eine Containerabfrage basierend auf der Breite eines Containerelements.](container-query.svg)

## Verwendung von Containerabfragen

Um Containerabfragen zu verwenden, müssen Sie einen **Einschlusskontext** auf einem Element deklarieren, damit der Browser weiß, dass Sie möglicherweise später die Abmessungen dieses Containers abfragen möchten. Verwenden Sie dazu die {{cssxref("container-type")}}-Eigenschaft mit einem Wert von `size`, `inline-size` oder `normal`.

Diese Werte haben die folgenden Auswirkungen:

- `size`
  - : Die Abfrage basiert auf den [Inline- und Block-](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) Abmessungen des Containers. Wendet Layout-, Stil- und Größen[Einschluss](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment) auf den Container an.
- `inline-size`
  - : Die Abfrage basiert auf den [Inline-](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) Abmessungen des Containers. Wendet Layout-, Stil- und Inline-Größe Einschluss auf das Element an.
- `normal`
  - : Das Element ist kein Abfragecontainer für Containergößenabfragen, bleibt jedoch ein Abfragecontainer für Containerstilabfragen.

Betrachten Sie das folgende Beispiel eines Kartenkomponenten für einen Blogbeitrag mit einem Titel und etwas Text:

```html
<div class="post">
  <div class="card">
    <h2>Kartentitel</h2>
    <p>Karteninhalt</p>
  </div>
</div>
```

Sie können einen Einschlusskontext mit der Eigenschaft `container-type` erstellen:

```css
.post {
  container-type: inline-size;
}
```

Verwenden Sie als Nächstes die {{cssxref("@container")}}-Regel, um eine Containerabfrage zu definieren. Die Abfrage im folgenden Beispiel wird Stile für Elemente basierend auf der Größe des nächsten Vorfahren mit einem Einschlusskontext anwenden. Konkret wird diese Abfrage eine größere Schriftgröße für den Kartentitel anwenden, wenn der Container breiter als `700px` ist:

```css
/* Standard-Schriftstil für den Kartentitel */
.card h2 {
  font-size: 1em;
}

/* Wenn der Container größer als 700px ist */
@container (min-width: 700px) {
  .card h2 {
    font-size: 2em;
  }
}
```

Durch die Verwendung von Containerabfragen kann die Karte in mehreren Bereichen einer Seite wiederverwendet werden, ohne dass Sie jedes Mal genau wissen müssen, wo sie platziert wird. Wenn der Container mit der Karte schmaler als `700px` ist, bleibt die Schrift des Kartentitels klein, und wenn die Karte in einem Container ist, der breiter als `700px` ist, wird die Schrift des Kartentitels größer sein.

Für weitere Informationen zur Syntax von Containerabfragen siehe die Seite {{cssxref("@container")}}.

### Benennung von Einschlusskontexten

Im vorherigen Abschnitt wurde eine Containerabfrage basierend auf dem nächsten Vorfahren mit einem Einschlusskontext angewendet. Es ist möglich, einem Einschlusskontext einen Namen mit der Eigenschaft {{Cssxref("container-name")}} zu geben. Einmal benannt, kann der Name in einer `@container`-Abfrage verwendet werden, um einen bestimmten Container zu targetieren. Das folgende Beispiel erstellt einen Einschlusskontext mit dem Namen `sidebar`:

```css
.post {
  container-type: inline-size;
  container-name: sidebar;
}
```

Sie können diesen Einschlusskontext dann mit der `@container`-Regel targetieren:

```css
@container sidebar (min-width: 700px) {
  .card {
    font-size: 2em;
  }
}
```

Weitere Informationen zur Benennung von Einschlusskontexten sind auf der Seite {{cssxref("container-name")}} verfügbar.

### Kurzschreibweise für Container

Die Kurzschreibweise zur Deklaration eines Einschlusskontextes besteht darin, die Eigenschaft `container` zu verwenden:

```css
.post {
  container: sidebar / inline-size;
}
```

Für weitere Informationen zu dieser Eigenschaft siehe die {{Cssxref("container")}}-Referenz.

### Längeneinheiten für Containerabfragen

Beim Anwenden von Stilen auf einen Container mit Containerabfragen können Sie Containerabfragen-Längeneinheiten verwenden. Diese Einheiten spezifizieren eine Länge relativ zu den Abmessungen eines Abfragecontainers. Komponenten, die Längeneinheiten relativ zu ihrem Container verwenden, sind flexibler in unterschiedlichen Containern zu nutzen, ohne konkrete Längenwerte neu berechnen zu müssen.

Die Längeneinheiten für Containerabfragen sind:

- `cqw`: 1% der Breite eines Abfragecontainers
- `cqh`: 1% der Höhe eines Abfragecontainers
- `cqi`: 1% der Inline-Größe eines Abfragecontainers
- `cqb`: 1% der Block-Größe eines Abfragecontainers
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

Für weitere Informationen zu diesen Einheiten siehe die [Referenz zu Längeneinheiten für Containerabfragen](/de/docs/Web/CSS/length#container_query_length_units).

## Fallbacks für Containerabfragen

Für Browser, die Containerabfragen noch nicht unterstützen, können {{cssxref("grid")}} und {{cssxref("flex")}} verwendet werden, um einen ähnlichen Effekt für die hier verwendete Kartenkomponente zu erzielen. Das folgende Beispiel verwendet eine {{cssxref("grid-template-columns")}}-Deklaration, um ein Zweispalten-Layout für die Kartenkomponente zu erstellen.

```css
.card {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
```

Wenn Sie ein Einspalten-Layout für Geräte mit einem kleineren Ansichtsfenster verwenden möchten, können Sie eine Media Query verwenden, um das Grid-Template zu ändern:

```css
@media (max-width: 700px) {
  .card {
    grid-template-columns: 1fr;
  }
}
```

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/CSS_media_queries)
- CSS {{Cssxref("@container")}}-Regel
- CSS {{Cssxref("contain")}}-Eigenschaft
- CSS {{Cssxref("container")}}-Kurzschreibeigenschaft
- CSS {{Cssxref("container-name")}}-Eigenschaft
- CSS {{cssxref("content-visibility")}}-Eigenschaft
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Say Hello to CSS Container Queries](https://ishadeed.com/article/say-hello-to-css-container-queries/) von Ahmad Shadeed
- [Container Queries: a Quick Start Guide](https://www.oddbird.net/2021/04/05/containerqueries/)
- [Sammlung von Artikeln zu Container Queries](https://github.com/sturobson/Awesome-Container-Queries)
