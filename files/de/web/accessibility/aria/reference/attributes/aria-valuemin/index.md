---
title: aria-valuemin
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Das Attribut `aria-valuemin` definiert den minimal zulässigen Wert für ein Bereichs-Widget.

## Beschreibung

Das Attribut `aria-valuemin` definiert den minimal zulässigen Wert für Bereichs-Widgets. Es ist vergleichbar mit dem `min`-Attribut von {{HTMLElement('progress')}}, {{HTMLElement('meter')}} und {{HTMLElement('input')}} des Typs [`range`](/de/docs/Web/HTML/Reference/Elements/input/range), [`number`](/de/docs/Web/HTML/Reference/Elements/input/number) und allen Datums-Zeit-Typen.

Beim Erstellen einer Bereichs-Typ-Rolle, einschließlich [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role), [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role), und [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role) auf einem nicht-semantischen Element, ermöglicht `aria-valuemin` die Definition eines Minimums, das kleiner ist als der Maximalwert, und ist ein erforderliches Attribut von `slider`, `scrollbar` und `spinbutton`.

Die Angabe der minimal- und maximal-Werte ermöglicht es assistiven Technologien, die Größe des Bereichs an die Benutzer zu vermitteln.

Der Maximalwert wird mit [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) definiert.

> [!WARNING]
> Die Rolle [`range`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/range_role) selbst sollte **NICHT** verwendet werden, da sie eine ["abstrakte"](/de/docs/Web/Accessibility/ARIA/Reference/Roles#6._abstract_roles) Rolle ist. Das Attribut `aria-valuemin` wird in allen Subtypen von Bereichsrollen verwendet.

## Werte

- `<number>`
  - : Eine Dezimalzahl, kleiner als der Maximalwert.

## Zugehörige Schnittstellen

- [`Element.ariaValueMin`](/de/docs/Web/API/Element/ariaValueMin)
  - : Die [`ariaValueMin`](/de/docs/Web/API/Element/ariaValueMin)-Eigenschaft, die Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle ist, spiegelt den Wert des `aria-valuemin`-Attributs wider.
- [`ElementInternals.ariaValueMin`](/de/docs/Web/API/ElementInternals/ariaValueMin)
  - : Die [`ariaValueMin`](/de/docs/Web/API/ElementInternals/ariaValueMin)-Eigenschaft, die Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle ist, spiegelt den Wert des `aria-valuemin`-Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)

Vererbt in Rollen:

- [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
- [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`range` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/range_role)
- [`<input type="range>` element `min` attribute](/de/docs/Web/HTML/Reference/Elements/input/range#min)
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
