---
title: "Clients: claim() Methode"
short-title: claim()
slug: Web/API/Clients/claim
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`claim()`**-Methode der {{domxref("Clients")}}-Schnittstelle ermöglicht es einem aktiven Service Worker, sich selbst als {{domxref("ServiceWorkerContainer.controller", "Controller")}} für alle Clients innerhalb seines {{domxref("ServiceWorkerRegistration.scope", "Scopes")}} festzulegen. Dies löst ein "`controllerchange`"-Ereignis auf {{domxref("ServiceWorkerContainer","navigator.serviceWorker")}} in allen Clients aus, die von diesem Service Worker kontrolliert werden.

Wenn ein Service Worker zunächst registriert wird, verwenden die Seiten ihn nicht, bis sie das nächste Mal geladen werden. Die `claim()`-Methode bewirkt, dass diese Seiten sofort kontrolliert werden. Beachten Sie, dass dies dazu führt, dass Ihr Service Worker Seiten kontrolliert, die regelmäßig über das Netzwerk geladen wurden oder möglicherweise über einen anderen Service Worker.

## Syntax

```js-nolint
claim()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit `undefined` auflöst.

## Beispiele

Das folgende Beispiel verwendet `claim()` innerhalb des "`activate`"-Ereignislisteners eines Service Workers, sodass im gleichen Scope geladene Clients nicht neu geladen werden müssen, bevor ihre Anfragen über diesen Service Worker gehen.

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
- [Der Lebenszyklus eines Service Workers](https://web.dev/articles/service-worker-lifecycle)
- {{domxref("ServiceWorkerGlobalScope.skipWaiting()", "self.skipWaiting()")}} - Überspringen der Wartephase des Service Workers
