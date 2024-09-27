---
title: "BroadcastChannel: close()-Methode"
short-title: close()
slug: Web/API/BroadcastChannel/close
l10n:
  sourceCommit: 50a45d52fd9f45f1ca30b546af5920d0ccda82dc
---

{{APIRef("BroadCastChannel API")}} {{AvailableInWorkers}}

Die **`close()`**-Methode der [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)-Schnittstelle beendet die Verbindung zum zugrunde liegenden Kanal und ermöglicht es dem Objekt, vom Garbage Collector bereinigt zu werden. Dies ist ein notwendiger Schritt, da es für einen Browser keine andere Möglichkeit gibt zu wissen, dass dieser Kanal nicht mehr benötigt wird.

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

- [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel), die Schnittstelle, zu der sie gehört.
