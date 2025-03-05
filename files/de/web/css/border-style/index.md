---
title: border-style
slug: Web/CSS/border-style
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`border-style`** [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft legt den Linienstil für alle vier Seiten des Rahmens eines Elements fest.

{{EmbedInteractiveExample("pages/css/border-style.html")}}

## Einzelne Eigenschaften

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

- Wenn **ein** Wert angegeben wird, gilt derselbe Stil für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben werden, gilt der erste Stil für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben werden, gilt der erste Stil für **oben**, der zweite für **links und rechts**, der dritte für **unten**.
- Wenn **vier** Werte angegeben werden, gelten die Stile in der Reihenfolge **oben**, **rechts**, **unten** und **links** (im Uhrzeigersinn).

Jeder Wert ist ein Schlüsselwort aus der untenstehenden Liste.

### Werte

- `<line-style>`

  - : Beschreibt den Stil des Rahmens. Er kann die folgenden Werte haben:

    - `none`
      - : Ähnlich dem `hidden` Schlüsselwort, zeigt keinen Rahmen an. Sofern kein {{cssxref("background-image")}} gesetzt ist, wird der berechnete Wert der gleichen Seite des {{cssxref("border-width")}} `0` sein, selbst wenn der angegebene Wert etwas anderes ist. Im Fall von Tabellenzellen und Rahmen-Kollaps hat der `none`-Wert die _niedrigste_ Priorität: Wenn irgendein anderer widersprüchlicher Rahmen gesetzt ist, wird er angezeigt.
    - `hidden`
      - : Ähnlich dem `none` Schlüsselwort, zeigt keinen Rahmen an. Sofern kein {{cssxref("background-image")}} gesetzt ist, wird der berechnete Wert der gleichen Seite des {{cssxref("border-width")}} `0` sein, selbst wenn der angegebene Wert etwas anderes ist. Im Fall von Tabellenzellen und Rahmen-Kollaps hat der `hidden`-Wert die _höchste_ Priorität: Wenn irgendein anderer widersprüchlicher Rahmen gesetzt ist, wird er nicht angezeigt.
    - `dotted`
      - : Zeigt eine Serie von abgerundeten Punkten an. Der Abstand der Punkte ist nicht durch die Spezifikation definiert und implementationsspezifisch. Der Radius der Punkte beträgt die Hälfte des berechneten Wertes der gleichen Seite des {{cssxref("border-width")}}.
    - `dashed`
      - : Zeigt eine Serie von kurzen, quadratisch endenden Strichen oder Liniensegmenten an. Die genaue Größe und Länge der Segmente ist nicht durch die Spezifikation definiert und implementationsspezifisch.
    - `solid`
      - : Zeigt eine einzelne, gerade, durchgehende Linie an.
    - `double`
      - : Zeigt zwei gerade Linien an, die zusammen die Pixelgröße ergeben, die durch {{cssxref("border-width")}} definiert ist.
    - `groove`
      - : Zeigt einen Rahmen mit einem eingravierten Aussehen an. Es ist das Gegenteil von `ridge`.
    - `ridge`
      - : Zeigt einen Rahmen mit einem hervorgehobenen Aussehen an. Es ist das Gegenteil von `groove`.
    - `inset`
      - : Zeigt einen Rahmen, der das Element eingebettet erscheinen lässt. Es ist das Gegenteil von `outset`. Wenn es auf eine Tabellenzelle mit {{cssxref("border-collapse")}} auf `collapsed` gesetzt angewendet wird, verhält sich dieser Wert wie `ridge`.
    - `outset`
      - : Zeigt einen Rahmen, der das Element erhaben erscheinen lässt. Es ist das Gegenteil von `inset`. Wenn es auf eine Tabellenzelle mit {{cssxref("border-collapse")}} auf `collapsed` gesetzt angewendet wird, verhält sich dieser Wert wie `groove`.

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

- Die CSS-Kurzschreibweise für rahmenbezogene Eigenschaften: {{Cssxref("border")}}, {{Cssxref("border-width")}}, {{Cssxref("border-color")}}, {{Cssxref("border-radius")}}
