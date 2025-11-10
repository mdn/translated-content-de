---
title: Device Memory API
slug: Web/API/Device_Memory_API
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{DefaultAPISidebar("Device Memory API")}}{{securecontext_header}}{{AvailableInWorkers}}

Die Fähigkeiten eines Client-Geräts hängen weitgehend von der verfügbaren Menge an RAM ab. Traditionell mussten Entwickler Heuristiken verwenden und entweder ein Gerät benchmarken oder die Fähigkeiten eines Geräts auf der Grundlage anderer Faktoren wie des Geräteherstellers oder der User-Agent-Strings ableiten.

## Bestimmung des Gerätespeichers

Es gibt zwei Möglichkeiten, die ungefähre Menge an RAM eines Geräts zu bestimmen: Verwenden Sie die Device Memory JavaScript-API oder akzeptieren Sie Client-Hints.

### JavaScript-API

Sie können die ungefähre Menge an RAM eines Geräts abfragen, indem Sie [`Navigator.deviceMemory`](/de/docs/Web/API/Navigator/deviceMemory) oder [`WorkerNavigator.deviceMemory`](/de/docs/Web/API/WorkerNavigator/deviceMemory) abrufen.

```js
const RAM = navigator.deviceMemory;
```

### Client Hints

Sie können auch den [Client Hints](/de/docs/Web/HTTP/Guides/Client_hints) HTTP-Header mit der `Device-Memory`-Direktive verwenden, um die gleiche ungefähre RAM-Kapazität abzurufen.

## Schnittstellen

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.deviceMemory`](/de/docs/Web/API/Navigator/deviceMemory) {{ReadOnlyInline}}
  - : Gibt die ungefähre Menge an Gerätespeicher in Gigabyte zurück.
- [`WorkerNavigator.deviceMemory`](/de/docs/Web/API/WorkerNavigator/deviceMemory) {{ReadOnlyInline}}
  - : Gibt die ungefähre Menge an Gerätespeicher in Gigabyte zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Device-Memory")}} header
