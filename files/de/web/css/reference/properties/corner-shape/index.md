---
title: CSS-Eigenschaft `corner-shape`
short-title: corner-shape
slug: Web/CSS/Reference/Properties/corner-shape
l10n:
  sourceCommit: cd0970bc03cf30a9a8089954cc542a17dbe9eba3
---

{{SeeCompatTable}}

Die **`corner-shape`** [shorthand](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS)-Eigenschaft bestimmt die Form der Ecken eines Kastens, innerhalb des Bereichs, der durch den Wert seiner {{cssxref("border-radius")}}-Eigenschaft spezifiziert wird.

## Einzelne Eigenschaften

Die `corner-shape`-Eigenschaft ist eine Kurzform für die folgenden physischen Eigenschaften:

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

- Wird **ein** Wert verwendet, gibt er die Form **aller vier Ecken** an.
- Werden **zwei** Werte verwendet, gilt der erste Wert für die **obere linke und untere rechte** Ecke, und der zweite für die **obere rechte und untere linke Ecke**.
- Werden **drei** Werte verwendet, gibt der erste Wert die Form der **oberen linken Ecke**, der zweite für die **obere rechte und untere linke Ecken** und der dritte für die **untere rechte Ecke** an.
- Wenn vier Werte verwendet werden, spezifizieren sie die Form der **oberen linken**, **oberen rechten**, **unteren rechten** und **unteren linken** Ecke, in dieser Reihenfolge (im Uhrzeigersinn).

### Werte

- {{cssxref("corner-shape-value")}}
  - : Ein {{cssxref("superellipse()")}} oder ein gleichwertiges Schlüsselwort, das die Form der Ecke beschreibt.

## Beschreibung

Die `corner-shape`-Eigenschaft wird verwendet, um die Form von abgerundeten Ecken zu modifizieren, die von der {{cssxref("border-radius")}}-Eigenschaft und ihren zugehörigen Langformen erstellt werden. Bereits abgerundete Ecken können weiter in Bezug auf den angewendeten Grad der Abrundung angepasst werden, um beispielsweise abgeschrägte, gekerbte und quadratische Ecken zu erstellen. Ränder, Umrisse, Schatten und Hintergrundeffekte, die auf den Container angewendet werden, folgen der definierten Eckform.

Wenn ein `border-radius` nicht auf einen Container angewendet wird oder der `border-radius` auf `0` auflöst, hat `corner-shape` keine Wirkung.

