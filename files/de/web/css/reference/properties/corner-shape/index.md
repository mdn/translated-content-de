---
title: "`corner-shape` CSS-Eigenschaft"
short-title: corner-shape
slug: Web/CSS/Reference/Properties/corner-shape
l10n:
  sourceCommit: a8b7faffbd3fdeae5c0be97793d963d8a31cd1cf
---

{{SeeCompatTable}}

Die **`corner-shape`** [Shorthand](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Form der Ecken eines Rahmens fest, innerhalb des Bereichs, der durch den Wert der {{cssxref("border-radius")}}-Eigenschaft spezifiziert wird.

## Bestandeigenschaften

Die `corner-shape`-Eigenschaft ist eine Verkürzung für die folgenden physikalischen Eigenschaften:

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

Die `corner-shape`-Eigenschaft kann mit einem, zwei, drei oder vier {{cssxref("&lt;corner-shape-value>")}}-Werten angegeben werden:

- Wenn **ein** Wert verwendet wird, legt er die Form von **allen vier Ecken** fest.
- Wenn **zwei** Werte verwendet werden, wird die erste Form auf die **oben-links und unten-rechts** Ecken angewendet und die zweite auf die **oben-rechts und unten-links** Ecken.
- Wenn **drei** Werte verwendet werden, legt die erste Form die Form der **oben-links Ecke** fest, die zweite die der **oben-rechts und unten-links Ecken**, und die dritte die der **unten-rechts Ecke**.
- Wenn vier Werte verwendet werden, spezifizieren diese die Form der **oben-links**, **oben-rechts**, **unten-rechts** und **unten-links** Ecken, in dieser Reihenfolge (im Uhrzeigersinn).

### Werte

- {{cssxref("corner-shape-value")}}
  - : Ein {{cssxref("superellipse()")}} oder ein entsprechendes Schlüsselwort, das die Form der Ecke beschreibt.

## Beschreibung

Die `corner-shape`-Eigenschaft wird verwendet, um die Form von abgerundeten Ecken zu modifizieren, die durch die {{cssxref("border-radius")}}-Eigenschaft und ihre zugehörigen Langformen erstellt wurden. Bereits abgerundete Ecken können weiter hinsichtlich des angewandten Rundungsgrades angepasst werden, was die Erstellung von z.B. abgeschrägten, eingekerbten und Squircle-Ecken ermöglicht. Ränder, Umrisse, Schatten und Hintergrundeffekte, die auf den Container angewendet werden, folgen der definierten Eckform.

Wenn auf einen Container kein `border-radius` angewendet wird, oder der `border-radius` zu `0` aufgelöst wird, hat `corner-shape` keinen Effekt.

Die `corner-shape`-Kurzschreibweise und ihre zugehörigen [`corner-*-shape` Kurz- und Langschreibweisen](#corner--shape_shorthands_and_longhands) akzeptieren ein bis vier {{cssxref("&lt;corner-shape-value>")}}-Werte. Jeder wird direkt als {{cssxref("superellipse()")}}-Funktion oder als ein Schlüsselwort beschrieben, das eine übliche Form beschreibt. Jedes Schlüsselwort entspricht einem spezifischen `superellipse()`-Wert.

Der Standardwert (Initialwert) von `corner-shape` ist `round`, was denselben Effekt hat wie die Verwendung von `border-radius` allein, ohne `corner-shape`. Es gibt auch den Schlüsselwortwert `square`, der denselben Effekt wie standardmäßige quadratische Ecken hat, was effektiv jeden angewandten `border-radius` entfernt. Der `bevel`-Wert hat den Effekt, eine gerade Linie zwischen den beiden Enden eines `border-radius` zu ziehen.

Verschiedene `corner-shape`-Werte können nahtlos animiert werden, da die `superellipse()`-Äquivalente der Schlüsselwortwerte als Interpolationswerte verwendet werden.

Die `corner-shape`-Kurzschreibweise ist besonders nützlich, wenn Sie möchten, dass alle vier Ränder gleich sind, oder wenn Sie unterschiedliche Werte mit einer einzigen Deklaration festlegen möchten. Um nur ein oder zwei Eckformen gleichzeitig festzulegen, verwenden Sie die `corner-*-shape`-Kurzschreibweisen und Langformen.

### `corner-*-shape` Kurz- und Langschreibweisen

Die `corner-shape`-Kurzschreibweise legt die Formen aller vier Ecken in einer Deklaration fest.

Um nur eine Eckform gleichzeitig festzulegen, verwenden Sie die Eckform-Langformen:

- Physikalische Langhand-Eckform-Eigenschaften:
  - {{cssxref("corner-bottom-left-shape")}}
  - {{cssxref("corner-bottom-right-shape")}}
  - {{cssxref("corner-top-left-shape")}}
  - {{cssxref("corner-top-right-shape")}}
- Logische Langhand-Eckform-Eigenschaften:
  - {{cssxref("corner-start-start-shape")}}
  - {{cssxref("corner-start-end-shape")}}
  - {{cssxref("corner-end-start-shape")}}
  - {{cssxref("corner-end-end-shape")}}

Um zwei Eckformen gleichzeitig festzulegen, verwenden Sie die Seiten-Kurzschreibweisen:

- Physikalische Seiten-Kurzschreibweisen:
  - {{cssxref("corner-top-shape")}}
  - {{cssxref("corner-right-shape")}}
  - {{cssxref("corner-bottom-shape")}}
  - {{cssxref("corner-left-shape")}}
- Logische Seiten-Kurzschreibweisen:
  - {{cssxref("corner-block-start-shape")}}
  - {{cssxref("corner-block-end-shape")}}
  - {{cssxref("corner-inline-start-shape")}}
  - {{cssxref("corner-inline-end-shape")}}

### Begrenzung der gegenüberliegenden Eckformradien

Wenn gegenüberliegende Ecken `border-radius`- und `corner-shape`-Werte gesetzt haben, die dazu führen würden, dass sich die Formen überlappen, beschränkt der Browser die Werte, um die Überlappung zu verhindern.

Beispielsweise würden die folgenden Werte dazu führen, dass sich die Ecken oben links und unten rechts überlappen, daher passt der Browser die erste `border-radius`-Komponente auf einen Wert an, der dies vermeidet.

```css
div {
  width: 480px;
  height: 200px;
  background-color: goldenrod;
  border-radius: 80% 20px;
  corner-shape: scoop;
}
```

### Eigenschaften, die der Eckform folgen

Die folgenden Eigenschaften folgen alle der Form der Ecke, wenn sie auf den Container gesetzt werden:

- {{cssxref("background-color")}}
- {{cssxref("background-image")}}
- {{cssxref("border")}}
- {{cssxref("outline")}}
- {{cssxref("box-shadow")}}
- {{cssxref("overflow")}}
- {{cssxref("backdrop-filter")}}

Sehen Sie [Demonstration von Eigenschaften, die der `corner-shape` folgen](#demonstration_of_properties_that_follow_the_corner-shape) für einige Beispiele.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `corner-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}}-Element.

```html live-sample___basic-corner-shape
<div>Nice scooped corners</div>
```

#### CSS

Wir geben dem Rahmen eine feste {{cssxref("height")}}, einen {{cssxref("box-shadow")}}, einen `border-radius` von 30 Pixeln und eine `corner-shape` von `scoop`, zusammen mit einigen zusätzlichen Styles, die wir der Kürze halber ausgeblendet haben.

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

Das gerenderte Ergebnis sieht wie folgt aus:

{{EmbedLiveSample("basic-corner-shape", "100%", "240")}}

Beachten Sie, wie der `corner-shape`-Wert `scoop` dem Container konkave Ecken verleiht – die Kurve ist eine Inversion der standardmäßigen `border-radius`-Kurve. Beachten Sie auch, wie der Hintergrund, der Rahmen und der Schatten der Form der Kurve folgen.

### Demonstration von Eigenschaften, die der `corner-shape` folgen

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}}-Element mit etwas Textinhalt darin.

```html live-sample___styles-following-corner-shape
<div>
  Some styles follow the corner shape, such as border, outline, box-shadow,
  overflow, and backdrop-filter. This is useful for helping various aspects of
  your design to not clash. As shown, it can result in some interesting visual
  effects, so you should test your design carefully.
</div>
```

#### CSS

Um zu demonstrieren, wie einige Styles der Form der Ecken eines Containers folgen, setzen wir ein {{cssxref("background-image")}} auf das Dokument `<body>`, dann wenden wir einen `border-radius` von `40px` und eine `corner-shape` von `scoop notch` auf das `<div>` an.

Wir wenden dann das folgende auf das `<div>` an:

- Eine halbtransparente {{cssxref("background-color")}}.
- Eine andere Farbe und Stil des {{cssxref("border")}} an jeder Kante.
- Ein {{cssxref("backdrop-filter")}}, der das `background-image` auf dem `<body>` invertiert.
- Einen `:hover`-Stil, sodass Sie sehen können, dass der klickbare Inhaltsbereich außerhalb der Eckform fällt.

Zusätzliche Setup-Styles wurden der Kürze halber ausgeblendet.

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

Das gerenderte Ergebnis sieht wie folgt aus:

{{EmbedLiveSample("styles-following-corner-shape", "100%", "240")}}

Beachten Sie, wie die meisten der gesetzten Styles der Form des `<div>` folgen, die sich aus ihren `corner-shape`-Styles ergibt, aber nicht alle. Der Inhalt wird relativ zur ursprünglichen Box angezeigt, und der Hover-Effekt wird weiterhin angewendet, wenn Sie über den Text fahren, der oben- und unten-links übersteht.

### Vergleich von `corner-shape`-Werten

In dieser Demonstration können Sie verschiedene `corner-shape`-Werte wählen und verschiedene {{cssxref("border-radius")}}-Werte auf einen Container anwenden und die Effekte vergleichen.

#### HTML

Das Markup für dieses Beispiel enthält einen {{htmlelement("select")}}-Picker, aus dem verschiedene `corner-shape`-Werte ausgewählt werden können, eine [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Schieberegler zur Auswahl verschiedener `border-radius`-Werte und ein {{htmlelement("section")}}-Element, um diese Werte anzuwenden. Die `select`-{{htmlelement("option")}}-Elemente bieten mehrere Schlüsselwort- und {{cssxref("superellipse()")}}-Wertauswahlen, die in zwei Gruppen mit {{htmlelement("optgroup")}}-Elementen unterteilt sind. Im Fall der Schlüsselwortwerte haben wir auch den `superellipse()`-Wert entsprechend für jeden hinzugefügt, getrennt durch ein Pipe-Zeichen.

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

Wir wenden einen {{cssxref("box-shadow")}} auf das `<section>` an. Wir geben dem `<section>` und den Formularelementen auch einige grundlegende Styles, die wir der Kürze halber ausgeblendet haben.

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

Das JavaScript, das die benutzergewählten Werte auf das `<section>` anwendet, wurde der Kürze halber ausgeblendet.

#### Ergebnis

Das gerenderte Ergebnis sieht wie folgt aus:

{{EmbedLiveSample("corner-shape-select", "100%", "300")}}

Versuchen Sie, verschiedene Werte auszuwählen, um zu sehen, wie sich dies auf die Form der Ecken auswirkt.

### Vergleich der `superellipse()`-Werte

In diesem Beispiel bieten wir zwei [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Schieberegler, mit denen Sie durch viele verschiedene `corner-shape`-{{cssxref("superellipse()")}}-Werte und {{cssxref("border-radius")}}-Werte blättern können, um die Effekte jedes einzelnen auf einen Container zu vergleichen.

#### HTML

Das Markup für dieses Beispiel enthält zwei `<input type="range">`-Elemente, mit denen verschiedene `corner-shape`-`superellipse()`- und `border-radius`-Werte ausgewählt werden können, und ein {{htmlelement("section")}}-Element, um diese Werte anzuwenden.

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

Wir wenden einen {{cssxref("box-shadow")}} auf das `<section>`-Element an. Zusätzliche grundlegende Styles wurden der Kürze halber ausgeblendet.

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

Das JavaScript, das die benutzergewählten Werte auf das `<section>` anwendet, wurde der Kürze halber ausgeblendet.

#### Ergebnis

Das gerenderte Ergebnis sieht wie folgt aus:

{{EmbedLiveSample("superellipse-slider", "100%", "300")}}

Versuchen Sie, verschiedene Werte auszuwählen, um zu sehen, wie sich dies auf die Form der Ecken auswirkt.

### Animation von `corner-shape`

In diesem Beispiel demonstrieren wir, wie die `corner-shape`-Eigenschaft animiert werden kann.

#### HTML

```html live-sample___corner-shape-animation
<div></div>
```

#### CSS

Wir erstellen eine Reihe von {{cssxref("@keyframes")}}, die nahtlos zwischen den `corner-shape`-Werten von `square` und `notch` animieren. Wir wenden dann eine {{cssxref("animation")}}, basierend auf diesen `@keyframes`, auf das `<div>` an, wenn sein enthaltendes `<html>`-Element überfahren oder fokussiert wird. Zusätzliche grundlegende `<div>`-Styles wurden der Kürze halber ausgeblendet.

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

Das gerenderte Ergebnis sieht wie folgt aus:

{{EmbedLiveSample("corner-shape-animation", "100%", "270")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("border-radius")}}
- [CSS-Ränder und Kastendekorationen](/de/docs/Web/CSS/Guides/Borders_and_box_decorations) Modul
- [CSS-Hintergründe und Ränder](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
