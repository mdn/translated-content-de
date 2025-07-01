---
title: container-type
slug: Web/CSS/container-type
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{CSSRef}}

Ein Element kann als Abfrage-Container mithilfe der **`container-type`** [CSS](/de/docs/Web/CSS) Eigenschaft etabliert werden. `container-type` wird verwendet, um den Typ des Containerkontexts zu definieren, der in einer Containerabfrage verwendet wird. Die verfügbaren Containerkontexte sind:

- [Größe](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries): Ermöglicht das selektive Anwenden von CSS-Regeln auf die Kinder eines Containers basierend auf einer allgemeinen Größen- oder Inline-Größenbedingung, wie einer maximalen oder minimalen Abmessung, einem Seitenverhältnis oder einer Orientierung.
- [Scroll-Zustand](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries): Ermöglicht das selektive Anwenden von CSS-Regeln auf die Kinder eines Containers basierend auf einer Scroll-Zustandsbedingung wie zum Beispiel, ob der Container ein Scroll-Container ist, der teilweise gescrollt ist, oder ob der Container ein {{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} ist, das an seinen Scroll-Snap-Container angedockt ist.

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

Die Eigenschaft `container-type` kann einen einzigen Wert aus der folgenden Liste annehmen, oder zwei Werte — einer muss `scroll-state` sein und der andere kann `inline-size` oder `size` sein. Mit anderen Worten, ein Element kann als Größenauswahl-Container, als Scroll-Zustands-Auswahl-Container, als beides oder als keines von beiden etabliert werden.

- `inline-size`
  - : Etabliert einen Abfrage-Container für dimensionsbezogene Abfragen auf der [Inline-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) des Containers.
    Wendet Layout-, Stil- und Inline-Größenbeschränkungen auf das Element an.

    Inline-Größenbeschränkungen werden auf das Element angewendet. Die Inline-Größe des Elements kann [isoliert berechnet](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) werden, ohne die Kindelemente zu berücksichtigen (siehe [Verwendung von CSS-Containment](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment)).

- `normal`
  - : Standardwert. Das Element ist kein Abfrage-Container für Containergrößen-Abfragen, bleibt jedoch ein Abfrage-Container für [Containerstil-Abfragen](/de/docs/Web/CSS/@container#container_style_queries).

- `scroll-state`
  - : Etabliert einen Abfrage-Container für Scroll-Zustands-Abfragen auf dem Container. In diesem Fall wird die Größe des Elements nicht isoliert berechnet; es wird keine Begrenzung angewendet.

- `size`
  - : Etabliert einen Abfrage-Container für Containergrößen-Abfragen in den Dimensionen [inline und block](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions).
    Wendet Layout-, Stil- und Größenbeschränkungen auf den Container an.

    Größenbeschränkungen werden sowohl in der Inline- als auch in der Blockrichtung auf das Element angewendet. Die Größe des Elements kann isoliert berechnet werden, ohne die Kindelemente zu berücksichtigen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beschreibung

Container-Abfragen ermöglichen es, selektiv Stile innerhalb eines Containers basierend auf konditionalen Abfragen anzuwenden, die am Container durchgeführt werden. Die Regel {{cssxref("@container")}} wird verwendet, um die Tests zu spezifizieren, die an einem Container durchgeführt werden, und die Regeln, die auf die Inhalte des Containers angewendet werden, wenn die Abfrage `true` zurückgibt.

Die Container-Abfrage-Tests werden nur bei Elementen mit einer `container-type` Eigenschaft durchgeführt, die die Elemente als Größen- oder Scroll-Zustands-Container oder als beides definiert.

### Containergrößen-Abfragen

[Containergrößen-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_size_queries) ermöglichen es, CSS-Regeln selektiv auf die Nachfahren eines Containers anzuwenden, basierend auf einer Größenbedingung wie einer maximalen oder minimalen Abmessung, einem Seitenverhältnis oder einer Orientierung.

Größen-Container haben zusätzlich Größenbeschränkungen, die auf sie angewendet werden — dies deaktiviert die Fähigkeit eines Elements, Größeninformationen von seinen Inhalten zu erhalten, was für Container-Abfragen wichtig ist, um Endlosschleifen zu vermeiden. Wäre dies nicht der Fall, könnte eine CSS-Regel innerhalb einer Container-Abfrage die Inhaltsgröße ändern, was wiederum die Abfrage dazu veranlassen könnte, `false` zu ergeben und die Größe des Elternelements zu ändern, was wiederum die Inhaltsgröße ändern könnte und die Abfrage auf `true` umschalten würde, und so weiter. Diese Sequenz würde sich dann endlos wiederholen.

Die Containergröße muss kontextuell festgelegt werden, wie bei Block-Elementen, die sich auf die volle Breite des übergeordneten Elements erstrecken, oder explizit definiert werden. Wenn eine kontextuelle oder explizite Größe nicht verfügbar ist, werden Elemente mit Größenbeschränkung kollabieren.

### Container-Scroll-Zustands-Abfragen

[Container-Scroll-Zustands-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) ermöglichen es, CSS-Regeln selektiv auf die Kinder eines Containers basierend auf einer Scroll-Zustands-Bedingung wie:

- Ob die Inhalte des Containers teilweise gescrollt sind.
- Ob der Container ein Snap-Ziel ist, das an einen Scroll-Snap-Container angedockt ist.
- Ob der Container über [`position: sticky`](/de/docs/Web/CSS/display) positioniert ist und an einer Grenze eines {{Glossary("scroll_container", "Scroll-Containers")}} haftet.

Im ersten Fall ist der abgefragte Container der Scroll-Container selbst. In den anderen beiden Fällen ist der abgefragte Container ein Element, das von der Scroll-Position eines übergeordneten Scroll-Containers betroffen ist.

## Beispiele

### Etablierung von Inline-Größenbeschränkung

Angenommen, das folgende HTML-Beispiel, das eine Kartenkomponente mit einem Bild, einem Titel und etwas Text ist:

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

Um einen Containerkontext zu erstellen, fügen Sie die Eigenschaft `container-type` zu einem Element hinzu. Das Folgende verwendet den Wert `inline-size`, um einen Einschlusskontext für die [Inline-Achse](/de/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#block_and_inline_dimensions) des Containers zu erstellen:

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

Das Schreiben einer Container-Abfrage über die Regel {{Cssxref("@container")}} wird Stile auf die Elemente des Containers anwenden, wenn er breiter als 400px ist:

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

- [CSS-Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Zustands-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- {{Cssxref("@container")}} Regel
- CSS {{Cssxref("container")}} Kurzschreibungseigenschaft
- CSS {{Cssxref("container-name")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
