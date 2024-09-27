---
title: "WorkerNavigator: serviceWorker-Eigenschaft"
short-title: serviceWorker
slug: Web/API/WorkerNavigator/serviceWorker
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{securecontext_header}}{{APIRef("Service Workers API")}}{{AvailableInWorkers("worker")}}

Die **`serviceWorker`** Lese-Eigenschaft der [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Schnittstelle gibt das [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Objekt für das [zugehörige Dokument](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window) zurück. Dies bietet Zugang zur Registrierung, Entfernung, Aktualisierung und Kommunikation mit dem [`ServiceWorker`](/de/docs/Web/API/ServiceWorker).

Diese Funktionalität kann im privaten Modus möglicherweise nicht verfügbar sein.

## Wert

[`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer).

## Beispiele

Dieser Code überprüft, ob der Browser die Nutzung von Service Workern in Workern unterstützt.

```js
if ("serviceWorker" in navigator) {
  // Supported!
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
