---
title: corner-shape
slug: Web/CSS/corner-shape
l10n:
  sourceCommit: 2a64c5583a2c61c729ffe1ee1e7709a5898f57b0
---

{{SeeCompatTable}}

Die **`corner-shape`** [Shorthand](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft legt die Form der Ecken eines Kastens innerhalb des Bereichs fest, der durch den Wert der {{cssxref("border-radius")}} Eigenschaft angegeben wird.

## Bestandteileigenschaften

Die `corner-shape` Eigenschaft ist eine Kurznotierung für die folgenden physikalischen Eigenschaften:

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

Die `corner-shape` Eigenschaft kann mit ein, zwei, drei oder vier {{cssxref("&lt;corner-shape-value>")}} Werten angegeben werden:

- Wenn **ein** Wert verwendet wird, bestimmt er die Form **aller vier Ecken**.
- Wenn **zwei** Werte verwendet werden, gilt die erste Form für die **obere linke und untere rechte** Ecke und die zweite für die **obere rechte und untere linke Ecke**.
- Wenn **drei** Werte verwendet werden, bestimmt die erste Form die Form der **oberen linken Ecke**, die zweite für die **obere rechte und untere linke Ecke**, und die dritte für die **untere rechte Ecke**.
- Wenn vier Werte verwendet werden, bestimmen sie die Form der **oberen linken**, **oberen rechten**, **unteren rechten** und **unteren linken** Ecke, in dieser Reihenfolge (im Uhrzeigersinn).

### Werte

- {{cssxref("corner-shape-value")}}
  - : Ein {{cssxref("superellipse()")}} oder ein gleichwertiges Schlüsselwort, das die Form der Ecke beschreibt.

## Beschreibung

Die `corner-shape` Eigenschaft wird verwendet, um die Form der durch die {{cssxref("border-radius")}} Eigenschaft und ihre zugehörigen Langformen erzeugten abgerundeten Ecken zu modifizieren. Bereits abgerundete Ecken können weiter in Bezug auf den Grad der angewandten Abrundung angepasst werden, wodurch zum Beispiel abgeschrägte, eingekerbte und quirlige Ecken erzeugt werden können. Auf den Container angewendete Rahmen, Umrisse, Schatten und Hintergrundeffekte folgen der definierten Eckform.

Wenn ein `border-radius` nicht auf einen Container angewendet wird oder der `border-radius` auf `0` auflöst, hat `corner-shape` keine Wirkung.

Die `corner-shape` Shorthand-Eigenschaft und ihre zugehörigen [`corner-*-shape` Shorthand- und Langformen](#corner--shape_shorthands_and_longhands) akzeptieren ein bis vier {{cssxref("&lt;corner-shape-value>")}} Werte. Jeder wird direkt als {{cssxref("superellipse()")}} Funktion oder als ein Schlüsselwort beschrieben, das eine übliche Form darstellt. Jedes Schlüsselwort entspricht einem spezifischen `superellipse()` Wert.

Der Standardwert (initial) von `corner-shape` ist `round`, was den gleichen Effekt wie die Verwendung von `border-radius` alleine hat, ohne `corner-shape`. Es gibt auch den Schlüsselwert `square`, der den gleichen Effekt wie standardmäßige rechteckige Ecken hat, was effektiv einen angewandten `border-radius` entfernt. Der `bevel` Wert hat den Effekt, eine gerade Linie zwischen den beiden Enden eines `border-radius` zu zeichnen.

Verschiedene `corner-shape` Werte können reibungslos animiert werden, da die `superellipse()`-Äquivalente der Schlüsselwortwerte als Interpolationswerte verwendet werden.

Der `corner-shape` Shorthand ist besonders nützlich, wenn Sie alle vier Ränder gleich machen möchten oder wenn Sie unterschiedliche Werte mit einer einzigen Deklaration setzen möchten. Um nur ein oder zwei Eckformen gleichzeitig einzustellen, verwenden Sie die `corner-*-shape` Shorthand- und Langformen.

### `corner-*-shape` Shorthand- und Langformen

Der `corner-shape` Shorthand definiert die Formen aller vier Ecken in einer Deklaration.

Um nur eine Eckform gleichzeitig festzulegen, verwenden Sie die Langformen der Eckform:

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

Um zwei Eckformen gleichzeitig festzulegen, verwenden Sie die Kurzformen der Seiten:

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

### Einschränkung der gegenüberliegenden Eckformradien

Wenn gegenüberliegende Ecken `border-radius` und `corner-shape` Werte haben, die dazu führen, dass sich die Formen überlappen, schränkt der Browser die Werte ein, um die Überlappung zu verhindern.

Zum Beispiel würden die folgenden Werte dazu führen, dass sich die obere linke und untere rechte Ecke überlappen, weshalb der Browser die erste `border-radius` Komponente auf einen Wert anpasst, der dies vermeidet.

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

Die folgenden Eigenschaften folgen alle der Form der Ecke, wenn sie auf den Container gesetzt sind:

- {{cssxref("background-color")}}
- {{cssxref("background-image")}}
- {{cssxref("border")}}
- {{cssxref("outline")}}
- {{cssxref("box-shadow")}}
- {{cssxref("overflow")}}
- {{cssxref("backdrop-filter")}}

Siehe [Demonstration of properties that follow the `corner-shape`](#demonstration_of_properties_that_follow_the_corner-shape) für einige Beispiele.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `corner-shape`

#### HTML

Die Markierung für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}} Element.

```html live-sample___basic-corner-shape
<div>Nice scooped corners</div>
```

#### CSS

Wir geben der Box eine feste {{cssxref("height")}}, einen {{cssxref("box-shadow")}}, einen `border-radius` von 30 Pixeln und eine `corner-shape` von `scoop`, zusammen mit einigen zusätzlichen Stilen, die wir der Kürze halber ausgeblendet haben.

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

Beachten Sie, wie der `corner-shape` Wert `scoop` dem Container konkave Ecken gibt — die Kurve ist eine Umkehrung der Standardkurve von `border-radius`. Beachten Sie auch, wie der Hintergrund, die Grenze und der Schlagschatten der Form der Kurve folgen.

### Demonstration von Eigenschaften, die der `corner-shape` folgen

#### HTML

Die Markierung für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}} Element mit einem Textinhalt darin.

