---
title: corner-shape
slug: Web/CSS/corner-shape
l10n:
  sourceCommit: bb52c01c1534149f1e3e4755e2576ef7828ecc0f
---

{{SeeCompatTable}}

Die **`corner-shape`** [Shorthand]-[CSS](/de/docs/Web/CSS) Eigenschaft gibt die Form der Ecken eines Kastens an, innerhalb des durch seinen {{cssxref("border-radius")}} Eigenschaftswert spezifizierten Bereichs.

## Zusammengesetzte Eigenschaften

Die `corner-shape` Eigenschaft ist eine Kurzform für die folgenden physischen Eigenschaften:

- {{cssxref("corner-top-left-shape")}}
- {{cssxref("corner-top-right-shape")}}
- {{cssxref("corner-bottom-left-shape")}}
- {{cssxref("corner-bottom-right-shape")}}

## Syntax

```css
/* Single value set for all four corners */
corner-shape: bevel;

/* top-left and bottom-right, top-right and bottom-left */
corner-shape: notch superellipse(0.6);

/* top-left, top-right and bottom-left, bottom-right */
corner-shape: superellipse(-1.2) square squircle;

/* top-left, top-right, bottom-right, bottom-left */
corner-shape: scoop superellipse(-1.6) superellipse(-2.2) round;

/* Global values */
corner-shape: inherit;
corner-shape: initial;
corner-shape: revert;
corner-shape: revert-layer;
corner-shape: unset;
```

Die `corner-shape` Eigenschaft kann mit einem, zwei, drei oder vier {{cssxref("&lt;corner-shape-value>")}} Werten angegeben werden:

- Wenn **ein** Wert verwendet wird, gibt er die Form **aller vier Ecken** an.
- Wenn **zwei** Werte verwendet werden, gilt die erste Form für die **obere linke und untere rechte** Ecke und die zweite für die **obere rechte und untere linke Ecke**.
- Wenn **drei** Werte verwendet werden, gibt die erste Form die Form der **oberen linken Ecke** an, die zweite für die **obere rechte und untere linke Ecken**, und die dritte für die **untere rechte Ecke**.
- Wenn vier Werte verwendet werden, geben sie die Form der **oberen linken**, **oberen rechten**, **unteren rechten** und **unteren linken** Ecken an, in dieser Reihenfolge (im Uhrzeigersinn).

### Werte

- {{cssxref("corner-shape-value")}}
  - : Ein {{cssxref("superellipse()")}} oder gleichwertiges Schlüsselwort, das die Form der Ecke beschreibt.

## Beschreibung

Die `corner-shape` Eigenschaft wird verwendet, um die Form abgerundeter Ecken zu ändern, die durch die `border-radius` Eigenschaft und ihre zugehörigen Langformen erstellt werden. Bereits abgerundete Ecken können weiter angepasst werden, was den Grad der Rundung betrifft, der auf sie angewendet wird, wodurch beispielsweise abgeschrägte, gekerbte und quadrate Ecken erstellt werden können. Grenzen, Umrisse, Schatten und Hintergrundeffekte, die auf den Container angewendet werden, folgen der definierten Eckenform.

Wenn auf einen Container kein `border-radius` angewendet wird, oder der `border-radius` auf `0` aufgelöst wird, hat `corner-shape` keine Wirkung.

