---
title: "Cache: addAll() Methode"
short-title: addAll()
slug: Web/API/Cache/addAll
l10n:
  sourceCommit: 2e327846966abb10de0b1c9bedc584caab71ec97
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`addAll()`** Methode des [`Cache`](/de/docs/Web/API/Cache)-Interfaces nimmt ein Array von URLs, ruft sie ab und fügt die resultierenden Antwortobjekte dem angegebenen Cache hinzu. Die Anforderungsobjekte, die während des Abrufs erstellt werden, werden zu Schlüsseln für die gespeicherten Antwortoperationen.

> **Note:** `addAll()` wird alle zuvor im Cache gespeicherten Schlüssel/Werte-Paare überschreiben, die der Anforderung entsprechen, jedoch fehlschlagen, wenn ein resultierender `put()`-Vorgang einen vorherigen Cacheeintrag überschreiben würde, der durch die gleiche `addAll()`-Methode gespeichert wurde.

## Syntax

```js-nolint
addAll(requests)
```

### Parameter

- `requests`

  - : Ein Array von Anforderungen für die Ressourcen, die Sie dem Cache hinzufügen möchten. Diese können [`Request`](/de/docs/Web/API/Request)-Objekte oder URLs sein.

    Diese Anforderungen werden als Parameter an den [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor verwendet, daher folgen URLs den gleichen Regeln wie für diesen Konstruktor. URLs können insbesondere relativ zur Basis-URL sein, die im Fensterkontext die [`baseURI`](/de/docs/Web/API/Node/baseURI) des Dokuments oder im Worker-Kontext [`WorkerGlobalScope.location`](/de/docs/Web/API/WorkerGlobalScope/location) ist.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst wird.

### Ausnahmen

- {{jsxref("TypeError")}}

  - : Das URL-Schema ist nicht `http` oder `https`.

    Der Antwortstatus ist nicht im 200er-Bereich (d. h. keine erfolgreiche Antwort). Dies tritt auf, wenn die Anforderung nicht erfolgreich zurückkehrt, aber auch, wenn die Anforderung eine _cross-origin no-cors_-Anforderung ist (in diesem Fall wird der Status immer mit 0 angegeben.)

## Beispiele

Dieser Codeblock wartet auf das Eintreten eines [`InstallEvent`](/de/docs/Web/API/InstallEvent), dann wird [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) ausgeführt, um den Installationsprozess der App zu handhaben. Dies besteht darin, [`CacheStorage.open`](/de/docs/Web/API/CacheStorage/open) aufzurufen, um einen neuen Cache zu erstellen, und dann `addAll()` zu verwenden, um eine Reihe von Assets hinzuzufügen.

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
