---
title: "Element: attributes-Eigenschaft"
short-title: attributes
slug: Web/API/Element/attributes
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{ APIRef("DOM") }}

Die **`Element.attributes`**-Eigenschaft gibt eine dynamische Sammlung aller Attributknoten zurück, die dem angegebenen Knoten zugeordnet sind. Dabei handelt es sich um ein [`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap) und nicht um ein `Array`, daher besitzt es keine {{jsxref("Array")}}-Methoden und die Indizes der [`Attr`](/de/docs/Web/API/Attr)-Knoten können zwischen Browsern variieren. Genauer gesagt ist `attributes` ein Schlüssel/Wert-Paar von Zeichenfolgen, das Informationen zu diesem Attribut darstellt.

## Wert

Ein [`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap)-Objekt.

## Beispiele

### Grundlegende Beispiele

```js
// Get the first <p> element in the document
const paragraph = document.querySelector("p");
const attributes = paragraph.attributes;
```

### Aufzählen von Elementattributen

Sie können durch die Attribute eines Elements mit [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) durchlaufen. Das folgende Beispiel geht durch die Attributknoten für das Element im Dokument mit der ID "paragraph" und gibt den Wert jedes Attributs aus.

```html
<p id="paragraph" class="green" contenteditable>Sample Paragraph</p>
<input type="button" value="Show paragraph attribute name and value" />
<pre id="result"></pre>
```

```css
.green {
  color: green;
}
```

```js
const paragraph = document.getElementById("paragraph");
const result = document.getElementById("result");
const btn = document.querySelector("input[type='button']");

btn.addEventListener("click", () => {
  // First, let's verify that the paragraph has some attributes
  if (paragraph.hasAttributes()) {
    let output = "Attributes of first paragraph:\n";
    for (const attr of paragraph.attributes) {
      output += `${attr.name} -> ${attr.value}\n`;
    }
    result.textContent = output;
  } else {
    result.textContent = "No attributes to show";
  }
});
```

{{EmbedLiveSample('enumerating_elements_attributes', 100, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap), das Interface des zurückgegebenen Objekts
- Überlegungen zur plattformübergreifenden Kompatibilität: auf [quirksmode](https://quirksmode.org/dom/core/#attributes)
