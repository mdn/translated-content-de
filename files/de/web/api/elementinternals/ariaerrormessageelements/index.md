---
title: "ElementInternals: ariaErrorMessageElements-Eigenschaft"
short-title: ariaErrorMessageElements
slug: Web/API/ElementInternals/ariaErrorMessageElements
l10n:
  sourceCommit: 85d5b8d224843c37974318ff04fbcc1ab69ef95d
---

{{APIRef("DOM")}}

Die **`ariaErrorMessageElements`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces ist ein Array, das das oder die Elemente enthält, die eine Fehlermeldung für das Element bereitstellen, auf das sie angewendet wird.

Das Thema [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) enthält zusätzliche Informationen darüber, wie das Attribut und die Eigenschaft verwendet werden sollten.

## Wert

Ein Array von Unterklassen von [`HTMLElement`](/de/docs/Web/API/HTMLElement).
Der innere Text dieser Elemente kann mit Leerzeichen verbunden werden, um die Fehlermeldung zu erhalten.

Beim Lesen ist das zurückgegebene Array statisch und schreibgeschützt.
Beim Schreiben wird das zugewiesene Array kopiert: nachfolgende Änderungen am Array beeinflussen den Wert der Eigenschaft nicht.

## Beschreibung

Die Eigenschaft ist eine flexible Alternative zur Verwendung des [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)-Attributs, um die Fehlermeldung für ein Element festzulegen.
Im Gegensatz zu `aria-errormessage` müssen die dieser Eigenschaft zugewiesenen Elemente kein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut haben.

Die Eigenschaft spiegelt das [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)-Attribut des Elements wider, wenn es definiert ist, jedoch nur für aufgelistete Referenz-`id`-Werte, die mit gültigen, im Gültigkeitsbereich befindlichen Elementen übereinstimmen.
Wenn die Eigenschaft gesetzt ist, wird das entsprechende Attribut gelöscht.
Weitere Informationen über reflektierte Elementreferenzen und den Gültigkeitsbereich finden Sie unter [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Reflected attributes_-Leitfaden.

## Beispiele

Die Beispiele in den folgenden Dokumenten sind relevant:

- [`Element.ariaErrorMessageElements`](/de/docs/Web/API/Element/ariaErrorMessageElements) ist das DOM-Äquivalent dieser Eigenschaft.
  Es wird auf die gleiche Weise verwendet, jedoch innerhalb des DOM anstelle eines Shadow DOM und/oder benutzerdefinierten Elements.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) Attribut
- [`Element.ariaErrorMessageElements`](/de/docs/Web/API/Element/ariaErrorMessageElements)
- [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Attribute reflection_-Leitfaden.
