---
title: "`width` CSS property"
short-title: width
slug: Web/CSS/Reference/Properties/width
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`width`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Breite eines Elements fest. Standardmäßig wird die Breite des [Inhaltsbereichs](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area) festgelegt, aber wenn {{cssxref("box-sizing")}} auf `border-box` gesetzt ist, wird die Breite des [Randbereichs](/de/docs/Web/CSS/Guides/Box_model/Introduction#border_area) festgelegt.

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

Der angegebene Wert von `width` gilt für den Inhaltsbereich, solange der Wert innerhalb der durch {{cssxref("min-width")}} und {{cssxref("max-width")}} definierten Werte bleibt.

- Wenn der Wert für `width` kleiner ist als der Wert für `min-width`, dann überschreibt `min-width` den Wert von `width`.
- Wenn der Wert für `width` größer ist als der Wert für `max-width`, dann überschreibt `max-width` den Wert von `width`.

> [!NOTE]
> Als geometrische Eigenschaft gilt `width` auch für die {{SVGElement("svg")}}, {{SVGElement("rect")}}, {{SVGElement("image")}} und {{SVGElement("foreignObject")}} SVG-Elemente, wobei `auto` für `<svg>` zu `100%` und für andere Elemente zu `0` aufgelöst wird und Prozentwerte relativ zur SVG-Viewport-Breite für `<rect>` sind. Der CSS `width`-Eigenschaftswert überschreibt jeden auf dem SVG-Element festgelegten SVG {{SVGAttr("width")}} Attributwert.

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
  - : Definiert die Breite als Distanzwert.
- {{cssxref("&lt;percentage&gt;")}}
  - : Definiert die Breite als Prozentsatz der Breite des [umschließenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block).
- `auto`
  - : Der Browser berechnet und wählt eine Breite für das angegebene Element.
- {{cssxref("max-content")}}
  - : Die intrinsisch bevorzugte Breite.
- {{cssxref("min-content")}}
  - : Die intrinsisch minimale Breite.
- {{cssxref("fit-content")}}
  - : Verwendet den verfügbaren Platz, jedoch nicht mehr als [max-content](/de/docs/Web/CSS/Reference/Values/max-content), d.h. `min(max-content, max(min-content, stretch))`.
- {{cssxref("anchor-size()")}}
  - : Setzt die Breite relativ zu einer Dimension eines Ankerelements. Bei der Definition der `width` eines anker-platzierten Elements wird dem ersten Parameter standardmäßig die Breite des zugehörigen Ankers zugewiesen. Wird es auf ein nicht anker-positioniertes Element angewendet, wird die Breite auf den Fallback-Wert gesetzt. Wenn kein Fallback definiert ist, wird die Deklaration ignoriert.
- {{cssxref("calc-size()")}}
  - : Setzt die Breite auf eine modifizierte intrinsische Größe.
- [`fit-content(<length-percentage>)`](/de/docs/Web/CSS/Reference/Values/fit-content_function)
  - : Verwendet die Fit-Content-Formel, wobei der verfügbare Platz durch das angegebene Argument ersetzt wird und die Breite gemäß der Formel `min(maximum size, max(minimum size, <length-percentage>))` geklammert wird.
- `stretch`
  - : Setzt die Breite der [Randbox](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements auf die Breite seines [umschließenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block#identifying_the_containing_block). Es wird versucht, die Randbox an den verfügbaren Platz im umgebenden Block anzupassen, wodurch es sich ähnlich wie `100%` verhalten kann, jedoch die resultierende Größe auf die Randbox und nicht auf die durch [box-sizing](/de/docs/Web/CSS/Reference/Properties/box-sizing) bestimmte Box angewendet wird.

## Barrierefreiheit

Stellen Sie sicher, dass Elemente mit einer festgelegten `width` nicht abgeschnitten werden und/oder keinen anderen Inhalt verdecken, wenn die Seite gezoomt wird, um die Textgröße zu erhöhen.

- [MDN Understanding WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Standardbreite

Dieses Beispiel zeigt die grundlegende Verwendung und den Standardwert `auto`.

#### HTML

Wir fügen zwei Absätze ein, einer mit einem Klassennamen.

```html
<p>The MDN community writes really great documentation.</p>
<p class="has-width">The MDN community writes really great documentation.</p>
```

#### CSS

Wir geben allen Absätzen einen goldenen Hintergrund und setzen die `width` des zweiten Absatzes explizit auf `auto`.

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

Dieses Beispiel demonstriert die Verwendung von Breitenwerten mit Länge.

#### HTML

Wir fügen zwei {{htmlelement("div")}}-Elemente mit etwas Text ein.

```html
<div class="px_length">Width measured in px</div>
<div class="em_length">Width measured in em</div>
```

#### CSS

Das `px_length`-Element wird auf `200px` gesetzt, während das `em_length`-Element auf `20em` Breite gesetzt wird. Beide Elemente haben auch unterschiedliche {{cssxref("background-color")}}, {{cssxref("color")}} und {{cssxref("border")}}-Werte, um sie beim Rendern zu differenzieren.

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

### Verwendung von Prozentsätzen

Dieses Beispiel zeigt die Verwendung von Prozentwerten.

#### HTML

Wir fügen ein {{htmlelement("div")}}-Element mit etwas Text ein.

```html
<div class="percent">Width in percentage</div>
```

#### CSS

Wir setzen die `width` des Elements auf `20%` der Breite seines Elternelements.

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

Wir fügen drei Absätze mit gleichem Inhalt ein; nur ihre Klassennamen unterscheiden sich.

```html
<p class="max-green">The MDN community writes really great documentation.</p>
<p class="min-blue">The MDN community writes really great documentation.</p>
<p class="min-pink">The MDN community writes really great documentation.</p>
```

#### CSS

Wir setzen die `width` eines Absatzes auf `max-content`, die des zweiten auf `min-content` und die des dritten auf die doppelte Größe von `min-content` mithilfe der `calc-size()`-Funktion. Jeder hat eine andere {{cssxref("background-color")}} und {{cssxref("border-style")}}, um sie zu unterscheiden.

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

Das `max-content`-Beispiel ist so breit wie der Text. Das `min-content`-Beispiel ist so breit wie das breiteste Wort. Das `calc-size()`-Beispiel ist auf die doppelte Breite von `min-content` gesetzt.

### Verwendung des Stretch-Schlüsselworts

Dieses Beispiel zeigt den `stretch`-Wert innerhalb eines [Flex](/de/docs/Web/CSS/Guides/Flexible_box_layout)-Containers.

#### HTML

Wir fügen ein übergeordnetes Container-Element mit zwei Kind-Elementen ein.

```html
<div class="parent">
  <div class="child">text</div>
  <div class="child stretch">stretch</div>
</div>
```

#### CSS

Wir verwenden die {{cssxref("display")}}-Eigenschaft, um das übergeordnete Element zu einem Flex-Container zu machen, und setzen die `width` des zweiten Kindelements auf `stretch`.

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

Standardmäßig sind Flex-Elemente so breit wie ihr Inhalt. Der `stretch`-Wert macht das Element so breit, wie es der verfügbare Platz zulässt, wobei die Randbox des Elements ansonsten auf die Breite seines umschließenden Blocks geklammert wird.

### Verwendung der anchor-size()-Funktion

Dieses Beispiel zeigt die Verwendung der `anchor-size()`-Funktion, um die Breite eines ankerpositionierten Elements zu definieren; wir haben seine Breite als ein Vielfaches der Höhe seines Ankers definiert.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}}-Elemente: ein `anchor`-Element und ein `infobox`-Element, das wir relativ zum Anker positionieren werden.

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>Infobox.</p>
</div>
```

#### CSS

Wir deklarieren das `anchor` `<div>` als Ankerelement, indem wir ihm einen {{cssxref("anchor-name")}} geben. Das positionierte Element hat seine {{cssxref("position")}}-Eigenschaft auf `absolute` gesetzt und ist über seine {{cssxref("position-anchor")}}-Eigenschaft dem Ankerelement zugeordnet. Wir setzen auch absolute {{cssxref("height")}}- und `width`-Dimensionen auf den Anker und definieren die Breite des anker-platzierten Elements auf die Breite des Ankers mit der `anchor-size()`-Funktion als Wert der `width`-Eigenschaft. Zusätzlich verwenden wir die `anchor-size()`-Funktion, um die {{cssxref("left")}}-Position der Infobox zu definieren und den Abstand zwischen dem Anker und der Infobox auf ein Viertel der Höhe des Ankers zu setzen.

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

Beachten Sie, dass die Breite der Infobox immer der Breite des Ankerelements entspricht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("height")}}
- {{cssxref("box-sizing")}}
- {{cssxref("min-width")}}, {{cssxref("max-width")}}
- {{cssxref("block-size")}}, {{cssxref("inline-size")}}
- SVG {{SVGAttr("width")}} Attribut
- [Einführung in das CSS-Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction) Leitfaden
- [CSS-Box-Modell](/de/docs/Web/CSS/Guides/Box_model) Modul
- [CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
- [CSS Werte und Einheiten](/de/docs/Web/CSS/Guides/Values_and_units) Modul
