---
title: "`container-type` CSS property"
short-title: container-type
slug: Web/CSS/Reference/Properties/container-type
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Ein Element kann als Abfrage-Container mit der **`container-type`** [CSS](/de/docs/Web/CSS)-Eigenschaft eingerichtet werden. `container-type` wird verwendet, um den Typ des Container-Kontexts zu definieren, der in einer Container-Abfrage verwendet wird. Die verfügbaren Container-Kontexte sind:

- [Größe](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries): Ermöglicht die selektive Anwendung von CSS-Regeln auf die Kinder eines Containers basierend auf einer allgemeinen Größen- oder Innenmaßbedingung, wie z.B. einer maximalen oder minimalen Dimension, einem Seitenverhältnis oder einer Ausrichtung.
- [Scrollzustand](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries): Ermöglicht die selektive Anwendung von CSS-Regeln auf die Kinder eines Containers basierend auf einer Scrollzustandsbedingung, wie z.B. ob der Container ein teilweise gescrollter Container ist oder ob der Container ein {{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} ist, das auf seinen Snap-Container gesnappt wird.
- [Verankert](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries): Ermöglicht die selektive Anwendung von CSS-Regeln auf die Kinder eines Containers basierend darauf, ob der Container [ankerpositioniert](/de/docs/Web/CSS/Guides/Anchor_positioning) ist und eine [Position-Try-Fallback-Option](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) auf ihn angewendet wird.

## Syntax

```css
/* Keyword values */
container-type: normal;
container-type: size;
container-type: inline-size;
container-type: scroll-state;
container-type: anchored;

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

Die `container-type`-Eigenschaft kann einen einzelnen Wert aus der folgenden Liste annehmen oder zwei Werte — einer muss `scroll-state` sein und der andere kann `inline-size` oder `size` sein. Mit anderen Worten, ein Element kann als Größenabfrage-Container, Scrollzustandsabfrage-Container, beides oder keines eingerichtet werden.

- `anchored`
  - : Richtet einen Abfrage-Container für verankerte Container-Abfragen auf dem Container ein. In diesem Fall wird die Größe des Elements nicht isoliert berechnet; es wird keine [Containment](/de/docs/Web/CSS/Guides/Containment/Using) angewendet.
- `inline-size`
  - : Richtet einen Abfrage-Container für dimensionale Abfragen auf der [Inline-Achse](/de/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts#block_and_inline_dimensions) des Containers ein.
    Wendet [style](/de/docs/Web/CSS/Reference/Properties/contain#style) und [inline-size](/de/docs/Web/CSS/Reference/Properties/contain#inline-size) Containment auf das Element an. Die Inline-Größe des Elements kann [isoliert berechnet](/de/docs/Web/CSS/Guides/Containment/Using#size_containment) werden, wobei die Kindelemente ignoriert werden (siehe [CSS-Containment verwenden](/de/docs/Web/CSS/Guides/Containment/Using)).

- `normal`
  - : Standardwert. Das Element ist kein Abfrage-Container für Containergrößenabfragen, bleibt jedoch ein Abfrage-Container für [Container-Stilabfragen](/de/docs/Web/CSS/Reference/At-rules/@container#container_style_queries).

- `scroll-state`
  - : Richtet einen Abfrage-Container für Scrollzustandsabfragen auf dem Container ein. In diesem Fall wird die Größe des Elements nicht isoliert berechnet; es wird kein Containment angewendet.

- `size`
  - : Richtet einen Abfrage-Container für Containergrößenabfragen in beiden [Inline- und Block-](/de/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts#block_and_inline_dimensions) Dimensionen ein.
    Wendet [style](/de/docs/Web/CSS/Reference/Properties/contain#style) und [size](/de/docs/Web/CSS/Reference/Properties/contain#size) Containment auf das Element an. Größencontainment wird sowohl in Inline- als auch Blockrichtung auf das Element angewendet. Die Größe des Elements kann isoliert berechnet werden, wobei die Kindelemente ignoriert werden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beschreibung

Container-Abfragen ermöglichen es, Stile innerhalb eines Containers selektiv basierend auf bedingten Abfragen, die am Container durchgeführt werden, anzuwenden. Die {{cssxref("@container")}}-Regel wird verwendet, um die Tests zu spezifizieren, die an einem Container durchgeführt werden, und die Regeln, die auf die Inhalte des Containers angewendet werden, wenn die Abfrage `true` zurückgibt.

Die Container-Abfragetests werden nur an Elementen mit einer `container-type`-Eigenschaft durchgeführt, die die Elemente als Größen-, Scrollzustands- oder verankerte Abfrage-Container oder eine Kombination davon definiert.

### Containergrößenabfragen

[Containergrößenabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_size_queries) ermöglichen es, CSS-Regeln selektiv auf die Nachkommen eines Containers basierend auf einer Größenbedingung anzuwenden, wie z.B. einer maximalen oder minimalen Dimension, einem Seitenverhältnis oder einer Ausrichtung.

Größencontainer haben zusätzliches Größencontainment, das ihnen angewendet wird — dies deaktiviert die Möglichkeit eines Elements, Größeninformationen von seinen Inhalten zu erhalten, was für Container-Abfragen wichtig ist, um Endlosschleifen zu vermeiden. Wäre dies nicht der Fall, könnte eine CSS-Regel innerhalb einer Container-Abfrage die Inhaltsgröße ändern, was wiederum die Abfrage falsch auswerten und die Größe des Elternelements ändern könnte, was wiederum die Inhaltsgröße ändern und die Abfrage wieder auf wahr zurücksetzen könnte, und so weiter. Diese Sequenz würde sich dann in einer Endlosschleife wiederholen.

Die Containergröße muss durch den Kontext festgelegt werden, wie z.B. Blockebenen-Elemente, die sich über die gesamte Breite ihres Elternteils erstrecken, oder explizit definiert sein. Wenn keine kontextuelle oder explizite Größe verfügbar ist, werden Elemente mit Größencontainment kollabieren.

### Container-Scrollzustandsabfragen

[Container-Scrollzustandsabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries) ermöglichen es, CSS-Regeln selektiv auf die Kinder eines Containers basierend auf einer Scrollzustandsbedingung anzuwenden, wie:

- Ob die Inhalte des Containers teilweise gescrollt sind.
- Ob der Container ein Snap-Ziel ist, das auf einen Scroll-Snap-Container gesnappt wird.
- Ob der Container über [`position: sticky`](/de/docs/Web/CSS/Reference/Properties/display) positioniert und an eine Grenze eines {{Glossary("scroll_container", "Scroll-Containers")}} geheftet ist.

Im ersten Fall ist der abgefragte Container der Scroll-Container selbst. In den anderen beiden Fällen ist der abgefragte Container ein Element, das von der Scrollposition eines übergeordneten Scroll-Containers betroffen ist.

### Verankerte Containerabfragen

[Verankerte Containerabfragen](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries) ermöglichen es, CSS-Regeln selektiv auf die Nachkommen eines ankerpositionierten Containers anzuwenden, wenn auf ihn ein aktives Position-Try-Fallback, wie über die {{cssxref("position-try-fallbacks")}}-Eigenschaft spezifiziert, angewendet ist.

Sie könnten zum Beispiel ein ankerpositioniertes Tooltip-Element haben, das standardmäßig oberhalb seines Ankers über einen {{cssxref("position-area")}}-Wert von `top` positioniert ist, aber einen `position-try-fallbacks`-Wert von `flip-block` spezifiziert hat. Dies führt dazu, dass das Tooltip in Blockrichtung an die Unterseite seines Ankers springt, wenn es anfängt, über den oberen Rand des Viewports hinaus zu gehen. Wenn wir `container-type: anchored` darauf setzen, können wir erkennen, wann das Position-Try-Fallback über eine `@container`-Regel angewendet wird und CSS entsprechend anwenden.

```css
.tooltip {
  position: absolute;
  position-anchor: --myAnchor;
  position-area: top;
  position-try-fallbacks: flip-block;
  container-type: anchored;
}
```

## Beispiele

### Einrichtung des Inline-Größencontaintments

Angenommen, Sie haben das folgende HTML-Beispiel, welches eine Kartenkomponente mit einem Bild, einem Titel und etwas Text darstellt:

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

Um einen Container-Kontext zu erstellen, fügen Sie dem Element die `container-type`-Eigenschaft hinzu.
Das Folgende verwendet den Wert `inline-size`, um einen Containment-Kontext für die [Inline-Achse](/de/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts#block_and_inline_dimensions) des Containers zu erstellen:

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

Eine Container-Abfrage durch die {{Cssxref("@container")}}-Regel zu schreiben, wird die Stile auf die Elemente des Containers anwenden, wenn dieser breiter als 400px ist:

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

- [CSS-Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [Verwendung von Container-Scrollzustandsabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [Verwendung von verankerten Containerabfragen](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries)
- {{Cssxref("@container")}}-Regel
- CSS-{{Cssxref("container")}}-Kurzschreibweise
- CSS-{{Cssxref("container-name")}}-Eigenschaft
- CSS-{{cssxref("content-visibility")}}-Eigenschaft
