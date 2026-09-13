---
title: "AudioListener: setPosition()-Methode"
short-title: setPosition()
slug: Web/API/AudioListener/setPosition
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{ APIRef("Web Audio API") }}

Die `setPosition()`-Methode der [`AudioListener`](/de/docs/Web/API/AudioListener)-Schnittstelle definiert die Position des Hörers.

Die drei Parameter `x`, `y` und `z` sind einheitenlos und beschreiben die Position des Hörers im 3D-Raum gemäß dem rechtshändigen kartesischen Koordinatensystem. [`PannerNode`](/de/docs/Web/API/PannerNode)-Objekte verwenden diese Position relativ zu einzelnen Audioquellen für die Räumlichkeit.

Der Standardwert des Positionsvektors ist `(0, 0, 0)`.

> [!NOTE]
> Da diese Methode veraltet ist, verwenden Sie stattdessen die drei Eigenschaften [`positionX`](/de/docs/Web/API/AudioListener/positionX), [`positionY`](/de/docs/Web/API/AudioListener/positionY) und [`positionZ`](/de/docs/Web/API/AudioListener/positionZ).

## Syntax

```js-nolint
setPosition(x, y, z)
```

### Parameter

- `x`
  - : Die x-Position des Hörers im 3D-Raum.
- `y`
  - : Die y-Position des Hörers im 3D-Raum.
- `z`
  - : Die z-Position des Hörers im 3D-Raum.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Sehen Sie sich [`BaseAudioContext.createPanner()`](/de/docs/Web/API/BaseAudioContext/createPanner#examples) für Beispielcode an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
