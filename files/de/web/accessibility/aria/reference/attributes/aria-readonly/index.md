---
title: "ARIA: aria-readonly-Attribut"
short-title: aria-readonly
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-readonly
l10n:
  sourceCommit: 96758f3d8ce1e5fbd9d58053bdef103eec1de108
---

Das Attribut `aria-readonly` gibt an, dass das Element nicht bearbeitbar, aber ansonsten bedienbar ist.

## Beschreibung

Wenn Sie angeben möchten, dass ein interaktives Element bedienbar, aber nicht bearbeitbar ist, setzen Sie `aria-readonly="true"`. Dadurch wird Benutzern vermittelt, dass sich ein interaktives Element, das normalerweise fokussiert und dessen Wert kopiert werden kann, in einem schreibgeschützten Zustand befindet (und nicht deaktiviert ist).

Wenn `aria-readonly` auf `true` gesetzt ist, können Benutzer den Wert des Widgets lesen, aber nicht ändern. Schreibgeschützte Elemente sind für Benutzer weiterhin relevant. Deshalb sollten Sie nicht verhindern, dass sie zum Element oder zu seinen fokussierbaren Nachfahren navigieren oder den Wert kopieren können.

Beispiele sind:

- Formularelemente, die nicht geändert werden sollen.
- Zeilen- und Spaltenüberschriften in einer Tabellenkalkulation.
- Der Gesamtbetrag in einem Warenkorb.

Wenn mit dem Element nicht interagiert werden kann, verwenden Sie stattdessen [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled).

> [!NOTE]
> Wenn Sie semantische HTML-Formularsteuerelemente verwenden und das Attribut `readonly` setzen, müssen Sie `aria-readonly="true"` nicht zusätzlich angeben.

> [!NOTE]
> Der Wert von `<input type="checkbox">` kann nicht bearbeitet werden, daher ist `readonly` hierfür nicht relevant. Wenn Sie jedoch Checkboxen mit `role="checkbox"` erstellen, wird das Attribut `aria-readonly` unterstützt.

## Werte

- `true`
  - : Das Element ist schreibgeschützt.
- `false` (Standardwert)
  - : Das Element ist nicht schreibgeschützt.

## Zugehörige Schnittstellen

- [`Element.ariaReadOnly`](/de/docs/Web/API/Element/ariaReadOnly)
  - : Die Eigenschaft [`ariaReadOnly`](/de/docs/Web/API/Element/ariaReadOnly) der Schnittstelle [`Element`](/de/docs/Web/API/Element) spiegelt den Wert des Attributs `aria-readonly` wider.
- [`ElementInternals.ariaReadOnly`](/de/docs/Web/API/ElementInternals/ariaReadOnly)
  - : Die Eigenschaft [`ariaReadOnly`](/de/docs/Web/API/ElementInternals/ariaReadOnly) der Schnittstelle [`ElementInternals`](/de/docs/Web/API/ElementInternals) spiegelt den Wert des Attributs `aria-readonly` wider.

## Zugehörige Rollen

Wird in folgenden Rollen verwendet:

- [`checkbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)

Wird an folgende Rollen vererbt:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)
- [`switch`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML-Attribut `readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)
- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
