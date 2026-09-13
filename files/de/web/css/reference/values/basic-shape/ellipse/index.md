---
title: "`ellipse()` CSS-Funktion"
short-title: ellipse()
slug: Web/CSS/Reference/Values/basic-shape/ellipse
l10n:
  sourceCommit: 30e0adab23668217555b7ed37df7e6e61b002bf3
---

Die **`ellipse()`** [CSS](/de/docs/Web/CSS) Funktion ist einer der {{cssxref("basic-shape")}} [Datentypen](/de/docs/Web/CSS/Reference/Values/Data_types).

{{InteractiveExample("CSS Demo: ellipse()")}}

```css interactive-example-choice
clip-path: ellipse(20px 50px);
```

```css interactive-example-choice
clip-path: ellipse(4rem 50% at right center);
```

```css interactive-example-choice
clip-path: ellipse(closest-side closest-side at 5rem 6rem);
```

```css interactive-example-choice
clip-path: ellipse(closest-side farthest-side);
```

```css interactive-example-choice
clip-path: ellipse(closest-corner closest-corner at 25% 25%);
```

```css interactive-example-choice
clip-path: ellipse(closest-side closest-corner at 25% 25%);
```

```css interactive-example-choice
clip-path: ellipse(closest-side farthest-corner at 25% 25%);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#default-example {
  background: #ffee99;
}

#example-element {
  background: linear-gradient(to bottom right, #ff5522, #0055ff);
  width: 100%;
  height: 100%;
}
```

## Syntax

```css
shape-outside: ellipse(40% 50% at left);
shape-outside: ellipse(closest-side farthest-side at 30%);
border-shape: ellipse(50% 40%);
```

Eine Ellipse ist im Wesentlichen ein verzerrter Kreis, und daher funktioniert `ellipse()` sehr ähnlich wie {{cssxref("basic-shape/circle","circle()")}}, außer dass wir zwei Radien x und y angeben müssen.

### Werte

- `<shape-radius>`
  - : Zwei Radien, x und y, in dieser Reihenfolge. Diese können eine {{cssxref("Länge")}}, ein {{cssxref("Prozentsatz")}} oder einer der folgenden Schlüsselwortwerte sein:
    - `closest-side`
      - : Der Radius ist die Länge vom Zentrum der Ellipse zur nächsten Seite des Referenzrahmens in der gegebenen Richtungsrichtung, sodass die Grenze der Ellipse diese Seite gerade berührt.
    - `farthest-side`
      - : Der Radius ist die Länge vom Zentrum der Ellipse zur entferntesten Seite des Referenzrahmens in der gegebenen Richtungsrichtung, sodass die Grenze der Ellipse diese Seite gerade berührt.
    - `closest-corner`
      - : Der Radius ist die Länge vom Zentrum der Ellipse zur nächsten Ecke des Referenzrahmens in der gegebenen Richtungsrichtung.
    - `farthest-corner`
      - : Der Radius ist die Länge vom Zentrum der Ellipse zur entferntesten Ecke des Referenzrahmens in der gegebenen Richtungsrichtung.

- `<position>`
  - : Verschiebt das Zentrum der Ellipse. Kann eine {{cssxref("Länge")}}, ein {{cssxref("Prozentsatz")}} oder ein Wert wie `left` sein. Der `<position>` Wert ist standardmäßig zentriert, wenn er weggelassen wird.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches `ellipse()` Beispiel

Dieses Beispiel zeigt eine Ellipse, die links ausgerichtet ist und einen horizontalen Radius von 40%, einen vertikalen Radius von 50% und eine linke Position hat. Dies bedeutet, dass das Zentrum der Ellipse an der linken Kante des Rahmens liegt und uns eine halbe Ellipsenform gibt, um unseren Text darum herum zu platzieren.
Klicken Sie im Codeblock auf "Play", um diese Werte zu ändern und zu sehen, wie sich die Ellipse verändert:

```html live-sample___ellipse
<div class="box">
  <div class="shape"></div>
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery. Before that night—a memorable night,
    as it was to prove—hundreds of millions of people had watched the rising
    smoke-wreaths of their fires without drawing any special inspiration from
    the fact.
  </p>
</div>
```

```css live-sample___ellipse
body {
  font: 1.2em / 1.5 sans-serif;
}
.shape {
  float: left;
  shape-outside: ellipse(40% 50% at left);
  margin: 20px;
  width: 100px;
  height: 200px;
}
```

{{EmbedLiveSample("ellipse", "", "300px")}}

### Verwendung von closest-side / farthest-side Werten

Die Schlüsselwortwerte `closest-side` und `farthest-side` sind nützlich, um schnell eine Ellipse basierend auf der Größe des umflossenen Element-Referenzrahmens zu erstellen.

