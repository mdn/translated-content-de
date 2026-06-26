---
title: "`border-style` CSS-Eigenschaft"
short-title: border-style
slug: Web/CSS/Reference/Properties/border-style
l10n:
  sourceCommit: a06cf3dca37bb7da1d5e5ad98c5d15a10dde3e8c
---

Die **`border-style`** [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft legt den Linienstil für alle vier Seiten des Rahmens eines Elementes fest.

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

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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

Die `border-style`-Eigenschaft kann mit einem, zwei, drei oder vier Werten angegeben werden.

- Wenn **ein** Wert angegeben wird, gilt derselbe Stil für **alle vier Seiten**.
- Bei **zwei** angegebenen Werten gilt der erste Stil für **oben und unten**, der zweite für **links und rechts**.
- Bei **drei** angegebenen Werten gilt der erste Stil für **oben**, der zweite für **links und rechts**, der dritte für **unten**.
- Bei **vier** angegebenen Werten gelten die Stile in der Reihenfolge **oben**, **rechts**, **unten** und **links** (im Uhrzeigersinn).

Jeder Wert ist ein Schlüsselwort, das aus der folgenden Liste ausgewählt wird.

### Werte

- `<line-style>`
  - : Beschreibt den Stil des Rahmens. Es kann folgende Werte haben:
    - `none`
      - : Wie das `hidden` Schlüsselwort, zeigt keinen Rahmen an. Es sei denn, es ist ein {{cssxref("background-image")}} festgelegt, der [benutzte Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) der `border-width` der gleichen Seite wird `0` sein, selbst wenn der angegebene Wert etwas anderes ist. Im Fall von Tabellenzellen und Rahmenüberlappung hat der Wert `none` die _niedrigste_ Priorität: Wenn ein anderer widersprüchlicher Rahmen gesetzt ist, wird er angezeigt.
    - `hidden`
      - : Wie das `none` Schlüsselwort, zeigt keinen Rahmen an. Es sei denn, es ist ein {{cssxref("background-image")}} festgelegt, der [benutzte Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) der `border-width` der gleichen Seite wird `0` sein, selbst wenn der angegebene Wert etwas anderes ist. Im Fall von Tabellenzellen und Rahmenüberlappung hat der Wert `hidden` die _höchste_ Priorität: Wenn ein anderer widersprüchlicher Rahmen gesetzt ist, wird er nicht angezeigt.
    - `dotted`
      - : Zeigt eine Reihe von abgerundeten Punkten an. Der Abstand der Punkte ist in der Spezifikation nicht definiert und implementationsspezifisch. Der Radius der Punkte ist die Hälfte des berechneten Werts der `border-width` der gleichen Seite.
    - `dashed`
      - : Zeigt eine Reihe von kurzen, quadratisch endenden Strichen oder Linienelementen an. Die genaue Größe und Länge der Segmente ist in der Spezifikation nicht definiert und implementationsspezifisch.
    - `solid`
      - : Zeigt eine einzelne, gerade, durchgehende Linie an.
    - `double`
      - : Zeigt zwei gerade Linien an, die zusammen die durch `border-width` definierte Pixelgröße ergeben.
    - `groove`
      - : Zeigt einen Rahmen mit einer eingeschnittenen Erscheinung an. Es ist das Gegenteil von `ridge`.
    - `ridge`
      - : Zeigt einen Rahmen mit einer erhabenen Erscheinung an. Es ist das Gegenteil von `groove`.
    - `inset`
      - : Zeigt einen Rahmen an, der das Element eingebettet erscheinen lässt. Es ist das Gegenteil von `outset`. Wenn es auf eine Tabellenzelle mit `border-collapse` `collapsed` angewendet wird, verhält sich dieser Wert wie `ridge`.
    - `outset`
      - : Zeigt einen Rahmen an, der das Element erhaben erscheinen lässt. Es ist das Gegenteil von `inset`. Wenn es auf eine Tabellenzelle mit `border-collapse` `collapsed` angewendet wird, verhält sich dieser Wert wie `groove`.

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

- Die Kurzschreibweisen für rahmenbezogene CSS-Eigenschaften: {{Cssxref("border")}}, {{Cssxref("border-width")}}, {{Cssxref("border-color")}}, {{Cssxref("border-radius")}}
