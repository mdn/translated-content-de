---
title: "BackgroundFetchRecord: request-Eigenschaft"
short-title: request
slug: Web/API/BackgroundFetchRecord/request
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die schreibgeschützte **`request`**-Eigenschaft der {{domxref("BackgroundFetchRecord")}}-Schnittstelle gibt die Details der zu holenden Ressource zurück.

## Wert

Ein {{domxref("Request")}}.

## Beispiele

In diesem Beispiel wird ein einzelnes `BackgroundFetchRecord` mit {{domxref("BackgroundFetchManager.fetch()","BackgroundFetchManager.fetch()")}} zurückgegeben. Der `request` wird zurückgegeben und in der Konsole protokolliert.

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

## Kompatibilität der Browser

{{Compat}}
