---
title: aria-valuemin
slug: Web/Accessibility/ARIA/Attributes/aria-valuemin
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das `aria-valuemin`-Attribut definiert den minimal zulässigen Wert für ein Bereichs-Widget.

## Beschreibung

Das `aria-valuemin`-Attribut definiert den minimalen Wert, der für Bereichs-Widgets zulässig ist. Es ist ähnlich dem `min`-Attribut von {{HTMLElement('progress')}}, {{HTMLElement('meter')}} und {{HTMLElement('input')}} vom Typ [`range`](/de/docs/Web/HTML/Element/input/range), [`number`](/de/docs/Web/HTML/Element/input/number) und allen Datums-Zeit-Typen.

Wenn eine Rolle vom Typ Bereich erstellt wird, einschließlich [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role), [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role) und [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role) auf einem nicht-semantischen Element, ermöglicht das `aria-valuemin`, ein Minimum zu definieren, das kleiner als der Maximalwert ist und ein erforderliches Attribut von `slider`, `scrollbar` und `spinbutton` ist.

Das Deklarieren der minimalen und maximalen Werte ermöglicht es unterstützenden Technologien, die Größe des Bereichs den Benutzern mitzuteilen.

Der maximale Wert wird mit [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) definiert.

> [!WARNING]
> Die [`range`](/de/docs/Web/Accessibility/ARIA/Roles/range_role)-Rolle selbst sollte **NICHT** verwendet werden, da es sich um eine ["abstrakte"](/de/docs/Web/Accessibility/ARIA/Roles#6._abstract_roles) Rolle handelt. Das `aria-valuemin`-Attribut wird bei allen Untertypen der Bereichsrollen verwendet.

## Werte

- `<number>`
  - : Eine Dezimalzahl, unterhalb des Höchstwerts.

## Zugehörige Schnittstellen

- [`Element.ariaValueMin`](/de/docs/Web/API/Element/ariaValueMin)
  - : Die [`ariaValueMin`](/de/docs/Web/API/Element/ariaValueMin)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-valuemin`-Attributs wider.
- [`ElementInternals.ariaValueMin`](/de/docs/Web/API/ElementInternals/ariaValueMin)
  - : Die [`ariaValueMin`](/de/docs/Web/API/ElementInternals/ariaValueMin)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-valuemin`-Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role)
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
- [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)

Vererbt in Rollen:

- [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role)
- [`progressbar`](/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role)
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`range` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/range_role)
- [`<input type="range>` Element `min` Attribut](/de/docs/Web/HTML/Element/input/range#min)
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)
