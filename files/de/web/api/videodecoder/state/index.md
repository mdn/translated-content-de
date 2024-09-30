---
title: "VideoDecoder: state-Eigenschaft"
short-title: state
slug: Web/API/VideoDecoder/state
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`state`**-Eigenschaft des [`VideoDecoder`](/de/docs/Web/API/VideoDecoder)-Interfaces gibt den aktuellen Zustand des zugrundeliegenden Codecs zurück.

## Wert

Ein String, der einen der folgenden Werte enthält:

- `"unconfigured"`
  - : Der Codec ist nicht für das Dekodieren konfiguriert.
- `"configured"`
  - : Der Codec hat eine gültige Konfiguration und ist einsatzbereit.
- `"closed"`
  - : Der Codec ist nicht mehr nutzbar und die Systemressourcen wurden freigegeben.

## Beispiele

Das folgende Beispiel gibt den Zustand des `VideoDecoder` in der Konsole aus.

```js
console.log(VideoDecoder.state);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
