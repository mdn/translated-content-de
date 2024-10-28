---
title: "XRWebGLLayer: Eigenschaft fixedFoveation"
short-title: fixedFoveation
slug: Web/API/XRWebGLLayer/fixedFoveation
l10n:
  sourceCommit: c749deb4ccb647d792deee4807d4852104bedd9d
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`fixedFoveation`**-Eigenschaft der [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)-Schnittstelle ist eine Zahl, die die Menge der Foveation angibt, die vom XR-Composer verwendet wird. Fixed Foveated Rendering (FFR) rendert die Ränder der Augentexturen in einer niedrigeren Auflösung als das Zentrum und reduziert die GPU-Belastung.

Es ist am nützlichsten für Texturen mit geringem Kontrast, wie z.B. Hintergrundbilder, weniger jedoch für solche mit hohem Kontrast wie Text oder detaillierte Bilder. Autoren können das Niveau pro Frame anpassen, um das beste Gleichgewicht zwischen Leistung und visueller Qualität zu erreichen.

## Wert

Eine Zahl zwischen 0 und 1.

- Die minimale Menge an Foveation wird durch 0 angegeben (volle Auflösung).
- Die maximale Menge an Foveation wird durch 1 angegeben (die Ränder werden in niedrigerer Auflösung gerendert).

Es liegt am Benutzeragenten, wie diese Zahlen interpretiert werden. Wenn das Foveationsniveau geändert wird, wird der Effekt im nächsten [`XRFrame`](/de/docs/Web/API/XRFrame) sichtbar.

Beachten Sie, dass einige Benutzeragenten möglicherweise nur bestimmte Foveationsstufen implementieren, sodass Sie das Foveationsniveau in größeren Schritten anpassen müssen, um einen Effekt zu sehen. Beispielniveaus:

- `0`: keine Foveation
- `1/3`: niedrige Foveation
- `2/3`: mittlere Foveation
- `1.0`: maximale Foveation

Einige Geräte unterstützen kein foveiertes Rendering. In diesem Fall ist `fixedFoveation` [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und eine Einstellung hat keine Wirkung.

## Beispiele

### Dynamisches Setzen des Foveation-Levels beim Rendering

Die `fixedFoveation`-Eigenschaft ermöglicht es Ihnen, das Foveationsniveau zur Laufzeit und für jeden Frame festzulegen. Um die maximale Foveation für eine gegebene [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) festzulegen, verwenden Sie einen Wert von `1`.

```js
let glLayer = xrSession.renderState.baseLayer;
glLayer.fixedFoveation = 1; // maximum foveation
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Foveiertes Rendering](https://en.wikipedia.org/wiki/Foveated_rendering)
