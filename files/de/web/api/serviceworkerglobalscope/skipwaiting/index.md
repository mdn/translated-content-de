---
title: "ServiceWorkerGlobalScope: skipWaiting()-Methode"
short-title: skipWaiting()
slug: Web/API/ServiceWorkerGlobalScope/skipWaiting
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Die **`skipWaiting()`**-Methode der Schnittstelle [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) zwingt den wartenden Service Worker dazu, der aktive Service Worker zu werden.

Verwenden Sie diese Methode zusammen mit [`Clients.claim()`](/de/docs/Web/API/Clients/claim), um sicherzustellen, dass Aktualisierungen des zugrunde liegenden Service Workers sofort sowohl für den aktuellen Client als auch für alle anderen aktiven Clients wirksam werden.

## Syntax

```js-nolint
skipWaiting()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst wird, nachdem versucht wurde, den neu installierten Service Worker zu aktivieren.

## Beispiele

Obwohl `self.skipWaiting()` jederzeit während der Ausführung des Service Workers aufgerufen werden kann, hat es nur dann eine Wirkung, wenn es einen neu installierten Service Worker gibt, der sich ansonsten im Zustand `waiting` befinden könnte. Daher ist es üblich, `self.skipWaiting()` innerhalb eines [`InstallEvent`](/de/docs/Web/API/InstallEvent)-Handlers aufzurufen.

Das folgende Beispiel bewirkt, dass ein neu installierter Service Worker in den Zustand `activating` übergeht, unabhängig davon, ob bereits ein aktiver Service Worker vorhanden ist.

```js
self.addEventListener("install", (event) => {
  // The promise that skipWaiting() returns can be safely ignored.
  self.skipWaiting();

  // Perform any other actions required for your
  // service worker to install, potentially inside
  // of event.waitUntil();
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Codebeispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [`Clients.claim()`](/de/docs/Web/API/Clients/claim)
- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