Die `corner-shape` Kurzform-Eigenschaft und ihre zugehörigen [`corner-*-shape` Kurz- und Langformen](#corner--shape_shorthands_and_longhands) akzeptieren einen bis vier {{cssxref("&lt;corner-shape-value>")}} Werte. Jeder wird direkt als {{cssxref("superellipse()")}} Funktion oder ein Schlüsselwort, das eine gewöhnliche Form beschreibt, angegeben. Jedes Schlüsselwort entspricht einem spezifischen `superellipse()` Wert.

Der Standardwert (initial) von `corner-shape` ist `round`, was den gleichen Effekt hat wie die Verwendung von `border-radius` allein, ohne `corner-shape`. Es gibt auch einen Schlüsselwortwert `square`, der denselben Effekt wie Standard-quadratische Ecken hat und effektiv einen angewendeten `border-radius` entfernt. Der Wert `bevel` hat den Effekt, eine gerade Linie zwischen den beiden Enden eines `border-radius` zu ziehen.

Verschiedene `corner-shape` Werte können glatt animiert werden, da die `superellipse()` Äquivalente der Schlüsselwortwerte als Interpolationswerte verwendet werden.

Die `corner-shape` Kurzform ist besonders nützlich, wenn alle vier Grenzen gleich sein sollen oder Sie verschiedene Werte mit einer einzigen Deklaration setzen möchten. Um nur eine oder zwei Eckformen gleichzeitig zu setzen, verwenden Sie die `corner-*-shape` Kurz- und Langformen.

### `corner-*-shape` Kurz- und Langformen

Die `corner-shape` Kurzform definiert die Formen aller vier Ecken in einer Deklaration.

Um nur eine Eckform gleichzeitig zu setzen, verwenden Sie die Eckform Langformen:

- Physische Langformen für Eckform-Eigenschaften:
  - {{cssxref("corner-bottom-left-shape")}}
  - {{cssxref("corner-bottom-right-shape")}}
  - {{cssxref("corner-top-left-shape")}}
  - {{cssxref("corner-top-right-shape")}}
- Logische Langformen für Eckform-Eigenschaften:
  - {{cssxref("corner-start-start-shape")}}
  - {{cssxref("corner-start-end-shape")}}
  - {{cssxref("corner-end-start-shape")}}
  - {{cssxref("corner-end-end-shape")}}

Um zwei Eckformen gleichzeitig zu setzen, verwenden Sie die Seiten-Kurzformen:

- Physische Seiten-Kurzform-Eigenschaften:
  - {{cssxref("corner-top-shape")}}
  - {{cssxref("corner-right-shape")}}
  - {{cssxref("corner-bottom-shape")}}
  - {{cssxref("corner-left-shape")}}
- Logische Seiten-Kurzform-Eigenschaften:
  - {{cssxref("corner-block-start-shape")}}
  - {{cssxref("corner-block-end-shape")}}
  - {{cssxref("corner-inline-start-shape")}}
  - {{cssxref("corner-inline-end-shape")}}

### Begrenzung der gegenüberliegenden Eckeform-Radien

Wenn gegenüberliegende Ecken `border-radius` und `corner-shape` Werte eingestellt haben, die dazu führen würden, dass sich die Formen überlappen, schränkt der Browser die Werte ein, um die Überlappung zu verhindern.

Zum Beispiel würden die folgenden Werte dazu führen, dass sich die obere linke und untere rechte Ecke überlappen, deshalb passt der Browser die erste `border-radius` Komponente auf einen Wert an, der dies verhindert.

```css
div {
  width: 480px;
  height: 200px;
  background-color: goldenrod;
  border-radius: 80% 20px;
  corner-shape: scoop;
}
```

### Eigenschaften, die der Eckeform folgen

Die folgenden Eigenschaften folgen alle der Form der Ecke, wenn sie auf den Container gesetzt sind:

- {{cssxref("background-color")}}
- {{cssxref("background-image")}}
- {{cssxref("border")}}
- {{cssxref("outline")}}
- {{cssxref("box-shadow")}}
- {{cssxref("overflow")}}
- {{cssxref("backdrop-filter")}}

Sehen Sie sich [Demonstration der Eigenschaften, die der `corner-shape` folgen](#demonstration_of_properties_that_follow_the_corner-shape) für einige Beispiele an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende `corner-shape` Nutzung

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}} Element.

```html live-sample___basic-corner-shape
<div>Nice scooped corners</div>
```

#### CSS

Wir geben der Box eine feste {{cssxref("height")}}, einen {{cssxref("box-shadow")}}, einen `border-radius` von 30 Pixeln und eine `corner-shape` von `scoop`, zusammen mit einigen zusätzlichen Stilen, die wir der Übersichthalber verborgen haben.

```css hidden live-sample___basic-corner-shape
body {
  font-family: "Helvetica", "Arial", sans-serif;
  width: 240px;
  margin: 20px auto;
}

div {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: cyan;
  background-image: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0),
    rgb(255 255 255 / 0.5)
  );
}

@supports not (corner-shape: scoop) {
  body {
    all: unset !important;
  }

  body::before {
    content: "Your browser does not support the 'corner-shape' property.";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
  }

  body > * {
    display: none;
  }
}
```

