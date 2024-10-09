---
title: left
slug: Web/CSS/left
l10n:
  sourceCommit: 9a3940b0231838338f65ae1c37d5b874439a3d43
---

{{CSSRef}}

Die **`left`** [CSS](/de/docs/Web/CSS) Eigenschaft beteiligt sich an der Spezifikation der horizontalen Position eines [positionierten Elements](/de/docs/Web/CSS/position). Diese {{Glossary("inset_properties", "Inset-Eigenschaft")}} hat keine Auswirkung auf nicht-positionierte Elemente.

{{EmbedInteractiveExample("pages/css/left.html")}}

## Syntax

```css
/* <length> values */
left: 3px;
left: 2.4em;
left: calc(anchor(right) + 20px);
left: anchor(--myAnchor 50%);

/* <percentage>s of the width of the containing block */
left: 10%;

/* Keyword value */
left: auto;

/* Global values */
left: inherit;
left: initial;
left: revert;
left: revert-layer;
left: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}

  - : Eine negative, null oder positive {{cssxref("&lt;length&gt;")}}, die repräsentiert:

    - für _absolut positionierte Elemente_ den Abstand zur linken Kante des umschließenden Blocks.
    - für [_Anker-positionierte Elemente_](/de/docs/Web/CSS/CSS_anchor_positioning/Using#using_inset_properties_with_anchor_function_values) die {{cssxref("anchor()")}} Funktion, die sich zu einem {{cssxref("&lt;length&gt;")}} Wert relativ zur Position der linken oder rechten Kante des zugehörigen _Ankerelements_ auflöst.
    - für _relativ positionierte Elemente_ den Abstand, den das Element von seiner normalen Position nach rechts verschoben wird.

- {{cssxref("&lt;percentage&gt;")}}
  - : Ein {{cssxref("&lt;percentage&gt;")}} der Breite des umschließenden Blocks.
- `auto`

  - : Gibt an, dass:

    - für _absolut positionierte Elemente_ die Position des Elements auf der {{Cssxref("right")}} Eigenschaft basiert, während `width: auto` als eine auf dem Inhalt basierende Breite behandelt wird; oder wenn `right` ebenfalls `auto` ist, das Element dort positioniert wird, wo es horizontal positioniert wäre, wenn es ein statisches Element wäre.
    - für _relativ positionierte Elemente_ der Abstand des Elements von seiner normalen Position auf der {{Cssxref("right")}} Eigenschaft basiert; oder wenn `right` ebenfalls `auto` ist, das Element überhaupt nicht horizontal verschoben wird.

- `inherit`
  - : Gibt an, dass der Wert derselbe ist wie der berechnete Wert des Elternelements (das möglicherweise nicht der umschließende Block ist). Dieser berechnete Wert wird dann behandelt, als ob er ein {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}} oder das `auto` Schlüsselwort wäre.

## Beschreibung

Die Wirkung von `left` hängt davon ab, wie das Element positioniert ist (d.h., der Wert der {{cssxref("position")}} Eigenschaft):

- Wenn `position` auf `absolute` oder `fixed` gesetzt ist, gibt die `left` Eigenschaft den Abstand zwischen dem äußeren Rand der linken Kante des Elements und dem inneren Rand der linken Kante seines umschließenden Blocks an. (Der umschließende Block ist der Vorfahre, relativ zu dem das Element positioniert ist.) Wenn das positionierte Element ein zugehöriges [_Ankerelement_](/de/docs/Web/CSS/CSS_anchor_positioning/Using) hat und der Eigenschaftswert eine {{cssxref("anchor()")}} Funktion enthält, positioniert `left` die linke Kante des positionierten Elements relativ zur Position der angegebenen [`<anchor-side>`](/de/docs/Web/CSS/anchor#anchor-side) Kante. Die `left` Eigenschaft ist [kompatibel](/de/docs/Web/CSS/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit den Werten `left`, `right`, `start`, `end`, `self-start`, `self-end`, `center` und `<percentage>`.
- Wenn `position` auf `relative` gesetzt ist, gibt die `left` Eigenschaft den Abstand an, den die linke Kante des Elements von seiner normalen Position nach rechts verschoben wird.
- Wenn `position` auf `sticky` gesetzt ist, wird die `left` Eigenschaft verwendet, um das sticky-constraint Rechteck zu berechnen.
- Wenn `position` auf `static` gesetzt ist, hat die `left` Eigenschaft _keine Auswirkung_.

Wenn sowohl `left` als auch {{cssxref("right")}} definiert sind und Breitenbeschränkungen dies nicht verhindern, wird das Element gedehnt, um beide zu erfüllen. Wenn das Element nicht gedehnt werden kann, um beide zu erfüllen, ist die Position des Elements _überbestimmt_. In diesem Fall hat der `left` Wert Vorrang, wenn das Container von links nach rechts ausgerichtet ist; der `right` Wert hat Vorrang, wenn das Container von rechts nach links ausgerichtet ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Positionierung von Elementen

#### HTML

```html
<div id="wrap">
  <div id="example_1">
    <pre>
      position: absolute;
      left: 20px;
      top: 20px;
    </pre>
    <p>
      The only containing element for this div is the main window, so it
      positions itself in relation to it.
    </p>
  </div>

  <div id="example_2">
    <pre>
      position: relative;
      top: 0;
      right: 0;
    </pre>
    <p>Relative position in relation to its siblings.</p>
  </div>

  <div id="example_3">
    <pre>
      float: right;
      position: relative;
      top: 20px;
      left: 20px;
    </pre>
    <p>Relative to its sibling div above, but removed from flow of content.</p>

    <div id="example_4">
      <pre>
        position: absolute;
        bottom: 10px;
        right: 20px;
      </pre>
      <p>Absolute position inside of a parent with relative position</p>
    </div>

    <div id="example_5">
      <pre>
        position: absolute;
        right: 0;
        left: 0;
        top: 200px;
      </pre>
      <p>Absolute position with both left and right declared</p>
    </div>
  </div>
</div>
```

#### CSS

```css
#wrap {
  width: 700px;
  margin: 0 auto;
  background: #5c5c5c;
}

pre {
  white-space: pre;
  white-space: pre-wrap;
  white-space: pre-line;
  word-wrap: break-word;
}

#example_1 {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 20px;
  top: 20px;
  background-color: #d8f5ff;
}

#example_2 {
  width: 200px;
  height: 200px;
  position: relative;
  top: 0;
  right: 0;
  background-color: #c1ffdb;
}
#example_3 {
  width: 600px;
  height: 400px;
  position: relative;
  top: 20px;
  left: 20px;
  background-color: #ffd7c2;
}

#example_4 {
  width: 200px;
  height: 200px;
  position: absolute;
  bottom: 10px;
  right: 20px;
  background-color: #ffc7e4;
}
#example_5 {
  position: absolute;
  right: 0;
  left: 0;
  top: 100px;
  background-color: #d7ffc2;
}
```

#### Ergebnis

{{EmbedLiveSample('Positioning_elements',1200,650)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("top")}}, {{cssxref("bottom")}}, und {{cssxref("right")}}
- {{cssxref("inset")}} Kurzschreibweise
- {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, und {{cssxref("inset-inline-end")}}
- {{cssxref("inset-block")}} und {{cssxref("inset-inline")}} Kurzschreibweisen
- {{cssxref("position")}}
- [CSS positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout) Modul
