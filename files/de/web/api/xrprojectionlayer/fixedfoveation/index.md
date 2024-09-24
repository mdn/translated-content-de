---
title: "XRProjectionLayer: Eigenschaft fixedFoveation"
short-title: fixedFoveation
slug: Web/API/XRProjectionLayer/fixedFoveation
l10n:
  sourceCommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`fixedFoveation`**-Eigenschaft des {{domxref("XRProjectionLayer")}}-Interfaces ist eine Zahl, die den Grad der Fixierung bei der Fovea-Wiedergabe angibt, die vom XR-Kompositor für die Ebene genutzt wird. Fixed Foveated Rendering (FFR) stellt die Ränder der Augentexturen mit einer geringeren Auflösung als das Zentrum dar und reduziert die GPU-Auslastung.

Es ist am nützlichsten für Texturen mit niedrigem Kontrast wie Hintergrundbilder, jedoch weniger für solche mit hohem Kontrast wie Text oder detaillierte Bilder. Autoren können die Stufe für jeden Frame anpassen, um den besten Kompromiss zwischen Leistung und visueller Qualität zu erreichen.

## Wert

Eine Zahl zwischen 0 und 1.

- Die minimale Fixierung wird durch 0 angezeigt (volle Auflösung).
- Die maximale Fixierung wird durch 1 angezeigt (die Ränder werden in niedrigerer Auflösung gerendert).

Es liegt im Ermessen des Benutzeragenten, wie die Zahlen in diesem Bereich interpretiert werden. Beim Ändern der Fixierungsstufe ist die Wirkung im nächsten {{domxref("XRFrame")}} sichtbar.

Beachten Sie, dass einige Benutzeragenten bestimmte Fixierungsstufen implementieren können, sodass Sie unter Umständen die Fixierungsstufe in größeren Schritten ändern müssen, um eine Wirkung zu sehen. Beispielstufen:

- `0`: keine Fixierung
- `1/3`: niedrige Fixierung
- `2/3`: mittlere Fixierung
- `1.0`: maximale Fixierung

Einige Geräte unterstützen keine foveated rendering. In diesem Fall ist `fixedFoveation` [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und das Festlegen hat keine Auswirkung.

## Beispiele

### Dynamisches Festlegen der Stufe für Fixed Foveation Rendering

Die Eigenschaft `fixedFoveation` erlaubt Ihnen das Festlegen der Fixierungsstufe zur Laufzeit und für jeden Frame. Um die maximale Fixierung für eine bestimmte {{domxref("XRProjectionLayer")}} festzulegen, verwenden Sie den Wert `1`.

```js
let glProjectionLayer = glBinding.createProjectionLayer(/* … */);
glProjectionLayer.fixedFoveation = 1; // maximale Fixierung
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Foveated rendering](https://en.wikipedia.org/wiki/Foveated_rendering)
