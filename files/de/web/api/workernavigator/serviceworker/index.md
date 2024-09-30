---
title: "WorkerNavigator: serviceWorker-Eigenschaft"
short-title: serviceWorker
slug: Web/API/WorkerNavigator/serviceWorker
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{securecontext_header}}{{APIRef("Service Workers API")}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte Eigenschaft **`serviceWorker`** des [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Interfaces gibt das [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Objekt für das [zugeordnete Dokument](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window) zurück. Dieses Objekt bietet Zugriff auf Registrierung, Entfernung, Aktualisierung und Kommunikation mit dem [`ServiceWorker`](/de/docs/Web/API/ServiceWorker).

Die Funktion ist möglicherweise im privaten Modus nicht verfügbar.

## Wert

[`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer).

## Beispiele

Dieser Code prüft, ob der Browser die Verwendung von Service Workern in Workern unterstützt.

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
