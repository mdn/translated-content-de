---
title: "ARIA: aria-orientation-Attribut"
short-title: aria-orientation
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-orientation
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das `aria-orientation`-Attribut gibt an, ob die Orientierung des Elements horizontal, vertikal oder unbekannt/mehrdeutig ist.

## Beschreibung

Es kann wichtig sein, dass der Benutzer die Orientierung kennt, um zu wissen, wie man bestimmte Widgets navigiert, da die Orientierung das erwartete Verhalten der Pfeiltasten links, rechts, oben und unten beeinflusst. Das `aria-orientation`-Attribut wird verwendet, um Nutzern von unterstützender Technologie anzuzeigen, ob die Orientierung eines Elements `horizontal`, `vertical` oder `undefined` ist.

Einige Widgets haben standardmäßig Orientierungen:

Standardmäßig horizontal:

- [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role),
- [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)
- [`toolbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role)
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)

Standardmäßig vertikal:

- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)
- [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)

Jeder [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) sollte ein `aria-orientation`-Attribut haben, das mit der Orientierung des Separators übereinstimmt.

Wenn Knoten in einem Baum horizontal anstatt in der standardmäßigen vertikalen Richtung angeordnet sind oder wenn eine Tab-Liste vertikal anstatt horizontal ist, funktioniert der Abwärtspfeil wie ein normaler Rechtspfeil und der Aufwärtspfeil wie ein normaler Linkspfeil. In diesen Fällen müssen Nutzer von unterstützender Technologie die Orientierung des Widgets kennen, um korrekt navigieren zu können.

Auf- und Abwärtspfeile stehen generell für normales Browserscrolling zur Verfügung, selbst wenn sich der Fokus innerhalb eines Baums oder einer Tab-Liste befindet. Fügen Sie `aria-orientation` hinzu, um Nutzer zu warnen, wenn ein Widget nicht die standardmäßige, erwartete Orientierung und assoziierte Navigation hat.

Denken Sie immer daran, dass ARIA nur verändert, wie unterstützende Technologie Inhalte Ihren Nutzern präsentiert; das Verhalten der Pfeiltasten zu ändern, erfordert JavaScript.

## Werte

- `horizontal`
  - : Das Element ist horizontal orientiert.
- `undefined` (Standard)
  - : Die Orientierung des Elements ist unbekannt/mehrdeutig.
- `vertical`
  - : Das Element ist vertikal orientiert.

## Zugehörige Schnittstellen

- [`Element.ariaOrientation`](/de/docs/Web/API/Element/ariaOrientation)
  - : Die [`ariaOrientation`](/de/docs/Web/API/Element/ariaOrientation)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-orientation`-Attributs wider.
- [`ElementInternals.ariaOrientation`](/de/docs/Web/API/ElementInternals/ariaOrientation)
  - : Die [`ariaOrientation`](/de/docs/Web/API/ElementInternals/ariaOrientation)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-orientation`-Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`select`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/select_role)
- [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)
- [`toolbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role)

Vererbt in Rollen:

- [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)
- [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role)
- [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)
- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Verstehen von WCAG: Tastatur](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Keyboard)
