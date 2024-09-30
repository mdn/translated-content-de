---
title: "BroadcastChannel: close() Methode"
short-title: close()
slug: Web/API/BroadcastChannel/close
l10n:
  sourceCommit: 50a45d52fd9f45f1ca30b546af5920d0ccda82dc
---

{{APIRef("BroadCastChannel API")}} {{AvailableInWorkers}}

Die **`close()`**-Methode des [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)-Interfaces beendet die Verbindung zum zugrunde liegenden Kanal, sodass das Objekt vom Garbage Collector aufgeräumt werden kann. Dies ist ein notwendiger Schritt, da es keine andere Möglichkeit für einen Browser gibt zu wissen, dass dieser Kanal nicht mehr benötigt wird.

## Syntax

```js-nolint
close()
```

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

- [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel), das Interface, zu dem es gehört.
