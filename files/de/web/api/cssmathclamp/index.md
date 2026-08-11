---
title: CSSMathClamp
slug: Web/API/CSSMathClamp
l10n:
  sourceCommit: 793b293c6c43b480bf060c2f98ca9240712f461e
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`CSSMathClamp`**-Schnittstelle der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) repräsentiert die CSS-Funktion {{CSSXref("clamp","clamp()")}}.

{{InheritanceDiagram}}

## Konstruktor

- [`CSSMathClamp()`](/de/docs/Web/API/CSSMathClamp/CSSMathClamp)
  - : Erstellt ein neues `CSSMathClamp`-Objekt.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner übergeordneten Schnittstelle, [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)._

- [`CSSMathClamp.lower`](/de/docs/Web/API/CSSMathClamp/lower) {{readonlyinline}}
  - : Gibt ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Objekt zurück, das den Minimalwert enthält.
- [`CSSMathClamp.value`](/de/docs/Web/API/CSSMathClamp/value) {{readonlyinline}}
  - : Gibt ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Objekt zurück, das den bevorzugten Wert enthält.
- [`CSSMathClamp.upper`](/de/docs/Web/API/CSSMathClamp/upper) {{readonlyinline}}
  - : Gibt ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Objekt zurück, das den Höchstwert enthält.

## Statische Methoden

_Erbt auch Methoden von seiner übergeordneten Schnittstelle, [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)._

## Instanz-Methoden

_Erbt auch Methoden von seiner übergeordneten Schnittstelle, [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)._

## Beschreibung

Die CSS-Funktion {{CSSXref("clamp", "clamp()")}} nimmt drei Argumente: einen Minimalwert, einen bevorzugten und einen Höchstwert, und gibt den bevorzugten Wert zurück, der zwischen dem Minimal- und Höchstwert eingegrenzt ist.

Wenn alle drei Argumente absolute Werte sind, wie Pixelgrößen, wird `clamp()` zur Parsing-Zeit auf einen einzelnen Wert aufgelöst, der im CSS Typed Object Model als [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) dargestellt wird.
Wenn der `clamp()`-Ausdruck nicht zur Parsing-Zeit auf einen einzelnen Wert aufgelöst werden kann (zum Beispiel, weil eines seiner Argumente eine relative Einheit wie `vw` oder `%` verwendet), wird die Funktion als `CSSMathClamp`-Objekt dargestellt, und die drei an `clamp()` (oder den `CSSMathClamp()`-Konstruktor) übergebenen Argumente werden als `lower`, `value` und `upper`-Eigenschaften verfügbar gemacht.

Beachten Sie, dass `CSSMathClamp` die `clamp()`-Funktion darstellt, nicht deren aufgelösten Wert.
Um den Wert einer eingegrenzten Eigenschaft zu bestimmen, müssen Sie den berechneten Stil lesen (zum Beispiel mit [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle)).

## Beispiele

### Grundlegende Verwendung

Der folgende Code erstellt eine `CSSMathClamp`-Instanz aus drei Längen und liest dann ihre `lower`, `value` und `upper`-Eigenschaften aus.

```js
const clamp = new CSSMathClamp(CSS.px(10), CSS.percent(50), CSS.px(500));

console.log(clamp.constructor.name); // "CSSMathClamp"
console.log(clamp.lower); // CSSUnitValue {value: 10, unit: "px"}
console.log(clamp.value); // CSSUnitValue {value: 50, unit: "percent"}
console.log(clamp.upper); // CSSUnitValue {value: 500, unit: "px"}
```

### `clamp()`-Darstellungen

Dieses Beispiel zeigt, wie {{CSSXref("clamp","clamp()")}} je nach Verwendung aller absoluten Werte entweder durch einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) oder ein `CSSMathClamp` dargestellt wird.

#### HTML

Zuerst deklarieren wir ein {{htmlelement("div")}}-Element, `#demoBox`, dem wir einige eingegrenzte Eigenschaften zuweisen.

```html
<div id="demoBox">Text</div>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

Die `width` der Box wird mit einem `clamp()` festgelegt, dessen drei Argumente alle absolute Längen sind, sodass der Browser dies sofort auf einen einzelnen festen Wert auflösen kann.
`font-size` wird mit einem `clamp()` festgelegt, dessen bevorzugter Wert die relative Einheit `vw` verwendet, sodass der Browser dies erst beim Aufbau auflösen kann (dies wird durch ein `CSSMathClamp` dargestellt).

```css
#demoBox {
  width: clamp(10px, 50px, 500px);
  font-size: clamp(1rem, 5vw, 3rem);
}
```

```css hidden
#log {
  height: 200px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

