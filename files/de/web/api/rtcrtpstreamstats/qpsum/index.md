---
title: "RTCRtpStreamStats: qpSum-Eigenschaft"
short-title: qpSum
slug: Web/API/RTCRtpStreamStats/qpSum
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`qpSum`**-Eigenschaft des
{{domxref("RTCRtpStreamStats")}}-Wörterbuchs ist ein Wert, der durch Addition der
**Quantization Parameter** (**QP**)-Werte für jedes bisher gesendete oder empfangene Bild auf der Videospur erstellt wird, die diesem `RTCRtpStreamStats`-Objekt entspricht.

Im Allgemeinen gilt: Je höher dieser Wert ist,
desto stärker ist die Videodaten komprimiert.

## Wert

Ein vorzeichenloser 64-Bit-Ganzzahlwert, der die Summe der Quantization Parameter
(QP)-Werte für jedes bisher gesendete oder empfangene Bild auf der vom
{{domxref("RTCRtpStreamStats")}}-Objekt beschriebenen Spur angibt. Da der QP-Wert typischerweise größer ist, um höhere Kompressionsfaktoren anzuzeigen, gilt: Je größer diese Summe ist, desto stärker wurde der Stream im Allgemeinen komprimiert.

> [!NOTE]
> Dieser Wert ist nur für Videomedien verfügbar.

## Verwendungshinweise

[Quantisierung](https://en.wikipedia.org/wiki/Quantization) ist der Prozess der Anwendung von verlustbehafteter Kompression
auf einen Bereich von Werten, was zu einem einzelnen **Quantenwert** führt. Dieser Wert
ersetzt die Wertebereich und verringert so die Anzahl der unterschiedlichen Werte
im gesamten Datensatz, wodurch die Daten besser komprimiert werden können. Der Quantisierungsprozess und der Grad der Kompression können durch ein oder mehrere Parameter gesteuert werden.

Es ist wichtig zu beachten, dass sich der Wert des QP periodisch ändern kann – sogar bei jedem
Bild –, sodass es schwierig ist, sicher zu wissen, wie erheblich die Kompression ist. Das Beste, was Sie tun können, ist, eine Schätzung vorzunehmen. Sie können beispielsweise den Wert von
{{domxref("RTCReceivedRtpStreamStats.framesDecoded")}} verwenden, wenn Sie die Medien empfangen, oder
{{domxref("RTCSentRtpStreamStats.framesEncoded")}} verwenden, wenn Sie sie senden, um die Anzahl der
bisher verarbeiteten Bilder zu erhalten, und daraus einen Durchschnitt berechnen. Siehe [Berechnung der durchschnittlichen Quantisierung](#berechnung_der_durchschnittlichen_quantisierung) unten für eine Funktion, die dies tut.

Auch die genaue Bedeutung des QP-Werts hängt vom verwendeten {{Glossary("codec")}} ab. Beispielsweise kann beim VP8-Codec der QP-Wert zwischen 1 und 127 liegen und befindet sich im Bildkopf-Element `"y_ac_qi"`, dessen Wert in
{{RFC(6386, "", "19.2")}} definiert ist. H.264 verwendet einen QP, der von 0 bis 51 reicht; in diesem Fall ist es ein
Index, der verwendet wird, um eine Skalierungsmatrix während des Quantisierungsprozesses abzuleiten.
Zusätzlich ist es unwahrscheinlich, dass QP der einzige Parameter ist, den der Codec zur Anpassung
der Kompression verwendet. Siehe die jeweiligen Codec-Spezifikationen für Details.

## Beispiele

### Berechnung der durchschnittlichen Quantisierung

Die unten gezeigte Funktion `calculateAverageQP()` berechnet den durchschnittlichen QP für
das gegebene {{domxref("RTCRtpStreamStats")}}-Objekt und gibt 0 zurück, wenn das Objekt keinen RTP-Stream beschreibt.

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
