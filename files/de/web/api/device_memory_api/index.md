---
title: Device Memory API
slug: Web/API/Device_Memory_API
l10n:
  sourceCommit: ca577adc00ddc882765c131739ad2ed25edd2285
---

{{DefaultAPISidebar("Device Memory API")}}{{securecontext_header}}{{AvailableInWorkers}}

Die Fähigkeiten eines Client-Geräts hängen maßgeblich von der verfügbaren RAM-Menge ab. Traditionell mussten Entwickler Heuristiken verwenden und entweder ein Gerät benchmarken oder die Geräteeigenschaften anhand anderer Faktoren wie dem Gerätehersteller oder den User-Agent-Strings ableiten.

## Bestimmung des Gerätespeichers

Es gibt zwei Möglichkeiten, die ungefähre Menge an RAM zu bestimmen, die ein Gerät hat: Verwenden Sie die Device Memory JavaScript API oder akzeptieren Sie Client Hints.

### JavaScript-API

Sie können die ungefähre Menge an RAM abfragen, die ein Gerät hat, indem Sie [`Navigator.deviceMemory`](/de/docs/Web/API/Navigator/deviceMemory) oder [`WorkerNavigator.deviceMemory`](/de/docs/Web/API/WorkerNavigator/deviceMemory) abrufen.

```js
const RAM = navigator.deviceMemory;
```

### Client Hints

Sie können auch den [Client Hints](/de/docs/Web/HTTP/Client_hints) HTTP-Header mit der `Device-Memory`-Richtlinie verwenden, um die gleiche ungefähre RAM-Kapazität abzurufen.

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

- {{HTTPHeader("Device-Memory")}} Header
