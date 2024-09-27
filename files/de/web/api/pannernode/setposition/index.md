---
title: "PannerNode: setPosition()-Methode"
short-title: setPosition()
slug: Web/API/PannerNode/setPosition
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Web Audio API")}}{{Deprecated_Header}}

> [!NOTE]
> Der empfohlene Ersatz für diese veraltete Methode ist, stattdessen die Attribute [`positionX`](/de/docs/Web/API/PannerNode/positionX), [`positionY`](/de/docs/Web/API/PannerNode/positionY) und [`positionZ`](/de/docs/Web/API/PannerNode/positionZ) direkt zu setzen.

Die `setPosition()`-Methode des [`PannerNode`](/de/docs/Web/API/PannerNode)-Interfaces definiert die Position der Audioquelle relativ zum Hörer (repräsentiert durch ein [`AudioListener`](/de/docs/Web/API/AudioListener)-Objekt, das im [`BaseAudioContext.listener`](/de/docs/Web/API/BaseAudioContext/listener)-Attribut gespeichert ist). Die drei Parameter `x`, `y` und `z` sind einheitslos und beschreiben die Position der Quelle im 3D-Raum anhand des rechtshändigen kartesischen Koordinatensystems.

Der Standardwert der Position der `setPosition()`-Methode ist `(0, 0, 0)`.

## Syntax

```js-nolint
setPosition(x, y, z)
```

### Parameter

- `x`
  - : Die x-Position des Panners im 3D-Raum.
- `y`
  - : Die y-Position des Panners im 3D-Raum.
- `z`
  - : Die z-Position des Panners im 3D-Raum.

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
