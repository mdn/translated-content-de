---
title: "BackgroundFetchManager: fetch() Methode"
short-title: fetch()
slug: Web/API/BackgroundFetchManager/fetch
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`fetch()`** Methode des [`BackgroundFetchManager`](/de/docs/Web/API/BackgroundFetchManager) Interface initiiert eine Hintergrund-Fetch-Operation, basierend auf einer oder mehreren URLs oder [`Request`](/de/docs/Web/API/Request) Objekten.

## Syntax

```js-nolint
fetch(id, requests)
fetch(id, requests, options)
```

### Parameter

- `id`
  - : Eine vom Entwickler definierte Kennung, die an andere Methoden übergeben werden kann, um die [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration) für diese Operation abzurufen.
- `requests`

  - : Ein `RequestInfo` Objekt oder ein Array von `RequestInfo` Objekten.

    Jedes `RequestInfo` Objekt ist ein [`Request`](/de/docs/Web/API/Request) Objekt oder ein String, der als `input` Argument an den [`Request()`](/de/docs/Web/API/Request/Request) Konstruktor übergeben wird.

- `options` {{optional_inline}}

  - : Ein Objekt, das verwendet wird, um den Fortschrittsdialog des Fetch-Vorgangs zu gestalten, den der Browser dem Benutzer anzeigt. Es hat folgende Eigenschaften:

    - `title` {{optional_inline}}
      - : Ein String, der als Titel für den Fortschrittsdialog verwendet wird.
    - `icons` {{optional_inline}}
      - : Ein Array von Objekten, die jeweils ein Symbol darstellen, das der Browser für den Fortschrittsdialog verwenden kann. Jedes Objekt hat folgende Eigenschaften:
        - `src`
          - : Ein String, der eine URL zur Symbol-Datei darstellt.
        - `sizes` {{optional_inline}}
          - : Ein String, der die Größen des Bildes darstellt, ausgedrückt mit derselben Syntax wie das `sizes` Attribut des {{HTMLElement("link")}} Elements.
        - `type` {{optional_inline}}
          - : Ein String, der den {{Glossary("MIME", "MIME")}} Typ des Symbols darstellt.
        - `label` {{optional_inline}}
          - : Ein String, der den zugänglichen Namen des Symbols darstellt.
    - `downloadTotal` {{optional_inline}}

      - : Eine Zahl, die die geschätzte Gesamtdownloadgröße in Bytes für den Fetch-Vorgang darstellt. Diese wird verwendet, um dem Benutzer die Größe des Downloads anzuzeigen und den Fortschritt des Downloads darzustellen.

        Sobald die gesamte Downloadgröße `downloadTotal` übersteigt, wird der Fetch abgebrochen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration) Objekt aufgelöst wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn keine Anfrage bereitgestellt wird, wenn der Modus einer Anfrage `no-cors` ist, wenn kein Service-Worker vorhanden ist, wenn bereits eine Anfrage mit der angeforderten `id` existiert oder wenn die Anfrage fehlschlägt.
- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Gibt an, dass der Fetch abgebrochen wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Gibt an, dass die Benutzererlaubnis zum Durchführen von Hintergrund-Fetches nicht erteilt wurde.
- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Speicherung von Anfragen aufgrund der Überschreitung des [Speicherlimits](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria) des Browsers fehlschlägt.

## Beispiele

Das folgende Beispiel zeigt, wie `fetch()` verwendet wird, um eine Hintergrund-Fetch-Operation zu initiieren. Mit einem aktiven [Service Worker](/de/docs/Web/API/ServiceWorker) verwenden Sie die [`ServiceWorkerRegistration.backgroundFetch`](/de/docs/Web/API/ServiceWorkerRegistration/backgroundFetch) Eigenschaft, um auf das `BackgroundFetchManager` Objekt zuzugreifen und dessen `fetch()` Methode aufzurufen.

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
          label: "Downloading a show",
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
