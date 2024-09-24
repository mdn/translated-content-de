---
title: "VideoEncoder: Eigenschaft encodeQueueSize"
short-title: encodeQueueSize
slug: Web/API/VideoEncoder/encodeQueueSize
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte Eigenschaft **`encodeQueueSize`** der Schnittstelle {{domxref("VideoEncoder")}} gibt die Anzahl der ausstehenden Codierungsanfragen in der Warteschlange zurück.

## Wert

Ein ganzzahliger Wert, der die Anzahl der Anfragen enthält.

## Beispiele

Das folgende Beispiel gibt die Größe der Warteschlange in der Konsole aus.

```js
console.log(VideoEncoder.encodeQueueSize);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
