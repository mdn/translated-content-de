---
title: corner-shape
slug: Web/CSS/Reference/Properties/corner-shape
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

Die **`corner-shape`** [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft legt die Form der Ecken eines Rahmens fest, innerhalb des durch den Wert der {{cssxref("border-radius")}} Eigenschaft angegebenen Bereichs.

## Zusammengesetzte Eigenschaften

Die `corner-shape` Eigenschaft ist eine Kurzschreibweise für die folgenden physischen Eigenschaften:

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

- Wenn **ein** Wert verwendet wird, legt er die Form **aller vier Ecken** fest.
- Wenn **zwei** Werte verwendet werden, gilt die erste Form für die **obere linke und untere rechte** Ecke, und die zweite für die **obere rechte und untere linke Ecke**.
- Wenn **drei** Werte verwendet werden, legt die erste Form die Form der **oberen linken Ecke** fest, die zweite für die **oberen rechten und unteren linken Ecken**, und die dritte für die **untere rechte Ecke**.
- Bei vier Werten legen diese die Form der **oberen linken**, **oberen rechten**, **unteren rechten** und **unteren linken** Ecken fest, in dieser Reihenfolge (im Uhrzeigersinn).

### Werte

- {{cssxref("corner-shape-value")}}
  - : Ein {{cssxref("superellipse()")}} oder ein Schlüsselwortäquivalent, das die Form der Ecke beschreibt.

## Beschreibung

Die `corner-shape` Eigenschaft wird verwendet, um die Form von abgerundeten Ecken, die durch die {{cssxref("border-radius")}} Eigenschaft und ihre zugehörigen Langformen erstellt werden, zu modifizieren. Bereits abgerundete Ecken können weiter angepasst werden hinsichtlich des Grades der Rundung, der auf sie angewendet wird, was die Erstellung von beispielsweise abgeschrägten, ausgeschnittenen und quatratischen Ecken ermöglicht. Ränder, Umrisse, Schatten und Hintergrundeffekte, die auf das Container-Element angewendet werden, folgen der definierten Eckform.

Wenn eine `border-radius` nicht auf ein Container-Element angewendet wird oder die `border-radius` zu `0` aufgelöst wird, hat `corner-shape` keinen Effekt.

Die `corner-shape` Kurzschreibweise und ihre zugehörigen [`corner-*-shape` Kurz- und Langformen](#corner--shape_shorthands_and_longhands) akzeptieren ein bis vier {{cssxref("&lt;corner-shape-value>")}} Werte. Jeder wird direkt als {{cssxref("superellipse()")}} Funktion oder ein Schlüsselwort, das eine übliche Form beschreibt, angegeben. Jedes Schlüsselwort entspricht einem bestimmten `superellipse()` Wert.

Der Standardwert (Initialwert) von `corner-shape` ist `round`, was denselben Effekt hat, wie die alleinige Verwendung von `border-radius` ohne `corner-shape`. Es gibt auch einen Schlüsselwortwert `square`, der denselben Effekt wie Standardrechteckecken hat und effektiv jede angewendete `border-radius` entfernt. Der Wert `bevel` hat den Effekt, eine gerade Linie zwischen den beiden Enden eines `border-radius` zu zeichnen.

Unterschiedliche `corner-shape` Werte können flüssig animiert werden, da die `superellipse()` Äquivalente der Schlüsselwortwerte als Interpolationswerte verwendet werden.

Die `corner-shape` Kurzschreibweise ist besonders nützlich, wenn Sie alle vier Ränder gleich haben möchten oder unterschiedliche Werte mit einer einzigen Deklaration festlegen möchten. Um nur ein oder zwei Eckformen gleichzeitig festzulegen, verwenden Sie die `corner-*-shape` Kurz- und Langformen.

### `corner-*-shape` Kurz- und Langformen

Die `corner-shape` Kurzschreibweise definiert die Formen aller vier Ecken in einer Erklärung.

Um nur eine Eckform gleichzeitig festzulegen, verwenden Sie die Langformen der Eckform:

- Physikalische Langform-Eckform-Eigenschaften:
  - {{cssxref("corner-bottom-left-shape")}}
  - {{cssxref("corner-bottom-right-shape")}}
  - {{cssxref("corner-top-left-shape")}}
  - {{cssxref("corner-top-right-shape")}}
- Logische Langform-Eckform-Eigenschaften:
  - {{cssxref("corner-start-start-shape")}}
  - {{cssxref("corner-start-end-shape")}}
  - {{cssxref("corner-end-start-shape")}}
  - {{cssxref("corner-end-end-shape")}}

Um zwei Eckformen gleichzeitig festzulegen, verwenden Sie die Seiten-Kurzschreibweisen:

- Physikalische Seiten-Kurzform-Eigenschaften:
  - {{cssxref("corner-top-shape")}}
  - {{cssxref("corner-right-shape")}}
  - {{cssxref("corner-bottom-shape")}}
  - {{cssxref("corner-left-shape")}}
- Logische Seiten-Kurzform-Eigenschaften:
  - {{cssxref("corner-block-start-shape")}}
  - {{cssxref("corner-block-end-shape")}}
  - {{cssxref("corner-inline-start-shape")}}
  - {{cssxref("corner-inline-end-shape")}}

### Einschränkung der Radien gegenüberliegender Eckformen

Wenn gegenüberliegende Ecken `border-radius` und `corner-shape` Werte gesetzt haben, die die Formen überlappen würden, schränkt der Browser die Werte ein, um die Überlappung zu verhindern.

Zum Beispiel würden die folgenden Werte verursachen, dass die oberen linken und unteren rechten Ecken sich überlappen, daher passt der Browser die erste `border-radius` Komponente auf einen Wert an, der dies verhindert.

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

Die folgenden Eigenschaften folgen alle der Form der Ecke, wenn sie auf das Container-Element gesetzt sind:

- {{cssxref("background-color")}}
- {{cssxref("background-image")}}
- {{cssxref("border")}}
- {{cssxref("outline")}}
- {{cssxref("box-shadow")}}
- {{cssxref("overflow")}}
- {{cssxref("backdrop-filter")}}

Siehe [Demonstration von Eigenschaften, die der `corner-shape` folgen](#demonstration_of_properties_that_follow_the_corner-shape) für einige Beispiele.

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

Wir geben der Box eine feste {{cssxref("height")}}, einen {{cssxref("box-shadow")}}, einen `border-radius` von 30 Pixeln und einen `corner-shape` von `scoop`, zusammen mit einigen zusätzlichen Stilen, die wir der Kürze halber ausgeblendet haben.

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

Das gerenderte Ergebnis sieht so aus:

{{EmbedLiveSample("basic-corner-shape", "100%", "240")}}

Beachten Sie, wie der `corner-shape` Wert von `scoop` den Container konkave Ecken gibt — die Kurve ist eine Inversion der Standard-`border-radius` Kurve. Beachten Sie auch, wie der Hintergrund, der Rand und der Box-Schatten der Form der Kurve folgen.

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

Um zu demonstrieren, wie einige Stile der Form der Ecken eines Containers folgen, verwenden wir ein {{cssxref("background-image")}} für das Dokument `<body>`, und dann wenden wir ein `border-radius` von `40px` und eine `corner-shape` von `scoop notch` auf das `<div>` an.

Dann wenden wir folgendes auf das `<div>` an:

- Eine halbtransparente {{cssxref("background-color")}}.
- Eine andere Farbe und Stil von {{cssxref("border")}} an jeder Kante.
- Ein {{cssxref("backdrop-filter")}}, der das auf das `<body>` gesetzte `background-image` invertiert.
- Einen `:hover` Stil, damit Sie sehen können, dass der anklickbare Inhaltsbereich außerhalb der Eckform fällt.

Zusätzliche Einrichtungsstile wurden der Kürze halber ausgeblendet.

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

Das gerenderte Ergebnis sieht so aus:

{{EmbedLiveSample("styles-following-corner-shape", "100%", "240")}}

Beachten Sie, wie die meisten der festgelegten Stile der Form des `<div>` folgen, resultierend aus seinen `corner-shape` Stilen, aber nicht alle. Der Inhalt wird relativ zur ursprünglichen Box angezeigt, und der Hover-Effekt wird immer noch angewendet, wenn Sie über den Text fahren, der über die oberen und unteren linken Ecken hinausragt.

### Vergleich der `corner-shape` Werte

In dieser Demonstration können Sie verschiedene `corner-shape` Werte auswählen und unterschiedliche {{cssxref("border-radius")}} Werte auf einen Container setzen und die Effekte vergleichen.

#### HTML

Das Markup für dieses Beispiel enthält einen {{htmlelement("select")}} Picker, aus dem verschiedene `corner-shape` Werte ausgewählt werden können, ein [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) Schieberegler, um unterschiedliche `border-radius` Werte auszuwählen, und ein {{htmlelement("section")}} Element, um diese Werte darauf anzuwenden. Die ausgewählten {{htmlelement("option")}} Elemente bieten mehrere Schlüsselwort- und {{cssxref("superellipse()")}} Wertoptionen, die in zwei Gruppen mit {{htmlelement("optgroup")}} Elementen unterteilt sind. Im Falle der Schlüsselwortwerte haben wir auch den `superellipse()` Wertäquivalent für jeden hinzugefügt, getrennt durch ein Pipe-Zeichen.

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

Wir wenden einen {{cssxref("box-shadow")}} auf das `<section>` an. Wir geben dem `<section>` und den Formelementen einige grundlegende Stile, die wir der Kürze halber ausgeblendet haben.

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

Das JavaScript, das die vom Benutzer ausgewählten Werte auf das `<section>` anwendet, wurde der Kürze halber ausgeblendet.

#### Ergebnis

Das gerenderte Ergebnis sieht so aus:

{{EmbedLiveSample("corner-shape-select", "100%", "300")}}

Versuchen Sie, unterschiedliche Werte auszuwählen, um zu sehen, wie sich dies auf die Form der Ecken auswirkt.

### `superellipse()` Wertvergleich

In diesem Beispiel stellen wir zwei [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) Schieberegler bereit, die es Ihnen ermöglichen, durch viele verschiedene `corner-shape` {{cssxref("superellipse()")}} Werte und {{cssxref("border-radius")}} Werte zu wechseln, um die Effekte von jedem auf einen Container zu vergleichen.

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

Wir wenden einen {{cssxref("box-shadow")}} auf das `<section>` Element an. Zusätzliche grundlegende Stile wurden der Kürze halber ausgeblendet.

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

Das JavaScript, das die vom Benutzer ausgewählten Werte auf das `<section>` anwendet, wurde der Kürze halber ausgeblendet.

#### Ergebnis

Das gerenderte Ergebnis sieht so aus:

{{EmbedLiveSample("superellipse-slider", "100%", "300")}}

Versuchen Sie, unterschiedliche Werte auszuwählen, um zu sehen, wie sich dies auf die Form der Ecken auswirkt.

### Animation von `corner-shape`

In diesem Beispiel demonstrieren wir, wie die `corner-shape` Eigenschaft animiert werden kann.

#### HTML

```html live-sample___corner-shape-animation
<div></div>
```

#### CSS

Wir erstellen eine Reihe von {{cssxref("@keyframes")}}, die flüssig zwischen den `corner-shape` Werten `square` und `notch` animieren. Wir wenden dann eine {{cssxref("animation")}} basierend auf diesen `@keyframes` auf das `<div>` an, wenn sein enthaltendes `<html>` Element umfährt oder fokussiert wird. Zusätzliche grundlegende `<div>` Stile wurden der Kürze halber ausgeblendet.

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

Das gerenderte Ergebnis sieht so aus:

{{EmbedLiveSample("corner-shape-animation", "100%", "270")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("border-radius")}}
- [CSS-Befehle und Kasten-Dekorationen](/de/docs/Web/CSS/Guides/Borders_and_box_decorations) Modul
- [CSS-Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
