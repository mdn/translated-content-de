---
title: "ARIA: aria-orientation-Attribut"
short-title: aria-orientation
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-orientation
l10n:
  sourceCommit: 4b63d71105e55a4d488b8f8bf8b338d42577a0e6
---

Das `aria-orientation`-Attribut gibt an, ob die Ausrichtung eines Elements horizontal, vertikal oder unbekannt/mehrdeutig ist.

## Beschreibung

Es kann wichtig für die Benutzer sein, die Ausrichtung zu kennen, um zu wissen, wie sie bestimmte Widgets navigieren können, da die Ausrichtung die erwarteten Verhaltensweisen der Pfeiltasten links, rechts, oben und unten beeinflusst. Das `aria-orientation`-Attribut wird verwendet, um Benutzer von unterstützenden Technologien darüber zu informieren, ob die Ausrichtung eines Elements `horizontal`, `vertical` oder `undefined` ist.

Einige Widgets haben Standardausrichtungen:

Standardmäßig horizontal:

- [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)
- [`toolbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role)
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)

Standardmäßig vertikal:

- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)
- [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)

Jeder [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) sollte `aria-orientation` entsprechend der Ausrichtung des Seperators haben.

Wenn die Knoten in einem Baum horizontal statt ihrer standardmäßigen vertikalen Ausrichtung angeordnet sind oder wenn eine Tab-Liste vertikal statt horizontal ist, funktioniert die Abwärtspfeiltaste so, wie es die Rechtspfeiltaste normalerweise tun würde, und die Aufwärtspfeiltaste funktioniert so, wie es die Linkspfeiltaste normalerweise tun würde. In diesen Fällen müssen Benutzer von unterstützenden Technologien über die Ausrichtung des Widgets informiert werden, um korrekt navigieren zu können.

Die Auf- und Abwärtspfeile sind in der Regel für das normale Scrollen im Browser verfügbar, selbst wenn der Fokus in einem Baum oder einer Tab-Liste liegt. Integrieren Sie `aria-orientation`, um Benutzer zu benachrichtigen, wenn ein Widget nicht die standardmäßige, erwartete Ausrichtung und die damit verbundene Navigation hat.

Denken Sie immer daran, dass ARIA nur ändert, wie unterstützende Technologien Inhalte Ihren Benutzern präsentieren; das Verhalten der Pfeiltasten zu ändern, erfordert JavaScript.

## Werte

- `horizontal`
  - : Das Element ist horizontal ausgerichtet.
- `undefined` (Standard)
  - : Die Ausrichtung des Elements ist unbekannt/mehrdeutig.
- `vertical`
  - : Das Element ist vertikal ausgerichtet.

## Zugehörige Schnittstellen

- [`Element.ariaOrientation`](/de/docs/Web/API/Element/ariaOrientation)
  - : Die [`ariaOrientation`](/de/docs/Web/API/Element/ariaOrientation) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-orientation`-Attributs wider.
- [`ElementInternals.ariaOrientation`](/de/docs/Web/API/ElementInternals/ariaOrientation)
  - : Die [`ariaOrientation`](/de/docs/Web/API/ElementInternals/ariaOrientation) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-orientation`-Attributs wider.

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
