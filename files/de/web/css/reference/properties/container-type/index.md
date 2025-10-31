---
title: container-type
slug: Web/CSS/Reference/Properties/container-type
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Ein Element kann mithilfe der **`container-type`** [CSS](/de/docs/Web/CSS) Eigenschaft als Abfrage-Container festgelegt werden. `container-type` wird verwendet, um den Typ des Container-Kontexts festzulegen, der in einer Container-Abfrage verwendet wird. Die verfügbaren Container-Kontexte sind:

- [Größe](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries): Erlauben Sie ein selektives Anwenden von CSS-Regeln auf die Kinder eines Containers basierend auf einer allgemeinen Größen- oder Inline-Größenbedingung wie einer maximalen oder minimalen Abmessung, einem Seitenverhältnis oder einer Ausrichtung.
- [Scroll-Zustand](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries): Ermöglicht das selektive Anwenden von CSS-Regeln auf die Kinder eines Containers basierend auf einer Scroll-Zustandsbedingung, z. B. ob der Container ein Scroll-Container ist, der teilweise gescrollt ist, oder ob der Container ein {{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} ist, das an seinen Scroll-Snap-Container angeheftet wird.

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

Die `container-type` Eigenschaft kann einen Einzelwert aus der unten stehenden Liste annehmen oder zwei Werte — einer muss `scroll-state` sein und der andere kann `inline-size` oder `size` sein. Mit anderen Worten, ein Element kann als Größenabfrage-Container, Scroll-Zustandsabfrage-Container, beides oder keines festgelegt werden.

- `inline-size`
  - : Legt einen Abfrage-Container für dimensionale Abfragen entlang der [Inline-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) des Containers fest.
    Wendet [style](/de/docs/Web/CSS/Reference/Properties/contain#style) und [inline-size](/de/docs/Web/CSS/Reference/Properties/contain#inline-size) Containment auf das Element an. Die Inline-Größe des Elements kann [isoliert berechnet](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) werden, indem die Kind-Elemente ignoriert werden (siehe [Verwenden von CSS-Containment](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment)).

- `normal`
  - : Standardwert. Das Element ist kein Abfrage-Container für Containergrößenabfragen, bleibt jedoch ein Abfrage-Container für [Container-Stilabfragen](/de/docs/Web/CSS/@container#container_style_queries).

- `scroll-state`
  - : Legt einen Abfrage-Container für Scroll-Zustandsabfragen im Container fest. In diesem Fall wird die Größe des Elements nicht isoliert berechnet; es wird kein Containment angewendet.

- `size`
  - : Legt einen Abfrage-Container für Containergrößenabfragen in beiden [Inline- und Block-](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) Dimensionen fest.
    Wendet [style](/de/docs/Web/CSS/Reference/Properties/contain#style) und [size](/de/docs/Web/CSS/Reference/Properties/contain#size) Containment auf das Element an. Größen-Containment wird auf das Element in beiden Richtungen, Inline und Block, angewendet. Die Größe des Elements kann isoliert berechnet werden, indem die Kind-Elemente ignoriert werden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beschreibung

Container-Abfragen erlauben es Ihnen, Stile innerhalb eines Containers selektiv basierend auf konditionalen Abfragen, die am Container durchgeführt werden, anzuwenden. Die {{cssxref("@container")}} At-Regel wird verwendet, um die Tests festzulegen, die an einem Container durchgeführt werden, und die Regeln, die auf den Inhalt des Containers angewendet werden, wenn die Abfrage `wahr` zurückgibt.

Die Container-Abfrage-Tests werden nur an Elementen mit einer `container-type` Eigenschaft durchgeführt, die die Elemente als Größen- oder Scroll-Zustandscontainer oder beides definiert.

### Containergrößenabfragen

[Containergrößenabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_size_queries) erlauben es Ihnen, CSS-Regeln selektiv auf die Nachkommen eines Containers basierend auf einer Größenbedingung wie einer maximalen oder minimalen Abmessung, einem Seitenverhältnis oder einer Ausrichtung anzuwenden.

Größen-Container haben zusätzlich Größen-Containment angewendet — das schaltet die Fähigkeit eines Elements aus, Größeninformationen von seinem Inhalt zu bekommen, was wichtig für Container-Abfragen ist, um Endlosschleifen zu vermeiden. Wenn dies nicht der Fall wäre, könnte eine CSS-Regel innerhalb einer Container-Abfrage die Inhaltsgröße ändern, was wiederum die Abfrage dazu bringen könnte, zu `false` zu evaluieren und die Größe des Elternelements zu ändern, was wiederum die Inhaltsgröße ändern und die Abfrage wieder auf `true` umschalten könnte, und so weiter. Diese Sequenz würde sich dann in einer Endlosschleife wiederholen.

Die Containergröße muss durch den Kontext festgelegt werden, wie etwa Blockelemente, die sich über die volle Breite ihres Elternteils erstrecken, oder explizit definiert werden. Wenn eine kontextuelle oder explizite Größe nicht verfügbar ist, werden Elemente mit Größen-Containment kollabieren.

### Container-Scroll-Zustandsabfragen

[Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) erlauben es Ihnen, CSS-Regeln selektiv auf die Kinder eines Containers basierend auf einer Scroll-Zustandsbedingung wie folgend anzuwenden:

- Ob der Inhalt des Containers teilweise gescrollt ist.
- Ob der Container ein Snap-Ziel ist, das an einen Scroll-Snap-Container angeheftet wird.
- Ob der Container mittels [`position: sticky`](/de/docs/Web/CSS/Reference/Properties/display) positioniert ist und an die Grenze eines {{Glossary("scroll_container", "scrollenden Containers")}} angeheftet ist.

Im ersten Fall ist der abgefragte Container der Scroll-Container selbst. In den anderen beiden Fällen ist der abgefragte Container ein Element, das von der Scroll-Position eines Vorfahren-Scroll-Containers betroffen ist.

## Beispiele

### Festlegen des Inline-Größen-Containments

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
Das Folgende verwendet den Wert `inline-size`, um einen Containment-Kontext für die [Inline-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) des Containers zu erstellen:

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

Eine Container-Abfrage mit der {{Cssxref("@container")}} At-Regel wird Stile auf die Elemente des Containers anwenden, wenn dieser breiter als 400px ist:

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
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- {{Cssxref("@container")}} At-Regel
- CSS {{Cssxref("container")}} Kurzform-Eigenschaft
- CSS {{Cssxref("container-name")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
