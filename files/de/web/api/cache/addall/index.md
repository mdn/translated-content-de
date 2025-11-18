---
title: "Cache: addAll() Methode"
short-title: addAll()
slug: Web/API/Cache/addAll
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`addAll()`**-Methode der [`Cache`](/de/docs/Web/API/Cache)-Schnittstelle nimmt ein Array von URLs, ruft sie ab und fügt die resultierenden Antwortobjekte dem angegebenen Cache hinzu. Die während des Abrufs erstellten Anforderungsobjekte werden zu Schlüsseln für die gespeicherten Antwortoperationen.

> [!NOTE] > `addAll()` überschreibt alle zuvor im Cache gespeicherten Schlüssel/Wert-Paare, die mit der Anforderung übereinstimmen, schlägt jedoch fehl, wenn ein resultierender `put()`-Vorgang einen vorherigen Cache-Eintrag überschreiben würde, der von derselben `addAll()`-Methode gespeichert wurde.

## Syntax

```js-nolint
addAll(requests)
```

### Parameter

- `requests`
  - : Ein Array von Anfragen für die Ressourcen, die Sie dem Cache hinzufügen möchten. Diese können [`Request`](/de/docs/Web/API/Request)-Objekte oder URLs sein.

    Diese Anfragen werden als Parameter für den [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor verwendet, daher folgen die URLs denselben Regeln wie für diesen Konstruktor. Insbesondere können URLs relativ zur Basis-URL sein, die im Fensterkontext die [`baseURI`](/de/docs/Web/API/Node/baseURI) des Dokuments und im Worker-Kontext [`WorkerGlobalScope.location`](/de/docs/Web/API/WorkerGlobalScope/location) ist.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Das URL-Schema ist nicht `http` oder `https`.

    Der Response-Status befindet sich nicht im Bereich 200 (d.h. keine erfolgreiche Antwort). Dies tritt auf, wenn die Anforderung nicht erfolgreich zurückgegeben wird, aber auch, wenn es sich um eine _cross-origin no-cors_-Anforderung handelt (in diesem Fall wird der gemeldete Status immer 0 sein.)

## Beispiele

Dieser Codeblock wartet darauf, dass ein [`InstallEvent`](/de/docs/Web/API/InstallEvent) ausgelöst wird und führt dann [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) aus, um den Installationsprozess für die App zu handhaben. Dies besteht darin, [`CacheStorage.open`](/de/docs/Web/API/CacheStorage/open) aufzurufen, um einen neuen Cache zu erstellen, und dann `addAll()` zu verwenden, um eine Reihe von Assets hinzuzufügen.

```js
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("v1")
      .then((cache) =>
        cache.addAll([
          "/",
          "/index.html",
          "/style.css",
          "/app.js",
          "/image-list.js",
          "/star-wars-logo.jpg",
          "/gallery/",
          "/gallery/bountyHunters.jpg",
          "/gallery/myLittleVader.jpg",
          "/gallery/snowTroopers.jpg",
        ]),
      ),
  );
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
