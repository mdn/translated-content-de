---
title: "BroadcastChannel: name-Eigenschaft"
short-title: name
slug: Web/API/BroadcastChannel/name
l10n:
  sourceCommit: 50a45d52fd9f45f1ca30b546af5920d0ccda82dc
---

{{APIRef("BroadCastChannel API")}} {{AvailableInWorkers}}

Die schreibgeschützte **`name`**-Eigenschaft des [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)-Interfaces gibt einen String zurück, der den gegebenen Kanal durch seinen Namen eindeutig identifiziert. Dieser Name wird bei der Erstellung an den [`BroadcastChannel()`](/de/docs/Web/API/BroadcastChannel/BroadCastChannel)-Konstruktor übergeben und ist daher schreibgeschützt.

## Werte

Ein String.

## Beispiele

```js
// Connect to a channel
const bc = new BroadcastChannel("test_channel");

// More operations (like postMessage, …)

// Log the channel name to the console
console.log(bc.name); // "test_channel"

// When done, disconnect from the channel
bc.close();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel), das Interface, zu dem es gehört.
