---
title: right
slug: Web/CSS/Reference/Properties/right
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`right`**-Eigenschaft von [CSS](/de/docs/Web/CSS) beteiligt sich an der Angabe der horizontalen Position eines [positionierten Elements](/de/docs/Web/CSS/Reference/Properties/position). Diese {{Glossary("inset_properties", "Inset-Eigenschaft")}} hat keine Wirkung auf nicht positionierte Elemente.

{{InteractiveExample("CSS Demo: right")}}

```css interactive-example-choice
right: 0;
```

```css interactive-example-choice
right: 4em;
```

```css interactive-example-choice
right: 10%;
```

```css interactive-example-choice
right: 20px;
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
right: 3px;
right: 2.4em;
right: anchor(--my-anchor 50%);
right: anchor-size(--my-anchor height, 65px);

/* <percentage>s of the width of the containing block */
right: 10%;

/* Keyword value */
right: auto;

/* Global values */
right: inherit;
right: initial;
right: revert;
right: revert-layer;
right: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Ein negativer, null oder positiver {{cssxref("&lt;length&gt;")}}:
    - Für _absolut positionierte Elemente_ stellt es die Entfernung zur rechten Kante des umgebenden Blocks dar.
    - Für _ankerpositionierte Elemente_ wird die {{cssxref("anchor()")}}-Funktion auf einen {{cssxref("&lt;length&gt;")}}-Wert relativ zur Position der linken oder rechten Kante des zugehörigen _Ankerelements_ aufgelöst (siehe [Verwendung von Inset-Eigenschaften mit `anchor()`-Funktionswerten](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#using_inset_properties_with_anchor_function_values)), und die {{cssxref("anchor-size()")}}-Funktion wird auf einen {{cssxref("&lt;length&gt;")}}-Wert relativ zur Breite oder Höhe des zugehörigen Ankerelements aufgelöst (siehe [Festlegen der Elementposition basierend auf der Ankergröße](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#setting_element_position_based_on_anchor_size)).
    - Für _relativ positionierte Elemente_ stellt es die Entfernung dar, um die das Element von seiner normalen Position nach links verschoben wird.

- {{cssxref("&lt;percentage&gt;")}}
  - : Ein {{cssxref("&lt;percentage&gt;")}} der Breite des umgebenden Blocks.
- `auto`
  - : Gibt an, dass:
    - Für _absolut positionierte Elemente_ die Position des Elements auf der {{Cssxref("left")}}-Eigenschaft basiert, während `width: auto` als Breite basierend auf dem Inhalt behandelt wird; oder wenn `left` ebenfalls `auto` ist, wird das Element dort positioniert, wo es horizontal positioniert werden sollte, wenn es ein statisches Element wäre.
    - Für _relativ positionierte Elemente_ basiert die Entfernung des Elements von seiner normalen Position auf der {{Cssxref("left")}}-Eigenschaft; oder wenn `left` ebenfalls `auto` ist, wird das Element horizontal überhaupt nicht bewegt.

## Beschreibung

Die Wirkung von `right` hängt davon ab, wie das Element positioniert ist (d.h. vom Wert der {{cssxref("position")}}-Eigenschaft):

- Wenn `position` auf `absolute` oder `fixed` gesetzt ist, gibt die `right`-Eigenschaft den Abstand zwischen dem äußeren Rand der rechten Kante des Elements und der inneren Grenze der rechten Kante seines umgebenden Blocks an. Wenn das positionierte Element ein zugehöriges [_Ankerelement_](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) hat und der Eigenschaftswert eine {{cssxref("anchor()")}}-Funktion enthält, positioniert `right` den rechten Rand des positionierten Elements relativ zur angegebenen [`<anchor-side>`](/de/docs/Web/CSS/Reference/Values/anchor#anchor-side)-Kante. Die `right`-Eigenschaft ist [kompatibel](/de/docs/Web/CSS/Reference/Values/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit den Werten `left`, `right`, `start`, `end`, `self-start`, `self-end`, `center` und `<percentage>`.
- Wenn `position` auf `relative` gesetzt ist, gibt die `right`-Eigenschaft die Entfernung an, um die der rechte Rand des Elements von seiner normalen Position nach links verschoben wird.
- Wenn `position` auf `sticky` gesetzt ist, wird die `right`-Eigenschaft verwendet, um das Sticky-Constraint-Rechteck zu berechnen.
- Wenn `position` auf `static` gesetzt ist, hat die `right`-Eigenschaft _keine Wirkung_.

Wenn sowohl {{cssxref("left")}} als auch `right` definiert sind, dehnt sich das Element aus, um beide zu erfüllen, sofern es nicht durch andere Eigenschaften daran gehindert wird. Wenn das Element nicht gedehnt werden kann, um beide zu erfüllen — beispielsweise wenn eine `width` deklariert ist — ist die Position des Elements _überbestimmt_. In diesem Fall hat der `left`-Wert Vorrang, wenn das Container-Fließrichtung links-nach-rechts ist; der `right`-Wert hat Vorrang, wenn das Container-Fließrichtung rechts-nach-links ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Absolut und relativ positionieren mit right

#### HTML

```html
<div id="relative">Relatively positioned</div>
<div id="absolute">Absolutely positioned</div>
```

#### CSS

```css
#relative {
  width: 100px;
  height: 100px;
  background-color: #ffc7e4;
  position: relative;
  top: 20px;
  left: 20px;
}

#absolute {
  width: 100px;
  height: 100px;
  background-color: #ffd7c2;
  position: absolute;
  bottom: 10px;
  right: 20px;
}
```

#### Ergebnis

{{ EmbedLiveSample('Absolute_and_relative_positioning_using_right', 500, 220) }}

### Sowohl left als auch right deklarieren

Wenn sowohl `left` als auch `right` deklariert sind, dehnt sich das Element aus, um beide zu erfüllen, es sei denn, andere Einschränkungen verhindern dies. Wenn das Element sich nicht so dehnen oder verkleinern kann, um beide zu erfüllen. Wenn die Position des Elements _überbestimmt_ ist, basiert die Priorität auf der Richtung des Containers: Das `left` wird Vorrang haben, wenn die Richtung des Containers links-nach-rechts ist. Das `right` wird Vorrang haben, wenn die Richtung des Containers rechts-nach-links ist.

#### HTML

```html
<div id="parent">
  Parent
  <div id="noWidth">No width</div>
  <div id="width">width: 100px</div>
</div>
```

#### CSS

```css
div {
  outline: 1px solid #cccccc;
}
#parent {
  width: 200px;
  height: 200px;
  background-color: #ffc7e4;
  position: relative;
}
/* declare both a left and a right */
#width,
#noWidth {
  background-color: #c2ffd7;
  position: absolute;
  left: 0;
  right: 0;
}
/* declare a width */
#width {
  width: 100px;
  top: 60px;
}
```

#### Ergebnis

{{ EmbedLiveSample('Declaring_both_left_and_right', 500, 220) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("top")}}, {{cssxref("bottom")}}, und {{cssxref("left")}}
- {{cssxref("inset")}} Kurzschreibweise
- {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, und {{cssxref("inset-inline-end")}}
- {{cssxref("inset-block")}} und {{cssxref("inset-inline")}} Kurzschreibweisen
- {{cssxref("position")}}
- [CSS-Positionierlayout](/de/docs/Web/CSS/Guides/Positioned_layout) Modul
