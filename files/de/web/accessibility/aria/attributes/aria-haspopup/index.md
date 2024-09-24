---
title: aria-haspopup
slug: Web/Accessibility/ARIA/Attributes/aria-haspopup
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das `aria-haspopup`-Attribut zeigt die Verfügbarkeit und den Typ eines interaktiven Popup-Elements an, das durch das Element, auf dem das Attribut gesetzt ist, ausgelöst werden kann.

## Beschreibung

In ARIA werden interaktive Menüs, Listboxen, Bäume, Gitter und Dialoge, die über anderem Inhalt erscheinen, wenn sie ausgelöst werden, als "Popups" betrachtet. Diese Popups werden durch eines oder mehrere interaktive Elemente auf der Seite ausgelöst. Die Verfügbarkeit und der Typ des Popups, das das interaktive Element auslösen wird, sollten mit dem `aria-haspopup`-Zustand identifiziert werden.

Das Vorhandensein von `aria-haspopup` mit einem von sechs aufgezählten Werten - `menu`, `listbox`, `tree`, `grid`, `dialog` oder `true` - zeigt an, dass das Element ein Popup auslösen kann und welcher Art das Popup sein wird. Im Gegenzug muss das aufspringende Element die angegebene Rolle innehaben. Der Wert `true` entspricht `menu`. Jeder andere Wert, einschließlich eines leeren Strings oder anderer [Rollen](/de/docs/Web/Accessibility/ARIA/Roles), wird behandelt, als wäre `false` gesetzt.

Ein [`Tooltip`](/de/docs/Web/Accessibility/ARIA/Roles/tooltip_role) wird in diesem Zusammenhang nicht als Popup betrachtet, da er nicht interaktiv ist.

> [!NOTE]
> Stellen Sie sicher, dass die Rolle des Elements, das als Container für den Popup-Inhalt dient, ein [`menu`](/de/docs/Web/Accessibility/ARIA/Roles/menu_role), [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role), [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role) oder [`dialog`](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role) ist und dass der Wert von `aria-haspopup` der Rolle des Popup-Containers entspricht.

Der `aria-haspopup`-Zustand informiert Benutzer unterstützender Technologien darüber, dass es ein Popup gibt und von welchem Typ es ist, bietet jedoch keine Interaktivität. Damit das Popup per Tastatur zugänglich ist, stellen Sie sicher, dass das Element mit `aria-haspopup` fokussierbar ist und das Popup auslösen kann, dass es einen Tastaturmechanismus zum Öffnen des Popups gibt und dass das Popup-Element den Fokus aller seiner Nachkommen verwaltet.

> [!NOTE]
> ARIA ermöglicht keine zugängliche Funktionalität. ARIA vermittelt lediglich das beabsichtigte Verhalten Ihrer Funktionen.

Beim Erstellen eines [`Menubars`](/de/docs/Web/Accessibility/ARIA/Roles/menubar_role) sollte ein übergeordnetes [`Menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role) `aria-haspopup="menu"` (oder `true`) gesetzt haben. Jedes Button, das ein Menü öffnet, sollte die Rolle [`Button`](/de/docs/Web/Accessibility/ARIA/Roles/button_role) haben oder vorzugsweise ein {{HTMLElement('button')}} sein und ebenfalls `aria-haspopup="menu"` (oder `true`) gesetzt haben. [`Tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)-Elemente mit Popup-Menüs sollten ebenfalls `aria-haspopup="menu"` gesetzt haben. Beachten Sie, dass `menubar`s nicht zur Erstellung von Website-Navigation verwendet werden sollten.

> [!NOTE]
> Elemente mit der Rolle [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role) haben implizit den `aria-haspopup`-Wert `listbox`.

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
  - : Das Popup ist ein Grid.
- `dialog`
  - : Das Popup ist ein Dialog.

## Zugehörige Schnittstellen

- {{domxref("Element.ariaHasPopup")}}
  - : Die [`ariaHasPopup`](/de/docs/Web/API/Element/ariaHasPopup)-Eigenschaft, Teil der {{domxref("Element")}}-Schnittstelle, spiegelt den Wert des `aria-haspopup`-Attributs wider, das die Verfügbarkeit und den Typ eines interaktiven Popup-Elements, wie Menü oder Dialog, angibt, das von einem Element ausgelöst werden kann.
- {{domxref("ElementInternals.ariaHasPopup")}}
  - : Die [`ariaHasPopup`](/de/docs/Web/API/ElementInternals/ariaHasPopup)-Eigenschaft der {{domxref("ElementInternals")}}-Schnittstelle spiegelt den Wert des `aria-haspopup`-Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`application`](/de/docs/Web/Accessibility/ARIA/Roles/application_role)
- [`button`](/de/docs/Web/Accessibility/ARIA/Roles/button_role)
- [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [`link`](/de/docs/Web/Accessibility/ARIA/Roles/link_role)
- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role)
- [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)
- [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role)
- [`treeitem`](/de/docs/Web/Accessibility/ARIA/Roles/treeitem_role)

Vererbt in Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Roles/searchbox_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls)
- [`menu`](/de/docs/Web/Accessibility/ARIA/Roles/menu_role)
- [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role)
- [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role)
- [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role)
- [`dialog`](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role)
- [Beispiel für eine Toolbar](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/) - W3C WAI ARIA Praktiken
