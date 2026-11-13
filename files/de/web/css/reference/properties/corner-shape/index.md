---
title: CSS-Eigenschaft `corner-shape`
short-title: corner-shape
slug: Web/CSS/Reference/Properties/corner-shape
l10n:
  sourceCommit: 25abd448c8a088e9f333360dea0adbe8143e6b86
---

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`corner-shape`** legt die Form der Ecken einer Box innerhalb des Bereichs fest, der durch den Wert ihrer Eigenschaft {{cssxref("border-radius")}} bestimmt wird.

## Zugehörige Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden physischen Eigenschaften:

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

Die Eigenschaft `corner-shape` kann mit einem, zwei, drei oder vier {{cssxref("&lt;corner-shape-value>")}}-Werten angegeben werden:

- Bei **einem** Wert wird die Form **aller vier Ecken** festgelegt.
- Bei **zwei** Werten gilt die erste Form für die **obere linke und die untere rechte** Ecke, die zweite für die **obere rechte und die untere linke** Ecke.
- Bei **drei** Werten legt der erste die Form der **oberen linken Ecke** fest, der zweite die Form der **oberen rechten und unteren linken Ecke** und der dritte die Form der **unteren rechten Ecke**.
- Bei **vier** Werten legen diese in dieser Reihenfolge die Form der **oberen linken**, **oberen rechten**, **unteren rechten** und **unteren linken** Ecke fest (im Uhrzeigersinn).

### Werte

- {{cssxref("corner-shape-value")}}
  - : Eine {{cssxref("superellipse()")}}-Funktion oder ein entsprechendes Schlüsselwort, das die Form der Ecke beschreibt.

## Beschreibung

Mit der Eigenschaft `corner-shape` lässt sich die Form abgerundeter Ecken verändern, die durch {{cssxref("border-radius")}} und die zugehörigen Einzelwerteigenschaften erzeugt werden. Bereits abgerundete Ecken können hinsichtlich ihres Rundungsgrads weiter angepasst werden. So lassen sich beispielsweise abgeschrägte, eingekerbte und squircle-förmige Ecken erstellen. Rahmen, Konturen, Schatten und Hintergrundeffekte des Containers folgen der festgelegten Eckenform.

Wenn auf einen Container kein `border-radius` angewendet wird oder `border-radius` zu `0` aufgelöst wird, hat `corner-shape` keine Wirkung.

