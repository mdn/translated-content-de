---
title: box-decoration-break
slug: Web/CSS/box-decoration-break
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{CSSRef}}

Die **`box-decoration-break`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie die [Fragmente](/de/docs/Web/CSS/CSS_fragmentation) eines Elements dargestellt werden sollen, wenn sie über mehrere Zeilen, Spalten oder Seiten gebrochen werden.

{{EmbedInteractiveExample("pages/css/box-decoration-break.html")}}

Der angegebene Wert beeinflusst das Erscheinungsbild der folgenden Eigenschaften:

- {{Cssxref("background")}}
- {{Cssxref("border")}}
- {{Cssxref("border-image")}}
- {{Cssxref("box-shadow")}}
- {{Cssxref("clip-path")}}
- {{Cssxref("margin")}}
- {{Cssxref("padding")}}

## Syntax

```css
/* Keyword values */
box-decoration-break: slice;
box-decoration-break: clone;

/* Global values */
box-decoration-break: inherit;
box-decoration-break: initial;
box-decoration-break: revert;
box-decoration-break: revert-layer;
box-decoration-break: unset;
```

Die `box-decoration-break` Eigenschaft wird als einer der unten aufgelisteten Schlüsselwortwerte angegeben.

### Werte

- `slice`
  - : Das Element wird zunächst gerendert, als ob seine Box nicht fragmentiert wäre, danach wird das Rendering dieses hypothetischen Kastens in Stücke für jede Zeile/Spalte/Seite geschnitten. Beachten Sie, dass der hypothetische Kasten für jedes Fragment unterschiedlich sein kann, da er seine eigene Höhe verwendet, wenn der Bruch in der Inline-Richtung auftritt, und seine eigene Breite, wenn der Bruch in der Blockrichtung auftritt. Siehe die CSS-Spezifikation für Details.
- `clone`
  - : Jedes Kastenfragment wird unabhängig mit dem angegebenen Rand, der Polsterung und dem Abstand gerendert, die jedes Fragment umgeben. Der {{ Cssxref("border-radius") }}, {{ Cssxref("border-image") }} und {{ Cssxref("box-shadow") }} werden auf jedes Fragment unabhängig angewendet. Der Hintergrund wird ebenfalls unabhängig für jedes Fragment gezeichnet, was bedeutet, dass ein Hintergrundbild mit {{ Cssxref("background-repeat", "background-repeat: no-repeat") }} trotzdem mehrfach wiederholt werden kann.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Inline-Kastenfragmente

Ein Inline-Element mit einer Kastendekoration kann ein unerwartetes Erscheinungsbild haben, wenn es Zeilenumbrüche enthält, aufgrund des anfänglichen `slice` Wertes. Das folgende Beispiel zeigt die Wirkung von `box-decoration-break: clone` auf einen {{htmlelement("span")}}, der {{htmlelement("br")}} Tags enthält:

```css hidden
body {
  display: flex;
  background-color: grey;
  justify-content: space-around;
}

span {
  padding: 0em 1em;
  border-radius: 1rem;
  border-style: solid;
  margin: 1rem;
  font: 22px sans-serif;
  line-height: 2;
}
```

```css
span {
  background: linear-gradient(to bottom right, yellow, green);
  box-shadow:
    8px 8px 10px 0px deeppink,
    -5px -5px 5px 0px blue,
    5px 5px 15px 0px yellow;
}

#clone {
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}
```

```html
<p>
  <span>The<br />quick<br />orange fox</span>
</p>
<p>
  <span id="clone">The<br />quick<br />orange fox</span>
</p>
```

{{embedlivesample("inline_box_fragments", "100%", "210")}}

### Block-Kastenfragmente

Das folgende Beispiel zeigt, wie Blockelemente mit Kastendekoration aussehen, wenn sie Zeilenumbrüche in einem [Multi-Spalten-Layout](/de/docs/Learn/CSS/CSS_layout/Multiple-column_Layout) enthalten. Beachten Sie, wie das Ergebnis von `box-decoration-break: slice` das Äquivalent des ersten {{htmlelement("div")}} wäre, wenn sie vertikal gestapelt wären.

```css hidden
body {
  background-color: grey;
}
span {
  padding: 0em 2em;
  border-radius: 250px;
  border-style: solid;
  margin-left: 1em;
  font: 20px sans-serif;
  line-height: 1.5;
}
```

```css
span {
  display: block;
  background: linear-gradient(to bottom right, yellow, green);
  box-shadow:
    inset 8px 8px 10px 0px deeppink,
    inset -5px -5px 5px 0px blue,
    inset 5px 5px 15px 0px yellow;
}
#base {
  width: 33%;
}
.columns {
  columns: 3;
}

.clone {
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}
```

```html
<div id="base">
  <span>The<br />quick<br />orange fox</span>
</div>
<br />

<h2>'box-decoration-break: slice'</h2>
<div class="columns">
  <span>The<br />quick<br />orange fox</span>
</div>

<h2>'box-decoration-break: clone'</h2>
<div class="columns">
  <span class="clone">The<br />quick<br />orange fox</span>
</div>
```

{{embedlivesample("block_box_fragments", "", "340")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("break-after")}}, {{cssxref("break-before")}}, {{cssxref("break-inside")}}
