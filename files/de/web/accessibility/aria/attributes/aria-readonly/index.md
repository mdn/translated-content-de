---
title: aria-readonly
slug: Web/Accessibility/ARIA/Attributes/aria-readonly
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das Attribut `aria-readonly` gibt an, dass das Element nicht bearbeitbar, aber dennoch bedienbar ist.

## Beschreibung

Wenn Sie anzeigen möchten, dass ein interaktives Element funktioniert, aber nicht bearbeitbar ist, setzen Sie `aria-readonly="true"`. Dies zeigt dem Benutzer an, dass ein interaktives Element, das normalerweise fokussierbar und kopierbar wäre, sich in einem schreibgeschützten (nicht deaktivierten) Zustand befindet.

Wenn `aria-readonly` auf `true` gesetzt ist, bedeutet dies, dass der Benutzer den Wert des Widgets lesen, aber nicht ändern kann. Schreibgeschützte Elemente sind für den Benutzer weiterhin relevant, daher sollten Sie den Benutzer nicht daran hindern, zu dem Element oder seinen fokussierbaren Nachkommen zu navigieren oder den Wert zu kopieren.

Beispiele umfassen:

- Formularelemente, die nicht geändert werden sollten.
- Zeilen- und Spaltenüberschriften in einer Tabelle.
- Der Gesamtwert in einem Warenkorb.

Wenn der nicht änderbare Wert nicht fokussierbar sein sollte, verwenden Sie stattdessen [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled).

> [!NOTE]
> Beim Verwenden semantischer HTML-Formularelemente müssen Sie, wenn Sie das Attribut `readonly` setzen, `aria-readonly="true"` nicht zusätzlich einfügen.

> [!NOTE]
> Der Wert von `<input type="checkbox">` kann nicht bearbeitet werden, wodurch `readonly` nicht relevant ist. Wenn jedoch Checkboxen mit `role="checkbox"` erstellt werden, wird das Attribut `aria-readonly` unterstützt.

## Werte

- `true`
  - : Das Element ist schreibgeschützt.
- `false` (Standard)
  - : Das Element ist nicht schreibgeschützt.

## Zugehörige Schnittstellen

- {{domxref("Element.ariaReadOnly")}}
  - : Die [`ariaReadOnly`](/de/docs/Web/API/Element/ariaReadOnly)-Eigenschaft, Teil der {{domxref("Element")}}-Schnittstelle, spiegelt den Wert des `aria-readonly`-Attributs wider.
- {{domxref("ElementInternals.ariaReadOnly")}}
  - : Die [`ariaReadOnly`](/de/docs/Web/API/ElementInternals/ariaReadOnly)-Eigenschaft, Teil der {{domxref("ElementInternals")}}-Schnittstelle, spiegelt den Wert des `aria-readonly`-Attributs wider.

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

Vererbt in Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Roles/searchbox_role)
- [`switch`](/de/docs/Web/Accessibility/ARIA/Roles/switch_role)
- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML `readonly` Attribut](/de/docs/Web/HTML/Attributes/readonly)
- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)
