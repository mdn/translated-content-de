---
title: Client
slug: Web/API/Client
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Das `Client`-Interface repräsentiert einen ausführbaren Kontext wie einen [`Worker`](/de/docs/Web/API/Worker) oder einen [`SharedWorker`](/de/docs/Web/API/SharedWorker). [`Window`](/de/docs/Web/API/Window)-Clients werden durch den spezifischeren [`WindowClient`](/de/docs/Web/API/WindowClient) dargestellt. Sie können `Client`/`WindowClient`-Objekte durch Methoden wie [`Clients.matchAll()`](/de/docs/Web/API/Clients/matchAll) und [`Clients.get()`](/de/docs/Web/API/Clients/get) erhalten.

## Instanzmethoden

- [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage)
  - : Sendet eine Nachricht an den Client.

## Instanzeigenschaften

- [`Client.frameType`](/de/docs/Web/API/Client/frameType) {{ReadOnlyInline}}
  - : Der Rahmen-Typ des Clients als Zeichenkette. Es kann `"auxiliary"`, `"top-level"`, `"nested"` oder `"none"` sein.
- [`Client.id`](/de/docs/Web/API/Client/id) {{ReadOnlyInline}}
  - : Der universell eindeutige Bezeichner des Clients als Zeichenkette.
- [`Client.type`](/de/docs/Web/API/Client/type) {{ReadOnlyInline}}
  - : Der Typ des Clients als Zeichenkette. Es kann `"window"`, `"worker"` oder `"sharedworker"` sein.
- [`Client.url`](/de/docs/Web/API/Client/url) {{ReadOnlyInline}}
  - : Die URL des Clients als Zeichenkette.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
