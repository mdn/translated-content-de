---
title: "XRWebGLLayer: Eigenschaft fixedFoveation"
short-title: fixedFoveation
slug: Web/API/XRWebGLLayer/fixedFoveation
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`fixedFoveation`** Eigenschaft der {{domxref("XRWebGLLayer")}} Schnittstelle ist eine Zahl, die die Menge an Foveation angibt, die vom XR-Compositor verwendet wird. Fixed Foveated Rendering (FFR) rendert die Ränder der Augentexturen in einer niedrigeren Auflösung als das Zentrum und verringert die GPU-Auslastung.

Sie ist am nützlichsten für Texturen mit geringem Kontrast, wie z.B. Hintergrundbilder, aber weniger für Text oder detaillierte Bilder mit hohem Kontrast. Autoren können das Niveau pro Frame anpassen, um den besten Kompromiss zwischen Leistung und visueller Qualität zu erzielen.

## Wert

Eine Zahl zwischen 0 und 1.

- Die minimale Menge an Foveation wird durch 0 angezeigt (volle Auflösung).
- Die maximale Menge an Foveation wird durch 1 angezeigt (die Ränder werden in niedrigerer Auflösung gerendert).

Es liegt im Ermessen des Benutzeragenten, wie die Zahlen in diesem Bereich interpretiert werden. Wenn das Foveation-Level geändert wird, wird der Effekt im nächsten {{domxref("XRFrame")}} sichtbar sein.

Beachten Sie, dass einige Benutzeragenten möglicherweise bestimmte Foveation-Level implementieren, sodass Sie das Foveation-Level in großen Schritten anpassen müssen, um eine Wirkung zu sehen. Beispielniveaus:

- `0`: keine Foveation
- `1/3`: niedrige Foveation
- `2/3`: mittlere Foveation
- `1.0`: maximale Foveation

Einige Geräte unterstützen kein foveated Rendering. In diesem Fall ist `fixedFoveation` [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und das Setzen dieser Eigenschaft hat keine Wirkung.

## Beispiele

### Dynamisches Setzen des Levels für Fixed Foveation Rendering

Die `fixedFoveation` Eigenschaft ermöglicht es, das Foveationslevel zur Laufzeit und für jedes Frame festzulegen. Um die maximale Foveation für eine gegebene {{domxref("XRWebGLLayer")}} festzulegen, verwenden Sie einen Wert von `1`.

```js
let glLayer = xrSession.renderState.baseLayer;
glLayer.fixedFoveation = 1; // maximale Foveation
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Foveated rendering](https://en.wikipedia.org/wiki/Foveated_rendering)
