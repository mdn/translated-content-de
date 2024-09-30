---
title: "VideoEncoder: encodeQueueSize-Eigenschaft"
short-title: encodeQueueSize
slug: Web/API/VideoEncoder/encodeQueueSize
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte Eigenschaft **`encodeQueueSize`** des [`VideoEncoder`](/de/docs/Web/API/VideoEncoder)-Interfaces gibt die Anzahl der ausstehenden Kodierungsanfragen in der Warteschlange zurück.

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
