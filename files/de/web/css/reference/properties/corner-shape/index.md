---
title: "`corner-shape` CSS-Eigenschaft"
short-title: corner-shape
slug: Web/CSS/Reference/Properties/corner-shape
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

{{SeeCompatTable}}

Die **`corner-shape`** [CSS](/de/docs/Web/CSS) [Shorthand](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) Eigenschaft legt die Form der Ecken eines Kastens innerhalb des durch den Wert der {{cssxref("border-radius")}} definierten Bereichs fest.

## Zusammensetzende Eigenschaften

Diese Eigenschaft ist eine Shorthand für die folgenden physikalischen Eigenschaften:

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

Die `corner-shape` Eigenschaft kann mit einem, zwei, drei oder vier {{cssxref("&lt;corner-shape-value>")}} Werten spezifiziert werden:

- Wenn **ein** Wert verwendet wird, spezifiziert er die Form **aller vier Ecken**.
- Wenn **zwei** Werte verwendet werden, wird die erste Form auf die **oben links und unten rechts** Ecken angewandt, und die zweite auf die **oben rechts und unten links** Ecken.
- Wenn **drei** Werte verwendet werden, spezifiziert der erste Wert die Form der **oben links Ecke**, der zweite die der **oben rechts und unten links Ecken**, und der dritte die der **unten rechts Ecke**.
- Wenn vier Werte verwendet werden, spezifizieren sie die Form der **oben links**, **oben rechts**, **unten rechts** und **unten links** Ecken in dieser Reihenfolge (im Uhrzeigersinn).

### Werte

- {{cssxref("corner-shape-value")}}
  - : Ein {{cssxref("superellipse()")}} oder ein Schlüsselwortäquivalent, das die Form der Ecke beschreibt.

## Beschreibung

Die `corner-shape` Eigenschaft wird verwendet, um die Form von abgerundeten Ecken zu ändern, die durch die {{cssxref("border-radius")}} Eigenschaft und ihre zugehörigen Longhands erstellt wurden. Bereits abgerundete Ecken können hinsichtlich des angewandten Rundungsgrades weiter angepasst werden, was die Erstellung von z. B. abgeschrägten, gekerbten und "Squircle" Ecken ermöglicht. An den Container angewandte Rahmen, Umrisse, Schatten und Hintergrundeffekte folgen der definierten Eckenform.

Wenn kein `border-radius` auf einen Container angewendet wird oder wenn der `border-radius` zu `0` aufgelöst wird, hat `corner-shape` keine Wirkung.

