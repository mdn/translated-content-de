---
title: aria-readonly
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-readonly
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das `aria-readonly` Attribut gibt an, dass das Element nicht bearbeitbar, aber dennoch bedienbar ist.

## Beschreibung

Wenn Sie angeben möchten, dass ein interaktives Element funktioniert, aber nicht bearbeitbar ist, setzen Sie `aria-readonly="true"`. Dies zeigt dem Benutzer an, dass ein interaktives Element, das normalerweise fokussierbar und kopierbar wäre, in einem schreibgeschützten Zustand (nicht deaktiviert) ist.

Wenn `aria-readonly` auf `true` gesetzt ist, bedeutet dies, dass der Benutzer den Wert des Widgets lesen, aber nicht festlegen kann. Schreibgeschützte Elemente sind für den Benutzer weiterhin relevant, daher sollten Sie nicht verhindern, dass der Benutzer zum Element oder seinen fokussierbaren Nachkommen navigiert oder den Wert kopiert.

Beispiele beinhalten:

- Formularelemente, die nicht geändert werden sollten.
- Zeilen- und Spaltenüberschriften in einer Tabellenkalkulation.
- Der Gesamtwert in einem Warenkorb.

Wenn der nicht änderbare Wert nicht den Fokus erhalten soll, verwenden Sie stattdessen [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled).

> [!NOTE]
> Bei der Verwendung von semantischen HTML-Formularsteuerungen müssen Sie, wenn Sie das `readonly` Attribut festlegen, `aria-readonly="true"` nicht einschließen.

> [!NOTE]
> Der Wert von `<input type="checkbox">` kann nicht bearbeitet werden, wodurch `readonly` nicht relevant ist. Wenn Sie jedoch Kontrollkästchen mit `role="checkbox"` erstellen, wird das `aria-readonly` Attribut _unterstützt_.

## Werte

- `true`
  - : Das Element ist schreibgeschützt.
- `false` (Standard)
  - : Das Element ist nicht schreibgeschützt.

## Zugehörige Schnittstellen

- [`Element.ariaReadOnly`](/de/docs/Web/API/Element/ariaReadOnly)
  - : Die [`ariaReadOnly`](/de/docs/Web/API/Element/ariaReadOnly) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-readonly` Attributs wider.
- [`ElementInternals.ariaReadOnly`](/de/docs/Web/API/ElementInternals/ariaReadOnly)
  - : Die [`ariaReadOnly`](/de/docs/Web/API/ElementInternals/ariaReadOnly) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-readonly` Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`checkbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)

Vererbt in Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)
- [`switch`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML `readonly` Attribut](/de/docs/Web/HTML/Attributes/readonly)
- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
