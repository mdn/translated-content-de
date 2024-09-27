---
title: aria-readonly
slug: Web/Accessibility/ARIA/Attributes/aria-readonly
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das `aria-readonly`-Attribut gibt an, dass das Element nicht bearbeitbar, jedoch ansonsten bedienbar ist.

## Beschreibung

Wenn Sie anzeigen möchten, dass ein interaktives Element funktioniert, aber nicht bearbeitbar ist, setzen Sie `aria-readonly="true"`. Dies zeigt dem Benutzer an, dass ein normalerweise fokussierbares und kopierbares interaktives Element in einen Nur-Lese-Zustand (nicht deaktiviert) versetzt wurde.

Wenn `aria-readonly` auf `true` gesetzt ist, bedeutet dies, dass der Benutzer den Wert des Widgets lesen, aber nicht festlegen kann. Nur-Lese-Elemente sind weiterhin für den Benutzer relevant, daher sollten Sie den Benutzer nicht daran hindern, zum Element oder seinen fokussierbaren Nachfahren zu navigieren oder den Wert zu kopieren.

Beispiele umfassen:

- Formularelemente, die nicht geändert werden sollten.
- Zeilen- und Spaltenüberschriften in einer Tabellenkalkulation.
- Der Gesamtwert in einem Warenkorb.

Wenn der nicht änderbare Wert keinen Fokus erhalten soll, verwenden Sie stattdessen [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled).

> [!NOTE]
> Wenn Sie semantische HTML-Formularsteuerungen verwenden und das `readonly`-Attribut festlegen, müssen Sie `aria-readonly="true"` nicht einbeziehen.

> [!NOTE]
> Der Wert von `<input type="checkbox">` kann nicht bearbeitet werden, was `readonly` irrelevant macht. Wenn jedoch Kontrollkästchen mit `role="checkbox"` erstellt werden, wird das `aria-readonly`-Attribut _unterstützt_.

## Werte

- `true`
  - : Das Element ist nur lesbar.
- `false` (Standard)
  - : Das Element ist nicht nur lesbar.

## Zugehörige Schnittstellen

- [`Element.ariaReadOnly`](/de/docs/Web/API/Element/ariaReadOnly)
  - : Die [`ariaReadOnly`](/de/docs/Web/API/Element/ariaReadOnly)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-readonly`-Attributs wider.
- [`ElementInternals.ariaReadOnly`](/de/docs/Web/API/ElementInternals/ariaReadOnly)
  - : Die [`ariaReadOnly`](/de/docs/Web/API/ElementInternals/ariaReadOnly)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-readonly`-Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`checkbox`](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role)
- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role)
- [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Roles/radiogroup_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)
- [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role)

Geerbt in Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Roles/searchbox_role)
- [`switch`](/de/docs/Web/Accessibility/ARIA/Roles/switch_role)
- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML-Attribut `readonly`](/de/docs/Web/HTML/Attributes/readonly)
- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)
