---
title: "AudioData: format-Eigenschaft"
short-title: format
slug: Web/API/AudioData/format
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`format`** nur-lesbare Eigenschaft des [`AudioData`](/de/docs/Web/API/AudioData)-Interfaces gibt das Sample-Format des `AudioData`-Objekts zurück.

## Wert

Ein String. Einer von:

- `"u8"`
  - : 8-Bit vorzeichenlose Ganzzahl-Samples im interleaved-Format.
- `"s16"`
  - : 16-Bit vorzeichenbehaftete Ganzzahl-Samples im interleaved-Format.
- `"s32"`
  - : 32-Bit vorzeichenbehaftete Ganzzahl-Samples im interleaved-Format.
- `"f32"`
  - : 32-Bit Fließkomma-Samples im interleaved-Format.
- `"u8-planar"`
  - : 8-Bit vorzeichenlose Ganzzahl-Samples im Planar-Format.
- `"s16-planar"`
  - : 16-Bit vorzeichenbehaftete Ganzzahl-Samples im Planar-Format.
- `"s32-planar"`
  - : 32-Bit vorzeichenbehaftete Ganzzahl-Samples im Planar-Format.
- `"f32-planar"`
  - : 32-Bit Fließkomma-Samples im Planar-Format.

## Beispiele

Das folgende Beispiel gibt den Wert von `format` auf der Konsole aus.

```js
console.log(AudioData.format);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
