---
title: "PannerNode: coneOuterGain-Eigenschaft"
short-title: coneOuterGain
slug: Web/API/PannerNode/coneOuterGain
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{ APIRef("Web Audio API") }}

Die `coneOuterGain`-Eigenschaft des [`PannerNode`](/de/docs/Web/API/PannerNode)-Interfaces ist ein Doppelwert, der die Höhe der Lautstärkereduzierung außerhalb des Kegels beschreibt, der durch das Attribut [`coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle) definiert ist.

Der Standardwert der `coneOuterGain`-Eigenschaft ist `0`, was bedeutet, dass außerhalb des Kegels kein Ton zu hören ist.

## Wert

Ein Doppelwert. Der Standard ist `0`, und der Wert kann im Bereich 0–1 liegen.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Eigenschaft ein Wert außerhalb des akzeptierten Bereichs (0–1) zugewiesen wurde.

## Beispiele

Sehen Sie sich [`PannerNode.orientationX`](/de/docs/Web/API/PannerNode/orientationX#example) für Beispielcode an, der veranschaulicht, wie sich die Änderung der Orientierungsparameter des [`PannerNode`](/de/docs/Web/API/PannerNode) in Kombination mit [`coneInnerAngle`](/de/docs/Web/API/PannerNode/coneInnerAngle) und [`coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle) auf die Lautstärke auswirkt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Grundlagen der Web Audio-Raumklanggestaltung](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
