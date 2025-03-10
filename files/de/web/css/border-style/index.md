---
title: border-style
slug: Web/CSS/border-style
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`border-style`** [Kurzform](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft legt den Linienstil für alle vier Seiten des Rands eines Elements fest.

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

## Bestandteilseigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

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

Die `border-style`-Eigenschaft kann mit einem, zwei, drei oder vier Werten angegeben werden.

- Wenn **ein** Wert angegeben ist, gilt er für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben sind, gilt der erste Stil für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben sind, gilt der erste Stil für **oben**, der zweite für **links und rechts**, der dritte für **unten**.
- Wenn **vier** Werte angegeben sind, gelten die Stile der Reihenfolge nach im Uhrzeigersinn für **oben**, **rechts**, **unten** und **links**.

Jeder Wert ist ein Schlüsselwort aus der nachstehenden Liste.

### Werte

- `<line-style>`

  - : Beschreibt den Stil des Randes. Er kann die folgenden Werte haben:

    - `none`
      - : Wie das `hidden`-Schlüsselwort zeigt keinen Rand an. Sofern kein {{cssxref("background-image")}} festgelegt ist, wird der berechnete Wert der gleichen Seite von {{cssxref("border-width")}} `0` sein, selbst wenn der angegebene Wert etwas anderes ist. Im Fall von Tabellenzellen und Randüberlappung hat der Wert `none` die _niedrigste_ Priorität: Wenn ein anderer, sich überschneidender Rand definiert ist, wird er angezeigt.
    - `hidden`
      - : Wie das `none`-Schlüsselwort zeigt keinen Rand an. Sofern kein {{cssxref("background-image")}} festgelegt ist, wird der berechnete Wert der gleichen Seite von {{cssxref("border-width")}} `0` sein, selbst wenn der angegebene Wert etwas anderes ist. Im Fall von Tabellenzellen und Randüberlappung hat der Wert `hidden` die _höchste_ Priorität: Wenn ein anderer, sich überschneidender Rand definiert ist, wird er nicht angezeigt.
    - `dotted`
      - : Zeigt eine Serie von gerundeten Punkten an. Der Abstand der Punkte ist nicht durch die Spezifikation definiert und implementierungsabhängig. Der Radius der Punkte ist die Hälfte des berechneten Wertes der gleichen Seite von {{cssxref("border-width")}}.
    - `dashed`
      - : Zeigt eine Serie von kurzen Liniensegmenten mit flachen Enden an. Die genaue Größe und Länge der Segmente sind nicht durch die Spezifikation definiert und implementierungsabhängig.
    - `solid`
      - : Zeigt eine einzelne, gerade, durchgehende Linie an.
    - `double`
      - : Zeigt zwei gerade Linien an, die zusammen die Pixelgröße ausmachen, die von {{cssxref("border-width")}} definiert wird.
    - `groove`
      - : Zeigt einen Rand mit geschnitztem Aussehen. Es ist das Gegenteil von `ridge`.
    - `ridge`
      - : Zeigt einen Rand mit hervorgehobenem Aussehen. Es ist das Gegenteil von `groove`.
    - `inset`
      - : Zeigt einen Rand, der das Element eingebettet erscheinen lässt. Es ist das Gegenteil von `outset`. Wenn es auf eine Tabellenzelle angewendet wird, bei der {{cssxref("border-collapse")}} auf `collapsed` gesetzt ist, verhält sich dieser Wert wie `ridge`.
    - `outset`
      - : Zeigt einen Rand, der das Element geprägt erscheinen lässt. Es ist das Gegenteil von `inset`. Wenn es auf eine Tabellenzelle angewendet wird, bei der {{cssxref("border-collapse")}} auf `collapsed` gesetzt ist, verhält sich dieser Wert wie `groove`.

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

- Die randbezogenen Kurzform-CSS-Eigenschaften: {{Cssxref("border")}}, {{Cssxref("border-width")}}, {{Cssxref("border-color")}}, {{Cssxref("border-radius")}}
