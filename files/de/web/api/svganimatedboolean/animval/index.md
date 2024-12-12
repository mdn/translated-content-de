---
title: "SVGAnimatedBoolean: animVal Eigenschaft"
short-title: animVal
slug: Web/API/SVGAnimatedBoolean/animVal
l10n:
  sourceCommit: 53fd7ea4a4657b1b457ee582d7a28672319bf80a
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`animVal`** der Schnittstelle [`SVGAnimatedBoolean`](/de/docs/Web/API/SVGAnimatedBoolean) repräsentiert den aktuellen animierten Wert des zugehörigen animierbaren booleschen SVG-Attributs. Wenn das Attribut nicht animiert ist, entspricht `animVal` dem Wert von [`SVGAnimatedBoolean.baseVal`](/de/docs/Web/API/SVGAnimatedBoolean/baseVal).

Einige boolesche SVG-Attribute, wie zum Beispiel [`preserveAlpha`](/de/docs/Web/SVG/Attribute/preserveAlpha), sind animierbar. In solchen Fällen ist die Eigenschaft `SVGAnimatedBoolean.animVal` `true`, wenn der Attributwert zu true aufgelöst wird. Andernfalls ist der Wert `false`.

## Wert

Ein boolescher Wert; der Wert des animierbaren booleschen Attributs.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGElement`](/de/docs/Web/API/SVGElement)
- [`SVGAnimationElement`](/de/docs/Web/API/SVGAnimationElement)
