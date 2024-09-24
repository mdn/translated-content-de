---
title: Geräte-Speicher-API
slug: Web/API/Device_Memory_API
l10n:
  sourceCommit: ca577adc00ddc882765c131739ad2ed25edd2285
---

{{DefaultAPISidebar("Device Memory API")}}{{securecontext_header}}{{AvailableInWorkers}}

Die Fähigkeiten eines Client-Geräts hängen stark von der Menge des verfügbaren RAMs ab. Traditionell mussten Entwickler Heuristiken verwenden und entweder ein Gerät benchmarken oder die Geräteeigenschaften basierend auf anderen Faktoren wie dem Gerätehersteller oder User-Agent-Strings ableiten.

## Bestimmung des Gerätespeichers

Es gibt zwei Möglichkeiten, die ungefähre RAM-Menge eines Geräts zu bestimmen: Verwenden Sie die Device Memory JavaScript API oder akzeptieren Sie Client-Hints.

### JavaScript-API

Sie können die ungefähre RAM-Menge eines Geräts abfragen, indem Sie {{DOMxRef("Navigator.deviceMemory")}} oder {{DOMxRef("WorkerNavigator.deviceMemory")}} abrufen.

```js
const RAM = navigator.deviceMemory;
```

### Client-Hints

Sie können auch den [Client Hints](/de/docs/Web/HTTP/Client_hints) HTTP-Header mit der `Device-Memory`-Direktive verwenden, um die gleiche ungefähre RAM-Kapazität abzurufen.

## Schnittstellen

### Erweiterungen zu anderen Schnittstellen

- {{domxref("Navigator.deviceMemory")}} {{ReadOnlyInline}}
  - : Gibt die ungefähre Menge des Gerätespeichers in Gigabyte zurück.
- {{domxref("WorkerNavigator.deviceMemory")}} {{ReadOnlyInline}}
  - : Gibt die ungefähre Menge des Gerätespeichers in Gigabyte zurück.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{HTTPHeader("Device-Memory")}} Header
