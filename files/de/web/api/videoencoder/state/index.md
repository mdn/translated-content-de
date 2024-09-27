---
title: "VideoEncoder: state-Eigenschaft"
short-title: state
slug: Web/API/VideoEncoder/state
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte **`state`**-Eigenschaft des [`VideoEncoder`](/de/docs/Web/API/VideoEncoder)-Interfaces gibt den aktuellen Zustand des zugrunde liegenden Codecs zurück.

## Wert

Ein String, der einen der folgenden Werte enthält:

- `"unconfigured"`
  - : Der Codec ist nicht für das Decodieren konfiguriert.
- `"configured"`
  - : Der Codec hat eine gültige Konfiguration und ist bereit.
- `"closed"`
  - : Der Codec ist nicht mehr verwendbar, und Systemressourcen wurden freigegeben.

## Beispiele

Das folgende Beispiel gibt den Zustand des `VideoEncoder` in der Konsole aus.

```js
console.log(VideoEncoder.state);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
