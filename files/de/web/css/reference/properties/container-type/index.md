---
title: container-type
slug: Web/CSS/Reference/Properties/container-type
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Ein Element kann als Abfrage-Container mit der **`container-type`** [CSS](/de/docs/Web/CSS) Eigenschaft festgelegt werden. `container-type` wird genutzt, um den Typ des Container-Kontexts zu definieren, der in einer Container-Abfrage verwendet wird. Die verfügbaren Container-Kontexte sind:

- [Größe](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries): Ermöglicht das selektive Anwenden von CSS-Regeln auf die Kinder eines Containers basierend auf einer allgemeinen Größen- oder Inline-Größenbedingung, wie z.B. einer maximalen oder minimalen Dimension, einem Seitenverhältnis oder einer Ausrichtung.
- [Scroll-Zustand](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries): Ermöglicht das selektive Anwenden von CSS-Regeln auf die Kinder eines Containers basierend auf einer Scroll-Zustandsbedingung, z.B. ob der Container ein Scroll-Container ist, der teilweise gescrollt ist, oder ob der Container ein {{Glossary("Scroll_snap#snap_target", "Schnappziel")}} ist, das zu seinem Scroll-Schnapp-Container geschnappt werden soll.

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

Die `container-type` Eigenschaft kann einen einzelnen Wert aus der untenstehenden Liste oder zwei Werte annehmen — einer muss `scroll-state` sein und der andere kann `inline-size` oder `size` sein. Mit anderen Worten, ein Element kann als Größen-Abfrage-Container, als Scroll-Zustand-Abfrage-Container, beides oder keines von beiden festgelegt werden.

- `inline-size`
  - : Etabliert einen Abfrage-Container für dimensionsbezogene Abfragen auf der [Inline-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) des Containers.
    Wendet [Style](/de/docs/Web/CSS/Reference/Properties/contain#style) und [inline-size](/de/docs/Web/CSS/Reference/Properties/contain#inline-size) Containment auf das Element an. Die Inline-Größe des Elements kann [isoliert berechnet](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) werden, unabhängig von den Kind-Elementen (siehe [Using CSS containment](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment)).

- `normal`
  - : Standardwert. Das Element ist kein Abfrage-Container für Container-Größenabfragen, bleibt jedoch ein Abfrage-Container für [Container-Stilabfragen](/de/docs/Web/CSS/Reference/At-rules/@container#container_style_queries).

- `scroll-state`
  - : Etabliert einen Abfrage-Container für Scroll-Zustand-Abfragen auf dem Container. In diesem Fall wird die Größe des Elements nicht isoliert berechnet; es wird keine Containment angewendet.

- `size`
  - : Etabliert einen Abfrage-Container für Container-Größenabfragen in beiden Dimensionen [Inline und Block](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions).
    Wendet [Style](/de/docs/Web/CSS/Reference/Properties/contain#style) und [size](/de/docs/Web/CSS/Reference/Properties/contain#size) Containment auf das Element an. Größen-Containment wird auf das Element sowohl in der Inline- als auch der Blockrichtung angewendet. Die Größe des Elements kann isoliert berechnet werden, unabhängig von den Kind-Elementen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beschreibung

Container-Abfragen ermöglichen es Ihnen, selektiv Stile innerhalb eines Containers basierend auf bedingten Abfragen, die am Container durchgeführt werden, anzuwenden. Die {{cssxref("@container")}} At-Regel wird verwendet, um die Tests festzulegen, die an einem Container durchgeführt werden, und die Regeln, die auf den Inhalt des Containers angewendet werden, wenn die Abfrage `true` ergibt.

Die Container-Abfrage-Tests werden nur an Elementen mit einer `container-type` Eigenschaft durchgeführt, die die Elemente als Größen- oder Scroll-Zustand-Container, oder beides definieren.

### Container-Größenabfragen

[Container-Größenabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_size_queries) ermöglichen es Ihnen, selektiv CSS-Regeln auf die Nachkommen eines Containers basierend auf einer Größenbedingung wie einer maximalen oder minimalen Dimension, einem Seitenverhältnis oder einer Ausrichtung anzuwenden.

Größen-Container haben zusätzlich ein Größen-Containment, das angewendet wird — dies schaltet die Fähigkeit eines Elements ab, Größeninformationen aus seinem Inhalt zu beziehen, was für Container-Abfragen wichtig ist, um unbegrenzte Schleifen zu vermeiden. Wenn dies nicht der Fall wäre, könnte eine CSS-Regel innerhalb einer Container-Abfrage die Inhaltsgröße ändern, was wiederum die Abfrage dazu bringen könnte, als falsch bewertet zu werden und die Größe des Elternelements zu ändern, was wiederum die Inhaltsgröße ändern und die Abfrage wieder auf wahr setzen könnte, und so weiter. Diese Sequenz würde sich dann in einer endlosen Schleife wiederholen.

Die Container-Größe muss durch Kontext festgelegt werden, wie Block-Level-Elemente, die sich über die gesamte Breite ihres Elternteils erstrecken, oder explizit definiert sein. Wenn keine kontextuelle oder explizite Größe verfügbar ist, werden Elemente mit Größen-Containment zusammenbrechen.

### Container-Scroll-Zustand-Abfragen

[Container-Scroll-Zustand-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) ermöglichen es Ihnen, selektiv CSS-Regeln auf die Kinder eines Containers basierend auf einer Scroll-Zustandsbedingung anzuwenden, wie:

- Ob die Inhalte des Containers teilweise gescrollt sind.
- Ob der Container ein Schnappziel ist, das zu einem Scroll-Schnapp-Container geschnappt werden soll.
- Ob der Container über [`position: sticky`](/de/docs/Web/CSS/Reference/Properties/display) positioniert ist und an einer Grenze eines {{Glossary("scroll_container", "Scrolling-Containers")}} haftet.

Im ersten Fall ist der abgefragte Container der Scroll-Container selbst. In den anderen beiden Fällen ist der abgefragte Container ein Element, das von der Scroll-Position eines übergeordneten Scroll-Containers betroffen ist.

## Beispiele

### Etablierung der Inline-Größen-Containment

Angenommen, das folgende HTML-Beispiel ist eine Karten-Komponente mit einem Bild, einem Titel und etwas Text:

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

Um einen Container-Kontext zu erstellen, fügen Sie die `container-type` Eigenschaft zu einem Element hinzu. Das folgende Beispiel verwendet den `inline-size` Wert, um einen Container-Kontext für die [Inline-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) des Containers zu erstellen:

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

Das Schreiben einer Container-Abfrage über die {{Cssxref("@container")}} At-Regel wird Stile auf die Elemente des Containers anwenden, wenn dieser breiter als 400px ist:

```css
@container (width > 400px) {
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

- [CSS-Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Container-Größen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Zustand-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- {{Cssxref("@container")}} At-Regel
- CSS {{Cssxref("container")}} Kurzschreibweise
- CSS {{Cssxref("container-name")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
