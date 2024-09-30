---
title: "Cache: add() Methode"
short-title: add()
slug: Web/API/Cache/add
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`add()`**-Methode des [`Cache`](/de/docs/Web/API/Cache)-Interfaces nimmt eine URL, ruft sie ab und fügt das resultierende Antwortobjekt zum gegebenen Cache hinzu.

Die `add()`-Methode ist funktional äquivalent zu folgendem:

```js
fetch(url).then((response) => {
  if (!response.ok) {
    throw new TypeError("bad response status");
  }
  return cache.put(url, response);
});
```

Für komplexere Operationen müssen Sie [`Cache.put()`](/de/docs/Web/API/Cache/put) direkt verwenden.

> **Note:** `add()` überschreibt jedes Schlüssel/Werte-Paar, das zuvor im Cache gespeichert wurde und die Anforderung übereinstimmt.

## Syntax

```js-nolint
add(request)
```

### Parameter

- `request`

  - : Eine Anfrage für die Ressource, die Sie zum Cache hinzufügen möchten. Dies kann ein [`Request`](/de/docs/Web/API/Request)-Objekt oder eine URL sein.

    Dieser Parameter wird als Parameter an den [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor verwendet, sodass URLs denselben Regeln wie für diesen Konstruktor folgen. Insbesondere können URLs relativ zur Basis-URL sein, die im Fensterkontext die [`baseURI`](/de/docs/Web/API/Node/baseURI) des Dokuments oder im Worker-Kontext [`WorkerGlobalScope.location`](/de/docs/Web/API/WorkerGlobalScope/location) ist.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst wird.

### Ausnahmen

- {{jsxref("TypeError")}}

  - : Das URL-Schema ist nicht `http` oder `https`.

    Der Antwortstatus liegt nicht im Bereich 200 (d.h. keine erfolgreiche Antwort). Dies tritt auf, wenn die Anforderung nicht erfolgreich zurückgegeben wird, aber auch wenn die Anforderung eine _cross-origin no-cors_ Anfrage ist (in diesem Fall wird der gemeldete Status immer 0 sein.)

## Beispiele

Dieser Codeblock wartet darauf, dass ein [`InstallEvent`](/de/docs/Web/API/InstallEvent) ausgelöst wird, und ruft dann [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) auf, um den Installationsprozess für die App zu handhaben. Dies besteht darin, [`CacheStorage.open`](/de/docs/Web/API/CacheStorage/open) aufzurufen, um einen neuen Cache zu erstellen, und dann `Cache.add` zu verwenden, um ein Asset hinzuzufügen.

```js
this.addEventListener("install", (event) => {
  event.waitUntil(caches.open("v1").then((cache) => cache.add("/index.html")));
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