```html live-sample___styles-following-corner-shape
<div>
  Some styles follow the corner shape, such as border, outline, box-shadow,
  overflow, and backdrop-filter. This is useful for helping various aspects of
  your design to not clash. As shown, it can result in some interesting visual
  effects, so you should test your design carefully.
</div>
```

#### CSS

Um zu demonstrieren, wie einige Stile der Form der Ecken eines Containers folgen, wenden wir ein {{cssxref("background-image")}} auf das Dokument `<body>` an und dann einen `border-radius` von `40px` und eine `corner-shape` von `scoop notch` auf das `<div>` an.

Dann wenden wir Folgendes auf das `<div>` an:

- Eine halbtransparente {{cssxref("background-color")}}.
- Eine andere Farbe und Stil der {{cssxref("border")}} an jedem Rand.
- Einen {{cssxref("backdrop-filter")}}, der das `background-image`, das auf das `<body>` gesetzt ist, invertiert.
- Einen `:hover` Stil, damit Sie sehen können, dass der anklickbare Inhaltsbereich außerhalb der Eckform liegt.

Weitere vorbereitende Stile wurden der Kürze halber ausgeblendet.

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
  background-color: white;
}
```

#### Ergebnis

Das gerenderte Ergebnis sieht so aus:

{{EmbedLiveSample("styles-following-corner-shape", "100%", "240")}}

Beachten Sie, wie die meisten gesetzten Stile der Form des `<div>` folgen, die sich aus seinen `corner-shape` Stilen ergibt, aber nicht alle. Der Inhalt wird relativ zur ursprünglichen Box angezeigt, und der Hover-Effekt wird weiterhin angewendet, wenn Sie über den Text fahren, der über die oberen und unteren linken Ecken hinausragt.

### Vergleich von `corner-shape` Werten

In dieser Demonstration können Sie verschiedene `corner-shape` Werte auswählen und verschiedene {{cssxref("border-radius")}} Werte auf einen Container setzen und die Effekte vergleichen.

#### HTML

Die Markierung für dieses Beispiel enthält einen {{htmlelement("select")}} Picker, aus dem verschiedene `corner-shape` Werte ausgewählt werden können, einen [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) Schieberegler, um verschiedene `border-radius` Werte auszuwählen, und ein {{htmlelement("section")}} Element, um diese Werte darauf anzuwenden. Die {{htmlelement("option")}} Elemente bieten mehrere Schlüsselwort- und {{cssxref("superellipse()")}} Wertoptionen, unterteilt in zwei Gruppen mit {{htmlelement("optgroup")}} Elementen. Im Fall der Schlüsselwortwerte haben wir auch den `superellipse()` Wertäquivalent für jeden hinzugefügt, getrennt durch ein Pipe-Zeichen.

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

Wir wenden einen {{cssxref("box-shadow")}} auf das `<section>` an. Zudem geben wir dem `<section>` und den Formularelementen einige grundlegende Stile, die wir der Kürze halber ausgeblendet haben.

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

Das JavaScript, das die vom Benutzer ausgewählten Werte auf das `<section>` anwendet, wurde der Kürze halber ausgeblendet.

#### Ergebnis

Das gerenderte Ergebnis sieht so aus:

{{EmbedLiveSample("corner-shape-select", "100%", "300")}}

Versuchen Sie, verschiedene Werte auszuwählen, um zu sehen, wie sich dies auf die Form der Ecken auswirkt.

### `superellipse()` Wertvergleich

In diesem Beispiel stellen wir zwei [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) Schieberegler zur Verfügung, mit denen Sie durch viele verschiedene `corner-shape` {{cssxref("superellipse()")}} Werte und {{cssxref("border-radius")}} Werte wechseln können, um die Effekte jedes einzelnen auf einen Container zu vergleichen.

#### HTML

Die Markierung für dieses Beispiel enthält zwei `<input type="range">` Elemente, aus denen verschiedene `corner-shape` `superellipse()` und `border-radius` Werte ausgewählt werden können, und ein {{htmlelement("section")}} Element, auf das diese Werte angewendet werden können.

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

Das JavaScript, das die vom Benutzer ausgewählten Werte auf das `<section>` anwendet, wurde der Kürze halber ausgeblendet.

#### Ergebnis

Das gerenderte Ergebnis sieht so aus:

{{EmbedLiveSample("superellipse-slider", "100%", "300")}}

Versuchen Sie, verschiedene Werte auszuwählen, um zu sehen, wie sich dies auf die Form der Ecken auswirkt.

### Animieren von `corner-shape`

In diesem Beispiel demonstrieren wir, wie die `corner-shape` Eigenschaft animiert werden kann.

#### HTML

Die Markierung für dieses Beispiel enthält ein einzelnes `<div>`, auf das [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) angewendet ist, damit es fokussiert werden kann.

```html live-sample___corner-shape-animation
<div tabindex="0"></div>
```

#### CSS

Wir erstellen ein Set von {{cssxref("@keyframes")}}, die fließend zwischen den `corner-shape` Werten `square` und `notch` animieren. Dann wenden wir eine {{cssxref("animation")}} basierend auf diesen `@keyframes` auf das `<div>` an, wenn das umgebende `<html>` Element darüber schwebt oder fokussiert wird. Zusätzliche grundlegende `<div>` Stile wurden der Kürze halber ausgeblendet.

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
@keyframes corner-pulse {
  from {
    corner-shape: square;
  }

  to {
    corner-shape: notch;
  }
}

html:hover div,
div:focus {
  animation: corner-pulse infinite alternate 2s linear;
}
```

#### Ergebnis

Das gerenderte Ergebnis sieht so aus:

{{EmbedLiveSample("corner-shape-animation", "100%", "270")}}

Fahren Sie mit der Maus über oder fokussieren Sie die Form, um die Animation zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("border-radius")}}
- [CSS borders and box decorations](/de/docs/Web/CSS/CSS_borders_and_box_decorations) Modul
- [CSS backgrounds and borders](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
- [CSS animations](/de/docs/Web/CSS/CSS_animations) Modul
