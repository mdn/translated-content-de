---
title: "BroadcastChannel: close() Methode"
short-title: close()
slug: Web/API/BroadcastChannel/close
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("BroadCastChannel API")}} {{AvailableInWorkers}}

Die **`close()`** Methode der [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel) Schnittstelle beendet die Verbindung zum zugrunde liegenden Kanal, wodurch das Objekt dem Garbage Collector zur Verfügung gestellt wird. Dies ist ein notwendiger Schritt, da es keine andere Möglichkeit für einen Browser gibt, zu wissen, dass dieser Kanal nicht mehr benötigt wird.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
// Connect to a channel
const bc = new BroadcastChannel("test_channel");

// More operations (like postMessage, …)

// When done, disconnect from the channel
bc.close();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel), die Schnittstelle, zu der sie gehört.
