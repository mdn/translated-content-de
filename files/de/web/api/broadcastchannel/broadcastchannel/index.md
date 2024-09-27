---
title: "BroadcastChannel: BroadcastChannel() Konstruktor"
short-title: BroadcastChannel()
slug: Web/API/BroadcastChannel/BroadcastChannel
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("BroadCastChannel API")}} {{AvailableInWorkers}}

Der **`BroadcastChannel()`** Konstruktor erstellt einen neuen
[`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel) und verbindet ihn mit dem zugrundeliegenden Kanal.

## Syntax

```js-nolint
new BroadcastChannel(channelName)
```

### Parameter

- `channelName`
  - : Ein String, der den Namen des Kanals darstellt; es gibt einen einzigen Kanal mit diesem Namen für alle [Browsing-Kontexte](/de/docs/Glossary/browsing_context) mit dem gleichen [Origin](/de/docs/Glossary/origin).

## Beispiele

```js
// create a new channel listening to the "internal_notification" channel.

const bc = new BroadcastChannel("internal_notification");
bc.postMessage("New listening connected!");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel), die Schnittstelle, zu der er gehört.
