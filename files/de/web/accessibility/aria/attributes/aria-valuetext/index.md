---
title: aria-valuetext
slug: Web/Accessibility/ARIA/Attributes/aria-valuetext
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das `aria-valuetext`-Attribut definiert den für Menschen lesbaren Text als Alternative zu `aria-valuenow` für ein Bereichs-Widget.

## Beschreibung

Zahlen — selbst Prozentsätze — sind nicht immer benutzerfreundlich. Unterstützende Technologien präsentieren [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) als numerische Werte. Wenn eine Fortschrittsanzeige bei 8% steht, was bedeutet das? `aria-valuetext` bietet eine Möglichkeit, den aktuellen Wert in einer benutzerfreundlicheren, für Menschen verständlichen Weise darzustellen. Beispielsweise könnte ein Batteriemesserwert als `aria-valuetext="8% (34 Minuten) verbleibend"` vermittelt werden.

Das `aria-valuetext`-Attribut wird zusammen mit dem `aria-valuenow`-Attribut verwendet, nicht an seiner Stelle, es sei denn, dieser Wert ist nicht bekannt.

`aria-valuetext` ist nur dann nötig, wenn der Zahlenwert von `aria-valuenow` nicht aussagekräftig ist. Zum Beispiel sind die Werte eines Bereichs zwar numerisch, können aber für nicht-numerische Werte verwendet werden, wie etwa für das Level eines Universitätskurses. Die Werte von `aria-valuenow` für eine vierjährige Universität könnten von 1 bis 4 reichen und die Position jedes Wertes im Wertebereich kennzeichnen. In diesem Fall könnte das `aria-valuetext` einer der folgenden Strings sein: "erstes Jahr", "zweites Jahr", "drittes Jahr" und "viertes Jahr".

Wenn der Zahlenwert aussagekräftig ist, wie bei einem Drehknopf mit `aria-valuenow="3"` für die Anzahl der Pizzastücke, die Sie bestellen möchten, ist `aria-valuetext` nicht erforderlich.

Wenn sowohl `aria-valuetext` als auch `aria-valuenow` enthalten sind, wird das `aria-valuetext` angesagt. Wenn kein `aria-valuetext`-Attribut vorhanden ist, wird die unterstützende Technologie das `aria-valuenow`-Attribut für den aktuellen Wert ankündigen.

## Werte

- `<string>`
  - : Eine für Menschen lesbare Textalternative zum Wert von `aria-valuenow`.

## Zugehörige Schnittstellen

- [`Element.ariaValueText`](/de/docs/Web/API/Element/ariaValueText)
  - : Die [`ariaValueText`](/de/docs/Web/API/Element/ariaValueText)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-valuetext`-Attributs wider.
- [`ElementInternals.ariaValueText`](/de/docs/Web/API/ElementInternals/ariaValueText)
  - : Die [`ariaValueText`](/de/docs/Web/API/ElementInternals/ariaValueText)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-valuetext`-Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`range`](/de/docs/Web/Accessibility/ARIA/Roles/range_role)
- [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role)
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

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)
