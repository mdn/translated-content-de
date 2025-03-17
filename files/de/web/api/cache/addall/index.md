---
title: "Cache: addAll()-Methode"
short-title: addAll()
slug: Web/API/Cache/addAll
l10n:
  sourceCommit: 2e327846966abb10de0b1c9bedc584caab71ec97
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`addAll()`**-Methode der [`Cache`](/de/docs/Web/API/Cache)-Schnittstelle nimmt ein Array von URLs, ruft diese ab und fügt die resultierenden Antwortobjekte zum angegebenen Cache hinzu. Die während des Abrufs erstellten Anfrageobjekte werden zu Schlüsseln für die gespeicherten Antwortoperationen.

> **Note:** `addAll()` überschreibt alle Schlüssel/Wert-Paare,
> die zuvor im Cache gespeichert wurden und mit der Anfrage übereinstimmen, schlägt jedoch fehl, wenn eine
> resultierende `put()`-Operation einen vorherigen Cache-Eintrag überschreiben würde, der von derselben `addAll()`-Methode gespeichert wurde.

## Syntax

```js-nolint
addAll(requests)
```

### Parameter

- `requests`

  - : Ein Array von Anfragen für die Ressourcen, die Sie dem Cache hinzufügen möchten. Diese können [`Request`](/de/docs/Web/API/Request)-Objekte oder URLs sein.

    Diese Anfragen werden als Parameter für den [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor verwendet, sodass URLs den gleichen Regeln wie für diesen Konstruktor folgen. Insbesondere können URLs relativ zur Basis-URL sein, die das [`baseURI`](/de/docs/Web/API/Node/baseURI) des Dokuments im Fensterkontext oder [`WorkerGlobalScope.location`](/de/docs/Web/API/WorkerGlobalScope/location) im Worker-Kontext ist.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit `undefined` aufgelöst wird.

### Ausnahmen

- {{jsxref("TypeError")}}

  - : Das URL-Schema ist nicht `http` oder `https`.

    Der Antwortstatus liegt nicht im 200-Bereich (d.h. keine erfolgreiche Antwort.) Dies tritt auf, wenn die Anfrage nicht erfolgreich zurückkehrt, aber auch, wenn es sich um eine _cross-origin no-cors_ Anfrage handelt (in diesem Fall wird der Status immer als 0 angegeben.)

## Beispiele

Dieser Codeblock wartet darauf, dass ein [`InstallEvent`](/de/docs/Web/API/InstallEvent) ausgelöst wird, und führt dann
[`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) aus, um den Installationsprozess für
die App zu bearbeiten. Dies besteht darin, [`CacheStorage.open`](/de/docs/Web/API/CacheStorage/open) aufzurufen, um einen neuen
Cache zu erstellen, und dann `addAll()` zu verwenden, um eine Reihe von Ressourcen hinzuzufügen.

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

- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [`Cache`](/de/docs/Web/API/Cache)
- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)
