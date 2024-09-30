---
title: WorkerLocation
slug: Web/API/WorkerLocation
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die **`WorkerLocation`**-Schnittstelle definiert die absolute Position des Skripts, das von dem [`Worker`](/de/docs/Web/API/Worker) ausgeführt wird. Ein solches Objekt wird für jeden Worker initialisiert und ist über die [`WorkerGlobalScope.location`](/de/docs/Web/API/WorkerGlobalScope/location)-Eigenschaft verfügbar, die durch den Aufruf von `self.location` erhalten wird.

Diese Schnittstelle ist nur innerhalb eines JavaScript-Skripts sichtbar, das im Kontext eines Web-Workers ausgeführt wird.

## Instanzeigenschaften

- [`WorkerLocation.href`](/de/docs/Web/API/WorkerLocation/href) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die serielle Darstellung der [`URL`](/de/docs/Web/API/URL) für den Standort des Workers enthält.
- [`WorkerLocation.protocol`](/de/docs/Web/API/WorkerLocation/protocol) {{ReadOnlyInline}}
  - : Gibt den [`protocol`](/de/docs/Web/API/URL/protocol)-Teil des Standorts des Workers zurück.
- [`WorkerLocation.host`](/de/docs/Web/API/WorkerLocation/host) {{ReadOnlyInline}}
  - : Gibt den [`host`](/de/docs/Web/API/URL/host)-Teil des Standorts des Workers zurück.
- [`WorkerLocation.hostname`](/de/docs/Web/API/WorkerLocation/hostname) {{ReadOnlyInline}}
  - : Gibt den [`hostname`](/de/docs/Web/API/URL/hostname)-Teil des Standorts des Workers zurück.
- [`WorkerLocation.origin`](/de/docs/Web/API/WorkerLocation/origin) {{ReadOnlyInline}}
  - : Gibt den [`origin`](/de/docs/Web/API/URL/origin) des Workers zurück.
- [`WorkerLocation.port`](/de/docs/Web/API/WorkerLocation/port) {{ReadOnlyInline}}
  - : Gibt den [`port`](/de/docs/Web/API/URL/port)-Teil des Standorts des Workers zurück.
- [`WorkerLocation.pathname`](/de/docs/Web/API/WorkerLocation/pathname) {{ReadOnlyInline}}
  - : Gibt den [`pathname`](/de/docs/Web/API/URL/pathname)-Teil des Standorts des Workers zurück.
- [`WorkerLocation.search`](/de/docs/Web/API/WorkerLocation/search) {{ReadOnlyInline}}
  - : Gibt den [`search`](/de/docs/Web/API/URL/search)-Teil des Standorts des Workers zurück.
- [`WorkerLocation.hash`](/de/docs/Web/API/WorkerLocation/hash) {{ReadOnlyInline}}
  - : Gibt den [`hash`](/de/docs/Web/API/URL/hash)-Teil des Standorts des Workers zurück.

## Instanzmethoden

- [`WorkerLocation.toString()`](/de/docs/Web/API/WorkerLocation/toString)
  - : Gibt einen String zurück, der die serielle Darstellung der [`URL`](/de/docs/Web/API/URL) für den Standort des Workers enthält. Es ist ein Synonym für [`WorkerLocation.href`](/de/docs/Web/API/WorkerLocation/href).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere Worker-bezogene Schnittstellen: [`Worker`](/de/docs/Web/API/Worker), [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
