---
title: "KeyframeEffect: iterationComposite-Eigenschaft"
short-title: iterationComposite
slug: Web/API/KeyframeEffect/iterationComposite
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ APIRef("Web Animations") }}

Die **`iterationComposite`**-Eigenschaft eines [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) bestimmt, wie sich die Änderungen der Eigenschaftswerte der Animation bei jeder Iteration der Animation akkumulieren oder gegenseitig überschreiben.

## Wert

Einer der folgenden:

- `replace`
  - : Der durch den `keyframeEffect` erzeugte Wert ist unabhängig von der aktuellen Iteration.
- `accumulate`
  - : Nachfolgende Iterationen des `keyframeEffect` bauen auf dem Endwert der vorherigen Iteration auf.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- Eigenschaft sowohl von [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect)-Objekten.
