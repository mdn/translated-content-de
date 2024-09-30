---
title: "BackgroundFetchRegistration: recordsAvailable-Eigenschaft"
short-title: recordsAvailable
slug: Web/API/BackgroundFetchRegistration/recordsAvailable
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die schreibgeschützte **`recordsAvailable`**-Eigenschaft der [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Schnittstelle gibt `true` zurück, wenn Anfragen und Antworten zum Abrufen verfügbar sind. Wenn dies `false` zurückgibt, können [`match()`](/de/docs/Web/API/BackgroundFetchRegistration/match) und [`matchAll()`](/de/docs/Web/API/BackgroundFetchRegistration/matchAll) nicht verwendet werden.

## Wert

Ein {{jsxref("boolean")}}.

## Beispiele

Das Protokollieren dieser Eigenschaft in der Konsole gibt `true` oder `false` zurück, um anzuzeigen, ob Datensätze verfügbar sind.

```js
console.log(bgFetch.recordsAvailable);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
