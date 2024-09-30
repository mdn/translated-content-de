---
title: right
slug: Web/CSS/right
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{CSSRef}}

Die **`right`** [CSS](/de/docs/Web/CSS) Eigenschaft beteiligt sich an der Festlegung der horizontalen Position eines [positionierten Elements](/de/docs/Web/CSS/position). Diese [Inset-Eigenschaft](/de/docs/Glossary/inset_properties) hat keine Wirkung auf nicht positionierte Elemente.

{{EmbedInteractiveExample("pages/css/right.html")}}

## Syntax

```css
/* <length> values */
right: 3px;
right: 2.4em;
right: calc(anchor(left) + 10px);
right: anchor(--myAnchor 50%);

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

  - : Ein negativer, nuller oder positiver {{cssxref("&lt;length&gt;")}}, der repräsentiert:

    - für _absolut positionierte Elemente_, die Entfernung zum rechten Rand des enthaltenden Blocks.
    - für [_anker-positionierte Elemente_](/de/docs/Web/CSS/CSS_anchor_positioning/Using#using_inset_properties_with_anchor_function_values), die {{cssxref("anchor()")}} Funktion löst sich in einen {{cssxref("&lt;length&gt;")}} Wert relativ zur Position des assoziierten _Ankerelements_' linken oder rechten Rands auf.
    - für _relativ positionierte Elemente_, die Entfernung, die das Element nach links von seiner normalen Position verschoben wird.

- {{cssxref("&lt;percentage&gt;")}}
  - : Ein {{cssxref("&lt;percentage&gt;")}} der Breite des enthaltenden Blocks.
- `auto`

  - : Gibt an, dass:

    - für _absolut positionierte Elemente_, die Position des Elements basierend auf der {{Cssxref("left")}} Eigenschaft ist, während `width: auto` als eine auf dem Inhalt basierende Breite behandelt wird; oder wenn `left` ebenfalls `auto` ist, wird das Element so positioniert, als wäre es ein statisches Element.
    - für _relativ positionierte Elemente_, der Abstand des Elements von seiner normalen Position basiert auf der {{Cssxref("left")}} Eigenschaft; oder wenn `left` ebenfalls `auto` ist, wird das Element horizontal überhaupt nicht bewegt.

- `inherit`
  - : Gibt an, dass der Wert derselbe ist wie der berechnete Wert vom Elternelement (das möglicherweise nicht sein enthaltender Block ist). Dieser berechnete Wert wird dann behandelt, als wäre er ein {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, oder das `auto` Schlüsselwort.

## Beschreibung

Die Wirkung von `right` hängt davon ab, wie das Element positioniert ist (d. h. der Wert der {{cssxref("position")}} Eigenschaft):

- Wenn `position` auf `absolute` oder `fixed` gesetzt ist, gibt die `right` Eigenschaft den Abstand zwischen der äußeren rechten Kante des Elements und der inneren Grenze der rechten Kante seines enthaltenden Blocks an. Wenn das positionierte Element ein assoziiertes [_Ankerelement_](/de/docs/Web/CSS/CSS_anchor_positioning/Using) hat und der Eigenschaftswert eine {{cssxref("anchor()")}} Funktion umfasst, positioniert `right` die rechte Kante des positionierten Elements relativ zur angegebenen [`<anchor-side>`](/de/docs/Web/CSS/anchor#anchor-side) Kante. Die `right` Eigenschaft ist [kompatibel](/de/docs/Web/CSS/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit den Werten `left`, `right`, `start`, `end`, `self-start`, `self-end`, `center` und `<percentage>`.
- Wenn `position` auf `relative` gesetzt ist, gibt die `right` Eigenschaft den Abstand an, den die rechte Kante des Elements nach links von ihrer normalen Position verschoben wird.
- Wenn `position` auf `sticky` gesetzt ist, wird die `right` Eigenschaft verwendet, um das sticky-Beschränkungsrechteck zu berechnen.
- Wenn `position` auf `static` gesetzt ist, hat die `right` Eigenschaft _keine Wirkung_.

Wenn sowohl {{cssxref("left")}} als auch `right` definiert sind und nicht durch andere Eigenschaften daran gehindert werden, wird das Element sich strecken, um beide zu erfüllen. Wenn das Element nicht gestreckt werden kann, um beide zu erfüllen – beispielsweise wenn eine `width` deklariert ist – ist die Position des Elements _überbestimmt_. In diesem Fall hat der `left` Wert Vorrang, wenn der Container von links nach rechts verläuft; der `right` Wert hat Vorrang, wenn der Container von rechts nach links verläuft.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Absolute und relative Positionierung mit right

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

### Deklaration von sowohl left als auch right

Wenn sowohl `left` als auch `right` deklariert sind, wird sich das Element strecken, um beide zu erfüllen, es sei denn, andere Einschränkungen verhindern dies. Wenn das Element sich nicht strecken oder schrumpfen wird, um beide zu erfüllen. Wenn die Position des Elements _überbestimmt_ ist, basiert der Vorrang auf der Richtung des Containers: `left` wird Vorrang haben, wenn die Richtung des Containers von links nach rechts verläuft. `right` wird Vorrang haben, wenn die Richtung des Containers von rechts nach links verläuft.

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

- {{cssxref("inset")}}, die Kurzform für alle verwandten Eigenschaften: {{cssxref("top")}}, {{cssxref("bottom")}}, und {{cssxref("left")}}
- Die abgebildeten logischen Eigenschaften: {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, und {{cssxref("inset-inline-end")}} und die Kurzformen {{cssxref("inset-block")}} und {{cssxref("inset-inline")}}
- {{cssxref("position")}}
