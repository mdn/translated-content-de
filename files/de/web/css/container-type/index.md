---
title: container-type
slug: Web/CSS/container-type
l10n:
  sourceCommit: 640a544f7535a08da2a017338046e5e4a142c978
---

Ein Element kann mittels der **`container-type`** [CSS](/de/docs/Web/CSS) Eigenschaft als Anfragecontainer etabliert werden. `container-type` wird verwendet, um den Typ des Containerkontexts zu definieren, der in einer Container-Anfrage verwendet wird. Die verfügbaren Containerkontexte sind:

- [Größe](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries): Ermöglicht das selektive Anwenden von CSS-Regeln auf die Kinder eines Containers basierend auf allgemeinen Größen- oder Inline-Größenbedingungen wie einer maximalen oder minimalen Dimension, einem Seitenverhältnis oder einer Ausrichtung.
- [Scroll-Status](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries): Ermöglicht das selektive Anwenden von CSS-Regeln auf die Kinder eines Containers basierend auf einer Scroll-Status-Bedingung, wie z. B. ob der Container ein Scroll-Container ist, der teilweise gescrollt ist oder ob der Container ein {{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} ist, das an seinen Scroll-Snap-Container angeheftet wird.

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

Die `container-type` Eigenschaft kann einen einzelnen Wert aus der unten stehenden Liste oder zwei Werte annehmen — einer muss `scroll-state` sein und der andere kann `inline-size` oder `size` sein. Mit anderen Worten, ein Element kann als Größen-Anfragecontainer, Scroll-Status-Anfragecontainer, beides oder keines von beiden etabliert werden.

- `inline-size`
  - : Etabliert einen Anfragecontainer für Dimensionsanfragen auf der [Inline-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) des Containers.
    Wendet [Stil](/de/docs/Web/CSS/contain#style) und [Inline-Größen]-Eindämmung (/de/docs/Web/CSS/contain#inline-size) auf das Element an. Die Inline-Größe des Elements kann [isoliert berechnet](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) werden, indem die Kindelemente ignoriert werden (siehe [Verwendung von CSS-Eindämmung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment)).

- `normal`
  - : Standardwert. Das Element ist kein Anfragecontainer für irgendwelche Containergrößen-Anfragen, bleibt jedoch ein Anfragecontainer für [Container-Stil-Anfragen](/de/docs/Web/CSS/@container#container_style_queries).

- `scroll-state`
  - : Etabliert einen Anfragecontainer für Scroll-Status-Anfragen auf dem Container. In diesem Fall wird die Größe des Elements nicht isoliert berechnet; es wird keine Eindämmung angewendet.

- `size`
  - : Etabliert einen Anfragecontainer für Containergrößen-Anfragen in den [Inline- und Block-](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) Dimensionen.
    Wendet [Stil](/de/docs/Web/CSS/contain#style) und [Größen]-Eindämmung (/de/docs/Web/CSS/contain#size) auf das Element an. Die Größen-Eindämmung wird sowohl in der Inline- als auch in der Block-Richtung auf das Element angewendet. Die Größe des Elements kann isoliert berechnet werden, indem die Kindelemente ignoriert werden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beschreibung

Container-Anfragen ermöglichen es Ihnen, Stile innerhalb eines Containers selektiv basierend auf bedingten Anfragen, die am Container durchgeführt werden, anzuwenden. Die {{cssxref("@container")}} Regel wird verwendet, um die Tests zu spezifizieren, die an einem Container durchgeführt werden, sowie die Regeln, die auf die Inhalte des Containers angewendet werden, falls die Anfrage als `wahr` zurückkehrt.

Die Tests der Container-Anfrage werden nur an Elementen mit einer `container-type` Eigenschaft durchgeführt, die die Elemente als Größen- oder Scroll-Status-Container, oder beides, definieren.

### Containergrößen-Anfragen

[Containergrößen-Anfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_size_queries) erlauben es Ihnen, CSS-Regeln selektiv auf die Nachfahren eines Containers basierend auf einer Größenbedingung, wie einer maximalen oder minimalen Dimension, einem Seitenverhältnis oder einer Ausrichtung, anzuwenden.

Größen-Container haben zusätzlich eine Größen-Eindämmung angewendet — dies schaltet die Fähigkeit eines Elements aus, Größeninformationen von seinen Inhalten zu erhalten, was wichtig für Container-Anfragen ist, um Endlosschleifen zu vermeiden. Wäre dies nicht der Fall, könnte eine CSS-Regel innerhalb einer Container-Anfrage die Inhaltsgröße ändern, was wiederum die Anfrage veranlassen könnte, als falsch zu bewerten und die Größe des übergeordneten Elements könnte sich ändern, was wiederum die Inhaltsgröße ändern und die Anfrage wieder in wahr umwandeln könnte, und so weiter. Diese Sequenz würde sich dann in einer endlosen Schleife wiederholen.

Die Containergröße muss durch den Kontext festgelegt werden, wie Block-Elemente, die sich über die gesamte Breite ihres Elternteils erstrecken, oder explizit definiert sein. Wenn eine kontextuelle oder explizite Größe nicht verfügbar ist, werden sich Elemente mit Größen-Eindämmung zusammenziehen.

### Container Scroll-Status-Anfragen

[Container Scroll-Status-Anfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) erlauben es Ihnen, CSS-Regeln selektiv auf die Kinder eines Containers basierend auf einer Scroll-Status-Bedingung anzuwenden, wie:

- Ob die Inhalte des Containers teilweise gescrollt sind.
- Ob der Container ein Snap-Ziel ist, das an einen Scroll-Snap-Container angeheftet wird.
- Ob der Container über [`position: sticky`](/de/docs/Web/CSS/display) positioniert ist und an einer Grenze eines {{Glossary("scroll_container", "scrollenden Containers")}} festhängt.

Im ersten Fall ist der abgefragte Container der Scroll-Container selbst. In den anderen beiden Fällen ist der abgefragte Container ein Element, das von der Scroll-Position eines übergeordneten Scroll-Containers betroffen ist.

## Beispiele

### Etablierung der Inline-Größen-Eindämmung

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

Um einen Containerkontext zu erstellen, fügen Sie einem Element die `container-type` Eigenschaft hinzu.
Das folgende Beispiel verwendet den Wert `inline-size`, um einen Eindämmungskontext für die [Inline-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) des Containers zu erstellen:

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

Das Schreiben einer Container-Anfrage über die {{Cssxref("@container")}} Regel wird Stile auf die Elemente des Containers anwenden, wenn er breiter als 400px ist:

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

- [CSS Container-Anfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Containergrößen- und Stil-Anfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Verwendung von Container Scroll-Status-Anfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- {{Cssxref("@container")}} Regel
- CSS {{Cssxref("container")}} Kurzschreibweise Eigenschaft
- CSS {{Cssxref("container-name")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
