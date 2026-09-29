---
title: "VideoDecoder: state-Eigenschaft"
short-title: state
slug: Web/API/VideoDecoder/state
l10n:
  sourceCommit: 118909727d715a42a27e3d368379bf959feca4af
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte Eigenschaft **`state`** der Schnittstelle [`VideoDecoder`](/de/docs/Web/API/VideoDecoder) gibt den aktuellen Zustand des zugrunde liegenden Codecs zurück.

## Wert

Ein String mit einem der folgenden Werte:

- `"unconfigured"`
  - : Der Codec ist nicht für die Decodierung konfiguriert.
- `"configured"`
  - : Der Codec verfügt über eine gültige Konfiguration und ist einsatzbereit.
- `"closed"`
  - : Der Codec kann nicht mehr verwendet werden, und die Systemressourcen wurden freigegeben.

## Beispiele

Das folgende Beispiel gibt den Zustand des `VideoDecoder` in der Konsole aus.

```js
console.log(VideoDecoder.state);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