```css live-sample___basic-corner-shape
div {
  height: 180px;
  box-shadow: 1px 1px 3px gray;
  border-radius: 30px;
  corner-shape: scoop;
}
```

#### Ergebnis

Das gerenderte Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("basic-corner-shape", "100%", "240")}}

Beachten Sie, wie der `corner-shape` Wert von `scoop` den Container konkave Ecken gibt — die Kurve ist eine Umkehr der Standard-`border-radius`-Kurve. Beachten Sie auch, wie der Hintergrund, die Grenze und der Kastenschatten der Form der Kurve folgen.

### Demonstration der Eigenschaften, die der `corner-shape` folgen

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}} Element mit etwas Textinhalt darin.

```html live-sample___styles-following-corner-shape
<div>
  Some styles follow the corner shape, such as border, outline, box-shadow,
  overflow, and backdrop-filter. This is useful for helping various aspects of
  your design to not clash. As shown, it can result in some interesting visual
  effects, so you should test your design carefully.
</div>
```

#### CSS

Um zu demonstrieren, wie einige Stile der Form der Ecken eines Containers folgen, wenden wir ein {{cssxref("background-image")}} auf das Dokument `<body>` an, dann einen `border-radius` von `40px` und eine `corner-shape` von `scoop notch` auf das `<div>`.

Dann wenden wir Folgendes auf das `<div>` an:

- Eine halbtransparente {{cssxref("background-color")}}.
- Eine unterschiedliche Farbe und Stil von {{cssxref("border")}} auf jeder Seite.
- Ein {{cssxref("backdrop-filter")}}, der das `background-image` auf dem `<body>` invertiert.
- Einen `:hover` Stil, sodass Sie sehen können, dass der klickbare Inhaltsbereich außerhalb der Eckeform fällt.

Weitere Einrichtungsstile wurden der Übersicht halber verborgen.

```css hidden live-sample___styles-following-corner-shape
html {
  height: 100%;
}

body {
  font-family: "Helvetica", "Arial", sans-serif;
  height: inherit;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

div {
  width: 240px;
  height: 180px;
}

@supports not (corner-shape: scoop notch) {
  body {
    all: unset !important;
  }

  body::before {
    content: "Your browser does not support the 'corner-shape' property.";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
  }

  body > * {
    display: none;
  }
}
```

```css live-sample___styles-following-corner-shape
body {
  background: url("https://mdn.github.io/shared-assets/images/examples/leopard.jpg")
    no-repeat;
  background-size: cover;
}

div {
  border-radius: 40px;
  corner-shape: scoop notch;
  background-color: rgb(255 255 255 / 0.2);
  border-top: 3px solid blue;
  border-left: 6px dashed red;
  border-bottom: 9px solid yellow;
  border-right: 12px double green;
  backdrop-filter: invert(100%);
}

div:hover {
  background-color: white;
}
```

#### Ergebnis

Das gerenderte Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("styles-following-corner-shape", "100%", "240")}}

Beachten Sie, wie die meisten der gesetzten Stile der Form des `<div>` folgen, die sich aus seinen `corner-shape` Stilen ergibt, aber nicht alle. Der Inhalt wird relativ zur ursprünglichen Box angezeigt und der Hover-Effekt wird weiterhin angewendet, wenn Sie über den Text schweben, der über die oberen und unteren linken Ecken hinausragt.

### Vergleich der `corner-shape` Werte

In dieser Demonstration können Sie verschiedene `corner-shape` Werte auswählen und verschiedene {{cssxref("border-radius")}} Werte auf einen Container setzen und die Effekte vergleichen.

#### HTML

Das Markup für dieses Beispiel enthält eine {{htmlelement("select")}} Auswahl, aus der verschiedene `corner-shape` Werte ausgewählt werden können, einen [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) Schieberegler, um verschiedene `border-radius` Werte auszuwählen, und ein {{htmlelement("section")}} Element, um diese Werte anzuwenden. Die select {{htmlelement("option")}} Elemente bieten mehrere Schlüsselwort- und {{cssxref("superellipse()")}} Wertauswahlmöglichkeiten, unterteilt in zwei Gruppen unter Verwendung von {{htmlelement("optgroup")}} Elementen. Im Fall der Schlüsselwortwerte haben wir auch den `superellipse()` Wertäquivalent für jeden mit enthalten, getrennt durch ein Pipe-Zeichen.

