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
Eigenschaft ist ein String, der das [`datetime`](/de/docs/Web/HTML/Element/time#datetime) HTML-Attribut widerspiegelt und eine maschinenlesbare Form des Datums- und
Uhrzeitwerts des Elements enthält.

## Wert

Ein String. Für gültige String-Formate siehe die [`datetime`](/de/docs/Web/HTML/Element/time#valid_datetime_values) gültigen Werte.

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

- Das [`HTMLTimeElement`](/de/docs/Web/API/HTMLTimeElement) Interface, zu dem es gehört.
