---
title: "ElementInternals: ariaFlowToElements-Eigenschaft"
short-title: ariaFlowToElements
slug: Web/API/ElementInternals/ariaFlowToElements
l10n:
  sourceCommit: 6bed868c7b75c4c3ca3721fa8ed6c6ad2f41262b
---

{{APIRef("DOM")}}

Die **`ariaFlowToElements`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle ist ein Array, das das Element (oder die Elemente) enthält, das eine alternative Lese-Reihenfolge des Inhalts bereitstellt und die allgemeine Standard-Lese-Reihenfolge nach dem Ermessen des Benutzers übersteuert.
Wenn nur ein Element angegeben wird, ist dies das nächste Element in der Lese-Reihenfolge.
Wenn mehrere Elemente angegeben werden, stellt jedes Element einen möglichen Pfad dar, der dem Benutzer zur Auswahl angeboten werden sollte.

Das Thema [`aria-flowto`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto) enthält zusätzliche Informationen darüber, wie das Attribut und die Eigenschaft verwendet werden sollten.

## Wert

Ein Array von Unterklassen von [`HTMLElement`](/de/docs/Web/API/HTMLElement).

Beim Lesen ist das zurückgegebene Array statisch und schreibgeschützt.
Beim Schreiben wird das zugewiesene Array kopiert: nachfolgende Änderungen am Array beeinflussen den Wert der Eigenschaft nicht.

## Beschreibung

Die Eigenschaft ist eine flexible Alternative zur Verwendung des [`aria-flowto`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto)-Attributs, um eine alternative Lese-Reihenfolge festzulegen.
Im Gegensatz zu `aria-flowto` müssen die Elemente, die dieser Eigenschaft zugewiesen sind, kein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut haben.

Die Eigenschaft spiegelt das [`aria-flowto`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto)-Attribut des Elements wider, wenn es definiert ist, jedoch nur für die aufgelisteten Referenz-`id`-Werte, die mit gültigen In-Scope-Elementen übereinstimmen.
Wenn die Eigenschaft gesetzt ist, wird das entsprechende Attribut gelöscht.
Weitere Informationen zu reflektierten Elementreferenzen und zum Umfang finden Sie unter [Reflected element references](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Leitfaden für reflektierte Attribute_.

## Beispiele

Die Beispiele in den folgenden Dokumenten sind relevant:

- [`Element.ariaFlowToElements`](/de/docs/Web/API/Element/ariaFlowToElements) ist das DOM-Äquivalent dieser Eigenschaft.
  Es wird auf die gleiche Weise verwendet, jedoch innerhalb des DOM statt eines Shadow DOM und/oder benutzerdefinierten Elements.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aria-flowto`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto)-Attribut
- [`Element.ariaFlowToElements`](/de/docs/Web/API/Element/ariaFlowToElements)
- [Reflected element references](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Leitfaden für Attributreflexion_.
