---
title: "`container-type` CSS property"
short-title: container-type
slug: Web/CSS/Reference/Properties/container-type
l10n:
  sourceCommit: c4e64810ce10fb5cb1eebfcd8b6f526866fd0982
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **container-type** legt fest, welcher Typ von Containerkontext in einer Containerabfrage verwendet wird.

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

Diese Eigenschaft wird mit einem oder zwei Schlüsselwortwerten aus der folgenden Liste angegeben. Werden zwei Werte angegeben, muss einer davon `scroll-state` und der andere `inline-size` oder `size` sein:

- `anchored`
  - : Richtet einen Abfragecontainer für verankerte Containerabfragen auf dem Container ein. In diesem Fall wird die Größe des Elements nicht isoliert berechnet; es wird keine [Containment-Begrenzung](/de/docs/Web/CSS/Guides/Containment/Using) angewendet.
- `inline-size`
  - : Richtet einen Abfragecontainer für Dimensionsabfragen auf der [Inline-Achse](/de/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts#block_and_inline_dimensions) des Containers ein.
    Wendet [Style-](/de/docs/Web/CSS/Reference/Properties/contain#style) und [Inline-Size-Containment](/de/docs/Web/CSS/Reference/Properties/contain#inline-size) auf das Element an. Die Inline-Größe des Elements kann [isoliert berechnet](/de/docs/Web/CSS/Guides/Containment/Using#size_containment) werden, ohne die Kindelemente zu berücksichtigen (siehe [CSS-Containment verwenden](/de/docs/Web/CSS/Guides/Containment/Using)).

- `normal`
  - : Standardwert. Das Element ist kein Abfragecontainer für Containergrößen-, Scrollzustands- oder verankerte Abfragen, kann aber als Abfragecontainer für [Containerstilabfragen](/de/docs/Web/CSS/Reference/At-rules/@container#container_style_queries) und [Containerabfragen nur anhand des Namens](/de/docs/Web/CSS/Guides/Containment/Container_queries#name-only_container_queries) verwendet werden.

- `scroll-state`
  - : Richtet einen Abfragecontainer für Scrollzustandsabfragen auf dem Container ein. In diesem Fall wird die Größe des Elements nicht isoliert berechnet; es wird kein Containment angewendet.

- `size`
  - : Richtet einen Abfragecontainer für Containergrößenabfragen sowohl in [Inline- als auch in Blockrichtung](/de/docs/Web/CSS/Guides/Logical_properties_and_values/Basic_concepts#block_and_inline_dimensions) ein.
    Wendet [Style-](/de/docs/Web/CSS/Reference/Properties/contain#style) und [Size-Containment](/de/docs/Web/CSS/Reference/Properties/contain#size) auf das Element an. Size-Containment wird sowohl in Inline- als auch in Blockrichtung auf das Element angewendet. Die Größe des Elements kann isoliert berechnet werden, ohne die Kindelemente zu berücksichtigen.

## Beschreibung

Mit Containerabfragen können Sie Stile innerhalb eines Containers gezielt anhand von Bedingungen anwenden, die für den Container geprüft werden. Die At-Regel {{cssxref("@container")}} gibt die Prüfungen für einen Container sowie die Regeln an, die auf dessen Inhalt angewendet werden, wenn die Abfrage `true` ergibt.

Bestimmte Arten von Containerabfragen können nur für Elemente ausgeführt werden, bei denen bestimmte Werte der Eigenschaft `container-type` festgelegt sind. Diese Werte richten die entsprechenden Containerkontexte ein:

- [Größe](#containergrößenabfragen): Ermöglicht es, CSS-Regeln gezielt auf Kindelemente eines Containers anzuwenden, abhängig von einer allgemeinen Größen- oder Inline-Größenbedingung wie einem Höchst- oder Mindestmaß, einem Seitenverhältnis oder einer Ausrichtung.
- [Scrollzustand](#container-scrollzustandsabfragen): Ermöglicht es, CSS-Regeln gezielt auf Kindelemente eines Containers anzuwenden, abhängig von einer Scrollzustandsbedingung – etwa davon, ob der Container ein teilweise gescrollter Scrollcontainer ist oder ob er ein {{Glossary("Scroll_snap#snap_target", "Snap-Ziel")}} ist, das am zugehörigen Scroll-Snap-Container eingerastet werden soll.
- [Verankerung](#verankerte_containerabfragen): Ermöglicht es, CSS-Regeln gezielt auf Kindelemente eines Containers anzuwenden, abhängig davon, ob der Container [ankerpositioniert](/de/docs/Web/CSS/Guides/Anchor_positioning) ist und eine [Position-try-Fallback-Option](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) auf ihn angewendet wird.

Wenn für einen Container kein `container-type` festgelegt ist, ist das Element kein Abfragecontainer für Containergrößen-, Scrollzustands- oder verankerte Abfragen. Es kann aber weiterhin als Abfragecontainer für [Containerstilabfragen](/de/docs/Web/CSS/Reference/At-rules/@container#container_style_queries) und [Containerabfragen nur anhand des Namens](/de/docs/Web/CSS/Guides/Containment/Container_queries#name-only_container_queries) verwendet werden.

### Containergrößenabfragen

Mit [Containergrößenabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_size_queries) können Sie CSS-Regeln gezielt auf Nachfahren eines Containers anwenden, abhängig von einer Größenbedingung wie einem Höchst- oder Mindestmaß, einem Seitenverhältnis oder einer Ausrichtung.

Auf Größencontainer wird zusätzlich Size-Containment angewendet. Dadurch kann ein Element seine Größe nicht mehr aus seinem Inhalt ableiten. Das ist für Containerabfragen wichtig, um Endlosschleifen zu vermeiden. Andernfalls könnte eine CSS-Regel innerhalb einer Containerabfrage die Größe des Inhalts ändern. Dadurch könnte die Abfrage `false` ergeben und sich die Größe des Elternelements ändern, was wiederum die Größe des Inhalts beeinflussen und die Abfrage erneut auf `true` setzen könnte. Diese Abfolge würde sich endlos wiederholen.

Die Containergröße muss sich aus dem Kontext ergeben, etwa bei Blockelementen, die sich über die gesamte Breite ihres Elternelements erstrecken, oder explizit festgelegt werden. Ist weder eine kontextabhängige noch eine explizite Größe verfügbar, fallen Elemente mit Size-Containment in sich zusammen.

> [!NOTE]
> Die Größe von Nachfahren eines Größencontainers kann mithilfe von [Längeneinheiten für Containerabfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries#container_query_length_units) festgelegt werden.

### Container-Scrollzustandsabfragen

Mit [Container-Scrollzustandsabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries) können Sie CSS-Regeln gezielt auf Kindelemente eines Containers anwenden, abhängig von einer Scrollzustandsbedingung, beispielsweise:

- Ob der Inhalt des Containers teilweise gescrollt ist.
- Ob der Container ein Snap-Ziel ist, das an einem Scroll-Snap-Container eingerastet werden soll.
- Ob der Container mit [`position: sticky`](/de/docs/Web/CSS/Reference/Properties/display) positioniert ist und an einer Grenze eines {{Glossary("scroll_container", "Scrollcontainers")}} haftet.

Im ersten Fall ist der abgefragte Container selbst der Scrollcontainer. In den beiden anderen Fällen ist der abgefragte Container ein Element, das von der Scrollposition eines übergeordneten Scrollcontainers beeinflusst wird.

### Verankerte Containerabfragen

Mit [verankerten Containerabfragen](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries) können Sie CSS-Regeln gezielt auf Nachfahren eines ankerpositionierten Containers anwenden, wenn für diesen ein über die Eigenschaft {{cssxref("position-try-fallbacks")}} festgelegter Position-try-Fallback aktiv ist.

Beispielsweise könnte ein ankerpositioniertes Tooltip-Element durch den Wert `top` der Eigenschaft {{cssxref("position-area")}} standardmäßig oberhalb seines Ankers positioniert sein, während für `position-try-fallbacks` der Wert `flip-block` festgelegt ist. Sobald das Tooltip über den oberen Rand des Viewports hinausragen würde, wird es dadurch in Blockrichtung an die Unterseite seines Ankers verschoben. Wenn wir dafür `container-type: anchored` festlegen, können wir mithilfe einer `@container`-At-Regel erkennen, wann der Position-try-Fallback angewendet wird, und daraufhin CSS-Regeln anwenden.

```css
.tooltip {
  position: absolute;
  position-anchor: --my-anchor;
  position-area: top;
  position-try-fallbacks: flip-block;
  container-type: anchored;
}
```

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

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

Um einen Containerkontext mit Inline-Size-Containment einzurichten, fügen Sie einem Element die Eigenschaft `container-type` mit dem Wert `inline-size` hinzu:

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

Mit einer Containerabfrage über die At-Regel {{Cssxref("@container")}} werden Stile auf die Elemente des Containers angewendet, wenn dieser breiter als `400px` ist:

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

- [CSS-Containerabfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Containergrößen- und Containerstilabfragen verwenden](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [Container-Scrollzustandsabfragen verwenden](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [Verankerte Containerabfragen verwenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries)
- At-Regel {{Cssxref("@container")}}
- CSS-Kurzschreibweise {{Cssxref("container")}}
- CSS-Eigenschaft {{Cssxref("container-name")}}
- CSS-Eigenschaft {{cssxref("content-visibility")}}
