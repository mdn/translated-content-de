---
title: "PannerNode: Methode setOrientation()"
short-title: setOrientation()
slug: Web/API/PannerNode/setOrientation
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Web Audio API")}}{{Deprecated_Header}}

> [!NOTE]
> Der empfohlene Ersatz für diese veraltete Methode ist das direkte Setzen der Attribute [`orientationX`](/de/docs/Web/API/PannerNode/orientationX), [`orientationY`](/de/docs/Web/API/PannerNode/orientationY) und [`orientationZ`](/de/docs/Web/API/PannerNode/orientationZ).

Die `setOrientation()`-Methode der [`PannerNode`](/de/docs/Web/API/PannerNode)-Schnittstelle definiert die Richtung, in der die Audioquelle abgespielt wird.

Dies kann einen großen Effekt haben, wenn der Klang sehr gerichtet ist — kontrolliert durch die drei mit dem Kegel verbundenen Attribute [`PannerNode.coneInnerAngle`](/de/docs/Web/API/PannerNode/coneInnerAngle), [`PannerNode.coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle) und [`PannerNode.coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain). In einem solchen Fall kann ein Klang, der vom Hörer wegzeigt, sehr leise oder sogar still sein.

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
