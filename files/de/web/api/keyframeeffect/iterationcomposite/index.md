---
title: "KeyframeEffect: iterationComposite-Eigenschaft"
short-title: iterationComposite
slug: Web/API/KeyframeEffect/iterationComposite
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ APIRef("Web Animations") }}

Die **`iterationComposite`**-Eigenschaft eines {{domxref("KeyframeEffect")}} bestimmt, wie sich die Werteigenschaften der Animation bei jeder Iteration ändern, akkumulieren oder überschreiben.

## Wert

Einer der folgenden:

- `replace`
  - : Der vom `keyframeEffect` erzeugte Wert ist unabhängig von der aktuellen Iteration.
- `accumulate`
  - : Nachfolgende Iterationen des `keyframeEffect` bauen auf dem Endwert der vorherigen Iteration auf.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- Eigenschaft sowohl von {{domxref("KeyframeEffect")}} Objekten.
