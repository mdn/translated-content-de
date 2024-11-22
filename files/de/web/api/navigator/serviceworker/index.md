---
title: "Navigator: serviceWorker-Eigenschaft"
short-title: serviceWorker
slug: Web/API/Navigator/serviceWorker
l10n:
  sourceCommit: 5d29bef0815f8cc4b5b152b9ee1ab53f002ee617
---

{{securecontext_header}}{{APIRef("Service Workers API")}}

Die **`serviceWorker`**-Schreibgeschützte Eigenschaft des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces gibt das [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Objekt für das [zugehörige Dokument](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window) zurück. Dieses Objekt bietet Zugriff auf Registrierung, Entfernung, Aktualisierung und Kommunikation mit dem [`ServiceWorker`](/de/docs/Web/API/ServiceWorker).

Dieses Feature ist möglicherweise nicht im privaten Modus verfügbar.

Beachten Sie, dass ein Arbeiterähnlich auf das [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) für ein Dokument über [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker) zugreifen kann.

## Wert

[`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer).

## Beispiele

Dieser Code überprüft, ob der Browser Service Worker unterstützt.

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
