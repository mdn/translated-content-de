---
title: BackgroundFetchManager
slug: Web/API/BackgroundFetchManager
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`BackgroundFetchManager`**-Schnittstelle der [Background Fetch API](/de/docs/Web/API/Background_Fetch_API) ist eine Map, bei der die Schlüssel Hintergrundabruff-IDs und die Werte [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Objekte sind.

## Instanz-Eigenschaften

Keine.

## Instanz-Methoden

- [`fetch()`](/de/docs/Web/API/BackgroundFetchManager/fetch) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Objekt für ein bereitgestelltes Array von URLs und [`Request`](/de/docs/Web/API/Request)-Objekten aufgelöst wird.
- [`get()`](/de/docs/Web/API/BackgroundFetchManager/get) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit der [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration) aufgelöst wird, die der bereitgestellten `id` zugeordnet ist, oder mit {{jsxref("undefined")}}, wenn die `id` nicht gefunden wird.
- [`getIds()`](/de/docs/Web/API/BackgroundFetchManager/getIds) {{Experimental_Inline}}
  - : Gibt die IDs aller registrierten Hintergrundabrufe zurück.

## Beispiele

Das folgende Beispiel zeigt, wie Sie eine Instanz von `BackgroundFetchManager` von einem [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekt erhalten und `fetch()` aufrufen, um eine Audiodatei im Hintergrund herunterzuladen.

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
