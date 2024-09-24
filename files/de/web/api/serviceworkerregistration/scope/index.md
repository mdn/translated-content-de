---
title: "ServiceWorkerRegistration: scope-Eigenschaft"
short-title: scope
slug: Web/API/ServiceWorkerRegistration/scope
l10n:
  sourceCommit: e9b95b3735a9e928fbdf3fe0a9f69c420b44cd79
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die schreibgeschützte **`scope`**-Eigenschaft des {{domxref("ServiceWorkerRegistration")}}-Interfaces gibt eine Zeichenkette zurück, die eine URL darstellt und den Registrierungsbereich eines Service Workers definiert; das heißt, den Bereich der URLs, den ein Service Worker kontrollieren kann. Dies wird mit dem `scope`-Parameter festgelegt, der beim Aufruf von {{domxref('ServiceWorkerContainer.register()')}} angegeben wird, der den Service Worker registriert hat.

## Wert

Gibt eine Zeichenkette zurück, die eine URL darstellt und den Registrierungsbereich eines Service Workers definiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Worker verwenden](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Einfaches Codebeispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
