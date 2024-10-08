---
title: "AudioEncoder: encodeQueueSize-Eigenschaft"
short-title: encodeQueueSize
slug: Web/API/AudioEncoder/encodeQueueSize
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte Eigenschaft **`encodeQueueSize`** der [`AudioEncoder`](/de/docs/Web/API/AudioEncoder)-Schnittstelle gibt die Anzahl der ausstehenden Anfragen in der Warteschlange zurück.

## Wert

Ein ganzzahliger Wert, der die Anzahl der Anfragen enthält.

## Beispiele

Das folgende Beispiel gibt die Größe der Warteschlange in der Konsole aus.

```js
console.log(AudioEncoder.encodeQueueSize);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
