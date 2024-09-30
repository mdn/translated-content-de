---
title: "AudioData: format-Eigenschaft"
short-title: format
slug: Web/API/AudioData/format
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte **`format`**-Eigenschaft der [`AudioData`](/de/docs/Web/API/AudioData)-Schnittstelle gibt das Sample-Format des `AudioData`-Objekts zurück.

## Wert

Ein String. Einer der folgenden:

- `"u8"`
  - : 8-Bit unsignierte Ganzzahlen, in einem verknüpften Format.
- `"s16"`
  - : 16-Bit signierte Ganzzahlen, in einem verknüpften Format.
- `"s32"`
  - : 32-Bit signierte Ganzzahlen, in einem verknüpften Format.
- `"f32"`
  - : 32-Bit Gleitkommazahlen, in einem verknüpften Format.
- `"u8-planar"`
  - : 8-Bit unsignierte Ganzzahlen, in einem Planar-Format.
- `"s16-planar"`
  - : 16-Bit signierte Ganzzahlen, in einem Planar-Format.
- `"s32-planar"`
  - : 32-Bit signierte Ganzzahlen, in einem Planar-Format.
- `"f32-planar"`
  - : 32-Bit Gleitkommazahlen, in einem Planar-Format.

## Beispiele

Das folgende Beispiel gibt den Wert von `format` in der Konsole aus.

```js
console.log(AudioData.format);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
