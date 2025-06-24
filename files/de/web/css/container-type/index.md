---
title: container-type
slug: Web/CSS/container-type
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Ein Element kann mit der **`container-type`** [CSS](/de/docs/Web/CSS) Eigenschaft als Abfragecontainer festgelegt werden. `container-type` wird verwendet, um den Typ des Containerkontexts in einer Containerabfrage zu definieren. Die verfügbaren Containerkontexte sind:

- [Größe](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries): Ermöglicht das selektive Anwenden von CSS-Regeln auf die Kinder eines Containers basierend auf einer allgemeinen Größen- oder Inline-Größe-Bedingung wie einer maximalen oder minimalen Abmessung, einem Seitenverhältnis oder einer Orientierung.
- [Scroll-Zustand](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries): Ermöglicht das selektive Anwenden von CSS-Regeln auf die Kinder eines Containers basierend auf einer Scroll-Zustand-Bedingung, wie z. B. ob der Container ein Scroll-Container ist, der teilweise gescrollt wird, oder ob der Container ein {{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} ist, das an seinem Scroll-Snap-Container festgeschnappt ist.

> [!NOTE]
> Wenn Sie die `container-type` und {{cssxref("container-name")}} Eigenschaften verwenden, werden die `style` und `layout` Werte der {{cssxref("contain")}} Eigenschaft automatisch angewendet.

## Syntax

```css
/* Keyword values */
container-type: normal;
container-type: size;
container-type: inline-size;
container-type: scroll-state;

/* Two values */
container-type: size scroll-state;

/* Global Values */
container-type: inherit;
container-type: initial;
container-type: revert;
container-type: revert-layer;
container-type: unset;
```

### Werte

Die `container-type` Eigenschaft kann einen einzelnen Wert aus der unten stehenden Liste annehmen oder zwei Werte — einer davon muss `scroll-state` sein und der andere kann `inline-size` oder `size` sein. Mit anderen Worten, ein Element kann als Größenabfragecontainer, Scroll-Zustand-Abfragecontainer, beides oder keines festgelegt werden.

- `inline-size`

  - : Etabliert einen Abfragecontainer für dimensionale Abfragen auf der [Inline-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) des Containers. Wendet Layout-, Stil- und Inline-Größen-Enthaltenheit auf das Element an.

    Die Enthaltenheit der Inline-Größe wird auf das Element angewendet. Die Inline-Größe des Elements kann [isoliert berechnet](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) werden, wobei die Kind-Elemente ignoriert werden (siehe [Verwendung von CSS-Enthaltenheit](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment)).

- `normal`

  - : Standardwert. Das Element ist kein Abfragecontainer für irgendeine Containergrößenabfrage, bleibt jedoch ein Abfragecontainer für [Containerstilabfragen](/de/docs/Web/CSS/@container#container_style_queries).

- `scroll-state`

  - : Etabliert einen Abfragecontainer für Scroll-Zustandsabfragen auf dem Container. In diesem Fall wird die Größe des Elements nicht isoliert berechnet; es wird keine Enthaltenheit angewendet.

- `size`

  - : Etabliert einen Abfragecontainer für Containergrößenabfragen in beiden [Inline- und Block-](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) Dimensionen. Wendet Layout-Enthaltenheit, Stil-Enthaltenheit und Größen-Enthaltenheit auf den Container an.

    Die Größen-Enthaltenheit wird auf das Element sowohl in den Inline- als auch in den Block-Richtungen angewendet. Die Größe des Elements kann isoliert berechnet werden, wobei die Kind-Elemente ignoriert werden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beschreibung

Container-Abfragen ermöglichen es Ihnen, Stile selektiv innerhalb eines Containers basierend auf bedingten Abfragen anzuwenden, die auf dem Container durchgeführt werden. Die {{cssxref("@container")}} At-Regel wird verwendet, um die auf einem Container durchgeführten Tests anzugeben und die Regeln, die auf den Inhalt des Containers angewendet werden, wenn die Abfrage `true` ergibt.

Die Container-Abfragetests werden nur an Elementen mit einer `container-type` Eigenschaft durchgeführt, welche die Elemente als Größen- oder Scroll-Zustand-Container oder beides definiert.

### Containergrößenabfragen

[Containergrößenabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_size_queries) ermöglichen es Ihnen, CSS-Regeln selektiv auf die Nachkommen eines Containers basierend auf einer Größenbedingung, wie einer maximalen oder minimalen Abmessung, einem Seitenverhältnis oder einer Orientierung anzuwenden.

Größencontainer haben zusätzlich Größen-Enthaltenheit auf sie angewendet — dies deaktiviert die Fähigkeit eines Elements, Größeninformationen von seinem Inhalt zu erhalten, was wichtig für Container-Abfragen ist, um unendliche Schleifen zu vermeiden. Wäre dies nicht der Fall, könnte eine CSS-Regel innerhalb einer Container-Abfrage die Inhaltsgröße ändern, was wiederum dazu führen könnte, dass die Abfrage als falsch bewertet wird und die Größe des übergeordneten Elements ändert, was wiederum die Inhaltsgröße ändern könnte und die Abfrage wieder als wahr auswertet, und so weiter. Diese Sequenz würde sich in einer endlosen Schleife wiederholen.

Die Containergröße muss durch den Kontext, wie Block-Elemente, die sich über die gesamte Breite ihres übergeordneten Elements erstrecken, festgelegt oder explizit definiert werden. Wenn ein kontextueller oder expliziter Größenwert nicht verfügbar ist, werden Elemente mit Größen-Enthaltenheit zusammenbrechen.

### Container Scroll-Zustandsabfragen

[Container Scroll-Zustandsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) ermöglichen es Ihnen, CSS-Regeln selektiv auf die Kinder eines Containers basierend auf einer Scroll-Zustand-Bedingung wie:

- Ob der Inhalt des Containers teilweise gescrollt ist.
- Ob der Container ein Snap-Ziel ist, das an einem Scroll-Snap-Container festgeschnappt ist.
- Ob der Container mittels [`position: sticky`](/de/docs/Web/CSS/display) positioniert und an einer Grenze eines {{Glossary("scroll_container", "scrollenden Containers")}} haften bleibt.

Im ersten Fall ist der abgefragte Container der Scroll-Container selbst. In den anderen beiden Fällen ist der abgefragte Container ein Element, das von der Scroll-Position eines übergeordneten Scroll-Containers betroffen ist.

## Beispiele

### Festlegen der Inline-Größen-Enthaltenheit

Gegeben ist das folgende HTML-Beispiel, das eine Kartenkomponente mit einem Bild, einem Titel und etwas Text ist:

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

Um einen Containerkontext zu erstellen, fügen Sie die `container-type` Eigenschaft zu einem Element hinzu. Das Folgende verwendet den `inline-size` Wert, um einen Enthaltenheitskontext für die [Inline-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) des Containers zu erstellen:

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

Das Schreiben einer Containerabfrage mittels der {{Cssxref("@container")}} At-Regel wird die Stile auf die Elemente des Containers anwenden, wenn er breiter als 400px ist:

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
- [Verwendung von Scroll-Zustandsabfragen für Container](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- {{Cssxref("@container")}} At-Regel
- CSS {{Cssxref("container")}} Kurzschreibweise der Eigenschaft
- CSS {{Cssxref("container-name")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
