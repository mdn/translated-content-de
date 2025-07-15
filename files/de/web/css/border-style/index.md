---
title: border-style
slug: Web/CSS/border-style
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`border-style`** [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft legt den Linienstil für alle vier Seiten des Rands eines Elements fest.

{{InteractiveExample("CSS Demo: border-style")}}

```css interactive-example-choice
border-style: none;
```

```css interactive-example-choice
border-style: dotted;
```

```css interactive-example-choice
border-style: inset;
```

```css interactive-example-choice
border-style: dashed solid;
```

```css interactive-example-choice
border-style: dashed double none;
```

```css interactive-example-choice
border-style: dashed groove none dotted;
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a border around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: #eee;
  color: #000;
  border: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}

body {
  background-color: #fff;
}
```

## Bestandteile der Eigenschaft

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`border-bottom-style`](/de/docs/Web/CSS/border-bottom-style)
- [`border-left-style`](/de/docs/Web/CSS/border-left-style)
- [`border-right-style`](/de/docs/Web/CSS/border-right-style)
- [`border-top-style`](/de/docs/Web/CSS/border-top-style)

## Syntax

```css
/* Keyword values */
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

/* top and bottom | left and right */
border-style: dotted solid;

/* top | left and right | bottom */
border-style: hidden double dashed;

/* top | right | bottom | left */
border-style: none solid dotted dashed;

/* Global values */
border-style: inherit;
border-style: initial;
border-style: revert;
border-style: revert-layer;
border-style: unset;
```

Die `border-style` Eigenschaft kann mit einem, zwei, drei oder vier Werten angegeben werden.

- Wenn **ein** Wert angegeben wird, gilt dieser Stil für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben werden, gilt der erste Stil für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben werden, gilt der erste Stil für **oben**, der zweite für **links und rechts**, der dritte für **unten**.
- Wenn **vier** Werte angegeben werden, gelten die Stile in der Reihenfolge **oben**, **rechts**, **unten** und **links** (im Uhrzeigersinn).

Jeder Wert ist ein Schlüsselwort, das aus der unten stehenden Liste ausgewählt wird.

### Werte

- `<line-style>`
  - : Beschreibt den Stil des Rands. Er kann die folgenden Werte haben:
    - `none`
      - : Wie das Schlüsselwort `hidden`, zeigt keinen Rand an. Sofern kein {{cssxref("background-image")}} gesetzt ist, wird der berechnete Wert der gleichen Seite der {{cssxref("border-width")}} `0` sein, auch wenn der angegebene Wert etwas anderes ist. Im Fall von Tabellenzellen und Randkollaps hat der `none` Wert die _niedrigste_ Priorität: Wenn irgendein anderer sich widersprechender Rand gesetzt ist, wird dieser angezeigt.
    - `hidden`
      - : Wie das Schlüsselwort `none`, zeigt keinen Rand an. Sofern kein {{cssxref("background-image")}} gesetzt ist, wird der berechnete Wert der gleichen Seite der {{cssxref("border-width")}} `0` sein, auch wenn der angegebene Wert etwas anderes ist. Im Fall von Tabellenzellen und Randkollaps hat der `hidden` Wert die _höchste_ Priorität: Wenn irgendein anderer sich widersprechender Rand gesetzt ist, wird dieser nicht angezeigt.
    - `dotted`
      - : Zeigt eine Reihe von abgerundeten Punkten an. Der Abstand der Punkte ist nicht durch die Spezifikation definiert und implementierungsspezifisch. Der Radius der Punkte ist die Hälfte des berechneten Werts der gleichen Seite der {{cssxref("border-width")}}.
    - `dashed`
      - : Zeigt eine Reihe von kurzen, quadratischen Strichen oder Liniensegmenten an. Die genaue Größe und Länge der Segmente ist nicht durch die Spezifikation definiert und implementationsspezifisch.
    - `solid`
      - : Zeigt eine einzelne, gerade, feste Linie an.
    - `double`
      - : Zeigt zwei gerade Linien an, die zusammen die Pixelgröße gemäß {{cssxref("border-width")}} ergeben.
    - `groove`
      - : Zeigt einen Rand mit einer eingravierten Erscheinung an. Es ist das Gegenteil von `ridge`.
    - `ridge`
      - : Zeigt einen Rand mit einer hervorstehenden Erscheinung an. Es ist das Gegenteil von `groove`.
    - `inset`
      - : Zeigt einen Rand, der das Element eingebettet erscheinen lässt. Es ist das Gegenteil von `outset`. Wenn es auf eine Tabellenzelle angewendet wird, bei der {{cssxref("border-collapse")}} auf `collapsed` gesetzt ist, verhält sich dieser Wert wie `ridge`.
    - `outset`
      - : Zeigt einen Rand, der das Element erhaben erscheinen lässt. Es ist das Gegenteil von `inset`. Wenn es auf eine Tabellenzelle angewendet wird, bei der {{cssxref("border-collapse")}} auf `collapsed` gesetzt ist, verhält sich dieser Wert wie `groove`.

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

/* border-style example classes */
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

- Die kurznachrichtlichen CSS-Eigenschaften für Ränder: {{Cssxref("border")}}, {{Cssxref("border-width")}}, {{Cssxref("border-color")}}, {{Cssxref("border-radius")}}
