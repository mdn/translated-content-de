---
title: "HTMLTimeElement: dateTime-Eigenschaft"
short-title: dateTime
slug: Web/API/HTMLTimeElement/dateTime
l10n:
  sourceCommit: 835c199410845eed61aaf8439cb2e9719e7e9f98
---

{{ APIRef("HTML DOM") }}

Die
**`HTMLTimeElement.dateTime`**
Eigenschaft ist ein String, der das [`datetime`](/de/docs/Web/HTML/Element/time#datetime) HTML-Attribut widerspiegelt und eine maschinenlesbare Form des Datums- und Zeitwerts des Elements enthält.

## Wert

Ein String. Für gültige String-Formate sehen Sie die [`datetime` gültige Werte](/de/docs/Web/HTML/Element/time#valid_datetime_values).

## Beispiele

```js
// Es wird davon ausgegangen, dass es ein <time id="t"> Element im HTML gibt

const t = document.getElementById("t");
t.dateTime = "6w 5h 34m 5s";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das zurgehörige {{domxref("HTMLTimeElement")}} Interface.
