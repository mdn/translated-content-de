---
title: "ServiceWorkerRegistration: wartende Eigenschaft"
short-title: wartend
slug: Web/API/ServiceWorkerRegistration/waiting
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`waiting`** schreibgeschützte Eigenschaft der
{{domxref("ServiceWorkerRegistration")}}-Schnittstelle gibt einen Service Worker zurück, dessen
{{domxref("ServiceWorker.state")}} `installed` ist. Diese Eigenschaft ist anfangs
auf `null` gesetzt.

## Wert

Ein {{domxref("ServiceWorker")}}-Objekt, wenn es sich derzeit in einem `installed`
Zustand befindet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Beispielcode für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Webarbeitern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
