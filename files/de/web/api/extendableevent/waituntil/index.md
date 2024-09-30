---
title: "ExtendableEvent: waitUntil()-Methode"
short-title: waitUntil()
slug: Web/API/ExtendableEvent/waitUntil
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`ExtendableEvent.waitUntil()`**-Methode informiert den Ereignis-Dispatcher darüber, dass Arbeit im Gange ist. Sie kann auch verwendet werden, um festzustellen, ob diese Arbeit erfolgreich war. In Service-Workern teilt `waitUntil()` dem Browser mit, dass Arbeit im Gange ist, bis das Promise erfüllt wird, und er sollte den Service-Worker nicht beenden, wenn er möchte, dass diese Arbeit abgeschlossen wird.

Die [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)-Ereignisse in [Service-Workern](/de/docs/Web/API/ServiceWorkerGlobalScope) verwenden `waitUntil()`, um den Service-Worker in der [`installing`](/de/docs/Web/API/ServiceWorkerRegistration/installing)-Phase zu halten, bis die Aufgaben abgeschlossen sind. Wenn das an `waitUntil()` übergebene Promise abgelehnt wird, gilt die Installation als fehlgeschlagen und der installierende Service-Worker wird verworfen. Dies wird hauptsächlich verwendet, um sicherzustellen, dass ein Service-Worker nicht als installiert gilt, bis alle Kern-Caches, von denen er abhängt, erfolgreich gefüllt sind.

Die [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event)-Ereignisse in [Service-Workern](/de/docs/Web/API/ServiceWorkerGlobalScope) verwenden `waitUntil()`, um funktionale Ereignisse wie `fetch` und `push` zu puffern, bis das an `waitUntil()` übergebene Promise erfüllt ist. Dies gibt dem Service-Worker Zeit, Datenbankschemata zu aktualisieren und veraltete [`caches`](/de/docs/Web/API/Cache) zu löschen, sodass sich andere Ereignisse auf einen vollständig aktualisierten Zustand verlassen können.

Die `waitUntil()`-Methode muss ursprünglich innerhalb des Ereignis-Rückrufs aufgerufen werden, kann aber danach mehrfach aufgerufen werden, bis alle an sie übergebenen Promises erfüllt sind.

## Syntax

```js-nolint
waitUntil(promise)
```

### Parameter

- `promise`
  - : Ein {{jsxref("Promise")}}, das die Lebensdauer des Ereignisses verlängert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Verwendung von `waitUntil()` innerhalb eines `install`-Ereignisses eines Service-Workers:

```js
addEventListener("install", (event) => {
  const preCache = async () => {
    const cache = await caches.open("static-v1");
    return cache.addAll(["/", "/about/", "/static/styles.css"]);
  };
  event.waitUntil(preCache());
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
