---
title: "Element: attributes-Eigenschaft"
short-title: attributes
slug: Web/API/Element/attributes
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{ APIRef("DOM") }}

Die schreibgeschützte Eigenschaft **`attributes`** der Schnittstelle [`Element`](/de/docs/Web/API/Element) gibt eine Live-Sammlung aller für den angegebenen Knoten registrierten Attributknoten zurück. Sie ist eine [`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap) und kein `Array`. Daher verfügt sie nicht über die Methoden von {{jsxref("Array")}}, und die Indizes der [`Attr`](/de/docs/Web/API/Attr)-Knoten können sich je nach Browser unterscheiden. Genauer gesagt enthält `attributes` Schlüssel-Wert-Paare aus Zeichenfolgen, die Informationen über die jeweiligen Attribute darstellen.

## Wert

Ein [`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap)-Objekt.

## Beispiele

### Grundlegende Beispiele

```js
// Get the first <p> element in the document
const paragraph = document.querySelector("p");
const attributes = paragraph.attributes;
```

### Attribute eines Elements durchlaufen

Mit [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) können Sie die Attribute eines Elements durchlaufen.
Das folgende Beispiel durchläuft die Attributknoten des Elements mit der id „paragraph“ im Dokument und gibt den Wert jedes Attributs aus.

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

- [`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap), die Schnittstelle des zurückgegebenen Objekts
- Hinweise zur browserübergreifenden Kompatibilität: auf [quirksmode](https://quirksmode.org/dom/core/#attributes)
