---
title: links
slug: Web/CSS/left
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{CSSRef}}

Die **`left`** [CSS](/de/docs/Web/CSS) Eigenschaft beteiligt sich an der Festlegung der horizontalen Position eines [positionierten Elements](/de/docs/Web/CSS/position). Diese {{glossary("inset properties", "Einfügeigenschaft")}} hat keine Wirkung auf nicht positionierte Elemente.

{{EmbedInteractiveExample("pages/css/left.html")}}

## Syntax

```css
/* <length> Werte */
left: 3px;
left: 2.4em;
left: calc(anchor(right) + 20px);
left: anchor(--myAnchor 50%);

/* <percentage>% der Breite des enthaltenden Blocks */
left: 10%;

/* Schlüsselwortwert */
left: auto;

/* Globale Werte */
left: inherit;
left: initial;
left: revert;
left: revert-layer;
left: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}

  - : Ein negativer, null oder positiver {{cssxref("&lt;length&gt;")}}, der darstellt:

    - für _absolut positionierte Elemente_, den Abstand zur linken Kante des enthaltenden Blocks.
    - für [_ankerpositionierte Elemente_](/de/docs/Web/CSS/CSS_anchor_positioning/Using#using_inset_properties_with_anchor_function_values) löst die {{cssxref("anchor()")}}-Funktion den {{cssxref("&lt;length&gt;")}} Wert relativ zur Position der zugehörigen _Ankerelement_-Seite "left" oder "right" auf.
    - für _relativ positionierte Elemente_, den Abstand, um den das Element nach rechts von seiner normalen Position bewegt wird.

- {{cssxref("&lt;percentage&gt;")}}
  - : Ein {{cssxref("&lt;percentage&gt;")}} der Breite des enthaltenden Blocks.
- `auto`

  - : Gibt an, dass:

    - für _absolut positionierte Elemente_, die Position des Elements auf der {{Cssxref("right")}} Eigenschaft basiert, während `width: auto` als Breite basierend auf dem Inhalt behandelt wird; oder wenn `right` ebenfalls `auto` ist, wird das Element dort positioniert, wo es horizontal positioniert werden sollte, wenn es ein statisches Element wäre.
    - für _relativ positionierte Elemente_, der Abstand des Elements von seiner normalen Position basierend auf der {{Cssxref("right")}} Eigenschaft; oder wenn `right` ebenfalls `auto` ist, wird das Element überhaupt nicht horizontal bewegt.

- `inherit`
  - : Gibt an, dass der Wert derselbe ist wie der berechnete Wert des Elternelements (das möglicherweise nicht der enthaltende Block ist). Dieser berechnete Wert wird dann behandelt, als ob es ein {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}} oder das Schlüsselwort `auto` wäre.

## Beschreibung

Die Wirkung von `left` hängt davon ab, wie das Element positioniert ist (d. h. vom Wert der {{cssxref("position")}} Eigenschaft):

- Wenn `position` auf `absolute` oder `fixed` gesetzt ist, gibt die `left` Eigenschaft den Abstand zwischen dem äußeren Rand der linken Kante des Elements und dem inneren Rand der linken Kante seines enthaltenden Blocks an. (Der enthaltende Block ist der Vorfahre, auf den das Element relativ positioniert ist.) Wenn das positionierte Element ein zugehöriges [_Ankerelement_](/de/docs/Web/CSS/CSS_anchor_positioning/Using) hat und der Eigenschaftswert eine {{cssxref("anchor()")}} Funktion enthält, positioniert `left` die linke Kante des positionierten Elements relativ zur Position der angegebenen [`<anchor-side>`](/de/docs/Web/CSS/anchor#anchor-side) Kante. Die `left` Eigenschaft ist [kompatibel](/de/docs/Web/CSS/anchor#compatibility_of_inset_properties_and_anchor-side_values) mit den Werten `left`, `right`, `start`, `end`, `self-start`, `self-end`, `center` und `<percentage>`.
- Wenn `position` auf `relative` gesetzt ist, gibt die `left` Eigenschaft den Abstand an, um den die linke Kante des Elements von ihrer normalen Position nach rechts bewegt wird.
- Wenn `position` auf `sticky` gesetzt ist, wird die `left` Eigenschaft verwendet, um das sticky-constraint Rechteck zu berechnen.
- Wenn `position` auf `static` gesetzt ist, hat die `left` Eigenschaft _keine Wirkung_.

Wenn sowohl `left` als auch {{cssxref("right")}} definiert sind und keine Breitenbeschränkungen dies verhindern, dehnt sich das Element aus, um beide zu erfüllen. Wenn das Element sich nicht so ausdehnen kann, dass beide erfüllt werden, ist die Position des Elements _überspezifiziert_. In diesem Fall hat der `left` Wert Vorrang, wenn der Container von links nach rechts verläuft; der `right` Wert hat Vorrang, wenn der Container von rechts nach links verläuft.

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
      Das einzige enthaltene Element für dieses div ist das Hauptfenster, daher positioniert es sich in Bezug dazu.
    </p>
  </div>

  <div id="example_2">
    <pre>
      position: relative;
      top: 0;
      right: 0;
    </pre>
    <p>Relative Position in Bezug auf seine Geschwister.</p>
  </div>

  <div id="example_3">
    <pre>
      float: right;
      position: relative;
      top: 20px;
      left: 20px;
    </pre>
    <p>Relativ zu seinem obigen Geschwister-div, aber vom Inhaltfluss entfernt.</p>

    <div id="example_4">
      <pre>
        position: absolute;
        bottom: 10px;
        right: 20px;
      </pre>
      <p>Absolute Position innerhalb eines Elternteils mit relativer Position</p>
    </div>

    <div id="example_5">
      <pre>
        position: absolute;
        right: 0;
        left: 0;
        top: 200px;
      </pre>
      <p>Absolute Position mit sowohl links als auch rechts deklariert</p>
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

- {{cssxref("inset")}}, die Kurzform für alle zugehörigen Eigenschaften: {{cssxref("top")}}, {{cssxref("bottom")}} und {{cssxref("right")}}
- Die zugeordneten logischen Eigenschaften: {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}} und {{cssxref("inset-inline-end")}} sowie die Kurzformen {{cssxref("inset-block")}} und {{cssxref("inset-inline")}}
- {{cssxref("position")}}
