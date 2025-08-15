---
title: "RTCInboundRtpStreamStats: qpSum-Eigenschaft"
short-title: qpSum
slug: Web/API/RTCInboundRtpStreamStats/qpSum
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Die **`qpSum`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt die Summe der **Quantization Parameter** (**QP**)-Werte für jedes auf dem Videotrack gesendete oder empfangene Bild an, das diesem `RTCInboundRtpStreamStats`-Objekt entspricht.

Im Allgemeinen weist eine größere Zahl darauf hin, dass die Videodaten stärker komprimiert sind.

> [!NOTE]
> Dieser Wert ist nur für Videomedien verfügbar.

## Wert

Eine positive Ganzzahl.

## Beschreibung

[Quantisierung](https://en.wikipedia.org/wiki/Quantization) ist der Prozess der Anwendung verlustbehafteter Kompression auf eine Reihe von Werten, der zu einem einzelnen **quantisierten Wert** führt.
Dieser Wert ersetzt die Werte innerhalb des Bereichs und reduziert somit die Anzahl der verschiedenen Werte, die im gesamten Datensatz erscheinen, wodurch die Daten besser komprimierbar werden.
Der Quantisierungsprozess und der Umfang der Komprimierung können unter Verwendung eines oder mehrerer Parameter gesteuert werden.

Es ist wichtig zu beachten, dass sich der QP-Wert periodisch ändern kann—sogar bei jedem Frame—sodass es schwierig ist, mit Sicherheit zu wissen, wie erheblich die Komprimierung ist.
Das Beste, was Sie tun können, ist eine Schätzung vorzunehmen.
Sie können beispielsweise den Wert von [`RTCReceivedRtpStreamStats.framesDecoded`](/de/docs/Web/API/RTCReceivedRtpStreamStats/framesDecoded) verwenden, wenn Sie die Medien empfangen, oder [`RTCSentRtpStreamStats.framesEncoded`](/de/docs/Web/API/RTCSentRtpStreamStats/framesEncoded), wenn Sie sie senden, um die bisher verarbeiteten Frames zu ermitteln und von dort aus einen Durchschnitt zu berechnen.
Siehe [Berechnung der durchschnittlichen Quantisierung](#berechnung_der_durchschnittlichen_quantisierung) unten für eine Funktion, die dies tut.

Auch die genaue Bedeutung des QP-Wertes hängt vom verwendeten {{Glossary("codec", "Codec")}} ab.
Beispielsweise kann der QP-Wert für den VP8-Codec zwischen 1 und 127 liegen und findet sich im Frame-Header-Element `"y_ac_qi"`, dessen Wert in {{RFC(6386, "", "19.2")}} definiert ist.
H.264 verwendet einen QP, der von 0 bis 51 reicht; in diesem Fall handelt es sich um einen Index, der verwendet wird, um eine Skalierungsmatrix abzuleiten, die während des Quantisierungsprozesses verwendet wird.
Zusätzlich ist es wahrscheinlich, dass QP nicht der einzige Parameter ist, den der Codec verwendet, um die Komprimierung anzupassen. Siehe die einzelnen Codecspezifikationen für Details.

## Beispiele

### Berechnung der durchschnittlichen Quantisierung

Die unten gezeigte `calculateAverageQP()`-Funktion berechnet den durchschnittlichen QP für das gegebene [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Objekt, das RTP-Stream-Statistiken enthält, und gibt 0 zurück, wenn das Objekt keinen RTP-Stream beschreibt.

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

Beachten Sie, dass sich QP-Werte von Codec zu Codec unterscheiden können.
Dieser Wert ist daher nur potenziell nützlich, wenn er mit demselben Codec verglichen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
