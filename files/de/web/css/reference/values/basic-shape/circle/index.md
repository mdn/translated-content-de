---
title: "`circle()` CSS-Funktion"
short-title: circle()
slug: Web/CSS/Reference/Values/basic-shape/circle
l10n:
  sourceCommit: 1e7ba7f0645705dcd46dd7392f09284129cf87bf
---

Die **`circle()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) definiert einen Kreis unter Verwendung eines Radius und einer Position. Sie gehört zu den {{cssxref("basic-shape")}} Datentypen.

{{InteractiveExample("CSS Demo: circle()")}}

```css interactive-example-choice
clip-path: circle(50px);
```

```css interactive-example-choice
clip-path: circle(6rem at right center);
```

```css interactive-example-choice
clip-path: circle(10% at 2rem 90%);
```

```css interactive-example-choice
clip-path: circle(closest-side at 5rem 6rem);
```

```css interactive-example-choice
clip-path: circle(farthest-side);
```

```css interactive-example-choice
clip-path: circle(closest-corner at 70% 70%);
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
shape-outside: circle(50%);
clip-path: circle(6rem at 12rem 8rem);
border-shape: circle(60%);
```

### Werte

- `<shape-radius>`
  - : Dies kann eine {{cssxref("length")}}, ein {{cssxref("percentage")}} oder einer der folgenden Schlüsselwortwerte sein:
    - `closest-side`
      - : Der Radius ist die Länge vom Mittelpunkt des Kreises zur nächstgelegenen Seite der Referenzbox, sodass die Grenze des Kreises genau diese Seite berührt.
    - `farthest-side`
      - : Der Radius ist die Länge vom Mittelpunkt des Kreises zur am weitesten entfernten Seite der Referenzbox, sodass die Grenze des Kreises genau diese Seite berührt.
    - `closest-corner`
      - : Der Radius ist die Länge vom Mittelpunkt des Kreises zur nächstgelegenen Ecke der Referenzbox, sodass die Grenze des Kreises durch diese Ecke verläuft.
    - `farthest-corner`
      - : Der Radius ist die Länge vom Mittelpunkt des Kreises zur am weitesten entfernten Ecke der Referenzbox, sodass die Grenze des Kreises durch diese Ecke verläuft.

- `<position>`
  - : Verschiebt den Mittelpunkt des Kreises. Kann eine {{cssxref("length")}}, ein {{cssxref("percentage")}} oder ein Wert wie `left` sein. Der `<position>`-Wert wird standardmäßig auf die Mitte gesetzt, wenn er weggelassen wird.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegender Kreis

Im folgenden Beispiel hat die {{cssxref("shape-outside")}} Eigenschaft den Wert `circle(50%)`, der einen Kreis auf einem gefloateten Element definiert, um den der Text herumfließen soll.

```html live-sample___circle
<div class="box">
  <img
    alt="A hot air balloon"
    src="https://mdn.github.io/shared-assets/images/examples/round-balloon.png" />
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

```css live-sample___circle
body {
  font: 1.2em / 1.5 sans-serif;
}
img {
  float: left;
  shape-outside: circle(50%);
}
```

{{EmbedLiveSample("circle", "", "300px")}}

### Interaktives Beispiel für Radius-Schlüsselwörter

Dieses Beispiel ermöglicht es Ihnen, die Auswirkungen des Verschiebens des Mittelpunktes des Kreises bei Verwendung jedes der vier `<shape-radius>`-Schlüsselwörter zu testen.

#### HTML

Das HTML definiert zuerst Steuerelemente zum Auswählen eines gewählten Radius-Schlüsselwortes und zum Festlegen der Position, an der der Kreis angezeigt werden soll, gefolgt von einem {{htmlelement("pre")}}-Element zur Anzeige des ausgewählten {{cssxref("clip-path")}} der Kontrollwerte.
Danach wird ein `#support-note`-Element bereitgestellt, um anzuzeigen, wann bestimmte Radius-Schlüsselwörter nicht unterstützt werden.

```html live-sample___circle-keywords-interactive
<div class="controls">
  <div class="controls-row">
    <label>
      Shape radius:
      <select id="radius-keyword">
        <option value="closest-side">closest-side</option>
        <option value="closest-corner">closest-corner</option>
        <option value="farthest-side">farthest-side</option>
        <option value="farthest-corner" selected>farthest-corner</option>
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

Das HTML definiert dann eine Reihe von {{htmlelement("div")}}-Elementen, die verwendet werden, um den Kreis, die Referenzbox und den Mittelpunktmarker darzustellen.
Die wichtigsten Elemente sind die Referenzbox (`#refbox`) und das darin enthaltene `.fill`-Element, die den Verlauf definieren, der gezeichnet wird (wie im folgenden CSS-Bereich diskutiert).
Ein `clipPath` wird in JavaScript auf die Referenzbox gesetzt, um diesen Verlauf auf eine kreisförmige Form zu beschneiden.

