---
title: "ElementInternals: ariaOwnsElements-Eigenschaft"
short-title: ariaOwnsElements
slug: Web/API/ElementInternals/ariaOwnsElements
l10n:
  sourceCommit: 6bed868c7b75c4c3ca3721fa8ed6c6ad2f41262b
---

{{APIRef("DOM")}}

Die **`ariaOwnsElements`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle ist ein Array, das das Element (oder die Elemente) enthält, das eine visuelle, funktionale oder kontextuelle Beziehung zwischen einem übergeordneten Element, auf das es angewendet wird, und seinen Kindelementen definiert. Dies wird verwendet, wenn die Shadow-DOM-Hierarchie nicht zur Darstellung der Beziehung verwendet werden kann und sie Assistenztechnologien ansonsten nicht zur Verfügung stehen würde.

Das Thema [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) enthält weitere Informationen darüber, wie das Attribut und die Eigenschaft verwendet werden sollten.

## Wert

Ein Array von Unterklassen von [`HTMLElement`](/de/docs/Web/API/HTMLElement).

Beim Lesen ist das zurückgegebene Array statisch und schreibgeschützt. Beim Schreiben wird das zugewiesene Array kopiert: nachfolgende Änderungen am Array beeinflussen den Wert der Eigenschaft nicht.

## Beschreibung

Die Eigenschaft ist eine flexible Alternative zur Verwendung des [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)-Attributs, um den Besitz eines Elements anzuzeigen. Im Gegensatz zu `aria-owns` müssen die dieser Eigenschaft zugewiesenen Elemente kein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut haben.

Die Eigenschaft spiegelt das [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)-Attribut des Elements wider, wenn es definiert ist, jedoch nur für aufgelistete Referenz-`id`-Werte, die mit gültigen Elementen im Geltungsbereich übereinstimmen. Wenn die Eigenschaft gesetzt wird, wird das entsprechende Attribut gelöscht. Weitere Informationen zu reflektierten Elementreferenzen und Geltungsbereich finden Sie unter [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Reflected attributes_-Leitfaden.

## Beispiele

Die Beispiele in den folgenden Dokumenten sind relevant:

- [`Element.ariaOwnsElements`](/de/docs/Web/API/Element/ariaOwnsElements) ist das DOM-Äquivalent dieser Eigenschaft.
  Es wird auf die gleiche Weise verwendet, jedoch innerhalb des DOM anstatt eines Shadow-DOM und/oder benutzerdefinierten Elements.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)-Attribut
- [`Element.ariaOwnsElements`](/de/docs/Web/API/Element/ariaOwnsElements)
- [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Attribute reflection_-Leitfaden.
