---
title: bottom
slug: Web/CSS/Reference/Properties/bottom
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

Die **`bottom`**-Eigenschaft von [CSS](/de/docs/Web/CSS) beteiligt sich an der Festlegung der vertikalen Position eines [positionierten Elements](/de/docs/Web/CSS/Reference/Properties/position). Diese {{Glossary("inset_properties", "Inset-Eigenschaft")}} hat keine Wirkung auf nicht positionierte Elemente.

{{InteractiveExample("CSS Demo: bottom")}}

```css interactive-example-choice
bottom: 0;
```

```css interactive-example-choice
bottom: 4em;
```

```css interactive-example-choice
bottom: 10%;
```

```css interactive-example-choice
bottom: 20px;
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

## Syntax

```css
/* <length> values */
bottom: 3px;
bottom: 2.4em;
bottom: calc(anchor(--my-anchor 50%) + 5px);
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
  - : Ein negativer, null oder positiver {{cssxref("&lt;length&gt;")}}:
    - für _absolut positionierte Elemente_ stellt er die Distanz zur unteren Kante des umgebenden Blocks dar.
    - für _relativ positionierte Elemente_ stellt er die Distanz dar, um die das Element über seine normale Position hinaus verschoben wird.
    - für _anker-positionierte Elemente_ löst sich die {{cssxref("anchor()")}}-Funktion in einen {{cssxref("&lt;length&gt;")}}-Wert relativ zur Position der oberen oder unteren Kante des zugehörigen _Ankerelements_ auf (siehe [Verwenden von Inset-Eigenschaften mit `anchor()`-Funktionswerten](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#using_inset_properties_with_anchor_function_values)), und die {{cssxref("anchor-size()")}}-Funktion löst sich in einen {{cssxref("&lt;length&gt;")}}-Wert relativ zur Breite oder Höhe des zugehörigen Ankerelements auf (siehe [Festlegen der Elementposition basierend auf Ankergröße](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#setting_element_position_based_on_anchor_size)).

- {{cssxref("&lt;percentage&gt;")}}
  - : Ein {{cssxref("&lt;percentage&gt;")}} der Höhe des umgebenden Blocks.
- `auto`
  - : Gibt an, dass:
    - für _absolut positionierte Elemente_ die Position des Elements auf der {{cssxref("top")}}-Eigenschaft basiert, während `height: auto` als Höhe basierend auf dem Inhalt behandelt wird; oder wenn `top` ebenfalls `auto` ist, wird das Element dort positioniert, wo es vertikal stehen sollte, wenn es ein statisches Element wäre.
    - für _relativ positionierte Elemente_ die Distanz des Elements von seiner normalen Position auf der {{cssxref("top")}}-Eigenschaft basiert; oder wenn `top` ebenfalls `auto` ist, wird das Element überhaupt nicht vertikal verschoben.

## Beschreibung

Die Wirkung von `bottom` hängt davon ab, wie das Element positioniert ist (d.h. vom Wert der {{cssxref("position")}}-Eigenschaft):

- Wenn `position` auf `absolute` oder `fixed` gesetzt ist, gibt die `bottom`-Eigenschaft die Distanz zwischen der äußeren Kante des unteren Randes des Elements und der äußeren Kante des unteren Innenabstandes des umgebenden Blocks an, oder im Fall von [anker-positionierten Elementen](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) wenn die {{cssxref("anchor()")}}-Funktion innerhalb des Wertes verwendet wird, relativ zur Position der angegebenen [`<anchor-side>`](/de/docs/Web/CSS/Reference/Values/anchor#anchor-side)-Kante. Die `bottom`-Eigenschaft ist [kompatibel](/de/docs/Web/CSS/Reference/Values/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit den Werten `top`, `bottom`, `start`, `end`, `self-start`, `self-end`, `center` und `<percentage>`.
- Wenn `position` auf `relative` gesetzt ist, gibt die `bottom`-Eigenschaft die Distanz an, um die die untere Kante des Elements über seine normale Position hinaus verschoben wird.
- Wenn `position` auf `sticky` gesetzt ist, wird die `bottom`-Eigenschaft verwendet, um das klebrige Beschränkungsrechteck zu berechnen.
- Wenn `position` auf `static` gesetzt ist, hat die `bottom`-Eigenschaft _keine Wirkung_.

Wenn sowohl {{cssxref("top")}} als auch `bottom` angegeben sind und `position` auf `absolute` oder `fixed` gesetzt ist _und_ {{cssxref("height")}} nicht festgelegt ist (entweder `auto` oder `100%`), werden sowohl die `top`- als auch die `bottom`-Abstände respektiert. In allen anderen Situationen, wenn {{cssxref("height")}} in irgendeiner Weise eingeschränkt ist oder `position` auf `relative` gesetzt ist, hat die `top`-Eigenschaft Vorrang und die `bottom`-Eigenschaft wird ignoriert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Absolute und fixe Positionierung

Dieses Beispiel zeigt den Unterschied im Verhalten der `bottom`-Eigenschaft, wenn {{cssxref("position")}} `absolute` gegenüber `fixed` ist.

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
- [CSS Positioniertes Layout](/de/docs/Web/CSS/Guides/Positioned_layout) Modul
