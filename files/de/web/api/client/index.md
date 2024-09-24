---
title: Client
slug: Web/API/Client
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Das `Client`-Interface repräsentiert einen ausführbaren Kontext wie einen {{domxref("Worker")}} oder einen {{domxref("SharedWorker")}}. {{domxref("Window")}}-Clients werden durch das spezifischere {{domxref("WindowClient")}} dargestellt. Sie können `Client`/`WindowClient`-Objekte von Methoden wie {{domxref("Clients.matchAll","Clients.matchAll()")}} und {{domxref("Clients.get","Clients.get()")}} erhalten.

## Instanzmethoden

- {{domxref("Client.postMessage()")}}
  - : Sendet eine Nachricht an den Client.

## Instanzeigenschaften

- {{domxref("Client.frameType")}} {{ReadOnlyInline}}
  - : Der Frame-Typ des Clients als Zeichenkette. Es kann `"auxiliary"`, `"top-level"`, `"nested"` oder `"none"` sein.
- {{domxref("Client.id")}} {{ReadOnlyInline}}
  - : Die universell eindeutige Kennung des Clients als Zeichenkette.
- {{domxref("Client.type")}} {{ReadOnlyInline}}
  - : Der Typ des Clients als Zeichenkette. Es kann `"window"`, `"worker"` oder `"sharedworker"` sein.
- {{domxref("Client.url")}} {{ReadOnlyInline}}
  - : Die URL des Clients als Zeichenkette.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
