---
title: "`left` CSS property"
short-title: left
slug: Web/CSS/Reference/Properties/left
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`left`**-Eigenschaft von [CSS](/de/docs/Web/CSS) trägt zur Spezifizierung der horizontalen Position eines [positionierten Elements](/de/docs/Web/CSS/Reference/Properties/position) bei. Diese {{Glossary("inset_properties", "Rand-Eigenschaft")}} hat keine Wirkung auf nicht positionierte Elemente.

{{InteractiveExample("CSS Demo: left")}}

```css interactive-example-choice
left: 0;
```

```css interactive-example-choice
left: 4em;
```

```css interactive-example-choice
left: 10%;
```

```css interactive-example-choice
left: 20px;
```

```html interactive-example
<section id="default-example">
  <div class="example-container">
    <div id="example-element">I am absolutely positioned.</div>
    <p>
      As much mud in the streets as if the waters had but newly retired from the
      face of the earth, and it would not be wonderful to meet a Megalosaurus,
      forty feet long or so, waddling like an elephantine lizard up Holborn
      Hill.
    </p>
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 0.75em solid;
  padding: 0.75em;
  text-align: left;
  position: relative;
  width: 100%;
  min-height: 200px;
}

#example-element {
  background-color: #264653;
  border: 4px solid #ffb500;
  color: white;
  position: absolute;
  width: 140px;
  height: 60px;
}
```

## Syntax

```css
/* <length> values */
left: 3px;
left: 2.4em;
left: anchor(--my-anchor 50%);
left: calc(anchor-size(--my-anchor inline, 100px) * 2);

/* <percentage>s of the width of the containing block */
left: 10%;

/* Keyword value */
left: auto;

/* Global values */
left: inherit;
left: initial;
left: revert;
left: revert-layer;
left: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Eine negative, null oder positive {{cssxref("&lt;length&gt;")}}:
    - für _absolut positionierte Elemente_ stellt es die Entfernung zur linken Kante des umgebenden Blocks dar.
    - für _anker-positionierte Elemente_ löst die {{cssxref("anchor()")}}-Funktion einen {{cssxref("&lt;length&gt;")}}-Wert relativ zur Position der linken oder rechten Kante des zugehörigen _Anker-Elements_ aus (siehe [Verwendung von Rand-Eigenschaften mit `anchor()`-Funktionswerten](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#using_inset_properties_with_anchor_function_values)), und die {{cssxref("anchor-size()")}}-Funktion löst einen {{cssxref("&lt;length&gt;")}}-Wert relativ zur Breite oder Höhe des zugehörigen Anker-Elements aus (siehe [Festlegen der Elementposition basierend auf Ankergröße](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#setting_element_position_based_on_anchor_size)).
    - für _relativ positionierte Elemente_ stellt es die Entfernung dar, um die das Element von seiner normalen Position nach rechts verschoben wird.

- {{cssxref("&lt;percentage&gt;")}}
  - : Ein {{cssxref("&lt;percentage&gt;")}} der Breite des umgebenden Blocks.
- `auto`
  - : Gibt an, dass:
    - für _absolut positionierte Elemente_ die Position des Elements auf der Eigenschaft {{Cssxref("right")}} basiert, während `width: auto` als Breite basierend auf dem Inhalt behandelt wird; oder wenn `right` auch `auto` ist, wird das Element dort positioniert, wo es horizontal positioniert werden sollte, wenn es ein statisches Element wäre.
    - für _relativ positionierte Elemente_ basiert die Entfernung des Elements von seiner normalen Position auf der Eigenschaft {{Cssxref("right")}}; oder wenn `right` auch `auto` ist, wird das Element horizontal überhaupt nicht verschoben.

## Beschreibung

Die Wirkung von `left` hängt davon ab, wie das Element positioniert ist (d.h. vom Wert der Eigenschaft {{cssxref("position")}}):

- Wenn `position` auf `absolute` oder `fixed` gesetzt ist, gibt die `left`-Eigenschaft die Entfernung zwischen dem äußeren Rand der linken Kante des Elements und der inneren Grenze der linken Kante seines umgebenden Blocks an. (Der umgebende Block ist der Vorfahre, zu dem das Element relativ positioniert ist.) Hat das positionierte Element ein zugehöriges [_Anker-Element_](/de/docs/Web/CSS/Guides/Anchor_positioning/Using), und der Eigenschaftswert enthält eine {{cssxref("anchor()")}}-Funktion, positioniert `left` die linke Kante des positionierten Elements relativ zur Position der angegebenen [`<anchor-side>`](/de/docs/Web/CSS/Reference/Values/anchor#anchor-side)-Kante. Die `left`-Eigenschaft ist [kompatibel](/de/docs/Web/CSS/Reference/Values/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit den Werten `left`, `right`, `start`, `end`, `self-start`, `self-end`, `center` und `<percentage>`.
- Wenn `position` auf `relative` gesetzt ist, gibt die `left`-Eigenschaft die Entfernung an, um die die linke Kante des Elements von seiner normalen Position nach rechts bewegt wird.
- Wenn `position` auf `sticky` gesetzt ist, wird die `left`-Eigenschaft verwendet, um das Sticky-Einschränkungsrechteck zu berechnen.
- Wenn `position` auf `static` gesetzt ist, hat die `left`-Eigenschaft _keine Wirkung_.

Wenn sowohl `left` als auch {{cssxref("right")}} definiert sind und Breitenbeschränkungen dies nicht verhindern, dehnt sich das Element aus, um beiden zu entsprechen. Wenn das Element sich nicht so weit dehnen kann, um beiden zu entsprechen, ist die Position des Elements _überbestimmt_. In diesem Fall hat der `left`-Wert Vorrang, wenn das Container-Element von links nach rechts gerichtet ist; der `right`-Wert hat Vorrang, wenn das Container-Element von rechts nach links gerichtet ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Positionierung von Elementen

#### HTML

```html
<div id="wrap">
  <div id="example_1">
    <pre>
      position: absolute;
      left: 20px;
      top: 20px;
    </pre>
    <p>
      The only containing element for this div is the main window, so it
      positions itself in relation to it.
    </p>
  </div>

  <div id="example_2">
    <pre>
      position: relative;
      top: 0;
      right: 0;
    </pre>
    <p>Relative position in relation to its siblings.</p>
  </div>

  <div id="example_3">
    <pre>
      float: right;
      position: relative;
      top: 20px;
      left: 20px;
    </pre>
    <p>Relative to its sibling div above, but removed from flow of content.</p>

    <div id="example_4">
      <pre>
        position: absolute;
        bottom: 10px;
        right: 20px;
      </pre>
      <p>Absolute position inside of a parent with relative position</p>
    </div>

    <div id="example_5">
      <pre>
        position: absolute;
        right: 0;
        left: 0;
        top: 200px;
      </pre>
      <p>Absolute position with both left and right declared</p>
    </div>
  </div>
