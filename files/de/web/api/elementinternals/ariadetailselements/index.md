---
title: "ElementInternals: ariaDetailsElements-Eigenschaft"
short-title: ariaDetailsElements
slug: Web/API/ElementInternals/ariaDetailsElements
l10n:
  sourceCommit: 6bed868c7b75c4c3ca3721fa8ed6c6ad2f41262b
---

{{APIRef("DOM")}}

Die **`ariaDetailsElements`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces ist ein Array, das das Element (oder die Elemente) enthält, die zugängliche Details für das Element bereitstellen, auf das es angewendet wird. Die zugänglichen Details sind ähnlich der zugänglichen Beschreibung (siehe [`ariaDescribedByElements`](/de/docs/Web/API/ElementInternals/ariaDescribedByElements)), bieten jedoch ausführlichere Informationen.

Das Thema [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) enthält zusätzliche Informationen darüber, wie das Attribut und die Eigenschaft verwendet werden sollten.

## Wert

Ein Array von Unterklassen von [`HTMLElement`](/de/docs/Web/API/HTMLElement).
Der Innertext dieser Elemente kann mit Leerzeichen verbunden werden, um die zugänglichen Details zu erhalten.

Beim Lesen ist das zurückgegebene Array statisch und schreibgeschützt. Beim Schreiben wird das zugewiesene Array kopiert: nachfolgende Änderungen am Array beeinflussen den Wert der Eigenschaft nicht.

## Beschreibung

Die Eigenschaft ist eine flexible Alternative zur Verwendung des [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)-Attributs, um die zugänglichen Details zu setzen. Im Gegensatz zu `aria-details` müssen die dieser Eigenschaft zugewiesenen Elemente kein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut haben.

Die Eigenschaft spiegelt das [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)-Attribut des Elements wider, wenn es definiert ist, jedoch nur für aufgelistete `id`-Werte, die gültige, im Scoping befindliche Elemente sind. Wenn die Eigenschaft festgelegt wird, wird das entsprechende Attribut gelöscht. Weitere Informationen zu reflektierten Elementreferenzen und zur Reichweite finden Sie unter [Reflected element references](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Reflected attributes_-Leitfaden.

## Beispiele

Die Beispiele in den folgenden Dokumenten sind relevant:

- [`Element.ariaDetailsElements`](/de/docs/Web/API/Element/ariaDetailsElements) ist das DOM-Äquivalent dieser Eigenschaft.
  Es wird auf die gleiche Weise verwendet, jedoch innerhalb des DOMs anstelle eines Shadow DOMs und/oder eines benutzerdefinierten Elements.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)-Attribut
- [`Element.ariaDetailsElements`](/de/docs/Web/API/Element/ariaDetailsElements)
- [Reflected element references](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Attribute reflection_-Leitfaden.
