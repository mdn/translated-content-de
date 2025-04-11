---
title: aria-readonly
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-readonly
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Das `aria-readonly`-Attribut zeigt an, dass das Element nicht bearbeitet werden kann, aber dennoch bedienbar ist.

## Beschreibung

Wenn Sie anzeigen möchten, dass ein interaktives Element funktioniert, aber nicht bearbeitet werden kann, setzen Sie `aria-readonly="true"`. Dies zeigt dem Benutzer, dass ein interaktives Element, das normalerweise fokussierbar und kopierbar ist, in einem schreibgeschützten (nicht deaktivierten) Zustand versetzt wurde.

Wenn `aria-readonly` auf `true` gesetzt ist, bedeutet es, dass der Benutzer den Wert des Widgets lesen, aber nicht setzen kann. Schreibgeschützte Elemente sind weiterhin für den Benutzer relevant, daher sollten Sie verhindern, dass der Benutzer das Element oder dessen fokussierbare Nachkommen erreicht oder den Wert kopiert.

Beispiele umfassen:

- Formularelemente, die nicht geändert werden sollten.
- Zeilen- und Spaltenüberschriften in einer Tabellenkalkulation.
- Der Gesamtwert in einem Warenkorb.

Wenn der nicht änderbare Wert keinen Fokus erhalten soll, verwenden Sie stattdessen [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled).

> [!NOTE]
> Bei Verwendung von semantischen HTML-Formularsteuerelementen müssen Sie, wenn Sie das `readonly`-Attribut setzen, nicht zusätzlich `aria-readonly="true"` angeben.

> [!NOTE]
> Der Wert von `<input type="checkbox">` kann nicht bearbeitet werden, sodass `readonly` nicht relevant ist. Wenn jedoch Kontrollkästchen mit `role="checkbox"` erstellt werden, wird das `aria-readonly`-Attribut _unterstützt_.

## Werte

- `true`
  - : Das Element ist schreibgeschützt.
- `false` (Standard)
  - : Das Element ist nicht schreibgeschützt.

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
