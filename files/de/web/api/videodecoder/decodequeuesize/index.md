---
title: "VideoDecoder: decodeQueueSize-Eigenschaft"
short-title: decodeQueueSize
slug: Web/API/VideoDecoder/decodeQueueSize
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte **`decodeQueueSize`**-Eigenschaft der [`VideoDecoder`](/de/docs/Web/API/VideoDecoder)-Schnittstelle gibt die Anzahl der ausstehenden Dekodierungsanforderungen in der Warteschlange zurück.

## Wert

Ein Integer, der die Anzahl der Anforderungen enthält.

## Beispiele

Das folgende Beispiel gibt die Größe der Warteschlange in der Konsole aus.

```js
console.log(VideoDecoder.decodeQueueSize);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
