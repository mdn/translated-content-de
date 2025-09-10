---
title: corner-shape
slug: Web/CSS/corner-shape
l10n:
  sourceCommit: 28a0409af150dc6d13584302f2e53664fb4ad02f
---

Die **`corner-shape`** [Shorthand]-[CSS]-Eigenschaft gibt die Form der Ecken eines Rahmens an, innerhalb des durch den Wert der {{cssxref("border-radius")}}-Eigenschaft festgelegten Bereichs.

## Zusammengesetzte Eigenschaften

Die `corner-shape` Eigenschaft ist eine Shorthand für die folgenden physischen Eigenschaften:

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

- Wenn **ein** Wert verwendet wird, gilt er für **alle vier Ecken**.
- Wenn **zwei** Werte verwendet werden, wird der erste Wert auf die **obere linke und untere rechte** Ecke angewendet, und der zweite auf die **obere rechte und untere linke Ecke**.
- Wenn **drei** Werte verwendet werden, legt der erste Wert die Form der **oberen linken Ecke** fest, der zweite Wert die **obere rechte und untere linke Ecke**, und der dritte die **untere rechte Ecke**.
- Bei vier Werten legen sie die Form der **oberen linken**, **oberen rechten**, **unteren rechten** und **unteren linken** Ecke im Uhrzeigersinn fest.

### Werte

- {{cssxref("corner-shape-value")}}
  - : Ein {{cssxref("superellipse()")}} oder äquivalentes Schlüsselwort, das die Form der Ecke beschreibt.

## Beschreibung

Die `corner-shape`-Eigenschaft wird verwendet, um die Form von abgerundeten Ecken zu ändern, die durch die {{cssxref("border-radius")}}-Eigenschaft und ihre zugehörigen Longhand-Varianten erstellt wurden. Bereits abgerundete Ecken können weiter angepasst werden, um beispielsweise abgeschrägte, gekerbte und Squircle-Ecken zu erstellen. Rahmen, Konturen, Schatten und Hintergrundeffekte, die auf den Container angewendet werden, folgen der definierten Eckform.

Wenn einem Container kein `border-radius` zugewiesen ist oder wenn `border-radius` zu `0` aufgelöst wird, hat `corner-shape` keinen Effekt.

Die `corner-shape`-Shorthand-Eigenschaft und ihre zugehörigen [`corner-*-shape` Shorthands und Longhands](#corner--shape_shorthands_and_longhands) akzeptieren einen bis vier {{cssxref("&lt;corner-shape-value>")}}-Werte. Jeder wird direkt als {{cssxref("superellipse()")}}-Funktion oder als Schlüsselwort, das eine übliche Form beschreibt, angegeben. Jedes Schlüsselwort entspricht einem spezifischen `superellipse()`-Wert.

Der Standardwert (Initialwert) von `corner-shape` ist `round`, was denselben Effekt hat wie die alleinige Verwendung von `border-radius` ohne `corner-shape`. Es gibt auch das Schlüsselwort `square`, das denselben Effekt wie standardmäßige quadratische Ecken hat und effektiv jeden angewandten `border-radius` entfernt. Der Wert `bevel` hat den Effekt, eine gerade Linie zwischen den beiden Enden eines `border-radius` zu zeichnen.

Verschiedene `corner-shape`-Werte können reibungslos animiert werden, da die `superellipse()`-Äquivalente der Schlüsselwortwerte als Interpolationswerte verwendet werden.

Die `corner-shape`-Shorthand ist besonders nützlich, wenn Sie alle vier Rahmen gleich haben möchten oder Sie verschiedene Werte mit einer Deklaration festlegen möchten. Um nur eine oder zwei Eckformen gleichzeitig festzulegen, verwenden Sie die `corner-*-shape` Shorthands und Longhands.

### `corner-*-shape` Shorthands und Longhands

Die `corner-shape`-Shorthand definiert die Formen aller vier Ecken in einer Deklaration.

Um nur eine Eckform zu einem Zeitpunkt festzulegen, verwenden Sie die Longhand-Eigenschaften der Ecke:

- Physische Longhand-Eckform-Eigenschaften:
  - {{cssxref("corner-bottom-left-shape")}}
  - {{cssxref("corner-bottom-right-shape")}}
  - {{cssxref("corner-top-left-shape")}}
  - {{cssxref("corner-top-right-shape")}}
- Logische Longhand-Eckform-Eigenschaften:
  - {{cssxref("corner-start-start-shape")}}
  - {{cssxref("corner-start-end-shape")}}
  - {{cssxref("corner-end-start-shape")}}
  - {{cssxref("corner-end-end-shape")}}

Um zwei Eckformen gleichzeitig festzulegen, verwenden Sie die Seiten-Shorthands:

- Physische Seiten-Shorthand-Eigenschaften:
  - {{cssxref("corner-top-shape")}}
  - {{cssxref("corner-right-shape")}}
  - {{cssxref("corner-bottom-shape")}}
  - {{cssxref("corner-left-shape")}}
- Logische Seiten-Shorthand-Eigenschaften:
  - {{cssxref("corner-block-start-shape")}}
  - {{cssxref("corner-block-end-shape")}}
  - {{cssxref("corner-inline-start-shape")}}
  - {{cssxref("corner-inline-end-shape")}}

### Einschränkung der Radien gegenüberliegender Eckenformen

Wenn gegenüberliegende Ecken `border-radius`- und `corner-shape`-Werte haben, die dazu führen würden, dass sich die Formen überlappen, passt der Browser die Werte an, um die Überlappung zu verhindern.

Zum Beispiel würden die folgenden Werte dazu führen, dass sich die obere linke und untere rechte Ecke überlappen. Deshalb passt der Browser die erste `border-radius`-Komponente an einen Wert an, der dies verhindert.

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

Die folgenden Eigenschaften folgen alle der Eckform, wenn sie auf den Container angewendet werden:

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

### Grundlegende Verwendung von `corner-shape`

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}}-Element.

