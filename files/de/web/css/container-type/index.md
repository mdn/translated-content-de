---
title: container-type
slug: Web/CSS/container-type
l10n:
  sourceCommit: eb7a000b802ee9089456b0d3602c71ff5aabcebd
---

{{CSSRef}}

Ein Element kann als Abfrage-Container für [Containergrößen-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) durch die **`container-type`** [CSS](/de/docs/Web/CSS) Eigenschaft festgelegt werden. `container-type` wird verwendet, um die Art der Größenbeschränkung in einer Container-Abfrage zu definieren.

Größenbeschränkung schaltet die Fähigkeit eines Elements ab, Größeninformationen von seinem Inhalt zu erhalten, was wichtig für Containerabfragen ist, um endlose Schleifen zu vermeiden. Wenn dies nicht der Fall wäre, könnte eine CSS-Regel innerhalb einer Containerabfrage die Inhaltsgröße ändern, was wiederum dazu führen könnte, dass die Abfrage auf "false" evaluiert wird und die Größe des Elternelements ändert, was wiederum die Inhaltsgröße ändern könnte und die Abfrage wieder auf "true" schaltet, und so weiter.

Die Containergröße muss explizit oder kontextuell festgelegt sein — zum Beispiel, Blockelemente, Flex-Container und Grid-Container, die auf die volle Breite ihres Elternteils gestreckt werden. Wenn keine explizite oder kontextuelle Größe verfügbar ist, kollabieren Elemente mit Größenbeschränkung.

> [!NOTE]
> Bei der Verwendung der `container-type` und {{cssxref("container-name")}} Eigenschaften werden die `style` und `layout` Werte der {{cssxref("contain")}} Eigenschaft automatisch angewandt.

## Syntax

```css
/* Keyword values */
container-type: normal;
container-type: size;
container-type: inline-size;

/* Global Values */
container-type: inherit;
container-type: initial;
container-type: revert;
container-type: revert-layer;
container-type: unset;
```

### Werte

- `size`

  - : Etabliert einen Abfrage-Container für Containergrößenabfragen in beiden Dimensionen, den [Inline- und Blockdimensionen](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions).
    Wendet Layout-, Stil- und Größenbeschränkung auf den Container an.

    Die Größenbeschränkung wird in beiden Richtungen, Inline und Block, auf das Element angewendet. Die Größe des Elements kann isoliert berechnet werden, ohne die Kind-Elemente zu berücksichtigen.

- `inline-size`

  - : Etabliert einen Abfrage-Container für dimensionale Abfragen auf der [Inline-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) des Containers.
    Wendet Layout-, Stil- und Inline-Größenbeschränkung auf das Element an.

    Die Inline-Größenbeschränkung wird auf das Element angewendet. Die Inline-Größe des Elements kann isoliert berechnet werden, ohne die Kind-Elemente zu berücksichtigen.

- `normal`
  - : Standardwert. Das Element ist kein Abfrage-Container für irgendwelche Containergrößenabfragen und bleibt dennoch ein Abfrage-Container für [Containerstil-Abfragen](/de/docs/Web/CSS/@container#container_style_queries).

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Festlegen der Inline-Größenbeschränkung

Gegeben sei das folgende HTML-Beispiel, bei dem es sich um eine Kartenkomponente mit einem Bild, einem Titel und etwas Text handelt:

```html
<div class="container">
  <div class="card">
    <h3>Normal card</h3>
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </div>
</div>

<div class="container wide">
  <div class="card">
    <h3>Wider card</h3>
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </div>
</div>
```

Um einen Container-Kontext zu erstellen, fügen Sie einem Element die `container-type` Eigenschaft hinzu.
Im Folgenden wird der `inline-size` Wert verwendet, um einen Beschränkungskontext für die [Inline-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) des Containers zu erstellen:

```css
.container {
  container-type: inline-size;
  width: 300px;
  height: 120px;
}

.wide {
  width: 500px;
}
```

```css hidden
h3 {
  height: 2rem;
  margin: 0.5rem;
}

.card {
  height: 100%;
}

.content {
  background-color: wheat;
  height: 100%;
}

.container {
  margin: 1rem;
  border: 2px dashed red;
  overflow: hidden;
}
```

Beim Schreiben einer Containerabfrage über die {{Cssxref("@container")}} Regel werden Stile auf die Elemente des Containers angewendet, wenn dieser breiter als 400px ist:

```css
@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
```

{{EmbedLiveSample('Establishing_inline_size_containment', '100%', 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- {{Cssxref("@container")}} Regel
- CSS {{Cssxref("container")}} Kurzschreibweise
- CSS {{Cssxref("container-name")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
