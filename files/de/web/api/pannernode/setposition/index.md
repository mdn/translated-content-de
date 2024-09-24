---
title: "PannerNode: Methode setPosition()"
short-title: setPosition()
slug: Web/API/PannerNode/setPosition
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Web Audio API")}}{{Deprecated_Header}}

> [!NOTE]
> Der empfohlene Ersatz für diese veraltete Methode ist stattdessen, die Attribute [`positionX`](/de/docs/Web/API/PannerNode/positionX), [`positionY`](/de/docs/Web/API/PannerNode/positionY) und [`positionZ`](/de/docs/Web/API/PannerNode/positionZ) direkt zu setzen.

Die Methode `setPosition()` der {{ domxref("PannerNode") }}-Schnittstelle definiert die Position der Audioquelle relativ zum Zuhörer (dargestellt durch ein {{domxref("AudioListener")}}-Objekt, das im Attribut {{domxref("BaseAudioContext.listener")}} gespeichert ist). Die drei Parameter `x`, `y` und `z` sind einheitenlos und beschreiben die Position der Quelle im 3D-Raum unter Verwendung des rechtshändigen kartesischen Koordinatensystems.

Der Standardwert der Position der Methode `setPosition()` ist `(0, 0, 0)`.

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
