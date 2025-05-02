---
title: "Element: ariaActiveDescendantElement-Eigenschaft"
short-title: ariaActiveDescendantElement
slug: Web/API/ElementInternals/ariaActiveDescendantElement
l10n:
  sourceCommit: 85d5b8d224843c37974318ff04fbcc1ab69ef95d
---

{{APIRef("DOM")}}

Die **`ariaActiveDescendantElement`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle repräsentiert das derzeit aktive Element, wenn der Fokus auf einem [`composite`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role)-Widget, einer [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), einer [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), einer [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) oder einer [`application`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) liegt.

Das Thema [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) enthält zusätzliche Informationen darüber, wie das Attribut und die Eigenschaft verwendet werden sollten.

## Wert

Eine Unterklasse von [`HTMLElement`](/de/docs/Web/API/HTMLElement), die den aktiven Nachfahren darstellt, oder `null`, wenn es keinen aktiven Nachfahren gibt.

## Beschreibung

Die Eigenschaft ist eine flexible Alternative zur Verwendung des [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)-Attributs.
Im Gegensatz zu `aria-activedescendant` muss das Element, das dieser Eigenschaft zugewiesen ist, kein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut haben.

Die Eigenschaft spiegelt das [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)-Attribut des Elements wider, wenn es definiert ist, jedoch nur für `id`-Werte von Verweisen, die mit gültigen, im Geltungsbereich befindlichen Elementen übereinstimmen.
Wenn die Eigenschaft gesetzt ist, wird das entsprechende Attribut gelöscht.
Weitere Informationen über reflektierte Elementreferenzen und den Geltungsbereich finden Sie unter [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Reflektierte Attribute_-Leitfaden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)-Attribut
- [`Element.ariaActiveDescendantElement`](/de/docs/Web/API/Element/ariaActiveDescendantElement)
- [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Attributreflektion_-Leitfaden.
