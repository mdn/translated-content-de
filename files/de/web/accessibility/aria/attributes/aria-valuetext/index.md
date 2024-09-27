---
title: aria-valuetext
slug: Web/Accessibility/ARIA/Attributes/aria-valuetext
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das Attribut `aria-valuetext` definiert den menschenlesbaren Text als Alternative zu `aria-valuenow` für ein Bereichs-Widget.

## Beschreibung

Zahlen – selbst Prozentsätze – sind nicht immer benutzerfreundlich. Assistive Technologien präsentieren [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) als numerische Werte. Wenn eine Fortschrittsleiste bei 8 % steht, was bedeutet das? `aria-valuetext` bietet eine Möglichkeit, den aktuellen Wert verständlicher und benutzerfreundlicher darzustellen. Beispielsweise könnte der Wert eines Batteriemessgeräts als `aria-valuetext="8% (34 Minuten) verbleibend"` vermittelt werden.

Das Attribut `aria-valuetext` wird zusammen mit dem Attribut `aria-valuenow` verwendet, nicht an seiner Stelle, es sei denn, dieser Wert ist nicht bekannt.

`aria-valuetext` ist nur erforderlich, wenn der numerische Wert von `aria-valuenow` nicht sinnvoll ist. Zum Beispiel sind die Werte eines Bereichs numerisch, können jedoch für nicht-numerische Werte wie die College-Jahresstufe verwendet werden. Die Werte von `aria-valuenow` für ein vierjähriges College könnten von 1 bis 4 reichen, was die Position jedes Wertes im Wertebereich anzeigt. In diesem Fall könnte `aria-valuetext` einer der folgenden Strings sein: "erstes Jahr", "zweites Jahr", "drittes Jahr" und "viertes Jahr".

Wenn der numerische Wert sinnvoll ist, wie etwa ein Drehregler mit `aria-valuenow="3"` für die Anzahl der Pizzastücke, die Sie bestellen möchten, wird `aria-valuetext` nicht benötigt.

Wenn sowohl `aria-valuetext` als auch `aria-valuenow` enthalten sind, wird `aria-valuetext` angekündigt. Wenn kein `aria-valuetext`-Attribut vorhanden ist, kündigen assistive Technologien das `aria-valuenow`-Attribut für den aktuellen Wert an.

## Werte

- `<string>`
  - : Eine menschenlesbare Textalternative zu dem Wert von `aria-valuenow`.

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

Vererbt in Rollen:

- [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role)
- [`progressbar`](/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role)
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)
