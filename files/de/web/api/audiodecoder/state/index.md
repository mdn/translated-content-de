---
title: "AudioDecoder: state-Eigenschaft"
short-title: state
slug: Web/API/AudioDecoder/state
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`state`** schreibgeschützte Eigenschaft des {{domxref("AudioDecoder")}}-Interfaces gibt den aktuellen Status des zugrundeliegenden Codecs zurück.

## Wert

Ein String, der einen der folgenden Werte enthält:

- `"unconfigured"`
  - : Der Codec ist nicht für das Dekodieren konfiguriert.
- `"configured"`
  - : Der Codec hat eine gültige Konfiguration und ist bereit.
- `"closed"`
  - : Der Codec ist nicht mehr verwendbar und Systemressourcen wurden freigegeben.

## Beispiele

Das folgende Beispiel gibt den Zustand des `AudioDecoder` in der Konsole aus.

```js
console.log(AudioDecoder.state);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}