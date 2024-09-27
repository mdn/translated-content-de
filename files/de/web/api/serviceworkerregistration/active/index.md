---
title: "ServiceWorkerRegistration: active-Eigenschaft"
short-title: active
slug: Web/API/ServiceWorkerRegistration/active
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`active`** schreibgeschützte Eigenschaft der [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Schnittstelle gibt einen Service Worker zurück, dessen [`ServiceWorker.state`](/de/docs/Web/API/ServiceWorker/state) `activating` oder `activated` ist. Diese Eigenschaft ist anfänglich auf `null` gesetzt.

Ein aktiver Worker kontrolliert einen [`Client`](/de/docs/Web/API/Client), wenn die URL des Clients innerhalb des Gültigkeitsbereichs der Registrierung liegt (die `scope`-Option, die beim ersten Aufruf von [`ServiceWorkerContainer.register`](/de/docs/Web/API/ServiceWorkerContainer/register) festgelegt wird).

> [!NOTE]
> Sobald ein aktiver Worker `activating` ist, verhindert weder ein Laufzeitskriptfehler noch eine erzwungene Beendigung des aktiven Workers, dass dieser `activated` wird.

## Wert

Die Eigenschaft eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekts, wenn es sich derzeit im `activating`- oder `activated`-Zustand befindet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Codebeispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
