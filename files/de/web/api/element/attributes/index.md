---
title: "Element: attributes-Eigenschaft"
short-title: attributes
slug: Web/API/Element/attributes
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{ APIRef("DOM") }}

Die **`Element.attributes`**-Eigenschaft gibt eine Live-Sammlung
aller Attributknoten zurück, die dem angegebenen Knoten zugeordnet sind. Es handelt sich um ein
[`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap), kein `Array`, daher hat es keine {{jsxref("Array")}}
Methoden und die Indizes der [`Attr`](/de/docs/Web/API/Attr) Knoten können je nach Browser unterschiedlich sein. Genauer gesagt, `attributes` ist ein Schlüssel/Wert-Paar von Zeichenfolgen, das Informationen zu diesem Attribut darstellt.

## Wert

Ein [`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap) Objekt.

## Beispiele

### Grundlegende Beispiele

```js
// Get the first <p> element in the document
const paragraph = document.querySelector("p");
const attributes = paragraph.attributes;
```

### Aufzählen von Attributen eines Elements

Sie können die Attribute eines Elements mit [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) aufzählen.
Im folgenden Beispiel werden die Attributknoten für das Element im Dokument
mit der ID "paragraph" durchlaufen und der Wert jedes Attributs wird ausgegeben.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <title>Attributes example</title>
    <script>
      function listAttributes() {
        const paragraph = document.getElementById("paragraph");
        const result = document.getElementById("result");

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
      }
    </script>
  </head>

  <body>
    <p id="paragraph" style="color: green;">Sample Paragraph</p>
    <form action="">
      <p>
        <input
          type="button"
          value="Show first attribute name and value"
          onclick="listAttributes();" />
      </p>
    </form>
    <pre id="result"></pre>
  </body>
</html>
```

{{EmbedLiveSample('enumerating_elements_attributes', 100, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap), die Schnittstelle des zurückgegebenen Objekts
- Überlegungen zur Browser-Kompatibilität: auf [quirksmode](https://quirksmode.org/dom/core/#attributes)
