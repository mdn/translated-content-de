---
title: "`container-type` CSS property"
short-title: container-type
slug: Web/CSS/Reference/Properties/container-type
l10n:
  sourceCommit: 2ce88199869b63f8da3bbeafd899400f7579cce9
---

Die **container-type** [CSS](/de/docs/Web/CSS) Eigenschaft gibt den Typ des Container-Kontextes an, der in einer Container-Abfrage verwendet wird.

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

Die `container-type` Eigenschaft kann einen einzelnen Wert aus der folgenden Liste oder zwei Werte annehmen. Im Fall von zwei Werten muss einer `scroll-state` sein und der andere kann entweder `inline-size` oder `size` sein.

- `anchored`
  - : Erzeugt einen Abfrage-Container für verankerte Container-Abfragen auf dem Container. In diesem Fall wird die Größe des Elements nicht isoliert berechnet; es wird keine [Eindämmung](/de/docs/Web/CSS/Guides/Containment/Using) angewendet.
- `inline-size`
  - : Erzeugt einen Abfrage-Container für dimensionsbezogene Abfragen auf der [Inline-Achse](/de/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts#block_and_inline_dimensions) des Containers.
    Wendet [style](/de/docs/Web/CSS/Reference/Properties/contain#style) und [inline-size](/de/docs/Web/CSS/Reference/Properties/contain#inline-size) Eindämmung auf das Element an. Die Inline-Größe des Elements kann [isoliert berechnet](/de/docs/Web/CSS/Guides/Containment/Using#size_containment) werden, wobei die Kindelemente ignoriert werden (siehe [Verwendung der CSS-Eindämmung](/de/docs/Web/CSS/Guides/Containment/Using)).

- `normal`
  - : Standardwert. Das Element ist kein Abfrage-Container für Container-Größe, Scroll-Status oder verankerte Abfragen, kann jedoch als Abfrage-Container für [Container-Style-Abfragen](/de/docs/Web/CSS/Reference/At-rules/@container#container_style_queries) und [nur-namensbezogene Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries#name-only_container_queries) verwendet werden.

- `scroll-state`
  - : Erzeugt einen Abfrage-Container für Scroll-Status-Abfragen auf dem Container. In diesem Fall wird die Größe des Elements nicht isoliert berechnet; es wird keine Eindämmung angewendet.

- `size`
  - : Erzeugt einen Abfrage-Container für Container-Größe-Abfragen in beiden [Inline- und Block](/de/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts#block_and_inline_dimensions) Dimensionen.
    Wendet [style](/de/docs/Web/CSS/Reference/Properties/contain#style) und [size](/de/docs/Web/CSS/Reference/Properties/contain#size) Eindämmung auf das Element an. Größeneindämmung wird auf das Element sowohl in Inline- als auch in Block-Richtung angewendet. Die Größe des Elements kann isoliert berechnet werden, wobei die Kindelemente ignoriert werden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beschreibung

Container-Abfragen ermöglichen es Ihnen, Stile innerhalb eines Containers selektiv anzuwenden, basierend auf bedingten Abfragen, die am Container durchgeführt werden. Die {{cssxref("@container")}}-Regel wird verwendet, um die Tests anzugeben, die auf einem Container durchgeführt werden, und die Regeln, die auf den Inhalt des Containers angewendet werden, wenn die Abfrage `true` zurückgibt.

Bestimmte Arten von Container-Abfragen können nur an Elementen durchgeführt werden, bei denen spezifische `container-type`-Eigenschaftswerte gesetzt sind, die spezielle Container-Kontexte auf diesen Containern bilden:

- [Größe](#container-größe-abfragen): Ermöglicht das selektive Anwenden von CSS-Regeln auf die Kinder eines Containers basierend auf einer allgemeinen Größen- oder Inline-Größenbedingung, wie etwa einer maximalen oder minimalen Dimension, einem Seitenverhältnis oder einer Ausrichtung.
- [Scroll-Status](#container-scroll-status-abfragen): Ermöglicht das selektive Anwenden von CSS-Regeln auf die Kinder eines Containers basierend auf einer Scroll-Status-Bedingung, wie etwa ob der Container ein gescrollter Container ist, der teilweise gescrollt ist, oder ob der Container ein {{Glossary("Scroll_snap#snap_target", "Schnappziel")}} ist, das an seinen Snap-Scroll-Container geschnappt werden soll.
- [Verankert](#verankerte_container-abfragen): Ermöglicht das selektive Anwenden von CSS-Regeln auf die Kinder eines Containers basierend darauf, ob der Container [ankerpositioniert](/de/docs/Web/CSS/Guides/Anchor_positioning) ist und eine [Position-try-Ausweichoption](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) auf ihn angewendet wurde.

Wenn ein `container-type` nicht auf einem Container gesetzt ist, ist das Element kein Abfrage-Container für Container-Größen-, Scroll-Status- oder verankerte Abfragen, kann jedoch immer noch als Abfrage-Container für [Container-Style-Abfragen](/de/docs/Web/CSS/Reference/At-rules/@container#container_style_queries) und [nur-namensbezogene Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries#name-only_container_queries) verwendet werden.

### Container-Größe-Abfragen

[Container-Größe-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_size_queries) erlauben es Ihnen, CSS-Regeln selektiv auf die Nachkommen eines Containers basierend auf einer Größenbedingung, wie etwa einer maximalen oder minimalen Dimension, einem Seitenverhältnis oder einer Orientierung, anzuwenden.

Größencontainer haben zusätzlich Größeneindämmung auf sie angewendet — dies schaltet die Fähigkeit eines Elements aus, Größeninformationen von seinem Inhalt abzurufen, was für Container-Abfragen wichtig ist, um Endlosschleifen zu vermeiden. Wenn dies nicht der Fall wäre, könnte eine CSS-Regel innerhalb einer Container-Abfrage die Inhaltsgröße ändern, was wiederum dazu führen könnte, dass die Abfrage als falsch gewertet wird und die Größe des Elternelements geändert wird, was wiederum die Inhaltsgröße ändern und die Abfrage wieder als wahr schreiten würde und so weiter. Diese Sequenz würde sich dann in einer endlosen Schleife wiederholen.

Die Containergröße muss durch den Kontext gesetzt werden, wie etwa Block-Level-Elemente, die sich über die gesamte Breite des übergeordneten Elements erstrecken, oder ausdrücklich definiert werden. Wenn keine kontextbezogene oder explizite Größe verfügbar ist, werden Elemente mit Größeneindämmung kollabieren.

> [!NOTE]
> Die Nachkommen von Größencontainern können mit [Container-Abfrage-Längeneinheiten](/de/docs/Web/CSS/Guides/Containment/Container_queries#container_query_length_units) dimensioniert werden.

### Container-Scroll-Status-Abfragen

[Container-Scroll-Status-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries) ermöglichen es, CSS-Regeln selektiv auf die Kinder eines Containers basierend auf einem Scroll-Status zuzuschneiden, wie zum Beispiel:

- Ob die Inhalte des Containers teilweise gescrollt sind.
- Ob der Container ein Snap-Ziel ist, das an einen Snap-Scroll-Container geschnappt werden soll.
- Ob der Container via [`position: sticky`](/de/docs/Web/CSS/Reference/Properties/display) positioniert ist und an einer Grenze eines {{Glossary("scroll_container", "scrollenden Containers")}} haftet.

Im ersten Fall ist der abgefragte Container der Scroll-Container selbst. In den anderen beiden Fällen ist der abgefragte Container ein Element, das von der Scrollposition eines übergeordneten Scroll-Containers betroffen ist.

### Verankerte Container-Abfragen

[Verankerte Container-Abfragen](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries) erlauben es Ihnen, CSS-Regeln selektiv auf die Nachkommen eines ankerpositionierten Containers anzuwenden, wenn darauf eine Position-try-Ausweichoption wie durch die {{cssxref("position-try-fallbacks")}}-Eigenschaft angegeben, aktiv ist.

Zum Beispiel könnten Sie ein ankerpositioniertes Tooltip-Element haben, das standardmäßig über seinem Anker via einem {{cssxref("position-area")}}-Wert von `top` positioniert ist, aber einen `position-try-fallbacks` Wert von `flip-block` spezifiziert hat. Dies wird dazu führen, dass das Tooltip in der Blockrichtung auf den unteren Rand seines Ankers umschlägt, wenn es beginnt, über den oberen Rand des Viewports zu überlaufen. Wenn wir `container-type: anchored` darauf setzen, können wir erkennen, wann die Position-try-Ausweichoption via einer `@container`-Regel angewendet wird und CSS als Ergebnis anwenden.

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

### Etablierung der Inline-Größeneindämmung

Angenommen das folgende HTML-Beispiel zeigt eine Kartenkomponente mit einem Bild, einem Titel und etwas Text:

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

Um einen Inline-Größencontainer-Kontext zu erstellen, fügen Sie die `container-type`-Eigenschaft zu einem Element mit einem Wert von `inline-size` hinzu:

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

Eine Container-Abfrage über die {{Cssxref("@container")}}-Regel wird Styles auf die Elemente des Containers anwenden, wenn er breiter als `400px` ist:

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
- [Verwendung von Container-Größe- und Style-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Status-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [Verwendung von verankerten Container-Abfragen](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries)
- {{Cssxref("@container")}}-Regel
- CSS {{Cssxref("container")}} Kurzschreibweise
- CSS {{Cssxref("container-name")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