Die `corner-shape`-Kurzform und ihre zugehörigen [`corner-*-shape` Kurz- und Langformen](#corner--shape_shorthands_and_longhands) akzeptieren einen bis vier {{cssxref("&lt;corner-shape-value>")}}-Werte. Jeder wird direkt als {{cssxref("superellipse()")}}-Funktion oder ein Schlüsselwort beschrieben, das eine gängige Form beschreibt. Jedes Schlüsselwort ist äquivalent zu einem bestimmten `superellipse()`-Wert.

Der Standardwert (initial) von `corner-shape` ist `round`, was denselben Effekt wie die Verwendung von `border-radius` allein, ohne `corner-shape`, ergibt. Es gibt auch einen Schlüsselwortwert `square`, der denselben Effekt wie Standardquadratecken bewirkt und effektiv jeden angewendeten `border-radius` entfernt. Der Wert `bevel` hat den Effekt, eine gerade Linie zwischen den beiden Enden eines `border-radius` zu zeichnen.

Unterschiedliche `corner-shape`-Werte können reibungslos animiert werden, da die `superellipse()`-Äquivalente der Schlüsselwortwerte als Interpolationswerte verwendet werden.

Die `corner-shape`-Kurzform ist besonders nützlich, wenn Sie möchten, dass alle vier Ränder gleich sind, oder Sie möchten unterschiedliche Werte in einer einzigen Deklaration festlegen. Um nur eine oder zwei Eckenformen auf einmal festzulegen, verwenden Sie die `corner-*-shape` Kurz- und Langformen.

### `corner-*-shape` Kurz- und Langformen

Die `corner-shape`-Kurzform definiert die Formen aller vier Ecken in einer Deklaration.

Um jeweils nur eine eckige Form festzulegen, verwenden Sie die eckigen Langformen:

- Physische Langhand-Eckformeigenschaften:
  - {{cssxref("corner-bottom-left-shape")}}
  - {{cssxref("corner-bottom-right-shape")}}
  - {{cssxref("corner-top-left-shape")}}
  - {{cssxref("corner-top-right-shape")}}
- Logische Langhand-Eckformeigenschaften:
  - {{cssxref("corner-start-start-shape")}}
  - {{cssxref("corner-start-end-shape")}}
  - {{cssxref("corner-end-start-shape")}}
  - {{cssxref("corner-end-end-shape")}}

Um zwei Eckformen gleichzeitig festzulegen, verwenden Sie die Seiten-Kurzformen:

- Physische Seiten-Kurzformeigenschaften:
  - {{cssxref("corner-top-shape")}}
  - {{cssxref("corner-right-shape")}}
  - {{cssxref("corner-bottom-shape")}}
  - {{cssxref("corner-left-shape")}}
- Logische Seiten-Kurzformeigenschaften:
  - {{cssxref("corner-block-start-shape")}}
  - {{cssxref("corner-block-end-shape")}}
  - {{cssxref("corner-inline-start-shape")}}
  - {{cssxref("corner-inline-end-shape")}}

### Einschränken von entgegengesetzten Größe der Ecken

Wenn gegenüberliegende Ecken `border-radius` und `corner-shape`-Werte eingestellt haben, die dazu führen würden, dass sich die Formen überlappen, beschränkt der Browser die Werte, um die Überlappung zu verhindern.

Zum Beispiel würden die folgenden Werte dazu führen, dass sich die obere linke und untere rechte Ecken überlappen, daher passt der Browser die erste `border-radius`-Komponente so an, dass dies vermieden wird.

```css
div {
  width: 480px;
  height: 200px;
  background-color: goldenrod;
  border-radius: 80% 20px;
  corner-shape: scoop;
}
```

### Eigenschaften, die `corner-shape` folgen

Die folgenden Eigenschaften folgen alle der Form der Ecke, wenn sie auf den Container angewendet werden:

- {{cssxref("background-color")}}
- {{cssxref("background-image")}}
- {{cssxref("border")}}
- {{cssxref("outline")}}
- {{cssxref("box-shadow")}}
- {{cssxref("overflow")}}
- {{cssxref("backdrop-filter")}}

Siehe [Demonstration von Eigenschaften, die `corner-shape` folgen](#demonstration_of_properties_that_follow_the_corner-shape) für einige Beispiele.

### Interaktion mit `border-shape`

Die `corner-shape`-Eigenschaft hat keine Wirkung, wenn die {{cssxref("border-shape")}}-Eigenschaft auf einem Element gesetzt ist. Dies liegt daran, dass `border-shape` mit `border-radius` unvereinbar ist: wenn `border-shape` gesetzt ist, wird jeder angegebene `border-radius` ignoriert; `corner-shape` hängt von `border-radius` ab und hat daher ebenfalls keine Wirkung.

Wenn Sie geformte Ecken in einem `border-shape` verwenden möchten, müssen Sie diese direkt als Teil der Form zeichnen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung von `corner-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}}-Element.

```html live-sample___basic-corner-shape
<div>Nice scooped corners</div>
```

#### CSS

Wir geben der Box eine feste {{cssxref("height")}}, einen {{cssxref("box-shadow")}}, einen `border-radius` von 30 Pixeln und eine `corner-shape` von `scoop`, zusammen mit einigen zusätzlichen Stilen, die wir der Übersicht halber ausgeblendet haben.

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

Das gerenderte Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("basic-corner-shape", "100%", "240")}}

Beachten Sie, wie der `corner-shape`-Wert von `scoop` dem Container konkave Ecken verleiht – die Kurve ist eine Inversion der Standard-`border-radius`-Kurve. Beachten Sie auch, wie der Hintergrund, die Grenze und der Schatten der Box der Form der Kurve folgen.

### Demonstration von Eigenschaften, die `corner-shape` folgen

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}}-Element mit etwas Textinhalt.

```html live-sample___styles-following-corner-shape
<div>
  Some styles follow the corner shape, such as border, outline, box-shadow,
  overflow, and backdrop-filter. This is useful for helping various aspects of
  your design to not clash. As shown, it can result in some interesting visual
  effects, so you should test your design carefully.
</div>
```

#### CSS

Um zu demonstrieren, wie einige Stile der Form der Ecken eines Containers folgen, wenden wir ein {{cssxref("background-image")}} auf das Dokument `<body>` an und dann einen `border-radius` von `40px` und eine `corner-shape` von `scoop notch` auf das `<div>`.

Wir wenden dann Folgendes auf das `<div>` an:

- Eine halbtransparente {{cssxref("background-color")}}.
- Eine andere Farbe und Stil von {{cssxref("border")}} an jeder Kante.
- Einen {{cssxref("backdrop-filter")}}, der das auf das `<body>` gesetzte `background-image` invertiert.
- Einen `:hover`-Stil, damit Sie sehen können, dass der anklickbare Inhaltsbereich außerhalb der Eckenform fällt.

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

Das gerenderte Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("styles-following-corner-shape", "100%", "240")}}

Beachten Sie, wie die meisten gesetzten Stile der Form des `<div>` folgen, die durch die `corner-shape`-Stile entstanden ist, aber nicht alle. Der Inhalt wird relativ zum ursprünglichen Kasten angezeigt, und der Hover-Effekt wird immer noch angewendet, wenn Sie über den Text schweben, der über die obere und untere linke Ecke hinausragt.

### Vergleich von `corner-shape`-Werten

In dieser Demonstration können Sie verschiedene `corner-shape`-Werte auswählen und verschiedene {{cssxref("border-radius")}}-Werte auf einen Container setzen und die Effekte vergleichen.

#### HTML

Das Markup für dieses Beispiel enthält eine {{htmlelement("select")}}-Auswahl, aus der verschiedene `corner-shape`-Werte ausgewählt werden können, ein [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Schieberegler, um verschiedene `border-radius`-Werte auszuwählen, und ein {{htmlelement("section")}}-Element, um diese Werte darauf anzuwenden. Die Auswahl-{{htmlelement("option")}}-Elemente bieten mehrere Schlüsselwort- und {{cssxref("superellipse()")}}-Wert-Auswahlmöglichkeiten, die in zwei Gruppen mit {{htmlelement("optgroup")}}-Elementen unterteilt sind. Im Fall der Schlüsselwortwerte haben wir auch den äquivalenten `superellipse()`-Wert für jedes eingeschlossen, getrennt durch das Pipe-Zeichen.

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

Wir wenden einen {{cssxref("box-shadow")}} auf das `<section>` an. Wir geben auch den `<section>`- und Formularelementen einige grundlegende Stile, die der Übersicht halber ausgeblendet wurden.

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

Das JavaScript, das die benutzerdefinierten Werte auf das `<section>` anwendet, wurde der Kürze halber ausgeblendet.

#### Ergebnis

Das gerenderte Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("corner-shape-select", "100%", "300")}}

Probieren Sie aus, verschiedene Werte auszuwählen, um zu sehen, wie dies die Form der Ecken beeinflusst.

### Vergleich von `superellipse()`-Werten

In diesem Beispiel bieten wir zwei [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Schieberegler an, die es Ihnen ermöglichen, durch viele verschiedene `corner-shape` {{cssxref("superellipse()")}}-Werte und {{cssxref("border-radius")}}-Werte zu blättern, um die Effekte jedes einzelnen auf einen Container zu vergleichen.

#### HTML

Das Markup für dieses Beispiel enthält zwei `<input type="range">`-Elemente, aus denen verschiedene `corner-shape` `superellipse()`- und `border-radius`-Werte ausgewählt werden können, und ein {{htmlelement("section")}}-Element, um diese Werte darauf anzuwenden.

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

Wir wenden einen {{cssxref("box-shadow")}} auf das `<section>`-Element an. Zusätzliche grundlegende Stile wurden der Übersicht halber ausgeblendet.

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

Das JavaScript, das die benutzerdefinierten Werte auf das `<section>` anwendet, wurde der Kürze halber ausgeblendet.

#### Ergebnis

Das gerenderte Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("superellipse-slider", "100%", "300")}}

Probieren Sie aus, verschiedene Werte auszuwählen, um zu sehen, wie dies die Form der Ecken beeinflusst.

### Animation von `corner-shape`

In diesem Beispiel demonstrieren wir, wie die `corner-shape`-Eigenschaft animiert werden kann.

#### HTML

```html live-sample___corner-shape-animation
<div></div>
```

#### CSS

Wir erstellen eine Reihe von {{cssxref("@keyframes")}}, die reibungslos zwischen den `corner-shape`-Werten von `square` und `notch` animieren. Wir wenden dann eine {{cssxref("animation")}} basierend auf diesen `@keyframes` auf das `<div>` an, wenn sein enthaltendes `<html>`-Element darüber schwebt oder fokussiert ist. Zusätzliche grundlegende `<div>`-Stile wurden der Übersicht halber ausgeblendet.

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

Das gerenderte Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("corner-shape-animation", "100%", "270")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("border-radius")}}
- {{cssxref("border-shape")}}
- [CSS-Grenzen und Kastenverzierungen](/de/docs/Web/CSS/Guides/Borders_and_box_decorations) Modul
- [CSS-Hintergründe und Grenzen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
