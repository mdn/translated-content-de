---
title: "ServiceWorkerRegistration: active-Eigenschaft"
short-title: active
slug: Web/API/ServiceWorkerRegistration/active
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die schreibgeschützte **`active`**-Eigenschaft des [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Interfaces gibt einen Service Worker zurück, dessen [`ServiceWorker.state`](/de/docs/Web/API/ServiceWorker/state) entweder `activating` oder `activated` ist. Diese Eigenschaft ist zunächst auf `null` gesetzt.

Ein aktiver Worker kontrolliert einen [`Client`](/de/docs/Web/API/Client), wenn die URL des Clients innerhalb des Bereichs der Registrierung liegt (die Option `scope`, die festgelegt wird, wenn [`ServiceWorkerContainer.register`](/de/docs/Web/API/ServiceWorkerContainer/register) zum ersten Mal aufgerufen wird.)

> [!NOTE]
> Sobald ein aktiver Worker `activating` ist, verhindert weder ein Skriptlaufzeitfehler noch eine erzwungene Beendigung des aktiven Workers, dass der aktive Worker `activated` wird.

## Wert

Eine Eigenschaft eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekts, wenn es sich derzeit im Zustand `activating` oder `activated` befindet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Beispiel für Service Worker-Code](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
