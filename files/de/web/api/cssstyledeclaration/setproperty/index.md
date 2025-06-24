---
title: "CSSStyleDeclaration: setProperty() Methode"
short-title: setProperty()
slug: Web/API/CSSStyleDeclaration/setProperty
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{ APIRef("CSSOM") }}

Die Schnittstelle der **`CSSStyleDeclaration.setProperty()`**-Methode setzt einen neuen Wert für eine Eigenschaft eines CSS-Stil-Deklarationsobjekts.

## Syntax

```js-nolint
setProperty(propertyName, value)
setProperty(propertyName, value, priority)
```

### Parameter

- `propertyName`
  - : Ein String, der den Namen der zu ändernden CSS-Eigenschaft (in Bindestrich-Notation) darstellt.
- `value` {{optional_inline}}
  - : Ein String, der den neuen Eigenschaftswert enthält. Falls nicht angegeben, wird dies als leerer String betrachtet. Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)-Wert wird genauso behandelt wie der leere String (`""`).
    > [!NOTE] > `value` darf nicht `"!important"` enthalten; dies sollte über den `priority`-Parameter gesetzt werden.
- `priority` {{optional_inline}}

  - : Ein String, der es erlaubt, die CSS-Priorität auf wichtig zu setzen. Nur die unten aufgeführten Werte werden akzeptiert:

    - `"important"` (nicht fallabhängig), um die Eigenschaft als `!important` zu setzen;
    - `""`, `undefined` oder `null`, um das `!important`-Flag zu entfernen, falls vorhanden.

    Alles andere führt dazu, dass die Methode frühzeitig zurückkehrt und keine Änderung passiert (es sei denn, `value` ist leer; in diesem Fall wird die Eigenschaft unabhängig vom `priority`-Wert entfernt). `false` ist zum Beispiel kein gültiger Prioritätswert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Eigenschaft oder der Deklarationsblock schreibgeschützt ist.

## Alternative Nutzung

Wenn `priority` weggelassen werden kann, hat JavaScript eine spezielle einfachere Syntax zum Setzen einer CSS-Eigenschaft auf einem Stil-Deklarationsobjekt:

```js
style.cssPropertyName = "value";
```

## Beispiele

In diesem Beispiel haben wir drei Schaltflächen, die gedrückt werden können, um den Rand, die Hintergrundfarbe und die Textfarbe unseres Absatzes mit einem Kasten dynamisch auf zufällige Werte zu ändern (siehe das Live-Beispiel am Ende dieses Abschnitts).

Wir wissen, dass die Regel, die wir ändern möchten, im zweiten auf die Seite angewendeten Stylesheet enthalten ist, also greifen wir darauf zu, indem wir eine Referenz darauf mit [`document.styleSheets[1]`](/de/docs/Web/API/Document/styleSheets) holen. Dann durchlaufen wir die verschiedenen Regeln, die im Stylesheet enthalten sind, welche in dem Array gefunden werden, das unter [`stylesheet.cssRules`](/de/docs/Web/API/CSSStyleSheet/cssRules) enthalten ist; für jede davon überprüfen wir, ob ihre [`CSSStyleRule.selectorText`](/de/docs/Web/API/CSSStyleRule/selectorText) Eigenschaft dem Selektor `.box p` entspricht, was anzeigt, dass es diejenige ist, die wir wollen.

Wenn ja, speichern wir eine Referenz zu diesem `CSSStyleRule`-Objekt in einer Variablen. Anschließend verwenden wir drei Funktionen, um Zufallswerte für die betreffenden Eigenschaften zu erzeugen und aktualisieren die Regel mit diesen Werten. In jedem Fall wird dies mit der `setProperty()`-Methode durchgeführt, zum Beispiel `boxParaRule.style.setProperty('border', newBorder);`.

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
