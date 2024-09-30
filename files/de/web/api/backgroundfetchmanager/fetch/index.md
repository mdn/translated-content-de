---
title: "BackgroundFetchManager: fetch()-Methode"
short-title: fetch()
slug: Web/API/BackgroundFetchManager/fetch
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`fetch()`**-Methode der [`BackgroundFetchManager`](/de/docs/Web/API/BackgroundFetchManager)-Schnittstelle initiiert einen Hintergrundabruf, basierend auf einer oder mehreren URLs oder [`Request`](/de/docs/Web/API/Request)-Objekten.

## Syntax

```js-nolint
fetch(id, requests)
fetch(id, requests, options)
```

### Parameter

- `id`
  - : Ein vom Entwickler definierter Bezeichner, der an andere Methoden übergeben werden kann, um die [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration) für diesen Vorgang abzurufen.
- `requests`

  - : Ein `RequestInfo`-Objekt oder ein Array von `RequestInfo`-Objekten.

    Jedes `RequestInfo`-Objekt ist ein [`Request`](/de/docs/Web/API/Request)-Objekt oder ein String, der als `input`-Argument an den [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor übergeben wird.

- `options` {{optional_inline}}

  - : Ein Objekt, das verwendet wird, um das Fortschrittsdialogfeld des Abrufs anzupassen, das der Browser dem Benutzer zeigt. Es hat folgende Eigenschaften:

    - `title` {{optional_inline}}
      - : Ein String, der als Titel für das Fortschrittsdialogfeld verwendet wird.
    - `icons` {{optional_inline}}
      - : Ein Array von Objekten, die jeweils ein Symbol darstellen, das der Browser für das Fortschrittsdialogfeld verwenden kann. Jedes Objekt hat die folgenden Eigenschaften:
        - `src`
          - : Ein String, der eine URL zur Symbol-Datei darstellt.
        - `sizes` {{optional_inline}}
          - : Ein String, der die Größen des Bildes darstellt, ausgedrückt mit der gleichen Syntax wie das `sizes`-Attribut des {{HTMLElement("link")}}-Elements.
        - `type` {{optional_inline}}
          - : Ein String, der den [MIME](/de/docs/Glossary/MIME)-Typ des Symbols darstellt.
        - `label` {{optional_inline}}
          - : Ein String, der den zugänglichen Namen des Symbols darstellt.
    - `downloadTotal` {{optional_inline}}

      - : Eine Zahl, die die geschätzte Gesamtdownloadgröße in Bytes für den Abrufvorgang darstellt. Dies wird verwendet, um dem Benutzer anzuzeigen, wie groß der Download ist, und um den Downloadfortschritt zu zeigen.

        Sobald die Gesamtdownloadgröße `downloadTotal` überschreitet, wird der Abruf abgebrochen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Objekt aufgelöst wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Tritt auf, wenn keine Anfrage bereitgestellt wird, wenn der Modus einer Anfrage `no-cors` ist, wenn kein Servicearbeiter vorhanden ist, bereits eine Anfrage mit der angeforderten `id` existiert oder die Anfrage fehlschlägt.
- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Zeigt an, dass der Abruf abgebrochen wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Zeigt an, dass keine Benutzererlaubnis für Hintergrundabrufe erteilt wurde.
- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Speichern von Anfragen aufgrund des Überschreitens des [Speicherlimits](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria) des Browsers fehlschlägt.

## Beispiele

Das folgende Beispiel zeigt, wie `fetch()` verwendet wird, um einen Hintergrundabruf zu initiieren. Mit einem aktiven
[Servicearbeiters](/de/docs/Web/API/ServiceWorker) verwenden Sie die
[`ServiceWorkerRegistration.backgroundFetch`](/de/docs/Web/API/ServiceWorkerRegistration/backgroundFetch)-Eigenschaft, um auf das
`BackgroundFetchManager`-Objekt zuzugreifen und dessen `fetch()`
-Methode aufzurufen.

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