```html live-sample___ellipse-keywords
<div class="box">
  <div class="shape"></div>
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery. Before that night—a memorable night,
    as it was to prove—hundreds of millions of people had watched the rising
    smoke-wreaths of their fires without drawing any special inspiration from
    the fact.
  </p>
</div>
```

```css live-sample___ellipse-keywords
body {
  font: 1.2em / 1.5 sans-serif;
}
.shape {
  float: left;
  shape-outside: ellipse(closest-side farthest-side at 30%);
  margin: 20px;
  width: 100px;
  height: 140px;
}
```

{{EmbedLiveSample("ellipse-keywords", "", "300px")}}

### Interaktives Beispiel für Radius-Schlüsselwörter

Dieses Beispiel ermöglicht es Ihnen, die Wirkung der Verschiebung des Mittelpunktes der Ellipse zu testen, wenn jedes der vier `<shape-radius>` Schlüsselwörter – unabhängig für den x-Radius und den y-Radius ausgewählt – verwendet wird.

Da `closest-corner` und `farthest-corner` neuere Ergänzungen zu `ellipse()` sind, testet das Skript jedes Schlüsselwort mit [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static), bevor es aktiviert wird.
Jedes Schlüsselwort, das Ihr Browser noch nicht unterstützt, wird in beiden Dropdowns deaktiviert (und als "nicht unterstützt" gekennzeichnet).

#### HTML

Das HTML definiert zunächst Steuerelemente zum Auswählen der x-Radius- und y-Radius-Schlüsselwörter und zum Festlegen der Position, an der die Ellipse angezeigt werden soll, gefolgt von einem {{htmlelement("pre")}} Element zur Anzeige des {{cssxref("clip-path")}}, das die Steuerungswerte auswählen.
Danach wird ein `#support-note` Element bereitgestellt, um anzuzeigen, wann bestimmte Radius-Schlüsselwörter nicht unterstützt werden.

```html live-sample___ellipse-keywords-interactive
<div class="controls">
  <div class="controls-row">
    <label>
      X radius:
      <select id="radius-x-keyword">
        <option value="closest-side">closest-side</option>
        <option value="closest-corner">closest-corner</option>
        <option value="farthest-side">farthest-side</option>
        <option value="farthest-corner" selected>farthest-corner</option>
      </select>
    </label>
    <label>
      Y radius:
      <select id="radius-y-keyword">
        <option value="closest-side">closest-side</option>
        <option value="closest-corner">closest-corner</option>
        <option value="farthest-side" selected>farthest-side</option>
        <option value="farthest-corner">farthest-corner</option>
      </select>
    </label>
  </div>
  <div class="controls-row">
    <label>
      Position X:
      <input type="range" id="pos-x" min="0" max="200" value="120" />
    </label>
    <label>
      Position Y:
      <input type="range" id="pos-y" min="0" max="120" value="40" />
    </label>
  </div>
</div>

<pre id="declaration"></pre>

<p id="support-note"></p>
```

Das HTML definiert dann mehrere {{htmlelement("div")}} Elemente, die zur Darstellung der Ellipse, des Referenzrahmens und des Mittelpunktmarkers verwendet werden.
Die wichtigsten Elemente sind der Referenzrahmen (`#refbox`) und das `.fill` Element, das es enthält, die den gezeichneten Verlauf definieren (wie im folgenden CSS-Abschnitt erläutert).
Ein `clipPath` wird im JavaScript-Code auf den Referenzrahmen gesetzt, um diesen Verlauf an eine elliptische Form zu beschneiden.

```html live-sample___ellipse-keywords-interactive
<div class="canvas">
  <div class="refbox" id="refbox">
    <div class="fill"></div>
  </div>
  <div class="outline"></div>
  <div class="center-marker" id="center-marker"></div>
</div>
```

Beachten Sie, dass `.outline` und `.center-marker` bereitgestellt werden, um den Referenzrahmen und das Zentrum der Schnittellipse besser sichtbar zu machen, die sonst unsichtbar wären.
Das `.outline` Element muss im Markup nach `#refbox` platziert werden: da es selbst nicht beschnitten wird, bedeutet das Zeichnen nach dem Referenzrahmen, dass seine gepunktete Grenze immer oben auf dem `.fill` Verlauf rendert, selbst wenn die Schnittellipse über den Referenzrahmen hinausgeht.

#### CSS

Das CSS für die Leinwand-, Referenzrahmen- und Füllelelemente wird unten gezeigt.
Beachten Sie, dass `.fill` einen Verlauf definiert, der über den Referenzrahmen hinausläuft und den größten Teil der Leinwand ausfüllt.
Dies ist der Verlauf, den wir mit der `ellipse()` Funktion zuschneiden werden (wir tun dies, indem wir den CSS-Clippfad dynamisch in unserem JavaScript-Code einstellen).

