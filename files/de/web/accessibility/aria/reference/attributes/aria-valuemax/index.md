---
title: "ARIA: Attribut aria-valuemax"
short-title: aria-valuemax
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das Attribut `aria-valuemax` definiert den maximal zulässigen Wert für ein Range-Widget.

## Beschreibung

Das Attribut `aria-valuemax` definiert den maximal zulässigen Wert für Range-Widgets. Es ist ähnlich dem `max`-Attribut von {{HTMLElement('progress')}}, {{HTMLElement('meter')}}, und {{HTMLElement('input')}} des Typs [`range`](/de/docs/Web/HTML/Reference/Elements/input/range), [`number`](/de/docs/Web/HTML/Reference/Elements/input/number) und allen Datums-Zeit-Typen.

Beim Erstellen einer Rolle vom Typ Range, einschließlich [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role), [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role), und [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role) auf einem nicht-semantischen Element ermöglicht `aria-valuemax` das Definieren eines Maximums, das größer als der Mindestwert ist, und ist ein erforderliches Attribut von `slider`, `scrollbar` und `spinbutton`.

Das Deklarieren von Mindest- und Höchstwerten erlaubt assistiven Technologien, die Größe des Bereichs den Benutzern zu vermitteln. Der Mindestwert wird mit [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) definiert.

> [!WARNING]
> Die Rolle [`range`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/range_role) selbst sollte **NICHT** verwendet werden, da sie eine ["abstrakte Rolle"](/de/docs/Web/Accessibility/ARIA/Reference/Roles#6._abstract_roles) ist. Das Attribut `aria-valuemax` wird auf allen Subtypen der Range-Rollen verwendet.

## Beispiel

Der untenstehende Code zeigt einen Schieberegler mit einem Maximalwert von 9.

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
  - : Eine ganze oder Dezimalzahl, die größer ist als der Mindestwert.

## Zugehörige Schnittstellen

- [`Element.ariaValueMax`](/de/docs/Web/API/Element/ariaValueMax)
  - : Die [`ariaValueMax`](/de/docs/Web/API/Element/ariaValueMax)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-valuemax`-Attributs wider.
- [`ElementInternals.ariaValueMax`](/de/docs/Web/API/ElementInternals/ariaValueMax)
  - : Die [`ariaValueMax`](/de/docs/Web/API/ElementInternals/ariaValueMax)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-valuemax`-Attributs wider.

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
- [`<input type="range>`-Element `max`-Attribut](/de/docs/Web/HTML/Reference/Elements/input/range#max)
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
