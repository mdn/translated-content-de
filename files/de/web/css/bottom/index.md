---
title: bottom
slug: Web/CSS/bottom
l10n:
  sourceCommit: da659b5d4f75b66804d97c80ec7c89b8792d7389
---

{{CSSRef}}

Die **`bottom`** [CSS](/de/docs/Web/CSS) Eigenschaft spielt eine Rolle bei der Festlegung der vertikalen Position eines [positionierten Elements](/de/docs/Web/CSS/position). Diese {{Glossary("inset_properties", "Inset-Eigenschaft")}} hat keine Auswirkungen auf nicht positionierte Elemente.

{{EmbedInteractiveExample("pages/css/bottom.html")}}

Die Wirkung von `bottom` hängt davon ab, wie das Element positioniert ist (d. h. dem Wert der {{cssxref("position")}} Eigenschaft):

- Wenn `position` auf `absolute` oder `fixed` gesetzt ist, spezifiziert die `bottom` Eigenschaft den Abstand zwischen dem äußeren Rand des unteren [Marginalbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) des Elements und dem äußeren Rand der unteren Polsterung des enthaltenden Blocks oder, im Fall von [Positionierung mit Ankerpunkt](/de/docs/Web/CSS/CSS_anchor_positioning/Using) wenn die {{cssxref("anchor()")}} Funktion innerhalb des Wertes verwendet wird, relativ zur Position der angegebenen [`<anchor-side>`](/de/docs/Web/CSS/anchor#anchor-side) Kante. Die `bottom` Eigenschaft ist [kompatibel](/de/docs/Web/CSS/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit den Werten `top`, `bottom`, `start`, `end`, `self-start`, `self-end`, `center` und `<percentage>`.
- Wenn `position` auf `relative` gesetzt ist, spezifiziert die `bottom` Eigenschaft die Distanz, die sich die Unterkante des Elements über seine normale Position bewegt.
- Wenn `position` auf `sticky` gesetzt ist, wird die `bottom` Eigenschaft verwendet, um das Sticky-Constraint-Rechteck zu berechnen.
- Wenn `position` auf `static` gesetzt ist, hat die `bottom` Eigenschaft _keine Wirkung_.

Wenn sowohl {{cssxref("top")}} als auch `bottom` angegeben sind, `position` auf `absolute` oder `fixed` gesetzt ist _und_ {{cssxref("height")}} nicht angegeben ist (entweder `auto` oder `100%`), werden sowohl die `top` als auch die `bottom` Abstände berücksichtigt. In allen anderen Situationen, wenn {{cssxref("height")}} in irgendeiner Weise eingeschränkt ist oder `position` auf `relative` gesetzt ist, hat die `top` Eigenschaft Vorrang und die `bottom` Eigenschaft wird ignoriert.

## Syntax

```css
/* <length> values */
bottom: 3px;
bottom: 2.4em;
bottom: calc(anchor(--myAnchor 50%) + 5px);
bottom: anchor-size(width);

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

  - : Eine negative, null oder positive {{cssxref("&lt;length&gt;")}}:

    - für _absolut positionierte Elemente_, repräsentiert es den Abstand zur unteren Kante des enthaltenden Blocks.
    - für _relativ positionierte Elemente_, repräsentiert es den Abstand, um den das Element über seine normale Position hinaus verschoben wird.
    - für _mit Ankerpunkt positionierte Elemente_, löst die {{cssxref("anchor()")}} Funktion sich in einen {{cssxref("&lt;length&gt;")}} Wert auf, relativ zur Position der oberen oder unteren Kante des zugehörigen _Ankerelements_ (siehe [Verwendung von Inset-Eigenschaften mit `anchor()` Funktionswerten](/de/docs/Web/CSS/CSS_anchor_positioning/Using#using_inset_properties_with_anchor_function_values)), und die {{cssxref("anchor-size()")}} Funktion löst sich in einen {{cssxref("&lt;length&gt;")}} Wert auf, relativ zur Breite oder Höhe des zugehörigen Ankerelements (siehe [Festlegen der Elementposition basierend auf der Ankergröße](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_element_position_based_on_anchor_size)).

- {{cssxref("&lt;percentage&gt;")}}
  - : Ein {{cssxref("&lt;percentage&gt;")}} der Höhe des enthaltenden Blocks.
- `auto`

  - : Spezifiziert, dass:

    - für _absolut positionierte Elemente_, basiert die Position des Elements auf der {{Cssxref("top")}} Eigenschaft, während `height: auto` als eine auf den Inhalt basierende Höhe behandelt wird; oder wenn `top` ebenfalls `auto` ist, wird das Element dort positioniert, wo es vertikal positioniert sein würde, wenn es ein statisches Element wäre.
    - für _relativ positionierte Elemente_, basiert der Abstand des Elements von seiner normalen Position auf der {{Cssxref("top")}} Eigenschaft; oder wenn `top` ebenfalls `auto` ist, wird das Element überhaupt nicht vertikal verschoben.

- `inherit`
  - : Gibt an, dass der Wert derselbe ist wie der berechnete Wert des Elternelements (das möglicherweise nicht sein enthaltender Block ist). Dieser berechnete Wert wird dann behandelt, als wäre er ein {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, oder das `auto` Schlüsselwort.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Absolute und feste Positionierung

Dieses Beispiel zeigt den Unterschied im Verhalten der `bottom` Eigenschaft, wenn {{cssxref("position")}} `absolute` im Gegensatz zu `fixed` ist.

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

- {{cssxref("top")}}, {{cssxref("left")}}, und {{cssxref("right")}}
- {{cssxref("inset")}} Kurzform
- {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, und {{cssxref("inset-inline-end")}}
- {{cssxref("inset-block")}} und {{cssxref("inset-inline")}} Kurzformen
- {{cssxref("position")}}
- [CSS Positionierte Layouts](/de/docs/Web/CSS/CSS_positioned_layout) Modul
