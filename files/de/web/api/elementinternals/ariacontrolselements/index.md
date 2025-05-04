---
title: "ElementInternals: ariaControlsElements-Eigenschaft"
short-title: ariaControlsElements
slug: Web/API/ElementInternals/ariaControlsElements
l10n:
  sourceCommit: 6bed868c7b75c4c3ca3721fa8ed6c6ad2f41262b
---

{{APIRef("DOM")}}

Die **`ariaControlsElements`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces ist ein Array, das das oder die Elemente enthält, die von dem Element gesteuert werden, auf das es angewendet wird. Zum Beispiel könnte dies auf einem [Combobox](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) gesetzt werden, um das Element anzuzeigen, das es öffnet, oder auf einem [`Scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role), um die ID des Elements anzuzeigen, das es steuert.

Das Thema [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) enthält zusätzliche Informationen darüber, wie das Attribut und die Eigenschaft verwendet werden sollten.

## Wert

Ein Array von Unterklassen von [`HTMLElement`](/de/docs/Web/API/HTMLElement), das die Elemente repräsentiert, die von diesem Element gesteuert werden.

Beim Lesen ist das zurückgegebene Array statisch und schreibgeschützt. Beim Schreiben wird das zugewiesene Array kopiert: Nachfolgende Änderungen an dem Array wirken sich nicht auf den Wert der Eigenschaft aus.

## Beschreibung

Die Eigenschaft ist eine flexible Alternative zur Verwendung des [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)-Attributs, um die gesteuerten Elemente festzulegen. Anders als bei `aria-controls` müssen die Elemente, die dieser Eigenschaft zugewiesen sind, kein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut haben.

Die Eigenschaft spiegelt das [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)-Attribut wider, wenn es definiert ist, jedoch nur für aufgelistete `id`-Referenzwerte, die gültigen, im Bereich befindlichen Elementen entsprechen. Wenn die Eigenschaft gesetzt ist, wird das entsprechende Attribut gelöscht. Weitere Informationen über reflektierte Elementreferenzen und Bereich finden Sie unter [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Reflected attributes_-Leitfaden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)-Attribut
- [`Element.ariaControlsElements`](/de/docs/Web/API/Element/ariaControlsElements)
- [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Attribute reflection_-Leitfaden
