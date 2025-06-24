---
title: "Cache: match() Methode"
short-title: match()
slug: Web/API/Cache/match
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`match()`** Methode der [`Cache`](/de/docs/Web/API/Cache) Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das auf die [`Response`](/de/docs/Web/API/Response) aufgelöst wird, die mit der ersten übereinstimmenden Anfrage im [`Cache`](/de/docs/Web/API/Cache) Objekt verknüpft ist.
Wenn keine Übereinstimmung gefunden wird, wird das {{jsxref("Promise")}} auf {{jsxref("undefined")}} aufgelöst.

## Syntax

```js-nolint
match(request)
match(request, options)
```

### Parameter

- `request`
  - : Der [`Request`](/de/docs/Web/API/Request), für den Sie versuchen, Antworten im
    [`Cache`](/de/docs/Web/API/Cache) zu finden. Dies kann ein [`Request`](/de/docs/Web/API/Request)-Objekt oder eine URL-Zeichenfolge sein.
- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen für den `match` Vorgang festlegt.
    Die verfügbaren Optionen sind:
    - `ignoreSearch`
      - : Ein boolescher Wert, der angibt, ob die Abfragezeichenfolge in der URL ignoriert werden soll. Wenn beispielsweise auf
        `true` gesetzt, würde der `?value=bar` Teil von
        `http://foo.com/?value=bar` bei der Durchführung einer Übereinstimmung ignoriert werden.
        Standardmäßig ist es `false`.
    - `ignoreMethod`
      - : Ein boolescher Wert, der, wenn auf
        `true` gesetzt, verhindert, dass der Abgleichsvorgang die
        `http` Methode von [`Request`](/de/docs/Web/API/Request) validiert (normalerweise sind nur `GET`
        und `HEAD` erlaubt). Standardmäßig ist es `false`.
    - `ignoreVary`
      - : Ein boolescher Wert, der, wenn auf
        `true` gesetzt, dem Abgleichsvorgang mitteilt, dass kein `VARY`
        Header-Abgleich durchgeführt werden soll — d.h. wenn die URL übereinstimmt, erhalten Sie eine Übereinstimmung, unabhängig davon, ob das [`Response`](/de/docs/Web/API/Response)-Objekt einen `VARY` Header hat. Standardmäßig ist es `false`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf die erste [`Response`](/de/docs/Web/API/Response) aufgelöst wird, die der Anfrage entspricht oder auf {{jsxref("undefined")}}, wenn keine Übereinstimmung gefunden wird.

> [!NOTE] > `Cache.match()` ist im Grunde identisch mit
> [`Cache.matchAll()`](/de/docs/Web/API/Cache/matchAll), außer dass es nicht mit einem Array von
> allen übereinstimmenden Antworten aufgelöst wird, sondern nur mit der ersten übereinstimmenden Antwort (das heißt,
> `response[0]`).

## Beispiele

Dieses Beispiel stammt aus dem [benutzerdefinierten Offline-Seite](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/custom-offline-page/service-worker.js) Beispiel ([Live-Demo](https://googlechrome.github.io/samples/service-worker/custom-offline-page/index.html)). Es verwendet einen Cache, um ausgewählte Daten bereitzustellen, wenn ein Request fehlschlägt. Eine
`catch()`-Klausel wird ausgelöst, wenn der Aufruf von `fetch()` eine
Ausnahme auslöst. Innerhalb der `catch()`-Klausel wird `match()` verwendet, um
die korrekte Antwort zurückzugeben.

In diesem Beispiel werden nur HTML-Dokumente, die mit dem GET HTTP Verb abgerufen wurden,
zwischengespeichert. Wenn unsere `if ()` Bedingung false ist, wird dieser Fetch-Handler die Anfrage nicht
abfangen. Wenn andere Fetch-Handler registriert sind, erhalten sie die Gelegenheit, `event.respondWith()` aufzurufen. Falls kein Fetch-Handler
`event.respondWith()` aufruft, wird die Anfrage von dem Browser so behandelt, als ob keine Service Worker-Beteiligung vorliegt. Wenn `fetch()` eine gültige HTTP
Antwort mit einem Antwortcode im Bereich 4xx oder 5xx zurückgibt, wird das `catch()` nicht
aufgerufen.

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
