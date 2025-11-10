---
title: "ElementInternals: ariaDescribedByElements-Eigenschaft"
short-title: ariaDescribedByElements
slug: Web/API/ElementInternals/ariaDescribedByElements
l10n:
  sourceCommit: 6bed868c7b75c4c3ca3721fa8ed6c6ad2f41262b
---

{{APIRef("DOM")}}

Die **`ariaDescribedByElements`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces ist ein Array, das das Element (oder die Elemente) enthält, die eine zugängliche Beschreibung für das Element bereitstellen, auf das es angewendet wird. Die zugängliche Beschreibung ist ähnlich wie das zugängliche Label (siehe [`ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements)), bietet jedoch ausführlichere Informationen.

Das Thema [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) enthält zusätzliche Informationen darüber, wie das Attribut und die Eigenschaft verwendet werden sollten.

## Wert

Ein Array von Unterklassen von [`HTMLElement`](/de/docs/Web/API/HTMLElement). Der innere Text dieser Elemente kann mit Leerzeichen verbunden werden, um die zugängliche Beschreibung zu erhalten.

Beim Lesen ist das zurückgegebene Array statisch und schreibgeschützt. Beim Schreiben wird das zugewiesene Array kopiert: Nachfolgende Änderungen am Array beeinflussen den Wert der Eigenschaft nicht.

## Beschreibung

Die Eigenschaft ist eine flexible Alternative zur Verwendung des [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attributs, um die zugängliche Beschreibung festzulegen. Im Gegensatz zu `aria-describedby` müssen die Elemente, die dieser Eigenschaft zugeordnet sind, kein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut haben.

Die Eigenschaft spiegelt das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attribut des Elements wider, wenn es definiert ist, jedoch nur für aufgelistete Referenz-`id`-Werte, die mit gültigen Elementen im Gültigkeitsbereich übereinstimmen. Wenn die Eigenschaft gesetzt ist, wird das entsprechende Attribut gelöscht. Weitere Informationen über die Reflektion von Elementreferenzen und den Gültigkeitsbereich finden Sie unter [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Reflektierte Attribute_-Leitfaden.

## Beispiele

Die Beispiele in den folgenden Dokumenten sind relevant:

- [`Element.ariaDescribedByElements`](/de/docs/Web/API/Element/ariaDescribedByElements) ist das DOM-Äquivalent dieser Eigenschaft. Sie wird auf die gleiche Weise verwendet, jedoch innerhalb des DOM statt eines Shadow-DOM und/oder benutzerdefinierten Elements.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attribut
- [`Element.ariaDescribedByElements`](/de/docs/Web/API/Element/ariaDescribedByElements)
- [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Attribut-Reflektion_ Leitfaden
