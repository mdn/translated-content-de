---
title: "BackgroundFetchManager: fetch()-Methode"
short-title: fetch()
slug: Web/API/BackgroundFetchManager/fetch
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`fetch()`**-Methode des {{domxref("BackgroundFetchManager")}}-Interfaces initiiert einen Hintergrund-Fetchvorgang, basierend auf einer oder mehreren URLs oder {{domxref("Request")}}-Objekten.

## Syntax

```js-nolint
fetch(id, requests)
fetch(id, requests, options)
```

### Parameter

- `id`
  - : Eine vom Entwickler definierte Kennung, die an die anderen Methoden übergeben werden kann, um die {{domxref("BackgroundFetchRegistration")}} für diesen Vorgang abzurufen.
- `requests`

  - : Ein `RequestInfo`-Objekt oder ein Array von `RequestInfo`-Objekten.

    Jedes `RequestInfo`-Objekt ist ein {{domxref("Request")}}-Objekt oder ein String, der als `input`-Argument an den {{domxref("Request.Request()", "Request()")}}-Konstruktor übergeben wird.

- `options` {{optional_inline}}

  - : Ein Objekt, das verwendet wird, um den Fortschrittsdialog des Fetches, den der Browser dem Benutzer anzeigt, individuell anzupassen. Es hat die folgenden Eigenschaften:

    - `title` {{optional_inline}}
      - : Ein String, der als Titel für den Fortschrittsdialog verwendet wird.
    - `icons` {{optional_inline}}
      - : Ein Array von Objekten, wobei jedes Objekt ein Icon darstellt, das der Browser für den Fortschrittsdialog verwenden kann. Jedes Objekt hat die folgenden Eigenschaften:
        - `src`
          - : Ein String, der eine URL zur Icon-Datei darstellt.
        - `sizes` {{optional_inline}}
          - : Ein String, der die Größen des Bildes repräsentiert, ausgedrückt mit derselben Syntax wie das `sizes`-Attribut des {{HTMLElement("link")}}-Elements.
        - `type` {{optional_inline}}
          - : Ein String, der den {{Glossary("MIME")}}-Typ des Icons darstellt.
        - `label` {{optional_inline}}
          - : Ein String, der den zugänglichen Namen des Icons darstellt.
    - `downloadTotal` {{optional_inline}}

      - : Eine Zahl, die die geschätzte Gesamtdownloadgröße in Bytes für den Fetchvorgang darstellt. Dies wird verwendet, um dem Benutzer zu zeigen, wie groß der Download ist und um den Benutzer über den Fortschritt des Downloads zu informieren.

        Sobald die Gesamtdownloadgröße `downloadTotal` überschreitet, wird der Fetch abgebrochen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{domxref("BackgroundFetchRegistration")}}-Objekt aufgelöst wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn keine Anfrage bereitgestellt wird, der Modus einer Anfrage `no-cors` ist, kein Service-Worker vorhanden ist, eine Anfrage mit der angeforderten `id` bereits existiert oder die Anfrage fehlschlägt.
- `AbortError` {{domxref("DOMException")}}
  - : Zeigt an, dass der Fetch abgebrochen wurde.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Zeigt an, dass die Benutzererlaubnis für Hintergrund-Fetches nicht erteilt wurde.
- `QuotaExceededError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das Speichern der Anfragen aufgrund des Überschreitens der [Speicherbeschränkung](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria) des Browsers fehlschlägt.

## Beispiele

Das folgende Beispiel zeigt, wie `fetch()` verwendet wird, um einen Hintergrund-Fetchvorgang zu initiieren. Mit einem aktiven
{{domxref('ServiceWorker', 'Service-Worker', "", "nocode")}} verwenden Sie die
{{domxref('ServiceWorkerRegistration.backgroundFetch')}}-Eigenschaft, um auf das
`BackgroundFetchManager`-Objekt zuzugreifen und dessen `fetch()`-Methode aufzurufen.

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
