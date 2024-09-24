---
title: "RTCInboundRtpStreamStats: Eigenschaft qpSum"
short-title: qpSum
slug: Web/API/RTCInboundRtpStreamStats/qpSum
l10n:
  sourceCommit: 0496bb2fcef13172325e1cc25a5fc71410506557
---

{{APIRef("WebRTC")}}

Die **`qpSum`**-Eigenschaft des
{{domxref("RTCInboundRtpStreamStats")}}-Wörterbuchs ist ein Wert, der durch die Addition der
**Quantisierungsparameter** (**QP**) Werte für jeden gesendeten oder empfangenen Frame
bisher auf dem Video-Track erzeugt wird, der diesem
`RTCInboundRtpStreamStats`-Objekt entspricht.

Im Allgemeinen gilt: Je höher dieser
Wert ist, desto stärker komprimiert sind die Videodaten.

## Wert

Ein nicht signierter 64-Bit-Integer-Wert, der die Summe der Quantisierungsparameter
(QP)-Werte für jeden bisher auf dem von
{{domxref("RTCInboundRtpStreamStats")}} beschriebenen Track gesendeten oder empfangenen Frame angibt. Da der QP-Wert typischerweise größer ist, um höhere Kompressionsfaktoren anzuzeigen, deutet eine größere Summe darauf hin, dass der Stream im Allgemeinen stärker komprimiert wurde.

> [!NOTE]
> Dieser Wert ist nur für Videomedien verfügbar.

## Verwendungshinweise

[Quantisierung](https://en.wikipedia.org/wiki/Quantization) ist der Prozess der Anwendung verlustbehafteter Kompression
auf einen Wertebereich, was zu einem einzelnen **Quantwert** führt. Dieser Wert
ersetzt den Bereich von Werten, wodurch die Anzahl verschiedener Werte im Gesamtdatensatz verringert wird, was die Daten komprimierbarer macht. Der Quantisierungsprozess und das Maß der Kompression können mit einem oder mehreren Parametern gesteuert werden.

Es ist wichtig zu beachten, dass sich der Wert von QP periodisch ändern kann – sogar bei jedem
Frame – sodass es schwierig ist, sicher zu wissen, wie erheblich die Kompression ist. Das Beste, was Sie tun können, ist eine Schätzung vorzunehmen. Sie können zum Beispiel den Wert von
{{domxref("RTCReceivedRtpStreamStats.framesDecoded")}} verwenden, wenn Sie die Medien empfangen, oder
{{domxref("RTCSentRtpStreamStats.framesEncoded")}}, wenn Sie sie senden, um die Anzahl
der bisher verarbeiteten Frames zu ermitteln und davon ausgehend einen Durchschnitt zu berechnen. Siehe [Berechnung der durchschnittlichen Quantisierung](#berechnung_der_durchschnittlichen_quantisierung) weiter unten für eine Funktion, die dies tut.

Außerdem hängt die genaue Bedeutung des QP-Werts vom verwendeten {{Glossary("codec")}} ab. Beispielsweise kann der QP-Wert für den VP8-Codec anywhere zwischen 1 und 127 liegen und befindet sich im Frame-Header-Element `"y_ac_qi"`, dessen Wert in
{{RFC(6386, "", "19.2")}} definiert ist. H.264 verwendet einen QP, der von 0 bis 51 reicht; in diesem Fall handelt es sich um einen Index, der verwendet wird, um eine Skalierungsmatrix abzuleiten, die während des Quantisierungsprozesses verwendet wird.
Zusätzlich ist es unwahrscheinlich, dass QP der einzige Parameter ist, den der Codec verwendet, um die
Kompression anzupassen. Siehe die einzelnen Codec-Spezifikationen für Details.

## Beispiele

### Berechnung der durchschnittlichen Quantisierung

Die `calculateAverageQP()`-Funktion unten berechnet den durchschnittlichen QP für
das übergebene {{domxref("RTCStatsReport")}}-Objekt, das RTP-Stream-Statistiken enthält, und gibt
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
