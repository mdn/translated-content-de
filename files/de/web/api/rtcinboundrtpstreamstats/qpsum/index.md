---
title: "RTCInboundRtpStreamStats: qpSum-Eigenschaft"
short-title: qpSum
slug: Web/API/RTCInboundRtpStreamStats/qpSum
l10n:
  sourceCommit: 0496bb2fcef13172325e1cc25a5fc71410506557
---

{{APIRef("WebRTC")}}

Die **`qpSum`**-Eigenschaft des
[`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Dictionaries ist ein Wert, der durch die Addition der
**Quantisierungsparameter** (**QP**) für jedes bisher gesendete oder empfangene Frame auf der Videospur, die diesem
`RTCInboundRtpStreamStats`-Objekt entspricht, erzeugt wird.

Im Allgemeinen gilt: Je höher diese
Zahl ist, desto stärker komprimiert sind die Videodaten.

## Wert

Ein nicht signierter 64-Bit-Ganzzahlenwert, der die Summe der Quantisierungsparameter
(QP) für jedes bisher gesendete oder empfangene Frame auf der im
[`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Objekt beschriebenen Spur angibt. Da der Wert des QP typischerweise
höher ist, um höhere Kompressionsfaktoren anzuzeigen, gilt im Allgemeinen: Je größer diese Summe ist, desto stärker
komprimiert war der Stream.

> [!NOTE]
> Dieser Wert ist nur für Videomedien verfügbar.

## Nutzungshinweise

[Quantisierung](https://en.wikipedia.org/wiki/Quantization) ist der Prozess der Anwendung verlustbehafteter Kompression
auf einen Wertebereich, der zu einem einzelnen **Quantwert** führt. Dieser Wert
ersetzt den Wertebereich und verringert damit die Anzahl der unterschiedlichen Werte,
die im gesamten Datensatz vorkommen, wodurch die Daten besser komprimierbar werden. Der Quantisierungsprozess und der Grad der Kompression können mit einem oder mehreren Parametern gesteuert werden.

Es ist wichtig zu beachten, dass sich der Wert von QP periodisch ändern kann – sogar bei jedem
Frame – daher ist es schwierig, genau zu wissen, wie erheblich die Kompression ist. Das Beste,
was Sie tun können, ist, eine Schätzung abzugeben. Sie können beispielsweise den Wert von
[`RTCReceivedRtpStreamStats.framesDecoded`](/de/docs/Web/API/RTCReceivedRtpStreamStats/framesDecoded) verwenden, wenn Sie die Medien empfangen, oder
[`RTCSentRtpStreamStats.framesEncoded`](/de/docs/Web/API/RTCSentRtpStreamStats/framesEncoded), wenn Sie sie senden, um die Anzahl der
bisher verarbeiteten Frames zu ermitteln und daraus einen Durchschnitt zu berechnen. Siehe [Berechnung der durchschnittlichen Quantisierung](#berechnung_der_durchschnittlichen_quantisierung) unten für eine Funktion, die dies tut.

Auch hängt die genaue Bedeutung des QP-Wertes vom verwendeten [Codec](/de/docs/Glossary/codec) ab. Zum Beispiel kann beim VP8-Codec der QP-Wert zwischen 1 und 127 liegen und findet sich im Frame-Header-Element `"y_ac_qi"`, dessen Wert in
{{RFC(6386, "", "19.2")}} definiert ist. H.264 verwendet ein QP, das von 0 bis 51 reicht; in diesem Fall ist es ein
Index, der verwendet wird, um eine Skalierungsmatrix während des Quantisierungsprozesses abzuleiten.
Zusätzlich ist es unwahrscheinlich, dass QP der einzige Parameter ist, den der Codec zur Anpassung der
Kompression verwendet. Details finden sich in den jeweiligen Codec-Spezifikationen.

## Beispiele

### Berechnung der durchschnittlichen Quantisierung

Die unten gezeigte Funktion `calculateAverageQP()` berechnet den durchschnittlichen QP
für das gegebene [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Objekt, das RTP-Stream-Statistiken enthält, und gibt
0 zurück, wenn das Objekt keinen RTP-Stream beschreibt.

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
