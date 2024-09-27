---
title: right
slug: Web/CSS/right
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{CSSRef}}

Die **`right`** [CSS](/de/docs/Web/CSS)-Eigenschaft beteiligt sich an der Spezifikation der horizontalen Position eines [positionierten Elements](/de/docs/Web/CSS/position). Diese [Einsetzeigenschaft](/de/docs/Glossary/inset_properties) hat keine Auswirkung auf nicht positionierte Elemente.

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

  - : Ein negativer, nuller oder positiver {{cssxref("&lt;length&gt;")}}, der darstellt:

    - für _absolut positionierte Elemente_, die Entfernung zur rechten Kante des umgebenden Blocks.
    - für [_anker-positionierte Elemente_](/de/docs/Web/CSS/CSS_anchor_positioning/Using#using_inset_properties_with_anchor_function_values) löst die {{cssxref("anchor()")}}-Funktion einen {{cssxref("&lt;length&gt;")}}-Wert relativ zur Position der linken oder rechten Kante des zugehörigen _Ankerelements_ aus.
    - für _relativ positionierte Elemente_, die Entfernung, die das Element links von seiner normalen Position verschoben wird.

- {{cssxref("&lt;percentage&gt;")}}
  - : Ein {{cssxref("&lt;percentage&gt;")}} der Breite des umgebenden Blocks.
- `auto`

  - : Gibt an, dass:

    - für _absolut positionierte Elemente_, die Position des Elements auf der {{Cssxref("left")}}-Eigenschaft basiert, während `width: auto` als eine auf dem Inhalt basierende Breite behandelt wird; oder wenn `left` ebenfalls `auto` ist, wird das Element dort positioniert, wo es horizontal stehen würde, wenn es ein statisches Element wäre.
    - für _relativ positionierte Elemente_, die Entfernung des Elements von seiner normalen Position auf der {{Cssxref("left")}}-Eigenschaft basiert; oder wenn `left` ebenfalls `auto` ist, wird das Element horizontal gar nicht verschoben.

- `inherit`
  - : Gibt an, dass der Wert derselbe ist wie der berechnete Wert des Elternelements (das möglicherweise nicht der umgebende Block ist). Dieser berechnete Wert wird dann so behandelt, als ob er ein {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}} oder das Schlüsselwort `auto` wäre.

## Beschreibung

Die Auswirkung von `right` hängt davon ab, wie das Element positioniert ist (d. h. vom Wert der {{cssxref("position")}}-Eigenschaft):

- Wenn `position` auf `absolute` oder `fixed` eingestellt ist, gibt die Eigenschaft `right` die Entfernung zwischen dem äußeren rechten Rand des Elements und dem inneren Rand der rechten Kante seines umgebenden Blocks an. Hat das positionierte Element ein zugehöriges [_Ankerelement_](/de/docs/Web/CSS/CSS_anchor_positioning/Using), und der Eigenschaftswert enthält eine {{cssxref("anchor()")}}-Funktion, positioniert `right` den rechten Rand des positionierten Elements relativ zur angegebenen [`<anchor-side>`](/de/docs/Web/CSS/anchor#anchor-side)-Kante. Die `right`-Eigenschaft ist [kompatibel](/de/docs/Web/CSS/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit den Werten `left`, `right`, `start`, `end`, `self-start`, `self-end`, `center` und `<percentage>`.
- Wenn `position` auf `relative` gesetzt ist, gibt die Eigenschaft `right` die Entfernung an, um die der rechte Rand des Elements links von seiner normalen Position verschoben wird.
- Wenn `position` auf `sticky` gesetzt ist, wird die `right`-Eigenschaft verwendet, um das Stickiness-Beschränkungsrechteck zu berechnen.
- Wenn `position` auf `static` gesetzt ist, hat die `right`-Eigenschaft _keine Auswirkung_.

Wenn sowohl {{cssxref("left")}} als auch `right` definiert sind und nicht durch andere Eigenschaften daran gehindert werden, wird das Element gedehnt, um beide zu erfüllen. Kann das Element nicht gedehnt werden, um beide zu erfüllen - zum Beispiel, wenn eine `width` deklariert ist - ist die Position des Elements _überbestimmt_. In diesem Fall hat der `left`-Wert Vorrang, wenn das Container von links nach rechts verläuft; der `right`-Wert hat Vorrang, wenn das Container von rechts nach links verläuft.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Absolute und relative Positionierung unter Verwendung von `right`

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

### Deklarieren von sowohl `left` als auch `right`

Wenn sowohl `left` als auch `right` deklariert wird, wird das Element gedehnt, um beide zu erfüllen, es sei denn, andere Einschränkungen verhindern dies. Wenn das Element nicht gedehnt oder verkleinert wird, um beide zu erfüllen, ist die Position des Elements _überbestimmt_. Der Vorrang richtet sich nach der Richtung des Containers: `left` hat Vorrang, wenn die Richtung des Containers von links nach rechts geht. `right` hat Vorrang, wenn die Richtung des Containers von rechts nach links geht.

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
- Die zugeordneten logischen Eigenschaften: {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, und {{cssxref("inset-inline-end")}} und die Kurzschreibweisen {{cssxref("inset-block")}} und {{cssxref("inset-inline")}}
- {{cssxref("position")}}
