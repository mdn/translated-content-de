---
title: "ElementInternals: ariaFlowToElements Eigenschaft"
short-title: ariaFlowToElements
slug: Web/API/ElementInternals/ariaFlowToElements
l10n:
  sourceCommit: 85d5b8d224843c37974318ff04fbcc1ab69ef95d
---

{{APIRef("DOM")}}

Die **`ariaFlowToElements`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces ist ein Array, das das Element (oder die Elemente) enthält, die eine alternative Lesereihenfolge des Inhalts bieten und somit die allgemeine Standard-Lesereihenfolge nach dem Ermessen des Benutzers überschreiben.
Wenn nur ein Element angegeben ist, ist dies das nächste Element in der Lesereihenfolge.
Wenn mehrere Elemente angegeben sind, stellt jedes Element einen möglichen Pfad dar, der dem Benutzer zur Auswahl angeboten werden soll.

Das Thema [`aria-flowto`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto) enthält zusätzliche Informationen darüber, wie das Attribut und die Eigenschaft verwendet werden sollten.

## Wert

Ein Array von Unterklassen von [`HTMLElement`](/de/docs/Web/API/HTMLElement).

Beim Lesen ist das zurückgegebene Array statisch und schreibgeschützt.
Beim Schreiben wird das zugewiesene Array kopiert: Nachfolgende Änderungen am Array beeinflussen den Wert der Eigenschaft nicht.

## Beschreibung

Die Eigenschaft ist eine flexible Alternative zur Verwendung des [`aria-flowto`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto)-Attributs, um eine alternative Lesereihenfolge festzulegen.
Anders als bei `aria-flowto` müssen die der Eigenschaft zugewiesenen Elemente kein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut haben.

Die Eigenschaft spiegelt das [`aria-flowto`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto)-Attribut des Elements wider, wenn es definiert ist, jedoch nur für aufgeführte Referenz-`id`-Werte, die mit gültigen, im Geltungsbereich befindlichen Elementen übereinstimmen.
Wenn die Eigenschaft gesetzt wird, wird das entsprechende Attribut geleert.
Für weitere Informationen über reflektierte Elementreferenzen und den Geltungsbereich siehe [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Reflektierte Attribute_ Leitfaden.

## Beispiele

Die Beispiele in den folgenden Dokumenten sind relevant:

- [`Element.ariaFlowToElements`](/de/docs/Web/API/Element/ariaFlowToElements) ist das DOM-Äquivalent dieser Eigenschaft.
  Es wird auf die gleiche Weise verwendet, jedoch innerhalb des DOM anstelle eines Shadow DOM und/oder eines benutzerdefinierten Elements.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aria-flowto`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto) Attribut
- [`Element.ariaFlowToElements`](/de/docs/Web/API/Element/ariaFlowToElements)
- [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Attributreflexion_ Leitfaden.
