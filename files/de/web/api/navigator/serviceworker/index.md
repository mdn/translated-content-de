---
title: "Navigator: serviceWorker-Eigenschaft"
short-title: serviceWorker
slug: Web/API/Navigator/serviceWorker
l10n:
  sourceCommit: 46699d51e4b74fcfbd2c4a8635ec8a23a9c7e9c1
---

{{securecontext_header}}{{APIRef("Service Workers API")}}

Die schreibgeschützte **`serviceWorker`**-Eigenschaft des {{domxref("Navigator")}}-Interfaces gibt das {{domxref("ServiceWorkerContainer")}}-Objekt für das [zugehörige Dokument](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window) zurück, das Zugriff auf Registrierung, Entfernung, Aktualisierung und Kommunikation mit dem {{domxref("ServiceWorker")}} bietet.

Die Funktionalität ist möglicherweise im privaten Modus nicht verfügbar.

## Wert

{{domxref("ServiceWorkerContainer")}}.

## Beispiele

Dieser Code prüft, ob der Browser Service Worker unterstützt.

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
- [Using Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