```html live-sample___basic-corner-shape
<div>Nice scooped corners</div>
```

#### CSS

Wir geben dem Kasten eine feste {{cssxref("height")}}, einen {{cssxref("box-shadow")}}, einen `border-radius` von 30 Pixeln und eine `corner-shape` von `scoop`, zusammen mit einigen zusätzlichen Stilen, die wir aus Gründen der Kürze ausgeblendet haben.

```css hidden live-sample___basic-corner-shape
body {
  font-family: Arial, Helvetica, sans-serif;
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

Beachten Sie, wie der `corner-shape`-Wert von `scoop` dem Container konkave Ecken gibt — die Kurve ist eine Inversion der Standard-`border-radius`-Kurve. Beachten Sie auch, wie der Hintergrund, der Rahmen und der Box-Schatten der Form der Kurve folgen.

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

Um zu demonstrieren, wie einige Stile der Form der Ecken eines Containers folgen, wenden wir ein {{cssxref("background-image")}} auf den `<body>` des Dokuments an, dann einen `border-radius` von `40px` und eine `corner-shape` von `scoop notch` auf das `<div>`.

Dann wenden wir das Folgende auf das `<div>` an:

- Eine halbtransparente {{cssxref("background-color")}}.
- Eine unterschiedliche Farbe und Stil des {{cssxref("border")}} an jedem Rand.
- Ein {{cssxref("backdrop-filter")}}, der das auf den `<body>` angewendete `background-image` invertiert.
- Ein `:hover`-Stil, damit Sie sehen können, dass der klickbare Inhaltsbereich außerhalb der Eckform liegt.

Zusätzliche vorbereitende Stile wurden aus Gründen der Kürze ausgeblendet.

```css hidden live-sample___styles-following-corner-shape
html {
  height: 100%;
}

