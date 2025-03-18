---
title: "SVGAnimatedBoolean: animVal-Eigenschaft"
short-title: animVal
slug: Web/API/SVGAnimatedBoolean/animVal
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`animVal`**-Eigenschaft des [`SVGAnimatedBoolean`](/de/docs/Web/API/SVGAnimatedBoolean)-Interfaces ist eine schreibgeschützte Eigenschaft, die den aktuellen animierten Wert des zugehörigen animierbaren boolean SVG-Attributs darstellt. Wenn das Attribut nicht animiert ist, ist `animVal` dasselbe wie [`SVGAnimatedBoolean.baseVal`](/de/docs/Web/API/SVGAnimatedBoolean/baseVal).

Einige boolean SVG-Attribute, wie zum Beispiel [`preserveAlpha`](/de/docs/Web/SVG/Reference/Attribute/preserveAlpha), sind animierbar. In solchen Fällen ist die `SVGAnimatedBoolean.animVal`-Eigenschaft `true`, wenn der Attributwert zu true aufgelöst wird. Andernfalls ist der Wert `false`.

## Wert

Ein boolean; der Wert des animierbaren boolean Attributs.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGElement`](/de/docs/Web/API/SVGElement)
- [`SVGAnimationElement`](/de/docs/Web/API/SVGAnimationElement)
