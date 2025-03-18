---
title: "SVGAnimatedBoolean: baseVal-Eigenschaft"
short-title: baseVal
slug: Web/API/SVGAnimatedBoolean/baseVal
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`baseVal`**-Eigenschaft des [`SVGAnimatedBoolean`](/de/docs/Web/API/SVGAnimatedBoolean)-Interfaces gibt den Wert des zugehörigen animierbaren booleschen SVG-Attributs in seinem Basiszustand (nicht animiert) an. Sie spiegelt den Wert des zugehörigen animierbaren booleschen Attributs wider, wenn keine Animationen angewendet werden.

Einige boolesche SVG-Attribute, wie beispielsweise [`preserveAlpha`](/de/docs/Web/SVG/Reference/Attribute/preserveAlpha), sind animierbar. In solchen Fällen ist die `SVGAnimatedBoolean.baseVal`-Eigenschaft `false`, wenn das Attribut auf `false` gesetzt ist, weggelassen wird und standardmäßig `false` ist oder vererbbar ist und `false` erbt. Andernfalls ist der Wert `true`.

## Wert

Ein boolescher Wert; der Basiswert des reflektierten Attributs.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGElement`](/de/docs/Web/API/SVGElement)
- [`SVGAnimationElement`](/de/docs/Web/API/SVGAnimationElement)