body {
  font-family: Arial, Helvetica, sans-serif;
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
  background-color: rgb(255 255 255 / 1);
}
```

#### Ergebnis

Das gerenderte Ergebnis sieht so aus:

{{EmbedLiveSample("styles-following-corner-shape", "100%", "240")}}

Beachten Sie, wie die meisten der eingestellten Stile der Form des `<div>` folgen, die aus seinen `corner-shape`-Stilen resultieren, aber nicht alle. Der Inhalt wird relativ zur ursprünglichen Box angezeigt, und auf den Hover-Effekt wird weiterhin angewendet, wenn Sie über den Text fahren, der über die oberen und unteren linken Ecken hinausragt.

### Vergleich von `corner-shape`-Werten

In dieser Demonstration können Sie verschiedene `corner-shape`-Werte auswählen und verschiedene {{cssxref("border-radius")}}-Werte auf einen Container setzen und die Effekte vergleichen.

#### HTML

Das Markup für dieses Beispiel enthält einen {{htmlelement("select")}}-Picker, aus dem verschiedene `corner-shape`-Werte ausgewählt werden können, einen [`<input type="range">`]-Slider, um verschiedene `border-radius`-Werte auszuwählen, und ein {{htmlelement("section")}}-Element, um diese Werte darauf anzuwenden. Die `select` {{htmlelement("option")}}-Elemente bieten mehrere Schlüsselwort- und {{cssxref("superellipse()")}}-Wertoptionen, unterteilt in zwei Gruppen mit {{htmlelement("optgroup")}}-Elementen. Im Fall der Schlüsselwort-Werte haben wir auch den äquivalenten `superellipse()`-Wert für jedes hinzugefügt, getrennt durch ein Pipe-Zeichen.

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

Wir wenden einen {{cssxref("box-shadow")}} auf das `<section>` an. Wir geben auch dem `<section>` und den Formularelementen einige grundlegende Stile, die wir aus Gründen der Kürze ausgeblendet haben.

```css hidden live-sample___corner-shape-select
html {
  font-family: Arial, Helvetica, sans-serif;
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
  background-color: palegoldenrod;
  background-image: linear-gradient(
    to bottom,
    rgb(255 255 255 / 0),
    rgb(255 255 255 / 0.5)
  );
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

Das JavaScript, das die vom Benutzer ausgewählten Werte auf das `<section>` anwendet, wurde aus Gründen der Kürze ausgeblendet.

#### Ergebnis

Das gerenderte Ergebnis sieht so aus:

{{EmbedLiveSample("corner-shape-select", "100%", "300")}}

Versuchen Sie, verschiedene Werte auszuwählen, um zu sehen, wie dies die Form der Ecken beeinflusst.

### Vergleich von `superellipse()`-Werten

In diesem Beispiel bieten wir zwei [`<input type="range">`]-Slider an, mit denen Sie viele verschiedene `corner-shape` {{cssxref("superellipse()")}}-Werte und `border-radius`-Werte durchgehen und die Effekte auf einen Container vergleichen können.

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

Wir wenden einen {{cssxref("box-shadow")}} auf das `<section>`-Element an. Zusätzliche grundlegende Stile wurden aus Gründen der Kürze ausgeblendet.

```css hidden live-sample___superellipse-slider
html {
  font-family: Arial, Helvetica, sans-serif;
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

Das JavaScript, das die vom Benutzer ausgewählten Werte auf das `<section>`-Element anwendet, wurde aus Gründen der Kürze ausgeblendet.

#### Ergebnis

Das gerenderte Ergebnis sieht so aus:

{{EmbedLiveSample("superellipse-slider", "100%", "300")}}

Versuchen Sie, verschiedene Werte auszuwählen, um zu sehen, wie dies die Form der Ecken beeinflusst.

### Animation von `corner-shape`

In diesem Beispiel demonstrieren wir, wie die `corner-shape`-Eigenschaft animiert werden kann.

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes `<div>`, mit [`tabindex="0"`] angewendet, damit es fokussiert werden kann.

```html live-sample___corner-shape-animation
<div tabindex="0"></div>
```

#### CSS

Wir erstellen eine Reihe von {{cssxref("@keyframes")}}, die reibungslos zwischen den `corner-shape`-Werten von `square` und `notch` animieren. Wir wenden dann eine {{cssxref("animation")}} basierend auf diesen `@keyframes` auf das `<div>` an, wenn das enthaltende `<html>`-Element darüber schwebt oder fokussiert wird. Zusätzliche grundlegende `<div>`-Stile wurden aus Gründen der Kürze ausgeblendet.

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
```

```css live-sample___corner-shape-animation
@keyframes cornerpulse {
  from {
    corner-shape: square;
  }

  to {
    corner-shape: notch;
  }
}

html:hover div,
div:focus {
  animation: cornerpulse infinite alternate 2s linear;
}
```

#### Ergebnis

Das gerenderte Ergebnis sieht so aus:

{{EmbedLiveSample("corner-shape-animation", "100%", "270")}}

Schweben oder fokussieren Sie die Form, um die Animation zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("border-radius")}}
- [CSS Grenzen und Rahmenverzierungen](/de/docs/Web/CSS/CSS_borders_and_box_decorations) Modul
- [CSS Hintergründe und Grenzen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
- [CSS Animationen](/de/docs/Web/CSS/CSS_animations) Modul
