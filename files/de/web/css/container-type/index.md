---
title: container-type
slug: Web/CSS/container-type
l10n:
  sourceCommit: 131f0d055c69d48323c42bfadf8ae70b3706d8de
---

{{CSSRef}}

Ein Element kann mit der **`container-type`** [CSS](/de/docs/Web/CSS) Eigenschaft als Abfragecontainer etabliert werden. `container-type` wird verwendet, um den Typ des Containerkontexts festzulegen, der in einer Containerabfrage verwendet wird. Die verfügbaren Containerkontexte sind:

- [Größe](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries): Ermöglicht die selektive Anwendung von CSS-Regeln auf die Kinder eines Containers basierend auf einer allgemeinen Größen- oder Inline-Größenbedingung wie einer maximalen oder minimalen Abmessung, einem Seitenverhältnis oder einer Ausrichtung.
- [Scroll-Zustand](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries): Ermöglicht die selektive Anwendung von CSS-Regeln auf die Kinder eines Containers basierend auf einer Scroll-Zustandsbedingung, wie z.B. ob der Container ein teilweise gescrollter Scroll-Container ist oder ob der Container ein {{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} ist, das zu seinem Scroll-Snap-Container geschnappt ist.

> [!NOTE]
> Bei Verwendung der Eigenschaften `container-type` und {{cssxref("container-name")}} werden die Werte `style` und `layout` der Eigenschaft {{cssxref("contain")}} automatisch angewendet.

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

Die `container-type` Eigenschaft kann einen einzelnen Wert aus der unten stehenden Liste annehmen oder zwei Werte — einer muss `scroll-state` sein und der andere kann `inline-size` oder `size` sein. Mit anderen Worten, ein Element kann als Größenabfragecontainer, Scroll-Zustandsabfragecontainer, beides oder keines festgelegt werden.

- `inline-size`

  - : Etabliert einen Abfragecontainer für dimensionsbezogene Abfragen auf der [Inline-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) des Containers.
    Wendet Layout-, Stil- und Inline-Größenkonformität auf das Element an.

    Die Inline-Größenkonformität wird auf das Element angewendet. Die Inline-Größe des Elements kann [isoliert berechnet](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) werden, ohne die Kindelemente zu berücksichtigen (siehe [Verwendung von CSS-Eingrenzung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment)).

- `normal`

  - : Standardwert. Das Element ist kein Abfragecontainer für Containergrößenabfragen, bleibt jedoch ein Abfragecontainer für [Containerstilabfragen](/de/docs/Web/CSS/@container#container_style_queries).

- `scroll-state`

  - : Etabliert einen Abfragecontainer für Scroll-Zustandsabfragen auf dem Container. In diesem Fall wird die Größe des Elements nicht isoliert berechnet; es wird keine Eingrenzung angewendet.

- `size`

  - : Etabliert einen Abfragecontainer für Containergrößenabfragen in beiden [Inline- und Block-](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) Dimensionen.
    Wendet Layout-Eingrenzung, Stil-Eingrenzung und Größen-Eingrenzung auf den Container an.

    Die Größen-Eingrenzung wird auf das Element in beiden Richtungen, Inline und Block, angewendet. Die Größe des Elements kann isoliert berechnet werden, ohne die Kindelemente zu berücksichtigen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beschreibung

Containerabfragen ermöglichen es Ihnen, Stile innerhalb eines Containers selektiv anzuwenden, basierend auf bedingten Abfragen, die auf dem Container durchgeführt werden. Der {{cssxref("@container")}} At-Regel wird verwendet, um die auf einem Container durchgeführten Tests zu spezifizieren und die Regeln, die auf den Inhalt des Containers angewendet werden, falls die Abfrage `true` zurückgibt.

Die Containerabfragetests werden nur auf Elemente mit einer `container-type` Eigenschaft durchgeführt, die die Elemente als Größen- oder Scroll-Zustandscontainer oder beides definiert.

### Containergrößenabfragen

[Containergrößenabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_size_queries) ermöglichen es Ihnen, CSS-Regeln selektiv auf die Nachfahren eines Containers anzuwenden, basierend auf einer Größenbedingung wie einer maximalen oder minimalen Abmessung, einem Seitenverhältnis oder einer Ausrichtung.

Größencontainer haben zusätzlich Größen-Eingrenzung auf sie angewendet — dies schaltet die Fähigkeit eines Elements aus, Größeninformationen von seinen Inhalten zu erhalten, was wichtig für Containerabfragen ist, um Endlosschleifen zu vermeiden. Wenn dies nicht der Fall wäre, könnte eine CSS-Regel innerhalb einer Containerabfrage die Inhaltsgröße ändern, was wiederum die Abfrage als falsch bewerten könnte und die Größe des Elternelements ändern würde, was wiederum die Inhaltsgröße ändern könnte und die Abfrage wieder auf wahr setzen könnte, und so weiter. Diese Sequenz würde sich dann in einer endlosen Schleife wiederholen.

Die Containergröße muss durch den Kontext festgelegt werden, wie Block-Level-Elemente, die sich über die volle Breite ihres Elternteils erstrecken, oder explizit definiert werden. Wenn eine kontextuelle oder explizite Größe nicht verfügbar ist, werden Elemente mit Größen-Eingrenzung zusammenbrechen.

### Container Scroll-Zustandsabfragen

[Container Scroll-Zustandsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) ermöglichen es Ihnen, CSS-Regeln selektiv auf die Kinder eines Containers anzuwenden, basierend auf einer Scroll-Zustandsbedingung wie:

- Ob der Inhalt des Containers teilweise gescrollt ist.
- Ob der Container ein Snap-Ziel ist, das zu einem Scroll-Snap-Container geschnappt ist.
- Ob der Container via [`position: sticky`](/de/docs/Web/CSS/display) positioniert ist und an die Grenze eines {{Glossary("scroll_container", "Scroll-Containers")}} geklebt ist.

Im ersten Fall ist der abgefragte Container der Scroll-Container selbst. In den anderen beiden Fällen ist der abgefragte Container ein Element, das von der Scroll-Position eines Vorfahren-Scroll-Containers beeinflusst wird.

## Beispiele

### Etablierung von Inline-Größeneingrenzung

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

Um einen Container-Kontext zu erstellen, fügen Sie die `container-type` Eigenschaft zu einem Element hinzu. Das Folgende verwendet den Wert `inline-size`, um einen Eingrenzungskontext für die [Inline-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) des Containers zu erstellen:

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

Eine Containerabfrage über die {{Cssxref("@container")}} At-Regel zu schreiben, wird die Stile auf die Elemente des Containers anwenden, wenn er breiter als 400px ist:

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
- [Verwendung von Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- {{Cssxref("@container")}} At-Regel
- CSS {{Cssxref("container")}} Kurzform-Eigenschaft
- CSS {{Cssxref("container-name")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