```html live-sample___circle-keywords-interactive
<div class="canvas">
  <div class="refbox" id="refbox">
    <div class="fill"></div>
  </div>
  <div class="outline"></div>
  <div class="center-marker" id="center-marker"></div>
</div>
```

Beachten Sie, dass die `.outline` und `.center-marker` bereitgestellt werden, um die Referenzbox und den Mittelpunkt des Clipping-Kreises besser sichtbar zu machen, die sonst unsichtbar wären.
Das `.outline`-Element muss nach `#refbox` im Markup platziert werden: Da es selbst nicht beschnitten wird, bedeutet das Zeichnen nach der Referenzbox, dass sein gestrichelter Rand immer oben auf dem `.fill`-Verlauf gerendert wird, auch wenn der Clipping-Kreis über die Referenzbox hinausgeht.

#### CSS

Das CSS für die Leinwand, die Referenzbox und die Füllelemente wird unten gezeigt.
Beachten Sie, dass `.fill` einen Verlauf definiert, der die Referenzbox überläuft und den größten Teil der Leinwand füllt.
Dies ist der Verlauf, den wir mit dem `circle()` beschneiden werden (wir tun dies, indem wir den CSS-Clippfad dynamisch in unserem JavaScript-Code setzen).

```css live-sample___circle-keywords-interactive
.canvas {
  position: relative;
  width: 640px;
  height: 480px;
  overflow: hidden;
  border: 1px solid #888;
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

Das CSS für die Steuerelemente und andere Elemente wird nicht angezeigt, da es nicht erforderlich ist, um die `circle()`-Methode zu verstehen.
Interessierte Leser können es im Beispiel-Playground sehen.

```css live-sample___circle-keywords-interactive hidden
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

```css live-sample___circle-keywords-interactive hidden
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

Zuerst erhalten wir Referenzen für jedes der vom Beispiel verwendeten Elemente.

```js live-sample___circle-keywords-interactive
const select = document.getElementById("radius-keyword");
const posX = document.getElementById("pos-x");
const posY = document.getElementById("pos-y");
const refbox = document.getElementById("refbox");
const declaration = document.getElementById("declaration");
const marker = document.getElementById("center-marker");
const supportNote = document.getElementById("support-note");
```

Dann definieren wir die `checkSupport()`-Funktion, die verwendet wird, um zu testen, ob jedes Radius-Schlüsselwort unterstützt wird und die zugehörigen Auswahloptionen zu aktivieren bzw. zu deaktivieren.
Dies verwendet die Methode [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static), um die Unterstützung von Schlüsselwörtern zu überprüfen.

```js live-sample___circle-keywords-interactive
function checkSupport() {
  const unsupported = [];
  for (const option of select.options) {
    if (!CSS.supports("clip-path", `circle(${option.value} at 0px 0px)`)) {
      option.disabled = true;
      option.textContent += " (not supported)";
      unsupported.push(option.value);
    }
  }
  if (unsupported.length > 0) {
    supportNote.textContent = `Your browser doesn't support: ${unsupported.join(", ")}.`;
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
```

Als Nächstes definieren wir eine `update()`-Funktion, die immer dann aufgerufen wird, wenn die Eingabesteuerungen geändert werden.
Diese setzt den Clippfad auf die Referenzbox basierend auf dem ausgewählten Schlüsselwort und der Position und verschiebt den Mittelpunktmarker entsprechend.

```js live-sample___circle-keywords-interactive
function update() {
  const keyword = select.value;
  const x = Number(posX.value);
  const y = Number(posY.value);

  // Build the clip-path value and apply it to the reference box
  const value = `circle(${keyword} at ${x}px ${y}px)`;
  refbox.style.clipPath = value;

  // Update the displayed declaration text and marker position
  declaration.textContent = `clip-path: ${value};`;
  marker.style.left = `${refbox.offsetLeft + x}px`;
  marker.style.top = `${refbox.offsetTop + y}px`;
}

select.addEventListener("change", update);
posX.addEventListener("input", update);
posY.addEventListener("input", update);
checkSupport();
update();
```

#### Ergebnis

Ändern Sie die Position des Kreismittelpunkts und das verwendete Schlüsselwort, um deren relative Auswirkungen zu sehen.
Beachten Sie, dass die Referenzbox zusammen mit dem ausgewählten Radius-Schlüsselwort und der Position verwendet wird, um den Clipping-Kreis zu berechnen.
Dieser Kreis kann über die Referenzbox hinausgehen (zum Beispiel bei `closest-corner` oder `farthest-corner`); der `.fill`-Verlauf ist absichtlich größer als die Referenzbox dimensioniert, sodass er immer den gesamten beschnittenen Kreis abdeckt, unabhängig davon, wie weit er sich erstreckt.

{{EmbedLiveSample("circle-keywords-interactive", "", "640px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("border-shape")}}, {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [Leitfaden zu Grundformen](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