Die Kurzschreibweise `corner-shape` und die zugehörigen [Kurzschreibweisen und Einzelwerteigenschaften `corner-*-shape`](#corner--shape_shorthands_and_longhands) akzeptieren einen bis vier {{cssxref("&lt;corner-shape-value>")}}-Werte. Jeder Wert wird entweder direkt als {{cssxref("superellipse()")}}-Funktion oder als Schlüsselwort für eine gebräuchliche Form angegeben. Jedes Schlüsselwort entspricht einem bestimmten `superellipse()`-Wert.

Der Standardwert (Initialwert) von `corner-shape` ist `round`. Damit ergibt sich dieselbe Wirkung wie bei der alleinigen Verwendung von `border-radius`, ohne `corner-shape`. Der Schlüsselwortwert `square` hat dieselbe Wirkung wie standardmäßig eckige Ecken und hebt damit einen angewendeten `border-radius` faktisch auf. Der Wert `bevel` bewirkt, dass zwischen den beiden Endpunkten einer durch `border-radius` bestimmten Rundung eine gerade Linie gezeichnet wird.

Zwischen verschiedenen `corner-shape`-Werten kann fließend animiert werden, da die `superellipse()`-Entsprechungen der Schlüsselwortwerte als Interpolationswerte verwendet werden.

Die Kurzschreibweise `corner-shape` ist besonders nützlich, wenn alle vier Ecken dieselbe Form haben sollen oder Sie mit einer einzigen Deklaration unterschiedliche Werte festlegen möchten. Um die Form von nur einer oder zwei Ecken gleichzeitig festzulegen, verwenden Sie die Kurzschreibweisen und Einzelwerteigenschaften `corner-*-shape`.

### Kurzschreibweisen und Einzelwerteigenschaften `corner-*-shape`

Die Kurzschreibweise `corner-shape` legt die Formen aller vier Ecken in einer einzigen Deklaration fest.

Um die Form jeweils nur einer Ecke festzulegen, verwenden Sie die Einzelwerteigenschaften für Eckenformen:

- Physische Einzelwerteigenschaften für Eckenformen:
  - {{cssxref("corner-bottom-left-shape")}}
  - {{cssxref("corner-bottom-right-shape")}}
  - {{cssxref("corner-top-left-shape")}}
  - {{cssxref("corner-top-right-shape")}}
- Logische Einzelwerteigenschaften für Eckenformen:
  - {{cssxref("corner-start-start-shape")}}
  - {{cssxref("corner-start-end-shape")}}
  - {{cssxref("corner-end-start-shape")}}
  - {{cssxref("corner-end-end-shape")}}

Um die Formen von jeweils zwei Ecken festzulegen, verwenden Sie die Kurzschreibweisen für Seiten:

- Physische Kurzschreibweisen für Seiten:
  - {{cssxref("corner-top-shape")}}
  - {{cssxref("corner-right-shape")}}
  - {{cssxref("corner-bottom-shape")}}
  - {{cssxref("corner-left-shape")}}
- Logische Kurzschreibweisen für Seiten:
  - {{cssxref("corner-block-start-shape")}}
  - {{cssxref("corner-block-end-shape")}}
  - {{cssxref("corner-inline-start-shape")}}
  - {{cssxref("corner-inline-end-shape")}}

### Begrenzung der Radien gegenüberliegender Ecken

Wenn für gegenüberliegende Ecken `border-radius`- und `corner-shape`-Werte festgelegt sind, durch die sich die Formen überlappen würden, begrenzt der Browser die Werte, um die Überlappung zu verhindern.

Die folgenden Werte würden beispielsweise dazu führen, dass sich die obere linke und die untere rechte Ecke überlappen. Daher passt der Browser die erste Komponente von `border-radius` auf einen Wert an, der dies verhindert.

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

Die folgenden Eigenschaften folgen alle der Eckenform, wenn sie auf den Container angewendet werden:

- {{cssxref("background-color")}}
- {{cssxref("background-image")}}
- {{cssxref("border")}}
- {{cssxref("outline")}}
- {{cssxref("box-shadow")}}
- {{cssxref("overflow")}}
- {{cssxref("backdrop-filter")}}

Einige Beispiele finden Sie unter [Demonstration von Eigenschaften, die `corner-shape` folgen](#demonstration_of_properties_that_follow_the_corner-shape).

### Zusammenspiel mit `border-shape`

Die Eigenschaft `corner-shape` hat keine Wirkung, wenn für ein Element die Eigenschaft {{cssxref("border-shape")}} festgelegt ist. Der Grund dafür ist, dass `border-shape` nicht mit `border-radius` kompatibel ist: Wenn `border-shape` festgelegt ist, wird ein angegebener `border-radius` ignoriert. Da `corner-shape` von `border-radius` abhängt, hat es dann ebenfalls keine Wirkung.

Wenn Sie geformte Ecken in einer `border-shape` verwenden möchten, müssen Sie diese direkt als Teil der Form zeichnen.

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

Wir geben der Box eine feste {{cssxref("height")}}, einen {{cssxref("box-shadow")}}, einen `border-radius` von 30 Pixeln und einen `corner-shape`-Wert von `scoop`. Hinzu kommen weitere Formatierungen, die wir der Kürze halber ausgeblendet haben.

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

Beachten Sie, dass der `corner-shape`-Wert `scoop` dem Container konkave Ecken verleiht – die Kurve ist eine Umkehrung der standardmäßigen `border-radius`-Kurve. Beachten Sie außerdem, dass Hintergrund, Rahmen und Boxschatten der Kurvenform folgen.

### Demonstration von Eigenschaften, die `corner-shape` folgen

#### HTML

Das Markup für dieses Beispiel enthält ein einzelnes {{htmlelement("div")}}-Element mit Textinhalt.

```html live-sample___styles-following-corner-shape
<div>
  Some styles follow the corner shape, such as border, outline, box-shadow,
  overflow, and backdrop-filter. This is useful for helping various aspects of
  your design to not clash. As shown, it can result in some interesting visual
  effects, so you should test your design carefully.
</div>
```

#### CSS

Um zu zeigen, wie einige Formatierungen der Form der Ecken eines Containers folgen, wenden wir ein {{cssxref("background-image")}} auf das `<body>`-Element des Dokuments an. Anschließend legen wir für das `<div>` einen `border-radius` von `40px` und einen `corner-shape`-Wert von `scoop notch` fest.

Danach wenden wir Folgendes auf das `<div>` an:

- Eine halbtransparente {{cssxref("background-color")}}.
- Eine andere Farbe und einen anderen Stil für {{cssxref("border")}} an jeder Seite.
- Einen {{cssxref("backdrop-filter")}}, der das auf dem `<body>` festgelegte `background-image` invertiert.
- Einen `:hover`-Stil, an dem Sie erkennen können, dass der anklickbare Inhaltsbereich über die Eckenform hinausreicht.

Weitere grundlegende Formatierungen wurden der Kürze halber ausgeblendet.

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

Beachten Sie, dass die meisten festgelegten Formatierungen der Form folgen, die sich durch die `corner-shape`-Formatierung des `<div>` ergibt – aber nicht alle. Der Inhalt wird relativ zur ursprünglichen Box angezeigt. Der Hover-Effekt wird auch dann angewendet, wenn Sie den Text berühren, der über die obere und untere linke Ecke hinausragt.

### Vergleich von `corner-shape`-Werten

In dieser Demonstration können Sie verschiedene `corner-shape`-Werte auswählen, unterschiedliche {{cssxref("border-radius")}}-Werte für einen Container festlegen und die Auswirkungen vergleichen.

#### HTML

Das Markup für dieses Beispiel enthält ein {{htmlelement("select")}}-Auswahlfeld für verschiedene `corner-shape`-Werte, einen Schieberegler vom Typ [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) für verschiedene `border-radius`-Werte sowie ein {{htmlelement("section")}}-Element als Container, auf den diese Werte angewendet werden. Die {{htmlelement("option")}}-Elemente des Auswahlfelds bieten mehrere Schlüsselwort- und {{cssxref("superellipse()")}}-Werte zur Auswahl, die mithilfe von {{htmlelement("optgroup")}}-Elementen in zwei Gruppen unterteilt sind. Bei den Schlüsselwortwerten haben wir außerdem jeweils den entsprechenden `superellipse()`-Wert eingefügt, getrennt durch einen senkrechten Strich.

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

Wir wenden einen {{cssxref("box-shadow")}} auf das `<section>`-Element an. Außerdem geben wir dem `<section>`-Element und den Formularelementen einige grundlegende Formatierungen, die wir der Kürze halber ausgeblendet haben.

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

Das JavaScript, das die vom Benutzer ausgewählten Werte auf das `<section>`-Element anwendet, wurde der Kürze halber ausgeblendet.

#### Ergebnis

Das gerenderte Ergebnis sieht wie folgt aus:

{{EmbedLiveSample("corner-shape-select", "100%", "300")}}

Wählen Sie verschiedene Werte aus, um zu sehen, wie sie sich auf die Form der Ecken auswirken.

### Vergleich von `superellipse()`-Werten

In diesem Beispiel stellen wir zwei Schieberegler vom Typ [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) bereit. Damit können Sie zahlreiche `corner-shape`-{{cssxref("superellipse()")}}-Werte und {{cssxref("border-radius")}}-Werte durchgehen und ihre jeweiligen Auswirkungen auf einen Container vergleichen.

#### HTML

Das Markup für dieses Beispiel enthält zwei `<input type="range">`-Elemente, mit denen sich verschiedene `corner-shape`-`superellipse()`- und `border-radius`-Werte auswählen lassen, sowie ein {{htmlelement("section")}}-Element, auf das diese Werte angewendet werden.

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

Wir wenden einen {{cssxref("box-shadow")}} auf das `<section>`-Element an. Weitere grundlegende Formatierungen wurden der Kürze halber ausgeblendet.

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

Das JavaScript, das die vom Benutzer ausgewählten Werte auf das `<section>`-Element anwendet, wurde der Kürze halber ausgeblendet.

#### Ergebnis

Das gerenderte Ergebnis sieht wie folgt aus:

{{EmbedLiveSample("superellipse-slider", "100%", "300")}}

Wählen Sie verschiedene Werte aus, um zu sehen, wie sie sich auf die Form der Ecken auswirken.

### Animation von `corner-shape`

In diesem Beispiel zeigen wir, wie die Eigenschaft `corner-shape` animiert werden kann.

#### HTML

```html live-sample___corner-shape-animation
<div></div>
```

#### CSS

Wir erstellen {{cssxref("@keyframes")}}, mit denen fließend zwischen den `corner-shape`-Werten `square` und `notch` animiert wird. Anschließend wenden wir eine auf diesen `@keyframes` basierende {{cssxref("animation")}} auf das `<div>` an, wenn sich der Mauszeiger über dem umgebenden `<html>`-Element befindet oder dieses den Fokus hat. Weitere grundlegende `<div>`-Formatierungen wurden der Kürze halber ausgeblendet.

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

- {{cssxref("border-radius")}}
- {{cssxref("border-shape")}}
- Modul [CSS-Rahmen und Box-Dekorationen](/de/docs/Web/CSS/Guides/Borders_and_box_decorations)
- Modul [CSS-Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders)
- Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
