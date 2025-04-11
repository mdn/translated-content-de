---
title: "HTMLTimeElement: dateTime-Eigenschaft"
short-title: dateTime
slug: Web/API/HTMLTimeElement/dateTime
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`dateTime`**-Eigenschaft der [`HTMLTimeElement`](/de/docs/Web/API/HTMLTimeElement)-Schnittstelle ist ein Zeichenfolgenwert, der das HTML-Attribut [`datetime`](/de/docs/Web/HTML/Reference/Elements/time#datetime) widerspiegelt und eine maschinenlesbare Form des Datums- und Zeitwerts des Elements enthält.

## Wert

Eine Zeichenfolge. Für gültige Zeichenfolgenformate siehe die [gültigen Werte für `datetime`](/de/docs/Web/HTML/Reference/Elements/time#valid_datetime_values).

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
- [Datumzeichenfolgen](/de/docs/Web/HTML/Guides/Date_and_time_formats#date_strings)
- [Lokale Datums- und Zeitzeichenfolgen](/de/docs/Web/HTML/Guides/Date_and_time_formats#local_date_and_time_strings)
