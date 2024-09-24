---
title: "ServiceWorkerRegistration: backgroundFetch-Eigenschaft"
short-title: backgroundFetch
slug: Web/API/ServiceWorkerRegistration/backgroundFetch
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`backgroundFetch`**-Eigenschaft des schreibgeschützten
{{domxref("ServiceWorkerRegistration")}}-Interfaces gibt eine Referenz zu einem
{{domxref("BackgroundFetchManager")}}-Objekt zurück, das genutzt werden kann, um Hintergrundabrufoperationen zu initiieren.

## Wert

Ein {{domxref("BackgroundFetchManager")}}-Objekt.

## Beispiele

### Einen Hintergrundabruf initiieren

Der folgende Code greift auf die `backgroundFetch`-Eigenschaft zu und verwendet sie, um eine Hintergrundabrufoperation zu initiieren.

```js
// main.js
async function requestBackgroundFetch(movieData) {
  const swRegistration = await navigator.serviceWorker.ready;
  const fetchRegistration = await swRegistration.backgroundFetch.fetch(
    "download-movie",
    ["/my-movie-part-1.webm", "/my-movie-part-2.webm"],
    {
      icons: movieIcons,
      title: "Downloading my movie",
      downloadTotal: 60 * 1024 * 1024,
      label: "Downloading a show",
    },
  );
  //...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
