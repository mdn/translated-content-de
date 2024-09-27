---
title: "RTCRtpStreamStats: qpSum-Eigenschaft"
short-title: qpSum
slug: Web/API/RTCRtpStreamStats/qpSum
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`qpSum`**-Eigenschaft des
[`RTCRtpStreamStats`](/de/docs/Web/API/RTCRtpStreamStats)-Dictionaries ist ein Wert, der durch die Addition der
**Quantisierungsparameter** (**QP**)-Werte für jedes bisher gesendete oder empfangene Frame auf der Videospur erzeugt wird, die diesem
`RTCRtpStreamStats`-Objekt entspricht.

Im Allgemeinen ist das Video umso stärker komprimiert, je höher diese Zahl ist.

## Wert

Ein unsignierter 64-Bit-Integer-Wert, der die Summe der Quantisierungsparameter-(QP)-Werte für jedes bisher gesendete oder empfangene Frame auf der von diesem
[`RTCRtpStreamStats`](/de/docs/Web/API/RTCRtpStreamStats)-Objekt beschriebenen Spur angibt. Da der Wert des QP typischerweise höher ist, um stärkere Kompressionsgrade anzuzeigen, ist diese Summe umso größer, je stärker der Stream im Allgemeinen komprimiert wurde.

> [!NOTE]
> Dieser Wert ist nur für Video-Medien verfügbar.

## Nutzungshinweise

[Quantisierung](https://de.wikipedia.org/wiki/Quantisierung) ist der Prozess, bei dem verlustbehaftete Kompression auf einen Wertebereich angewendet wird, wodurch ein einzelner **Quantwert** entsteht. Dieser Wert ersetzt den Wertebereich, wodurch die Anzahl der verschiedenen Werte im gesamten Datensatz reduziert wird, was die Daten komprimierbarer macht. Der Quantisierungsprozess und das Maß der Kompression können mit einem oder mehreren Parametern gesteuert werden.

Es ist wichtig zu beachten, dass sich der Wert des QP periodisch ändern kann – möglicherweise sogar jedes Frame – sodass es schwierig ist, sicher zu wissen, wie erheblich die Kompression ist. Im besten Fall kann eine Schätzung gemacht werden. Sie können zum Beispiel den Wert von
[`RTCReceivedRtpStreamStats.framesDecoded`](/de/docs/Web/API/RTCReceivedRtpStreamStats/framesDecoded) verwenden, wenn die Medien empfangen werden, oder
[`RTCSentRtpStreamStats.framesEncoded`](/de/docs/Web/API/RTCSentRtpStreamStats/framesEncoded) verwenden, wenn sie gesendet werden, um die Anzahl der bisher bearbeiteten Frames zu erhalten und daraus einen Durchschnitt zu berechnen. Siehe [Berechnung der durchschnittlichen Quantisierung](#berechnung_der_durchschnittlichen_quantisierung) unten für eine Funktion, die dies tut.

Auch die genaue Bedeutung des QP-Werts hängt vom verwendeten [Codec](/de/docs/Glossary/codec) ab. Beim VP8-Codec kann der QP-Wert zum Beispiel zwischen 1 und 127 liegen und befindet sich im Frame-Header-Element `"y_ac_qi"`, dessen Wert in {{RFC(6386, "", "19.2")}} definiert ist. H.264 verwendet einen QP-Wert, der zwischen 0 und 51 reicht; in diesem Fall ist er ein Index, der verwendet wird, um eine Skalierungsmatrix während des Quantisierungsprozesses abzuleiten. Zusätzlich ist es unwahrscheinlich, dass QP der einzige Parameter ist, den der Codec zur Anpassung der Kompression verwendet. Siehe die einzelnen Codec-Spezifikationen für Details.

## Beispiele

### Berechnung der durchschnittlichen Quantisierung

Die unten gezeigte `calculateAverageQP()`-Funktion berechnet den durchschnittlichen QP für das gegebene [`RTCRtpStreamStats`](/de/docs/Web/API/RTCRtpStreamStats)-Objekt und gibt 0 zurück, wenn das Objekt keinen RTP-Stream beschreibt.

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
