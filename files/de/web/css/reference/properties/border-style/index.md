---
title: border-style
slug: Web/CSS/Reference/Properties/border-style
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`border-style`** [Shorthand-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS) legt den Linienstil für alle vier Seiten des Rahmens eines Elements fest.

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
  background-color: #eeeeee;
  color: black;
  border: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}

body {
  background-color: white;
}
```

## Zugehörige Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`border-bottom-style`](/de/docs/Web/CSS/Reference/Properties/border-bottom-style)
- [`border-left-style`](/de/docs/Web/CSS/Reference/Properties/border-left-style)
- [`border-right-style`](/de/docs/Web/CSS/Reference/Properties/border-right-style)
- [`border-top-style`](/de/docs/Web/CSS/Reference/Properties/border-top-style)

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

- Wenn **ein** Wert angegeben wird, gilt er für **alle vier Seiten**.
- Bei **zwei** angegebenen Werten gilt der erste Stil für **oben und unten**, der zweite für **links und rechts**.
- Bei **drei** angegebenen Werten gilt der erste Stil für **oben**, der zweite für **links und rechts**, der dritte für **unten**.
- Bei **vier** angegebenen Werten gelten die Stile in dieser Reihenfolge (im Uhrzeigersinn): **oben**, **rechts**, **unten** und **links**.

Jeder Wert ist ein Schlüsselwort, das aus der unten stehenden Liste ausgewählt wird.

### Werte

- `<line-style>`
  - : Beschreibt den Stil des Rahmens. Er kann folgende Werte haben:
    - `none`
      - : Wie das `hidden` Schlüsselwort wird kein Rahmen angezeigt. Es sei denn, es ist ein {{cssxref("background-image")}} gesetzt, wird der berechnete Wert der gleichen Seite {{cssxref("border-width")}} `0` sein, auch wenn der angegebene Wert etwas anderes ist. Im Fall von Tabellenzellen und Rahmenzusammenführung hat der Wert `none` die _niedrigste_ Priorität: Wenn irgendein anderer sich überschneidender Rahmen gesetzt ist, wird dieser angezeigt.
    - `hidden`
      - : Wie das `none` Schlüsselwort wird kein Rahmen angezeigt. Es sei denn, es ist ein {{cssxref("background-image")}} gesetzt, wird der berechnete Wert der gleichen Seite {{cssxref("border-width")}} `0` sein, auch wenn der angegebene Wert etwas anderes ist. Im Fall von Tabellenzellen und Rahmenzusammenführung hat der Wert `hidden` die _höchste_ Priorität: Wenn irgendein anderer sich überschneidender Rahmen gesetzt ist, wird dieser nicht angezeigt.
    - `dotted`
      - : Zeigt eine Reihe von abgerundeten Punkten an. Der Abstand der Punkte ist nicht durch die Spezifikation definiert und hängt von der Implementierung ab. Der Radius der Punkte beträgt die Hälfte des berechneten Wertes der gleichen Seite {{cssxref("border-width")}}.
    - `dashed`
      - : Zeigt eine Reihe von kurzen, quadratisch endenden Strichen oder Liniensegmenten an. Die genaue Größe und Länge der Segmente ist nicht durch die Spezifikation definiert und hängt von der Implementierung ab.
    - `solid`
      - : Zeigt eine einzelne, gerade und durchgehende Linie an.
    - `double`
      - : Zeigt zwei gerade Linien an, die zusammen die Pixelgröße ergeben, die durch {{cssxref("border-width")}} definiert ist.
    - `groove`
      - : Zeigt einen Rahmen mit einer eingekerbten Erscheinung an. Es ist das Gegenteil von `ridge`.
    - `ridge`
      - : Zeigt einen Rahmen mit einer hervorgehobenen Erscheinung an. Es ist das Gegenteil von `groove`.
    - `inset`
      - : Zeigt einen Rahmen, der das Element eingebettet erscheinen lässt. Es ist das Gegenteil von `outset`. Wenn es auf eine Tabellenzelle angewendet wird, bei der {{cssxref("border-collapse")}} auf `collapsed` gesetzt ist, verhält sich dieser Wert wie `ridge`.
    - `outset`
      - : Zeigt einen Rahmen, der das Element erhaben erscheinen lässt. Es ist das Gegenteil von `inset`. Wenn es auf eine Tabellenzelle angewendet wird, bei der {{cssxref("border-collapse")}} auf `collapsed` gesetzt ist, verhält sich dieser Wert wie `groove`.

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

- Die CSS-Kurzform Eigenschaften in Bezug auf Rand: {{Cssxref("border")}}, {{Cssxref("border-width")}}, {{Cssxref("border-color")}}, {{Cssxref("border-radius")}}
