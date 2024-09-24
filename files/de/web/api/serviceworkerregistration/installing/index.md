---
title: "ServiceWorkerRegistration: Eigenschaft installing"
short-title: installing
slug: Web/API/ServiceWorkerRegistration/installing
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`installing`** der
{{domxref("ServiceWorkerRegistration")}}-Schnittstelle gibt einen Service Worker zurück, dessen
{{domxref("ServiceWorker.state")}} `installing` ist. Diese Eigenschaft wird
anfänglich auf `null` gesetzt.

## Wert

Ein {{domxref("ServiceWorker")}}-Objekt, wenn es sich derzeit im Zustand `installing`
befindet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Beispiel für Service Worker Code](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
