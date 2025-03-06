---
title: aria-orientation
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-orientation
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das Attribut `aria-orientation` gibt an, ob die Ausrichtung des Elements horizontal, vertikal oder unbekannt/mehrdeutig ist.

## Beschreibung

Es kann für den Benutzer wichtig sein, die Ausrichtung zu kennen, um zu wissen, wie bestimmte Widgets navigiert werden können, da die Ausrichtung das erwartete Verhalten der Tasten für links, rechts, oben und unten beeinflusst. Das Attribut `aria-orientation` wird verwendet, um Benutzern von unterstützenden Technologien anzuzeigen, ob die Ausrichtung eines Elements `horizontal` oder `vertical` oder `undefined` ist.

Einige Widgets haben Standardausrichtungen:

Standardmäßig horizontal:

- [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role),
- [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role),
- [`toolbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role),
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)

Standardmäßig vertikal:

- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role),
- [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role),
- [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role),
- [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)

Jeder [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) sollte `aria-orientation` entsprechend der Ausrichtung des Separators haben.

Wenn Knoten in einem Baum horizontal statt in der standardmäßigen vertikalen Ausrichtung angeordnet sind, oder wenn eine Tab-Liste vertikal statt horizontal ist, verhält sich die untere Pfeiltaste wie die rechte Pfeiltaste und die obere Pfeiltaste wie die linke Pfeiltaste. In diesen Fällen müssen Benutzer von unterstützenden Technologien die Ausrichtung des Widgets kennen, um korrekt navigieren zu können.

Die Pfeiltasten nach oben und unten sind in der Regel für das normale Scrollen im Browser verfügbar, selbst wenn der Fokus innerhalb eines Baums oder einer Tab-Liste liegt. Verwenden Sie `aria-orientation`, um Benutzer zu warnen, wenn ein Widget nicht die standardmäßige, erwartete Ausrichtung und die damit verbundene Navigation hat.

Denken Sie immer daran, dass ARIA nur beeinflusst, wie unterstützende Technologien Inhalte für Ihre Benutzer präsentieren; um das Verhalten der Pfeiltasten zu ändern, ist JavaScript erforderlich.

## Werte

- `horizontal`
  - : Das Element ist horizontal ausgerichtet.
- `undefined` (standardmäßig)
  - : Die Ausrichtung des Elements ist unbekannt/mehrdeutig.
- `vertical`
  - : Das Element ist vertikal ausgerichtet.

## Zugehörige Schnittstellen

- [`Element.ariaOrientation`](/de/docs/Web/API/Element/ariaOrientation)
  - : Die [`ariaOrientation`](/de/docs/Web/API/Element/ariaOrientation)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-orientation`-Attributes wider.
- [`ElementInternals.ariaOrientation`](/de/docs/Web/API/ElementInternals/ariaOrientation)
  - : Die [`ariaOrientation`](/de/docs/Web/API/ElementInternals/ariaOrientation)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-orientation`-Attributes wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`select`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/select_role)
- [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)
- [`toolbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role)

Geerbt in Rollen:

- [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)
- [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role)
- [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)
- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Verständnis von WCAG: Tastatur](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Keyboard)