Zuerst finden wir die Stilregel der Demo-Box und lesen ihre `width`- und `font-size`-Werte mithilfe von [`styleMap`](/de/docs/Web/API/CSSStyleRule/styleMap).

```js
const demoBox = document.querySelector("#demoBox");

const rules = document.getElementById("css-output").sheet.cssRules;
const rule = [...rules].find((r) => r.selectorText === "#demoBox");
const styleMap = rule.styleMap;
const width = styleMap.get("width");
const fontSize = styleMap.get("font-size");
```

Wir protokollieren dann den Typ und den Wert der Darstellungen des CSS Typed Object Models, gefolgt von den berechneten (aufgelösten) Werten.

```js
log("width");
log(` type: ${width.constructor.name}`);
log(` value: ${width}`);
log(` resolved: ${getComputedStyle(demoBox).width}`);

log("\nfont-size");
log(` type: ${fontSize.constructor.name}`);
log(` lower: ${fontSize.lower}`);
log(` value: ${fontSize.value}`);
log(` upper: ${fontSize.upper}`);
log(` resolved: ${getComputedStyle(demoBox).fontSize}`);
```

#### Ergebnis

`width` wird als einzelner `CSSUnitValue` protokolliert, und sein aufgelöster Wert entspricht direkt diesem Wert.
`font-size` wird als `CSSMathClamp` protokolliert, das die ursprünglichen Operanden der `clamp()`-Funktion freigibt.

{{EmbedLiveSample("`clamp()` representations", 300, 300)}}

### Untersuchung eines eingegrenzten Werts

Dieses Beispiel verwendet drei Bereichsschieberegler, um die `lower`, `preferred` und `upper`-Werte eines `CSSMathClamp` festzulegen und dann auf die Breite einer Box mithilfe von [`attributeStyleMap.set()`](/de/docs/Web/API/StylePropertyMap/set) anzuwenden.
Auf diese Weise können Sie den Effekt einer Änderung des Bereichs auf den eingegrenzten Wert der `width` sehen.

Das Ziehen eines Schiebereglers verändert, was `lower`, `value` und `upper` melden, da sie immer die drei an `CSSMathClamp` übergebenen Operanden widerspiegeln - beachten Sie, dass `value` in `vw` gemeldet wird, nicht die auf seinem Schieberegler angezeigten Pixel. Die Ausgabe neben dem bevorzugten Schieberegler zeigt sowohl seinen Pixelwert als auch das tatsächlich an den Konstruktor übergebene `vw`-Äquivalent, sodass die Umrechnung sichtbar bleibt. Die tatsächliche gerenderte Breite der Box hingegen ist das Ergebnis der Einengung dieses `vw`-Werts zwischen den beiden Pixelgrenzen und kann sich erheblich von `value` selbst unterscheiden - zum Beispiel wenn der bevorzugte Schieberegler unter den unteren oder über den oberen Schieberegler gezogen wird.

#### HTML

Zuerst definieren wir ein {{htmlelement("div")}}-Element für die skalierbare Box, drei Schieberegler zur Einstellung der minimalen, bevorzugten und oberen Werte ihrer Breite und {{htmlelement("output")}}-Elemente zur numerischen Anzeige der Schiebereglerwerte.
Alle drei Schieberegler teilen denselben 0 bis 400 Pixel Bereich, sodass ihre Positionen direkt vergleichbar sind.
Wir setzen die Anfangswerte so, dass `lower < pref < upper`.

```html
<div id="box"></div>
<div class="controls">
  <label for="lower">Lower (px)</label>
  <input id="lower" type="range" min="0" max="400" value="50" />
  <output for="lower" id="lowerOut"></output>

  <label for="pref">Preferred (px)</label>
  <input id="pref" type="range" min="0" max="400" value="180" />
  <output for="pref" id="prefOut"></output>

  <label for="upper">Upper (px)</label>
  <input id="upper" type="range" min="0" max="400" value="350" />
  <output for="upper" id="upperOut"></output>
</div>
<pre id="log"></pre>
```

Am Ende definieren wir ein `#log`-Element zur Ausgabe von Informationen über die Breite der Box.

