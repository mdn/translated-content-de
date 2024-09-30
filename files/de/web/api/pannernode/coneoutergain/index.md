---
title: "PannerNode: coneOuterGain-Eigenschaft"
short-title: coneOuterGain
slug: Web/API/PannerNode/coneOuterGain
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{ APIRef("Web Audio API") }}

Die `coneOuterGain`-Eigenschaft der [`PannerNode`](/de/docs/Web/API/PannerNode)-Schnittstelle ist ein double-Wert, der die Menge der Lautstärkereduzierung außerhalb des Kegels beschreibt, definiert durch das [`coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle)-Attribut.

Der Standardwert der `coneOuterGain`-Eigenschaft ist `0`, was bedeutet, dass außerhalb des Kegels kein Ton zu hören ist.

## Wert

Ein double. Der Standardwert ist `0`, und sein Wert kann im Bereich von 0–1 liegen.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Eigenschaft ein Wert außerhalb des akzeptierten Bereichs (0–1) gegeben wurde.

## Beispiele

Siehe [`PannerNode.orientationX`](/de/docs/Web/API/PannerNode/orientationX#example) für Beispielcode, der zeigt, wie die Änderung der Ausrichtungsparameter der [`PannerNode`](/de/docs/Web/API/PannerNode) in Kombination mit [`coneInnerAngle`](/de/docs/Web/API/PannerNode/coneInnerAngle) und [`coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle) die Lautstärke beeinflusst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Grundlagen der Web Audio-Räumlichkeit](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
