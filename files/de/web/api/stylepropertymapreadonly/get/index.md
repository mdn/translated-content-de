---
title: "StylePropertyMapReadOnly: Methode get()"
short-title: get()
slug: Web/API/StylePropertyMapReadOnly/get
l10n:
  sourceCommit: edc9ab5479d1253d9edd93bfe90dd1d100605c26
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die Methode **`get()`** der Schnittstelle [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly) gibt für den ersten Wert der angegebenen Eigenschaft ein von [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) abgeleitetes Objekt zurück.

Verwenden Sie [`getAll()`](/de/docs/Web/API/StylePropertyMapReadOnly/getAll), um alle Werte einer CSS-Eigenschaft abzurufen, die mehrere Werte haben kann, etwa {{cssxref("background-image")}} oder {{cssxref("transition")}}.

## Syntax

```js-nolint
get(property)
```

### Parameter

- `property`
  - : Der Name der Eigenschaft.
    Bei Namen benutzerdefinierter Eigenschaften (die mit `--` beginnen) wird zwischen Groß- und Kleinschreibung unterschieden; bei Namen von Standardeigenschaften nicht.

### Rückgabewert

Ein von [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) abgeleitetes Objekt oder {{jsxref("undefined")}}, wenn `property` in der Map keinen Wert hat.

Der konkrete Typ des zurückgegebenen Objekts hängt von der Eigenschaft und ihrem Wert ab.
Beispielsweise kann eine Eigenschaft, der ein Schlüsselwort zugewiesen wurde, ein [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue) zurückgeben, während eine Eigenschaft, der das Ergebnis einer mathematischen Operation zugewiesen wurde, ein [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) zurückgeben kann.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `property` kein gültiger CSS-Eigenschaftsname ist.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie einige Eigenschaften und ihre Werte abrufen.

#### HTML

Zunächst erstellen wir einen Link innerhalb eines Absatzes:

```html
<p>
  <a href="https://example.com">Link</a>
</p>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

Das CSS legt `font-weight` für den Absatz fest und definiert und verwendet eine benutzerdefinierte Eigenschaft für die Farbe des Links:

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

Zunächst rufen wir [`computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap) für das Element auf, um dessen Style-Map zu erhalten: ein `StylePropertyMapReadOnly`-Objekt.
Wir erstellen ein Array der Eigenschaften, die uns interessieren, und verwenden die Methode `get()` von `StylePropertyMapReadOnly`, um nur deren Werte zu protokollieren.

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

### Verschiedene Werttypen abrufen

Dieses Beispiel zeigt, dass `get()` je nach Eigenschaft und ihrem Wert Objekte unterschiedlichen Typs zurückgeben kann.

Zunächst werden mithilfe von CSS mehrere unterschiedliche Eigenschaften auf ein Element angewendet.
Anschließend werden sie mit JavaScript ausgelesen und der Name des Konstruktors sowie der Wert jeder Eigenschaft protokolliert.
Der Code für die Protokollierung selbst ist nicht Teil der Demonstration und wird daher hier ausgeblendet.

#### HTML

Zunächst definieren wir ein {{htmlelement("div")}} mit der id `demoBox`, dem wir Stile hinzufügen.

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

Als Nächstes verwenden wir [`computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap), um das `StylePropertyMapReadOnly`-Objekt für die Demo-Box zu erhalten. Dann durchlaufen wir alle hinzugefügten Eigenschaften und protokollieren jeweils den Namen des Konstruktors und den Wert.

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
- [Houdini kennenlernen: das CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
