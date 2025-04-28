---
title: container-type
slug: Web/CSS/container-type
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{CSSRef}}

Ein Element kann als Abfrage-Container mithilfe der **`container-type`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert werden. `container-type` wird verwendet, um den Typ des Container-Kontexts, der in einer Containerabfrage verwendet wird, festzulegen. Die verfügbaren Container-Kontexte sind:

- [Größe](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries): Ermöglicht das selektive Anwenden von CSS-Regeln auf die Kinder eines Containers basierend auf einer allgemeinen Größen- oder Inline-Größen-Bedingung, wie z. B. einer maximalen oder minimalen Dimension, einem Seitenverhältnis oder einer Ausrichtung.
- [Scroll-Zustand](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries): Ermöglicht das selektive Anwenden von CSS-Regeln auf die Kinder eines Containers basierend auf einer Scroll-Zustands-Bedingung, wie z. B. ob der Container ein Scrollcontainer ist, der teilweise gescrollt ist, oder ob der Container ein {{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} ist, das an seinen Scroll-Snap-Container geschnappt ist.

> [!NOTE]
> Wenn die Eigenschaften `container-type` und {{cssxref("container-name")}} verwendet werden, werden die Werte `style` und `layout` der Eigenschaft {{cssxref("contain")}} automatisch angewendet.

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

Die `container-type` Eigenschaft kann einen einzelnen Wert aus der folgenden Liste annehmen oder zwei Werte — einer davon muss `scroll-state` sein und der andere kann `inline-size` oder `size` sein. Mit anderen Worten, ein Element kann als Größenabfrage-Container, Scroll-Zustands-Container, beides oder weder noch festgelegt werden.

- `inline-size`

  - : Legt einen Abfrage-Container für Dimensionierungsabfragen auf der [Inline-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) des Containers fest. Wendet Layout-, Stil- und Inline-Größen-Containment auf das Element an.

    Inline-Größen-Containment wird auf das Element angewendet. Die Inline-Größe des Elements kann [isoliert berechnet](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) werden, ohne die Kindelemente zu berücksichtigen (siehe [Verwendung von CSS-Containment](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment)).

- `normal`

  - : Standardwert. Das Element ist kein Abfrage-Container für Größeabfragen, bleibt jedoch ein Abfrage-Container für [Stilabfragen von Containern](/de/docs/Web/CSS/@container#container_style_queries).

- `scroll-state`

  - : Legt einen Abfrage-Container für Scroll-Zustandsabfragen auf dem Container fest. In diesem Fall wird die Größe des Elements nicht isoliert berechnet; es wird kein Containment angewendet.

- `size`

  - : Legt einen Abfrage-Container für Größenabfragen in den [Inline- und Blockdimensionen](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) fest. Wendet Layout-Containment, Stil-Containment und Größen-Containment auf den Container an.

    Größen-Containment wird auf das Element sowohl in den Inline- als auch in den Blockrichtungen angewendet. Die Größe des Elements kann isoliert berechnet werden, ohne die Kindelemente zu berücksichtigen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beschreibung

Containerabfragen ermöglichen es Ihnen, Stile selektiv innerhalb eines Containers anhand bedingter Abfragen anzuwenden, die am Container durchgeführt werden. Die {{cssxref("@container")}} Anweisung wird verwendet, um die Tests anzugeben, die auf einem Container durchgeführt werden, und die Regeln, die auf den Inhalt des Containers angewendet werden, wenn die Abfrage `true` zurückgibt.

Die Containerabfragen werden nur auf Elemente mit einer `container-type` Eigenschaft ausgeführt, die die Elemente als Größen- oder Scroll-Zustand-Container oder beides definiert.

### Größeabfragen für Container

[Größeabfragen für Container](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_size_queries) ermöglichen es Ihnen, CSS-Regeln selektiv auf die Nachkommen eines Containers anzuwenden, basierend auf einer Größenbedingung wie einer maximalen oder minimalen Dimension, einem Seitenverhältnis oder einer Ausrichtung.

Größencontainer haben zusätzlich Größen-Containment, das die Fähigkeit eines Elements, Größeninformationen von seinem Inhalt zu erhalten, ausschaltet, was für Containerabfragen wichtig ist, um Endlosschleifen zu vermeiden. Wenn dies nicht der Fall wäre, könnte eine CSS-Regel innerhalb einer Containerabfrage die Inhaltsgröße ändern, was wiederum dazu führen könnte, dass die Abfrage als falsch bewertet wird und die Größe des übergeordneten Elements ändert, was wiederum die Inhaltsgröße ändern und die Abfrage wieder auf wahr zurücksetzen könnte, und so weiter. Diese Sequenz würde sich dann endlos wiederholen.

Die Containergröße muss durch den Kontext festgelegt werden, z. B. blocklevel Elemente, die sich über die volle Breite ihres Elternteils erstrecken, oder explizit definiert werden. Wenn eine kontextuelle oder explizite Größe nicht verfügbar ist, werden Elemente mit Größen-Containment zusammenbrechen.

### Scroll-Zustandsabfragen für Container

[Scroll-Zustandsabfragen für Container](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) ermöglichen es Ihnen, CSS-Regeln selektiv auf die Kinder eines Containers anzuwenden, basierend auf einer Scroll-Zustandsbedingung wie:

- Ob der Inhalt des Containers teilweise gescrollt ist.
- Ob der Container ein Snap-Ziel ist, das an einen Scroll-Snap-Container geschnappt ist.
- Ob der Container über [`position: sticky`](/de/docs/Web/CSS/display) positioniert ist und an einer Grenze eines {{Glossary("scroll_container", "Scroll-Containers")}} haftet.

Im ersten Fall ist der abgefragte Container der Scroll-Container selbst. In den anderen beiden Fällen ist der abgefragte Container ein Element, das von der Scrollposition eines übergeordneten Scroll-Containers beeinflusst wird.

## Beispiele

### Etablierung von Inline-Größen-Containment

Angenommen Sie haben das folgende HTML-Beispiel, das eine Kartenkomponente mit einem Bild, einem Titel und etwas Text ist:

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

Um einen Container-Kontext zu erstellen, fügen Sie die `container-type` Eigenschaft zu einem Element hinzu. Das folgende Beispiel verwendet den Wert `inline-size`, um einen Containment-Kontext für die [Inline-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) des Containers zu erstellen:

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

Eine Containerabfrage mittels der {{Cssxref("@container")}} Anweisung wird Stile auf die Elemente des Containers anwenden, wenn dieser breiter als 400px ist:

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

{{Spezifikationen}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Größen- und Stilabfragen für Container](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Verwendung von Scroll-Zustandsabfragen für Container](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- {{Cssxref("@container")}} Anweisung
- CSS {{Cssxref("container")}} Kurzschreibweise
- CSS {{Cssxref("container-name")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
