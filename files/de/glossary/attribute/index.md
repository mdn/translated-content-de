---
title: Attribut
slug: Glossary/Attribute
l10n:
  sourceCommit: 26635ef6b1a40e538501bd81fdcf98725e14e6ea
---

{{GlossarySidebar}}

Ein **Attribut** erweitert ein {{Glossary("HTML")}}- oder {{Glossary("XML")}}-{{Glossary("element")}}, indem es dessen Verhalten ändert oder Metadaten bereitstellt.

Ein Attribut hat immer die Form `name="value"` (die Kennung des Attributs gefolgt von seinem zugehörigen Wert). Sie können Attribute ohne ein Gleichheitszeichen oder einen Wert sehen. Dies ist eine Kurzform, um in HTML den leeren String bereitzustellen. In XML ist dies jedoch nicht gültig: XML erfordert, dass alle Attribute einen expliziten Wert haben.

Eine Reihe von HTML-Attributen sind {{Glossary("Boolean/HTML", "boolesche Attribute")}}. Die Werte dieser Attribute werden nur durch die Anwesenheit oder das Fehlen des Attributs kontrolliert. Weitere Informationen finden Sie unter {{Glossary("Boolean/HTML", "boolesche Attribute")}}.

## Reflexion eines Attributs

Attribute können in eine bestimmte Eigenschaft der speziellen Schnittstelle _reflektiert_ werden. Das bedeutet, dass der Wert des Attributs durch Zugriff auf die Eigenschaft gelesen werden kann und durch Setzen der Eigenschaft auf einen anderen Wert modifiziert werden kann.

Zum Beispiel wird das `placeholder` unten in {{domxref("HTMLInputElement.placeholder")}} reflektiert.

Betrachten Sie das folgende HTML:

```html
<input placeholder="Original placeholder" />
```

Wir können die Reflexion zwischen {{domxref("HTMLInputElement.placeholder")}} und dem Attribut überprüfen mit:

```js
const input = document.querySelector("input");
const attr = input.getAttributeNode("placeholder");
console.log(attr.value);
console.log(input.placeholder); // Gibt denselben Wert wie `attr.value` aus

// Das Ändern des Placeholder-Wertes wird auch den Wert des reflektierten Attributs ändern.
input.placeholder = "Modified placeholder";
console.log(attr.value); // Gibt `Modified placeholder` aus
```

## Siehe auch

- [HTML-Attributreferenz](/de/docs/Web/HTML/Attributes)
- Informationen über die [globalen Attribute](/de/docs/Web/HTML/Global_attributes) von HTML
- XML StartTag Attributempfehlung in der [W3C XML Recommendation](https://www.w3.org/TR/xml#sec-starttags)
- Verwandte Glossarbegriffe:
  - {{Glossary("Element")}}
  - {{Glossary("Tag")}}
  - {{Glossary("HTML")}}
  - {{Glossary("XML")}}
  - {{Glossary("Boolean/HTML", "Boolesche Attribute")}}
  - {{Glossary("Enumerated", "Enumerierte Attribute")}}
