---
title: "AudioListener: setPosition() Methode"
short-title: setPosition()
slug: Web/API/AudioListener/setPosition
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }} {{deprecated_header}}

Die `setPosition()`-Methode der [`AudioListener`](/de/docs/Web/API/AudioListener)-Schnittstelle definiert die Position des Hörers.

Die drei Parameter `x`, `y` und `z` sind einheitenlos und beschreiben die Position des Hörers im 3D-Raum gemäß dem kartesischen Rechtshändersystem. [`PannerNode`](/de/docs/Web/API/PannerNode)-Objekte verwenden diese Position relativ zu den einzelnen Audioquellen zur räumlichen Klangdarstellung.

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

Siehe [`BaseAudioContext.createPanner()`](/de/docs/Web/API/BaseAudioContext/createPanner#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
