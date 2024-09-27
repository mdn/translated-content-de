---
title: "BackgroundFetchRecord: request-Eigenschaft"
short-title: request
slug: Web/API/BackgroundFetchRecord/request
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`request`**-Eigenschaft der [`BackgroundFetchRecord`](/de/docs/Web/API/BackgroundFetchRecord)-Schnittstelle (nur lesbar) gibt die Details der abzurufenden Ressource zurück.

## Wert

Ein [`Request`](/de/docs/Web/API/Request).

## Beispiele

In diesem Beispiel wird ein einzelnes `BackgroundFetchRecord` mit [`BackgroundFetchManager.fetch()`](/de/docs/Web/API/BackgroundFetchManager/fetch) zurückgegeben. Der `request` wird abgerufen und in der Konsole protokolliert.

```js
bgFetch.match("/ep-5.mp3").then(async (record) => {
  if (!record) {
    console.log("No record found");
    return;
  }

  console.log(`Here's the request`, record.request);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
