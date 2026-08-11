---
title: "StylePropertyMapReadOnly: get()-Methode"
short-title: get()
slug: Web/API/StylePropertyMapReadOnly/get
l10n:
  sourceCommit: 793b293c6c43b480bf060c2f98ca9240712f461e
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`get()`**-Methode des [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly)-Interfaces gibt ein vom [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) stammendes Objekt für den ersten Wert der angegebenen Eigenschaft zurück.

Verwenden Sie [`getAll()`](/de/docs/Web/API/StylePropertyMapReadOnly/getAll), um alle Werte einer CSS-Eigenschaft zu erhalten, die mehrere Werte haben kann, wie z.B. {{cssxref("background-image")}} oder {{cssxref("transition")}}.

## Syntax

```js-nolint
get(property)
```

### Parameter

- `property`
  - : Der Name der Eigenschaft.
    Eigennamen von Eigenschaften (beginnend mit `--`) werden groß-/kleinschreibungssensitiv abgeglichen; Standard-Eigenschaftsnamen nicht.

### Rückgabewert

Ein vom [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) abgeleitetes Objekt oder {{jsxref("undefined")}}, wenn `property` keinen Wert in der Map hat.

Der konkrete Typ des zurückgegebenen Objekts hängt von der Eigenschaft und ihrem Wert ab.
Zum Beispiel könnte eine einem Schlüsselwort zugewiesene Eigenschaft ein [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue) zurückgeben, während eine einem mathematischen Ergebnis zugewiesene Eigenschaft ein [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) zurückgeben könnte.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `property` kein gültiger CSS-Eigenschaftsname ist.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie man einige Eigenschaften und deren Werte abrufen kann.

#### HTML

Zuerst erstellen wir einen Link in einem Absatz:

```html
<p>
  <a href="https://example.com">Link</a>
</p>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

Das CSS gestaltet das `font-weight` des Absatzes und definiert und verwendet eine benutzerdefinierte Eigenschaft für die Farbe des Links:

```css
p {
  font-weight: bold;
}
a {
  --color: red;
  color: var(--color);
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

Zuerst rufen wir [`computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap) auf dem Element auf, um seine Style-Map zu erhalten: ein `StylePropertyMapReadOnly`-Objekt.
Wir erstellen ein Array von interessierenden Eigenschaften und verwenden die `get()`-Methode von `StylePropertyMapReadOnly`, um nur diese Werte zu protokollieren.

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

```js
// get the element and its style map
const myElement = document.querySelector("a");
const styleMap = myElement.computedStyleMap();

// array of properties we're interested in
const properties = ["font-weight", "border-left-color", "color", "--color"];

// log the value of each property of interest
for (const property of properties) {
  log(`${property}: ${styleMap.get(property)}`);
}
```

#### Ergebnis

{{EmbedLiveSample("Basic usage", 120, 200)}}

### Abrufen verschiedener Wertetypen

Dieses Beispiel zeigt, dass `get()` je nach Eigenschaft und Wert Objekte verschiedener Typen zurückgeben kann.

Zuerst werden eine Reihe verschiedener Eigenschaften auf ein Element mit CSS angewendet.
Dann werden sie über JavaScript zurückgelesen und der Konstruktorname und der Wert jeder Eigenschaft protokolliert.
Der eigentliche Logcode ist nicht Teil der Demonstration, daher wird er hier ausgeblendet.

#### HTML

Zuerst definieren wir ein {{htmlelement("div")}} mit der ID `demoBox`, dem wir Stile hinzufügen werden.

```html
<div id="demoBox">Text</div>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

```css
#demoBox {
  --my-custom-property: "some text";
  opacity: 0.5;
  width: calc(30% - 20px);
  display: block;
  transform: translate(10px, 10px);
}
```

```css hidden
#log {
  height: 330px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

Als nächstes verwenden wir [`computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap), um das `StylePropertyMapReadOnly`-Objekt für den Demo-Box zu erhalten, und iterieren durch jede der hinzugefügten Eigenschaften, wobei deren Konstruktorname und Wert protokolliert werden.

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

```js
const styleMap = document.querySelector("#demoBox").computedStyleMap();
const properties = [
  "opacity",
  "display",
  "width",
  "transform",
  "--my-custom-property",
];

for (const property of properties) {
  const value = styleMap.get(property);
  log(property);
  log(`  type: ${value.constructor.name}`);
  log(`  value: ${value}\n`);
}
```

#### Ergebnis

{{EmbedLiveSample("Getting different value types", 120, 400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`getAll()`](/de/docs/Web/API/StylePropertyMapReadOnly/getAll)
- [`has()`](/de/docs/Web/API/StylePropertyMapReadOnly/has)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
- [Learning Houdini: the CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
