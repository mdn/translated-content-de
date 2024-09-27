---
title: "XRWebGLLayer: fixedFoveation-Eigenschaft"
short-title: fixedFoveation
slug: Web/API/XRWebGLLayer/fixedFoveation
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`fixedFoveation`**-Eigenschaft des [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)-Interfaces ist eine Zahl, die den Grad der Foveation angibt, die vom XR-Kompositor verwendet wird. Fixed Foveated Rendering (FFR) rendert die Ränder der Augen-Texturen in einer geringeren Auflösung als die Mitte und reduziert so die GPU-Belastung.

Es ist am nützlichsten für Texturen mit geringem Kontrast, wie z.B. Hintergrundbilder, weniger jedoch für hochkontrastreiche wie Text oder detaillierte Bilder. Autoren können das Niveau pro Frame anpassen, um den bestmöglichen Kompromiss zwischen Leistung und visueller Qualität zu erzielen.

## Wert

Eine Zahl zwischen 0 und 1.

- Die minimale Menge an Foveation wird durch 0 angezeigt (volle Auflösung).
- Die maximale Menge an Foveation wird durch 1 angezeigt (die Ränder werden in niedrigerer Auflösung gerendert).

Es liegt am Benutzeragenten, wie die Zahlen in diesem Bereich interpretiert werden. Wenn der Foveationsgrad geändert wird, ist der Effekt im nächsten [`XRFrame`](/de/docs/Web/API/XRFrame) sichtbar.

Beachten Sie, dass einige Benutzeragenten bestimmte Foveationsstufen implementieren könnten, sodass Sie den Foveationsgrad in großen Schritten anpassen müssen, um einen Effekt zu sehen. Beispiele für Stufen:

- `0`: keine Foveation
- `1/3`: geringe Foveation
- `2/3`: mittlere Foveation
- `1.0`: maximale Foveation

Einige Geräte unterstützen kein foveatiertes Rendering. In diesem Fall ist `fixedFoveation` [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und das Setzen wird keine Wirkung haben.

## Beispiele

### Dynamisches Setzen des Levels von fixed foveation rendering

Die `fixedFoveation`-Eigenschaft erlaubt es Ihnen, den Foveationsgrad zur Laufzeit und für jeden Frame festzulegen. Um die maximale Foveation für einen gegebenen [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) zu setzen, verwenden Sie einen Wert von `1`.

```js
let glLayer = xrSession.renderState.baseLayer;
glLayer.fixedFoveation = 1; // maximum foveation
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Foveated rendering](https://en.wikipedia.org/wiki/Foveated_rendering)
