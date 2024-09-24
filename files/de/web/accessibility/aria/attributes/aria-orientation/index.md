---
title: aria-orientation
slug: Web/Accessibility/ARIA/Attributes/aria-orientation
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das Attribut `aria-orientation` gibt an, ob die Ausrichtung des Elements horizontal, vertikal oder unbekannt/mehrdeutig ist.

## Beschreibung

Es kann wichtig für den Benutzer sein, die Ausrichtung zu kennen, um zu wissen, wie man bestimmte Widgets navigiert, da die Ausrichtung das erwartete Verhalten der linken, rechten, oberen und unteren Pfeiltasten beeinflusst. Das Attribut `aria-orientation` wird verwendet, um Nutzern von unterstützender Technologie mitzuteilen, ob die Ausrichtung eines Elements `horizontal`, `vertical` oder `undefined` ist.

Einige Widgets haben Standardausrichtungen:

Standardmäßig horizontal:

- [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role),
- [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role)
- [`toolbar`](/de/docs/Web/Accessibility/ARIA/Roles/toolbar_role)
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Roles/menubar_role)

Standardmäßig vertikal:

- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
- [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role)
- [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role)
- [`menu`](/de/docs/Web/Accessibility/ARIA/Roles/menu_role)

Jeder [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role) sollte eine `aria-orientation` haben, die mit der Ausrichtung des Separators übereinstimmt.

Wenn Knoten in einem Baum horizontal anstatt in der standardmäßigen vertikalen Ausrichtung angeordnet sind, oder wenn eine Tab-Liste vertikal statt horizontal ist, funktioniert der Abwärts-Pfeil wie ein normaler rechter Pfeil und der Aufwärts-Pfeil wie ein linker Pfeil. In diesen Fällen müssen Benutzer von unterstützender Technologie die Ausrichtung des Widgets kennen, um korrekt navigieren zu können.

Auf- und Abwärtspfeile sind allgemein für das normale Scrollen im Browser verfügbar, selbst wenn sich der Fokus in einem Baum oder einer Tab-Liste befindet. Schließen Sie `aria-orientation` ein, um Benutzer zu benachrichtigen, wenn ein Widget nicht die standardmäßige, erwartete Ausrichtung und die zugehörige Navigation hat.

Denken Sie immer daran, dass ARIA nur beeinflusst, wie unterstützende Technologien Inhalte für Ihre Benutzer präsentieren; das Verhalten der Pfeiltasten zu ändern, erfordert JavaScript.

## Werte

- `horizontal`
  - : Das Element ist horizontal ausgerichtet.
- `undefined` (Standard)
  - : Die Ausrichtung des Elements ist unbekannt/mehrdeutig.
- `vertical`
  - : Das Element ist vertikal ausgerichtet.

## Zugehörige Schnittstellen

- {{domxref("Element.ariaOrientation")}}
  - : Die Eigenschaft [`ariaOrientation`](/de/docs/Web/API/Element/ariaOrientation), Teil der {{domxref("Element")}}-Schnittstelle, spiegelt den Wert des `aria-orientation`-Attributes wider.
- {{domxref("ElementInternals.ariaOrientation")}}
  - : Die Eigenschaft [`ariaOrientation`](/de/docs/Web/API/ElementInternals/ariaOrientation), Teil der {{domxref("ElementInternals")}}-Schnittstelle, spiegelt den Wert des `aria-orientation`-Attributes wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
- [`select`](/de/docs/Web/Accessibility/ARIA/Roles/select_role)
- [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role)
- [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role)
- [`toolbar`](/de/docs/Web/Accessibility/ARIA/Roles/toolbar_role)

Geerbt in Rollen:

- [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role)
- [`menu`](/de/docs/Web/Accessibility/ARIA/Roles/menu_role)
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Roles/menubar_role)
- [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Roles/radiogroup_role)
- [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role)
- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Verstehen von WCAG: Tastatur](/de/docs/Web/Accessibility/Understanding_WCAG/Keyboard)