```html live-sample___corner-shape-select
<form>
  <div>
    <label for="corner-shape-choice">Choose a corner-shape value:</label>
    <select id="corner-shape-choice">
      <optgroup label="Keywords">
        <option value="square">square | superellipse(infinity)</option>
        <option selected value="squircle">squircle | superellipse(2)</option>
        <option value="round">round | superellipse(1)</option>
        <option value="bevel">bevel | superellipse(0)</option>
        <option value="scoop">scoop | superellipse(-1)</option>
        <option value="notch">notch | superellipse(-infinity)</option>
      </optgroup>
      <optgroup label="Functions">
        <option>superellipse(3)</option>
        <option>superellipse(1.5)</option>
        <option>superellipse(0.5)</option>
        <option>superellipse(-0.5)</option>
        <option>superellipse(-1.5)</option>
        <option>superellipse(-3)</option>
      </optgroup>
    </select>
  </div>
  <div>
    <label for="radius-slider">Choose a border-radius value:</label>
    <input
      type="range"
      id="radius-slider"
      min="0"
      value="45"
      max="90"
      step="1" />
  </div>
</form>
<section></section>
```

#### CSS

Wir wenden ein {{cssxref("box-shadow")}} auf das `<section>` an. Außerdem geben wir den `<section>`- und Form-Elementen einige grundlegende Stile, die wir zur Übersichtlichkeit verborgen haben.

```css hidden live-sample___corner-shape-select
html {
  font-family: "Helvetica", "Arial", sans-serif;
}

body {
  width: fit-content;
  margin: 20px auto;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

select {
  padding: 3px 5px;
}

form div:nth-of-type(2) {
  margin-top: 5px;
  display: flex;
}

section {
  width: 100%;
  height: 180px;
  background-color: gold;
  background-image: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0),
    rgb(255 255 255 / 0.5)
  );
}

@supports not (corner-shape: scoop) {
  body {
    all: unset !important;
  }

  body::before {
    content: "Your browser does not support the 'corner-shape' property.";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
  }

  body > * {
    display: none;
  }
}
```

```css live-sample___corner-shape-select
section {
  box-shadow: 1px 1px 3px gray;
}
```

```js hidden live-sample___corner-shape-select
const rectangle = document.querySelector("section");
const select = document.querySelector("select");
const range = document.getElementById("radius-slider");

function setCorners() {
  rectangle.style.cornerShape = select.value;
  const brValue = `${range.value}px`;
  rectangle.style.borderRadius = brValue;
  rectangle.innerHTML = `<div><code>corner-shape: ${select.value};</code><br><code>border-radius: ${brValue};</code></div>`;
}

select.addEventListener("change", setCorners);
range.addEventListener("input", setCorners);
setCorners();
```

Das JavaScript, das die vom Benutzer ausgewählten Werte auf das `<section>` anwendet, wurde zur Übersichtlichkeit verborgen.

#### Ergebnis

Das gerenderte Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("corner-shape-select", "100%", "300")}}

Versuchen Sie, verschiedene Werte auszuwählen, um zu sehen, wie sich dies auf die Form der Ecken auswirkt.

### `superellipse()` Wertvergleich

In diesem Beispiel bieten wir zwei [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) Schieberegler, die es Ihnen ermöglichen, durch viele verschiedene `corner-shape` {{cssxref("superellipse()")}} Werte und {{cssxref("border-radius")}} Werte zu blättern, um die Effekte jedes einzelnen auf einen Container zu vergleichen.

#### HTML

Das Markup für dieses Beispiel enthält zwei `<input type="range">` Elemente, aus denen verschiedene `corner-shape` `superellipse()` und `border-radius` Werte ausgewählt werden können, und ein {{htmlelement("section")}} Element, auf das die Werte angewendet werden.

