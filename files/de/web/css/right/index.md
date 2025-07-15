---
title: right
slug: Web/CSS/right
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`right`**-Eigenschaft von [CSS](/de/docs/Web/CSS) ist an der Spezifikation der horizontalen Position eines [positionierten Elements](/de/docs/Web/CSS/position) beteiligt. Diese {{Glossary("inset_properties", "Einrückungseigenschaft")}} hat keine Auswirkung auf nicht positionierte Elemente.

{{InteractiveExample("CSS Demo: right")}}

```css interactive-example-choice
right: 0;
```

```css interactive-example-choice
right: 4em;
```

```css interactive-example-choice
right: 10%;
```

```css interactive-example-choice
right: 20px;
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
right: 3px;
right: 2.4em;
right: anchor(--myAnchor 50%);
right: anchor-size(--myAnchor height, 65px);

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
  - : Ein negativer, null oder positiver {{cssxref("&lt;length&gt;")}}:
    - für _absolut positionierte Elemente_ repräsentiert es die Entfernung zur rechten Kante des enthaltenden Blocks.
    - für _ankerpositionierte Elemente_ wird die {{cssxref("anchor()")}}-Funktion zu einem {{cssxref("&lt;length&gt;")}}-Wert relativ zur Position der linken oder rechten Kante des zugehörigen _anker Elements_ aufgelöst (siehe [Verwendung von Einrückungseigenschaften mit `anchor()`-Funktionswerten](/de/docs/Web/CSS/CSS_anchor_positioning/Using#using_inset_properties_with_anchor_function_values)), und die {{cssxref("anchor-size()")}}-Funktion wird zu einem {{cssxref("&lt;length&gt;")}}-Wert relativ zur Breite oder Höhe des zugehörigen Ankerelements aufgelöst (siehe [Festlegen der Elementposition basierend auf der Ankergröße](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_element_position_based_on_anchor_size)).
    - für _relativ positionierte Elemente_ repräsentiert es die Entfernung, um die das Element nach links von seiner normalen Position verschoben wird.

- {{cssxref("&lt;percentage&gt;")}}
  - : Ein {{cssxref("&lt;percentage&gt;")}} der Breite des enthaltenden Blocks.
- `auto`
  - : Gibt an, dass:
    - für _absolut positionierte Elemente_ die Position des Elements auf der {{cssxref("left")}}-Eigenschaft basiert, während `width: auto` als eine auf dem Inhalt basierende Breite behandelt wird; oder wenn `left` ebenfalls `auto` ist, wird das Element dort positioniert, wo es horizontal positioniert wäre, wenn es ein statisches Element wäre.
    - für _relativ positionierte Elemente_ die Entfernung des Elements von seiner normalen Position auf der {{cssxref("left")}}-Eigenschaft basiert; oder wenn `left` ebenfalls `auto` ist, wird das Element überhaupt nicht horizontal verschoben.

## Beschreibung

Die Wirkung von `right` hängt davon ab, wie das Element positioniert ist (d.h. der Wert der {{cssxref("position")}}-Eigenschaft):

- Wenn `position` auf `absolute` oder `fixed` gesetzt ist, gibt die `right`-Eigenschaft die Entfernung zwischen dem äußeren Rand der rechten Kante des Elements und dem inneren Rand der rechten Kante seines enthaltenden Blocks an. Wenn das positionierte Element ein zugehöriges [_Ankerelement_](/de/docs/Web/CSS/CSS_anchor_positioning/Using) hat und der Eigenschaftswert eine {{cssxref("anchor()")}}-Funktion enthält, positioniert `right` die rechte Kante des positionierten Elements relativ zur angegebenen [`<anchor-side>`](/de/docs/Web/CSS/anchor#anchor-side)-Kante. Die `right`-Eigenschaft ist [kompatibel](/de/docs/Web/CSS/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit den Werten `left`, `right`, `start`, `end`, `self-start`, `self-end`, `center` und `<percentage>`.
- Wenn `position` auf `relative` gesetzt ist, gibt die `right`-Eigenschaft die Entfernung an, die die rechte Kante des Elements von ihrer normalen Position nach links verschoben wird.
- Wenn `position` auf `sticky` gesetzt ist, wird die `right`-Eigenschaft zur Berechnung des Sticky-Begrenzungsrechtecks verwendet.
- Wenn `position` auf `static` gesetzt ist, hat die `right`-Eigenschaft _keine Wirkung_.

Wenn sowohl {{cssxref("left")}} als auch `right` definiert sind, dehnt sich das Element aus, um beiden zu genügen, es sei denn, andere Eigenschaften verhindern dies. Kann sich das Element nicht ausdehnen, um beiden zu genügen — zum Beispiel, wenn eine `width` deklariert ist — wird die Position des Elements _überbestimmt_. In diesem Fall hat der `left`-Wert Vorrang, wenn der Container von links nach rechts ausgerichtet ist; der `right`-Wert hat Vorrang, wenn der Container von rechts nach links ausgerichtet ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Absolute und relative Positionierung mit right

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

### Deklaration von sowohl left als auch right

Wenn sowohl `left` als auch `right` deklariert sind, dehnt sich das Element aus, um beiden gerecht zu werden, es sei denn, andere Einschränkungen verhindern dies. Wenn das Element sich nicht dehnen oder schrumpfen kann, um beiden gerecht zu werden, und die Position des Elements _überbestimmt_ ist, basiert die Priorität auf der Richtung des Containers: `left` hat Vorrang, wenn die Richtung des Containers von links nach rechts ist. `right` hat Vorrang, wenn die Richtung des Containers von rechts nach links ist.

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

- {{cssxref("top")}}, {{cssxref("bottom")}}, und {{cssxref("left")}}
- {{cssxref("inset")}} Kurzschreibweise
- {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, und {{cssxref("inset-inline-end")}}
- {{cssxref("inset-block")}} und {{cssxref("inset-inline")}} Kurzschreibweisen
- {{cssxref("position")}}
- [CSS positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout) Modul
