---
title: "XRWebGLLayer: fixedFoveation-Eigenschaft"
short-title: fixedFoveation
slug: Web/API/XRWebGLLayer/fixedFoveation
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`fixedFoveation`**-Eigenschaft der [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)-Schnittstelle ist eine Zahl, die angibt, wie viel Foveation vom XR-Composer verwendet wird. Fixed Foveated Rendering (FFR) rendert die Ränder der Augen-Texturen mit einer niedrigeren Auflösung als das Zentrum und verringert die GPU-Belastung.

Es ist am nützlichsten für Texturen mit geringem Kontrast, wie z.B. Hintergrundbilder, jedoch weniger für solche mit hohem Kontrast, wie Texte oder detaillierte Bilder. Autoren können das Level pro Frame anpassen, um den besten Kompromiss zwischen Leistung und visueller Qualität zu erreichen.

## Wert

Eine Zahl zwischen 0 und 1.

- Die minimale Menge an Foveation wird mit 0 angegeben (volle Auflösung).
- Die maximale Menge an Foveation wird mit 1 angegeben (die Ränder rendern in niedrigerer Auflösung).

Es liegt am User-Agent, wie die Zahlen in diesem Bereich interpretiert werden. Bei einer Änderung des Foveationslevels wird die Wirkung im nächsten [`XRFrame`](/de/docs/Web/API/XRFrame) sichtbar sein.

Beachten Sie, dass einige User-Agents bestimmte Foveation-Level implementieren könnten, sodass Sie möglicherweise die Foveation in größeren Schritten anpassen müssen, um eine Wirkung zu sehen. Beispielswerte:

- `0`: keine Foveation
- `1/3`: niedrige Foveation
- `2/3`: mittlere Foveation
- `1.0`: maximale Foveation

Einige Geräte unterstützen kein foveated rendering. In diesem Fall ist `fixedFoveation` [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und das Setzen hat keine Wirkung.

## Beispiele

### Dynamisches Einstellen des Levels des Fixed Foveation Renderings

Die `fixedFoveation`-Eigenschaft ermöglicht es Ihnen, das Foveationslevel zur Laufzeit und für jeden Frame einzustellen. Um die maximale Foveation für einen gegebenen [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) einzustellen, verwenden Sie einen Wert von `1`.

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
