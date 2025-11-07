---
title: top
slug: Web/CSS/Reference/Properties/top
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`top`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt die vertikale Position eines [positionierten Elements](/de/docs/Web/CSS/Reference/Properties/position) fest. Diese {{Glossary("inset_properties", "Inset-Eigenschaft")}} hat keinen Effekt auf nicht-positionierte Elemente.

{{InteractiveExample("CSS Demo: top")}}

```css interactive-example-choice
top: 0;
```

```css interactive-example-choice
top: 4em;
```

```css interactive-example-choice
top: 10%;
```

```css interactive-example-choice
top: 20px;
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

Die Wirkung von `top` hängt davon ab, wie das Element positioniert ist (d.h. der Wert der {{cssxref("position")}}-Eigenschaft):

- Wenn `position` auf `absolute` oder `fixed` gesetzt ist, gibt die `top`-Eigenschaft den Abstand zwischen dem äußeren Rand der oberen Kante des Elements und dem inneren Rand der oberen Kante seines umschließenden Blocks an oder, im Fall von [anker-positionierten Elementen](/de/docs/Web/CSS/Guides/Anchor_positioning/Using), wenn die {{cssxref("anchor()")}}-Funktion innerhalb des Wertes verwendet wird, relativ zur angegebenen [`<anchor-side>`](/de/docs/Web/CSS/Reference/Values/anchor#anchor-side)-Kante. Die `top`-Eigenschaft ist [kompatibel](/de/docs/Web/CSS/Reference/Values/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit den Werten `top`, `bottom`, `start`, `end`, `self-start`, `self-end`, `center` und `<percentage>`.
- Wenn `position` auf `relative` gesetzt ist, gibt die `top`-Eigenschaft den Abstand an, den die obere Kante des Elements unterhalb seiner normalen Position verschoben wird.
- Wenn `position` auf `sticky` gesetzt ist, wird die `top`-Eigenschaft verwendet, um das sticky-Begrenzungsrechteck zu berechnen.
- Wenn `position` auf `static` gesetzt ist, hat die `top`-Eigenschaft _keinen Effekt_.

Wenn sowohl `top` als auch {{cssxref("bottom")}}-Werte angegeben sind, gibt es drei verschiedene Fälle:

- Wenn `position` auf `absolute` oder `fixed` gesetzt ist und {{cssxref("height")}} nicht spezifiziert ist (entweder `auto` oder `100%`), werden sowohl die `top`- als auch die `bottom`-Werte respektiert.
- Wenn `position` auf `relative` gesetzt ist oder `height` eingeschränkt ist, hat die `top`-Eigenschaft Vorrang und die `bottom`-Eigenschaft wird ignoriert.
- Wenn `position` auf `sticky` gesetzt ist, werden sowohl `top`- als auch `bottom`-Werte berücksichtigt. Dies bedeutet, dass sich ein Sticky-Element potenziell aufwärts und abwärts innerhalb seines umschließenden Blocks bewegen kann, basierend auf den Werten dieser beiden Eigenschaften, solange sich das Positionsfeld des Elements innerhalb seines umschließenden Blocks befindet.

## Syntax

```css
/* <length> values */
top: 3px;
top: 2.4em;
top: anchor(bottom);
top: anchor-size(--my-anchor self-block, 10%);

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

  - : Eine negative, null oder positive {{cssxref("&lt;length&gt;")}}:
    - für _absolut positionierte Elemente_ stellt es den Abstand zur oberen Kante des umschließenden Blocks dar.
    - für _anker-positionierte Elemente_ löst sich die {{cssxref("anchor()")}}-Funktion zu einem {{cssxref("&lt;length&gt;")}}-Wert relativ zur Position der oberen oder unteren Kante des zugehörigen _Ankerelements_ auf (siehe [Verwendung von Inset-Eigenschaften mit `anchor()`-Funktionswerten](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#using_inset_properties_with_anchor_function_values)), und die {{cssxref("anchor-size()")}}-Funktion löst sich zu einem {{cssxref("&lt;length&gt;")}}-Wert relativ zur Breite oder Höhe des zugehörigen Ankerelements auf (siehe [Festlegung der Elementposition basierend auf der Ankergröße](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#setting_element_position_based_on_anchor_size)).
    - für _relativ positionierte Elemente_ stellt es den Abstand dar, um den das Element unterhalb seiner normalen Position verschoben wird.

- {{cssxref("&lt;percentage&gt;")}}
  - : Ein {{cssxref("&lt;percentage&gt;")}} der Höhe des umschließenden Blocks.
- `auto`
  - : Gibt an, dass:
    - für _absolut positionierte Elemente_ die Position des Elements basierend auf der {{Cssxref("bottom")}}-Eigenschaft festgelegt wird, während `height: auto` als Höhe basierend auf dem Inhalt behandelt wird; oder wenn `bottom` ebenfalls `auto` ist, wird das Element dort positioniert, wo es vertikal positioniert werden sollte, wenn es sich um ein statisches Element handelt.
    - für _relativ positionierte Elemente_ basiert der Abstand des Elements von seiner normalen Position auf der {{Cssxref("bottom")}}-Eigenschaft; oder wenn `bottom` ebenfalls `auto` ist, wird das Element überhaupt nicht vertikal bewegt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ein positioniertes Element, das 10 % von oben gesetzt ist

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
- {{cssxref("inset")}} Kurznotation
- {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, und {{cssxref("inset-inline-end")}}
- {{cssxref("inset-block")}} und {{cssxref("inset-inline")}} Kurznotationen
- {{cssxref("position")}}
- [CSS positioniertes Layout](/de/docs/Web/CSS/Guides/Positioned_layout) Modul
