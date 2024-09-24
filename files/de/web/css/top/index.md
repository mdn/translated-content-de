---
title: oben
slug: Web/CSS/top
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{CSSRef}}

Die **`top`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt die vertikale Position eines [positionierten Elements](/de/docs/Web/CSS/position) fest. Diese {{glossary("inset properties", "Inlet-Eigenschaft")}} hat keine Auswirkungen auf nicht-positionierte Elemente.

{{EmbedInteractiveExample("pages/css/top.html")}}

Die Wirkung von `top` hängt davon ab, wie das Element positioniert ist (d. h. vom Wert der {{cssxref("position")}}-Eigenschaft):

- Wenn `position` auf `absolute` oder `fixed` gesetzt ist, gibt die `top`-Eigenschaft den Abstand zwischen dem äußeren Rand der oberen Kante des Elements und der inneren Grenze der oberen Kante seines umgebenden Blocks an oder, im Fall von [ankergepositionierten Elementen](/de/docs/Web/CSS/CSS_anchor_positioning/Using), wenn die {{cssxref("anchor()")}}-Funktion innerhalb des Werts verwendet wird, relativ zur angegebenen [`<anchor-side>`](/de/docs/Web/CSS/anchor#anchor-side) Kante. Die `top`-Eigenschaft ist [kompatibel](/de/docs/Web/CSS/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit den Werten `top`, `bottom`, `start`, `end`, `self-start`, `self-end`, `center` und `<percentage>`.
- Wenn `position` auf `relative` gesetzt ist, gibt die `top`-Eigenschaft den Abstand an, um den die obere Kante des Elements unterhalb seiner normalen Position verschoben wird.
- Wenn `position` auf `sticky` gesetzt ist, wird die `top`-Eigenschaft verwendet, um das klebrige Begrenzungsrechteck zu berechnen.
- Wenn `position` auf `static` gesetzt ist, hat die `top`-Eigenschaft _keine Auswirkung_.

Wenn sowohl `top` als auch {{cssxref("bottom")}}-Werte angegeben sind, gibt es drei verschiedene Fälle:

- Wenn `position` auf `absolute` oder `fixed` gesetzt ist und {{cssxref("height")}} nicht angegeben ist (entweder `auto` oder `100%`), werden sowohl die `top`- als auch die `bottom`-Werte berücksichtigt.
- Wenn `position` auf `relative` gesetzt ist oder `height` eingeschränkt ist, hat die `top`-Eigenschaft Vorrang und die `bottom`-Eigenschaft wird ignoriert.
- Wenn `position` auf `sticky` gesetzt ist, werden sowohl `top`- als auch `bottom`-Werte berücksichtigt. Das bedeutet, dass ein klebriges Element basierend auf den Werten dieser beiden Eigenschaften innerhalb seines umgebenden Blocks potenziell nach oben und unten bewegt werden kann, solange die Position des Elements innerhalb seines umgebenden Blocks bleibt.

## Syntax

```css
/* <length> Werte */
top: 3px;
top: 2.4em;
top: anchor(bottom);
top: calc(anchor(--myAnchor 50%) + 10px);

/* <percentage> eines Teils der Höhe des umgebenden Blocks */
top: 10%;

/* Schlüsselwortwert */
top: auto;

/* Globale Werte */
top: inherit;
top: initial;
top: revert;
top: revert-layer;
top: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}

  - : Ein negativer, null oder positiver {{cssxref("&lt;length&gt;")}}, der darstellt:

    - für _absolut positionierte Elemente_ den Abstand zur oberen Kante des umgebenden Blocks.
    - für [_ankergepositionierte Elemente_](/de/docs/Web/CSS/CSS_anchor_positioning/Using#using_inset_properties_with_anchor_function_values), dass die {{cssxref("anchor()")}}-Funktion zu einem {{cssxref("&lt;length&gt;")}}-Wert relativ zur Position der oberen oder unteren Kante des zugehörigen _Ankerelements_ aufgelöst wird.
    - für _relativ positionierte Elemente_ den Abstand, um den das Element unterhalb seiner normalen Position verschoben wird.

- {{cssxref("&lt;percentage&gt;")}}
  - : Ein {{cssxref("&lt;percentage&gt;")}} der Höhe des umgebenden Blocks.
- `auto`

  - : Gibt an, dass:

    - für _absolut positionierte Elemente_ die Position des Elements basierend auf der {{Cssxref("bottom")}}-Eigenschaft erfolgt, während `height: auto` als Höhe basierend auf dem Inhalt behandelt wird; oder wenn `bottom` ebenfalls `auto` ist, wird das Element dort positioniert, wo es vertikal wäre, wenn es ein statisches Element wäre.
    - für _relativ positionierte Elemente_ der Abstand des Elements von seiner normalen Position basierend auf der {{Cssxref("bottom")}}-Eigenschaft erfolgt; oder wenn `bottom` ebenfalls `auto` ist, wird das Element überhaupt nicht vertikal verschoben.

- `inherit`
  - : Gibt an, dass der Wert derselbe ist wie der berechnete Wert des übergeordneten Elements (das möglicherweise nicht sein umgebender Block ist). Dieser berechnete Wert wird dann behandelt, als ob er ein {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}} oder das `auto`-Schlüsselwort wäre.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ein positioniertes Element, das 10% von oben eingestellt ist

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
<div>Die Größe dieses Inhalts wird durch die Position seiner Kanten bestimmt.</div>
```

{{EmbedLiveSample('Examples','100%','200')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("inset")}}, die Abkürzung für alle zugehörigen Eigenschaften: {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("right")}}
- Die zugeordneten logischen Eigenschaften: {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}} und {{cssxref("inset-inline-end")}} und die Abkürzungen {{cssxref("inset-block")}} und {{cssxref("inset-inline")}}
- {{cssxref("position")}}
