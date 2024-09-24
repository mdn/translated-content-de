---
title: "KeyframeEffect: composite-Eigenschaft"
short-title: composite
slug: Web/API/KeyframeEffect/composite
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ APIRef("Web Animations") }}

Die **`composite`**-Eigenschaft eines {{domxref("KeyframeEffect")}} bestimmt, wie eine Animation eines Elements sich auf die zugrunde liegenden Eigenschaftswerte auswirkt.

## Wert

Um diese Werte zu verstehen, nehmen Sie das Beispiel eines `keyframeEffect`-Wertes von `blur(2)`, der auf einen zugrunde liegenden Eigenschaftswert von `blur(3)` wirkt.

- `replace`
  - : Der `keyframeEffect` **überschreibt** den zugrunde liegenden Wert, mit dem er kombiniert wird: `blur(2)` ersetzt `blur(3)`.
- `add`
  - : Der `keyframeEffect` wird dem zugrunde liegenden Wert, mit dem er kombiniert wird, **hinzugefügt** (auch als _additiv_ bezeichnet): `blur(2) blur(3)`.
- `accumulate`
  - : Der `keyframeEffect` wird auf den zugrunde liegenden Wert **akkumuliert**: `blur(5)`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- Eigenschaft von {{domxref("KeyframeEffect")}}-Objekten
- {{Glossary("Composite operation")}}
