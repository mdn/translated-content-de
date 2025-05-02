---
title: Attribut
slug: Glossary/Attribute
l10n:
  sourceCommit: 85d5b8d224843c37974318ff04fbcc1ab69ef95d
---

{{GlossarySidebar}}

Ein **Attribut** erweitert ein {{Glossary("HTML", "HTML")}}- oder {{Glossary("XML", "XML")}}-{{Glossary("element", "Element")}}, indem es dessen Verhalten ändert oder Metadaten bereitstellt.

Ein Attribut hat immer die Form `name="value"` (der Bezeichner des Attributs gefolgt von seinem zugehörigen Wert). Sie könnten Attribute ohne Gleichheitszeichen oder Wert sehen. Dies ist eine Abkürzung, um den leeren String in HTML bereitzustellen. In XML ist dies jedoch nicht gültig: XML erfordert, dass alle Attribute einen expliziten Wert haben.

Eine Reihe von HTML-Attributen sind {{Glossary("Boolean/HTML", "boolesche Attribute")}}. Diese Attributwerte werden nur durch das Vorhandensein oder Fehlen des Attributs gesteuert. Weitere Informationen finden Sie unter {{Glossary("Boolean/HTML", "boolesche Attribute")}}.

## Reflektion eines Attributs

Attribute können in eine bestimmte Eigenschaft der spezifischen Schnittstelle _reflektiert_ werden.

Das bedeutet, dass der Wert des Attributs direkt in JavaScript über eine Eigenschaft der entsprechenden Schnittstelle gelesen oder geschrieben werden kann, und umgekehrt. Die reflektierten Eigenschaften bieten einen natürlicheren Programmieransatz als das Abrufen und Setzen von Attributen mit den Methoden [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) und [`setAttribute()`](/de/docs/Web/API/Element/setAttribute) der [`Element`](/de/docs/Web/API/Element)-Schnittstelle.

Weitere Informationen finden Sie unter [Attribut-Reflektion](/de/docs/Web/API/Document_Object_Model/Reflected_attributes).

## Siehe auch

- [HTML-Attributreferenz](/de/docs/Web/HTML/Reference/Attributes)
- [Attribut-Reflektion](/de/docs/Web/API/Document_Object_Model/Reflected_attributes)
- Informationen zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) von HTML
- XML StartTag Attribut-Empfehlung in der [W3C XML Empfehlung](https://www.w3.org/TR/xml#sec-starttags)
- Verwandte Glossarbegriffe:
  - {{Glossary("Element", "Element")}}
  - {{Glossary("Tag", "Tag")}}
  - {{Glossary("HTML", "HTML")}}
  - {{Glossary("XML", "XML")}}
  - {{Glossary("Boolean/HTML", "Boolesche Attribute")}}
  - {{Glossary("Enumerated", "Enumerated attributes")}}
