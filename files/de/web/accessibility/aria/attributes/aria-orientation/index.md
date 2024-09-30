---
title: aria-orientation
slug: Web/Accessibility/ARIA/Attributes/aria-orientation
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das `aria-orientation` Attribut gibt an, ob die Ausrichtung des Elements horizontal, vertikal oder unbekannt/mehrdeutig ist.

## Beschreibung

Es kann wichtig für den Benutzer sein, die Ausrichtung zu kennen, um zu wissen, wie man bestimmte Widgets navigiert, da die Ausrichtung die erwarteten Verhaltensweisen der Pfeiltasten nach links, rechts, oben und unten beeinflusst. Das `aria-orientation` Attribut wird verwendet, um Benutzern unterstützender Technologien anzuzeigen, ob die Ausrichtung eines Elements `horizontal` oder `vertical` oder `undefined` ist.

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

Jeder [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role) sollte eine `aria-orientation` entsprechend der Ausrichtung des Separators haben.

Wenn Knoten in einem Baum horizontal statt vertikal, der Standardausrichtung, arrangiert sind, oder wenn eine Registerkartenliste vertikal statt horizontal ist, funktioniert die Abwärtspfeiltaste wie eine reguläre Rechtspfeiltaste und die Aufwärtspfeiltaste wie eine reguläre Linkspfeiltaste. In diesen Fällen müssen Benutzer unterstützender Technologien die Ausrichtung des Widgets kennen, um korrekt zu navigieren.

Hoch- und Runter-Pfeile sind im Allgemeinen für das normale Scrollen im Browser verfügbar, selbst wenn der Fokus innerhalb eines Baumes oder einer Registerkartenliste liegt. Fügen Sie `aria-orientation` hinzu, um Benutzer darauf hinzuweisen, wenn ein Widget nicht die standardmäßige, erwartete Ausrichtung und die zugehörige Navigation hat.

Denken Sie immer daran, dass ARIA nur die Präsentation der Inhalte für Ihre Benutzer in unterstützender Technologie modifiziert; das Verhalten der Pfeiltasten erfordert JavaScript.

## Werte

- `horizontal`
  - : Das Element ist horizontal ausgerichtet.
- `undefined` (Standard)
  - : Die Ausrichtung des Elements ist unbekannt/mehrdeutig.
- `vertical`
  - : Das Element ist vertikal ausgerichtet.

## Zugehörige Schnittstellen

- [`Element.ariaOrientation`](/de/docs/Web/API/Element/ariaOrientation)
  - : Die [`ariaOrientation`](/de/docs/Web/API/Element/ariaOrientation) Eigenschaft, Teil des [`Element`](/de/docs/Web/API/Element) Interfaces, spiegelt den Wert des `aria-orientation` Attributs wider.
- [`ElementInternals.ariaOrientation`](/de/docs/Web/API/ElementInternals/ariaOrientation)
  - : Die [`ariaOrientation`](/de/docs/Web/API/ElementInternals/ariaOrientation) Eigenschaft, Teil des [`ElementInternals`](/de/docs/Web/API/ElementInternals) Interfaces, spiegelt den Wert des `aria-orientation` Attributs wider.

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

- [Verstehen von WCAG: Tastatur](/de/docs/Web/Accessibility/Understanding_WCAG/Keyboard)
