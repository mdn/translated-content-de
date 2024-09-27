---
title: "AudioDecoder: decodeQueueSize Eigenschaft"
short-title: decodeQueueSize
slug: Web/API/AudioDecoder/decodeQueueSize
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte Eigenschaft **`decodeQueueSize`** des [`AudioDecoder`](/de/docs/Web/API/AudioDecoder)-Interfaces gibt die Anzahl der ausstehenden Decodierungsanforderungen in der Warteschlange zurück.

## Wert

Ein Ganzzahlwert, der die Anzahl der Anfragen enthält.

## Beispiele

Das folgende Beispiel gibt die Größe der Warteschlange in der Konsole aus.

```js
console.log(AudioDecoder.decodeQueueSize);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
