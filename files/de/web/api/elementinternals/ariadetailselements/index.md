---
title: "ElementInternals: ariaDetailsElements-Eigenschaft"
short-title: ariaDetailsElements
slug: Web/API/ElementInternals/ariaDetailsElements
l10n:
  sourceCommit: 85d5b8d224843c37974318ff04fbcc1ab69ef95d
---

{{APIRef("DOM")}}

Die **`ariaDetailsElements`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle ist ein Array, das das Element (oder die Elemente) enthält, die detaillierte barrierefreie Informationen für das Element bereitstellen, auf das es angewendet wird. Die barrierefreien Details sind ähnlich wie die barrierefreie Beschreibung (siehe [`ariaDescribedByElements`](/de/docs/Web/API/ElementInternals/ariaDescribedByElements)), bieten jedoch ausführlichere Informationen.

Das Thema [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) enthält zusätzliche Informationen darüber, wie das Attribut und die Eigenschaft verwendet werden sollten.

## Wert

Ein Array von Unterklassen von [`HTMLElement`](/de/docs/Web/API/HTMLElement). Der Textinhalt dieser Elemente kann mit Leerzeichen verbunden werden, um die barrierefreien Details zu erhalten.

Beim Lesen ist das zurückgegebene Array statisch und schreibgeschützt. Beim Schreiben wird das zugewiesene Array kopiert: nachfolgende Änderungen am Array beeinflussen den Wert der Eigenschaft nicht.

## Beschreibung

Die Eigenschaft ist eine flexible Alternative zur Verwendung des [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)-Attributs, um die barrierefreien Detailinformationen festzulegen. Im Gegensatz zu `aria-details` müssen die dieser Eigenschaft zugewiesenen Elemente kein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut haben.

Die Eigenschaft spiegelt das [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)-Attribut des Elements wider, wenn es definiert ist, jedoch nur für aufgeführte Referenz-`id`-Werte, die mit gültigen, im Gültigkeitsbereich befindlichen Elementen übereinstimmen. Wenn die Eigenschaft gesetzt wird, wird das entsprechende Attribut gelöscht. Weitere Informationen zu reflektierten Elementreferenzen und Gültigkeitsbereichen finden Sie unter [Reflected element references](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Reflected attributes_-Leitfaden.

## Beispiele

Die Beispiele in den folgenden Dokumenten sind relevant:

- [`Element.ariaDetailsElements`](/de/docs/Web/API/Element/ariaDetailsElements) ist das DOM-Äquivalent dieser Eigenschaft. Es wird auf die gleiche Weise verwendet, jedoch innerhalb des DOM anstelle eines Shadow DOM und/oder eines benutzerdefinierten Elements.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)-Attribut
- [`Element.ariaDetailsElements`](/de/docs/Web/API/Element/ariaDetailsElements)
- [Reflected element references](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Attribute reflection_-Leitfaden.
