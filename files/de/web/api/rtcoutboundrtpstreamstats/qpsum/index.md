---
title: "RTCOutboundRtpStreamStats: Eigenschaft qpSum"
short-title: qpSum
slug: Web/API/RTCOutboundRtpStreamStats/qpSum
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`qpSum`** Eigenschaft des {{domxref("RTCOutboundRtpStreamStats")}} Wörterbuches ist ein Wert, der durch die Addition der **Quantisierungsparameter** (**QP**) Werte für jedes Bild, das dieser Sender bisher auf dem Videoträger produziert hat, der diesem `RTCOutboundRtpStreamStats` Objekt entspricht, erzeugt wird.

Im Allgemeinen gilt: Je höher dieser Wert ist, desto stärker komprimiert sind die Videodaten.

## Wert

Ein unsignierter 64-Bit-Ganzzahlenwert, der die Summe der Quantisierungsparameter (QP)-Werte für jedes bisher gesendete Bild auf dem von dem {{domxref("RTCOutboundRtpStreamStats")}} Objekt beschriebenen Track angibt. Da der Wert von QP typischerweise höher ist, um höhere Kompressionsfaktoren anzuzeigen, gilt: Je größer diese Summe ist, desto stärker war der Stream im Allgemeinen komprimiert.

> [!NOTE]
> Dieser Wert ist nur für Videomedien verfügbar.

## Nutzungshinweise

[Quantisierung](https://en.wikipedia.org/wiki/Quantization) ist der Prozess des Anwendens von verlustbehafteter Kompression
auf einen Wertebereich, was zu einem einzelnen **Quantenwert** führt. Dieser Wert
ersetzt den Bereich der Werte und reduziert damit die Anzahl verschiedener Werte,
die im gesamten Datensatz erscheinen, wodurch die Daten besser komprimierbar werden. Der Quantisierungsprozess und das Maß der Kompression können durch einen oder mehrere Parameter gesteuert werden.

Es ist wichtig zu beachten, dass sich der Wert von QP periodisch ändern kann — sogar bei jedem
Bild —, daher ist es schwierig, sicher zu wissen, wie erheblich die Kompression ist. Das Beste,
was man tun kann, ist, eine Schätzung zu machen. Sie können den Wert von
{{domxref("RTCSentRtpStreamStats.framesEncoded")}} verwenden, um die Anzahl der bisher kodierten
Bilder zu erhalten, und von dort aus einen Durchschnitt berechnen. Siehe [Berechnung der durchschnittlichen Quantisierung](#berechnung_der_durchschnittlichen_quantisierung) unten für eine Funktion, die dies tut.

Auch die genaue Bedeutung des QP-Werts hängt vom verwendeten {{Glossary("codec")}} ab. Zum Beispiel kann der QP-Wert für den VP8-Codec zwischen 1 und 127 liegen und befindet sich im Frame-Header-Element `"y_ac_qi"`, dessen Wert in
{{RFC(6386, "", "19.2")}} definiert ist. H.264 verwendet einen QP, der von 0 bis 51 reicht; in diesem Fall ist es ein
Index, der verwendet wird, um eine Skalierungsmatrix abzuleiten, die während des Quantisierungsprozesses verwendet wird.
Zusätzlich ist es unwahrscheinlich, dass QP der einzige Parameter ist, den der Codec zur Anpassung der
Kompression verwendet. Siehe die jeweiligen Codec-Spezifikationen für Details.

## Beispiele

### Berechnung der durchschnittlichen Quantisierung

Die `calculateAverageQP()` Funktion unten berechnet den durchschnittlichen QP für das Objekt, das RTP-Stream-Statistiken enthält, und gibt 0 zurück, wenn das Objekt keinen RTP-Stream beschreibt.

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
