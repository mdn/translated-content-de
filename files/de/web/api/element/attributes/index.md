---
title: "Element: attributes Eigenschaft"
short-title: attributes
slug: Web/API/Element/attributes
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{ APIRef("DOM") }}

Die **`Element.attributes`**-Eigenschaft gibt eine dynamische Sammlung aller Attributknoten zurück, die bei dem angegebenen Knoten registriert sind. Sie ist eine {{domxref("NamedNodeMap")}}, kein `Array`, daher hat sie keine {{jsxref("Array")}}-Methoden und die Indizes der {{domxref("Attr")}}-Knoten können sich zwischen Browsern unterscheiden. Genauer gesagt ist `attributes` ein Schlüssel/Wert-Paar von Zeichenfolgen, das Informationen zu diesem Attribut darstellt.

## Wert

Ein {{domxref("NamedNodeMap")}}-Objekt.

## Beispiele

### Grundlegende Beispiele

```js
// Das erste <p>-Element im Dokument abrufen
const paragraph = document.querySelector("p");
const attributes = paragraph.attributes;
```

### Aufzählung der Attribute eines Elements

Sie können die Attribute eines Elements mit [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) aufzählen. Das folgende Beispiel durchläuft die Attributknoten für das Element mit der ID "paragraph" im Dokument und gibt den Wert jedes Attributs aus.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <title>Attributes-Beispiel</title>
    <script>
      function listAttributes() {
        const paragraph = document.getElementById("paragraph");
        const result = document.getElementById("result");

        // Zunächst überprüfen wir, ob das Absatz-Element einige Attribute hat
        if (paragraph.hasAttributes()) {
          let output = "Attribute des ersten Absatzes:\n";
          for (const attr of paragraph.attributes) {
            output += `${attr.name} -> ${attr.value}\n`;
          }
          result.textContent = output;
        } else {
          result.textContent = "Keine Attribute zum Anzeigen";
        }
      }
    </script>
  </head>

  <body>
    <p id="paragraph" style="color: green;">Beispiel Absatz</p>
    <form action="">
      <p>
        <input
          type="button"
          value="Ersten Attributnamen und -wert anzeigen"
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

- {{domxref("NamedNodeMap")}}, die Schnittstelle des zurückgegebenen Objekts
- Überlegungen zur plattformübergreifenden Kompatibilität: auf [quirksmode](https://quirksmode.org/dom/core/#attributes)
