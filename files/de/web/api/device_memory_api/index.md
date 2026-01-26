---
title: Device Memory API
slug: Web/API/Device_Memory_API
l10n:
  sourceCommit: 53d1a4810a69dc436badd5b73c1a66c8764c835b
---

{{DefaultAPISidebar("Device Memory API")}}{{securecontext_header}}{{AvailableInWorkers}}

Die Fähigkeiten eines Clientgeräts hängen weitgehend von der Menge des verfügbaren RAM ab. Traditionell mussten Entwickler Heuristiken verwenden und entweder ein Gerät benchmarken oder die Geräteleistungsfähigkeit basierend auf anderen Faktoren wie dem Gerätehersteller oder User-Agent-Strings ableiten.

## Bestimmung des Gerätespeichers

Es gibt zwei Möglichkeiten, die ungefähre RAM-Menge eines Geräts zu bestimmen: Verwenden Sie die Device Memory JavaScript API oder akzeptieren Sie Client Hints.

### JavaScript API

Sie können die ungefähre RAM-Menge eines Geräts abfragen, indem Sie [`Navigator.deviceMemory`](/de/docs/Web/API/Navigator/deviceMemory) oder [`WorkerNavigator.deviceMemory`](/de/docs/Web/API/WorkerNavigator/deviceMemory) abrufen.

```js
const RAM = navigator.deviceMemory;
```

### Client Hints

Sie können auch den [Client Hints](/de/docs/Web/HTTP/Guides/Client_hints) HTTP-Header mit der `Device-Memory`-Direktive verwenden, um die gleiche ungefähre RAM-Kapazität abzurufen.

## Schnittstellen

### Erweiterungen für andere Schnittstellen

- [`Navigator.deviceMemory`](/de/docs/Web/API/Navigator/deviceMemory) {{ReadOnlyInline}}
  - : Gibt die ungefähre Menge des Gerätespeichers in Gigabyte zurück.
- [`WorkerNavigator.deviceMemory`](/de/docs/Web/API/WorkerNavigator/deviceMemory) {{ReadOnlyInline}}
  - : Gibt die ungefähre Menge des Gerätespeichers in Gigabyte zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-CH-Device-Memory")}}-Header
