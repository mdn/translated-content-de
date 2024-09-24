---
title: "PannerNode: setOrientation()-Methode"
short-title: setOrientation()
slug: Web/API/PannerNode/setOrientation
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Web Audio API")}}{{Deprecated_Header}}

> [!NOTE]
> Der empfohlene Ersatz für diese veraltete Methode besteht darin, stattdessen die Attribute [`orientationX`](/de/docs/Web/API/PannerNode/orientationX), [`orientationY`](/de/docs/Web/API/PannerNode/orientationY) und [`orientationZ`](/de/docs/Web/API/PannerNode/orientationZ) direkt zu setzen.

Die `setOrientation()`-Methode der {{ domxref("PannerNode") }}-Schnittstelle definiert die Richtung, in die die Audioquelle spielt.

Dies kann einen großen Einfluss haben, wenn der Klang sehr gerichtet ist – kontrolliert durch die drei kegelbezogenen Attribute {{domxref("PannerNode.coneInnerAngle")}}, {{domxref("PannerNode.coneOuterAngle")}} und {{domxref("PannerNode.coneOuterGain")}}. In einem solchen Fall kann ein Klang, der vom Zuhörer weg zeigt, sehr leise oder sogar stumm sein.

Die drei Parameter `x`, `y` und `z` sind einheitslos und beschreiben einen Richtungsvektor im 3D-Raum unter Verwendung des rechtshändigen kartesischen Koordinatensystems. Der Standardwert des Richtungsvektors ist `(1, 0, 0)`.

## Syntax

```js-nolint
setOrientation(x, y, z)
```

### Parameter

- `x`
  - : Der x-Wert des Richtungsvektors des Panners im 3D-Raum.
- `y`
  - : Der y-Wert des Richtungsvektors des Panners im 3D-Raum.
- `z`
  - : Der z-Wert des Richtungsvektors des Panners im 3D-Raum.

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
