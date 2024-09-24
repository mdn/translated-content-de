---
title: "WorkerNavigator: Eigenschaft serviceWorker"
short-title: serviceWorker
slug: Web/API/WorkerNavigator/serviceWorker
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{securecontext_header}}{{APIRef("Service Workers API")}}{{AvailableInWorkers("worker")}}

Die **`serviceWorker`**-Eigenschaft der {{domxref("WorkerNavigator")}}-Schnittstelle gibt das {{domxref("ServiceWorkerContainer")}}-Objekt für das [zugehörige Dokument](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window) zurück, das Zugriff auf die Registrierung, Entfernung, Aktualisierung und Kommunikation mit dem {{domxref("ServiceWorker")}} bietet.

Diese Funktion ist möglicherweise nicht im privaten Modus verfügbar.

## Wert

{{domxref("ServiceWorkerContainer")}}.

## Beispiele

Dieser Code überprüft, ob der Browser die Nutzung von Service Worker in Workern unterstützt.

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

- {{domxref("Service Worker API", "", "", "nocode")}}
- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
