---
title: "BroadcastChannel: BroadcastChannel() Konstruktor"
short-title: BroadcastChannel()
slug: Web/API/BroadcastChannel/BroadcastChannel
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("BroadCastChannel API")}} {{AvailableInWorkers}}

Der **`BroadcastChannel()`** Konstruktor erstellt einen neuen
{{domxref("BroadcastChannel")}} und verbindet ihn mit dem zugrunde liegenden Kanal.

## Syntax

```js-nolint
new BroadcastChannel(channelName)
```

### Parameter

- `channelName`
  - : Ein String, der den Namen des Kanals repräsentiert; es gibt einen einzigen Kanal mit diesem Namen für alle {{glossary("browsing context", "Browsersitzungen")}} mit dem gleichen {{glossary("origin")}}.

## Beispiele

```js
// Erstellen Sie einen neuen Kanal, der dem "internal_notification"-Kanal lauscht.

const bc = new BroadcastChannel("internal_notification");
bc.postMessage("Neuer Listener verbunden!");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("BroadcastChannel")}}, die Schnittstelle, zu der er gehört.
