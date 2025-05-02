---
title: "ElementInternals: ariaOwnsElements-Eigenschaft"
short-title: ariaOwnsElements
slug: Web/API/ElementInternals/ariaOwnsElements
l10n:
  sourceCommit: 85d5b8d224843c37974318ff04fbcc1ab69ef95d
---

{{APIRef("DOM")}}

Die **`ariaOwnsElements`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interface ist ein Array, das das oder die Elemente enthält, die eine visuelle, funktionale oder kontextuelle Beziehung zwischen einem übergeordneten Element, auf das sie angewendet wird, und seinen Kindelementen definieren.
Dies wird verwendet, wenn die Shadow-DOM-Hierarchie nicht zur Darstellung der Beziehung verwendet werden kann und sie sonst nicht für unterstützende Technologien verfügbar wäre.

Das Thema [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) enthält zusätzliche Informationen darüber, wie das Attribut und die Eigenschaft verwendet werden sollten.

## Wert

Ein Array von Unterklassen von [`HTMLElement`](/de/docs/Web/API/HTMLElement).

Beim Lesen ist das zurückgegebene Array statisch und schreibgeschützt.
Beim Schreiben wird das zugewiesene Array kopiert: Nachfolgende Änderungen am Array wirken sich nicht auf den Wert der Eigenschaft aus.

## Beschreibung

Die Eigenschaft ist eine flexible Alternative zur Verwendung des [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)-Attributs, um die Zugehörigkeit eines Elements anzuzeigen.
Im Gegensatz zu `aria-owns` müssen die Elemente, die dieser Eigenschaft zugewiesen werden, kein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut haben.

Die Eigenschaft spiegelt das [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)-Attribut des Elements wider, wenn es definiert ist, jedoch nur für aufgelistete Referenz-`id`-Werte, die mit gültigen Elementen im Geltungsbereich übereinstimmen.
Wenn die Eigenschaft gesetzt wird, wird das entsprechende Attribut gelöscht.
Weitere Informationen zu reflektierten Elementreferenzen und deren Geltungsbereich finden Sie unter [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Reflected attributes_-Leitfaden.

## Beispiele

Die Beispiele in den folgenden Dokumenten sind relevant:

- [`Element.ariaOwnsElements`](/de/docs/Web/API/Element/ariaOwnsElements) ist das DOM-Äquivalent dieser Eigenschaft.
  Es wird auf die gleiche Weise verwendet, jedoch im DOM anstelle eines Shadow-DOM und/oder benutzerdefinierten Elements.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) Attribut
- [`Element.ariaOwnsElements`](/de/docs/Web/API/Element/ariaOwnsElements)
- [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Attribute reflection_-Leitfaden.
