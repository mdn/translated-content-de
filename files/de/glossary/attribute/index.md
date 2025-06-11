---
title: Attribut
slug: Glossary/Attribute
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{GlossarySidebar}}

Ein **Attribut** erweitert ein {{Glossary("HTML", "HTML")}}- oder {{Glossary("XML", "XML")}}-{{Glossary("Element", "Element")}}, indem es sein Verhalten ändert oder Metadaten bereitstellt.

Ein Attribut hat immer die Form `name="value"` (die Kennung des Attributs gefolgt von seinem zugehörigen Wert). Es kann vorkommen, dass Attribute ohne Gleichheitszeichen oder Wert angegeben werden. Dies ist in HTML eine Kurzform, um den leeren String bereitzustellen. In XML ist dies jedoch nicht gültig: XML erfordert, dass alle Attribute einen expliziten Wert haben.

Eine Reihe von HTML-Attributen sind {{Glossary("Boolean/HTML", "boolesche Attribute")}}. Die Werte dieser Attribute werden nur durch das Vorhandensein oder Fehlen des Attributs bestimmt. Weitere Informationen finden Sie unter {{Glossary("Boolean/HTML", "boolesche Attribute")}}.

## Widerspiegelung eines Attributs

Attribute können in eine bestimmte Eigenschaft der spezifischen Schnittstelle _widerspiegelt_ werden.

Dies bedeutet, dass der Wert des Attributs direkt in JavaScript über eine Eigenschaft auf der entsprechenden Schnittstelle gelesen oder geschrieben werden kann und umgekehrt. Die widerspiegelten Eigenschaften bieten einen natürlicheren Programmieransatz als das Abrufen und Setzen von Attributen mit den Methoden [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) und [`setAttribute()`](/de/docs/Web/API/Element/setAttribute) der [`Element`](/de/docs/Web/API/Element)-Schnittstelle.

Weitere Informationen finden Sie unter [Attributwiderspiegelung](/de/docs/Web/API/Document_Object_Model/Reflected_attributes).

## Siehe auch

- [HTML-Attributreferenz](/de/docs/Web/HTML/Reference/Attributes)
- [Attributwiderspiegelung](/de/docs/Web/API/Document_Object_Model/Reflected_attributes)
- Informationen über HTMLs [globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
- XML StartTag Attributempfehlung in der [W3C XML Empfehlung](https://www.w3.org/TR/xml/#sec-starttags)
- Verwandte Glossarbegriffe:
  - {{Glossary("Element", "Element")}}
  - {{Glossary("Tag", "Tag")}}
  - {{Glossary("HTML", "HTML")}}
  - {{Glossary("XML", "XML")}}
  - {{Glossary("Boolean/HTML", "Boolesche Attribute")}}
  - {{Glossary("Enumerated", "Enumerierte Attribute")}}
