---
title: right
slug: Web/CSS/right
l10n:
  sourceCommit: 9a3940b0231838338f65ae1c37d5b874439a3d43
---

{{CSSRef}}

Die **`right`** [CSS](/de/docs/Web/CSS) Eigenschaft beteiligt sich an der Angabe der horizontalen Position eines [positionierten Elements](/de/docs/Web/CSS/position). Diese {{Glossary("inset_properties", "Einsetzeigenschaft")}} hat keine Auswirkung auf nicht-positionierte Elemente.

{{EmbedInteractiveExample("pages/css/right.html")}}

## Syntax

```css
/* <length> values */
right: 3px;
right: 2.4em;
right: calc(anchor(left) + 10px);
right: anchor(--myAnchor 50%);

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

  - : Eine negative, null oder positive {{cssxref("&lt;length&gt;")}}, die repräsentiert:

    - für _absolut positionierte Elemente_, die Entfernung zum rechten Rand des umgebenden Blocks.
    - für [_anker-positionierte Elemente_](/de/docs/Web/CSS/CSS_anchor_positioning/Using#using_inset_properties_with_anchor_function_values), die {{cssxref("anchor()")}} Funktion löst sich auf einen {{cssxref("&lt;length&gt;")}} Wert relativ zur Position des zugehörigen linken oder rechten Rands des _Ankerelements_ auf.
    - für _relativ positionierte Elemente_, die Entfernung, die das Element links von seiner normalen Position verschoben wird.

- {{cssxref("&lt;percentage&gt;")}}
  - : Ein {{cssxref("&lt;percentage&gt;")}} der Breite des umgebenden Blocks.
- `auto`

  - : Gibt an, dass:

    - für _absolut positionierte Elemente_, die Position des Elements basiert auf der {{Cssxref("left")}} Eigenschaft, während `width: auto` als Breite basierend auf dem Inhalt behandelt wird; oder wenn `left` ebenfalls `auto` ist, wird das Element dort positioniert, wo es horizontal positioniert sein sollte, wenn es ein statisches Element wäre.
    - für _relativ positionierte Elemente_, die Entfernung des Elements von seiner normalen Position basiert auf der {{Cssxref("left")}} Eigenschaft; oder wenn `left` auch `auto` ist, wird das Element überhaupt nicht horizontal verschoben.

- `inherit`
  - : Gibt an, dass der Wert derselbe ist wie der berechnete Wert von seinem Elternelement (das möglicherweise nicht der umgebende Block ist). Dieser berechnete Wert wird dann behandelt, als ob es ein {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}} oder das `auto` Schlüsselwort wäre.

## Beschreibung

Die Wirkung von `right` hängt davon ab, wie das Element positioniert ist (d. h. der Wert der {{cssxref("position")}} Eigenschaft):

- Wenn `position` auf `absolute` oder `fixed` gesetzt ist, gibt die `right` Eigenschaft die Entfernung zwischen der äußeren rechten Kante des Elements und der inneren rechten Kante seines umgebenden Blocks an. Wenn das positionierte Element ein zugehöriges [_Ankerelement_](/de/docs/Web/CSS/CSS_anchor_positioning/Using) hat und der Eigenschaftswert eine {{cssxref("anchor()")}} Funktion umfasst, positioniert `right` die rechte Kante des positionierten Elements relativ zur angegebenen [`<anchor-side>`](/de/docs/Web/CSS/anchor#anchor-side) Kante. Die `right` Eigenschaft ist [kompatibel](/de/docs/Web/CSS/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit den Werten `left`, `right`, `start`, `end`, `self-start`, `self-end`, `center` und `<percentage>`.
- Wenn `position` auf `relative` gesetzt ist, gibt die `right` Eigenschaft die Entfernung an, die die rechte Kante des Elements links von seiner normalen Position verschoben wird.
- Wenn `position` auf `sticky` gesetzt ist, wird die `right` Eigenschaft zur Berechnung des klebrigen Begrenzungsrechtecks verwendet.
- Wenn `position` auf `static` gesetzt ist, hat die `right` Eigenschaft _keine Auswirkung_.

Wenn sowohl {{cssxref("left")}} als auch `right` definiert sind, und dies nicht durch andere Eigenschaften verhindert wird, wird das Element sich dehnen, um beiden zu entsprechen. Wenn das Element nicht gedehnt werden kann, um beiden zu entsprechen — zum Beispiel, wenn eine `width` deklariert ist — ist die Position des Elements _überbestimmt_. In diesem Fall hat der `left` Wert Vorrang, wenn das Container links-nach-rechts ausgerichtet ist; der `right` Wert hat Vorrang, wenn das Container rechts-nach-links ausgerichtet ist.

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

### Deklarieren von left und right

Wenn sowohl `left` als auch `right` deklariert sind, wird das Element sich dehnen, um beiden zu entsprechen, es sei denn, andere Einschränkungen verhindern dies. Wenn das Element sich nicht dehnen oder schrumpfen wird, um beiden zu entsprechen. Wenn die Position des Elements _überspezifiziert_ ist, basiert die Priorität auf der Richtung des Containers: Das `left` wird Vorrang haben, wenn die Richtung des Containers links-nach-rechts ist. Das `right` wird Vorrang haben, wenn die Richtung des Containers rechts-nach-links ist.

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
- [CSS-positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout) Modul
