---
title: "AudioData: format Eigenschaft"
short-title: format
slug: Web/API/AudioData/format
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`format`** schreibgeschützte Eigenschaft des {{domxref("AudioData")}}-Interfaces gibt das Abtastformat des `AudioData`-Objekts zurück.

## Wert

Ein String. Einer von:

- `"u8"`
  - : 8-Bit vorzeichenlose Ganzzahlproben, in einem verzahnten Format.
- `"s16"`
  - : 16-Bit vorzeichenbehaftete Ganzzahlproben, in einem verzahnten Format.
- `"s32"`
  - : 32-Bit vorzeichenbehaftete Ganzzahlproben, in einem verzahnten Format.
- `"f32"`
  - : 32-Bit Fließkomma-Proben, in einem verzahnten Format.
- `"u8-planar"`
  - : 8-Bit vorzeichenlose Ganzzahlproben, in einem planaren Format.
- `"s16-planar"`
  - : 16-Bit vorzeichenbehaftete Ganzzahlproben, in einem planaren Format.
- `"s32-planar"`
  - : 32-Bit vorzeichenbehaftete Ganzzahlproben, in einem planaren Format.
- `"f32-planar"`
  - : 32-Bit Fließkomma-Proben, in einem planaren Format.

## Beispiele

Das folgende Beispiel gibt den Wert von `format` in der Konsole aus.

```js
console.log(AudioData.format);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
