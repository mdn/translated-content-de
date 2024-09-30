---
title: "RTCOutboundRtpStreamStats: qpSum-Eigenschaft"
short-title: qpSum
slug: Web/API/RTCOutboundRtpStreamStats/qpSum
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`qpSum`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs ist ein Wert, der durch Addition der **Quantisierungsparameter** (**QP**)-Werte für jedes vom Sender bisher produzierte Frame auf dem Videotrack, der diesem `RTCOutboundRtpStreamStats`-Objekt entspricht, ermittelt wird.

Im Allgemeinen gilt: Je höher dieser Wert ist, desto stärker komprimiert sind die Videodaten.

## Wert

Ein nicht-unterbrochener 64-Bit-Ganzzahlenwert, der die Summe der Quantisierungsparameter (QP)-Werte für jedes bisher auf dem von dem [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Objekt beschriebenen Track gesendete Frame angibt. Da der QP-Wert typischerweise größer ist, um höhere Komprimierungsfaktoren anzugeben, gilt: Je größer diese Summe ist, desto stärker war der Stream im Allgemeinen komprimiert.

> [!NOTE]
> Dieser Wert ist nur für Videomedien verfügbar.

## Verwendungshinweise

[Quantisierung](https://en.wikipedia.org/wiki/Quantization) ist der Prozess der Anwendung verlustbehafteter Komprimierung
auf einen Wertebereich, wodurch ein einzelner **Quantisierungswert** entsteht. Dieser Wert ersetzt den Wertebereich und reduziert dadurch die Anzahl der verschiedenen Werte,
die im gesamten Datensatz vorkommen, sodass die Daten leichter komprimierbar werden. Der Quantisierungsprozess und die Menge der Komprimierung können durch einen oder mehrere Parameter gesteuert werden.

Es ist wichtig zu beachten, dass sich der Wert von QP periodisch ändern kann — sogar bei jedem Frame —, sodass es schwierig ist, genau zu wissen, wie erheblich die Komprimierung ist. Das Beste, was Sie tun können, ist eine Schätzung abzugeben. Sie können den Wert von [`RTCSentRtpStreamStats.framesEncoded`](/de/docs/Web/API/RTCSentRtpStreamStats/framesEncoded) verwenden, um die Anzahl der bisher codierten Frames zu ermitteln und daraus einen Durchschnitt zu berechnen. Siehe [Berechnung der durchschnittlichen Quantisierung](#berechnung_der_durchschnittlichen_quantisierung) unten für eine Funktion, die dies tut.

Außerdem hängt die genaue Bedeutung des QP-Werts vom verwendeten [Codec](/de/docs/Glossary/codec) ab. Zum Beispiel kann der QP-Wert für den VP8-Codec zwischen 1 und 127 liegen und wird
im Frame-Header-Element `"y_ac_qi"` gefunden, dessen Wert in
{{RFC(6386, "", "19.2")}} definiert ist. H.264 verwendet einen QP-Wert, der von 0 bis 51 reicht; in diesem Fall ist es ein
Index, der verwendet wird, um eine Skalierungsmatrix abzuleiten, die während des Quantisierungsprozesses verwendet wird.
Zusätzlich ist QP wahrscheinlich nicht der einzige Parameter, den der Codec verwendet, um die
Komprimierung anzupassen. Siehe die einzelnen Codec-Spezifikationen für Details.

## Beispiele

### Berechnung der durchschnittlichen Quantisierung

Die unten gezeigte Funktion `calculateAverageQP()` berechnet den durchschnittlichen QP-Wert für das Objekt, das RTP-Stream-Statistiken enthält, und gibt 0 zurück, wenn das Objekt keinen RTP-Stream beschreibt.

```js
function calculateAverageQP(stats) {
  let frameCount = 0;

  switch (stats.type) {
    case "inbound-rtp":
    case "remote-inbound-rtp":
      frameCount = stats.framesDecoded;
      break;
    case "outbound-rtp":
    case "remote-outbound-rtp":
      frameCount = stats.framesEncoded;
      break;
    default:
      return 0;
  }

  return status.qpSum / frameCount;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
