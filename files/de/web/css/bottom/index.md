---
title: bottom
slug: Web/CSS/bottom
l10n:
  sourceCommit: 09c431e017263c263558df1821f187f76660dde9
---

{{CSSRef}}

Die **`bottom`** [CSS](/de/docs/Web/CSS) Eigenschaft beteiligt sich an der Definition der vertikalen Position eines [positionierten Elements](/de/docs/Web/CSS/position). Diese {{glossary("inset properties", "inset property")}} hat keine Wirkung auf nicht-positionierte Elemente.

{{EmbedInteractiveExample("pages/css/bottom.html")}}

Die Wirkung von `bottom` hängt davon ab, wie das Element positioniert ist (d.h. der Wert der {{cssxref("position")}} Eigenschaft):

- Wenn `position` auf `absolute` oder `fixed` gesetzt ist, gibt die `bottom` Eigenschaft den Abstand zwischen dem äußeren Rand des [unteren Rands](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) des Elements und dem äußeren Rand des unteren Polsters des umgebenden Blocks an oder, im Fall von [Anker-positionierten Elementen](/de/docs/Web/CSS/CSS_anchor_positioning/Using) wenn die {{cssxref("anchor()")}} Funktion innerhalb des Wertes verwendet wird, relativ zur Position der angegebenen [`<anchor-side>`](/de/docs/Web/CSS/anchor#anchor-side) Kante. Die `bottom` Eigenschaft ist [kompatibel](/de/docs/Web/CSS/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit den Werten `top`, `bottom`, `start`, `end`, `self-start`, `self-end`, `center` und `<percentage>`.
- Wenn `position` auf `relative` gesetzt ist, gibt die `bottom` Eigenschaft den Abstand an, um den die untere Kante des Elements über seine normale Position verschoben wird.
- Wenn `position` auf `sticky` gesetzt ist, wird die `bottom` Eigenschaft zur Berechnung des Sticky-Beschränkungsrechtecks verwendet.
- Wenn `position` auf `static` gesetzt ist, hat die `bottom` Eigenschaft _keine Wirkung_.

Wenn sowohl {{cssxref("top")}} als auch `bottom` angegeben sind, `position` auf `absolute` oder `fixed` gesetzt ist _und_ {{cssxref("height")}} nicht angegeben ist (entweder `auto` oder `100%`), werden sowohl die `top` als auch die `bottom` Entfernungen berücksichtigt. In allen anderen Situationen, wenn {{cssxref("height")}} auf irgendeine Weise eingeschränkt ist oder `position` auf `relative` gesetzt ist, hat die `top` Eigenschaft Vorrang und die `bottom` Eigenschaft wird ignoriert.

## Syntax

```css
/* <length> Werte */
bottom: 3px;
bottom: 2.4em;
bottom: anchor(top);
bottom: calc(anchor(--myAnchor 50%) + 5px);

/* <percentage>s der Höhe des umgebenden Blocks */
bottom: 10%;

/* Stichwortwert */
bottom: auto;

/* Globale Werte */
bottom: inherit;
bottom: initial;
bottom: revert;
bottom: revert-layer;
bottom: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}

  - : Ein negativer, null oder positiver {{cssxref("&lt;length&gt;")}} der Folgendes darstellt:

    - für _absolut positionierte Elemente_, der Abstand zur unteren Kante des umgebenden Blocks.
    - für _relativ positionierte Elemente_, der Abstand, um den das Element über seine normale Position verschoben wird.
    - für [_Anker-positionierte Elemente_](/de/docs/Web/CSS/CSS_anchor_positioning/Using#using_inset_properties_with_anchor_function_values), die {{cssxref("anchor()")}} Funktion löst sich zu einem {{cssxref("&lt;length&gt;")}} Wert relativ zur Position der oberen oder unteren Kante des _Ankerelements_.

- {{cssxref("&lt;percentage&gt;")}}
  - : Ein {{cssxref("&lt;percentage&gt;")}} der Höhe des umgebenden Blocks.
- `auto`

  - : Gibt an, dass:

    - für _absolut positionierte Elemente_, die Position des Elements auf der {{Cssxref("top")}} Eigenschaft basiert, während `height: auto` als eine Höhenangabe basierend auf dem Inhalt behandelt wird; oder wenn `top` ebenfalls `auto` ist, wird das Element an der Stelle positioniert, an der es sich befinden würde, wenn es ein statisches Element wäre.
    - für _Anker-positionierte Elemente_, ein Prozentsatz innerhalb der {{cssxref("anchor()")}} Funktion gibt die Entfernung, als Prozentsatz, vom Anfang des Inhalts des Elements entlang der Blockachse an.
    - für _relativ positionierte Elemente_, die Entfernung des Elements von seiner normalen Position auf der {{Cssxref("top")}} Eigenschaft basiert; oder wenn `top` ebenfalls `auto` ist, wird das Element überhaupt nicht vertikal bewegt.

- `inherit`
  - : Gibt an, dass der Wert dem berechneten Wert seines Elternelements entspricht (welches möglicherweise nicht sein umgebender Block ist). Dieser berechnete Wert wird dann behandelt, als wäre er ein {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, oder das `auto` Schlüsselwort.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Absolute und feste Positionierung

Dieses Beispiel zeigt den Unterschied im Verhalten der `bottom` Eigenschaft, wenn {{cssxref("position")}} `absolute` im Vergleich zu `fixed` ist.

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

- {{cssxref("inset")}} verwandte verkürzte Eigenschaften: {{cssxref("top")}}, {{cssxref("left")}}, und {{cssxref("right")}}
- Die zugeordneten logischen Eigenschaften: {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, und {{cssxref("inset-inline-end")}} und die Kurzbezeichnungen {{cssxref("inset-block")}} und {{cssxref("inset-inline")}}
- {{cssxref("position")}}
