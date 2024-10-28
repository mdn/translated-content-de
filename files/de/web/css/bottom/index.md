---
title: bottom
slug: Web/CSS/bottom
l10n:
  sourceCommit: c749deb4ccb647d792deee4807d4852104bedd9d
---

{{CSSRef}}

Die **`bottom`** [CSS](/de/docs/Web/CSS) Eigenschaft beteiligt sich an der Festlegung der vertikalen Position eines [positionierten Elements](/de/docs/Web/CSS/position). Diese {{Glossary("inset_properties", "Einsetzeigenschaft")}} hat keine Auswirkung auf nicht positionierte Elemente.

{{EmbedInteractiveExample("pages/css/bottom.html")}}

Die Wirkung von `bottom` hängt davon ab, wie das Element positioniert ist (d.h. der Wert der {{cssxref("position")}} Eigenschaft):

- Wenn `position` auf `absolute` oder `fixed` gesetzt ist, gibt die `bottom` Eigenschaft den Abstand zwischen dem äußeren Rand des [unteren Rands](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) des Elements und dem äußeren Rand des unteren Innenabstands des umschließenden Blocks an, oder im Fall von [ankerpositionierten Elementen](/de/docs/Web/CSS/CSS_anchor_positioning/Using) bei Verwendung der {{cssxref("anchor()")}} Funktion relativ zur Position der angegebenen [`<anchor-side>`](/de/docs/Web/CSS/anchor#anchor-side) Kante. Die `bottom` Eigenschaft ist [kompatibel](/de/docs/Web/CSS/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit den Werten `top`, `bottom`, `start`, `end`, `self-start`, `self-end`, `center`, und `<percentage>`.
- Wenn `position` auf `relative` gesetzt ist, gibt die `bottom` Eigenschaft den Abstand an, um den die untere Kante des Elements über seine normale Position verschoben ist.
- Wenn `position` auf `sticky` gesetzt ist, wird die `bottom` Eigenschaft zur Berechnung des Sticky-Einschränkungs-Rechtecks verwendet.
- Wenn `position` auf `static` gesetzt ist, hat die `bottom` Eigenschaft _keine Wirkung_.

Wenn sowohl {{cssxref("top")}} als auch `bottom` angegeben sind, `position` auf `absolute` oder `fixed` gesetzt ist, _und_ {{cssxref("height")}} nicht angegeben ist (entweder `auto` oder `100%`), werden sowohl die `top` als auch die `bottom` Abstände beachtet. In allen anderen Situationen, wenn {{cssxref("height")}} in irgendeiner Weise eingeschränkt ist oder `position` auf `relative` gesetzt ist, hat die `top` Eigenschaft Vorrang, und die `bottom` Eigenschaft wird ignoriert.

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

  - : Ein negativer, null, oder positiver {{cssxref("&lt;length&gt;")}}, der repräsentiert:

    - für _absolut positionierte Elemente_, den Abstand zur unteren Kante des umschließenden Blocks.
    - für _relativ positionierte Elemente_, den Abstand, um den das Element über seine normale Position verschoben ist.
    - für [_ankerpositionierte Elemente_](/de/docs/Web/CSS/CSS_anchor_positioning/Using#using_inset_properties_with_anchor_function_values) löst sich die {{cssxref("anchor()")}} Funktion zu einem {{cssxref("&lt;length&gt;")}}-Wert relativ zur Position der oberen oder unteren Kante des zugehörigen _Ankerelements_ auf.

- {{cssxref("&lt;percentage&gt;")}}
  - : Ein {{cssxref("&lt;percentage&gt;")}} der Höhe des umschließenden Blocks.
- `auto`

  - : Gibt an, dass:

    - für _absolut positionierte Elemente_, die Position des Elements auf der {{Cssxref("top")}} Eigenschaft basiert, während `height: auto` als Höhe basierend auf dem Inhalt behandelt wird; oder wenn `top` auch `auto` ist, wird das Element an der Stelle positioniert, an der es vertikal sein sollte, wenn es ein statisches Element wäre.
    - für _anker positionierte Elemente_, ein Prozentsatz innerhalb der {{cssxref("anchor()")}} Funktion gibt den Abstand als Prozentsatz vom Anfang des Inhalts des Elements entlang der Blockachse an.
    - für _relativ positionierte Elemente_, der Abstand des Elements von seiner normalen Position auf der {{Cssxref("top")}} Eigenschaft basiert; oder wenn `top` auch `auto` ist, wird das Element überhaupt nicht vertikal verschoben.

- `inherit`
  - : Gibt an, dass der Wert derselbe wie der berechnete Wert seines Elternelements ist (das möglicherweise nicht sein umschließender Block ist). Dieser berechnete Wert wird dann so behandelt, als wäre es ein {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, oder das `auto` Schlüsselwort.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Absolute und feste Positionierung

Dieses Beispiel demonstriert den Unterschied im Verhalten der `bottom` Eigenschaft, wenn {{cssxref("position")}} auf `absolute` versus `fixed` gesetzt ist.

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
- [CSS positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout) Modul
