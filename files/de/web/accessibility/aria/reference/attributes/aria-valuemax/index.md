---
title: aria-valuemax
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Das Attribut `aria-valuemax` definiert den maximal zulässigen Wert für ein Bereichs-Widget.

## Beschreibung

Das Attribut `aria-valuemax` definiert den maximal zulässigen Wert für Bereichs-Widgets. Es ist ähnlich dem `max`-Attribut von {{HTMLElement('progress')}}, {{HTMLElement('meter')}} und {{HTMLElement('input')}} vom Typ [`range`](/de/docs/Web/HTML/Reference/Elements/input/range), [`number`](/de/docs/Web/HTML/Reference/Elements/input/number) und allen Datums-Zeit-Typen.

Beim Erstellen einer Rolle für Typbereiche, einschließlich [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role), [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role) und [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role) auf einem nicht-semantischen Element, ermöglicht `aria-valuemax` die Definition eines Maximums, das mehr als der Mindestwert ist und ein erforderliches Attribut von `slider`, `scrollbar` und `spinbutton` ist.

Die Angabe von Mindest- und Höchstwerten ermöglicht es unterstützenden Technologien, die Größe des Bereichs für Benutzer zu vermitteln. Der Mindestwert wird mit [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) definiert.

> [!WARNING]
> Die Rolle [`range`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/range_role) selbst sollte **NICHT** verwendet werden, da sie eine ["abstrakte"](/de/docs/Web/Accessibility/ARIA/Reference/Roles#6._abstract_roles) Rolle ist. Das Attribut `aria-valuemax` wird bei allen Untertypen der Bereichsrollen verwendet.

## Beispiel

Der folgende Code zeigt einen Slider mit einem Maximalwert von 9.

```html
<div id="dimesLabel">Dimes</div>
<div
  role="slider"
  aria-valuenow="0"
  aria-valuemin="0"
  aria-valuemax="9"
  aria-labelledby="dimesLabel"
  id="dimes"></div>
```

## Werte

- `<number>`
  - : Eine ganze oder dezimale Zahl, die größer als der Mindestwert ist.

## Zugehörige Schnittstellen

- [`Element.ariaValueMax`](/de/docs/Web/API/Element/ariaValueMax)
  - : Die [`ariaValueMax`](/de/docs/Web/API/Element/ariaValueMax) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-valuemax`-Attributs wider.
- [`ElementInternals.ariaValueMax`](/de/docs/Web/API/ElementInternals/ariaValueMax)
  - : Die [`ariaValueMax`](/de/docs/Web/API/ElementInternals/ariaValueMax) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-valuemax`-Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role) (erforderlich)
- [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role) (erforderlich)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role) (erforderlich)

Vererbt in Rollen:

- [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
- [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`range` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/range_role)
- [`<input type="range>` Element `max` Attribut](/de/docs/Web/HTML/Reference/Elements/input/range#max)
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
