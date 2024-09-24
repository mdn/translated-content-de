---
title: aria-valuemin
slug: Web/Accessibility/ARIA/Attributes/aria-valuemin
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das Attribut `aria-valuemin` definiert den minimal zulässigen Wert für ein Bereichs-Widget.

## Beschreibung

Das Attribut `aria-valuemin` definiert den minimal zulässigen Wert für Bereichs-Widgets. Es ist vergleichbar mit dem `min`-Attribut von {{HTMLElement('progress')}}, {{HTMLElement('meter')}} und {{HTMLElement('input')}} des Typs [`range`](/de/docs/Web/HTML/Element/input/range), [`number`](/de/docs/Web/HTML/Element/input/number) und allen Datums-Zeit-Typen.

Beim Erstellen einer Bereichsrolle, einschließlich [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role), [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role) und [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role) auf einem nicht-semantischen Element, ermöglicht `aria-valuemin` die Definition eines Minimums, das kleiner als der Maximalwert ist. Es ist ein erforderliches Attribut für `slider`, `scrollbar` und `spinbutton`.

Die Angabe der minimalen und maximalen Werte ermöglicht es unterstützenden Technologien, die Größe des Bereichs den Nutzern zu übermitteln.

Der Maximalwert wird mit [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) definiert.

> [!WARNING]
> Die Rolle [`range`](/de/docs/Web/Accessibility/ARIA/Roles/range_role) selbst sollte **NICHT** verwendet werden, da sie ["abstrakt"](/de/docs/Web/Accessibility/ARIA/Roles#6._abstract_roles) ist. Das Attribut `aria-valuemin` wird in allen Untertypen der Bereichsrollen verwendet.

## Werte

- `<number>`
  - : Eine Dezimalzahl, unterhalb des Maximalwerts.

## Zugehörige Schnittstellen

- {{domxref("Element.ariaValueMin")}}
  - : Die Eigenschaft [`ariaValueMin`](/de/docs/Web/API/Element/ariaValueMin), Teil der {{domxref("Element")}}-Schnittstelle, spiegelt den Wert des `aria-valuemin`-Attributs wider.
- {{domxref("ElementInternals.ariaValueMin")}}
  - : Die Eigenschaft [`ariaValueMin`](/de/docs/Web/API/ElementInternals/ariaValueMin), Teil der {{domxref("ElementInternals")}}-Schnittstelle, spiegelt den Wert des `aria-valuemin`-Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role)
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
- [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)

Geerbt in Rollen:

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
