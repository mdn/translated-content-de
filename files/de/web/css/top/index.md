---
title: top
slug: Web/CSS/top
l10n:
  sourceCommit: 9a3940b0231838338f65ae1c37d5b874439a3d43
---

{{CSSRef}}

Die **`top`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die vertikale Position eines [positionierten Elements](/de/docs/Web/CSS/position) fest. Diese {{Glossary("inset_properties", "Einsetzeigenschaft")}} hat keine Auswirkung auf nicht-positionierte Elemente.

{{EmbedInteractiveExample("pages/css/top.html")}}

Die Wirkung von `top` hängt davon ab, wie das Element positioniert ist (d.h. vom Wert der {{cssxref("position")}} Eigenschaft):

- Wenn `position` auf `absolute` oder `fixed` gesetzt ist, gibt die `top` Eigenschaft den Abstand zwischen dem äußeren Rand der oberen Kante des Elements und der inneren Grenze der oberen Kante seines enthaltenden Blocks an, oder, im Fall von [Anker-positionierten Elementen](/de/docs/Web/CSS/CSS_anchor_positioning/Using), wenn die {{cssxref("anchor()")}} Funktion innerhalb des Werts verwendet wird, relativ zu der angegebenen [`<anchor-side>`](/de/docs/Web/CSS/anchor#anchor-side) Kante. Die `top` Eigenschaft ist [kompatibel](/de/docs/Web/CSS/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit den Werten `top`, `bottom`, `start`, `end`, `self-start`, `self-end`, `center` und `<percentage>`.
- Wenn `position` auf `relative` gesetzt ist, gibt die `top` Eigenschaft den Abstand an, den die obere Kante des Elements unterhalb seiner normalen Position verschoben ist.
- Wenn `position` auf `sticky` gesetzt ist, wird die `top` Eigenschaft verwendet, um das Sticky-Beschränkungsrechteck zu berechnen.
- Wenn `position` auf `static` gesetzt ist, hat die `top` Eigenschaft _keine Wirkung_.

Wenn sowohl `top` als auch {{cssxref("bottom")}} Werte angegeben sind, gibt es drei verschiedene Fälle:

- Wenn `position` auf `absolute` oder `fixed` gesetzt ist und {{cssxref("height")}} ist nicht angegeben (entweder `auto` oder `100%`), werden sowohl die `top` als auch die `bottom` Werte beachtet.
- Wenn `position` auf `relative` gesetzt ist oder `height` eingeschränkt ist, hat die `top` Eigenschaft Vorrang und die `bottom` Eigenschaft wird ignoriert.
- Wenn `position` auf `sticky` gesetzt ist, werden sowohl `top` als auch `bottom` Werte berücksichtigt. Dies bedeutet, dass sich ein Sticky-Element potenziell auf und ab innerhalb seines enthaltenden Blocks bewegen kann, basierend auf den Werten dieser beiden Eigenschaften, solange die Positionsbox des Elements innerhalb seines enthaltenden Blocks bleibt.

## Syntax

```css
/* <length> values */
top: 3px;
top: 2.4em;
top: anchor(bottom);
top: calc(anchor(--myAnchor 50%) + 10px);

/* <percentage>s of the height of the containing block */
top: 10%;

/* Keyword value */
top: auto;

/* Global values */
top: inherit;
top: initial;
top: revert;
top: revert-layer;
top: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}

  - : Ein negativer, null oder positiver {{cssxref("&lt;length&gt;")}}, der darstellt:

    - für _absolut positionierte Elemente_, den Abstand zur oberen Kante des enthaltenden Blocks.
    - für [_Anker-positionierte Elemente_](/de/docs/Web/CSS/CSS_anchor_positioning/Using#using_inset_properties_with_anchor_function_values) löst sich die {{cssxref("anchor()")}} Funktion zu einem {{cssxref("&lt;length&gt;")}} Wert relativ zur Position der oberen oder unteren Kante des zugehörigen _Ankerelements_ auf.
    - für _relativ positionierte Elemente_, den Abstand, um den das Element unterhalb seiner normalen Position verschoben wird.

- {{cssxref("&lt;percentage&gt;")}}
  - : Ein {{cssxref("&lt;percentage&gt;")}} der Höhe des enthaltenden Blocks.
- `auto`

  - : Gibt an, dass:

    - für _absolut positionierte Elemente_, basiert die Position des Elements auf der {{Cssxref("bottom")}} Eigenschaft, während `height: auto` als eine Höhe basierend auf dem Inhalt behandelt wird; oder wenn `bottom` ebenfalls `auto` ist, wird das Element dort positioniert, wo es vertikal positioniert sein sollte, wenn es ein statisches Element wäre.
    - für _relativ positionierte Elemente_, basiert der Abstand des Elements von seiner normalen Position auf der {{Cssxref("bottom")}} Eigenschaft; oder wenn `bottom` ebenfalls `auto` ist, wird das Element überhaupt nicht vertikal verschoben.

- `inherit`
  - : Gibt an, dass der Wert derselbe ist wie der berechnete Wert des Elternelements (was nicht unbedingt der enthaltende Block sein muss). Dieser berechnete Wert wird dann behandelt, als wäre er ein {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, oder das `auto` Schlüsselwort.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ein positioniertes Element, das 10% von oben gesetzt ist

```css
body {
  background: beige;
}

div {
  position: absolute;
  top: 10%;
  right: 40%;
  bottom: 20%;
  left: 15%;
  background: gold;
  border: 1px solid blue;
}
```

```html
<div>The size of this content is determined by the position of its edges.</div>
```

{{EmbedLiveSample('Examples','100%','200')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("bottom")}}, {{cssxref("left")}}, und {{cssxref("right")}}
- {{cssxref("inset")}} Kurzform
- {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, und {{cssxref("inset-inline-end")}}
- {{cssxref("inset-block")}} und {{cssxref("inset-inline")}} Kurzformen
- {{cssxref("position")}}
- [CSS positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout) Modul
