---
title: "HTMLTimeElement: dateTime-Eigenschaft"
short-title: dateTime
slug: Web/API/HTMLTimeElement/dateTime
l10n:
  sourceCommit: 51caa17b040ab8c591d1c9e38ff9c859935b8fbe
---

{{ APIRef("HTML DOM") }}

Die
**`dateTime`**
Eigenschaft des [`HTMLTimeElement`](/de/docs/Web/API/HTMLTimeElement) Interfaces ist ein String, der das [`datetime`](/de/docs/Web/HTML/Element/time#datetime) HTML-Attribut widerspiegelt und eine maschinenlesbare Form des Datums und Zeitwertes des Elements enthält.

## Wert

Ein String. Für gültige String-Formate siehe die [`datetime` gültige Werte](/de/docs/Web/HTML/Element/time#valid_datetime_values).

## Beispiele

```js
// Assumes there is <time id="t"> element in the HTML

const t = document.getElementById("t");
t.dateTime = "6w 5h 34m 5s";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTimeElement`](/de/docs/Web/API/HTMLTimeElement)
- [`HTMLModElement.dateTime`](/de/docs/Web/API/HTMLModElement/dateTime)
- [Datumsstrings](/de/docs/Web/HTML/Date_and_time_formats#date_strings)
- [Lokale Datums- und Zeitstrings](/de/docs/Web/HTML/Date_and_time_formats#local_date_and_time_strings)
