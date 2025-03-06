---
title: aria-valuetext
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das `aria-valuetext` Attribut definiert den lesbaren Text, der als Alternative zu `aria-valuenow` für ein Bereichs-Widget dient.

## Beschreibung

Zahlen – sogar Prozentsätze – sind nicht immer benutzerfreundlich. Unterstützende Technologien stellen [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) als numerische Werte dar. Wenn eine Fortschrittsanzeige bei 8% ist, was bedeutet das? `aria-valuetext` bietet eine Möglichkeit, den aktuellen Wert auf eine benutzerfreundlichere und verständlichere Weise darzustellen. Zum Beispiel könnte ein Wert eines Batterieanzeigers als `aria-valuetext="8% (34 Minuten) verbleibend"` angezeigt werden.

Das `aria-valuetext` Attribut wird zusammen mit dem `aria-valuenow` Attribut verwendet, nicht anstelle davon, es sei denn, dieser Wert ist nicht bekannt.

`aria-valuetext` ist nur erforderlich, wenn der numerische Wert von `aria-valuenow` nicht aussagekräftig ist. Zum Beispiel sind die Werte eines Bereichs numerisch, können aber für nicht numerische Werte wie das Niveau einer Universitätsklasse verwendet werden. Die Werte von `aria-valuenow` für ein 4-jähriges Hochschulstudium könnten von 1 bis 4 reichen, was die Position jedes Werts im Werteraum anzeigt. In diesem Fall könnte der `aria-valuetext` einer der Strings sein: "erstes Jahr", "zweites Jahr", "drittes Jahr" und "viertes Jahr".

Wenn der numerische Wert aussagekräftig ist, wie bei einem Spinner mit `aria-valuenow="3"`, um die Anzahl der Pizzastücke zu bestellen, wird `aria-valuetext` nicht benötigt.

Sind sowohl `aria-valuetext` als auch `aria-valuenow` vorhanden, wird `aria-valuetext` angesagt. Befindet sich kein `aria-valuetext` Attribut, so kündigen unterstützende Technologien das `aria-valuenow` Attribut für den aktuellen Wert an.

## Werte

- `<string>`
  - : Ein lesbarer Text als Alternative zum `aria-valuenow` Wert.

## Zugehörige Schnittstellen

- [`Element.ariaValueText`](/de/docs/Web/API/Element/ariaValueText)
  - : Die [`ariaValueText`](/de/docs/Web/API/Element/ariaValueText) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-valuetext` Attributs wider.
- [`ElementInternals.ariaValueText`](/de/docs/Web/API/ElementInternals/ariaValueText)
  - : Die [`ariaValueText`](/de/docs/Web/API/ElementInternals/ariaValueText) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-valuetext` Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`range`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/range_role)
- [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
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

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
