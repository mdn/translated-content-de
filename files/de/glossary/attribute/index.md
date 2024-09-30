---
title: Attribut
slug: Glossary/Attribute
l10n:
  sourceCommit: 26635ef6b1a40e538501bd81fdcf98725e14e6ea
---

{{GlossarySidebar}}

Ein **Attribut** erweitert ein [HTML](/de/docs/Glossary/HTML)- oder [XML](/de/docs/Glossary/XML)-[Element](/de/docs/Glossary/element), indem es dessen Verhalten verändert oder Metadaten bereitstellt.

Ein Attribut hat immer die Form `name="value"` (die Bezeichnung des Attributs gefolgt von seinem zugehörigen Wert). Sie können Attribute ohne Gleichheitszeichen oder Wert sehen. Dies ist eine Kurzform zur Bereitstellung des leeren Strings in HTML. In XML ist dies jedoch nicht zulässig: XML erfordert, dass alle Attribute einen expliziten Wert haben.

Eine Anzahl von HTML-Attributen sind [boolesche Attribute](/de/docs/Glossary/Boolean/HTML). Der Wert dieser Attribute wird nur durch die Anwesenheit oder Abwesenheit des Attributs gesteuert. Weitere Informationen finden Sie unter [boolesche Attribute](/de/docs/Glossary/Boolean/HTML).

## Spiegelung eines Attributs

Attribute können in eine bestimmte Eigenschaft der spezifischen Schnittstelle _reflektiert_ werden. Das bedeutet, dass der Wert des Attributs durch den Zugriff auf die Eigenschaft gelesen und durch Zuweisung eines anderen Wertes zur Eigenschaft geändert werden kann.

Zum Beispiel wird das `placeholder` unten in [`HTMLInputElement.placeholder`](/de/docs/Web/API/HTMLInputElement/placeholder) reflektiert.

Betrachten Sie das folgende HTML:

```html
<input placeholder="Original placeholder" />
```

Wir können die Spiegelung zwischen [`HTMLInputElement.placeholder`](/de/docs/Web/API/HTMLInputElement/placeholder) und dem Attribut überprüfen, indem wir Folgendes verwenden:

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
- Informationen über die [globalen Attribute](/de/docs/Web/HTML/Global_attributes) in HTML
- XML StartTag Attribut Empfehlung in der [W3C XML Empfehlung](https://www.w3.org/TR/xml#sec-starttags)
- Verwandte Glossarbegriffe:
  - [Element](/de/docs/Glossary/Element)
  - [Tag](/de/docs/Glossary/Tag)
  - [HTML](/de/docs/Glossary/HTML)
  - [XML](/de/docs/Glossary/XML)
  - [Boolesche Attribute](/de/docs/Glossary/Boolean/HTML)
  - [Enumerierte Attribute](/de/docs/Glossary/Enumerated)