#### CSS

Das CSS legt die visuellen Eigenschaften und die Ausrichtung der Box, Schieberegler und anderer Elemente fest.

```css
#box {
  height: 50px;
  background: rebeccapurple;
}

.controls {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.5rem 1rem;
  max-width: 400px;
}

.controls output {
  font-family: monospace;
  text-align: right;
}
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

Zuerst erstellen wir Variablen, um auf die Box, die Schieberegler und die Ausgabeelemente zuzugreifen.

```js
const box = document.querySelector("#box");
const lowerInput = document.querySelector("#lower");
const prefInput = document.querySelector("#pref");
const upperInput = document.querySelector("#upper");
const lowerOut = document.querySelector("#lowerOut");
const prefOut = document.querySelector("#prefOut");
const upperOut = document.querySelector("#upperOut");
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

Dann rufen wir die `update()`-Funktion auf, um die Box und die Ausgabeelemente basierend auf dem Schiebereglerwert zu aktualisieren.
Wir richten einen Listener ein, damit die Funktion aufgerufen wird, wann immer sich die Positionen der Schieberegler ändern.

```js
[lowerInput, prefInput, upperInput].forEach((el) =>
  el.addEventListener("input", update),
);
update();
```

Die `update()`-Funktion wird unten gezeigt.
Diese protokolliert die Werte der Schieberegler und verwendet sie bei der Erstellung eines `CSSMathClamp`, das dann auf das `width`-Attribut der Box gesetzt wird.
Die Attributstile der Box werden dann mithilfe von [`HTMLElement.attributeStyleMap`](/de/docs/Web/API/HTMLElement/attributeStyleMap) gelesen und die abgerufenen `width`-Werte werden ebenfalls protokolliert, zusammen mit der gerenderten Breite der Box.

Eine Komplexität im Code besteht darin, dass während `lower` und `upper` als Pixel an den `CSSMathClamp()`-Konstruktor übergeben werden, genau passend zu ihren Schiebereglern, der Pixelwert von `preferred` zuerst in `vw`- (viewport width) Einheiten umgewandelt wird.
Dies wurde so gemacht, weil wenn alle drei Operanden absolute Längen wären (zum Beispiel alle in Pixeln), der Browser `clamp()` auf eine einzige feste Zahl auflösen könnte, was als [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) anstelle eines `CSSMathClamp` gelesen würde.
Die Umwandlung von `preferred` in eine relative Einheit wie `vw` bedeutet, dass der Browser den Ausdruck bis zum Layout nicht auflösen kann, sodass er den Wert als Live-`CSSMathClamp` mit allen drei intakten Operanden beibehält.

```js
function update() {
  logElement.innerText = "";

  // The preferred slider uses the same 0-400px scale as lower and upper,
  // so its value is converted to vw before being passed to CSSMathClamp.
  const prefVw = (prefInput.value / window.innerWidth) * 100;
  lowerOut.textContent = `${lowerInput.value}px`;
  prefOut.textContent = `${prefInput.value}px (~${prefVw.toFixed(1)}vw)`;
  upperOut.textContent = `${upperInput.value}px`;

  try {
    const clampValue = new CSSMathClamp(
      CSS.px(lowerInput.value),
      CSS.vw(prefVw),
      CSS.px(upperInput.value),
    );
    box.attributeStyleMap.set("width", clampValue);
    const widthClamp = box.attributeStyleMap.get("width");
    const valuePx = (widthClamp.value.value / 100) * window.innerWidth;
    log(`type: ${widthClamp.constructor.name}`);
    log(`lower: ${widthClamp.lower}`);
    log(`value: ${widthClamp.value} (~${valuePx.toFixed(1)}px)`);
    log(`upper: ${widthClamp.upper}`);
    log(`rendered width: ${getComputedStyle(box).width}`);
  } catch (e) {
    log(`Error: ${e.message}`);
  }
}
```

#### Ergebnis

Ziehen Sie die Schieberegler, um zu sehen, wie `lower`, `value` und `upper` immer den Schiebereglerpositionen entsprechen, während die gerenderte Breite zwischen `lower` und `upper` eingegrenzt wird.

{{EmbedLiveSample("Inspecting a clamped value", 300, 350)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSMathMax`](/de/docs/Web/API/CSSMathMax)
- [`CSSMathMin`](/de/docs/Web/API/CSSMathMin)
