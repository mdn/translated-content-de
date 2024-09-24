---
title: aria-valuetext
slug: Web/Accessibility/ARIA/Attributes/aria-valuetext
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Das Attribut `aria-valuetext` definiert den für Menschen lesbaren Textalternative von `aria-valuenow` für ein Bereichs-Widget.

## Beschreibung

Zahlen – selbst Prozentsätze – sind nicht immer benutzerfreundlich. Unterstützende Technologien präsentieren [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) als numerische Werte. Wenn eine Fortschrittsleiste bei 8 % ist, was bedeutet das? `aria-valuetext` bietet eine Möglichkeit, den aktuellen Wert auf eine benutzerfreundlichere, für Menschen verständliche Weise darzustellen. Zum Beispiel könnte ein Batteriemesserwert als `aria-valuetext="8% (34 Minuten) verbleibend"` angezeigt werden.

Das Attribut `aria-valuetext` wird zusammen mit dem Attribut `aria-valuenow` verwendet, nicht stattdessen, es sei denn, dieser Wert ist nicht bekannt.

`aria-valuetext` wird nur benötigt, wenn der numerische Wert von `aria-valuenow` nicht aussagekräftig ist. Zum Beispiel sind die Werte eines Bereichs numerisch, können jedoch für nicht-numerische Werte, wie das Studienjahr einer Hochschule, verwendet werden. Die Werte von `aria-valuenow` für ein vierjähriges College könnten von 1 bis 4 reichen, die die Position jedes Wertes im Wertebereich angeben. In diesem Fall könnte `aria-valuetext` einer der folgenden Zeichenfolgen sein: "erstes Jahr", "zweites Jahr", "drittes Jahr" und "letztes Jahr".

Wenn der numerische Wert aussagekräftig ist, wie bei einem Drehknopf mit `aria-valuenow="3"` für die Anzahl der Pizzastücke, die Sie bestellen möchten, ist `aria-valuetext` nicht erforderlich.

Wenn sowohl `aria-valuetext` als auch `aria-valuenow` enthalten sind, wird `aria-valuetext` angesagt. Wenn kein `aria-valuetext` Attribut vorhanden ist, werden unterstützende Technologien das `aria-valuenow` Attribut für den aktuellen Wert ansagen.

## Werte

- `<string>`
  - : Eine für Menschen lesbare Textalternative des `aria-valuenow` Wertes.

## Zugehörige Schnittstellen

- {{domxref("Element.ariaValueText")}}
  - : Die [`ariaValueText`](/de/docs/Web/API/Element/ariaValueText) Eigenschaft, die Teil der {{domxref("Element")}} Schnittstelle ist, spiegelt den Wert des `aria-valuetext` Attributs wider.
- {{domxref("ElementInternals.ariaValueText")}}
  - : Die [`ariaValueText`](/de/docs/Web/API/ElementInternals/ariaValueText) Eigenschaft, die Teil der {{domxref("ElementInternals")}} Schnittstelle ist, spiegelt den Wert des `aria-valuetext` Attributs wider.

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
