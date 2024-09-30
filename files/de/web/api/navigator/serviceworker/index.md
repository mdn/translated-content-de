---
title: "Navigator: serviceWorker-Eigenschaft"
short-title: serviceWorker
slug: Web/API/Navigator/serviceWorker
l10n:
  sourceCommit: 46699d51e4b74fcfbd2c4a8635ec8a23a9c7e9c1
---

{{securecontext_header}}{{APIRef("Service Workers API")}}

Die **`serviceWorker`**-Schreibgeschützte Eigenschaft des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces gibt das [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Objekt für das [zugehörige Dokument](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window) zurück, das Zugriff auf Registrierung, Entfernung, Upgrade und Kommunikation mit dem [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) bietet.

Diese Funktion ist möglicherweise im privaten Modus nicht verfügbar.

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
- [Service Worker verwenden](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
