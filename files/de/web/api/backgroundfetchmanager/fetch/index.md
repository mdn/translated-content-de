---
title: "BackgroundFetchManager: fetch()-Methode"
short-title: fetch()
slug: Web/API/BackgroundFetchManager/fetch
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`fetch()`** Methode der Schnittstelle [`BackgroundFetchManager`](/de/docs/Web/API/BackgroundFetchManager) startet einen Hintergrundabrufvorgang, gegebenenfalls mit einer oder mehreren URLs oder [`Request`](/de/docs/Web/API/Request)-Objekten.

## Syntax

```js-nolint
fetch(id, requests)
fetch(id, requests, options)
```

### Parameter

- `id`
  - : Ein vom Entwickler definierter Bezeichner, der an die anderen Methoden übergeben werden kann, um die [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration) für diesen Vorgang abzurufen.
- `requests`

  - : Ein `RequestInfo`-Objekt oder ein Array von `RequestInfo`-Objekten.

    Jedes `RequestInfo`-Objekt ist entweder ein [`Request`](/de/docs/Web/API/Request)-Objekt oder ein String, der als `input`-Argument an den Konstruktor [`Request()`](/de/docs/Web/API/Request/Request) übergeben wird.

- `options` {{optional_inline}}

  - : Ein Objekt, das zur Anpassung des Fortschrittsdialogs des Abrufs verwendet wird, den der Browser dem Benutzer anzeigt. Es hat die folgenden Eigenschaften:

    - `title` {{optional_inline}}
      - : Ein String, der als Titel für den Fortschrittsdialog verwendet wird.
    - `icons` {{optional_inline}}
      - : Ein Array von Objekten, die jeweils ein Icon darstellen, das der Browser für den Fortschrittsdialog verwenden kann. Jedes Objekt hat die folgenden Eigenschaften:
        - `src`
          - : Ein String, der eine URL zur Icon-Datei darstellt.
        - `sizes` {{optional_inline}}
          - : Ein String, der die Größen des Bildes darstellt, ausgedrückt anhand derselben Syntax wie das `sizes`-Attribut des {{HTMLElement("link")}}-Elements.
        - `type` {{optional_inline}}
          - : Ein String, der den [MIME](/de/docs/Glossary/MIME)-Typ des Icons darstellt.
        - `label` {{optional_inline}}
          - : Ein String, der den zugänglichen Namen des Icons darstellt.
    - `downloadTotal` {{optional_inline}}

      - : Eine Zahl, die die geschätzte gesamte Downloadgröße in Bytes für den Abrufvorgang darstellt. Diese wird verwendet, um dem Benutzer anzuzeigen, wie groß der Download ist und den Fortschritt des Downloads zu zeigen.

        Sobald die gesamte Downloadgröße `downloadTotal` überschreitet, wird der Abruf abgebrochen.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit einem [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Objekt aufgelöst wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn keine Anfrage bereitgestellt wird, wenn der Modus einer Anfrage `no-cors` ist, kein Service Worker vorhanden ist, eine Anfrage mit der angeforderten `id` bereits existiert oder die Anfrage fehlschlägt.
- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Gibt an, dass der Abruf abgebrochen wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Gibt an, dass keine Benutzergenehmigung für Hintergrundabrufe erteilt wurde.
- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Speichern von Anfragen fehlschlägt, weil das [Speicherlimit](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria) des Browsers überschritten wurde.

## Beispiele

Das folgende Beispiel zeigt, wie `fetch()` verwendet wird, um einen Hintergrundabrufvorgang zu starten. Bei einem aktiven
[Service Worker](/de/docs/Web/API/ServiceWorker) verwenden Sie die
[`ServiceWorkerRegistration.backgroundFetch`](/de/docs/Web/API/ServiceWorkerRegistration/backgroundFetch)-Eigenschaft, um auf das
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
