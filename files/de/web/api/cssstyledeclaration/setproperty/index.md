---
title: "CSSStyleDeclaration: setProperty() Methode"
short-title: setProperty()
slug: Web/API/CSSStyleDeclaration/setProperty
l10n:
  sourceCommit: 20a1c2be8e8eeb4bf6e5f8fa29c01b1759bfb29f
---

{{ APIRef("CSSOM") }}

Die Schnittstelle der Methode **`CSSStyleDeclaration.setProperty()`** setzt einen neuen Wert für eine Eigenschaft eines CSS-Style-Declaration-Objekts.

## Syntax

```js-nolint
setProperty(propertyName, value)
setProperty(propertyName, value, priority)
```

### Parameter

- `propertyName`
  - : Ein String, der den CSS-Eigenschaftsnamen (im Bindestrichformat) darstellt, der geändert werden soll.
- `value` {{optional_inline}}
  - : Ein String, der den neuen Eigenschaftswert enthält. Wenn nicht angegeben, wird er als leerer String behandelt. Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)-Wert wird genauso wie ein leerer String (`""`) behandelt.
    > **Note:** `value` darf nicht `"!important"` enthalten, das sollte über den `priority`-Parameter gesetzt werden.
- `priority` {{optional_inline}}

  - : Ein String, der ermöglicht, die CSS-Priorität auf important zu setzen. Nur die unten aufgelisteten Werte werden akzeptiert:

    - `"important"` (ohne Berücksichtigung der Groß- und Kleinschreibung) um die Eigenschaft als `!important` zu setzen;
    - `""`, `undefined` oder `null`, um das `!important`-Flag zu entfernen, falls es vorhanden ist.

    Alles andere führt dazu, dass die Methode frühzeitig zurückkehrt und keine Änderung vorgenommen wird (es sei denn, `value` ist leer, in diesem Fall wird die Eigenschaft unabhängig vom `priority`-Wert entfernt). `false` zum Beispiel ist kein gültiger Prioritätswert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Eigenschaft oder das Deklarationsblock nur lesbar ist.

## Alternative Verwendung

Wenn `priority` weggelassen werden kann, bietet JavaScript eine spezielle, einfachere Syntax zum Setzen einer CSS-Eigenschaft auf einem Style-Declaration-Objekt:

```js
style.cssPropertyName = "value";
```

## Beispiele

In diesem Beispiel haben wir drei Schaltflächen, die gedrückt werden können, um die Rahmen, die Hintergrundfarbe und die Textfarbe unseres Box-Paragraphen dynamisch auf zufällige Werte zu ändern (siehe das Live-Beispiel am Ende dieses Abschnitts).

Wir wissen, dass die Regel, die wir ändern möchten, sich im zweiten Stylesheet befindet, das auf die Seite angewendet wird, deshalb greifen wir auf eine Referenz darauf zu mittels [`document.styleSheets[1]`](/de/docs/Web/API/Document/styleSheets).
Wir durchlaufen dann die verschiedenen Regeln, die sich im Stylesheet befinden und im Array bei [`stylesheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules) enthalten sind; für jede überprüfen wir, ob ihre
[`CSSStyleRule.selectorText`](/de/docs/Web/API/CSSStyleRule/selectorText)-Eigenschaft gleich dem Selektor `.box p` ist, was anzeigt, dass es diejenige ist, die wir wollen.

Falls ja, speichern wir eine Referenz zu diesem `CSSStyleRule`-Objekt in einer Variablen. Wir verwenden dann drei Funktionen, um zufällige Werte für die betreffenden Eigenschaften zu generieren und die Regel mit diesen Werten zu aktualisieren. In jedem Fall wird dies mit der `setProperty()`-Methode durchgeführt, zum Beispiel `boxParaRule.style.setProperty('border', newBorder);`.

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

const stylesheet = document.styleSheets[1];
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
