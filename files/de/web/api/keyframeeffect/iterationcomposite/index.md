---
title: "KeyframeEffect: iterationComposite-Eigenschaft"
short-title: iterationComposite
slug: Web/API/KeyframeEffect/iterationComposite
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ APIRef("Web Animations") }}

Die **`iterationComposite`**-Eigenschaft eines [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) legt fest, wie sich die Wertänderungen der Animation bei jeder Iteration kumulieren oder überschreiben.

## Wert

Einer der folgenden:

- `replace`
  - : Der von `keyframeEffect` erzeugte Wert ist unabhängig von der aktuellen Iteration.
- `accumulate`
  - : Nachfolgende Iterationen des `keyframeEffect` bauen auf dem Endwert der vorherigen Iteration auf.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- Eigenschaft von [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect)-Objekten.
