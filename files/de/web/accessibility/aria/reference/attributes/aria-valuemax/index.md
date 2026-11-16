---
title: "ARIA: aria-valuemax-Attribut"
short-title: aria-valuemax
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax
l10n:
  sourceCommit: d9e522ed63f204df4b9ab3ed6c8208ce089fa868
---

Das Attribut `aria-valuemax` definiert den maximal zulässigen Wert für ein Bereichs-Widget.

## Beschreibung

Das Attribut `aria-valuemax` definiert den maximal zulässigen Wert für Bereichs-Widgets. Es ähnelt dem Attribut `max` von {{HTMLElement('progress')}}, {{HTMLElement('meter')}} und {{HTMLElement('input')}} mit den Typen [`range`](/de/docs/Web/HTML/Reference/Elements/input/range), [`number`](/de/docs/Web/HTML/Reference/Elements/input/number) sowie allen Datums- und Uhrzeittypen.

Wenn Sie einem nicht-semantischen Element eine Rolle für einen Wertebereich zuweisen, etwa [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role), [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role) oder [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role), können Sie mit `aria-valuemax` einen Maximalwert festlegen, der größer als der Minimalwert ist. Für `slider`, `scrollbar` und `spinbutton` ist das Attribut erforderlich.

Durch die Angabe von Minimal- und Maximalwert können unterstützende Technologien Nutzern den Umfang des Wertebereichs vermitteln. Der Minimalwert wird mit [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) definiert.

> [!WARNING]
> Die Rolle [`range`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/range_role) selbst sollte **NICHT** verwendet werden, da sie [„abstrakt“](/de/docs/Web/Accessibility/ARIA/Reference/Roles#6._abstract_roles) ist. Das Attribut `aria-valuemax` wird bei allen Untertypen der Bereichsrollen verwendet.

## Werte

- `<number>`
  - : Eine ganze Zahl oder Dezimalzahl, die größer als der Minimalwert ist.

## Zugehörige Schnittstellen

- [`Element.ariaValueMax`](/de/docs/Web/API/Element/ariaValueMax)
  - : Die Eigenschaft [`ariaValueMax`](/de/docs/Web/API/Element/ariaValueMax) der Schnittstelle [`Element`](/de/docs/Web/API/Element) spiegelt den Wert des Attributs `aria-valuemax` wider.
- [`ElementInternals.ariaValueMax`](/de/docs/Web/API/ElementInternals/ariaValueMax)
  - : Die Eigenschaft [`ariaValueMax`](/de/docs/Web/API/ElementInternals/ariaValueMax) der Schnittstelle [`ElementInternals`](/de/docs/Web/API/ElementInternals) spiegelt den Wert des Attributs `aria-valuemax` wider.

## Zugehörige Rollen

Wird in folgenden Rollen verwendet:

- [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role) (erforderlich)
- [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role) (erforderlich)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role) (erforderlich)

Wird an folgende Rollen vererbt:

- [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
- [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)

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

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Rolle `range`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/range_role)
- [Attribut `max` des Elements `<input type="range>`](/de/docs/Web/HTML/Reference/Elements/input/range#max)
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
