---
title: "ServiceWorkerRegistration: installing-Eigenschaft"
short-title: installing
slug: Web/API/ServiceWorkerRegistration/installing
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`installing`** schreibgeschützte Eigenschaft des [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Interfaces gibt einen Service Worker zurück, dessen [`ServiceWorker.state`](/de/docs/Web/API/ServiceWorker/state) `installing` ist. Diese Eigenschaft wird anfänglich auf `null` gesetzt.

## Wert

Ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt, wenn es sich aktuell im `installing`-Zustand befindet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Code-Beispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
