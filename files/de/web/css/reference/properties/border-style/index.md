---
title: "`border-style` CSS-Eigenschaft"
short-title: border-style
slug: Web/CSS/Reference/Properties/border-style
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

Die **`border-style`** [CSS](/de/docs/Web/CSS) [Shorthand](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) Eigenschaft legt den Linienstil für alle vier Seiten der Rahmen eines Elements fest.

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

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("border-bottom-style")}}
- {{cssxref("border-left-style")}}
- {{cssxref("border-right-style")}}
- {{cssxref("border-top-style")}}

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

- Wenn **ein** Wert angegeben ist, gilt derselbe Stil für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben sind, gilt der erste Stil für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben sind, gilt der erste Stil für **oben**, der zweite für **links und rechts**, der dritte für **unten**.
- Wenn **vier** Werte angegeben sind, gelten die Stile in dieser Reihenfolge (im Uhrzeigersinn) für **oben**, **rechts**, **unten** und **links**.

Jeder Wert ist ein aus der Liste unten gewähltes Schlüsselwort.

### Werte

- `<line-style>`
  - : Beschreibt den Stil des Rahmens. Er kann die folgenden Werte haben:
    - `none`
      - : Wie das `hidden` Schlüsselwort zeigt keinen Rahmen an. Sofern kein {{cssxref("background-image")}} gesetzt ist, wird der [verwendete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) derselben Seite der {{cssxref("border-width")}} `0` sein, selbst wenn ein anderer Wert angegeben ist. Im Fall von Tabellenzellen und Rahmenzusammenführung hat der `none` Wert die _niedrigste_ Priorität: Wenn ein anderer, widersprüchlicher Rahmen gesetzt ist, wird dieser angezeigt.
    - `hidden`
      - : Wie das `none` Schlüsselwort zeigt keinen Rahmen an. Sofern kein {{cssxref("background-image")}} gesetzt ist, wird der [verwendete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) derselben Seite der {{cssxref("border-width")}} `0` sein, selbst wenn ein anderer Wert angegeben ist. Im Fall von Tabellenzellen und Rahmenzusammenführung hat der `hidden` Wert die _höchste_ Priorität: Wenn ein anderer, widersprüchlicher Rahmen gesetzt ist, wird dieser nicht angezeigt.
    - `dotted`
      - : Zeigt eine Reihe von abgerundeten Punkten an. Der Abstand der Punkte ist nicht durch die Spezifikation definiert und implementierungsspezifisch. Der Radius der Punkte beträgt die Hälfte des berechneten Wertes der betreffenden Seite der {{cssxref("border-width")}}.
    - `dashed`
      - : Zeigt eine Reihe von kurzen, quadratisch abgerundeten Strichen oder Liniensegmenten an. Die genaue Größe und Länge der Segmente ist nicht durch die Spezifikation definiert und implementierungsspezifisch.
    - `solid`
      - : Zeigt eine einzige, gerade, durchgehende Linie an.
    - `double`
      - : Zeigt zwei gerade Linien, die zusammen die Pixelgröße der {{cssxref("border-width")}} ergeben.
    - `groove`
      - : Zeigt einen Rahmen mit eingraviertem Erscheinungsbild an. Es ist das Gegenteil von `ridge`.
    - `ridge`
      - : Zeigt einen Rahmen mit erhabenem Erscheinungsbild an. Es ist das Gegenteil von `groove`.
    - `inset`
      - : Zeigt einen Rahmen, der das Element eingebettet erscheinen lässt. Es ist das Gegenteil von `outset`. Wenn auf eine Tabellenzelle mit {{cssxref("border-collapse")}} gesetzt wird `collapsed`, verhält sich dieser Wert wie `ridge`.
    - `outset`
      - : Zeigt einen Rahmen, der das Element erhaben erscheinen lässt. Es ist das Gegenteil von `inset`. Wenn auf eine Tabellenzelle mit {{cssxref("border-collapse")}} gesetzt wird `collapsed`, verhält sich dieser Wert wie `groove`.

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

- Die framebezogenen Shorthand-CSS-Eigenschaften: {{Cssxref("border")}}, {{Cssxref("border-width")}}, {{Cssxref("border-color")}}, {{Cssxref("border-radius")}}
