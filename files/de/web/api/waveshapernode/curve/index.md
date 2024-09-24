---
title: "WaveShaperNode: curve Eigenschaft"
short-title: curve
slug: Web/API/WaveShaperNode/curve
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{ APIRef("Web Audio API") }}

Die Eigenschaft `curve` des {{ domxref("WaveShaperNode") }} Interfaces ist ein {{jsxref("Float32Array")}} von Zahlen, die die anzuwendende Verzerrung beschreiben.

Das mittlere Element des Arrays wird auf alle Signalwerte von `0` angewendet, das erste auf Signalwerte von `-1` und das letzte auf Signalwerte von `1`; Werte kleiner als `-1` oder größer als `1` werden entsprechend wie `-1` oder `1` behandelt.

Falls erforderlich, werden Zwischenwerte der Verzerrungskurve linear interpoliert.

> [!NOTE]
> Das Array kann einen `null`-Wert haben: in diesem Fall wird keine Verzerrung auf das Eingangssignal angewendet.

## Wert

Ein {{jsxref("Float32Array")}}.

## Beispiele

Sehen Sie sich den Beispielcode unter [`BaseAudioContext.createWaveShaper()`](/de/docs/Web/API/BaseAudioContext/createWaveShaper#examples) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
