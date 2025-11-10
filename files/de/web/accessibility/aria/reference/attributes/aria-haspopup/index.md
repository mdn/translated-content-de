---
title: "ARIA: aria-haspopup-Attribut"
short-title: aria-haspopup
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das `aria-haspopup`-Attribut gibt die Verfügbarkeit und den Typ eines interaktiven Popup-Elements an, das durch das Element, auf dem das Attribut gesetzt ist, ausgelöst werden kann.

## Beschreibung

In ARIA werden interaktive Menüs, Listboxen, Bäume, Gitter und Dialoge, die beim Auslösen über anderem Inhalt erscheinen, als "Popups" betrachtet. Diese Popups werden durch eines oder mehrere interaktive Elemente auf der Seite ausgelöst. Die Verfügbarkeit und der Typ des Popups, das das interaktive Element auslösen wird, sollten mit dem `aria-haspopup`-Zustand identifiziert werden.

Das Vorhandensein von `aria-haspopup` mit einem von sechs aufgezählten Werten - `menu`, `listbox`, `tree`, `grid`, `dialog` oder `true` - zeigt an, dass das Element ein Popup auslösen kann und welche Art von Popup angezeigt wird. Das Element, das erscheint, muss die angegebene Rolle haben. Der Wert `true` ist gleichbedeutend mit `menu`. Jeder andere Wert, einschließlich eines leeren Strings oder einer anderen [Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles), wird behandelt, als wäre `false` gesetzt.

Ein [`tooltip`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tooltip_role) wird in diesem Kontext nicht als Popup betrachtet, da es nicht interaktiv ist.

> [!NOTE]
> Stellen Sie sicher, dass die Rolle des Elements, das als Container für den Popup-Inhalt dient, ein [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role), [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role), [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) ist und dass der Wert von `aria-haspopup` mit der Rolle des Popup-Containers übereinstimmt.

Der `aria-haspopup`-Zustand informiert die Benutzer von unterstützenden Technologien darüber, dass es ein Popup gibt und welchen Typ es hat, bietet jedoch keine Interaktivität. Um das Popup tastaturzugänglich zu machen, stellen Sie sicher, dass das Element mit `aria-haspopup` fokussierbar ist und das Popup auslösen kann, dass ein Tastaturmechanismus zum Öffnen des Popups vorhanden ist und dass das Popup-Element den Fokus seiner gesamten Nachfolger verwaltet.

> [!NOTE]
> ARIA ermöglicht keine zugängliche Funktionalität. ARIA vermittelt nur das beabsichtigte Verhalten Ihrer Funktionalität.

Bei der Erstellung einer [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) sollte ein übergeordnetes [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role) mit `aria-haspopup="menu"` (oder `true`) versehen sein. Jeder Button, der ein Menü öffnet, sollte die Rolle [`button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) haben oder vorzugsweise ein {{HTMLElement('button')}} sein und ebenfalls `aria-haspopup="menu"` (oder `true`) haben. [`Tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)-Elemente mit Popup-Menüs sollten ebenfalls `aria-haspopup="menu"` gesetzt haben. Beachten Sie, dass `menubar`s nicht zur Erstellung einer Website-Navigation verwendet werden sollten.

> [!NOTE]
> Elemente mit der Rolle [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) haben einen impliziten `aria-haspopup`-Wert von `listbox`.

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
  - : Das Popup ist ein Gitter.
- `dialog`
  - : Das Popup ist ein Dialog.

## Zugehörige Schnittstellen

- [`Element.ariaHasPopup`](/de/docs/Web/API/Element/ariaHasPopup)
  - : Die [`ariaHasPopup`](/de/docs/Web/API/Element/ariaHasPopup)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-haspopup`-Attributs wider, das die Verfügbarkeit und den Typ des interaktiven Popup-Elements, wie z.B. Menü oder Dialog, das durch ein Element ausgelöst werden kann, angibt.
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
- [Toolbar-Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/) - W3C WAI ARIA Praktiken
