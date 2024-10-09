---
title: bottom
slug: Web/CSS/bottom
l10n:
  sourceCommit: 9a3940b0231838338f65ae1c37d5b874439a3d43
---

{{CSSRef}}

Die **`bottom`**-Eigenschaft ([CSS](/de/docs/Web/CSS)) beteiligt sich an der Festlegung der vertikalen Position eines [positionierten Elements](/de/docs/Web/CSS/position). Diese {{Glossary("inset_properties", "Abstandseigenschaft")}} hat keine Wirkung auf nicht positionierte Elemente.

{{EmbedInteractiveExample("pages/css/bottom.html")}}

Die Wirkung von `bottom` hängt davon ab, wie das Element positioniert ist (d. h. vom Wert der {{cssxref("position")}}-Eigenschaft):

- Wenn `position` auf `absolute` oder `fixed` gesetzt ist, gibt die `bottom`-Eigenschaft den Abstand zwischen der Außenkante des unteren Randes des Elements und der Außenkante des unteren Innenabstands des umgebenden Blocks an, oder im Fall von [Anker-positionierten Elementen](/de/docs/Web/CSS/CSS_anchor_positioning/Using), wenn die {{cssxref("anchor()")}}-Funktion im Wert verwendet wird, relativ zur Position der angegebenen [`<anchor-side>`](/de/docs/Web/CSS/anchor#anchor-side)-Kante. Die `bottom`-Eigenschaft ist [kompatibel](/de/docs/Web/CSS/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit den Werten `top`, `bottom`, `start`, `end`, `self-start`, `self-end`, `center` und `<percentage>`.
- Wenn `position` auf `relative` gesetzt ist, gibt die `bottom`-Eigenschaft den Abstand an, um den die Unterkante des Elements über seine normale Position hinaus verschoben wird.
- Wenn `position` auf `sticky` gesetzt ist, wird die `bottom`-Eigenschaft zur Berechnung des klebrigen Beschränkungsrechtecks verwendet.
- Wenn `position` auf `static` gesetzt ist, hat die `bottom`-Eigenschaft _keine Wirkung_.

Wenn sowohl {{cssxref("top")}} als auch `bottom` angegeben sind, `position` auf `absolute` oder `fixed` gesetzt ist _und_ {{cssxref("height")}} nicht festgelegt ist (entweder `auto` oder `100%`), werden sowohl die `top`- als auch die `bottom`-Abstände berücksichtigt. In allen anderen Situationen, wenn {{cssxref("height")}} in irgendeiner Weise eingeschränkt ist oder `position` auf `relative` gesetzt ist, hat die `top`-Eigenschaft Vorrang, und die `bottom`-Eigenschaft wird ignoriert.

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

  - : Ein negativer, null oder positiver {{cssxref("&lt;length&gt;")}}, der Folgendes darstellt:

    - für _absolut positionierte Elemente_ den Abstand zur Unterkante des umgebenden Blocks.
    - für _relativ positionierte Elemente_ den Abstand, um den das Element über seine normale Position hinaus verschoben wird.
    - für [_Anker-positionierte Elemente_](/de/docs/Web/CSS/CSS_anchor_positioning/Using#using_inset_properties_with_anchor_function_values) löst sich die {{cssxref("anchor()")}}-Funktion in einen {{cssxref("&lt;length&gt;")}}-Wert relativ zur Position der oberen oder unteren Kante des zugehörigen _Ankerelements_ auf.

- {{cssxref("&lt;percentage&gt;")}}
  - : Ein {{cssxref("&lt;percentage&gt;")}} der Höhe des umgebenden Blocks.
- `auto`

  - : Gibt an, dass:

    - für _absolut positionierte Elemente_ die Position des Elements auf der {{Cssxref("top")}}-Eigenschaft basiert, während `height: auto` als höhenbasiert auf dem Inhalt behandelt wird; oder wenn `top` ebenfalls `auto` ist, wird das Element so positioniert, wie es vertikal positioniert wäre, wenn es ein statisches Element wäre.
    - für _Anker-positionierte Elemente_ eine Prozentzahl innerhalb der {{cssxref("anchor()")}}-Funktion den Abstand als Prozentsatz von dem Beginn des Inhalts entlang der Blockachse angibt.
    - für _relativ positionierte Elemente_ der Abstand des Elements von seiner normalen Position auf der {{Cssxref("top")}}-Eigenschaft basiert; oder wenn `top` ebenfalls `auto` ist, wird das Element überhaupt nicht vertikal verschoben.

- `inherit`
  - : Gibt an, dass der Wert derselbe ist wie der berechnete Wert seines Elternelements (welches möglicherweise nicht sein umgebender Block ist). Dieser berechnete Wert wird dann genauso behandelt, als wäre es ein {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}} oder das Schlüsselwort `auto`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Absolute und fixe Positionierung

Dieses Beispiel zeigt den Unterschied im Verhalten der `bottom`-Eigenschaft, wenn {{cssxref("position")}} `absolute` versus `fixed` ist.

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
- {{cssxref("inset")}} Kurzschreibweise
- {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, und {{cssxref("inset-inline-end")}}
- {{cssxref("inset-block")}} und {{cssxref("inset-inline")}} Kurzschreibweisen
- {{cssxref("position")}}
- [CSS positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout) Modul
