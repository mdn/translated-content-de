---
title: "XRProjectionLayer: Eigenschaft fixedFoveation"
short-title: fixedFoveation
slug: Web/API/XRProjectionLayer/fixedFoveation
l10n:
  sourceCommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`fixedFoveation`**-Eigenschaft der [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer)-Schnittstelle ist eine Zahl, die die Menge an Foveation angibt, die vom XR-Kompositor für die Ebene verwendet wird. Fixed Foveated Rendering (FFR) rendert die Ränder der Augen-Texturen in einer niedrigeren Auflösung als das Zentrum und reduziert die GPU-Belastung.

Es ist am nützlichsten für Texturen mit geringem Kontrast, wie z. B. Hintergrundbilder, jedoch weniger für solche mit hohem Kontrast, wie z. B. Text oder detailreiche Bilder. Autoren können das Niveau frameweise anpassen, um den besten Kompromiss zwischen Leistung und visueller Qualität zu erreichen.

## Wert

Eine Zahl zwischen 0 und 1.

- Die minimale Foveation wird durch 0 angezeigt (volle Auflösung).
- Die maximale Foveation wird durch 1 angezeigt (die Ränder werden in niedrigerer Auflösung gerendert).

Es liegt am Benutzeragenten, wie die Zahlen in diesem Bereich interpretiert werden. Beim Ändern des Foveation-Levels wird der Effekt im nächsten [`XRFrame`](/de/docs/Web/API/XRFrame) sichtbar.

Beachten Sie, dass einige Benutzeragenten bestimmte Foveation-Level implementieren könnten, sodass Sie möglicherweise die Foveation in großen Schritten ändern müssen, um einen Effekt zu sehen. Beispiel-Level:

- `0`: keine Foveation
- `1/3`: niedrige Foveation
- `2/3`: mittlere Foveation
- `1.0`: maximale Foveation

Einige Geräte unterstützen kein foveated rendering. In diesem Fall ist `fixedFoveation` [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und das Einstellen hat keine Wirkung.

## Beispiele

### Dynamisches Einstellen der Stufe der Fixed Foveation-Darstellung

Die `fixedFoveation`-Eigenschaft ermöglicht es, die Stufe der Foveation zur Laufzeit und für jedes Frame festzulegen. Um die maximale Foveation für eine bestimmte [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer) festzulegen, verwenden Sie einen Wert von `1`.

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
