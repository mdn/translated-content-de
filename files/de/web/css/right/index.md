---
title: right
slug: Web/CSS/right
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{CSSRef}}

Die **`right`** [CSS](/de/docs/Web/CSS)-Eigenschaft beteiligt sich an der Festlegung der horizontalen Position eines [positionierten Elements](/de/docs/Web/CSS/position). Diese {{glossary("inset properties", "Inset-Eigenschaft")}} hat keine Auswirkungen auf nicht positionierte Elemente.

{{EmbedInteractiveExample("pages/css/right.html")}}

## Syntax

```css
/* <length> Werte */
right: 3px;
right: 2.4em;
right: calc(anchor(left) + 10px);
right: anchor(--myAnchor 50%);

/* <percentage>s der Breite des enthaltenden Blocks */
right: 10%;

/* Schlüsselwortwert */
right: auto;

/* Globale Werte */
right: inherit;
right: initial;
right: revert;
right: revert-layer;
right: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}

  - : Ein negativer, null oder positiver {{cssxref("&lt;length&gt;")}}, der repräsentiert:

    - für _absolut positionierte Elemente_, den Abstand zur rechten Kante des enthaltenden Blocks.
    - für [_Anker-positionierte Elemente_](/de/docs/Web/CSS/CSS_anchor_positioning/Using#using_inset_properties_with_anchor_function_values), die {{cssxref("anchor()")}}-Funktion löst sich zu einem {{cssxref("&lt;length&gt;")}}-Wert relativ zur Position der linken oder rechten Kante des zugehörigen _Ankerelements_ auf.
    - für _relativ positionierte Elemente_, den Abstand, um den das Element von seiner normalen Position nach links verschoben wird.

- {{cssxref("&lt;percentage&gt;")}}
  - : Ein {{cssxref("&lt;percentage&gt;")}} der Breite des enthaltenden Blocks.
- `auto`

  - : Gibt an, dass:

    - für _absolut positionierte Elemente_, die Position des Elements auf der {{Cssxref("left")}}-Eigenschaft basiert, während `width: auto` als Breite basierend auf dem Inhalt behandelt wird; oder wenn `left` ebenfalls `auto` ist, das Element dort positioniert wird, wo es horizontal positioniert wäre, wenn es ein statisches Element wäre.
    - für _relativ positionierte Elemente_, der Abstand des Elements von seiner normalen Position auf der {{Cssxref("left")}}-Eigenschaft basiert; oder wenn `left` ebenfalls `auto` ist, das Element horizontal überhaupt nicht verschoben wird.

- `inherit`
  - : Gibt an, dass der Wert derselbe ist wie der berechnete Wert des übergeordneten Elements (das möglicherweise nicht sein enthaltender Block ist). Dieser berechnete Wert wird dann behandelt, als wäre es ein {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, oder das Schlüsselwort `auto`.

## Beschreibung

Die Wirkung von `right` hängt davon ab, wie das Element positioniert ist (d. h. vom Wert der {{cssxref("position")}}-Eigenschaft):

- Wenn `position` auf `absolute` oder `fixed` gesetzt ist, gibt die `right`-Eigenschaft den Abstand zwischen dem äußeren Rand der rechten Kante des Elements und der inneren Grenze der rechten Kante seines enthaltenden Blocks an. Wenn das positionierte Element ein zugehöriges [_Ankerelement_](/de/docs/Web/CSS/CSS_anchor_positioning/Using) hat und der Eigenschaftswert eine {{cssxref("anchor()")}}-Funktion enthält, wird `right` relativ zur angegebenen [`<anchor-side>`](/de/docs/Web/CSS/anchor#anchor-side) Kante positioniert. Die `right`-Eigenschaft ist [kompatibel](/de/docs/Web/CSS/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit den Werten `left`, `right`, `start`, `end`, `self-start`, `self-end`, `center` und `<percentage>`.
- Wenn `position` auf `relative` gesetzt ist, gibt die `right`-Eigenschaft den Abstand an, um den die rechte Kante des Elements von ihrer normalen Position nach links verschoben wird.
- Wenn `position` auf `sticky` gesetzt ist, wird die `right`-Eigenschaft verwendet, um das Sticky-Constraint-Rechteck zu berechnen.
- Wenn `position` auf `static` gesetzt ist, hat die `right`-Eigenschaft _keinen Effekt_.

Wenn sowohl {{cssxref("left")}} als auch `right` definiert sind, streckt sich das Element, um beide zu erfüllen, falls dies durch andere Eigenschaften nicht verhindert wird. Wenn sich das Element nicht strecken kann, um beide zu erfüllen — zum Beispiel, wenn eine `width` deklariert ist —, ist die Position des Elements _überbestimmt_. In diesem Fall hat der `left`-Wert Vorrang, wenn das Container von links nach rechts ist; der `right`-Wert hat Vorrang, wenn das Container von rechts nach links ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Absolute und relative Positionierung mit right

#### HTML

```html
<div id="relative">Relativ positioniert</div>
<div id="absolute">Absolut positioniert</div>
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

### Deklarieren von sowohl left als auch right

Wenn sowohl `left` als auch `right` deklariert sind, streckt sich das Element, um beide zu erfüllen, es sei denn, andere Einschränkungen verhindern dies. Wenn sich das Element nicht strecken oder verkleinern wird, um beide zu erfüllen. Wenn die Position des Elements _überbestimmt_ ist, wird die Priorität basierend auf der Richtung des Containers festgelegt: `left` hat Vorrang, wenn die Richtung des Containers links-rechts ist. `right` hat Vorrang, wenn die Richtung des Containers rechts-links ist.

#### HTML

```html
<div id="parent">
  Parent
  <div id="noWidth">Keine Breite</div>
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
/* sowohl left als auch right deklarieren */
#width,
#noWidth {
  background-color: #c2ffd7;
  position: absolute;
  left: 0;
  right: 0;
}
/* eine Breite deklarieren */
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

- {{cssxref("inset")}}, die Kurzform für alle verwandten Eigenschaften: {{cssxref("top")}}, {{cssxref("bottom")}}, und {{cssxref("left")}}
- Die zugeordneten logischen Eigenschaften: {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, und {{cssxref("inset-inline-end")}} und die Kurzformen {{cssxref("inset-block")}} und {{cssxref("inset-inline")}}
- {{cssxref("position")}}
