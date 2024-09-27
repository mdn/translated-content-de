---
title: bottom
slug: Web/CSS/bottom
l10n:
  sourceCommit: 09c431e017263c263558df1821f187f76660dde9
---

{{CSSRef}}

Die **`bottom`** [CSS](/de/docs/Web/CSS) Eigenschaft beteiligt sich an der Einstellung der vertikalen Position eines [positionierten Elements](/de/docs/Web/CSS/position). Diese [Inset-Eigenschaft](/de/docs/Glossary/inset_properties) hat keine Wirkung auf nicht-positionierte Elemente.

{{EmbedInteractiveExample("pages/css/bottom.html")}}

Die Wirkung von `bottom` hängt davon ab, wie das Element positioniert ist (d. h. der Wert der {{cssxref("position")}} Eigenschaft):

- Wenn `position` auf `absolute` oder `fixed` gesetzt ist, gibt die `bottom`-Eigenschaft den Abstand zwischen dem äußeren Rand des unteren Rands des Elements und dem äußeren Rand des unteren Abstands des umschließenden Blocks an oder, im Fall von [Anker-positionierten Elementen](/de/docs/Web/CSS/CSS_anchor_positioning/Using) wenn die {{cssxref("anchor()")}} Funktion innerhalb des Wertes verwendet wird, relativ zur Position der angegebenen [`<anchor-side>`](/de/docs/Web/CSS/anchor#anchor-side) Kante. Die `bottom`-Eigenschaft ist [kompatibel](/de/docs/Web/CSS/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit den Werten `top`, `bottom`, `start`, `end`, `self-start`, `self-end`, `center` und `<percentage>`.
- Wenn `position` auf `relative` gesetzt ist, gibt die `bottom`-Eigenschaft den Abstand an, den die untere Kante des Elements über seine normale Position hinaus verschoben wird.
- Wenn `position` auf `sticky` gesetzt ist, wird die `bottom`-Eigenschaft verwendet, um das Sticky-Constraint-Rechteck zu berechnen.
- Wenn `position` auf `static` gesetzt ist, hat die `bottom`-Eigenschaft _keine Wirkung_.

Wenn sowohl {{cssxref("top")}} als auch `bottom` angegeben sind, `position` auf `absolute` oder `fixed` gesetzt ist, _und_ {{cssxref("height")}} nicht spezifiziert ist (entweder `auto` oder `100%`), werden sowohl die `top`- als auch die `bottom`-Abstände respektiert. In allen anderen Situationen, wenn {{cssxref("height")}} in irgendeiner Weise eingeschränkt ist oder `position` auf `relative` gesetzt ist, hat die `top`-Eigenschaft Vorrang und die `bottom`-Eigenschaft wird ignoriert.

## Syntax

```css
/* <length> values */
bottom: 3px;
bottom: 2.4em;
bottom: anchor(top);
bottom: calc(anchor(--myAnchor 50%) + 5px);

/* <percentage>s of the height of the containing block */
bottom: 10%;

/* Keyword value */
bottom: auto;

/* Global values */
bottom: inherit;
bottom: initial;
bottom: revert;
bottom: revert-layer;
bottom: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}

  - : Ein negativer, null oder positiver {{cssxref("&lt;length&gt;")}}, der folgendes darstellt:

    - Für _absolut positionierte Elemente_, der Abstand zur unteren Kante des umschließenden Blocks.
    - Für _relativ positionierte Elemente_, der Abstand, den das Element über seine normale Position hinaus verschoben wird.
    - Für [_Anker-positionierte Elemente_](/de/docs/Web/CSS/CSS_anchor_positioning/Using#using_inset_properties_with_anchor_function_values) löst die {{cssxref("anchor()")}} Funktion zu einem {{cssxref("&lt;length&gt;")}} Wert relativ zur Position der oberen oder unteren Kante des zugehörigen _Anker-Elements_ auf.

- {{cssxref("&lt;percentage&gt;")}}
  - : Ein {{cssxref("&lt;percentage&gt;")}} der Höhe des umschließenden Blocks.
- `auto`

  - : Gibt an, dass:

    - Für _absolut positionierte Elemente_, die Position des Elements basierend auf der {{Cssxref("top")}} Eigenschaft festgelegt wird, während `height: auto` als Höhe basierend auf dem Inhalt behandelt wird; oder wenn `top` ebenfalls `auto` ist, wird das Element dort positioniert, wo es vertikal positioniert wäre, wenn es ein statisches Element wäre.
    - Für _Anker-positionierte Elemente_ gibt ein Prozentsatz innerhalb der {{cssxref("anchor()")}} Funktion den Abstand als Prozentsatz vom Anfang des Inhalts des Elements entlang der Blockachse an.
    - Für _relativ positionierte Elemente_, der Abstand des Elements von seiner normalen Position ist basierend auf der {{Cssxref("top")}} Eigenschaft; oder wenn `top` ebenfalls `auto` ist, wird das Element überhaupt nicht vertikal verschoben.

- `inherit`
  - : Gibt an, dass der Wert derselbe wie der berechnete Wert des übergeordneten Elements ist (das möglicherweise nicht sein umschließender Block ist). Dieser berechnete Wert wird dann so behandelt, als wäre er ein {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, oder das `auto` Schlüsselwort.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Absolute und feste Positionierung

Dieses Beispiel demonstriert den Unterschied im Verhalten der `bottom`-Eigenschaft, wenn {{cssxref("position")}} auf `absolute` versus `fixed` gesetzt ist.

#### HTML

```html
<p>
  This<br />is<br />some<br />tall,<br />tall,<br />tall,<br />tall,<br />tall<br />content.
</p>
<div class="fixed"><p>Fixed</p></div>
<div class="absolute"><p>Absolute</p></div>
```

#### CSS

```css
p {
  font-size: 30px;
  line-height: 2em;
}

div {
  width: 48%;
  text-align: center;
  background: rgb(55 55 55 / 20%);
  border: 1px solid blue;
}

.absolute {
  position: absolute;
  bottom: 0;
  left: 0;
}

.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
}
```

#### Ergebnis

{{EmbedLiveSample('Absolute_and_fixed_positioning','500','250')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("inset")}} verkürzte verwandte Eigenschaften: {{cssxref("top")}}, {{cssxref("left")}}, und {{cssxref("right")}}
- Die zugeordneten logischen Eigenschaften: {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, und {{cssxref("inset-inline-end")}} sowie die Kurzformen {{cssxref("inset-block")}} und {{cssxref("inset-inline")}}
- {{cssxref("position")}}
