---
title: "Cache: addAll()-Methode"
short-title: addAll()
slug: Web/API/Cache/addAll
l10n:
  sourceCommit: 2e327846966abb10de0b1c9bedc584caab71ec97
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`addAll()`**-Methode des {{domxref("Cache")}}-Interfaces nimmt ein Array von URLs, ruft diese ab und fügt die resultierenden Antwortobjekte dem angegebenen Cache hinzu. Die während des Abrufs erstellten Anforderungsobjekte werden zu Schlüsseln der gespeicherten Antwortoperationen.

> **Note:** `addAll()` wird alle Schlüssel/Wert-Paare
> überschreiben, die zuvor im Cache gespeichert wurden und die mit der Anforderung übereinstimmen, aber scheitern, wenn eine
> resultierende `put()`-Operation einen vorherigen Cacheeintrag überschreiben würde, der von derselben `addAll()`-Methode gespeichert wurde.

## Syntax

```js-nolint
addAll(requests)
```

### Parameter

- `requests`

  - : Ein Array von Anfragen für die Ressourcen, die Sie dem Cache hinzufügen möchten. Diese können {{domxref("Request")}}-Objekte oder URLs sein.

    Diese Anfragen werden als Parameter an den {{domxref("Request.Request()", "Request()")}}-Konstruktor verwendet, sodass URLs denselben Regeln folgen wie bei diesem Konstruktor. Insbesondere können URLs relativ zur Basis-URL sein, die im Fensterkontext die {{domxref("Node.baseURI", "baseURI")}} des Dokuments ist oder im Worker-Kontext {{domxref("WorkerGlobalScope.location")}}.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst wird.

### Ausnahmen

- {{jsxref("TypeError")}}

  - : Das URL-Schema ist nicht `http` oder `https`.

    Der Antwortstatus ist nicht im Bereich 200 (d.h. keine erfolgreiche Antwort). Dies tritt auf, wenn die Anforderung nicht erfolgreich zurückgegeben wird, aber auch, wenn die Anforderung eine _cross-origin no-cors_-Anforderung ist (in diesem Fall wird der gemeldete Status immer 0 sein).

## Beispiele

Dieser Codeblock wartet auf ein {{domxref("InstallEvent")}}, dann wird {{domxref("ExtendableEvent.waitUntil","waitUntil()")}} ausgeführt, um den Installationsprozess der App zu handhaben. Dieser besteht aus dem Aufruf von {{domxref("CacheStorage.open")}} zum Erstellen eines neuen Caches und der Verwendung von `addAll()`, um eine Reihe von Ressourcen hinzuzufügen.

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
- {{domxref("Cache")}}
- {{domxref("Window.caches")}} und {{domxref("WorkerGlobalScope.caches")}}
