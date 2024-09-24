---
title: "ExtendableEvent: waitUntil()-Methode"
short-title: waitUntil()
slug: Web/API/ExtendableEvent/waitUntil
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`ExtendableEvent.waitUntil()`**-Methode informiert den Ereignis-Dispatcher darüber, dass eine Aufgabe im Gange ist. Sie kann auch verwendet werden, um festzustellen, ob diese Aufgabe erfolgreich war. In Service Workern teilt `waitUntil()` dem Browser mit, dass eine Aufgabe im Gange ist, bis das Promise abgeschlossen ist, und dass der Service Worker nicht beendet werden sollte, wenn diese Aufgabe abgeschlossen werden soll.

Die {{domxref("ServiceWorkerGlobalScope/install_event", "install")}}-Ereignisse in [Service Workern](/de/docs/Web/API/ServiceWorkerGlobalScope) verwenden `waitUntil()`, um den Service Worker in der {{domxref("ServiceWorkerRegistration.installing", "installing")}}-Phase zu halten, bis die Aufgaben abgeschlossen sind. Wenn das an `waitUntil()` übergebene Promise abgelehnt wird, gilt die Installation als fehlgeschlagen und der installierende Service Worker wird verworfen. Dies wird hauptsächlich verwendet, um sicherzustellen, dass ein Service Worker erst dann als installiert gilt, wenn alle Kern-Caches, von denen er abhängt, erfolgreich gefüllt wurden.

Die {{domxref("ServiceWorkerGlobalScope/activate_event", "activate")}}-Ereignisse in [Service Workern](/de/docs/Web/API/ServiceWorkerGlobalScope) verwenden `waitUntil()`, um funktionale Ereignisse wie `fetch` und `push` zu puffern, bis das an `waitUntil()` übergebene Promise abgeschlossen ist. Dies gibt dem Service Worker Zeit, Datenbankschemata zu aktualisieren und veraltete {{domxref("Cache", "caches")}} zu löschen, sodass sich andere Ereignisse auf einen vollständig aktualisierten Zustand verlassen können.

Die `waitUntil()`-Methode muss zunächst innerhalb des Ereignis-Callbacks aufgerufen werden, kann aber danach mehrfach aufgerufen werden, bis alle an sie übergebenen Promises abgeschlossen sind.

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

Verwendung von `waitUntil()` innerhalb eines `install`-Ereignisses eines Service Workers:

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
