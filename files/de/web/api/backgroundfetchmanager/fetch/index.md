---
title: "BackgroundFetchManager: fetch() Methode"
short-title: fetch()
slug: Web/API/BackgroundFetchManager/fetch
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`fetch()`** Methode der [`BackgroundFetchManager`](/de/docs/Web/API/BackgroundFetchManager) Schnittstelle initiiert einen Hintergrundabrufvorgang, gegeben durch eine oder mehrere URLs oder [`Request`](/de/docs/Web/API/Request) Objekte.

## Syntax

```js-nolint
fetch(id, requests)
fetch(id, requests, options)
```

### Parameter

- `id`
  - : Eine vom Entwickler definierte Kennung, die an die anderen Methoden übergeben werden kann, um die [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration) für diesen Vorgang abzurufen.
- `requests`
  - : Ein `RequestInfo` Objekt oder ein Array von `RequestInfo` Objekten.

    Jedes `RequestInfo` Objekt ist ein [`Request`](/de/docs/Web/API/Request) Objekt oder ein String, der als `input` Argument an den [`Request()`](/de/docs/Web/API/Request/Request) Konstruktor übergeben wird.

- `options` {{optional_inline}}
  - : Ein Objekt, das verwendet wird, um den Fortschrittsdialog des Abrufs anzupassen, den der Browser dem Benutzer anzeigt. Es hat die folgenden Eigenschaften:
    - `title` {{optional_inline}}
      - : Ein String, der als Titel für den Fortschrittsdialog verwendet wird.
    - `icons` {{optional_inline}}
      - : Ein Array von Objekten, wobei jedes Objekt ein Symbol darstellt, das der Browser möglicherweise für den Fortschrittsdialog verwendet. Jedes Objekt hat die folgenden Eigenschaften:
        - `src`
          - : Ein String, der eine URL zur Symboldatei darstellt.
        - `sizes` {{optional_inline}}
          - : Ein String, der die Größen des Bildes darstellt, ausgedrückt mit der gleichen Syntax wie das `sizes` Attribut des {{HTMLElement("link")}} Elements.
        - `type` {{optional_inline}}
          - : Ein String, der den {{Glossary("MIME", "MIME")}} Typ des Symbols darstellt.
        - `label` {{optional_inline}}
          - : Ein String, der den zugänglichen Namen des Symbols darstellt.
    - `downloadTotal` {{optional_inline}}
      - : Eine Zahl, die die geschätzte Gesamtgröße des Downloads in Bytes für den Abrufvorgang darstellt. Diese wird verwendet, um dem Benutzer anzuzeigen, wie groß der Download ist, und um den Benutzer über den Fortschritt des Downloads zu informieren.

        Sobald die Gesamtgröße des Downloads `downloadTotal` überschreitet, wird der Abruf abgebrochen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration) Objekt aufgelöst wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn keine Anfrage bereitgestellt wird, wenn der Modus einer Anfrage `no-cors` ist, wenn kein Service Worker vorhanden ist, wenn eine Anfrage bereits mit der angeforderten `id` existiert oder die Anfrage fehlschlägt.
- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Gibt an, dass der Abruf abgebrochen wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Gibt an, dass keine Benutzererlaubnis erteilt wurde, um Hintergrundabrufe auszuführen.
- [`QuotaExceededError`](/de/docs/Web/API/QuotaExceededError)
  - : Wird ausgelöst, wenn das Speichern von Anfragen aufgrund Überschreitung des Browser-Speicherquotas nicht möglich war.

## Beispiele

Das folgende Beispiel zeigt, wie `fetch()` verwendet wird, um einen Hintergrundabrufvorgang zu starten. Mit einem aktiven
[Service Worker](/de/docs/Web/API/ServiceWorker) verwenden Sie die
[`ServiceWorkerRegistration.backgroundFetch`](/de/docs/Web/API/ServiceWorkerRegistration/backgroundFetch) Eigenschaft, um auf das
`BackgroundFetchManager` Objekt zuzugreifen und rufen Sie dessen `fetch()`
Methode auf.

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
