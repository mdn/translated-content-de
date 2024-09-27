---
title: aria-orientation
slug: Web/Accessibility/ARIA/Attributes/aria-orientation
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das Attribut `aria-orientation` gibt an, ob die Ausrichtung des Elements horizontal, vertikal oder unbekannt/mehrdeutig ist.

## Beschreibung

Es kann wichtig sein, dass der Benutzer die Ausrichtung kennt, um zu wissen, wie er bestimmte Widgets navigieren kann, da die Ausrichtung die erwarteten Verhaltensweisen der linken, rechten, oberen und unteren Pfeile beeinflusst. Das Attribut `aria-orientation` wird verwendet, um Benutzern von unterstützenden Technologien anzuzeigen, ob die Ausrichtung eines Elements `horizontal`, `vertical` oder `undefined` ist.

Verschiedene Widgets haben Standardausrichtungen:

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

Jeder [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role) sollte `aria-orientation` aufweisen, das mit der Ausrichtung des Separators übereinstimmt.

Wenn Knoten in einem Baum horizontal statt in der standardmäßigen vertikalen Ausrichtung angeordnet sind oder wenn eine Registerkartenliste vertikal statt horizontal ist, fungiert der Abwärtspfeil wie ein rechter Pfeil und der Aufwärtspfeil wie ein linker Pfeil. In diesen Fällen müssen Benutzer von unterstützenden Technologien die Ausrichtung des Widgets kennen, um korrekt navigieren zu können.

Auf- und Abwärtspfeile sind in der Regel für normales Scrollen im Browser verfügbar, selbst wenn sich der Fokus in einem Baum oder einer Registerkartenliste befindet. Integrieren Sie `aria-orientation`, um Benutzer zu informieren, wenn ein Widget nicht die standardmäßige, erwartete Ausrichtung und die zugehörige Navigation aufweist.

Denken Sie daran, dass ARIA nur beeinflusst, wie unterstützende Technologien Inhalte Ihren Benutzern präsentieren; um das Verhalten der Pfeiltasten zu ändern, ist JavaScript erforderlich.

## Werte

- `horizontal`
  - : Das Element ist horizontal ausgerichtet.
- `undefined` (Standard)
  - : Die Ausrichtung des Elements ist unbekannt/mehrdeutig.
- `vertical`
  - : Das Element ist vertikal ausgerichtet.

## Zugehörige Schnittstellen

- [`Element.ariaOrientation`](/de/docs/Web/API/Element/ariaOrientation)
  - : Die [`ariaOrientation`](/de/docs/Web/API/Element/ariaOrientation)-Eigenschaft, ein Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des Attributs `aria-orientation` wider.
- [`ElementInternals.ariaOrientation`](/de/docs/Web/API/ElementInternals/ariaOrientation)
  - : Die [`ariaOrientation`](/de/docs/Web/API/ElementInternals/ariaOrientation)-Eigenschaft, ein Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des Attributs `aria-orientation` wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
- [`select`](/de/docs/Web/Accessibility/ARIA/Roles/select_role)
- [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role)
- [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role)
- [`toolbar`](/de/docs/Web/Accessibility/ARIA/Roles/toolbar_role)

Vererbt in Rollen:

- [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role)
- [`menu`](/de/docs/Web/Accessibility/ARIA/Roles/menu_role)
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Roles/menubar_role)
- [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Roles/radiogroup_role)
- [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role)
- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Verständnis von WCAG: Tastatur](/de/docs/Web/Accessibility/Understanding_WCAG/Keyboard)
