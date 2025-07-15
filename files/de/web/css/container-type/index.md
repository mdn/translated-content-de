---
title: container-type
slug: Web/CSS/container-type
l10n:
  sourceCommit: 93ca748b6242a54899af617756a9c325a7071793
---

Ein Element kann mit der **`container-type`** [CSS](/de/docs/Web/CSS)-Eigenschaft als Anfrage-Container festgelegt werden. `container-type` wird verwendet, um den Typ des Container-Kontexts zu definieren, der in einer Container-Abfrage verwendet wird. Die verfügbaren Container-Kontexte sind:

- [Größe](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries): Ermöglicht das selektive Anwenden von CSS-Regeln auf die Kinder eines Containers basierend auf einer allgemeinen Größen- oder Inline-Größenbedingung wie einer maximalen oder minimalen Dimension, einem Seitenverhältnis oder einer Ausrichtung.
- [Scroll-Zustand](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries): Ermöglicht das selektive Anwenden von CSS-Regeln auf die Kinder eines Containers basierend auf einer Scroll-Zustandsbedingung wie z. B., ob der Container ein Scroll-Container ist, der teilweise gescrollt wird, oder ob der Container ein {{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} ist, das zu seinem Scroll-Snap-Container geschnappt wird.

> [!NOTE]
> Beim Verwenden der Eigenschaften `container-type` und {{cssxref("container-name")}} werden die Werte `style` und `layout` der {{cssxref("contain")}}-Eigenschaft automatisch angewendet.

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

Die `container-type`-Eigenschaft kann einen einzelnen Wert aus der Liste unten annehmen oder zwei Werte — einer muss `scroll-state` sein und der andere kann `inline-size` oder `size` sein. Mit anderen Worten, ein Element kann als Größenabfrage-Container, als Scroll-Zustandsabfrage-Container oder als beides festgelegt werden, oder als keines von beiden.

- `inline-size`
  - : Etabliert einen Abfrage-Container für Dimensionsabfragen auf der [Inline-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) des Containers.
    Wendet Layout-, Style- und Inline-Größen-Containment auf das Element an.

    Das Inline-Größen-Containment wird auf das Element angewendet. Die Inline-Größe des Elements kann [isoliert berechnet](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) werden, unabhängig von den Kind-Elementen (siehe [Verwendung von CSS-Containment](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment)).

- `normal`
  - : Standardwert. Das Element ist kein Abfrage-Container für Größenabfragen, bleibt aber ein Abfrage-Container für [Container-Style-Abfragen](/de/docs/Web/CSS/@container#container_style_queries).

- `scroll-state`
  - : Etabliert einen Abfrage-Container für Scroll-Zustandsabfragen auf dem Container. In diesem Fall wird die Größe des Elements nicht isoliert berechnet; es wird kein Containment angewendet.

- `size`
  - : Etabliert einen Abfrage-Container für Container-Größenabfragen in sowohl [Inline- als auch Block-](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) Dimensionen.
    Wendet Layout-Containment, Style-Containment und Größen-Containment auf den Container an.

    Das Größen-Containment wird auf das Element in sowohl der Inline- als auch der Block-Richtung angewendet. Die Größe des Elements kann isoliert berechnet werden, unabhängig von den Kind-Elementen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beschreibung

Container-Abfragen erlauben es Ihnen, Styles selektiv innerhalb eines Containers anzuwenden, basierend auf bedingten Abfragen, die am Container durchgeführt werden. Die {{cssxref("@container")}} at-rule wird verwendet, um die Tests zu bestimmen, die an einem Container durchgeführt werden, und die Regeln, die auf den Inhalt des Containers angewendet werden, wenn die Abfrage `true` zurückgibt.

Die Container-Abfragetests werden nur an Elementen mit einer `container-type`-Eigenschaft durchgeführt, die die Elemente als Größen- oder Scroll-Zustands-Container oder beides definiert.

### Container-Größenabfragen

[Container-Größenabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_size_queries) erlauben es Ihnen, CSS-Regeln selektiv auf die Nachkommen eines Containers basierend auf einer Größenbedingung wie einer maximalen oder minimalen Dimension, einem Seitenverhältnis oder einer Ausrichtung anzuwenden.

Größen-Container haben zusätzlich Größen-Containment auf sie angewendet – dies schaltet die Fähigkeit eines Elements aus, Größeninformationen von seinen Inhalten zu erhalten, was wichtig für Container-Abfragen ist, um Endlosschleifen zu vermeiden. Wenn dies nicht der Fall wäre, könnte eine CSS-Regel innerhalb einer Container-Abfrage die Inhaltsgröße ändern, was wiederum dazu führen könnte, dass die Abfrage zu False auswertet und die Größe des Elternelements ändert, was wiederum die Inhaltsgröße ändern und die Abfrage wieder zu True umschalten könnte, und so weiter. Diese Abfolge würde sich dann in einer Endlosschleife wiederholen.

Die Container-Größe muss durch den Kontext festgelegt werden, wie Block-Level-Elemente, die sich über die gesamte Breite ihres Elternelements erstrecken, oder explizit definiert sein. Wenn eine kontextuelle oder explizite Größe nicht verfügbar ist, werden Elemente mit Größen-Containment kollabieren.

### Container-Scroll-Zustandsabfragen

[Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) erlauben es Ihnen, CSS-Regeln selektiv auf die Kinder eines Containers anzuwenden, basierend auf einer Scroll-Zustandsbedingung wie:

- Ob der Inhalt des Containers teilweise gescrollt ist.
- Ob der Container ein Snap-Ziel ist, das zu einem Scroll Snap Container geschnappt werden soll.
- Ob der Container über [`position: sticky`](/de/docs/Web/CSS/display) positioniert ist und an einer Grenze eines {{Glossary("scroll_container", "Scroll-Containers")}} haftet.

Im ersten Fall ist der abgefragte Container der Scroll-Container selbst. In den anderen beiden Fällen ist der abgefragte Container ein Element, das durch die Scroll-Position eines Vorfahren-Scroll-Containers beeinflusst wird.

## Beispiele

### Einrichtung des Inline-Größen-Containments

Angenommen, wir haben das folgende HTML-Beispiel, das eine Kartenkomponente mit einem Bild, einem Titel und etwas Text ist:

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

Um einen Container-Kontext zu erstellen, fügen Sie die `container-type`-Eigenschaft zu einem Element hinzu.
Das folgende Beispiel verwendet den Wert `inline-size`, um einen Containment-Kontext für die [Inline-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) des Containers zu erstellen:

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

Das Schreiben einer Container-Abfrage über die {{Cssxref("@container")}} at-rule wird die Styles auf die Elemente des Containers anwenden, wenn dieser breiter als 400px ist:

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

- [CSS Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Container-Größen- und Style-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- {{Cssxref("@container")}} at-rule
- CSS {{Cssxref("container")}} Shorthand-Eigenschaft
- CSS {{Cssxref("container-name")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