Die `corner-shape` Shorthand-Eigenschaft und ihre zugehörigen [`corner-*-shape` Shorthands und Longhands](#corner--shape_shorthands_and_longhands) akzeptieren ein bis vier {{cssxref("&lt;corner-shape-value>")}} Werte. Jeder wird direkt als eine {{cssxref("superellipse()")}} Funktion oder ein Schlüsselwort, das eine häufige Form beschreibt, spezifiziert. Jedes Schlüsselwort ist einem bestimmten `superellipse()` Wert äquivalent.

Der Standard-(Initial-)Wert von `corner-shape` ist `round`, was denselben Effekt hat, als würde man `border-radius` alleine verwenden, ohne `corner-shape`. Es gibt auch einen Schlüsselwortwert `square`, der denselben Effekt wie die standardmäßigen quadratischen Ecken hat und effektiv jeglichen angewandten `border-radius` entfernt. Der Wert `bevel` hat den Effekt, eine gerade Linie zwischen den beiden Enden eines `border-radius` zu zeichnen.

Verschiedene `corner-shape` Werte können sanft animiert werden, da die `superellipse()` Äquivalente der Schlüsselwortwerte als Interpolationswerte verwendet werden.

Die `corner-shape` Shorthand ist besonders nützlich, wenn Sie alle vier Ränder gleich haben möchten oder unterschiedliche Werte mit einer einzigen Deklaration festlegen möchten. Um nur eine oder zwei Eckenformen gleichzeitig festzulegen, verwenden Sie die `corner-*-shape` Shorthands und Longhands.

### `corner-*-shape` Shorthands und Longhands

Die `corner-shape` Shorthand definiert die Formen aller vier Ecken in einer Deklaration.

Um nur eine Eckenform gleichzeitig festzulegen, verwenden Sie die langen Eckenform-Eigenschaften:

- Physikalische lange Eckenform-Eigenschaften:
  - {{cssxref("corner-bottom-left-shape")}}
  - {{cssxref("corner-bottom-right-shape")}}
  - {{cssxref("corner-top-left-shape")}}
  - {{cssxref("corner-top-right-shape")}}
- Logische lange Eckenform-Eigenschaften:
  - {{cssxref("corner-start-start-shape")}}
  - {{cssxref("corner-start-end-shape")}}
  - {{cssxref("corner-end-start-shape")}}
  - {{cssxref("corner-end-end-shape")}}

Um zwei Eckenformen gleichzeitig festzulegen, verwenden Sie die seitlichen Shorthands:

- Physikalische seitliche Shorthand-Eigenschaften:
  - {{cssxref("corner-top-shape")}}
  - {{cssxref("corner-right-shape")}}
  - {{cssxref("corner-bottom-shape")}}
  - {{cssxref("corner-left-shape")}}
- Logische seitliche Shorthand-Eigenschaften:
  - {{cssxref("corner-block-start-shape")}}
  - {{cssxref("corner-block-end-shape")}}
  - {{cssxref("corner-inline-start-shape")}}
  - {{cssxref("corner-inline-end-shape")}}

### Einschränken von gegenüberliegenden Eckenform-Radien

Wenn gegenüberliegende Ecken `border-radius` und `corner-shape` Werte haben, die dazu führen würden, dass sich die Formen überlappen, beschränkt der Browser die Werte, um die Überlappung zu verhindern.

Zum Beispiel würden folgende Werte dazu führen, dass sich die oben links und unten rechts Ecken überlappen, daher passt der Browser die erste `border-radius` Komponente an einen Wert an, der dies vermeidet.

```css
div {
  width: 480px;
  height: 200px;
  background-color: goldenrod;
  border-radius: 80% 20px;
  corner-shape: scoop;
}
```

### Eigenschaften, die der `corner-shape` folgen

Die folgenden Eigenschaften folgen alle der Form der Ecke, wenn sie auf den Container angewendet werden:

- {{cssxref("background-color")}}
- {{cssxref("background-image")}}
- {{cssxref("border")}}
- {{cssxref("outline")}}
- {{cssxref("box-shadow")}}
- {{cssxref("overflow")}}
- {{cssxref("backdrop-filter")}}

Siehe [Demonstration von Eigenschaften, die der `corner-shape` folgen](#demonstration_of_properties_that_follow_the_corner-shape) für einige Beispiele.

### Interaktion mit `border-shape`

Die `corner-shape` Eigenschaft hat keinen Effekt, wenn die {{cssxref("border-shape")}} Eigenschaft auf einem Element gesetzt ist. Dies liegt daran, dass `border-shape` nicht mit `border-radius` kompatibel ist: Wenn `border-shape` gesetzt ist, wird jeder angegebene `border-radius` ignoriert; `corner-shape` hängt von `border-radius` ab und hat daher ebenfalls keine Wirkung.

Wenn Sie geformte Ecken in einem `border-shape` verwenden möchten, müssen Sie sie direkt als Teil der Form zeichnen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `corner-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}} Element.

```html live-sample___basic-corner-shape
<div>Nice scooped corners</div>
```

#### CSS

Wir geben der Box eine feste {{cssxref("height")}}, einen {{cssxref("box-shadow")}}, einen `border-radius` von 30 Pixeln und eine `corner-shape` von `scoop`, zusammen mit einigen zusätzlichen, der Übersichtlichkeit halber ausgeblendeten, Styles.

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

Das gerenderte Ergebnis sieht so aus:

{{EmbedLiveSample("basic-corner-shape", "100%", "240")}}

Beachten Sie, wie der `corner-shape` Wert von `scoop` dem Container konkave Ecken gibt — die Kurve ist eine Umkehrung der standardmäßigen `border-radius` Kurve. Beachten Sie auch, wie der Hintergrund, der Rand und der Box-Schatten der Kurvenform folgen.

### Demonstration von Eigenschaften, die der `corner-shape` folgen

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

Um zu demonstrieren, wie einige Styles der Form der Ecken eines Containers folgen, wenden wir ein {{cssxref("background-image")}} auf den Dokumenten `<body>` an, dann einen `border-radius` von `40px` und eine `corner-shape` von `scoop notch` auf das `<div>`.

Wir wenden dann das folgende auf das `<div>` an:

- Eine halbtransparente {{cssxref("background-color")}}.
- Eine unterschiedliche Farbe und ein Stil des {{cssxref("border")}} auf jedem Rand.
- Einen {{cssxref("backdrop-filter")}}, der das auf das `<body>` gesetzte `background-image` invertiert.
- Einen `:hover` Stil, damit Sie sehen können, dass der klickbare Inhaltsbereich außerhalb der Eckenform fällt.

Zusätzliche Einrichtungsstile sind der Übersichtlichkeit halber ausgeblendet.

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
  :root::before {
    content: "Your browser does not support the 'corner-shape' property.";
    color: black;
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
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

Das gerenderte Ergebnis sieht so aus:

{{EmbedLiveSample("styles-following-corner-shape", "100%", "240")}}

Beachten Sie, wie die meisten der gesetzten Styles der Form des `<div>` folgen, die aus ihren `corner-shape` Styles resultieren, aber nicht alle. Der Inhalt wird relativ zum ursprünglichen Kasten angezeigt, und der Hover-Effekt wird noch angewandt, wenn Sie über den Text, der aus den oberen und unteren linken Ecken herausragt, schweben.

### Vergleich der `corner-shape` Werte

In dieser Demonstration können Sie verschiedene `corner-shape` Werte auswählen und unterschiedliche {{cssxref("border-radius")}} Werte auf einen Container setzen und die Effekte vergleichen.

#### HTML

Das Markup für dieses Beispiel enthält einen {{htmlelement("select")}} Picker, aus dem unterschiedliche `corner-shape` Werte ausgewählt werden können, ein [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) Schieberegler zur Auswahl verschiedener `border-radius` Werte, und ein {{htmlelement("section")}} Element, um diese Werte darauf anzuwenden. Die select {{htmlelement("option")}} Elemente bieten mehrere Schlüsselwort- und {{cssxref("superellipse()")}} Wertoptionen, unterteilt in zwei Gruppen mittels {{htmlelement("optgroup")}} Elementen. Im Fall der Schlüsselwortwerte haben wir auch den `superellipse()` Wertäquivalenten für jeden hinzugefügt, getrennt durch ein Pipe-Zeichen.

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

Wir wenden einen {{cssxref("box-shadow")}} auf das `<section>` an. Wir geben den `<section>` und Formularelementen auch einige grundlegende Stile, die wir der Übersichtlichkeit halber ausgeblendet haben.

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
  :root::before {
    content: "Your browser does not support the 'corner-shape' property.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
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

Das JavaScript, das die vom Benutzer ausgewählten Werte auf das `<section>` anwendet, ist der Übersichtlichkeit halber ausgeblendet.

#### Ergebnis

Das gerenderte Ergebnis sieht so aus:

{{EmbedLiveSample("corner-shape-select", "100%", "300")}}

Versuchen Sie, unterschiedliche Werte auszuwählen, um zu sehen, wie dies die Form der Ecken beeinflusst.

### `superellipse()` Wertvergleich

In diesem Beispiel bieten wir zwei [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) Schieberegler, die es Ihnen ermöglichen, durch viele verschiedene `corner-shape` {{cssxref("superellipse()")}} Werte und {{cssxref("border-radius")}} Werte zu schalten, um die Effekte von jedem auf einen Container zu vergleichen.

#### HTML

Das Markup für dieses Beispiel enthält zwei `<input type="range">` Elemente, aus denen unterschiedliche `corner-shape` `superellipse()` und `border-radius` Werte ausgewählt werden können, und ein {{htmlelement("section")}} Element, um diese Werte darauf anzuwenden.

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

Wir wenden einen {{cssxref("box-shadow")}} auf das `<section>` Element an. Zusätzliche grundlegende Stile sind der Übersichtlichkeit halber ausgeblendet.

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
  :root::before {
    content: "Your browser does not support the 'corner-shape' property.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
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

Das JavaScript, das die vom Benutzer ausgewählten Werte auf das `<section>` anwendet, ist der Übersichtlichkeit halber ausgeblendet.

#### Ergebnis

Das gerenderte Ergebnis sieht so aus:

{{EmbedLiveSample("superellipse-slider", "100%", "300")}}

Versuchen Sie, unterschiedliche Werte auszuwählen, um zu sehen, wie dies die Form der Ecken beeinflusst.

### Animieren von `corner-shape`

In diesem Beispiel demonstrieren wir, wie die `corner-shape` Eigenschaft animiert werden kann.

#### HTML

```html live-sample___corner-shape-animation
<div></div>
```

#### CSS

Wir erstellen ein Satz von {{cssxref("@keyframes")}}, die sanft zwischen den `corner-shape` Werten von `square` und `notch` animieren. Wir wenden dann eine {{cssxref("animation")}} basierend auf diesen `@keyframes` auf das `<div>` an, wenn sein enthaltendes `<html>` Element überfahren oder fokussiert wird. Zusätzliche grundlegende `<div>` Stile sind der Übersichtlichkeit halber ausgeblendet.

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
  :root::before {
    content: "Your browser does not support the 'corner-shape' property.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
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

Das gerenderte Ergebnis sieht so aus:

{{EmbedLiveSample("corner-shape-animation", "100%", "270")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("border-radius")}}
- {{cssxref("border-shape")}}
- [CSS borders and box decorations](/de/docs/Web/CSS/Guides/Borders_and_box_decorations) Modul
- [CSS backgrounds and borders](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
- [CSS animations](/de/docs/Web/CSS/Guides/Animations) Modul
