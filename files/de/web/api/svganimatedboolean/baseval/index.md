---
title: "SVGAnimatedBoolean: Eigenschaft baseVal"
short-title: baseVal
slug: Web/API/SVGAnimatedBoolean/baseVal
l10n:
  sourceCommit: 53fd7ea4a4657b1b457ee582d7a28672319bf80a
---

{{APIRef("SVG")}}

Die **`baseVal`**-Eigenschaft des [`SVGAnimatedBoolean`](/de/docs/Web/API/SVGAnimatedBoolean)-Interfaces ist der Wert des zugehörigen anpassbaren booleschen SVG-Attributs in seinem Basiszustand (nicht animiert). Sie spiegelt den Wert des zugehörigen anpassbaren booleschen Attributs wider, wenn keine Animationen angewendet werden.

Einige boolesche SVG-Attribute, wie zum Beispiel [`preserveAlpha`](/de/docs/Web/SVG/Attribute/preserveAlpha), sind animierbar. In solchen Fällen ist die `SVGAnimatedBoolean.baseVal`-Eigenschaft `false`, wenn das Attribut auf `false` gesetzt ist, weggelassen wird und standardmäßig auf `false` gesetzt ist, oder vererbbar ist und `false` erbt. Andernfalls ist der Wert `true`.

## Wert

Ein boolescher Wert; der Basiswert des reflektierten Attributs.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGElement`](/de/docs/Web/API/SVGElement)
- [`SVGAnimationElement`](/de/docs/Web/API/SVGAnimationElement)
