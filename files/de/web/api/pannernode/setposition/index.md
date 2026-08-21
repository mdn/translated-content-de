---
title: "PannerNode: setPosition() Methode"
short-title: setPosition()
slug: Web/API/PannerNode/setPosition
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Web Audio API")}}

> [!NOTE]
> Der empfohlene Ersatz für diese veraltete Methode ist, stattdessen direkt die Attribute [`positionX`](/de/docs/Web/API/PannerNode/positionX), [`positionY`](/de/docs/Web/API/PannerNode/positionY) und [`positionZ`](/de/docs/Web/API/PannerNode/positionZ) zu setzen.

Die `setPosition()` Methode des [`PannerNode`](/de/docs/Web/API/PannerNode) Interfaces definiert die Position der Audioquelle relativ zum Hörer (dargestellt durch ein [`AudioListener`](/de/docs/Web/API/AudioListener) Objekt, das im [`BaseAudioContext.listener`](/de/docs/Web/API/BaseAudioContext/listener) Attribut gespeichert ist). Die drei Parameter `x`, `y` und `z` sind einheitslos und beschreiben die Position der Quelle im 3D-Raum unter Verwendung des rechtshändigen kartesischen Koordinatensystems.

Der Standardwert der `setPosition()` Methode für die Position ist `(0, 0, 0)`.

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

Sehen Sie sich [`BaseAudioContext.createPanner()`](/de/docs/Web/API/BaseAudioContext/createPanner#examples) für Beispielcode an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
