---
title: "Cache: `add()` Methode"
short-title: add()
slug: Web/API/Cache/add
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`add()`** Methode des [`Cache`](/de/docs/Web/API/Cache) Interface nimmt eine URL, ruft diese ab und fügt das resultierende Antwortobjekt dem angegebenen Cache hinzu.

Die `add()` Methode ist funktional äquivalent zu folgendem:

```js
fetch(url).then((response) => {
  if (!response.ok) {
    throw new TypeError("bad response status");
  }
  return cache.put(url, response);
});
```

Für komplexere Operationen müssen Sie [`Cache.put()`](/de/docs/Web/API/Cache/put) direkt verwenden.

> [!NOTE] > `add()` wird jedes zuvor im Cache gespeicherte Schlüssel/Werte-Paar überschreiben, das mit der Anfrage übereinstimmt.

## Syntax

```js-nolint
add(request)
```

### Parameter

- `request`
  - : Eine Anfrage für die Ressource, die Sie dem Cache hinzufügen möchten. Dies kann ein [`Request`](/de/docs/Web/API/Request) Objekt oder eine URL sein.

    Dieser Parameter wird als Parameter für den [`Request()`](/de/docs/Web/API/Request/Request) Konstruktor verwendet, sodass URLs denselben Regeln wie für diesen Konstruktor folgen. Insbesondere können URLs relativ zur Basis-URL sein, die im Fensterkontext die [`baseURI`](/de/docs/Web/API/Node/baseURI) des Dokuments oder im Worker-Kontext [`WorkerGlobalScope.location`](/de/docs/Web/API/WorkerGlobalScope/location) ist.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Das URL-Schema ist nicht `http` oder `https`.

    Der Antwortstatus liegt nicht im 200-Bereich (d.h. es ist keine erfolgreiche Antwort). Dies tritt auf, wenn die Anfrage nicht erfolgreich ist, aber auch, wenn die Anfrage eine _cross-origin no-cors_ Anfrage ist (in diesem Fall ist der gemeldete Status immer 0).

## Beispiele

Dieser Codeblock wartet darauf, dass ein [`InstallEvent`](/de/docs/Web/API/InstallEvent) ausgelöst wird, und ruft dann [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) auf, um den Installationsprozess für die App zu handhaben. Dies besteht aus dem Aufruf von [`CacheStorage.open`](/de/docs/Web/API/CacheStorage/open), um einen neuen Cache zu erstellen, und dann `Cache.add` zu verwenden, um ein Asset hinzuzufügen.

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

- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [`Cache`](/de/docs/Web/API/Cache)
- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)
