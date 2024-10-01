---
title: "RTCInboundRtpStreamStats: qpSum-Eigenschaft"
short-title: qpSum
slug: Web/API/RTCInboundRtpStreamStats/qpSum
l10n:
  sourceCommit: 0496bb2fcef13172325e1cc25a5fc71410506557
---

{{APIRef("WebRTC")}}

Die **`qpSum`** Eigenschaft des
[`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs ist ein Wert, der durch Addition der
**Quantisierungsparameter** (**QP**) Werte für jedes bisher gesendete oder empfangene Frame auf dem Videotrack, der diesem
`RTCInboundRtpStreamStats`-Objekt entspricht, generiert wird.

Im Allgemeinen gilt: Je höher dieser
Wert ist, desto stärker komprimiert sind die Videodaten.

## Wert

Ein unsignierter 64-Bit-Integer-Wert, der die Summe der Quantisierungsparameter
(QP) Werte für jedes bisher auf dem durch das
[`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Objekt beschriebenen Track gesendete oder empfangene Frame angibt. Da der QP-Wert in der Regel größer ist, um höhere Komprimierungsfaktoren anzuzeigen, ist diese Summe umso größer, je stärker der Stream im Allgemeinen komprimiert wurde.

> [!NOTE]
> Dieser Wert ist nur für Videomedien verfügbar.

## Nutzungshinweise

[Quantisierung](https://en.wikipedia.org/wiki/Quantization) ist der Prozess der Anwendung verlustbehafteter Komprimierung
auf einen Wertebereich, was zu einem einzigen **Quantwert** führt. Dieser Wert
ersetzt den Wertebereich, wodurch die Anzahl der verschiedenen Werte, die im gesamten Datensatz erscheinen, reduziert wird, was die Daten besser komprimierbar macht. Der Quantisierungsprozess und das Ausmaß der Komprimierung können durch einen oder mehrere Parameter gesteuert werden.

Es ist wichtig zu beachten, dass sich der QP-Wert regelmäßig ändern kann—sogar bei jedem
Frame—, sodass es schwierig ist, mit Sicherheit zu wissen, wie erheblich die Komprimierung ist. Das Beste, was man tun kann, ist eine Schätzung. Sie können beispielsweise den Wert von
[`RTCReceivedRtpStreamStats.framesDecoded`](/de/docs/Web/API/RTCReceivedRtpStreamStats/framesDecoded) verwenden, wenn Sie die Medien empfangen, oder
[`RTCSentRtpStreamStats.framesEncoded`](/de/docs/Web/API/RTCSentRtpStreamStats/framesEncoded), wenn Sie sie senden, um die Anzahl der
bisher verarbeiteten Frames zu erhalten und daraus einen Durchschnitt zu berechnen. Siehe [Berechnung der durchschnittlichen Quantisierung](#berechnung_der_durchschnittlichen_quantisierung) unten für eine Funktion, die dies tut.

Auch die genaue Bedeutung des QP-Wertes hängt von dem verwendeten {{Glossary("codec", "Codec")}} ab. Beim VP8-Codec kann der QP-Wert beispielsweise zwischen 1 und 127 liegen und wird im Frame-Header-Element `"y_ac_qi"` angegeben, dessen Wert in
{{RFC(6386, "", "19.2")}} definiert ist. H.264 verwendet einen QP, der von 0 bis 51 reicht; in diesem Fall handelt es sich um einen Index, der verwendet wird, um eine Skalierungsmatrix abzuleiten, die während des Quantisierungsprozesses verwendet wird.
Zusätzlich ist es unwahrscheinlich, dass QP der einzige Parameter ist, den der Codec zur Anpassung der
Komprimierung verwendet. Einzelheiten finden Sie in den jeweiligen Codec-Spezifikationen.

## Beispiele

### Berechnung der durchschnittlichen Quantisierung

Die Funktion `calculateAverageQP()`, die unten gezeigt wird, berechnet den durchschnittlichen QP für
das gegebene [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Objekt, das RTP-Stream-Statistiken enthält, und gibt 0 zurück, wenn das Objekt keinen RTP-Stream beschreibt.

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
