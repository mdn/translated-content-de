---
title: "BackgroundFetchRegistration: recordsAvailable-Eigenschaft"
short-title: recordsAvailable
slug: Web/API/BackgroundFetchRegistration/recordsAvailable
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die schreibgeschützte **`recordsAvailable`**-Eigenschaft des [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Interfaces gibt `true` zurück, wenn Anfragen und Antworten zugänglich sind. Wenn dies `false` zurückgibt, können [`match()`](/de/docs/Web/API/BackgroundFetchRegistration/match) und [`matchAll()`](/de/docs/Web/API/BackgroundFetchRegistration/matchAll) nicht verwendet werden.

## Wert

Ein {{jsxref("Boolean")}}.

## Beispiele

Das Protokollieren dieser Eigenschaft in die Konsole gibt `true` oder `false` zurück, um anzuzeigen, ob Datensätze vorhanden sind.

```js
console.log(bgFetch.recordsAvailable);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
