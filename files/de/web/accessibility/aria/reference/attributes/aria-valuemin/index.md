---
title: "ARIA: aria-valuemin Attribut"
short-title: aria-valuemin
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das `aria-valuemin` Attribut definiert den minimal erlaubten Wert für ein Bereichs-Widget.

## Beschreibung

Das `aria-valuemin` Attribut definiert den minimal erlaubten Wert für Bereichs-Widgets. Es ähnelt dem `min` Attribut von {{HTMLElement('progress')}}, {{HTMLElement('meter')}}, und {{HTMLElement('input')}} vom Typ [`range`](/de/docs/Web/HTML/Reference/Elements/input/range), [`number`](/de/docs/Web/HTML/Reference/Elements/input/number) und allen Datums-Zeit-Typen.

Beim Erstellen einer Bereichs-Rolle, einschließlich [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role), [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role) und [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role) auf einem nicht-semantischen Element, ermöglicht das `aria-valuemin`, ein Minimum zu definieren, das kleiner als der Maximalwert ist und ist ein erforderliches Attribut für `slider`, `scrollbar` und `spinbutton`.

Das Deklarieren der minimalen und maximalen Werte ermöglicht es assistiven Technologien, die Größe des Bereichs den Benutzern zu vermitteln.

Der Maximalwert wird mit [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) definiert.

> [!WARNING]
> Die Rolle [`range`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/range_role) selbst sollte **NICHT** verwendet werden, da sie eine ["abstrakte"](/de/docs/Web/Accessibility/ARIA/Reference/Roles#6._abstract_roles) Rolle ist. Das `aria-valuemin` Attribut wird auf allen Untertypen der Bereichsrollen verwendet.

## Werte

- `<number>`
  - : Eine Dezimalzahl, unterhalb des Maximalwerts.

## Zugehörige Schnittstellen

- [`Element.ariaValueMin`](/de/docs/Web/API/Element/ariaValueMin)
  - : Die [`ariaValueMin`](/de/docs/Web/API/Element/ariaValueMin) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-valuemin` Attributs wider.
- [`ElementInternals.ariaValueMin`](/de/docs/Web/API/ElementInternals/ariaValueMin)
  - : Die [`ariaValueMin`](/de/docs/Web/API/ElementInternals/ariaValueMin) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-valuemin` Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)

Geerbt in Rollen:

- [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
- [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`range` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/range_role)
- [`<input type="range>` Element `min` Attribut](/de/docs/Web/HTML/Reference/Elements/input/range#min)
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
