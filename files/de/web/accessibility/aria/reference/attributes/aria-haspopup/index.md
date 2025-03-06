---
title: aria-haspopup
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das `aria-haspopup`-Attribut zeigt die Verfügbarkeit und den Typ eines interaktiven Popups an, das durch das Element ausgelöst werden kann, auf dem das Attribut gesetzt ist.

## Beschreibung

In ARIA werden interaktive Menüs, Listboxen, Bäume, Raster und Dialoge, die über anderen Inhalten erscheinen, wenn sie ausgelöst werden, als "Popups" betrachtet. Diese Popups werden durch eines oder mehrere interaktive Elemente auf der Seite ausgelöst. Die Verfügbarkeit und der Typ des Popups, das das interaktive Element auslösen wird, sollten mit dem `aria-haspopup`-Zustand identifiziert werden.

Das Vorhandensein von `aria-haspopup` mit einem der sechs aufgelisteten Werte - `menu`, `listbox`, `tree`, `grid`, `dialog` oder `true` - zeigt an, dass das Element ein Popup auslösen kann und welche Art von Popup angezeigt wird. Das auftauchende Element muss die angegebene Rolle haben. Der Wert `true` entspricht `menu`. Jeder andere Wert, einschließlich eines leeren Strings oder einer anderen [Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles), wird so behandelt, als wäre `false` gesetzt.

Ein [`Tooltip`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tooltip_role) wird in diesem Kontext nicht als Popup angesehen, da es nicht interaktiv ist.

> [!NOTE]
> Stellen Sie sicher, dass die Rolle des Elements, das als Container für den Popup-Inhalt dient, ein [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role), [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role), [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) ist und dass der Wert von `aria-haspopup` mit der Rolle des Popup-Containers übereinstimmt.

Der `aria-haspopup`-Zustand informiert Benutzer von unterstützenden Technologien darüber, dass ein Popup vorhanden ist und um welche Art von Popup es sich handelt, bietet jedoch keine Interaktivität. Damit das Popup über die Tastatur zugänglich ist, stellen Sie sicher, dass das Element mit `aria-haspopup` fokussierbar ist und das Popup auslösen kann, dass es einen Tastaturmechanismus zum Öffnen des Popups gibt, und dass das Popup-Element den Fokus aller seiner Nachkommen verwaltet.

> [!NOTE]
> ARIA ermöglicht keine zugängliche Funktionalität. ARIA vermittelt nur das beabsichtigte Verhalten Ihrer Funktionalität.

Beim Erstellen einer [`Menüleiste`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) sollte ein übergeordnetes [`Menüelement`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role) `aria-haspopup="menu"` (oder `true`) gesetzt haben. Jeder Button, der ein Menü öffnet, sollte die Rolle eines [`Buttons`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) haben oder vorzugsweise ein {{HTMLElement('button')}} sein und ebenfalls `aria-haspopup="menu"` (oder `true`) gesetzt haben. [`Tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)-Elemente mit Popup-Menüs sollten ebenfalls `aria-haspopup="menu"` gesetzt haben. Beachten Sie, dass `menubar`s nicht zur Erstellung der Navigation von Websites verwendet werden sollten.

> [!NOTE]
> Elemente mit der Rolle [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) haben implizit einen `aria-haspopup`-Wert von `listbox`.

## Werte

- `false` (Standard)
  - : Das Element hat kein Popup.
- `true`
  - : Das Popup ist ein Menü.
- `menu`
  - : Das Popup ist ein Menü.
- `listbox`
  - : Das Popup ist eine Listbox.
- `tree`
  - : Das Popup ist ein Baum.
- `grid`
  - : Das Popup ist ein Raster.
- `dialog`
  - : Das Popup ist ein Dialog.

## Zugehörige Schnittstellen

- [`Element.ariaHasPopup`](/de/docs/Web/API/Element/ariaHasPopup)
  - : Die [`ariaHasPopup`](/de/docs/Web/API/Element/ariaHasPopup)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, gibt den Wert des `aria-haspopup`-Attributs wieder, das die Verfügbarkeit und den Typ des interaktiven Popups anzeigt, wie z. B. Menü oder Dialog, das durch ein Element ausgelöst werden kann.
- [`ElementInternals.ariaHasPopup`](/de/docs/Web/API/ElementInternals/ariaHasPopup)
  - : Die [`ariaHasPopup`](/de/docs/Web/API/ElementInternals/ariaHasPopup)-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des `aria-haspopup`-Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`application`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
- [`button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role)
- [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`link`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role)
- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
- [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
- [`treeitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)

Vererbt in Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
- [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)
- [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)
- [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
- [Toolbar example](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/) - W3C WAI ARIA Practices
