---
title: "BroadcastChannel: name-Eigenschaft"
short-title: name
slug: Web/API/BroadcastChannel/name
l10n:
  sourceCommit: 50a45d52fd9f45f1ca30b546af5920d0ccda82dc
---

{{APIRef("BroadCastChannel API")}} {{AvailableInWorkers}}

Die schreibgeschützte **`name`**-Eigenschaft der {{domxref("BroadcastChannel")}}-Schnittstelle gibt einen String zurück, der den gegebenen Kanal mit seinem Namen eindeutig identifiziert. Dieser Name wird zum Zeitpunkt der Erstellung an den {{domxref("BroadcastChannel.BroadCastChannel", "BroadcastChannel()")}}-Konstruktor übergeben und ist daher schreibgeschützt.

## Werte

Ein String.

## Beispiele

```js
// Verbindung zu einem Kanal herstellen
const bc = new BroadcastChannel("test_channel");

// Weitere Operationen (wie postMessage, …)

// Protokollieren Sie den Kanalnamen in der Konsole
console.log(bc.name); // "test_channel"

// Wenn Sie fertig sind, trennen Sie die Verbindung vom Kanal
bc.close();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("BroadcastChannel")}}, die Schnittstelle, zu der sie gehört.
