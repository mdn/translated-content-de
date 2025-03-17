---
title: "Cache: match()-Methode"
short-title: match()
slug: Web/API/Cache/match
l10n:
  sourceCommit: 2e327846966abb10de0b1c9bedc584caab71ec97
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`match()`**-Methode der [`Cache`](/de/docs/Web/API/Cache)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das sich auf die [`Response`](/de/docs/Web/API/Response) auflöst, die mit der ersten übereinstimmenden Anfrage im [`Cache`](/de/docs/Web/API/Cache)-Objekt verknüpft ist.
Wenn keine Übereinstimmung gefunden wird, löst sich das {{jsxref("Promise")}} in {{jsxref("undefined")}} auf.

## Syntax

```js-nolint
match(request)
match(request, options)
```

### Parameter

- `request`
  - : Die [`Request`](/de/docs/Web/API/Request), für die Sie versuchen, Antworten im
    [`Cache`](/de/docs/Web/API/Cache) zu finden. Dies kann ein [`Request`](/de/docs/Web/API/Request)-Objekt oder eine URL-Zeichenkette sein.
- `options` {{optional_inline}}

  - : Ein Objekt, das Optionen für die `match`-Operation festlegt.
    Die verfügbaren Optionen sind:

    - `ignoreSearch`
      - : Ein boolescher Wert, der angibt, ob die
        Abfragezeichenfolge in der URL ignoriert werden soll. Wenn zum Beispiel
        `true` gesetzt ist, würde der `?value=bar`-Teil von
        `http://foo.com/?value=bar` bei der Durchführung einer Übereinstimmung ignoriert werden.
        Standardmäßig ist es `false`.
    - `ignoreMethod`
      - : Ein boolescher Wert, der, wenn er auf
        `true` gesetzt ist, verhindert, dass Matching-Operationen die
        HTTP-Methode der [`Request`](/de/docs/Web/API/Request) validieren (normalerweise
        sind nur `GET` und `HEAD` erlaubt). Standardmäßig ist es `false`.
    - `ignoreVary`
      - : Ein boolescher Wert, der, wenn auf
        `true` gesetzt, der Übereinstimmungsoperation mitteilt, kein `VARY`-
        Header-Matching durchzuführen – d.h. wenn die URL übereinstimmt, erhalten Sie eine
        Übereinstimmung, unabhängig davon, ob das [`Response`](/de/docs/Web/API/Response)-Objekt
        einen `VARY`-Header hat. Standardmäßig ist es `false`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich auf die erste [`Response`](/de/docs/Web/API/Response) auflöst, die der Anfrage entspricht, oder auf {{jsxref("undefined")}}, wenn keine Übereinstimmung gefunden wird.

> **Note:** `Cache.match()` ist im Wesentlichen identisch mit
> [`Cache.matchAll()`](/de/docs/Web/API/Cache/matchAll), außer dass es sich nicht mit einem Array aller übereinstimmenden Antworten auflöst, sondern nur mit der ersten übereinstimmenden Antwort (d.h.
> `response[0]`).

## Beispiele

Dieses Beispiel stammt aus dem [benutzerdefinierten Offline-Seiten](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/custom-offline-page/service-worker.js)-Beispiel ([Live-Demo](https://googlechrome.github.io/samples/service-worker/custom-offline-page/index.html)). Es verwendet einen Cache, um ausgewählte Daten bereitzustellen, wenn eine Anfrage fehlschlägt. Eine
`catch()`-Klausel wird ausgelöst, wenn der Aufruf von `fetch()` eine
Ausnahme auslöst. Innerhalb der `catch()`-Klausel wird `match()` verwendet, um
die korrekte Antwort zurückzugeben.

In diesem Beispiel werden nur HTML-Dokumente, die mit dem HTTP-Verb GET abgerufen werden, im
Cache gespeichert. Wenn unsere `if ()`-Bedingung falsch ist, dann fängt dieser Fetch-Handler die Anfrage nicht ab. Wenn andere Fetch-Handler registriert sind, erhalten sie die Gelegenheit, `event.respondWith()` aufzurufen. Wenn keine Fetch-Handler `event.respondWith()` aufrufen, wird die Anfrage vom Browser so behandelt, als ob kein Service Worker beteiligt wäre. Wenn `fetch()` eine gültige HTTP-Antwort mit einem Antwortcode im Bereich von 4xx oder 5xx zurückgibt, wird `catch()` NICHT aufgerufen.

```js
self.addEventListener("fetch", (event) => {
  // We only want to call event.respondWith() if this is a GET request for an HTML document.
  if (
    event.request.method === "GET" &&
    event.request.headers.get("accept").includes("text/html")
  ) {
    console.log("Handling fetch event for", event.request.url);
    event.respondWith(
      fetch(event.request).catch((e) => {
        console.error("Fetch failed; returning offline page instead.", e);
        return caches
          .open(OFFLINE_CACHE)
          .then((cache) => cache.match(OFFLINE_URL));
      }),
    );
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [`Cache`](/de/docs/Web/API/Cache)
- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)
