---
title: "CSSStyleDeclaration: setProperty() Methode"
short-title: setProperty()
slug: Web/API/CSSStyleDeclaration/setProperty
l10n:
  sourceCommit: 56bbf59f4ea2566d64ad2e5c669a7a597626b7f3
---

{{ APIRef("CSSOM") }}

Die **`CSSStyleDeclaration.setProperty()`** Methodenschnittstelle setzt einen neuen Wert für eine Eigenschaft in einem CSS-Stildeklarationsobjekt.

## Syntax

```js-nolint
setProperty(propertyName, value)
setProperty(propertyName, value, priority)
```

### Parameter

- `propertyName`
  - : Ein Zeichenfolgendarstellung des CSS-Eigenschaftennamens (Bindestrich-Schreibweise), der modifiziert werden soll.
- `value` {{optional_inline}}
  - : Eine Zeichenfolge, die den neuen Eigenschaftswert enthält. Wenn nicht angegeben, wird dies als leere Zeichenfolge behandelt. Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) Wert wird genauso behandelt wie die leere Zeichenfolge (`""`).
    > [!NOTE]
    > `value` darf kein `"!important"` enthalten; das sollte über den `priority` Parameter gesetzt werden.
- `priority` {{optional_inline}}
  - : Eine Zeichenfolge, die es ermöglicht, die CSS-Priorität auf wichtig zu setzen. Nur die unten aufgeführten Werte werden akzeptiert:
    - `"important"` (unabhängig von Groß- und Kleinschreibung) zum Setzen der Eigenschaft als `!important`;
    - `""`, `undefined`, oder `null`, um das `!important` Flag zu entfernen, falls vorhanden.

    Alles andere führt dazu, dass die Methode frühzeitig zurückkehrt und keine Änderungen vornimmt (es sei denn, `value` ist leer, in welchem Fall die Eigenschaft unabhängig vom `priority` Wert entfernt wird). `false` ist zum Beispiel kein gültiger Prioritätswert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Eigenschaft oder der Deklarationsblock schreibgeschützt ist.

## Alternative Verwendung

Wenn `priority` weggelassen werden kann, bietet JavaScript eine spezielle einfachere Syntax zum Setzen einer CSS-Eigenschaft auf einem Stildeklarationsobjekt:

```js
style.cssPropertyName = "value";
```

## Beispiele

### Setzen der Box-Eigenschaften

In diesem Beispiel haben wir drei Schaltflächen, die gedrückt werden können, um die Rahmen-, Hintergrund- und Textfarbe unseres Box-Absatzes dynamisch auf zufällige Werte zu ändern (siehe das Live-Beispiel am Ende dieses Abschnitts).

Die MDN [Live-Beispiel](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) Infrastruktur kombiniert alle CSS-Blöcke im Beispiel zu einem einzigen Inline-Stil mit der ID `css-output`, daher verwenden wir zuerst [`document.getElementById()`](/de/docs/Web/API/Document/getElementById), um dieses Stylesheet zu finden.

Wir durchlaufen dann die verschiedenen Regeln, die sich im Stylesheet im Array unter [`stylesheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules) befinden.
Für jede Regel prüfen wir, ob ihr [`CSSStyleRule.selectorText`](/de/docs/Web/API/CSSStyleRule/selectorText) gleich dem Selektor `.box p` ist, den wir möchten.

Ist dies der Fall, speichern wir eine Referenz zu diesem `CSSStyleRule` Objekt in einer Variablen.
Anschließend verwenden wir drei Funktionen, um zufällige Werte für die betreffenden Eigenschaften zu generieren und aktualisieren die Regel mit diesen Werten.
In jedem Fall erfolgt dies mit der `setProperty()` Methode, z.B. `boxParaRule.style.setProperty('border', newBorder);`.

### HTML

```html
<div class="controls">
  <button class="border">Border</button>
  <button class="bgcolor">Background</button>
  <button class="color">Text</button>
</div>
<div class="box">
  <p>Box</p>
</div>
```

### CSS

```css
html {
  background: orange;
  font-family: sans-serif;
  height: 100%;
}

body {
  height: inherit;
  width: 80%;
  min-width: 500px;
  max-width: 1000px;
  margin: 0 auto;
}

.controls {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

div button {
  flex: 1;
  margin: 20px;
  height: 30px;
  line-height: 30px;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 70px);
}

.box p {
  width: 50%;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  height: 150px;
  line-height: 150px;
  background: red;
  border: 5px solid purple;
  color: white;
  transition: all 1s;
}
```

### JavaScript

```js
const borderBtn = document.querySelector(".border");
const bgColorBtn = document.querySelector(".bgcolor");
const colorBtn = document.querySelector(".color");
const box = document.querySelector(".box");

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

function randomColor() {
  return `rgb(${random(0, 255)} ${random(0, 255)} ${random(0, 255)})`;
}

// Find the inline stylesheet generated for MDN live samples
const stylesheet = document.getElementById("css-output").sheet;

const boxParaRule = [...stylesheet.cssRules].find(
  (r) => r.selectorText === ".box p",
);

function setRandomBorder() {
  const newBorder = `${random(1, 50)}px solid ${randomColor()}`;
  boxParaRule.style.setProperty("border", newBorder);
}

function setRandomBgColor() {
  const newBgColor = randomColor();
  boxParaRule.style.setProperty("background-color", newBgColor);
}

function setRandomColor() {
  const newColor = randomColor();
  boxParaRule.style.setProperty("color", newColor);
}

borderBtn.addEventListener("click", setRandomBorder);
bgColorBtn.addEventListener("click", setRandomBgColor);
colorBtn.addEventListener("click", setRandomColor);
```

### Ergebnis

{{EmbedLiveSample('Examples', '100%', 400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