</div>
```

#### CSS

```css
#wrap {
  width: 700px;
  margin: 0 auto;
  background: #5c5c5c;
}

pre {
  white-space: pre-line;
  word-wrap: break-word;
}

#example_1 {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 20px;
  top: 20px;
  background-color: #d8f5ff;
}

#example_2 {
  width: 200px;
  height: 200px;
  position: relative;
  top: 0;
  right: 0;
  background-color: #c1ffdb;
}
#example_3 {
  width: 600px;
  height: 400px;
  position: relative;
  top: 20px;
  left: 20px;
  background-color: #ffd7c2;
}

#example_4 {
  width: 200px;
  height: 200px;
  position: absolute;
  bottom: 10px;
  right: 20px;
  background-color: #ffc7e4;
}
#example_5 {
  position: absolute;
  right: 0;
  left: 0;
  top: 100px;
  background-color: #d7ffc2;
}
```

#### Ergebnis

{{EmbedLiveSample('Positioning_elements',1200,650)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("top")}}, {{cssxref("bottom")}}, und {{cssxref("right")}}
- {{cssxref("inset")}} Kurzform
- {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, und {{cssxref("inset-inline-end")}}
- {{cssxref("inset-block")}} und {{cssxref("inset-inline")}} Kurzformen
- {{cssxref("position")}}
- [CSS Positioniertes Layout](/de/docs/Web/CSS/Guides/Positioned_layout) Modul
