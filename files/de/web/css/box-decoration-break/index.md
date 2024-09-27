---
title: box-decoration-break
slug: Web/CSS/box-decoration-break
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{CSSRef}}

Die **`box-decoration-break`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie die [Fragmente](/de/docs/Web/CSS/CSS_fragmentation) eines Elements gerendert werden sollen, wenn sie über mehrere Linien, Spalten oder Seiten gebrochen werden.

{{EmbedInteractiveExample("pages/css/box-decoration-break.html")}}

Der festgelegte Wert beeinflusst das Erscheinungsbild der folgenden Eigenschaften:

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

Die `box-decoration-break` Eigenschaft wird als eines der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `slice`
  - : Das Element wird zunächst gerendert, als ob sein Rahmen nicht fragmentiert wäre, wonach das Rendering für diesen hypothetischen Rahmen in Stücke für jede Zeile/Spalte/Seite aufgeteilt wird. Beachten Sie, dass der hypothetische Rahmen für jedes Fragment unterschiedlich sein kann, da er seine eigene Höhe verwendet, wenn der Bruch in Inline-Richtung auftritt, und seine eigene Breite, wenn der Bruch in Blockrichtung auftritt. Siehe die CSS-Spezifikation für Details.
- `clone`
  - : Jedes Rahmenfragment wird unabhängig mit dem angegebenen Rahmen, Padding und Rand gerendert, die jedes Fragment umschließen. Der {{ Cssxref("border-radius") }}, das {{ Cssxref("border-image") }} und der {{ Cssxref("box-shadow") }} werden unabhängig auf jedes Fragment angewendet. Der Hintergrund wird auch für jedes Fragment unabhängig gezeichnet, was bedeutet, dass ein Hintergrundbild mit {{ Cssxref("background-repeat", "background-repeat: no-repeat") }} dennoch mehrfach wiederholt werden kann.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Inline-Rahmenfragmente

Ein Inline-Element mit einer Rahmen-Dekoration kann ein unerwartetes Erscheinungsbild haben, wenn es Zeilenumbrüche enthält, aufgrund des anfänglichen Wertes `slice`.
Das folgende Beispiel zeigt die Auswirkung des Hinzufügens von `box-decoration-break: clone` zu einem {{htmlelement("span")}}, das {{htmlelement("br")}} Tags enthält:

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

### Block-Rahmenfragmente

Das folgende Beispiel zeigt, wie Blockelemente mit Rahmen-Dekoration aussehen, wenn sie Zeilenumbrüche in einem [Mehrspalten-Layout](/de/docs/Learn/CSS/CSS_layout/Multiple-column_Layout) enthalten.
Beachten Sie, wie das Ergebnis von `box-decoration-break: slice` dem ersten {{htmlelement("div")}} entsprechen würde, wenn es vertikal gestapelt wäre.

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
