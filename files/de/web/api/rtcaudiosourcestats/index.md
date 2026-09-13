---
title: RTCAudioSourceStats
slug: Web/API/RTCAudioSourceStats
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("WebRTC")}}

Das **`RTCAudioSourceStats`**-Wörterbuch des [WebRTC API](/de/docs/Web/API/WebRTC_API) liefert Statistik-Informationen über eine Audiostrecke ([`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)), die an einen oder mehrere Sender ([`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)) angeschlossen ist.

Diese Statistiken können durch Iteration des [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) abgerufen werden, welches von [`RTCRtpSender.getStats()`](/de/docs/Web/API/RTCRtpSender/getStats) oder [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, bis Sie einen Bericht mit dem [`type`](/de/docs/Web/API/RTCAudioSourceStats/type) von `media-source` und einem [`kind`](/de/docs/Web/API/RTCAudioSourceStats/kind) von `audio` finden.

> [!NOTE]
> Für Audioinformationen über entfernte Quellenstrecken (die empfangen werden), siehe [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats).

## Instanz-Eigenschaften

- [`audioLevel`](/de/docs/Web/API/RTCAudioSourceStats/audioLevel) {{Experimental_Inline}}{{optional_inline}}
  - : Eine Zahl, die den Audiopegel der Medienquelle darstellt.
- [`totalAudioEnergy`](/de/docs/Web/API/RTCAudioSourceStats/totalAudioEnergy) {{Experimental_Inline}}{{optional_inline}}
  - : Eine Zahl, die die gesamte Audioenergie der Medienquelle über die Lebensdauer des Statistikobjekts darstellt.
- [`totalSamplesDuration`](/de/docs/Web/API/RTCAudioSourceStats/totalSamplesDuration) {{Experimental_Inline}}{{optional_inline}}
  - : Eine Zahl, die die Gesamtdauer aller von der Medienquelle erzeugten Proben über die Lebensdauer des Statistikobjekts darstellt.

### Allgemeine Eigenschaften der Medienquelle

Die folgenden Eigenschaften sind sowohl in `RTCAudioSourceStats` als auch in [`RTCVideoSourceStats`](/de/docs/Web/API/RTCVideoSourceStats) vorhanden: <!-- RTCMediaSourceStats  -->

- [`trackIdentifier`](/de/docs/Web/API/RTCAudioSourceStats/trackIdentifier)
  - : Ein String, der den [`id`](/de/docs/Web/API/MediaStreamTrack/id) Wert des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) enthält, der mit der Audioquelle verknüpft ist.
- [`kind`](/de/docs/Web/API/RTCAudioSourceStats/kind)
  - : Ein String, der angibt, ob dieses Objekt Statistiken für eine Videoquelle oder eine Medienquelle darstellt. Für ein `RTCAudioSourceStats` wird dies immer `audio` sein.

### Allgemeine Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen Statistikobjekten gemeinsam. <!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCAudioSourceStats/id)
  - : Ein String, der das Objekt eindeutig identifiziert, das überwacht wird, um diesen Satz von Statistiken zu erzeugen.
- [`timestamp`](/de/docs/Web/API/RTCAudioSourceStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das die Zeit angibt, zu der die Probe für dieses Statistikobjekt entnommen wurde.
- [`type`](/de/docs/Web/API/RTCAudioSourceStats/type)
  - : Ein String mit dem Wert `"media-source"`, der anzeigt, dass das Objekt eine Instanz von `RTCAudioSourceStats` oder [`RTCVideoSourceStats`](/de/docs/Web/API/RTCVideoSourceStats) ist.

## Beschreibung

Das Interface liefert Statistiken über eine Audio-Medienquelle, die an einen oder mehrere Sender angeschlossen ist.
Die Informationen umfassen den aktuellen Audiopegel, der über eine kurze (implementierungsabhängige) Dauer gemittelt wird.

Die Statistiken umfassen auch die akkumulierte Gesamtenergie und die Gesamtdauer der Proben zu einem bestimmten Zeitpunkt.
Die Summen können verwendet werden, um den durchschnittlichen Audiopegel über die Lebensdauer des Statistikobjekts zu bestimmen.
Sie können einen quadratischen Mittelwert (RMS) in denselben Einheiten wie `audioLevel` mit der folgenden Formel berechnen:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><msqrt><mfrac><mi>totalAudioEnergy</mi><mi>totalSamplesDuration</mi></mfrac></msqrt><annotation encoding="TeX">\sqrt{\frac{totalAudioEnergy}{totalSamplesDuration}}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Sie können die akkumulierten Summen auch verwenden, um den durchschnittlichen Audiopegel über einen beliebigen Zeitraum zu berechnen.

Die Gesamtenergie des Statistikobjekts wird akkumuliert, indem die Energie jeder Probe über die Lebensdauer des Statistikobjekts addiert wird, während die Gesamtdauer durch Addition der Dauer jeder Probe akkumuliert wird.
Die Energie jeder Probe wird mit der folgenden Formel bestimmt, wobei `sample_level` das Niveau der Probe ist, `max_level` der höchstintensive kodierbare Wert ist und `duration` die Dauer der Probe in Sekunden ist:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>duration</mi><mo>×</mo><msup><mrow><mo>(</mo><mfrac><mi>sample_level</mi><mi>max_level</mi></mfrac><mo>)</mo></mrow><mn>2</mn></msup></mrow><annotation encoding="TeX">duration \times⁢ \left(\left(\right. \frac{sample{\_}level}{max{\_}level} \left.\right)\right)^{2}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Der durchschnittliche Audiopegel zwischen zwei verschiedenen `getStats()`-Aufrufen, über jede beliebige Dauer, kann mit der folgenden Gleichung berechnet werden:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><msqrt><mfrac><mrow><msub><mi>totalAudioEnergy</mi><mn>2</mn></msub><mo>-</mo><msub><mi>totalAudioEnergy</mi><mn>1</mn></msub></mrow><mrow><msub><mi>totalSamplesDuration</mi><mn>2</mn></msub><mo>-</mo><msub><mi>totalSamplesDuration</mi><mn>1</mn></msub></mrow></mfrac></msqrt><annotation encoding="TeX">\sqrt{\frac{\left(totalAudioEnergy\right)_{2} - \left(totalAudioEnergy\right)_{1}}{\left(totalSamplesDuration\right)_{2} - \left(totalSamplesDuration\right)_{1}}}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

## Beispiele

Dieses Beispiel zeigt, wie Sie das Statistikobjekt, das von `RTCRtpSender.getStats()` zurückgegeben wird, durchlaufen, um die Audiostatistiken der Quelle zu erhalten und dann den `audioLevel` extrahieren.

```js
// where sender is an RTCRtpSender
const stats = await sender.getStats();
let audioSourceStats = null;

for (const report of stats.values()) {
  if (report.type === "media-source" && report.kind === "audio") {
    audioSourceStats = report;
    break;
  }
}

const audioLevel = audioSourceStats?.audioLevel;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
