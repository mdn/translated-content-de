---
title: "`container-type` CSS property"
short-title: container-type
slug: Web/CSS/Reference/Properties/container-type
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **container-type** legt fest, welche Art von Containerkontext in einer Container-Abfrage verwendet wird.

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

Diese Eigenschaft wird mit einem oder zwei Schlüsselwortwerten aus der folgenden Liste angegeben. Bei zwei Werten muss einer `scroll-state` und der andere `inline-size` oder `size` sein:

- `anchored`
  - : Richtet einen Abfragecontainer für verankerte Container-Abfragen für den Container ein. In diesem Fall wird die Größe des Elements nicht isoliert berechnet; es wird keine [Containment](/de/docs/Web/CSS/Guides/Containment/Using) angewendet.
- `inline-size`
  - : Richtet einen Abfragecontainer für dimensionsbezogene Abfragen entlang der [Inline-Achse](/de/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts#block_and_inline_dimensions) des Containers ein.
    Wendet [Style-Containment](/de/docs/Web/CSS/Reference/Properties/contain#style) und [Inline-Size-Containment](/de/docs/Web/CSS/Reference/Properties/contain#inline-size) auf das Element an. Die Inline-Größe des Elements kann [isoliert berechnet](/de/docs/Web/CSS/Guides/Containment/Using#size_containment) werden, ohne die Kindelemente zu berücksichtigen (siehe [CSS-Containment verwenden](/de/docs/Web/CSS/Guides/Containment/Using)).

- `normal`
  - : Standardwert. Das Element ist kein Abfragecontainer für Containergrößen-, Scroll-State- oder verankerte Abfragen, kann aber als Abfragecontainer für [Container-Style-Abfragen](/de/docs/Web/CSS/Reference/At-rules/@container#container_style_queries) und [Container-Abfragen nur anhand des Namens](/de/docs/Web/CSS/Guides/Containment/Container_queries#name-only_container_queries) verwendet werden.

- `scroll-state`
  - : Richtet einen Abfragecontainer für Scroll-State-Abfragen für den Container ein. In diesem Fall wird die Größe des Elements nicht isoliert berechnet; es wird keine Containment angewendet.

- `size`
  - : Richtet einen Abfragecontainer für Containergrößen-Abfragen sowohl in der [Inline- als auch in der Blockdimension](/de/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts#block_and_inline_dimensions) ein.
    Wendet [Style-Containment](/de/docs/Web/CSS/Reference/Properties/contain#style) und [Size-Containment](/de/docs/Web/CSS/Reference/Properties/contain#size) auf das Element an. Size-Containment wird sowohl in Inline- als auch in Blockrichtung auf das Element angewendet. Die Größe des Elements kann isoliert berechnet werden, ohne die Kindelemente zu berücksichtigen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beschreibung

Mit Container-Abfragen können Sie Stile innerhalb eines Containers selektiv anwenden. Grundlage dafür sind Bedingungen, die für den Container geprüft werden. Die At-Regel {{cssxref("@container")}} legt fest, welche Bedingungen für einen Container geprüft werden und welche Regeln für seinen Inhalt gelten, wenn die Abfrage `true` ergibt.

Bestimmte Arten von Container-Abfragen können nur für Elemente ausgeführt werden, deren Eigenschaft `container-type` auf einen bestimmten Wert gesetzt ist. Diese Werte richten jeweils einen bestimmten Containerkontext ein:

- [Größe](#containergrößen-abfragen): Ermöglicht es, CSS-Regeln anhand einer Bedingung für die allgemeine Größe oder Inline-Größe selektiv auf die Kindelemente eines Containers anzuwenden, etwa anhand eines Höchst- oder Mindestmaßes, eines Seitenverhältnisses oder einer Ausrichtung.
- [Scroll-State](#container-scroll-state-abfragen): Ermöglicht es, CSS-Regeln anhand des Scroll-Zustands selektiv auf die Kindelemente eines Containers anzuwenden, etwa wenn der Container ein teilweise gescrollter Scroll-Container oder ein {{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} ist, das am zugehörigen Scroll-Snap-Container einrasten wird.
- [Verankerung](#verankerte_container-abfragen): Ermöglicht es, CSS-Regeln selektiv auf die Kindelemente eines Containers anzuwenden, wenn dieser [ankerpositioniert](/de/docs/Web/CSS/Guides/Anchor_positioning) ist und eine [Position-Try-Fallback-Option](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) auf ihn angewendet wird.

Wenn für einen Container kein `container-type` festgelegt ist, ist das Element kein Abfragecontainer für Containergrößen-, Scroll-State- oder verankerte Abfragen. Es kann jedoch weiterhin als Abfragecontainer für [Container-Style-Abfragen](/de/docs/Web/CSS/Reference/At-rules/@container#container_style_queries) und [Container-Abfragen nur anhand des Namens](/de/docs/Web/CSS/Guides/Containment/Container_queries#name-only_container_queries) verwendet werden.

### Containergrößen-Abfragen

Mit [Containergrößen-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_size_queries) können Sie CSS-Regeln anhand einer Größenbedingung selektiv auf die Nachfahren eines Containers anwenden, etwa anhand eines Höchst- oder Mindestmaßes, eines Seitenverhältnisses oder einer Ausrichtung.

Auf Größencontainer wird außerdem Size-Containment angewendet. Dadurch kann ein Element seine Größe nicht mehr aus seinem Inhalt ableiten. Für Container-Abfragen ist das wichtig, um Endlosschleifen zu vermeiden: Andernfalls könnte eine CSS-Regel innerhalb einer Container-Abfrage die Größe des Inhalts ändern. Dadurch könnte die Abfrage anschließend `false` ergeben und sich die Größe des Elternelements ändern. Dies könnte wiederum die Inhaltsgröße ändern, sodass die Abfrage erneut `true` ergibt – und so weiter.

Die Containergröße muss sich aus dem Kontext ergeben, beispielsweise bei Blockelementen, die sich über die gesamte Breite ihres Elternelements erstrecken, oder explizit festgelegt werden. Ist weder eine kontextabhängige noch eine explizite Größe verfügbar, fallen Elemente mit Size-Containment in sich zusammen.

> [!NOTE]
> Die Größe der Nachfahren von Größencontainern kann mit [Längeneinheiten für Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries#container_query_length_units) festgelegt werden.

### Container-Scroll-State-Abfragen

Mit [Container-Scroll-State-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries) können Sie CSS-Regeln anhand eines Scroll-Zustands selektiv auf die Kindelemente eines Containers anwenden, beispielsweise abhängig davon:

- ob der Inhalt des Containers teilweise gescrollt wurde.
- ob der Container ein Snap-Ziel ist, das an einem Scroll-Snap-Container einrasten wird.
- ob der Container mit [`position: sticky`](/de/docs/Web/CSS/Reference/Properties/display) positioniert ist und an einer Grenze eines {{Glossary("scroll_container", "Scroll-Containers")}} haftet.

Im ersten Fall ist der abgefragte Container der Scroll-Container selbst. In den beiden anderen Fällen ist der abgefragte Container ein Element, das von der Scroll-Position eines übergeordneten Scroll-Containers beeinflusst wird.

### Verankerte Container-Abfragen

Mit [verankerten Container-Abfragen](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries) können Sie CSS-Regeln selektiv auf die Nachfahren eines ankerpositionierten Containers anwenden, wenn für ihn ein über die Eigenschaft {{cssxref("position-try-fallbacks")}} festgelegter Position-Try-Fallback aktiv ist.

Angenommen, ein ankerpositioniertes Tooltip-Element wird standardmäßig durch den {{cssxref("position-area")}}-Wert `top` oberhalb seines Ankers positioniert, während für `position-try-fallbacks` der Wert `flip-block` festgelegt ist. Sobald das Tooltip über den oberen Rand des Viewports hinausragen würde, wechselt es dadurch in Blockrichtung auf die untere Seite seines Ankers. Wenn Sie für das Tooltip `container-type: anchored` festlegen, können Sie mit einer `@container`-At-Regel erkennen, wann der Position-Try-Fallback angewendet wird, und daraufhin CSS-Regeln anwenden.

```css
.tooltip {
  position: absolute;
  position-anchor: --my-anchor;
  position-area: top;
  position-try-fallbacks: flip-block;
  container-type: anchored;
}
```

## Beispiele

### Inline-Size-Containment einrichten

Das folgende HTML-Beispiel zeigt eine Kartenkomponente mit einem Bild, einem Titel und etwas Text:

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

Um einen Containerkontext für die Inline-Größe einzurichten, fügen Sie einem Element die Eigenschaft `container-type` mit dem Wert `inline-size` hinzu:

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

Eine Container-Abfrage mit der At-Regel {{Cssxref("@container")}} wendet Stile auf die Elemente des Containers an, wenn dieser breiter als `400px` ist:

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
- [Containergrößen- und Container-Style-Abfragen verwenden](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [Container-Scroll-State-Abfragen verwenden](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [Verankerte Container-Abfragen verwenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries)
- At-Regel {{Cssxref("@container")}}
- CSS-Kurzschreibweise {{Cssxref("container")}}
- CSS-Eigenschaft {{Cssxref("container-name")}}
- CSS-Eigenschaft {{cssxref("content-visibility")}}
