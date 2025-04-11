---
title: Attribut
slug: Glossary/Attribute
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{GlossarySidebar}}

Ein **Attribut** erweitert ein {{Glossary("HTML", "HTML")}}- oder {{Glossary("XML", "XML")}}-{{Glossary("element", "Element")}}, verändert dessen Verhalten oder liefert Metadaten.

Ein Attribut hat immer die Form `name="value"` (die Kennung des Attributs gefolgt von seinem zugehörigen Wert). Sie können auch Attribute ohne Gleichheitszeichen oder Wert sehen. Dies ist eine Kurzform, um in HTML einen leeren String bereitzustellen. Im XML ist dies jedoch nicht gültig: XML erfordert, dass alle Attribute einen expliziten Wert haben.

Eine Reihe von HTML-Attributen sind {{Glossary("Boolean/HTML", "boolesche Attribute")}}. Die Werte dieser Attribute werden nur durch das Vorhandensein oder Fehlen des Attributs gesteuert. Weitere Informationen finden Sie unter {{Glossary("Boolean/HTML", "boolesche Attribute")}}.

## Spiegelung eines Attributs

Attribute können in eine bestimmte Eigenschaft des spezifischen Interfaces _gespiegelt_ werden. Dies bedeutet, dass der Wert des Attributs gelesen werden kann, indem auf die Eigenschaft zugegriffen wird, und dass er geändert werden kann, indem die Eigenschaft auf einen anderen Wert gesetzt wird.

Zum Beispiel wird das `placeholder`-Attribut in [`HTMLInputElement.placeholder`](/de/docs/Web/API/HTMLInputElement/placeholder) gespiegelt.

Angenommen, folgendes HTML:

```html
<input placeholder="Original placeholder" />
```

Wir können die Spiegelung zwischen [`HTMLInputElement.placeholder`](/de/docs/Web/API/HTMLInputElement/placeholder) und dem Attribut überprüfen, indem wir folgendes verwenden:

```js
const input = document.querySelector("input");
const attr = input.getAttributeNode("placeholder");
console.log(attr.value);
console.log(input.placeholder); // Prints the same value as `attr.value`

// Changing placeholder value will also change the value of the reflected attribute.
input.placeholder = "Modified placeholder";
console.log(attr.value); // Prints `Modified placeholder`
```

## Siehe auch

- [HTML-Attributverzeichnis](/de/docs/Web/HTML/Reference/Attributes)
- Informationen über die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes) von HTML
- XML-StartTag-Attribut-Empfehlung in der [W3C XML Recommendation](https://www.w3.org/TR/xml#sec-starttags)
- Verwandte Glossarbegriffe:
  - {{Glossary("Element", "Element")}}
  - {{Glossary("Tag", "Tag")}}
  - {{Glossary("HTML", "HTML")}}
  - {{Glossary("XML", "XML")}}
  - {{Glossary("Boolean/HTML", "Boolesche Attribute")}}
  - {{Glossary("Enumerated", "Aufgezählte Attribute")}}
