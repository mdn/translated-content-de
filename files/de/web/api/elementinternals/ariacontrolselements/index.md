---
title: "ElementInternals: ariaControlsElements-Eigenschaft"
short-title: ariaControlsElements
slug: Web/API/ElementInternals/ariaControlsElements
l10n:
  sourceCommit: 85d5b8d224843c37974318ff04fbcc1ab69ef95d
---

{{APIRef("DOM")}}

Die **`ariaControlsElements`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle ist ein Array, das das Element (oder die Elemente) enthält, die von dem Element gesteuert werden, auf das sie angewendet wird. Zum Beispiel könnte dies auf einem [Kombinationsfeld](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) gesetzt werden, um das Element zu kennzeichnen, das es öffnet, oder auf einer [`Scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role), um die ID des Elements anzugeben, das es steuert.

Das Thema [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) enthält weitere Informationen darüber, wie das Attribut und die Eigenschaft verwendet werden sollten.

## Wert

Ein Array von Unterklassen von [`HTMLElement`](/de/docs/Web/API/HTMLElement), das die Elemente darstellt, die von diesem Element gesteuert werden.

Beim Auslesen ist das zurückgegebene Array statisch und schreibgeschützt. Beim Schreiben wird das zugewiesene Array kopiert: Nachfolgende Änderungen am Array beeinflussen den Wert der Eigenschaft nicht.

## Beschreibung

Die Eigenschaft ist eine flexible Alternative zur Verwendung des [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)-Attributs, um die gesteuerten Elemente festzulegen. Im Gegensatz zu `aria-controls` müssen die Elemente, die dieser Eigenschaft zugewiesen sind, kein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut haben.

Die Eigenschaft spiegelt das [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)-Attribut wider, wenn es definiert ist, jedoch nur für aufgelistete Referenz-`id`-Werte, die mit gültigen, im Geltungsbereich befindlichen Elementen übereinstimmen. Wenn die Eigenschaft gesetzt ist, wird das entsprechende Attribut gelöscht. Weitere Informationen zu reflektierten Elemente-Referenzen und Geltungsbereichen finden Sie unter [Reflektierte Elemente-Referenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Reflected attributes_-Leitfaden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)-Attribut
- [`Element.ariaControlsElements`](/de/docs/Web/API/Element/ariaControlsElements)
- [Reflektierte Elemente-Referenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Attribute reflection_-Leitfaden
