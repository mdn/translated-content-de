---
title: "`container-type` CSS property"
short-title: container-type
slug: Web/CSS/Reference/Properties/container-type
l10n:
  sourceCommit: 737b931225e92e0cba47e57a150878b1a78ee45a
---

Die **container-type**-Eigenschaft in [CSS](/de/docs/Web/CSS) legt den Typ des Container-Kontexts fest, der in einer Container-Abfrage verwendet wird.

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

Diese Eigenschaft wird als ein oder zwei Schlüsselwortwerte aus der folgenden Liste spezifiziert. Im Falle von zwei Werten muss einer `scroll-state` sein und der andere `inline-size` oder `size`:

- `anchored`
  - : Etabliert einen Abfragecontainer für verankerte Container-Abfragen im Container. In diesem Fall wird die Größe des Elements nicht isoliert berechnet; es wird keine [Einschränkung](/de/docs/Web/CSS/Guides/Containment/Using) angewendet.
- `inline-size`
  - : Etabliert einen Abfragecontainer für dimensionale Abfragen auf der [Inline-Achse](/de/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts#block_and_inline_dimensions) des Containers.
    Wendet [style](/de/docs/Web/CSS/Reference/Properties/contain#style)- und [inline-size](/de/docs/Web/CSS/Reference/Properties/contain#inline-size)-Einschränkungen auf das Element an. Die Inlinegröße des Elements kann [isoliert berechnet](/de/docs/Web/CSS/Guides/Containment/Using#size_containment) werden, wobei die Kindelemente ignoriert werden (siehe [Verwendung von CSS-Einschränkungen](/de/docs/Web/CSS/Guides/Containment/Using)).

- `normal`
  - : Standardwert. Das Element ist kein Abfragecontainer für irgendeine Containergröße, Scroll-Status oder verankerte Abfragen, kann jedoch als Abfragecontainer für [Container-Style-Abfragen](/de/docs/Web/CSS/Reference/At-rules/@container#container_style_queries) und [name-only Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries#name-only_container_queries) verwendet werden.

- `scroll-state`
  - : Etabliert einen Abfragecontainer für Scroll-Status-Abfragen im Container. In diesem Fall wird die Größe des Elements nicht isoliert berechnet; es wird keine Einschränkung angewendet.

- `size`
  - : Etabliert einen Abfragecontainer für Containergrößen-Abfragen in beiden [Inline- und Block-](/de/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts#block_and_inline_dimensions) Dimensionen.
    Wendet [style](/de/docs/Web/CSS/Reference/Properties/contain#style)- und [size](/de/docs/Web/CSS/Reference/Properties/contain#size)-Einschränkungen auf das Element an. Größeneinschränkungen werden auf das Element in beiden Inline- und Block-Richtungen angewendet. Die Größe des Elements kann isoliert berechnet werden, wobei die Kindelemente ignoriert werden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beschreibung

Container-Abfragen ermöglichen es Ihnen, innerhalb eines Containers selektiv Stile anzuwenden, basierend auf Bedingungsabfragen, die auf dem Container durchgeführt werden. Die {{cssxref("@container")}}-Regel wird verwendet, um die auf einem Container durchgeführten Tests zu spezifizieren und die Regeln, die auf den Inhalt des Containers angewendet werden, wenn die Abfrage `true` zurückgibt.

Bestimmte Arten von Container-Abfragen können nur auf Elementen mit spezifischen `container-type`-Eigenschaftenwerten durchgeführt werden, die spezifische Containerkontexte auf diesen Containern etablieren:

- [Size](#containergrößen-abfragen): Ermöglicht das selektive Anwenden von CSS-Regeln auf die Kinder eines Containers basierend auf einer allgemeinen Größen- oder Inline-Größenbedingung wie einer maximalen oder minimalen Dimension, einem Seitenverhältnis oder einer Orientierung.
- [Scroll-state](#container-scroll-status-abfragen): Ermöglicht das selektive Anwenden von CSS-Regeln auf die Kinder eines Containers basierend auf einer Scroll-Status-Bedingung wie ob der Container ein Scrollcontainer ist, der teilweise gescrollt wurde, oder ob der Container ein {{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} ist, das zu einem Scroll-Snap-Container zurückgeschnappt wird.
- [Anchored](#verankerte_container-abfragen): Ermöglicht das selektive Anwenden von CSS-Regeln auf die Kinder eines Containers basierend darauf, ob der Container [verankerungspositioniert](/de/docs/Web/CSS/Guides/Anchor_positioning) ist und eine [Position-try Fallback-Option](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) darauf angewendet wurde.

Wenn ein `container-type` nicht auf einem Container gesetzt ist, ist das Element kein Abfragecontainer für Containergröße, Scroll-Status oder verankerte Abfragen, kann jedoch immer noch als Abfragecontainer für [Container-Style-Abfragen](/de/docs/Web/CSS/Reference/At-rules/@container#container_style_queries) und [name-only Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries#name-only_container_queries) verwendet werden.

### Containergrößen-Abfragen

[Containergrößen-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_size_queries) ermöglichen es Ihnen, CSS-Regeln selektiv auf die Nachkommen eines Containers basierend auf einer Größenbedingung wie maximaler oder minimaler Dimension, Seitenverhältnis oder Orientierung anzuwenden.

Größencontainer haben zusätzlich Größeneinschränkungen auf sie angewendet - dies schaltet die Fähigkeit eines Elements ab, Größeninformationen von seinem Inhalt zu erhalten, was für Container-Abfragen wichtig ist, um Endlosschleifen zu vermeiden. Wäre dies nicht der Fall, könnte eine CSS-Regel innerhalb einer Container-Abfrage die Inhaltsgröße ändern, was wiederum dazu führen könnte, dass die Abfrage zu `false` evaluiert und die Größe des Elternelements ändert, was wiederum die Inhaltsgröße ändern und die Abfrage wieder zu `true` ändern könnte, und so weiter. Diese Sequenz würde sich dann endlos wiederholen.

Die Containergröße muss durch den Kontext gesetzt oder explizit definiert werden, beispielsweise Blocklevel-Elemente, die sich über die gesamte Breite ihres Elternteils erstrecken. Wenn eine kontextuelle oder explizite Größe nicht verfügbar ist, werden Elemente mit Größeneinschränkung zusammenbrechen.

> [!NOTE]
> Die Nachkommen von Größencontainern können mit [Container-Abfrage-Längeneinheiten](/de/docs/Web/CSS/Guides/Containment/Container_queries#container_query_length_units) dimensioniert werden.

### Container-Scroll-Status-Abfragen

[Container-Scroll-Status-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries) ermöglichen es Ihnen, CSS-Regeln selektiv auf die Kinder eines Containers basierend auf einer Scroll-Status-Bedingung anzuwenden wie:

- Ob der Inhalt des Containers teilweise gescrollt wurde.
- Ob der Container ein Snap-Ziel ist, das zu einem Scroll-Snap-Container zurückgeschnappt wird.
- Ob der Container über [`position: sticky`](/de/docs/Web/CSS/Reference/Properties/display) positioniert ist und an einer Grenze eines {{Glossary("scroll_container", "Scrolling-Containers")}} haftet.

Im ersten Fall ist der abgefragte Container der Scroll-Container selbst. In den anderen beiden Fällen ist der abgefragte Container ein Element, das von der Scroll-Position eines übergeordneten Scroll-Containers beeinflusst wird.

### Verankerte Container-Abfragen

[Verankerte Container-Abfragen](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries) ermöglichen es Ihnen, CSS-Regeln selektiv auf die Nachkommen eines verankerten Containers anzuwenden, wenn ein position-try Fallback aktiv ist, wie es über die {{cssxref("position-try-fallbacks")}}-Eigenschaft spezifiziert ist.

Zum Beispiel könnten Sie ein verankertes Tooltip-Element haben, das über seinem Anker standardmäßig über einen {{cssxref("position-area")}}-Wert von `top` positioniert ist, aber einen `position-try-fallbacks`-Wert von `flip-block` angegeben hat. Dies würde dazu führen, dass das Tooltip in der Blockrichtung auf die Unterseite seines Ankers schnippt, wenn es beginnt, über den oberen Rand des Viewports hinauszuwachsen. Wenn wir `container-type: anchored` darauf setzen, können wir erkennen, wann das position-try Fallback über eine `@container`-Regel angewendet wird und CSS entsprechend anwenden.

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

### Etablierung der Inline-Größen-Einschränkung

Angenommen, das folgende HTML-Beispiel ist eine Kartenskomponente mit einem Bild, einem Titel und etwas Text:

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

Um einen Inline-Größen-Container-Kontext zu erstellen, fügen Sie die `container-type`-Eigenschaft mit einem Wert von `inline-size` zu einem Element hinzu:

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

Das Schreiben einer Container-Abfrage über die {{Cssxref("@container")}}-Regel wird Stile auf die Elemente des Containers anwenden, wenn er breiter als `400px` ist:

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
- [Verwendung von Containergrößen- und -stile-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Status-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [Verwendung von verankerten Container-Abfragen](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries)
- {{Cssxref("@container")}}-Regel
- CSS {{Cssxref("container")}}-Kurzschreibweise
- CSS {{Cssxref("container-name")}}-Eigenschaft
- CSS {{cssxref("content-visibility")}}-Eigenschaft
