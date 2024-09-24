---
title: BackgroundFetchManager
slug: Web/API/BackgroundFetchManager
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Das **`BackgroundFetchManager`**-Interface der {{domxref('Background Fetch API','','',' ')}} ist eine Map, bei der die Schlüssel Hintergrundabruf-IDs und die Werte {{domxref("BackgroundFetchRegistration")}}-Objekte sind.

## Instanz-Eigenschaften

Keine.

## Instanz-Methoden

- {{domxref('BackgroundFetchManager.fetch','fetch()' )}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem {{domxref("BackgroundFetchRegistration")}}-Objekt für ein bereitgestelltes Array von URLs und {{domxref("Request")}}-Objekten aufgelöst wird.
- {{domxref('BackgroundFetchManager.get','get()')}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit der {{domxref("BackgroundFetchRegistration")}} aufgelöst wird, die mit der angegebenen `id` verbunden ist, oder mit {{jsxref("undefined")}}, wenn die `id` nicht gefunden wird.
- {{domxref('BackgroundFetchManager.getIds','getIds()')}} {{Experimental_Inline}}
  - : Gibt die IDs aller registrierten Hintergrundabrufe zurück.

## Beispiele

Das folgende Beispiel zeigt, wie man eine Instanz von `BackgroundFetchManager` aus einem {{domxref("ServiceWorkerRegistration")}}-Objekt erhält und `fetch()` aufruft, um eine Audiodatei im Hintergrund herunterzuladen.

```js
navigator.serviceWorker.ready.then(async (swReg) => {
  const bgFetch = await swReg.backgroundFetch.fetch(
    "my-fetch",
    ["/ep-5.mp3", "ep-5-artwork.jpg"],
    {
      title: "Episode 5: Interesting things.",
      icons: [
        {
          sizes: "300x300",
          src: "/ep-5-icon.png",
          type: "image/png",
        },
      ],
      downloadTotal: 60 * 1024 * 1024,
    },
  );
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
