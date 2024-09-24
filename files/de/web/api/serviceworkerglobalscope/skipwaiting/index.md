---
title: "ServiceWorkerGlobalScope: skipWaiting()-Methode"
short-title: skipWaiting()
slug: Web/API/ServiceWorkerGlobalScope/skipWaiting
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Die **`skipWaiting()`**-Methode der {{domxref("ServiceWorkerGlobalScope")}}-Schnittstelle zwingt den wartenden Service Worker, der aktive Service Worker zu werden.

Verwenden Sie diese Methode zusammen mit {{domxref("Clients.claim()")}}, um sicherzustellen, dass Updates des zugrunde liegenden Service Workers sowohl für den aktuellen Client als auch für alle anderen aktiven Clients sofort wirksam werden.

## Syntax

```js-nolint
skipWaiting()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit `undefined` aufgelöst wird, nachdem versucht wurde, den neu installierten Service Worker zu aktivieren.

## Beispiele

Während `self.skipWaiting()` jederzeit während der Ausführung des Service Workers aufgerufen werden kann, hat es nur dann eine Wirkung, wenn ein neu installierter Service Worker vorhanden ist, der ansonsten im Zustand `waiting` verbleiben könnte. Daher ist es üblich, `self.skipWaiting()` innerhalb eines {{domxref("InstallEvent")}}-Handlers aufzurufen.

Das folgende Beispiel bewirkt, dass ein neu installierter Service Worker in den Zustand `activating` übergeht, unabhängig davon, ob bereits ein aktiver Service Worker vorhanden ist.

```js
self.addEventListener("install", (event) => {
  // Das Promise, das skipWaiting() zurückgibt, kann sicher ignoriert werden.
  self.skipWaiting();

  // Führen Sie alle anderen Aktionen aus, die für Ihre
  // Service Worker-Installation erforderlich sind, möglicherweise innerhalb
  // von event.waitUntil();
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Codebeispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- {{domxref("Clients.claim()")}}
- [Verwendung von Webarbeitern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