```css live-sample___ellipse-keywords-interactive
.canvas {
  position: relative;
  width: 640px;
  height: 480px;
  overflow: hidden;
  border: 1px solid #888888;
}

.refbox {
  position: absolute;
  top: 180px;
  left: 220px;
  width: 200px;
  height: 120px;
  box-sizing: border-box;
}

.fill {
  position: absolute;
  inset: -240px;
  background: linear-gradient(to bottom right, #ff5522, #0055ff);
}
```

Das CSS für die Steuerungen und andere Elemente wird nicht gezeigt, da es nicht notwendig ist, um die `ellipse()` Methode zu verstehen.
Interessierte Leser können es im Beispielspielplatz einsehen.

```css live-sample___ellipse-keywords-interactive hidden
body {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
}

.controls {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.controls-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
}
```

```css live-sample___ellipse-keywords-interactive hidden
.outline {
  position: absolute;
  top: 180px;
  left: 220px;
  width: 200px;
  height: 120px;
  box-sizing: border-box;
}

.outline {
  border: 3px dashed #e6007a;
  pointer-events: none;
}

.center-marker {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: white;
  border: 2px solid black;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

#declaration {
  margin: 0;
}

#support-note {
  margin: 0;
  color: #b3001b;
}
```

#### JavaScript

Zuerst erhalten wir Verweise auf jedes der im Beispiel verwendeten Elemente.

```js live-sample___ellipse-keywords-interactive
const selectX = document.getElementById("radius-x-keyword");
const selectY = document.getElementById("radius-y-keyword");
const posX = document.getElementById("pos-x");
const posY = document.getElementById("pos-y");
const refbox = document.getElementById("refbox");
const declaration = document.getElementById("declaration");
const marker = document.getElementById("center-marker");
const supportNote = document.getElementById("support-note");
```

Dann definieren wir eine `checkSupport()` Funktion, um zu testen, ob jedes Radius-Schlüsselwort unterstützt wird, und die zugehörigen Optionen in beiden Dropdowns zu aktivieren/deaktivieren.
Dies verwendet die Methode [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static), um die Unterstützung des Schlüsselworts zu überprüfen.

```js live-sample___ellipse-keywords-interactive
function checkSupport() {
  const unsupported = new Set();
  for (const option of selectX.options) {
    const test = `ellipse(${option.value} ${option.value} at 0px 0px)`;
    if (!CSS.supports("clip-path", test)) {
      unsupported.add(option.value);
    }
  }
  for (const select of [selectX, selectY]) {
    for (const option of select.options) {
      if (unsupported.has(option.value)) {
        option.disabled = true;
        option.textContent += " (not supported)";
      }
    }
    if (select.selectedOptions[0]?.disabled) {
      const firstSupported = [...select.options].find(
        (option) => !option.disabled,
      );
      if (firstSupported) {
        select.value = firstSupported.value;
      }
    }
  }
  if (unsupported.size > 0) {
    supportNote.textContent = `Your browser doesn't support: ${[...unsupported].join(", ")}.`;
  }
}
```

Als nächstes definieren wir eine `update()` Funktion, die immer dann aufgerufen wird, wenn die Eingabesteuerungen geändert werden.
Diese setzt den Clippfad auf dem Referenzrahmen basierend auf den ausgewählten x-Radius- und y-Radius-Schlüsselwörtern und der Position und bewegt den Mittelpunktmarker entsprechend.

```js live-sample___ellipse-keywords-interactive
function update() {
  const xKeyword = selectX.value;
  const yKeyword = selectY.value;
  const x = Number(posX.value);
  const y = Number(posY.value);

  // Build the clip-path value and apply it to the reference box
  const value = `ellipse(${xKeyword} ${yKeyword} at ${x}px ${y}px)`;
  refbox.style.clipPath = value;

  // Update the displayed declaration text and marker position
  declaration.textContent = `clip-path: ${value};`;
  marker.style.left = `${refbox.offsetLeft + x}px`;
  marker.style.top = `${refbox.offsetTop + y}px`;
}

selectX.addEventListener("change", update);
selectY.addEventListener("change", update);
posX.addEventListener("input", update);
posY.addEventListener("input", update);
checkSupport();
update();
```

#### Ergebnis

Ändern Sie die Position des Zentrums und das Schlüsselwort für jeden Radius, um ihre relativen Effekte zu sehen.
Beachten Sie, dass der Referenzrahmen zusammen mit den ausgewählten x-Radius- und y-Radius-Schlüsselwörtern sowie der Position verwendet wird, um die Schnittellipse zu berechnen.
Diese Ellipse kann sich über den Referenzrahmen hinaus erstrecken (zum Beispiel mit `closest-corner` oder `farthest-corner`); der `.fill` Verlauf ist absichtlich größer als der Referenzrahmen dimensioniert, damit er die zugeschnittene Ellipse immer vollständig abdeckt, egal wie weit sie sich erstreckt.

{{EmbedLiveSample("ellipse-keywords-interactive", "", "680px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("border-shape")}}, {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [Leitfaden zu Grundformen](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
