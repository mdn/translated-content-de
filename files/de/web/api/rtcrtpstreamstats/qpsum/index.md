---
title: "RTCRtpStreamStats: qpSum-Eigenschaft"
short-title: qpSum
slug: Web/API/RTCRtpStreamStats/qpSum
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`qpSum`**-Eigenschaft des
[`RTCRtpStreamStats`](/de/docs/Web/API/RTCRtpStreamStats)-Wörterbuchs ist ein Wert, der durch die Addition der
**Quantisierungsparameter** (**QP**)-Werte für jeden bisher gesendeten oder empfangenen Frame auf der Videospur, die diesem
`RTCRtpStreamStats`-Objekt entspricht, erzeugt wird.

Im Allgemeinen gilt: Je höher dieser Wert ist,
desto stärker komprimiert sind die Videodaten.

## Wert

Ein vorzeichenloser 64-Bit-Integer-Wert, der die Summe der Quantisierungsparameter
(QP)-Werte für jeden bisher auf der vom
[`RTCRtpStreamStats`](/de/docs/Web/API/RTCRtpStreamStats) beschriebenen Spur gesendeten oder empfangenen Frame anzeigt. Da der QP-Wert typischerweise größer wird, um höhere Kompressionsfaktoren anzuzeigen, gilt, je größer diese Summe ist, desto stärker wurde der Stream im Allgemeinen komprimiert.

> [!NOTE]
> Dieser Wert ist nur für Videomedien verfügbar.

## Verwendungshinweise

[Quantisierung](https://en.wikipedia.org/wiki/Quantization) ist der Prozess der Anwendung verlustbehafteter Kompression
auf einen Wertebereich, was zu einem einzelnen **Quantwert** führt. Dieser Wert
ersetzt den Wertebereich, wodurch die Anzahl der verschiedenen Werte, die im gesamten Datensatz erscheinen, verringert wird und die Daten besser komprimierbar werden. Der Quantisierungsprozess und der Grad der Kompression können durch ein oder mehrere Parameter gesteuert werden.

Es ist wichtig zu beachten, dass der Wert von QP sich regelmäßig ändern kann - sogar bei jedem Frame -, weshalb es schwierig ist, genau zu wissen, wie bedeutend die Kompression ist. Das Beste, was Sie tun können, ist eine Schätzung. Sie können beispielsweise den Wert von
[`RTCReceivedRtpStreamStats.framesDecoded`](/de/docs/Web/API/RTCReceivedRtpStreamStats/framesDecoded) verwenden, wenn Sie die Medien empfangen, oder
[`RTCSentRtpStreamStats.framesEncoded`](/de/docs/Web/API/RTCSentRtpStreamStats/framesEncoded), wenn Sie diese senden, um die Anzahl der bisher verarbeiteten Frames zu erhalten und daraus einen Durchschnitt zu berechnen. Siehe [Berechnung der durchschnittlichen Quantisierung](#berechnung_der_durchschnittlichen_quantisierung) unten für eine Funktion, die dies erledigt.

Außerdem hängt die genaue Bedeutung des QP-Werts vom verwendeten [Codec](/de/docs/Glossary/codec) ab. Zum Beispiel kann der QP-Wert für den VP8-Codec von 1 bis 127 reichen und befindet sich im Frame-Header-Element `"y_ac_qi"`, dessen Wert in
{{RFC(6386, "", "19.2")}} definiert ist. H.264 verwendet ein QP, das von 0 bis 51 reicht; in diesem Fall ist es ein Index, der zur Ableitung einer Skalierungsmatrix verwendet wird, die während des Quantisierungsprozesses verwendet wird. Zusätzlich ist QP wahrscheinlich nicht der einzige Parameter, den der Codec zur Anpassung der Kompression verwendet. Einzelheiten finden Sie in den einzelnen Codec-Spezifikationen.

## Beispiele

### Berechnung der durchschnittlichen Quantisierung

Die unten gezeigte `calculateAverageQP()`-Funktion berechnet den durchschnittlichen QP für
das gegebene [`RTCRtpStreamStats`](/de/docs/Web/API/RTCRtpStreamStats)-Objekt und gibt 0 zurück, wenn das Objekt keinen RTP-Stream beschreibt.

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
