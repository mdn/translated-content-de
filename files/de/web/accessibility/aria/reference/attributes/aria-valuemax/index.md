---
title: aria-valuemax
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das `aria-valuemax` Attribut definiert den maximal zulässigen Wert für ein Bereichs-Widget.

## Beschreibung

Das `aria-valuemax` Attribut definiert den maximal zulässigen Wert für Bereichs-Widgets. Es ist dem `max` Attribut von {{HTMLElement('progress')}}, {{HTMLElement('meter')}} und {{HTMLElement('input')}} des Typs [`range`](/de/docs/Web/HTML/Element/input/range), [`number`](/de/docs/Web/HTML/Element/input/number) sowie aller Datum-Uhrzeit-Typen ähnlich.

Beim Erstellen einer Rollentyp-Bereichsrolle, einschließlich [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role), [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role) und [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role) auf einem nicht-semantischen Element, ermöglicht `aria-valuemax` die Definition eines Maximums, das größer als der Mindestwert ist und ist ein erforderliches Attribut von `slider`, `scrollbar` und `spinbutton`.

Die Deklaration von Mindest- und Höchstwerten ermöglicht es unterstützenden Technologien, die Größe des Bereichs den Benutzern zu vermitteln. Der Mindestwert wird mit [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) definiert.

> [!WARNING]
> Die [`range`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/range_role) Rolle selbst sollte **NICHT** verwendet werden, da es sich um eine ["abstrakte"](/de/docs/Web/Accessibility/ARIA/Reference/Roles#6._abstract_roles) Rolle handelt. Das `aria-valuemax` Attribut wird für alle Untertypen der Bereichsrollen verwendet.

## Beispiel

Der folgende Code zeigt einen einfachen Schieberegler mit einem maximalen Wert von 9.

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
  - : Die [`ariaValueMax`](/de/docs/Web/API/Element/ariaValueMax) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-valuemax` Attributs wider.
- [`ElementInternals.ariaValueMax`](/de/docs/Web/API/ElementInternals/ariaValueMax)
  - : Die [`ariaValueMax`](/de/docs/Web/API/ElementInternals/ariaValueMax) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-valuemax` Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role) (erforderlich)
- [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role) (erforderlich)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role) (erforderlich)

Geerbt in Rollen:

- [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
- [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`range` role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/range_role)
- [`<input type="range>` element `max` attribute](/de/docs/Web/HTML/Element/input/range#max)
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
