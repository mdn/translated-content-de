---
title: "BackgroundFetchRecord: responseReady-Eigenschaft"
short-title: responseReady
slug: Web/API/BackgroundFetchRecord/responseReady
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die schreibgeschützte **`responseReady`**-Eigenschaft der [`BackgroundFetchRecord`](/de/docs/Web/API/BackgroundFetchRecord)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einer [`Response`](/de/docs/Web/API/Response) aufgelöst wird.

## Wert

Ein {{jsxref("Promise")}}, das mit einer [`Response`](/de/docs/Web/API/Response) aufgelöst wird.

## Beispiele

In diesem Beispiel wird ein einzelnes `BackgroundFetchRecord` mit [`BackgroundFetchManager.fetch()`](/de/docs/Web/API/BackgroundFetchManager/fetch) zurückgegeben. Der Wert von `responseReady` wird zurückgegeben und in der Konsole protokolliert.

```js
bgFetch.match("/ep-5.mp3").then(async (record) => {
  if (!record) {
    console.log("No record found");
    return;
  }

  const response = await record.responseReady;
  console.log(`Here's the response`, response);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
