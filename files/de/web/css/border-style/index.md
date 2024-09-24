---
title: border-style
slug: Web/CSS/border-style
l10n:
  sourceCommit: 59593341146f085e57cec84f0928c7b7e18f3e97
---

{{CSSRef}}

Die **`border-style`** [Shorthand](/de/docs/Web/CSS/Shorthand_properties)-[CSS](/de/docs/Web/CSS)-Eigenschaft legt den Linienstil für alle vier Seiten eines Elemente-Rahmens fest.

{{EmbedInteractiveExample("pages/css/border-style.html")}}

## Bestandteil-Eigenschaften

Diese Eigenschaft ist eine Shorthand für die folgenden CSS-Eigenschaften:

- [`border-bottom-style`](/de/docs/Web/CSS/border-bottom-style)
- [`border-left-style`](/de/docs/Web/CSS/border-left-style)
- [`border-right-style`](/de/docs/Web/CSS/border-right-style)
- [`border-top-style`](/de/docs/Web/CSS/border-top-style)

## Syntax

```css
/* Schlüsselwort-Werte */
border-style: none;
border-style: hidden;
border-style: dotted;
border-style: dashed;
border-style: solid;
border-style: double;
border-style: groove;
border-style: ridge;
border-style: inset;
border-style: outset;

/* oben und unten | links und rechts */
border-style: dotted solid;

/* oben | links und rechts | unten */
border-style: hidden double dashed;

/* oben | rechts | unten | links */
border-style: none solid dotted dashed;

/* Globale Werte */
border-style: inherit;
border-style: initial;
border-style: revert;
border-style: revert-layer;
border-style: unset;
```

Die `border-style`-Eigenschaft kann mit einem, zwei, drei oder vier Werten angegeben werden.

- Wenn **ein** Wert angegeben wird, wird der gleiche Stil auf **alle vier Seiten** angewendet.
- Wenn **zwei** Werte angegeben werden, gilt der erste Stil für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben werden, gilt der erste Stil für **oben**, der zweite für **links und rechts**, der dritte für **unten**.
- Wenn **vier** Werte angegeben werden, gelten die Stile in der Reihenfolge (im Uhrzeigersinn) von **oben**, **rechts**, **unten** und **links**.

Jeder Wert ist ein Schlüsselwort, das aus der folgenden Liste ausgewählt werden kann.

### Werte

- `<line-style>`

  - : Beschreibt den Stil der Grenze. Es kann die folgenden Werte haben:

    - `none`
      - : Wie das Schlüsselwort `hidden`, wird keine Grenze angezeigt. Es sei denn, ein {{cssxref("background-image")}} ist gesetzt, wird der berechnete Wert der {{cssxref("border-width")}} der gleichen Seite `0` sein, auch wenn der angegebene Wert etwas anderes ist. Im Fall von Tabellenzellen und Randkollaps hat der `none`-Wert die _niedrigste_ Priorität: Wenn irgendein anderer kollidierender Rand gesetzt ist, wird er angezeigt.
    - `hidden`
      - : Wie das Schlüsselwort `none`, wird keine Grenze angezeigt. Es sei denn, ein {{cssxref("background-image")}} ist gesetzt, wird der berechnete Wert der {{cssxref("border-width")}} der gleichen Seite `0` sein, auch wenn der angegebene Wert etwas anderes ist. Im Fall von Tabellenzellen und Randkollaps hat der `hidden`-Wert die _höchste_ Priorität: Wenn irgendein anderer kollidierender Rand gesetzt ist, wird er nicht angezeigt.
    - `dotted`
      - : Zeigt eine Reihe von runden Punkten an. Der Abstand der Punkte ist nicht durch die Spezifikation definiert und implementierungsabhängig. Der Radius der Punkte ist halb so groß wie der berechnete Wert der {{cssxref("border-width")}} der gleichen Seite.
    - `dashed`
      - : Zeigt eine Reihe von kurzen, quadratischen Strichen oder Segmenten an. Die genaue Größe und Länge der Segmente sind nicht durch die Spezifikation definiert und implementierungsabhängig.
    - `solid`
      - : Zeigt eine einzelne, gerade, durchgehende Linie an.
    - `double`
      - : Zeigt zwei gerade Linien an, die zusammen die durch {{cssxref("border-width")}} definierte Pixelgröße ergeben.
    - `groove`
      - : Zeigt eine Grenze mit geschnitztem Aussehen. Es ist das Gegenteil von `ridge`.
    - `ridge`
      - : Zeigt eine Grenze mit hervorgehobenem Aussehen. Es ist das Gegenteil von `groove`.
    - `inset`
      - : Zeigt eine Grenze, die das Element eingebettet erscheinen lässt. Es ist das Gegenteil von `outset`. Wenn es auf eine Tabellenzelle mit {{cssxref("border-collapse")}} auf `collapsed` gesetzt angewendet wird, verhält sich dieser Wert wie `ridge`.
    - `outset`
      - : Zeigt eine Grenze, die das Element hervorgehoben erscheinen lässt. Es ist das Gegenteil von `inset`. Wenn es auf eine Tabellenzelle mit {{cssxref("border-collapse")}} auf `collapsed` gesetzt angewendet wird, verhält sich dieser Wert wie `groove`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Alle Eigenschaftswerte

Hier ist ein Beispiel für alle Eigenschaftswerte.

#### HTML

```html
<pre class="b1">none</pre>
<pre class="b2">hidden</pre>
<pre class="b3">dotted</pre>
<pre class="b4">dashed</pre>
<pre class="b5">solid</pre>
<pre class="b6">double</pre>
<pre class="b7">groove</pre>
<pre class="b8">ridge</pre>
<pre class="b9">inset</pre>
<pre class="b10">outset</pre>
```

#### CSS

```css
pre {
  height: 80px;
  width: 120px;
  margin: 20px;
  padding: 20px;
  display: inline-block;
  background-color: palegreen;
  border-width: 5px;
  box-sizing: border-box;
}

/* border-style Beispiels-Klassen */
.b1 {
  border-style: none;
}

.b2 {
  border-style: hidden;
}

.b3 {
  border-style: dotted;
}

.b4 {
  border-style: dashed;
}

.b5 {
  border-style: solid;
}

.b6 {
  border-style: double;
}

.b7 {
  border-style: groove;
}

.b8 {
  border-style: ridge;
}

.b9 {
  border-style: inset;
}

.b10 {
  border-style: outset;
}
```

#### Ergebnis

{{EmbedLiveSample('All_property_values', "1200", 450)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Shorthand CSS-Eigenschaften im Zusammenhang mit Rahmen: {{Cssxref("border")}}, {{Cssxref("border-width")}}, {{Cssxref("border-color")}}, {{Cssxref("border-radius")}}
