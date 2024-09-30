---
title: "ServiceWorkerRegistration: scope-Eigenschaft"
short-title: scope
slug: Web/API/ServiceWorkerRegistration/scope
l10n:
  sourceCommit: e9b95b3735a9e928fbdf3fe0a9f69c420b44cd79
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die schreibgeschützte **`scope`**-Eigenschaft der [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Schnittstelle gibt einen String zurück, der eine URL darstellt und den Registrierungsbereich eines Service Workers definiert; das heißt, den Bereich von URLs, die ein Service Worker kontrollieren kann. Dies wird mit dem `scope`-Parameter festgelegt, der beim Aufruf von [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) angegeben wird, um den Service Worker zu registrieren.

## Wert

Gibt einen String zurück, der eine URL darstellt und den Registrierungsbereich eines Service Workers definiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Workers verwenden](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Code-Beispiel für Service Workers](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Web Worker verwenden](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
