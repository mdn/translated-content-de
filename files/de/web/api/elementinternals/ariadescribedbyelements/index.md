---
title: "ElementInternals: ariaDescribedByElements-Eigenschaft"
short-title: ariaDescribedByElements
slug: Web/API/ElementInternals/ariaDescribedByElements
l10n:
  sourceCommit: 85d5b8d224843c37974318ff04fbcc1ab69ef95d
---

{{APIRef("DOM")}}

Die **`ariaDescribedByElements`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle ist ein Array, das das Element (oder die Elemente) enthält, die eine zugängliche Beschreibung für das Element bereitstellen, auf das sie angewendet wird. Die zugängliche Beschreibung ist ähnlich dem zugänglichen Label (siehe [`ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements)), bietet jedoch ausführlichere Informationen.

Das Thema [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) enthält zusätzliche Informationen darüber, wie das Attribut und die Eigenschaft verwendet werden sollten.

## Wert

Ein Array von Unterklassen von [`HTMLElement`](/de/docs/Web/API/HTMLElement). Der innere Text dieser Elemente kann mit Leerzeichen verbunden werden, um die zugängliche Beschreibung zu erhalten.

Beim Lesen ist das zurückgegebene Array statisch und schreibgeschützt. Beim Schreiben wird das zugewiesene Array kopiert: Nachfolgende Änderungen am Array beeinflussen den Wert der Eigenschaft nicht.

## Beschreibung

Die Eigenschaft ist eine flexible Alternative zur Verwendung des [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attributs, um die zugängliche Beschreibung festzulegen. Im Gegensatz zu `aria-describedby` müssen die zugewiesenen Elemente keine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Eigenschaft haben.

Die Eigenschaft spiegelt das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attribut des Elements wider, wenn es definiert ist, jedoch nur für aufgelistete Referenz-`id`-Werte, die mit gültigen Elementen im Gültigkeitsbereich übereinstimmen. Wenn die Eigenschaft gesetzt ist, wird das entsprechende Attribut gelöscht. Weitere Informationen über gespiegelte Elementreferenzen und den Gültigkeitsbereich finden Sie unter [Reflectierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Reflected attributes_-Leitfaden.

## Beispiele

Die Beispiele in den folgenden Dokumenten sind relevant:

- [`Element.ariaDescribedByElements`](/de/docs/Web/API/Element/ariaDescribedByElements) ist das DOM-Äquivalent dieser Eigenschaft. Es wird auf die gleiche Weise verwendet, jedoch innerhalb des DOMs statt eines Shadow-DOMs und/oder benutzerdefinierter Elemente.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attribut
- [`Element.ariaDescribedByElements`](/de/docs/Web/API/Element/ariaDescribedByElements)
- [Reflectierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Attributreflexion_-Leitfaden
