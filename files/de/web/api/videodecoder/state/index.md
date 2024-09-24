---
title: "VideoDecoder: state-Eigenschaft"
short-title: state
slug: Web/API/VideoDecoder/state
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`state`**-Eigenschaft der {{domxref("VideoDecoder")}}-Schnittstelle gibt den aktuellen Status des zugrunde liegenden Codecs zurück.

## Wert

Ein String, der einen der folgenden Werte enthält:

- `"unconfigured"`
  - : Der Codec ist nicht für das Dekodieren konfiguriert.
- `"configured"`
  - : Der Codec hat eine gültige Konfiguration und ist bereit.
- `"closed"`
  - : Der Codec ist nicht mehr verwendbar und die Systemressourcen wurden freigegeben.

## Beispiele

Das folgende Beispiel druckt den Status des `VideoDecoder` in die Konsole.

```js
console.log(VideoDecoder.state);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
