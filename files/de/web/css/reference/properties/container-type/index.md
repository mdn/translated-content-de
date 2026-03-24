---
title: container-type
slug: Web/CSS/Reference/Properties/container-type
l10n:
  sourceCommit: 879a1aece3a1d4eb28c0024f0baac6aa1b96638e
---

Ein Element kann mithilfe der **`container-type`** [CSS](/de/docs/Web/CSS) Eigenschaft als Abfrage-Container eingerichtet werden. `container-type` wird verwendet, um den Typ des Containerkontextes zu definieren, der in einer Containerabfrage verwendet wird. Die verfügbaren Containerkontexte sind:

- [Size](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries): Ermöglicht das selektive Anwenden von CSS-Regeln auf die Kinder eines Containers basierend auf einer allgemeinen Größen- oder Inline-Größenbedingung wie einer maximalen oder minimalen Dimension, einem Seitenverhältnis oder einer Ausrichtung.
- [Scroll-state](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries): Ermöglicht das selektive Anwenden von CSS-Regeln auf die Kinder eines Containers basierend auf einer Scroll-Zustandsbedingung, wie ob der Container ein teilweise gescrollter Scroll-Container ist oder ob der Container ein {{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} ist, das an seinen Scroll-Snap-Container geschnappt wird.
- [Anchored](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries): Ermöglicht das selektive Anwenden von CSS-Regeln auf die Kinder eines Containers basierend darauf, ob der Container [ankerpositioniert](/de/docs/Web/CSS/Guides/Anchor_positioning) ist und eine [position-try fallback option](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) darauf angewendet wurde.

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

Die `container-type` Eigenschaft kann einen einzelnen Wert aus der folgenden Liste annehmen oder zwei Werte - einer muss `scroll-state` sein und der andere kann `inline-size` oder `size` sein. Mit anderen Worten, ein Element kann als Größenabfrage-Container, Scroll-Zustandsabfrage-Container, beides oder keines von beidem eingerichtet werden.

- `anchored`
  - : Richtet einen Abfrage-Container für ankerbasierte Containerabfragen auf dem Container ein. In diesem Fall wird die Größe des Elements nicht isoliert berechnet; es wird keine [Einschränkung](/de/docs/Web/CSS/Guides/Containment/Using) angewendet.
- `inline-size`
  - : Richtet einen Abfrage-Container für dimensionsbasierte Abfragen auf der [Inline-Achse](/de/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts#block_and_inline_dimensions) des Containers ein.
    Wendet [style](/de/docs/Web/CSS/Reference/Properties/contain#style) und [inline-size](/de/docs/Web/CSS/Reference/Properties/contain#inline-size) Einschränkung auf das Element an. Die Inline-Größe des Elements kann [isoliert berechnet](/de/docs/Web/CSS/Guides/Containment/Using#size_containment) werden, unter Ausschluss der Kind-Elemente (siehe [Verwendung von CSS-Einschränkungen](/de/docs/Web/CSS/Guides/Containment/Using)).

- `normal`
  - : Standardwert. Das Element ist kein Abfrage-Container für Containergrößenabfragen, bleibt jedoch ein Abfrage-Container für [Container-Stilabfragen](/de/docs/Web/CSS/Reference/At-rules/@container#container_style_queries).

- `scroll-state`
  - : Richtet einen Abfrage-Container für Scroll-Zustandsabfragen auf dem Container ein. In diesem Fall wird die Größe des Elements nicht isoliert berechnet; es wird keine Einschränkung angewendet.

- `size`
  - : Richtet einen Abfrage-Container für Containergrößenabfragen sowohl in den [Inline- als auch Blockdimensionen](/de/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts#block_and_inline_dimensions) ein.
    Wendet [style](/de/docs/Web/CSS/Reference/Properties/contain#style) und [size](/de/docs/Web/CSS/Reference/Properties/contain#size) Einschränkung auf das Element an. Die Größeneinschränkung wird sowohl in der Inline- als auch in der Blockrichtung auf das Element angewendet. Die Größe des Elements kann isoliert berechnet werden, unter Ausschluss der Kind-Elemente.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beschreibung

Containerabfragen ermöglichen es Ihnen, Stile innerhalb eines Containers selektiv basierend auf bedingten Abfragen, die auf dem Container durchgeführt werden, anzuwenden. Die {{cssxref("@container")}} At-Regel wird verwendet, um die Tests festzulegen, die an einem Container durchgeführt werden sollen, und die Regeln, die auf den Inhalt des Containers angewendet werden, wenn die Abfrage `true` zurückgibt.

Die Containerabfragetests werden nur an Elementen mit einer `container-type` Eigenschaft durchgeführt, die die Elemente als Größen-, Scroll-Zustands- oder ankerbasierte Abfrage-Container oder eine Kombination davon definieren.

### Containergrößenabfragen

[Containergrößenabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_size_queries) ermöglichen es Ihnen, CSS-Regeln selektiv auf die Nachkommen eines Containers basierend auf einer Größenbedingung wie beispielsweise einer maximalen oder minimalen Dimension, einem Seitenverhältnis oder einer Ausrichtung anzuwenden.

Größencontainer haben zusätzlich eine Größeneinschränkung, die auf sie angewendet wird – dies schaltet die Fähigkeit eines Elements ab, Größeninformationen aus seinen Inhalten zu beziehen, was für Containerabfragen wichtig ist, um Endlosschleifen zu vermeiden. Wäre dies nicht der Fall, könnte eine CSS-Regel innerhalb einer Containerabfrage die Inhaltsgröße ändern, was wiederum dazu führen könnte, dass die Abfrage als falsch ausgewertet wird und sich die Größe des Elternelements ändert, was wiederum die Inhaltsgröße ändern könnte und die Abfrage wieder als wahr auswertet und so weiter. Diese Sequenz würde sich dann in einer endlosen Schleife wiederholen.

Die Containergröße muss kontextbezogen, wie bei Blockebenen-Elementen, die sich über die volle Breite ihres Elternelements erstrecken, oder explizit definiert werden. Wenn eine kontextbezogene oder explizite Größe nicht verfügbar ist, werden Elemente mit Größeneinschränkung zusammenbrechen.

### Container-Scroll-Zustandsabfragen

[Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries) ermöglichen es Ihnen, CSS-Regeln selektiv auf die Kinder eines Containers basierend auf einer Scroll-Zustandsbedingung anzuwenden, wie beispielsweise:

- Ob die Inhalte des Containers teilweise gescrollt sind.
- Ob der Container ein Snap-Ziel ist, das an einen Scroll-Snap-Container geschnappt wird.
- Ob der Container über [`position: sticky`](/de/docs/Web/CSS/Reference/Properties/display) positioniert ist und an eine Grenze eines {{Glossary("scroll_container", "Scrollelements")}} geklebt ist.

Im ersten Fall ist der abgefragte Container das Scrollelement selbst. In den anderen beiden Fällen ist der abgefragte Container ein Element, das durch die Scrollposition eines übergeordneten Scrollelements beeinflusst wird.

### Ankerbasierte Containerabfragen

[Ankerbasierte Containerabfragen](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries) ermöglichen es Ihnen, CSS-Regeln selektiv auf die Nachkommen eines ankerbasierten Containers anzuwenden, wenn es über ein aktives Fallback für die Positionierung verfügt, wie im {{cssxref("position-try-fallbacks")}} Attribut beschrieben.

Beispielsweise könnten Sie ein ankerbasiertes Tooltip-Element haben, das standardmäßig über seinem Anker mit einem {{cssxref("position-area")}} Wert von `top` positioniert ist, aber einen `position-try-fallbacks` Wert von `flip-block` spezifiziert hat. Dies führt dazu, dass das Tooltip in der Blockrichtung an die Unterseite seines Ankers wechselt, wenn es anfängt, den oberen Rand des Ansichtsfensters zu überlaufen. Wenn wir `container-type: anchored` darauf einstellen, können wir erkennen, wenn der Position-try-Fallback über eine `@container` At-Regel angewendet wird und CSS entsprechend anpassen.

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

### Einrichten der Inline-Größeneinschränkung

Angenommen, folgendes HTML-Beispiel ist eine Kartenkomponente mit einem Bild, einem Titel und etwas Text:

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

Um einen Containerkontext zu erstellen, fügen Sie die `container-type` Eigenschaft zu einem Element hinzu.
Das folgende Beispiel verwendet den `inline-size` Wert, um einen Einschränkungskontext für die [Inline-Achse](/de/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts#block_and_inline_dimensions) des Containers zu erstellen:

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

Das Schreiben einer Containerabfrage über die {{Cssxref("@container")}} At-Regel wendet Stile auf die Elemente des Containers an, wenn dieser breiter als 400px ist:

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

- [CSS Containerabfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Verwendung von Container-Größen- und Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [Verwendung von ankerbasierten Containerabfragen](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries)
- {{Cssxref("@container")}} At-Regel
- CSS {{Cssxref("container")}} Kurzschreibweise
- CSS {{Cssxref("container-name")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
