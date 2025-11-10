---
title: "BroadcastChannel: name Eigenschaft"
short-title: name
slug: Web/API/BroadcastChannel/name
l10n:
  sourceCommit: 50a45d52fd9f45f1ca30b546af5920d0ccda82dc
---

{{APIRef("BroadCastChannel API")}} {{AvailableInWorkers}}

Die **`name`**-Eigenschaft der [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)-Schnittstelle ist eine schreibgeschützte Zeichenfolge, die den gegebenen Kanal eindeutig mit seinem Namen identifiziert. Dieser Name wird beim Erstellen an den [`BroadcastChannel()`](/de/docs/Web/API/BroadcastChannel/BroadcastChannel)-Konstruktor übergeben und ist daher schreibgeschützt.

## Werte

Eine Zeichenfolge.

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

- [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel), die zugehörige Schnittstelle.
