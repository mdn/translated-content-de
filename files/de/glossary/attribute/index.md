---
title: Attribut
slug: Glossary/Attribute
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein **Attribut** erweitert ein {{Glossary("HTML", "HTML")}}- oder {{Glossary("XML", "XML")}}-{{Glossary("element", "Element")}}, indem es sein Verhalten ändert oder Metadaten bereitstellt.

Ein Attribut hat immer die Form `name="value"` (der Bezeichner des Attributs gefolgt von seinem zugehörigen Wert). Sie können Attribute ohne ein Gleichheitszeichen oder einen Wert sehen. Das ist eine Kurzform, um in HTML den leeren String bereitzustellen. Allerdings ist dies in XML nicht gültig: XML erfordert, dass alle Attribute einen expliziten Wert haben.

Einige HTML-Attribute sind {{Glossary("Boolean/HTML", "boolesche Attribute")}}. Diese Werte der Attribute werden nur durch das Vorhandensein oder Fehlen des Attributs gesteuert. Weitere Informationen finden Sie unter {{Glossary("Boolean/HTML", "boolesche Attribute")}}.

## Reflexion eines Attributs

Attribute können in eine bestimmte Eigenschaft der speziellen Schnittstelle _reflektiert_ werden.

Das bedeutet, dass der Wert des Attributs direkt in JavaScript über eine Eigenschaft auf der entsprechenden Schnittstelle gelesen oder geschrieben werden kann und umgekehrt. Die reflektierten Eigenschaften bieten einen natürlicheren Programmieransatz als das Abrufen und Festlegen von Attributen mit den Methoden [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) und [`setAttribute()`](/de/docs/Web/API/Element/setAttribute) der [`Element`](/de/docs/Web/API/Element)-Schnittstelle.

Weitere Informationen finden Sie unter [Attributreflexion](/de/docs/Web/API/Document_Object_Model/Reflected_attributes).

## Siehe auch

- [HTML-Attributreferenz](/de/docs/Web/HTML/Reference/Attributes)
- [Attributreflexion](/de/docs/Web/API/Document_Object_Model/Reflected_attributes)
- Informationen über HTMLs [globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
- XML StartTag Attributempfehlung in der [W3C XML Empfehlung](https://www.w3.org/TR/xml/#sec-starttags)
- Verwandte Glossarbegriffe:
  - {{Glossary("Element", "Element")}}
  - {{Glossary("Tag", "Tag")}}
  - {{Glossary("HTML", "HTML")}}
  - {{Glossary("XML", "XML")}}
  - {{Glossary("Boolean/HTML", "Boolesche Attribute")}}
  - {{Glossary("Enumerated", "Enumerierte Attribute")}}
