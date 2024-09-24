---
title: container-type
slug: Web/CSS/container-type
l10n:
  sourceCommit: eb7a000b802ee9089456b0d3602c71ff5aabcebd
---

{{CSSRef}}

Ein Element kann als Abfragecontainer für [Größenabfragen von Containern](/de/docs/Web/CSS/CSS_containment/Container_queries) mit der **`container-type`** [CSS](/de/docs/Web/CSS) Eigenschaft festgelegt werden. `container-type` wird verwendet, um den Typ der Größenbeschränkung zu definieren, der in einer Containerabfrage verwendet wird.

Größenbeschränkung deaktiviert die Fähigkeit eines Elements, Größeninformationen von seinen Inhalten zu erhalten, was für Containerabfragen wichtig ist, um Endlosschleifen zu vermeiden. Andernfalls könnte eine CSS-Regel innerhalb einer Containerabfrage die Inhaltsgröße ändern, was dazu führen könnte, dass die Abfrage als falsch ausgewertet wird und die Größe des Elternelements ändert, was wiederum die Inhaltsgröße ändern könnte, und die Abfrage würde wieder als wahr angesehen, und so weiter.

Die Containergröße muss explizit oder durch den Kontext gesetzt werden — zum Beispiel Blockelemente, Flex-Container und Rastercontainer, die sich über die volle Breite ihres Elternelements erstrecken. Wenn eine explizite oder kontextuelle Größe nicht verfügbar ist, werden Elemente mit Größenbeschränkung kollabieren.

> [!NOTE]
> Beim Verwenden der `container-type` und {{cssxref("container-name")}} Eigenschaften werden die `style` und `layout` Werte der {{cssxref("contain")}} Eigenschaft automatisch angewendet.

## Syntax

```css
/* Schlüsselwortwerte */
container-type: normal;
container-type: size;
container-type: inline-size;

/* Globale Werte */
container-type: inherit;
container-type: initial;
container-type: revert;
container-type: revert-layer;
container-type: unset;
```

### Werte

- `size`

  - : Stellt einen Abfragecontainer für Containergrößenabfragen in beiden Dimensionen [inline und block](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) bereit.
    Wendet Layoutsicherheit, Stilsicherheit und Größensicherheit auf den Container an.

    Größensicherheit wird auf das Element in sowohl den Inline- als auch Blockrichtungen angewendet. Die Größe des Elements kann isoliert berechnet werden, ohne die Kinderelemente zu beachten.

- `inline-size`

  - : Stellt einen Abfragecontainer für dimensionale Abfragen auf der [Inline-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) des Containers bereit.
    Wendet Layoutsicherheit, Stil- und Inline-Größensicherheit auf das Element an.

    Inline-Größensicherheit wird auf das Element angewendet. Die Inline-Größe des Elements kann isoliert berechnet werden, ohne die Kinderelemente zu beachten.

- `normal`
  - : Standardwert. Das Element ist kein Abfragecontainer für Größenabfragen von Containern, bleibt aber ein Abfragecontainer für [Stilabfragen von Containern](/de/docs/Web/CSS/@container#container_style_queries).

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Einrichtung der Inline-Größensicherheit

Gegeben ist das folgende HTML-Beispiel, das eine Kartenkomponente mit einem Bild, einem Titel und etwas Text darstellt:

```html
<div class="container">
  <div class="card">
    <h3>Normale Karte</h3>
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </div>
</div>

<div class="container wide">
  <div class="card">
    <h3>Breitere Karte</h3>
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </div>
</div>
```

Um einen Containerkontext zu erstellen, fügen Sie die `container-type` Eigenschaft zu einem Element hinzu.
Das Folgende verwendet den `inline-size` Wert, um einen Kontext für die [Inline-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) des Containers zu erstellen:

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

Eine Containerabfrage mittels der {{Cssxref("@container")}} Regel wird Stile auf die Elemente des Containers anwenden, wenn dieser breiter als 400px ist:

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

- [CSS Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- {{Cssxref("@container")}} Regel
- CSS {{Cssxref("container")}} Shorthand-Eigenschaft
- CSS {{Cssxref("container-name")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
