---
title: container-type
slug: Web/CSS/container-type
l10n:
  sourceCommit: a69f9903e7444d42adcf2432eaa511c05761c757
---

{{CSSRef}}

Ein Element kann als Abfragecontainer mit der **`container-type`** [CSS](/de/docs/Web/CSS) Eigenschaft festgelegt werden. `container-type` wird verwendet, um den Typ des Containerkontexts in einer Containerabfrage zu definieren. Die verfügbaren Containerkontexte sind:

- [Größe](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries): Ermöglicht das selektive Anwenden von CSS-Regeln auf die Kinder eines Containers basierend auf allgemeinen Größen- oder Linienstärkebedingungen wie einer maximalen oder minimalen Dimension, einem Seitenverhältnis oder einer Ausrichtung.
- [Scroll-Zustand](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries): Ermöglicht das selektive Anwenden von CSS-Regeln auf die Kinder eines Containers basierend auf einer Scroll-Zustandsbedingung, z. B. ob der Container ein teilweise gescrollter Scroll-Container ist oder ob der Container ein {{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} ist, das an seinen Scroll-Snap-Container geschnappt ist.

> [!NOTE]
> Bei Verwendung der `container-type` und {{cssxref("container-name")}} Eigenschaften werden die `style` und `layout` Werte der {{cssxref("contain")}} Eigenschaft automatisch angewendet.

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

Die `container-type` Eigenschaft kann einen einzelnen Wert aus der untenstehenden Liste annehmen oder zwei Werte – einer davon muss `scroll-state` sein und der andere kann `inline-size` oder `size` sein. Mit anderen Worten, ein Element kann als Größenabfragecontainer, Scroll-Zustandsabfragecontainer, beides oder keines von beiden festgelegt werden.

- `inline-size`

  - : Etabliert einen Abfragecontainer für dimensionale Abfragen auf der [Inline-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) des Containers.
    Wendet Layout-, Stil- und Inline-Größen-Eindämmung auf das Element an.

    Inline-Größen-Eindämmung wird auf das Element angewendet. Die Inline-Größe des Elements kann [isoliert berechnet](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) werden, wobei die Kindelemente ignoriert werden (siehe [Using CSS containment](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment)).

- `normal`

  - : Standardwert. Das Element ist kein Abfragecontainer für Größenabfragen, bleibt aber ein Abfragecontainer für [Stilabfragen des Containers](/de/docs/Web/CSS/@container#container_style_queries).

- `scroll-state`

  - : Etabliert einen Abfragecontainer für Scroll-Zustandsabfragen auf dem Container. In diesem Fall wird die Größe des Elements nicht isoliert berechnet; es wird keine Eindämmung angewendet.

- `size`

  - : Etabliert einen Abfragecontainer für Größenabfragen des Containers in den [Inline- und Block](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) Dimensionen.
    Wendet Layout-, Stil- und Größeneindämmung auf den Container an.

    Größeneindämmung wird auf das Element sowohl in Inline- als auch in Blockrichtung angewendet. Die Größe des Elements kann isoliert berechnet werden, wobei die Kindelemente ignoriert werden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beschreibung

Containerabfragen erlauben Ihnen, Stile innerhalb eines Containers selektiv basierend auf bedingten Abfragen, die auf dem Container durchgeführt werden, anzuwenden. Die {{cssxref("@container")}} At-Regel wird verwendet, um die Tests, die auf einem Container durchgeführt werden, festzulegen, und die Regeln, die auf den Inhalt des Containers angewendet werden, wenn die Abfrage `true` zurückgibt.

Die Containerabfragetests werden nur auf Elemente mit einer `container-type` Eigenschaft durchgeführt, die die Elemente als Größen- oder Scroll-Zustandscontainer oder beides definiert.

### Container-Größenabfragen

[Container-Größenabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_size_queries) erlauben Ihnen, CSS-Regeln selektiv auf die Nachfahren eines Containers basierend auf einer Größenbedingung, wie einer maximalen oder minimalen Dimension, einem Seitenverhältnis oder einer Ausrichtung, anzuwenden.

Größencontainer haben darüber hinaus Größeneindämmung, die auf sie angewendet wird – dies schaltet die Fähigkeit eines Elements ab, Größeninformationen von seinem Inhalt zu erhalten, was wichtig für Containerabfragen ist, um Endlosschleifen zu vermeiden. Wäre dies nicht der Fall, könnte eine CSS-Regel innerhalb einer Containerabfrage die Inhaltsgröße ändern, was wiederum die Abfrage dazu veranlassen könnte, `false` zu evaluieren und die Größe des übergeordneten Elements zu ändern, was wiederum die Inhaltsgröße ändern könnte und die Abfrage zurück zu `true` schalten könnte, und so weiter. Diese Sequenz würde sich dann in einer endlosen Schleife wiederholen.

Die Größe des Containers muss durch Kontext festgelegt werden, wie Blocklevel-Elemente, die sich über die volle Breite ihres Elternteils erstrecken, oder ausdrücklich definiert werden. Ist keine kontextuelle oder explizite Größe verfügbar, werden Elemente mit Größeneindämmung zusammenbrechen.

### Container-Scroll-Zustandsabfragen

[Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) erlauben Ihnen, CSS-Regeln selektiv auf die Kinder eines Containers basierend auf einer Scroll-Zustandsbedingung anzuwenden, wie:

- Ob der Inhalt des Containers teilweise gescrollt ist.
- Ob der Container ein Snap-Ziel ist, das an einen Scroll-Snap-Container geschnappt ist.
- Ob der Container via [`position: sticky`](/de/docs/Web/CSS/display) positioniert ist und an einem Rand eines {{Glossary("scroll_container", "scrollenden Containers")}} haftet.

Im ersten Fall ist der abgefragte Container der Scroll-Container selbst. In den beiden anderen Fällen ist der abgefragte Container ein Element, das von der Scrollposition eines übergeordneten Scroll-Containers beeinflusst wird.

## Beispiele

### Festlegung der Inline-Größeneindämmung

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
Das Folgende verwendet den `inline-size` Wert, um einen Eindämmungskontext für die [Inline-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) des Containers zu erstellen:

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

Das Schreiben einer Containerabfrage über die {{Cssxref("@container")}} At-Regel wird Stile auf die Elemente des Containers anwenden, wenn dieser breiter als 400px ist:

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
- CSS {{Cssxref("container")}} Kurzschreibweise
- CSS {{Cssxref("container-name")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
