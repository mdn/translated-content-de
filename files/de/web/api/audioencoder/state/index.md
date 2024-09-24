---
title: "AudioEncoder: state-Eigenschaft"
short-title: state
slug: Web/API/AudioEncoder/state
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte **`state`**-Eigenschaft des {{domxref("AudioEncoder")}}-Interfaces gibt den aktuellen Zustand des zugrunde liegenden Codecs zurück.

## Wert

Ein String mit einem der folgenden Werte:

- `"unconfigured"`
  - : Der Codec ist nicht zum Dekodieren konfiguriert.
- `"configured"`
  - : Der Codec hat eine gültige Konfiguration und ist bereit.
- `"closed"`
  - : Der Codec ist nicht mehr verwendbar und die Systemressourcen wurden freigegeben.

## Beispiele

Das folgende Beispiel gibt den Zustand des `AudioEncoder` in der Konsole aus.

```js
console.log(AudioEncoder.state);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
