---
title: Attribut
slug: Glossary/Attribute
l10n:
  sourceCommit: 26635ef6b1a40e538501bd81fdcf98725e14e6ea
---

{{GlossarySidebar}}

Ein **Attribut** erweitert ein [HTML](/de/docs/Glossary/HTML)- oder [XML](/de/docs/Glossary/XML)-[Element](/de/docs/Glossary/element), indem es dessen Verhalten ändert oder Metadaten bereitstellt.

Ein Attribut hat immer die Form `name="value"` (der Bezeichner des Attributs gefolgt von seinem zugeordneten Wert). Sie könnten Attribute ohne Gleichheitszeichen oder Wert sehen. Das ist eine Kurzform, um den leeren String in HTML bereitzustellen. Dies ist jedoch in XML nicht erlaubt: XML erfordert, dass alle Attribute einen expliziten Wert haben.

Eine Reihe von HTML-Attributen sind [boolesche Attribute](/de/docs/Glossary/Boolean/HTML). Die Werte dieser Attribute werden nur durch das Vorhandensein oder Fehlen des Attributs gesteuert. Siehe [boolesche Attribute](/de/docs/Glossary/Boolean/HTML) für weitere Informationen.

## Reflexion eines Attributs

Attribute können in eine bestimmte Eigenschaft der spezifischen Schnittstelle _reflektiert_ werden. Das bedeutet, dass der Wert des Attributs durch den Zugriff auf die Eigenschaft gelesen und durch Setzen der Eigenschaft auf einen anderen Wert geändert werden kann.

Zum Beispiel wird das `placeholder` unten in [`HTMLInputElement.placeholder`](/de/docs/Web/API/HTMLInputElement/placeholder) reflektiert.

Betrachten Sie das folgende HTML:

```html
<input placeholder="Original placeholder" />
```

Wir können die Reflexion zwischen [`HTMLInputElement.placeholder`](/de/docs/Web/API/HTMLInputElement/placeholder) und dem Attribut überprüfen, indem wir folgendes verwenden:

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

- [HTML-Attributreferenz](/de/docs/Web/HTML/Attributes)
- Informationen über HTMLs [globale Attribute](/de/docs/Web/HTML/Global_attributes)
- XML StartTag Attribut Empfehlung in der [W3C XML Recommendation](https://www.w3.org/TR/xml#sec-starttags)
- Verwandte Glossarbegriffe:
  - [Element](/de/docs/Glossary/Element)
  - [Tag](/de/docs/Glossary/Tag)
  - [HTML](/de/docs/Glossary/HTML)
  - [XML](/de/docs/Glossary/XML)
  - [Boolesche Attribute](/de/docs/Glossary/Boolean/HTML)
  - [Enumerierte Attribute](/de/docs/Glossary/Enumerated)
