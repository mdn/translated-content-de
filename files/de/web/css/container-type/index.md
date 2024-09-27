---
title: container-type
slug: Web/CSS/container-type
l10n:
  sourceCommit: eb7a000b802ee9089456b0d3602c71ff5aabcebd
---

{{CSSRef}}

Ein Element kann als Abfrage-Container für [Containergrößenabfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) mit der **`container-type`** [CSS](/de/docs/Web/CSS) Eigenschaft etabliert werden. `container-type` wird verwendet, um den Typ der Größenbegrenzung festzulegen, der in einer Containerabfrage verwendet wird.

Größenbegrenzung schaltet die Fähigkeit eines Elements aus, Größeninformationen von seinen Inhalten zu erhalten, was wichtig für Containerabfragen ist, um Endlosschleifen zu vermeiden. Wenn dies nicht der Fall wäre, könnte eine CSS-Regel innerhalb einer Container-Abfrage die Inhaltsgröße ändern, was wiederum die Abfrage falsch auswerten könnte und die Größe des Elternelements ändern würde, was wiederum die Inhaltsgröße ändern und die Abfrage wieder auf wahr setzen könnte, und so weiter.

Die Containergröße muss explizit oder durch den Kontext gesetzt werden — zum Beispiel Blockelemente, Flex-Container und Grid-Container, die sich über die volle Breite ihres Elternteils erstrecken. Wenn keine explizite oder kontextuelle Größe verfügbar ist, werden Elemente mit Größenbegrenzung zusammenbrechen.

> [!NOTE]
> Bei Verwendung der Eigenschaften `container-type` und {{cssxref("container-name")}}, werden die Werte `style` und `layout` der Eigenschaft {{cssxref("contain")}} automatisch angewendet.

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

  - : Etabliert einen Abfrage-Container für Containergrößenabfragen in beiden [Inline- und Blockdimensionen](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions).
    Wendet Layoutbegrenzung, Stilbegrenzung und Größenbegrenzung auf den Container an.

    Die Größenbegrenzung wird auf das Element in beiden Inline- und Blockrichtungen angewendet. Die Größe des Elements kann isoliert berechnet werden, ohne die Kindelemente zu beachten.

- `inline-size`

  - : Etabliert einen Abfrage-Container für Dimensionale Abfragen auf der [Inline-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) des Containers.
    Wendet Layout, Stil und Inline-Größenbegrenzung auf das Element an.

    Die Inline-Größenbegrenzung wird auf das Element angewendet. Die Inline-Größe des Elements kann isoliert berechnet werden, ohne die Kindelemente zu beachten.

- `normal`
  - : Standardwert. Das Element ist kein Abfrage-Container für Containergrößenabfragen, bleibt jedoch ein Abfrage-Container für [Container-Stilabfragen](/de/docs/Web/CSS/@container#container_style_queries).

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Etablierung von Inline-Größenbegrenzung

Angenommen, das folgende HTML-Beispiel ist eine Kartenkomponente mit einem Bild, einem Titel und etwas Text:

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

Um einen Container-Kontext zu erstellen, fügen Sie die `container-type` Eigenschaft zu einem Element hinzu.
Im Folgenden wird der `inline-size` Wert verwendet, um einen Begrenzungskontext für die [Inline-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) des Containers zu schaffen:

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

Das Schreiben einer Container-Abfrage über die {{Cssxref("@container")}} At-Regel wendet Stile auf die Elemente des Containers an, wenn dieser breiter als 400px ist:

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
- {{Cssxref("@container")}} At-Regel
- CSS {{Cssxref("container")}} Kurzschreibweise
- CSS {{Cssxref("container-name")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