```html live-sample___superellipse-slider
<form>
  <div>
    <label for="superellipse-slider">Choose a superellipse() value:</label>
    <input
      type="range"
      id="superellipse-slider"
      min="-5"
      value="0"
      max="5"
      step="0.1" />
  </div>
  <div>
    <label for="radius-slider">Choose a border-radius value:</label>
    <input
      type="range"
      id="radius-slider"
      min="0"
      value="45"
      max="90"
      step="1" />
  </div>
</form>
<section></section>
```

#### CSS

Wir wenden ein {{cssxref("box-shadow")}} auf das `<section>` Element an. Weitere grundlegende Stile wurden der Übersichtlichkeit halber verborgen.

```css hidden live-sample___superellipse-slider
html {
  font-family: "Helvetica", "Arial", sans-serif;
}

body {
  width: fit-content;
  margin: 20px auto;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

form div {
  margin-top: 5px;
  display: flex;
}

section {
  width: 100%;
  height: 180px;
  background-color: orange;
  background-image: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0),
    rgb(255 255 255 / 0.5)
  );
}

@supports not (corner-shape: superellipse(0)) {
  body {
    all: unset !important;
  }

  body::before {
    content: "Your browser does not support the 'corner-shape' property.";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
  }

  body > * {
    display: none;
  }
}
```

```css live-sample___superellipse-slider
section {
  box-shadow: 1px 1px 3px gray;
}
```

```js hidden live-sample___superellipse-slider
const rectangle = document.querySelector("section");
const superEllipseRange = document.getElementById("superellipse-slider");
const borderRadiusRange = document.getElementById("radius-slider");

function setCorners() {
  const seValue = `superellipse(${superEllipseRange.value})`;
  rectangle.style.cornerShape = seValue;
  const brValue = `${borderRadiusRange.value}px`;
  rectangle.style.borderRadius = brValue;
  rectangle.innerHTML = `<div><code>corner-shape: ${seValue};</code><br><code>border-radius: ${brValue};</code></div>`;
}

superEllipseRange.addEventListener("input", setCorners);
borderRadiusRange.addEventListener("input", setCorners);
setCorners();
```

Das JavaScript, das die vom Benutzer ausgewählten Werte auf das `<section>` anwendet, wurde der Übersichtlichkeit halber verborgen.

#### Ergebnis

Das gerenderte Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("superellipse-slider", "100%", "300")}}

Versuchen Sie, verschiedene Werte auszuwählen, um zu sehen, wie sich dies auf die Form der Ecken auswirkt.

### Animation von `corner-shape`

In diesem Beispiel demonstrieren wir, wie die `corner-shape` Eigenschaft animiert werden kann.

#### HTML

```html live-sample___corner-shape-animation
<div></div>
```

#### CSS

Wir erstellen eine Reihe von {{cssxref("@keyframes")}}, die sanft zwischen den `corner-shape` Werten von `square` und `notch` animieren. Dann wenden wir eine {{cssxref("animation")}} basierend auf diesen `@keyframes` auf das `<div>` an, wenn sein enthaltendes `<html>` Element überfahren oder fokussiert wird. Weitere grundlegende `<div>` Stile wurden der Übersichtlichkeit halber verborgen.

```css hidden live-sample___corner-shape-animation
body {
  width: 200px;
  margin: 20px auto;
}

div {
  width: 100%;
  height: 200px;
  background-color: green;
  background-image: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0),
    rgb(255 255 255 / 0.5)
  );
  box-shadow: 1px 1px 3px gray;
  border-radius: 50%;
  corner-shape: square;
  outline: none;
}

@supports not (corner-shape: square) {
  body {
    all: unset !important;
  }

  body::before {
    content: "Your browser does not support the 'corner-shape' property.";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
  }

  body > * {
    display: none;
  }
}
```

```css live-sample___corner-shape-animation
@keyframes corner-pulse {
  0% {
    corner-shape: square;
  }

  /* To make the starting point apparent, let us keep
  the shape the same for a small duration. */
  20% {
    corner-shape: square;
  }

  100% {
    corner-shape: notch;
  }
}

div {
  animation: corner-pulse infinite alternate 4s linear;
}
```

#### Ergebnis

Das gerenderte Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("corner-shape-animation", "100%", "270")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("border-radius")}}
- [CSS-Ränder und Box-Dekorationen](/de/docs/Web/CSS/CSS_borders_and_box_decorations) Modul
- [CSS-Hintergründe und Ränder](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) Modul
