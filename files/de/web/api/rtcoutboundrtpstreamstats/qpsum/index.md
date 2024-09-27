---
title: "RTCOutboundRtpStreamStats: qpSum-Eigenschaft"
short-title: qpSum
slug: Web/API/RTCOutboundRtpStreamStats/qpSum
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`qpSum`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs ist ein Wert, der durch die Addition der **Quantisierungsparameter** (**QP**)-Werte für jedes bisher produzierte Frame auf dem Videokanal erzeugt wird, das diesem `RTCOutboundRtpStreamStats`-Objekt entspricht.

Im Allgemeinen gilt: Je höher diese Zahl ist, desto stärker ist die Videodatenkompression.

## Wert

Ein unsignierter 64-Bit-Ganzzahlwert, der die Summe des Quantisierungsparameterwerts (QP) für jedes bisher gesendete Frame auf dem durch das [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Objekt beschriebenen Kanal anzeigt. Da der Wert des QP in der Regel größer ist, um höhere Kompressionsfaktoren anzuzeigen, gilt: Je größer diese Summe ist, desto stärker wurde der Stream im Allgemeinen komprimiert.

> [!NOTE]
> Dieser Wert ist nur für Videomedien verfügbar.

## Nutzungshinweise

[Quantisierung](https://en.wikipedia.org/wiki/Quantization) ist der Prozess der Anwendung von verlustbehafteter Kompression auf einen Wertebereich, was zu einem einzelnen **Quantenwert** führt. Dieser Wert ersetzt den Wertebereich, wodurch die Anzahl der verschiedenen Werte im gesamten Datensatz reduziert wird, was die Daten besser komprimierbar macht. Der Quantisierungsprozess und das Ausmaß der Kompression können durch einen oder mehrere Parameter gesteuert werden.

Es ist wichtig zu beachten, dass sich der Wert des QP periodisch ändern kann – sogar bei jedem Frame – sodass es schwierig ist, sicher zu wissen, wie bedeutend die Kompression ist. Das Beste, was Sie tun können, ist, eine Schätzung vorzunehmen. Sie können den Wert von [`RTCSentRtpStreamStats.framesEncoded`](/de/docs/Web/API/RTCSentRtpStreamStats/framesEncoded) verwenden, um die Anzahl der bisher kodierten Frames zu ermitteln, und daraus einen Durchschnitt berechnen. Siehe [Berechnung der durchschnittlichen Quantisierung](#berechnung_der_durchschnittlichen_quantisierung) unten für eine Funktion, die dies tut.

Auch die genaue Bedeutung des QP-Werts hängt vom verwendeten [Codec](/de/docs/Glossary/codec) ab. Zum Beispiel kann für den VP8-Codec der QP-Wert zwischen 1 und 127 liegen und befindet sich im Frame-Header-Element `"y_ac_qi"`, dessen Wert in {{RFC(6386, "", "19.2")}} definiert ist. H.264 verwendet einen QP-Bereich von 0 bis 51; in diesem Fall ist es ein Index, der zur Ableitung einer Skalierungsmatrix während des Quantisierungsprozesses verwendet wird. Zusätzlich ist QP vermutlich nicht der einzige Parameter, den der Codec zur Anpassung der Kompression verwendet. Siehe die individuellen Codecspezifikationen für Details.

## Beispiele

### Berechnung der durchschnittlichen Quantisierung

Die unten gezeigte `calculateAverageQP()`-Funktion berechnet den durchschnittlichen QP für das Objekt, das RTP-Stream-Statistiken enthält, und gibt 0 zurück, wenn das Objekt keinen RTP-Stream beschreibt.

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
