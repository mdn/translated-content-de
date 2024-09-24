---
title: "Cache: Methode add()"
short-title: add()
slug: Web/API/Cache/add
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`add()`**-Methode des {{domxref("Cache")}}-Interfaces nimmt eine URL, ruft sie ab und fügt das resultierende Response-Objekt dem angegebenen Cache hinzu.

Die `add()`-Methode ist funktional äquivalent zu folgendem:

```js
fetch(url).then((response) => {
  if (!response.ok) {
    throw new TypeError("bad response status");
  }
  return cache.put(url, response);
});
```

Für komplexere Operationen müssen Sie {{domxref("Cache.put","Cache.put()")}} direkt verwenden.

> **Note:** `add()` überschreibt jedes zuvor im Cache gespeicherte Schlüssel/Wert-Paar, das der Anfrage entspricht.

## Syntax

```js-nolint
add(request)
```

### Parameter

- `request`

  - : Eine Anfrage für die Resource, die Sie dem Cache hinzufügen möchten. Dies kann ein {{domxref("Request")}}-Objekt oder eine URL sein.

    Dieser Parameter wird als Parameter des {{domxref("Request.Request()", "Request()")}}-Konstruktors verwendet, sodass URLs den gleichen Regeln wie für diesen Konstruktor folgen. Insbesondere können URLs relativ zur Basis-URL sein, die in einem Fenster-Kontext die {{domxref("Node.baseURI", "baseURI")}} des Dokuments ist oder {{domxref("WorkerGlobalScope.location")}} in einem Worker-Kontext.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst wird.

### Ausnahmen

- {{jsxref("TypeError")}}

  - : Das URL-Schema ist nicht `http` oder `https`.

    Der Response-Status liegt nicht im 200-Bereich (d.h., keine erfolgreiche Antwort). Dies tritt auf, wenn die Anfrage nicht erfolgreich zurückkehrt, aber auch wenn die Anfrage eine _cross-origin no-cors_-Anfrage ist (in diesem Fall ist der gemeldete Status immer 0.)

## Beispiele

Dieser Codeblock wartet, bis ein {{domxref("InstallEvent")}} ausgelöst wird, und ruft dann {{domxref("ExtendableEvent.waitUntil","waitUntil()")}} auf, um den Installationsprozess der App zu handhaben. Dies besteht darin, {{domxref("CacheStorage.open")}} aufzurufen, um einen neuen Cache zu erstellen, und dann `Cache.add` zu verwenden, um ein Asset hinzuzufügen.

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
- {{domxref("Cache")}}
- {{domxref("Window.caches")}} und {{domxref("WorkerGlobalScope.caches")}}
