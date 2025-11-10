---
title: "Cache: Methode match()"
short-title: match()
slug: Web/API/Cache/match
l10n:
  sourceCommit: 6ef7bc04d63cf8b512bdbea149a6cb875cc063e3
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`match()`** Methode des [`Cache`](/de/docs/Web/API/Cache)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das auf die [`Response`](/de/docs/Web/API/Response) aufgelöst wird, die mit der ersten übereinstimmenden Anfrage im [`Cache`](/de/docs/Web/API/Cache)-Objekt verbunden ist. Wenn keine Übereinstimmung gefunden wird, wird das {{jsxref("Promise")}} auf {{jsxref("undefined")}} aufgelöst.

## Syntax

```js-nolint
match(request)
match(request, options)
```

### Parameter

- `request`
  - : Die [`Request`](/de/docs/Web/API/Request), für die Sie versuchen, Antworten im [`Cache`](/de/docs/Web/API/Cache) zu finden. Dies kann ein [`Request`](/de/docs/Web/API/Request)-Objekt oder ein URL-String sein.
- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen für die `match`-Operation festlegt. Die verfügbaren Optionen sind:
    - `ignoreSearch`
      - : Ein boolescher Wert, der angibt, ob der Abfrage-String in der URL ignoriert werden soll. Wenn er zum Beispiel auf `true` gesetzt ist, würde der Teil `?value=bar` von `https://example.com/?value=bar` bei der Durchführung eines Abgleichs ignoriert werden. Der Standardwert ist `false`.
    - `ignoreMethod`
      - : Ein boolescher Wert, der, wenn er auf `true` gesetzt ist, die Abgleichsoperationen daran hindert, die [`Request`](/de/docs/Web/API/Request) `http`-Methode zu validieren (normalerweise sind nur `GET` und `HEAD` erlaubt). Der Standardwert ist `false`.
    - `ignoreVary`
      - : Ein boolescher Wert, der, wenn er auf `true` gesetzt ist, der Abgleichsoperation mitteilt, keinen `VARY`-Header-Abgleich durchzuführen — d.h. wenn die URL übereinstimmt, erhalten Sie eine Übereinstimmung, unabhängig davon, ob das [`Response`](/de/docs/Web/API/Response)-Objekt einen `VARY`-Header hat. Der Standardwert ist `false`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf die erste [`Response`](/de/docs/Web/API/Response) aufgelöst wird, die mit der Anfrage übereinstimmt, oder auf {{jsxref("undefined")}}, wenn keine Übereinstimmung gefunden wird.

> [!NOTE]
> `Cache.match()` ist im Wesentlichen identisch mit [`Cache.matchAll()`](/de/docs/Web/API/Cache/matchAll), außer dass es nicht mit einem Array aller übereinstimmenden Antworten aufgelöst wird, sondern nur mit der ersten übereinstimmenden Antwort (also `response[0]`).

## Beispiele

Dieses Beispiel stammt aus dem Beispiel der [benutzerdefinierten Offline-Seite](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/custom-offline-page/service-worker.js) ([Live-Demo](https://googlechrome.github.io/samples/service-worker/custom-offline-page/index.html)). Es verwendet einen Cache, um ausgewählte Daten bereitzustellen, wenn eine Anfrage fehlschlägt. Eine `catch()`-Klausel wird ausgelöst, wenn der Aufruf von `fetch()` eine Ausnahme auslöst. Innerhalb der `catch()`-Klausel wird `match()` verwendet, um die richtige Antwort zurückzugeben.

In diesem Beispiel werden nur HTML-Dokumente, die mit dem HTTP-Verb GET abgerufen wurden, zwischengespeichert. Wenn unsere `if ()`-Bedingung falsch ist, wird dieser Fetch-Handler die Anfrage nicht abfangen. Wenn andere Fetch-Handler registriert sind, haben sie die Möglichkeit, `event.respondWith()` aufzurufen. Wenn kein Fetch-Handler `event.respondWith()` aufruft, wird die Anfrage vom Browser behandelt, als ob es keinen Service-Worker-Eingriff gegeben hätte. Wenn `fetch()` eine gültige HTTP-Antwort mit einem Antwortcode im Bereich von 4xx oder 5xx zurückgibt, wird `catch()` NICHT aufgerufen.

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
