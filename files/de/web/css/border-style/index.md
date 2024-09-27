---
title: border-style
slug: Web/CSS/border-style
l10n:
  sourceCommit: 59593341146f085e57cec84f0928c7b7e18f3e97
---

{{CSSRef}}

Die **`border-style`** [Shorthand](/de/docs/Web/CSS/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft legt den Linienstil für alle vier Seiten des Rahmens eines Elements fest.

{{EmbedInteractiveExample("pages/css/border-style.html")}}

## Zusätzliche Eigenschaften

Diese Eigenschaft ist eine Shorthand für die folgenden CSS-Eigenschaften:

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

- Wenn **ein** Wert angegeben wird, gilt der gleiche Stil für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben werden, gilt der erste Stil für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben werden, gilt der erste Stil für **oben**, der zweite für **links und rechts**, der dritte für **unten**.
- Wenn **vier** Werte angegeben werden, gelten die Stile im Uhrzeigersinn für **oben**, **rechts**, **unten** und **links**.

Jeder Wert ist ein Schlüsselwort, das aus der untenstehenden Liste ausgewählt wird.

### Werte

- `<line-style>`

  - : Beschreibt den Stil des Rahmens. Es kann folgende Werte haben:

    - `none`
      - : Wie das `hidden` Schlüsselwort wird kein Rahmen angezeigt. Es sei denn, es ist ein {{cssxref("background-image")}} festgelegt, wird der berechnete Wert der gleichen Seite von {{cssxref("border-width")}} `0` sein, selbst wenn ein anderer Wert angegeben ist. Im Fall von Tabellenzellen und Rahmen-Zusammenführung hat der Wert `none` die _niedrigste_ Priorität: Wenn ein anderer widersprüchlicher Rahmen festgelegt ist, wird dieser angezeigt.
    - `hidden`
      - : Wie das `none` Schlüsselwort wird kein Rahmen angezeigt. Es sei denn, es ist ein {{cssxref("background-image")}} festgelegt, wird der berechnete Wert der gleichen Seite von {{cssxref("border-width")}} `0` sein, selbst wenn ein anderer Wert angegeben ist. Im Fall von Tabellenzellen und Rahmen-Zusammenführung hat der Wert `hidden` die _höchste_ Priorität: Wenn ein anderer widersprüchlicher Rahmen festgelegt ist, wird dieser nicht angezeigt.
    - `dotted`
      - : Zeigt eine Reihe von abgerundeten Punkten an. Der Abstand der Punkte ist durch die Spezifikation nicht definiert und implementierungsspezifisch. Der Radius der Punkte ist die Hälfte des berechneten Wertes der gleichen Seite von {{cssxref("border-width")}}.
    - `dashed`
      - : Zeigt eine Reihe kurzer, quadratisch endender Striche oder Liniensegmente. Die genaue Größe und Länge der Segmente ist durch die Spezifikation nicht definiert und implementierungsspezifisch.
    - `solid`
      - : Zeigt eine einzelne, gerade, durchgehende Linie an.
    - `double`
      - : Zeigt zwei gerade Linien, die zusammen die im {{cssxref("border-width")}} festgelegte Pixelgröße ergeben.
    - `groove`
      - : Zeigt einen Rahmen mit geschnitztem Aussehen. Es ist das Gegenteil von `ridge`.
    - `ridge`
      - : Zeigt einen Rahmen mit erhabenem Aussehen. Es ist das Gegenteil von `groove`.
    - `inset`
      - : Zeigt einen Rahmen an, der das Element eingebettet erscheinen lässt. Es ist das Gegenteil von `outset`. Wenn es auf eine Tabellenzelle mit {{cssxref("border-collapse")}} auf `collapsed` angewendet wird, verhält sich dieser Wert wie `ridge`.
    - `outset`
      - : Zeigt einen Rahmen an, der das Element geprägt erscheinen lässt. Es ist das Gegenteil von `inset`. Wenn es auf eine Tabellenzelle mit {{cssxref("border-collapse")}} auf `collapsed` angewendet wird, verhält sich dieser Wert wie `groove`.

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

- Die mit Rahmen zusammenhängenden Shorthand-CSS-Eigenschaften: {{Cssxref("border")}}, {{Cssxref("border-width")}}, {{Cssxref("border-color")}}, {{Cssxref("border-radius")}}
