---
title: "BackgroundFetchRegistration: id-Eigenschaft"
short-title: id
slug: Web/API/BackgroundFetchRegistration/id
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`id`**-Schreibgeschützte Eigenschaft des [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Interfaces gibt eine Kopie der `ID` des Hintergrundabholens zurück.

## Wert

Ein String.

## Beispiele

Wenn dieser Teil in die Konsole protokolliert wird, wird die beim Registrieren des Abrufs gesetzte Kennung zurückgegeben. In diesem Fall `"my-fetch"`.

```js
console.log(bgFetch.id); // "my-fetch"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
