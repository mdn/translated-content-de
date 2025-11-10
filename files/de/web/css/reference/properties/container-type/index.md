---
title: container-type
slug: Web/CSS/Reference/Properties/container-type
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Ein Element kann mit der **`container-type`** [CSS](/de/docs/Web/CSS)-Eigenschaft als Abfragecontainer definiert werden. `container-type` wird verwendet, um den Typ des Containerkontexts festzulegen, der in einer Containerabfrage verwendet wird. Die verfügbaren Containerkontexte sind:

- [Size](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries): Ermöglicht es, CSS-Regeln selektiv auf die Kinder eines Containers anzuwenden, basierend auf einer allgemeinen Größen- oder Inline-Größen-Bedingung, wie eine maximale oder minimale Dimension, Seitenverhältnis oder Orientierung.
- [Scroll-state](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries): Ermöglicht es, CSS-Regeln selektiv auf die Kinder eines Containers anzuwenden, basierend auf einer Scroll-Zustands-Bedingung, wie ob der Container ein teilweise gescrollter Scroll-Container ist oder ob der Container ein {{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} ist, das zu seinem Scroll-Snap-Container gesnapt werden soll.

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

Die Eigenschaft `container-type` kann einen einzelnen Wert aus der untenstehenden Liste annehmen oder zwei Werte – einer muss `scroll-state` und der andere kann `inline-size` oder `size` sein. Mit anderen Worten, ein Element kann als Größenabfragecontainer, Scroll-Zustandsabfragecontainer, beides oder keines von beidem definiert werden.

- `inline-size`

  - : Definiert einen Abfragecontainer für dimensionale Abfragen auf der [Inline-Achse](/de/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts#block_and_inline_dimensions) des Containers. Wendet [style](/de/docs/Web/CSS/Reference/Properties/contain#style) und [inline-size](/de/docs/Web/CSS/Reference/Properties/contain#inline-size)-Einschränkungen auf das Element an. Die Inline-Größe des Elements kann [isoliert berechnet](/de/docs/Web/CSS/Guides/Containment/Using#size_containment) werden, wobei die Kindelemente ignoriert werden (siehe [Using CSS containment](/de/docs/Web/CSS/Guides/Containment/Using)).

- `normal`

  - : Standardwert. Das Element ist kein Abfragecontainer für irgendwelche Containergrößenabfragen, bleibt jedoch ein Abfragecontainer für [Container-Stilabfragen](/de/docs/Web/CSS/Reference/At-rules/@container#container_style_queries).

- `scroll-state`

  - : Definiert einen Abfragecontainer für Scroll-Zustandsabfragen auf dem Container. In diesem Fall wird die Größe des Elements nicht isoliert berechnet; es wird keine Einschränkung angewendet.

- `size`
  - : Definiert einen Abfragecontainer für Containergrößenabfragen in beiden [Inline- und Block](/de/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts#block_and_inline_dimensions)-Dimensionen. Wendet [style](/de/docs/Web/CSS/Reference/Properties/contain#style) und [size](/de/docs/Web/CSS/Reference/Properties/contain#size)-Einschränkungen auf das Element an. Größenbeschränkung wird auf das Element in sowohl Inline- als auch Block-Richtungen angewandt. Die Größe des Elements kann isoliert berechnet werden, wobei die Kindelemente ignoriert werden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beschreibung

Containerabfragen ermöglichen es Ihnen, Stile selektiv innerhalb eines Containers anzuwenden, basierend auf bedingten Abfragen, die am Container durchgeführt werden. Die {{cssxref("@container")}}-At-Regel wird verwendet, um die Tests anzugeben, die auf einem Container durchgeführt werden, und die Regeln, die auf den Inhalt des Containers angewendet werden, wenn die Abfrage `true` zurückgibt.

Die Containerabfragetests werden nur auf Elemente mit einer `container-type`-Eigenschaft ausgeführt, die die Elemente als Größen- oder Scroll-Zustandscontainer oder beides definieren.

### Containergrößenabfragen

[Containergrößenabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_size_queries) ermöglichen es Ihnen, CSS-Regeln selektiv auf die Nachkommen eines Containers anzuwenden, basierend auf einer Größenbedingung wie eine maximale oder minimale Dimension, Seitenverhältnis oder Orientierung.

Größencontainer haben zudem eine Größenbeschränkung, die auf sie angewandt wird – dies schaltet die Fähigkeit eines Elements aus, Größeninformationen von seinen Inhalten zu erhalten, was wichtig für Containerabfragen ist, um Endlosschleifen zu vermeiden. Wenn dies nicht der Fall wäre, könnte eine CSS-Regel innerhalb einer Containerabfrage die Inhaltsgröße ändern, was wiederum dazu führen könnte, dass die Abfrage zu false auswertet und die Größe des Elternelements ändert, was wiederum die Inhaltsgröße ändern könnte und die Abfrage wieder auf true umschalten könnte, und so weiter. Diese Sequenz würde sich dann in einer endlosen Schleife wiederholen.

Die Containergröße muss durch den Kontext festgelegt werden, wie Blocklevel-Elemente, die sich über die gesamte Breite ihres Elternteils erstrecken, oder explizit definiert. Wenn eine kontextuelle oder explizite Größe nicht verfügbar ist, werden Elemente mit Größenbeschränkung kollabieren.

### Container Scroll-Zustandsabfragen

[Container Scroll-Zustandsabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries) ermöglichen es Ihnen, CSS-Regeln selektiv auf die Kinder eines Containers anzuwenden, basierend auf einer Scroll-Zustands-Bedingung wie:

- Ob der Inhalt des Containers teilweise gescrollt ist.
- Ob der Container ein Snap-Ziel ist, das zu einem Scroll-Snap-Container gesnapt wird.
- Ob der Container via [`position: sticky`](/de/docs/Web/CSS/Reference/Properties/display) positioniert ist und an einer Grenze eines {{Glossary("scroll_container", "Scroll-Containers")}} haftet.

Im ersten Fall ist der abgefragte Container der Scroll-Container selbst. In den anderen beiden Fällen ist der abgefragte Container ein Element, das von der Scroll-Position eines Ahnen-Scroll-Containers betroffen ist.

## Beispiele

### Etablierung der Inline-Größeneinschränkung

Gegeben ist das folgende HTML-Beispiel, das eine Kartenkomponente mit einem Bild, einem Titel und etwas Text enthält:

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

Um einen Containerkontext zu erstellen, fügen Sie die Eigenschaft `container-type` zu einem Element hinzu.
Das Folgende verwendet den Wert `inline-size`, um einen Einschränkungskontext für die [Inline-Achse](/de/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts#block_and_inline_dimensions) des Containers zu erstellen:

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

Das Schreiben einer Containerabfrage über die {{Cssxref("@container")}}-At-Regel wird Stile auf die Elemente des Containers anwenden, wenn es breiter als 400px ist:

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
- [Verwendung von Container Scroll-Zustandsabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- {{Cssxref("@container")}} At-Regel
- CSS {{Cssxref("container")}} Kurzschreibweise
- CSS {{Cssxref("container-name")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
