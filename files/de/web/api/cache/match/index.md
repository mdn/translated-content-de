---
title: "Cache: match() Methode"
short-title: match()
slug: Web/API/Cache/match
l10n:
  sourceCommit: 2e327846966abb10de0b1c9bedc584caab71ec97
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`match()`** Methode der {{domxref("Cache")}} Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das auf die {{domxref("Response")}} auflöst, die der ersten passenden Anfrage im {{domxref("Cache")}} Objekt zugeordnet ist. Wenn kein Treffer gefunden wird, wird das {{jsxref("Promise")}} auf {{jsxref("undefined")}} aufgelöst.

## Syntax

```js-nolint
match(request)
match(request, options)
```

### Parameter

- `request`
  - : Die {{domxref("Request")}}, für die Sie versuchen, Antworten im {{domxref("Cache")}} zu finden. Dies kann ein {{domxref("Request")}} Objekt oder ein URL-String sein.
- `options` {{optional_inline}}

  - : Ein Objekt, das Optionen für den `match`-Vorgang festlegt. Die verfügbaren Optionen sind:

    - `ignoreSearch`
      - : Ein boolescher Wert, der angibt, ob der Abfrage-String in der URL ignoriert werden soll. Wenn beispielsweise `true` gesetzt ist, wird der `?value=bar` Teil von `http://foo.com/?value=bar` ignoriert, wenn eine Übereinstimmung durchgeführt wird. Der Standardwert ist `false`.
    - `ignoreMethod`
      - : Ein boolescher Wert, der, wenn er auf `true` gesetzt ist, verhindert, dass Übereinstimmungsvorgänge die {{domxref("Request")}} `http`-Methode validieren (normalerweise sind nur `GET` und `HEAD` erlaubt). Der Standardwert ist `false`.
    - `ignoreVary`
      - : Ein boolescher Wert, der, wenn er auf `true` gesetzt ist, der Übereinstimmungsoperation mitteilt, keine `VARY`-Header-Übereinstimmung durchzuführen — d.h., wenn die URL übereinstimmt, erhalten Sie eine Übereinstimmung, unabhängig davon, ob das {{domxref("Response")}} Objekt einen `VARY`-Header hat. Der Standardwert ist `false`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf die erste {{domxref("Response")}} auflöst, die mit der Anfrage übereinstimmt, oder auf {{jsxref("undefined")}}, wenn kein Treffer gefunden wurde.

> **Note:** `Cache.match()` ist im Wesentlichen identisch mit {{domxref("Cache.matchAll()")}}, außer dass es nicht mit einem Array aller passenden Antworten auflöst, sondern nur mit der ersten passenden Antwort (d.h., `response[0]`).

## Beispiele

Dieses Beispiel stammt aus der [benutzerdefinierten Offline-Seite](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/custom-offline-page/service-worker.js) Beispiel ([Live-Demo](https://googlechrome.github.io/samples/service-worker/custom-offline-page/index.html)). Es verwendet einen Cache, um ausgewählte Daten bereitzustellen, wenn eine Anfrage fehlschlägt. Eine `catch()` Klausel wird ausgelöst, wenn der Aufruf von `fetch()` eine Ausnahme auslöst. Innerhalb der `catch()` Klausel wird `match()` verwendet, um die korrekte Antwort zurückzugeben.

In diesem Beispiel werden nur HTML-Dokumente gespeichert, die mit dem GET HTTP-Verb abgerufen wurden. Wenn unsere `if ()`-Bedingung falsch ist, wird dieser Fetch-Handler die Anfrage nicht abfangen. Wenn es andere Fetch-Handler gibt, die registriert sind, erhalten diese die Chance, `event.respondWith()` aufzurufen. Wenn keine Fetch-Handler `event.respondWith()` aufrufen, wird die Anfrage vom Browser so behandelt, als ob kein Service Worker beteiligt wäre. Wenn `fetch()` eine gültige HTTP-Antwort mit einem Antwortcode im Bereich 4xx oder 5xx zurückgibt, wird die `catch()` nicht aufgerufen.

```js
self.addEventListener("fetch", (event) => {
  // Wir wollen nur event.respondWith() aufrufen, wenn dies eine GET-Anfrage für ein HTML-Dokument ist.
  if (
    event.request.method === "GET" &&
    event.request.headers.get("accept").includes("text/html")
  ) {
    console.log("Verarbeite Fetch-Ereignis für", event.request.url);
    event.respondWith(
      fetch(event.request).catch((e) => {
        console.error("Fetch fehlgeschlagen; gibt stattdessen Offline-Seite zurück.", e);
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
- {{domxref("Cache")}}
- {{domxref("Window.caches")}} und {{domxref("WorkerGlobalScope.caches")}}
