---
title: width
slug: Web/CSS/Reference/Properties/width
l10n:
  sourceCommit: 483ce811e1ea52cb2d9d2a5af0c4d1c4d591ea4a
---

Die **`width`** [CSS](/de/docs/Web/CSS)-Eigenschaft setzt die Breite eines Elements. Standardmäßig legt sie die Breite des [Inhaltsbereichs](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area) fest, aber wenn {{cssxref("box-sizing")}} auf `border-box` gesetzt ist, legt sie die Breite des [Rahmenbereichs](/de/docs/Web/CSS/Guides/Box_model/Introduction#border_area) fest.

{{InteractiveExample("CSS Demo: width")}}

```css interactive-example-choice
width: 150px;
```

```css interactive-example-choice
width: 20em;
```

```css interactive-example-choice
width: 75%;
```

```css interactive-example-choice
width: auto;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box where you can change the width.
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  height: 80%;
  justify-content: center;
  color: white;
}
```

Der angegebene Wert von `width` gilt für den Inhaltsbereich, solange sein Wert innerhalb der durch {{cssxref("min-width")}} und {{cssxref("max-width")}} definierten Werte bleibt.

- Wenn der Wert für `width` kleiner ist als der Wert für `min-width`, dann überschreibt `min-width` `width`.
- Wenn der Wert für `width` größer ist als der Wert für `max-width`, dann überschreibt `max-width` `width`.

> [!NOTE]
> Als geometrische Eigenschaft gilt `width` auch für die {{SVGElement("svg")}}, {{SVGElement("rect")}}, {{SVGElement("image")}} und {{SVGElement("foreignObject")}} SVG-Elemente, wobei `auto` für `<svg>` auf `100%` und für andere Elemente auf `0` aufgelöst wird und Prozentwerte relativ zur SVG-Viewport-Breite für `<rect>` sind. Der CSS-Wert der Eigenschaft `width` überschreibt jeden auf dem SVG-Element festgelegten SVG-{{SVGAttr("width")}}-Attributwert.

## Syntax

```css
/* <length> values */
width: 300px;
width: 25em;

/* <percentage> value */
width: 75%;

/* Keyword values */
width: max-content;
width: min-content;
width: fit-content;
width: auto;
width: stretch;

/* function values */
width: fit-content(20em);
width: anchor-size(width);
width: anchor-size(--my-anchor inline, 120%);
width: calc-size(max-content, size / 2);

/* Global values */
width: inherit;
width: initial;
width: revert;
width: revert-layer;
width: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Definiert die Breite als Entfernungswert.
- {{cssxref("&lt;percentage&gt;")}}
  - : Definiert die Breite als Prozentsatz der Breite des [umgebenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block).
- `auto`
  - : Der Browser berechnet und wählt eine Breite für das angegebene Element.
- {{cssxref("max-content")}}
  - : Die intrinsisch bevorzugte Breite.
- {{cssxref("min-content")}}
  - : Die intrinsisch minimale Breite.
- {{cssxref("fit-content")}}
  - : Verwendet den verfügbaren Platz, aber nicht mehr als [max-content](/de/docs/Web/CSS/Reference/Values/max-content), d.h. `min(max-content, max(min-content, stretch))`.
- {{cssxref("anchor-size()")}}
  - : Setzt die Breite relativ zu einer Dimension eines Ankerelements. Wenn die `width` eines anchor-positionierten Elements definiert wird, wird der erste Parameter standardmäßig auf die Breite des zugehörigen Ankers gesetzt. Wenn es auf ein nicht-anchor-positioniertes Element angewendet wird, setzt es die Breite auf den Fallback-Wert. Wenn kein Fallback definiert ist, wird die Deklaration ignoriert.
- {{cssxref("calc-size()")}}
  - : Setzt die Breite auf eine modifizierte intrinsische Größe.
- [`fit-content(<length-percentage>)`](/de/docs/Web/CSS/Reference/Values/fit-content_function)
  - : Verwendet die fit-content-Formel mit dem verfügbaren Platz, der durch das angegebene Argument ersetzt wird, wobei die Breite gemäß der Formel `min(maximale Größe, max(minimale Größe, <length-percentage>))` geklammert wird.
- `stretch`
  - : Setzt die Breite des [Randkastens](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements auf die Breite seines [umgebenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block#identifying_the_containing_block). Es versucht, den Randkasten so zu füllen, dass er den verfügbaren Platz im umgebenden Block ausfüllt, ähnlich wie bei `100%`, wobei die resultierende Größe jedoch auf den Randkasten angewendet wird und nicht auf den durch [box-sizing](/de/docs/Web/CSS/Reference/Properties/box-sizing) bestimmten Kasten.

## Barrierefreiheit

Stellen Sie sicher, dass Elemente mit festgelegter `width` nicht abgeschnitten werden und/oder keinen anderen Inhalt verdecken, wenn die Seite vergrößert wird, um die Textgröße zu erhöhen.

- [MDN Verständnis WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.4 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Standardbreite

Dieses Beispiel zeigt die grundlegende Nutzung und den Standardwert `auto`.

#### HTML

Wir fügen zwei Absätze ein; einer mit einem Klassennamen.

```html
<p>The MDN community writes really great documentation.</p>
<p class="has-width">The MDN community writes really great documentation.</p>
```

#### CSS

Wir geben allen Absätzen einen goldenen Hintergrund und legen die `width` des zweiten Absatzes explizit auf `auto` fest.

```css
p {
  background: gold;
}
p.has-width {
  width: auto;
}
```

#### Ergebnisse

{{EmbedLiveSample("Default width", 600, 100)}}

Da `width` standardmäßig auf `auto` gesetzt ist, haben beide Absätze die gleiche Breite.

### Verwendung von Längeneinheiten

Dieses Beispiel zeigt Breitenwerte in Längeneinheiten.

#### HTML

Wir fügen zwei {{htmlelement("div")}}-Elemente mit etwas Text ein.

```html
<div class="px_length">Width measured in px</div>
<div class="em_length">Width measured in em</div>
```

#### CSS

Das `px_length`-Element wird auf `200px` gesetzt, während das `em_length`-Element eine Breite von `20em` erhält. Beide Elemente haben auch unterschiedliche {{cssxref("background-color")}}, {{cssxref("color")}} und {{cssxref("border")}} Werte, um sie bei der Darstellung voneinander unterscheiden zu können.

```css
.px_length {
  width: 200px;

  background-color: red;
  color: white;
  border: 1px solid black;
}

.em_length {
  width: 20em;

  background-color: white;
  color: red;
  border: 1px solid black;
}
```

#### Ergebnisse

{{EmbedLiveSample("Using length units", 600, 60)}}

Das `px_length`-Element ist immer 200px breit. Die gerenderte Breite des `em_length`-Elements hängt von der Schriftgröße ab.

### Verwendung von Prozentangaben

Dieses Beispiel zeigt die Verwendung von Prozentwerten.

#### HTML

Wir fügen ein {{htmlelement("div")}}-Element mit etwas Text ein.

```html
<div class="percent">Width in percentage</div>
```

#### CSS

Wir setzen die `width` des Elements auf `20%` der Breite seines übergeordneten Containers.

```css
.percent {
  width: 20%;

  background-color: silver;
  border: 1px solid red;
}
```

#### Ergebnisse

{{EmbedLiveSample("Using percentages", 600, 60)}}

### Verwendung intrinsischer Größen

Dieses Beispiel vergleicht `max-content` und `min-content` und führt `calc-size` ein.

#### HTML

Wir fügen drei Absätze mit demselben Inhalt ein; ihre Klassennamen unterscheiden sich nur.

```html
<p class="max-green">The MDN community writes really great documentation.</p>
<p class="min-blue">The MDN community writes really great documentation.</p>
<p class="min-pink">The MDN community writes really great documentation.</p>
```

#### CSS

Wir setzen die `width` eines Absatzes auf `max-content`, den zweiten auf `min-content` und den dritten mit der `calc-size()`-Funktion auf die doppelte Größe des `min-content`. Jeder erhält eine unterschiedliche {{cssxref("background-color")}} und {{cssxref("border-style")}}, um sie voneinander unterscheiden zu können.

```css
p.max-green {
  width: max-content;

  background-color: lightgreen;
  border-style: dotted;
}

p.min-blue {
  width: min-content;

  background-color: lightblue;
  border-style: dashed;
}

p.min-pink {
  width: calc-size(min-content, size * 2);

  background-color: pink;
  border-style: solid;
}
```

```css hidden
@supports not (width: calc-size(min-content, size * 2)) {
  body::after {
    content: "Your browser doesn't support the calc-size() function yet.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1em;
  }
}
```

#### Ergebnisse

{{EmbedLiveSample("Using intrinsic sizes", 600, 230)}}

Das `max-content`-Beispiel ist so breit wie der Text. Das `min-content`-Beispiel ist so breit wie das breiteste Wort. Das `calc-size()`-Beispiel ist doppelt so breit wie das `min-content`.

### Verwendung des Stretch-Schlüsselworts

Dieses Beispiel zeigt den `stretch`-Wert innerhalb eines [Flex](/de/docs/Web/CSS/Guides/Flexible_box_layout)-Containers.

#### HTML

Wir fügen einen übergeordneten Container mit zwei Kind-Elementen ein.

```html
<div class="parent">
  <div class="child">text</div>
  <div class="child stretch">stretch</div>
</div>
```

#### CSS

Wir verwenden die {{cssxref("display")}}-Eigenschaft, um den Elternteil als Flex-Container zu definieren, und setzen die `width` des zweiten Kindes auf `stretch`.

```css
.parent {
  border: solid;
  margin: 1rem;
  display: flex;
}

.child {
  background: #00999999;
  margin: 1rem;
}

.stretch {
  width: stretch;
}
```

```css hidden
@supports not (width: stretch) {
  body::after {
    content: "Your browser doesn't support the stretch value yet.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1em;
  }
}
```

#### Ergebnis

{{EmbedLiveSample("Using the stretch keyword", "auto", 100)}}

Standardmäßig sind Flex-Elemente so breit wie ihr Inhalt. Der `stretch`-Wert sorgt dafür, dass das Element so breit ist, wie es der verfügbare Platz zulässt, wobei der Randkasten sonst auf die Breite seines umgebenden Blocks begrenzt ist.

### Verwendung der anchor-size()-Funktion

Dieses Beispiel zeigt die Verwendung der `anchor-size()`-Funktion zur Definition der Breite eines anchor-positionierten Elements; wir haben seine Breite als Vielfaches der Höhe seines Ankers definiert.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}}-Elemente: ein `anchor`-Element und ein `infobox`-Element, das relativ zum Anker positioniert wird.

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>Infobox.</p>
</div>
```

#### CSS

Wir deklarieren das `anchor`-`<div>` als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} geben. Das positionierte Element hat seine {{cssxref("position")}}-Eigenschaft auf `absolute` gesetzt und ist über seine {{cssxref("position-anchor")}}-Eigenschaft mit dem Ankerelement verbunden. Wir setzen auch absolute {{cssxref("height")}} und `width`-Dimensionen für den Anker und definieren die Breite des anchor-positionierten Elements als die Breite des Ankers, indem wir die `anchor-size()`-Funktion als Wert der `width`-Eigenschaft verwenden. Als Bonus nutzen wir auch die `anchor-size()`-Funktion, um die {{cssxref("left")}}-Position der Infobox zu definieren, wodurch der Abstand zwischen dem Anker und der Infobox ein Viertel der Höhe des Ankers beträgt.

```css hidden
.anchor {
  anchor-name: --my-anchor;
  width: 120px;
  height: 60px;

  font-size: 2rem;
  background-color: lightpink;
  text-align: center;
  align-content: center;
  outline: 1px solid black;
}

.infobox {
  position-anchor: --my-anchor;
  position: absolute;
  position-area: right;
  width: anchor-size(width);

  left: calc( anchor-size(height) / 4 )

  align-content: center;
  color: darkblue;
  background-color: azure;
  outline: 1px solid #dddddd;
}
```

```css hidden
body {
  padding: 5em;
}
```

#### Ergebnisse

{{EmbedLiveSample("Using the anchor-size() function", "auto", 200)}}

Beachten Sie, wie die Breite der Infobox immer der Breite des Ankerelements entspricht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("height")}}
- {{cssxref("box-sizing")}}
- {{cssxref("min-width")}}, {{cssxref("max-width")}}
- {{cssxref("block-size")}}, {{cssxref("inline-size")}}
- SVG-{{SVGAttr("width")}}-Attribut
- [Einführung in das CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_model/Introduction)-Leitfaden
- [CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_model)-Modul
- [CSS-Anchor-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning)-Modul
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/Guides/Values_and_units)-Modul
