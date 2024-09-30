---
title: "XRProjectionLayer: fixedFoveation-Eigenschaft"
short-title: fixedFoveation
slug: Web/API/XRProjectionLayer/fixedFoveation
l10n:
  sourceCommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`fixedFoveation`**-Eigenschaft des [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer)-Interface ist eine Zahl, die die Menge an Foveation angibt, die vom XR-Compositor für die Ebene verwendet wird. Fixed Foveated Rendering (FFR) rendert die Ränder der Augen-Texturen in einer niedrigeren Auflösung als die Mitte und reduziert die GPU-Belastung.

Es ist besonders nützlich für Texturen mit niedrigem Kontrast, wie Hintergrundbilder, aber weniger für solche mit hohem Kontrast, wie Text oder detaillierte Bilder. Autoren können das Niveau pro Bild anpassen, um den besten Kompromiss zwischen Leistung und visueller Qualität zu erreichen.

## Wert

Eine Zahl zwischen 0 und 1.

- Die minimale Foveation wird durch 0 angezeigt (volle Auflösung).
- Die maximale Foveation wird durch 1 angezeigt (die Ränder werden in niedrigerer Auflösung gerendert).

Es liegt am Benutzeragent, wie die Zahlen in diesem Bereich interpretiert werden. Bei Änderung des Foveation-Niveaus wird der Effekt im nächsten [`XRFrame`](/de/docs/Web/API/XRFrame) sichtbar.

Beachten Sie, dass einige Benutzeragenten bestimmte Niveaus der Foveation implementieren könnten, sodass Sie das Foveation-Niveau in großen Schritten anpassen müssen, um einen Effekt zu sehen. Beispielniveaus:

- `0`: keine Foveation
- `1/3`: niedrige Foveation
- `2/3`: mittlere Foveation
- `1.0`: maximale Foveation

Einige Geräte unterstützen keine foveated rendering. In diesem Fall ist `fixedFoveation` [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und das Einstellen hat keine Wirkung.

## Beispiele

### Dynamisches Einstellen des Niveaus des Fixed Foveation Renderings

Die `fixedFoveation`-Eigenschaft ermöglicht es Ihnen, das Niveau der Foveation zur Laufzeit und für jedes Bild festzulegen. Um die maximale Foveation für ein gegebenes [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer) einzustellen, verwenden Sie einen Wert von `1`.

```js
let glProjectionLayer = glBinding.createProjectionLayer(/* … */);
glProjectionLayer.fixedFoveation = 1; // maximum foveation
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Foveated rendering](https://en.wikipedia.org/wiki/Foveated_rendering)
