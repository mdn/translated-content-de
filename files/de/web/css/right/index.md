---
title: right
slug: Web/CSS/right
l10n:
  sourceCommit: da659b5d4f75b66804d97c80ec7c89b8792d7389
---

{{CSSRef}}

Die **`right`** [CSS](/de/docs/Web/CSS) Eigenschaft beteiligt sich an der Angabe der horizontalen Position eines [positionierten Elements](/de/docs/Web/CSS/position). Diese {{Glossary("inset_properties", "inset property")}} hat keine Auswirkungen auf nicht positionierte Elemente.

{{EmbedInteractiveExample("pages/css/right.html")}}

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

    - für _absolut positionierte Elemente_ repräsentiert es die Entfernung zur rechten Kante des umgebenden Blocks.
    - für _Anker-positionierte Elemente_ wird die {{cssxref("anchor()")}} Funktion in einen {{cssxref("&lt;length&gt;")}} Wert relativ zur Position der linken oder rechten Kante des zugehörigen _Ankerelements_ aufgelöst (siehe [Verwendung von Inset-Eigenschaften mit `anchor()` Funktionswerten](/de/docs/Web/CSS/CSS_anchor_positioning/Using#using_inset_properties_with_anchor_function_values)), und die {{cssxref("anchor-size()")}} Funktion wird in einen {{cssxref("&lt;length&gt;")}} Wert relativ zur Breite oder Höhe des verbundenen Ankerelements aufgelöst (siehe [Positionierung von Elementen basierend auf der Ankergröße](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_element_position_based_on_anchor_size)).
    - für _relativ positionierte Elemente_ repräsentiert es die Entfernung, um die das Element von seiner normalen Position nach links verschoben wird.

- {{cssxref("&lt;percentage&gt;")}}
  - : Ein {{cssxref("&lt;percentage&gt;")}} der Breite des umgebenden Blocks.
- `auto`

  - : Gibt an, dass:

    - für _absolut positionierte Elemente_ die Position des Elements basierend auf der {{Cssxref("left")}} Eigenschaft erfolgt, während `width: auto` als Breite basierend auf dem Inhalt behandelt wird; oder wenn `left` ebenfalls `auto` ist, wird das Element so positioniert, wie es horizontal positioniert werden sollte, wenn es sich um ein statisches Element handeln würde.
    - für _relativ positionierte Elemente_ die Entfernung des Elements von seiner normalen Position basierend auf der {{Cssxref("left")}} Eigenschaft erfolgt; oder wenn `left` ebenfalls `auto` ist, wird das Element überhaupt nicht horizontal bewegt.

- `inherit`
  - : Gibt an, dass der Wert derselbe wie der berechnete Wert seines Elternelements ist (welches möglicherweise nicht der umgebende Block ist). Dieser berechnete Wert wird dann behandelt, als ob er ein {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}} oder das `auto` Schlüsselwort wäre.

## Beschreibung

Die Wirkung von `right` hängt davon ab, wie das Element positioniert ist (d.h. vom Wert der {{cssxref("position")}} Eigenschaft):

- Wenn `position` auf `absolute` oder `fixed` gesetzt ist, gibt die `right` Eigenschaft die Entfernung zwischen dem äußeren Rand der rechten Kante des Elements und der inneren Grenze der rechten Kante seines umgebenden Blocks an. Wenn das positionierte Element ein zugeordnetes [_Ankerelement_](/de/docs/Web/CSS/CSS_anchor_positioning/Using) hat und der Eigenschaftswert eine {{cssxref("anchor()")}} Funktion umfasst, positioniert `right` die rechte Kante des positionierten Elements relativ zur angegebenen [`<anchor-side>`](/de/docs/Web/CSS/anchor#anchor-side) Kante. Die `right` Eigenschaft ist [kompatibel](/de/docs/Web/CSS/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit den Werten `left`, `right`, `start`, `end`, `self-start`, `self-end`, `center` und `<percentage>`.
- Wenn `position` auf `relative` gesetzt ist, gibt die `right` Eigenschaft die Entfernung an, um die die rechte Kante des Elements von seiner normalen Position nach links bewegt wird.
- Wenn `position` auf `sticky` gesetzt ist, wird die `right` Eigenschaft verwendet, um das sticky-constraint Rechteck zu berechnen.
- Wenn `position` auf `static` gesetzt ist, hat die `right` Eigenschaft _keinen Effekt_.

Wenn sowohl {{cssxref("left")}} als auch `right` definiert sind, und nicht durch andere Eigenschaften daran gehindert werden, wird das Element sich strecken, um beide zu erfüllen. Wenn das Element sich nicht strecken kann, um beide zu erfüllen — zum Beispiel, wenn eine `width` deklariert ist —, ist die Position des Elements _überbestimmt_. In diesem Fall hat der `left` Wert Vorrang, wenn das Container von links nach rechts ist; der `right` Wert hat Vorrang, wenn das Container von rechts nach links ist.

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

### Deklaration von both left and right

Wenn sowohl `left` als auch `right` deklariert sind, wird das Element gestreckt, um beide zu erfüllen, es sei denn, andere Einschränkungen verhindern es. Wenn das Element sich nicht strecken oder schrumpfen wird, um beide zu erfüllen. Wenn die Position des Elements _überbestimmt_ ist, basiert der Vorrang auf der Richtung des Containers: Der `left` hat Vorrang, wenn die Richtung des Containers von links nach rechts ist. Der `right` hat Vorrang, wenn die Richtung des Containers von rechts nach links ist.

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
- {{cssxref("inset")}} Kurzform
- {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, und {{cssxref("inset-inline-end")}}
- {{cssxref("inset-block")}} und {{cssxref("inset-inline")}} Kurzformen
- {{cssxref("position")}}
- [CSS positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout) Modul
