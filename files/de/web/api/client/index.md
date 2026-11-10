---
title: Client
slug: Web/API/Client
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Das `Client`-Interface repräsentiert einen ausführbaren Kontext, beispielsweise einen [`Worker`](/de/docs/Web/API/Worker) oder einen [`SharedWorker`](/de/docs/Web/API/SharedWorker). [`Window`](/de/docs/Web/API/Window)-Clients werden durch das spezifischere [`WindowClient`](/de/docs/Web/API/WindowClient)-Interface repräsentiert. Sie können `Client`- und `WindowClient`-Objekte über Methoden wie [`Clients.matchAll()`](/de/docs/Web/API/Clients/matchAll) und [`Clients.get()`](/de/docs/Web/API/Clients/get) abrufen.

## Instanzeigenschaften

- [`Client.frameType`](/de/docs/Web/API/Client/frameType) {{ReadOnlyInline}}
  - : Der Frame-Typ des Clients als String. Er kann `"auxiliary"`, `"top-level"`, `"nested"` oder `"none"` sein.
- [`Client.id`](/de/docs/Web/API/Client/id) {{ReadOnlyInline}}
  - : Die universell eindeutige Kennung des Clients als String.
- [`Client.type`](/de/docs/Web/API/Client/type) {{ReadOnlyInline}}
  - : Der Typ des Clients als String. Er kann `"window"`, `"worker"` oder `"sharedworker"` sein.
- [`Client.url`](/de/docs/Web/API/Client/url) {{ReadOnlyInline}}
  - : Die URL des Clients als String.

## Instanzmethoden

- [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage)
  - : Sendet eine Nachricht an den Client.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Workers verwenden](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
