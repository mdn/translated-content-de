---
title: "Clients: claim() Methode"
short-title: claim()
slug: Web/API/Clients/claim
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`claim()`**-Methode der [`Clients`](/de/docs/Web/API/Clients)-Schnittstelle ermöglicht einem aktiven Service Worker, sich selbst als [`controller`](/de/docs/Web/API/ServiceWorkerContainer/controller) für alle Clients innerhalb ihres [`scope`](/de/docs/Web/API/ServiceWorkerRegistration/scope) festzulegen. Dies löst ein `controllerchange`-Ereignis im [`navigator.serviceWorker`](/de/docs/Web/API/ServiceWorkerContainer) in allen Clients aus, die von diesem Service Worker kontrolliert werden.

Wenn ein Service Worker zunächst registriert wird, nutzen Seiten ihn erst beim nächsten Laden. Die `claim()`-Methode bewirkt, dass diese Seiten sofort kontrolliert werden. Beachten Sie, dass Ihr Service Worker dadurch Seiten kontrolliert, die regulär über das Netzwerk oder möglicherweise über einen anderen Service Worker geladen wurden.

## Syntax

```js-nolint
claim()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich auf `undefined` auflöst.

## Beispiele

Im folgenden Beispiel wird `claim()` innerhalb des `activate`-Ereignislisteners des Service Workers verwendet, sodass Clients, die im gleichen Scope geladen werden, nicht neu geladen werden müssen, bevor ihre Abrufe über diesen Service Worker gehen.

```js
self.addEventListener("activate", (event) => {
  event.waitUntil(clients.claim());
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Der Lebenszyklus von Service Workern](https://web.dev/articles/service-worker-lifecycle)
- [`self.skipWaiting()`](/de/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) - Überspringen der Wartephase des Service Workers
