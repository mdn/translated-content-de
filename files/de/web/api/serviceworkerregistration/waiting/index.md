---
title: "ServiceWorkerRegistration: waiting-Eigenschaft"
short-title: waiting
slug: Web/API/ServiceWorkerRegistration/waiting
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`waiting`** schreibgeschützte Eigenschaft des [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Interfaces gibt einen Service Worker zurück, dessen [`ServiceWorker.state`](/de/docs/Web/API/ServiceWorker/state) `installed` ist. Diese Eigenschaft ist anfangs auf `null` gesetzt.

## Wert

Ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt, falls es sich derzeit im `installed`-Zustand befindet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Codebeispiel zu Service Workern](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
