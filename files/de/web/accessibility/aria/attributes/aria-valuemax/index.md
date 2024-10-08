---
title: aria-valuemax
slug: Web/Accessibility/ARIA/Attributes/aria-valuemax
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das Attribut `aria-valuemax` definiert den maximal zulässigen Wert für ein Bereichs-Widget.

## Beschreibung

Das Attribut `aria-valuemax` definiert den maximal erlaubten Wert für Bereichs-Widgets. Es ist ähnlich dem `max`-Attribut von {{HTMLElement('progress')}}, {{HTMLElement('meter')}} und {{HTMLElement('input')}} vom Typ [`range`](/de/docs/Web/HTML/Element/input/range), [`number`](/de/docs/Web/HTML/Element/input/number) und allen Datum-Zeit-Typen.

Beim Erstellen einer Rolle vom Typ Bereich, einschließlich [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role), [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role) und [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role) auf einem nicht-semantischen Element, ermöglicht `aria-valuemax` die Festlegung eines Maximums, das mehr als der Mindestwert ist und ist ein erforderliches Attribut von `slider`, `scrollbar` und `spinbutton`.

Die Angabe von Mindest- und Höchstwerten ermöglicht es unterstützenden Technologien, die Größe des Bereichs den Benutzern zu vermitteln. Der Mindestwert wird mit [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) definiert.

> [!WARNING]
> Die Rolle [`range`](/de/docs/Web/Accessibility/ARIA/Roles/range_role) selbst sollte **NICHT** verwendet werden, da sie eine ["abstrakte"](/de/docs/Web/Accessibility/ARIA/Roles#6._abstract_roles) Rolle ist. Das Attribut `aria-valuemax` wird auf allen Untertypen der Rollen für Bereiche verwendet.

## Beispiel

Der untenstehende Code zeigt einen einfachen Schieberegler mit einem maximalen Wert von 9.

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
  - : Eine Ganzzahl oder Dezimalzahl, die größer als der Mindestwert ist.

## Zugehörige Schnittstellen

- [`Element.ariaValueMax`](/de/docs/Web/API/Element/ariaValueMax)
  - : Die Eigenschaft [`ariaValueMax`](/de/docs/Web/API/Element/ariaValueMax), Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-valuemax`-Attributs wider.
- [`ElementInternals.ariaValueMax`](/de/docs/Web/API/ElementInternals/ariaValueMax)
  - : Die Eigenschaft [`ariaValueMax`](/de/docs/Web/API/ElementInternals/ariaValueMax), Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-valuemax`-Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role)
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role) (erforderlich)
- [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role) (erforderlich)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role) (erforderlich)

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
- [`<input type="range>` Element `max` Attribut](/de/docs/Web/HTML/Element/input/range#max)
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)
- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)
