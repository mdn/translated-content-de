---
title: Device Memory API
slug: Web/API/Device_Memory_API
l10n:
  sourceCommit: 076ee5b53d5e933e7fc2fd5eff68304f9691148e
---

{{DefaultAPISidebar("Device Memory API")}}{{securecontext_header}}{{AvailableInWorkers}}{{non-standard_header}}

Die Leistungsfähigkeit eines Client-Geräts hängt wesentlich von der Menge des verfügbaren Arbeitsspeichers ab. Bisher mussten Entwickler Heuristiken verwenden und entweder die Leistung eines Geräts messen oder dessen Leistungsfähigkeit aus anderen Faktoren wie dem Gerätehersteller oder User-Agent-Strings ableiten.

## Gerätespeicher ermitteln

Es gibt zwei Möglichkeiten, die ungefähre Größe des Arbeitsspeichers eines Geräts zu ermitteln: über die Device Memory JavaScript API oder über Client Hints.

### JavaScript API

Sie können die ungefähre Größe des Arbeitsspeichers eines Geräts abfragen, indem Sie [`Navigator.deviceMemory`](/de/docs/Web/API/Navigator/deviceMemory) oder [`WorkerNavigator.deviceMemory`](/de/docs/Web/API/WorkerNavigator/deviceMemory) auslesen.

```js
const RAM = navigator.deviceMemory;
```

### Client Hints

Sie können auch den HTTP-Header [Client Hints](/de/docs/Web/HTTP/Guides/Client_hints) mit der Direktive `Device-Memory` verwenden, um dieselbe ungefähre Arbeitsspeichergröße zu ermitteln.

## Schnittstellen

### Erweiterungen anderer Schnittstellen

- [`Navigator.deviceMemory`](/de/docs/Web/API/Navigator/deviceMemory) {{ReadOnlyInline}}
  - : Gibt die ungefähre Größe des Gerätespeichers in Gigabyte zurück.
- [`WorkerNavigator.deviceMemory`](/de/docs/Web/API/WorkerNavigator/deviceMemory) {{ReadOnlyInline}}
  - : Gibt die ungefähre Größe des Gerätespeichers in Gigabyte zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-CH-Device-Memory")}}-Header
