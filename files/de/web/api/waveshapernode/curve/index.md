---
title: "WaveShaperNode: curve-Eigenschaft"
short-title: curve
slug: Web/API/WaveShaperNode/curve
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{ APIRef("Web Audio API") }}

Die `curve`-Eigenschaft des [`WaveShaperNode`](/de/docs/Web/API/WaveShaperNode)-Interfaces ist ein {{jsxref("Float32Array")}} von Zahlen, die die anzuwendende Verzerrung beschreiben.

Das mittlere Element des Arrays wird auf Signalwerte von `0` angewendet, das erste auf Signalwerte von `-1` und das letzte auf Signalwerte von `1`; Werte niedriger als `-1` oder größer als `1` werden wie `-1` oder `1` behandelt.

Falls notwendig, werden Zwischenwerte der Verzerrungskurve linear interpoliert.

> [!NOTE]
> Das Array kann einen `null`-Wert haben: In diesem Fall wird keine Verzerrung auf das Eingangssignal angewendet.

## Wert

Ein {{jsxref("Float32Array")}}.

## Beispiele

Siehe [`BaseAudioContext.createWaveShaper()`](/de/docs/Web/API/BaseAudioContext/createWaveShaper#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
