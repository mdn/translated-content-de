---
title: "Cache: match()-Methode"
short-title: match()
slug: Web/API/Cache/match
l10n:
  sourceCommit: 2e327846966abb10de0b1c9bedc584caab71ec97
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`match()`**-Methode des [`Cache`](/de/docs/Web/API/Cache)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das die [`Response`](/de/docs/Web/API/Response) auflöst, die mit der ersten übereinstimmenden Anfrage im [`Cache`](/de/docs/Web/API/Cache)-Objekt verknüpft ist.
Wenn keine Übereinstimmung gefunden wird, löst sich das {{jsxref("Promise")}} zu {{jsxref("undefined")}} auf.

## Syntax

```js-nolint
match(request)
match(request, options)
```

### Parameter

- `request`
  - : Die [`Request`](/de/docs/Web/API/Request), für die Sie versuchen, Antworten im
    [`Cache`](/de/docs/Web/API/Cache) zu finden. Dies kann ein [`Request`](/de/docs/Web/API/Request)-Objekt oder ein URL-String sein.
- `options` {{optional_inline}}

  - : Ein Objekt, das Optionen für die `match`-Operation festlegt.
    Die verfügbaren Optionen sind:

    - `ignoreSearch`
      - : Ein boolean-Wert, der angibt, ob der Abfrage-String in der URL ignoriert werden soll. Wenn zum Beispiel auf
        `true` gesetzt, wird der Teil `?value=bar`
        von `http://foo.com/?value=bar` beim Ausführen eines Abgleichs ignoriert.
        Standardmäßig ist es `false`.
    - `ignoreMethod`
      - : Ein boolean-Wert, der, wenn er auf
        `true` eingestellt ist, verhindert, dass Abgleichsoperationen die
        `http`-Methode der [`Request`](/de/docs/Web/API/Request) validieren (normalerweise sind nur `GET`
        und `HEAD` erlaubt.) Standardmäßig ist es `false`.
    - `ignoreVary`
      - : Ein boolean-Wert, der, wenn er auf
        `true` gesetzt ist, die Abgleichsoperation anweist, keine `VARY`-Header-Abgleiche durchzuführen — d.h., wenn die URL übereinstimmt, erhalten Sie eine Übereinstimmung, unabhängig davon, ob das [`Response`](/de/docs/Web/API/Response)-Objekt einen `VARY`-Header hat. Es ist standardmäßig `false`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu der ersten [`Response`](/de/docs/Web/API/Response) auflöst, die der Anfrage entspricht, oder zu {{jsxref("undefined")}}, wenn keine Übereinstimmung gefunden wird.

> **Note:** `Cache.match()` ist im Grunde identisch mit
> [`Cache.matchAll()`](/de/docs/Web/API/Cache/matchAll), außer dass es anstelle eines Arrays aller übereinstimmenden Antworten nur mit der ersten übereinstimmenden Antwort auflöst (das heißt,
> `response[0]`).

## Beispiele

Dieses Beispiel stammt aus dem [Custom Offline Page](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/custom-offline-page/service-worker.js)-Beispiel ([Live-Demo](https://googlechrome.github.io/samples/service-worker/custom-offline-page/index.html)). Es verwendet einen Cache, um ausgewählte Daten bereitzustellen, wenn eine Anfrage fehlschlägt. Eine
`catch()`-Klausel wird ausgelöst, wenn der Aufruf von `fetch()` eine
Ausnahme auslöst. Innerhalb der `catch()`-Klausel wird `match()`
verwendet, um die korrekte Antwort zurückzugeben.

In diesem Beispiel werden nur HTML-Dokumente, die mit dem HTTP-Verb GET abgerufen werden,
zwischengespeichert. Wenn unsere `if ()`-Bedingung falsch ist, wird dieser Fetch-Handler die Anfrage nicht
abfangen. Wenn andere Fetch-Handler registriert sind, erhalten sie die
Möglichkeit, `event.respondWith()` aufzurufen. Wenn keine Fetch-Handler
`event.respondWith()` aufrufen, wird die Anfrage vom Browser behandelt, als
wenn kein Service-Worker beteiligt wäre. Wenn `fetch()` eine gültige HTTP
Antwort mit einem Rückgabecode im Bereich 4xx oder 5xx zurückgibt, wird der `catch()` nicht
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

- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [`Cache`](/de/docs/Web/API/Cache)
- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)
