---
title: WorkerLocation
slug: Web/API/WorkerLocation
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die **`WorkerLocation`**-Schnittstelle definiert den absoluten Standort des Skripts, das vom {{domxref("Worker")}} ausgeführt wird. Ein solches Objekt wird für jeden Worker initialisiert und ist über die {{domxref("WorkerGlobalScope.location")}}-Eigenschaft verfügbar, die durch den Aufruf von `self.location` erlangt wird.

Diese Schnittstelle ist nur von innerhalb eines JavaScript-Skripts sichtbar, das im Kontext eines Web-Workers ausgeführt wird.

## Instanz-Eigenschaften

- {{domxref("WorkerLocation.href")}} {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die die serialisierte {{domxref("URL")}} für den Worker-Standort enthält.
- {{domxref("WorkerLocation.protocol")}} {{ReadOnlyInline}}
  - : Gibt den {{domxref("URL.protocol", "protocol")}}-Teil des Worker-Standorts zurück.
- {{domxref("WorkerLocation.host")}} {{ReadOnlyInline}}
  - : Gibt den {{domxref("URL.host", "host")}}-Teil des Worker-Standorts zurück.
- {{domxref("WorkerLocation.hostname")}} {{ReadOnlyInline}}
  - : Gibt den {{domxref("URL.hostname", "hostname")}}-Teil des Worker-Standorts zurück.
- {{domxref("WorkerLocation.origin")}} {{ReadOnlyInline}}
  - : Gibt den {{domxref("URL.origin", "origin")}} des Workers zurück.
- {{domxref("WorkerLocation.port")}} {{ReadOnlyInline}}
  - : Gibt den {{domxref("URL.port", "port")}}-Teil des Worker-Standorts zurück.
- {{domxref("WorkerLocation.pathname")}} {{ReadOnlyInline}}
  - : Gibt den {{domxref("URL.pathname", "pathname")}}-Teil des Worker-Standorts zurück.
- {{domxref("WorkerLocation.search")}} {{ReadOnlyInline}}
  - : Gibt den {{domxref("URL.search", "search")}}-Teil des Worker-Standorts zurück.
- {{domxref("WorkerLocation.hash")}} {{ReadOnlyInline}}
  - : Gibt den {{domxref("URL.hash", "hash")}}-Teil des Worker-Standorts zurück.

## Instanz-Methoden

- {{domxref("WorkerLocation.toString()")}}
  - : Gibt eine Zeichenkette zurück, die die serialisierte {{domxref("URL")}} für den Worker-Standort enthält. Es ist ein Synonym für {{domxref("WorkerLocation.href")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere Worker-bezogene Schnittstellen: {{domxref("Worker")}}, {{domxref("WorkerNavigator")}} und {{domxref("WorkerGlobalScope")}}
- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
