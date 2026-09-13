---
title: "ARIA: aria-readonly-Attribut"
short-title: aria-readonly
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-readonly
l10n:
  sourceCommit: c9f3d85f24d7839c9fe36a68d8042d088d906147
---

Das `aria-readonly`-Attribut zeigt an, dass das Element nicht editierbar ist, aber dennoch bedienbar.

## Beschreibung

Wenn Sie anzeigen möchten, dass ein interaktives Element funktioniert, aber nicht bearbeitbar ist, setzen Sie `aria-readonly="true"`. Dies zeigt dem Benutzer, dass ein interaktives Element, das normalerweise fokussierbar und kopierbar wäre, in einen Nur-Lesen-Zustand (nicht deaktiviert) versetzt wurde.

Wenn `aria-readonly` auf `true` gesetzt ist, bedeutet dies, dass der Benutzer den Wert des Widgets lesen, aber nicht ändern kann. Nur-Lesen-Elemente sind für den Benutzer weiterhin relevant, daher sollten Sie den Benutzer nicht daran hindern, zum Element oder seinen fokussierbaren Nachkommen zu navigieren oder den Wert zu kopieren.

Beispiele beinhalten:

- Formularelemente, die nicht verändert werden sollten.
- Zeilen- und Spaltenüberschriften in einer Tabellenkalkulation.
- Der Gesamtwert in einem Warenkorb.

Wenn der nicht änderbare Wert keinen Fokus erhalten sollte, verwenden Sie stattdessen [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled).

> [!NOTE]
> Wenn Sie semantische HTML-Formular-Steuerelemente verwenden und das `readonly`-Attribut setzen, müssen Sie `aria-readonly="true"` nicht hinzufügen.

> [!NOTE]
> Der Wert von `<input type="checkbox">` kann nicht bearbeitet werden, wodurch `readonly` nicht relevant ist. Wenn jedoch Kontrollkästchen mit `role="checkbox"` erstellt werden, wird das `aria-readonly`-Attribut _unterstützt_.

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

- [HTML `readonly`-Attribut](/de/docs/Web/HTML/Reference/Attributes/readonly)
- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
