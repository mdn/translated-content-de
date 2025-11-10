---
title: "ARIA: aria-valuetext-Attribut"
short-title: aria-valuetext
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das `aria-valuetext`-Attribut definiert den menschenlesbaren Text als Alternative zu `aria-valuenow` für ein Bereichs-Widget.

## Beschreibung

Zahlen – selbst Prozentangaben – sind nicht immer benutzerfreundlich. Unterstützungstechnologien präsentieren [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) als numerische Werte. Wenn eine Fortschrittsanzeige bei 8% steht, was bedeutet das? `aria-valuetext` bietet eine Möglichkeit, den aktuellen Wert auf eine benutzerfreundlichere, für Menschen verständliche Weise darzustellen. Zum Beispiel könnte ein Batteriemeterwert als `aria-valuetext="8% (noch 34 Minuten)"` angegeben werden.

Das `aria-valuetext`-Attribut wird zusammen mit dem `aria-valuenow`-Attribut verwendet, nicht an dessen Stelle, es sei denn, dieser Wert ist nicht bekannt.

`aria-valuetext` wird nur benötigt, wenn der numerische Wert von `aria-valuenow` nicht aussagekräftig ist. Zum Beispiel sind die Werte eines Bereichs numerisch, können jedoch für nicht-numerische Werte verwendet werden, wie z. B. die College-Klassenstufe. Die Werte von `aria-valuenow` für ein vierjähriges College könnten von 1 bis 4 reichen, was die Position jedes Wertes im Wertbereich angibt. In diesem Fall könnte das `aria-valuetext` einer der folgenden Zeichenfolgen sein: "Erstes Jahr", "Sophomore", "Junior" und "Senior".

Wenn der numerische Wert aussagekräftig ist, wie z. B. ein Spinner mit `aria-valuenow="3"` für die Anzahl an Pizzastücken, die Sie bestellen möchten, ist `aria-valuetext` nicht erforderlich.

Wenn sowohl `aria-valuetext` als auch `aria-valuenow` enthalten sind, wird das `aria-valuetext` angesagt. Wenn kein `aria-valuetext`-Attribut vorhanden ist, werden die Unterstützungstechnologien das `aria-valuenow`-Attribut für den aktuellen Wert ansagen.

## Werte

- `<string>`
  - : Eine menschenlesbare Textalternative zum `aria-valuenow`-Wert.

## Zugehörige Schnittstellen

- [`Element.ariaValueText`](/de/docs/Web/API/Element/ariaValueText)
  - : Die [`ariaValueText`](/de/docs/Web/API/Element/ariaValueText)-Eigenschaft, die Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle ist, spiegelt den Wert des `aria-valuetext`-Attributs wider.
- [`ElementInternals.ariaValueText`](/de/docs/Web/API/ElementInternals/ariaValueText)
  - : Die [`ariaValueText`](/de/docs/Web/API/ElementInternals/ariaValueText)-Eigenschaft, die Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle ist, spiegelt den Wert des `aria-valuetext`-Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`range`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/range_role)
- [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)

Vererbt in Rollen:

- [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
- [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
