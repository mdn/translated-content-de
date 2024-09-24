---
title: "PannerNode: Eigenschaft coneOuterGain"
short-title: coneOuterGain
slug: Web/API/PannerNode/coneOuterGain
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{ APIRef("Web Audio API") }}

Die Eigenschaft `coneOuterGain` der {{ domxref("PannerNode") }}-Schnittstelle ist ein Double-Wert, der die Menge der Lautstärkereduktion außerhalb des Kegels beschreibt, definiert durch das Attribut {{domxref("PannerNode.coneOuterAngle", "coneOuterAngle")}}.

Der Standardwert der `coneOuterGain`-Eigenschaft ist `0`, was bedeutet, dass außerhalb des Kegels kein Ton zu hören ist.

## Wert

Ein Double. Der Standardwert ist `0`, und der Wert kann im Bereich 0–1 liegen.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Eigenschaft ein Wert außerhalb des akzeptierten Bereichs (0–1) gegeben wurde.

## Beispiele

Siehe [`PannerNode.orientationX`](/de/docs/Web/API/PannerNode/orientationX#example) für Beispielcode, der zeigt, wie das Ändern der {{domxref("PannerNode")}}-Orientierungsparameter in Kombination mit {{domxref("PannerNode.coneInnerAngle", "coneInnerAngle")}} und {{domxref("PannerNode.coneOuterAngle", "coneOuterAngle")}} die Lautstärke beeinflusst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Grundlagen der Web Audio-Räumlichkeit](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
