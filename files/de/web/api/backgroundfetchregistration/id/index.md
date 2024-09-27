---
title: "BackgroundFetchRegistration: id-Eigenschaft"
short-title: id
slug: Web/API/BackgroundFetchRegistration/id
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`id`**-Schreibgeschützte Eigenschaft des [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Interfaces gibt eine Kopie der Hintergrundabholung-`ID` zurück.

## Wert

Ein String.

## Beispiele

Wenn dieser Teil im Konsolenprotokoll ausgegeben wird, wird die Kennung, die beim Registrieren des Abrufs festgelegt wurde, zurückgegeben. In diesem Fall `"my-fetch"`.

```js
console.log(bgFetch.id); // "my-fetch"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
