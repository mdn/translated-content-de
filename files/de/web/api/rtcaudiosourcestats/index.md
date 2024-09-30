---
title: RTCAudioSourceStats
slug: Web/API/RTCAudioSourceStats
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Das **`RTCAudioSourceStats`**-Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) liefert Statistikinformationen über einen Audiotrack ([`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)), der an einen oder mehrere Sender ([`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)) angehängt ist.

Diese Statistiken können erhalten werden, indem Sie den [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) durchlaufen, der von [`RTCRtpSender.getStats()`](/de/docs/Web/API/RTCRtpSender/getStats) oder [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, bis Sie einen Bericht mit dem [`type`](#type) von `media-source` und einem [`kind`](#kind) von `audio` finden.

> [!NOTE]
> Für Audioinformationen über entfernt bezogene Tracks (die empfangen werden), siehe [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats).

## Instanz-Eigenschaften

- [`audioLevel`](/de/docs/Web/API/RTCAudioSourceStats/audioLevel) {{Experimental_Inline}}{{optional_inline}}
  - : Eine Zahl, die das Audiolevel der Medienquelle repräsentiert.
- [`totalAudioEnergy`](/de/docs/Web/API/RTCAudioSourceStats/totalAudioEnergy) {{Experimental_Inline}}{{optional_inline}}
  - : Eine Zahl, die die gesamte Audioenergie der Medienquelle über die Lebensdauer des Statistikobjekts repräsentiert.
- [`totalSamplesDuration`](/de/docs/Web/API/RTCAudioSourceStats/totalSamplesDuration) {{Experimental_Inline}}{{optional_inline}}
  - : Eine Zahl, die die Gesamtdauer aller von der Medienquelle produzierten Proben über die Lebensdauer des Statistikobjekts repräsentiert.

### Allgemeine Eigenschaften der Medienquelle

Die folgenden Eigenschaften sind sowohl in `RTCAudioSourceStats` als auch in [`RTCVideoSourceStats`](/de/docs/Web/API/RTCVideoSourceStats) vorhanden: <!-- RTCMediaSourceStats  -->

- [`trackIdentifier`](/de/docs/Web/API/RTCAudioSourceStats/trackIdentifier)
  - : Ein String, der den [`id`](/de/docs/Web/API/MediaStreamTrack/id) Wert des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) enthält, das mit der Audioquelle assoziiert ist.
- [`kind`](/de/docs/Web/API/RTCAudioSourceStats/kind)
  - : Ein String, der angibt, ob dieses Objekt Statistiken für eine Videoquelle oder eine Medienquelle darstellt. Für ein `RTCAudioSourceStats` ist dies immer `audio`.

### Allgemeine Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen Statistikobjekten gemeinsam. <!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCAudioSourceStats/id)
  - : Ein String, der das Objekt, das überwacht wird, eindeutig identifiziert, um diesen Satz von Statistiken zu erstellen.
- [`timestamp`](/de/docs/Web/API/RTCAudioSourceStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Stichprobe für dieses Statistikobjekt entnommen wurde.
- [`type`](/de/docs/Web/API/RTCAudioSourceStats/type)
  - : Ein String mit dem Wert `"media-source"`, der angibt, dass das Objekt eine Instanz von entweder `RTCAudioSourceStats` oder [`RTCVideoSourceStats`](/de/docs/Web/API/RTCVideoSourceStats) ist.

## Beschreibung

Das Interface liefert Statistiken über eine Audiomedienquelle, die an einen oder mehrere Sender angehängt ist.
Die Informationen umfassen den aktuellen Audiolevel, gemittelt über eine kurze (implementierungsabhängige) Dauer.

Die Statistiken umfassen auch die akkumulierte Gesamtenergie und Gesamtdauer der Proben zu einem bestimmten Zeitpunkt.
Die Gesamtwerte können verwendet werden, um den durchschnittlichen Audiolevel über die Lebensdauer des Statistikobjekts zu bestimmen.
Sie können einen quadratischen Mittelwert (RMS) in den gleichen Einheiten wie `audioLevel` mit der folgenden Formel berechnen:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><msqrt><mfrac><mi>totalAudioEnergy</mi><mi>totalSamplesDuration</mi></mfrac></msqrt><annotation encoding="TeX">\sqrt{\frac{totalAudioEnergy}{totalSamplesDuration}}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Sie können die akkumulierten Gesamtwerte auch verwenden, um den durchschnittlichen Audiolevel über einen beliebigen Zeitraum zu berechnen.

Die gesamte Audioenergie des Statistikobjekts wird akkumuliert, indem die Energie jeder Probe über die Lebensdauer des Statistikobjekts addiert wird, während die Gesamtdauer akkumuliert wird, indem die Dauer jeder Probe addiert wird.
Die Energie jeder Probe wird mit der folgenden Formel bestimmt, wobei `sample_level` das Level der Probe, `max_level` der höchstintensitierbare Wert und `duration` die Dauer der Probe in Sekunden ist:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>duration</mi><mo>×</mo><msup><mrow><mo>(</mo><mfrac><mi>sample_level</mi><mi>max_level</mi></mfrac><mo>)</mo></mrow><mn>2</mn></msup></mrow><annotation encoding="TeX">duration \times⁢ \left(\left(\right. \frac{sample{\_}level}{max{\_}level} \left.\right)\right)^{2}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Das durchschnittliche Audiolevel zwischen zwei verschiedenen `getStats()`-Aufrufen, über jede beliebige Dauer, kann mit der folgenden Gleichung berechnet werden:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><msqrt><mfrac><mrow><msub><mi>totalAudioEnergy</mi><mn>2</mn></msub><mo>-</mo><msub><mi>totalAudioEnergy</mi><mn>1</mn></msub></mrow><mrow><msub><mi>totalSamplesDuration</mi><mn>2</mn></msub><mo>-</mo><msub><mi>totalSamplesDuration</mi><mn>1</mn></msub></mrow></mfrac></msqrt><annotation encoding="TeX">\sqrt{\frac{\left(totalAudioEnergy\right)_{2} - \left(totalAudioEnergy\right)_{1}}{\left(totalSamplesDuration\right)_{2} - \left(totalSamplesDuration\right)_{1}}}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

## Beispiele

Dieses Beispiel zeigt, wie Sie das Statistikobjekt durchlaufen können, das von `RTCRtpSender.getStats()` zurückgegeben wird, um die Audiosourcenstatistiken zu erhalten und dann das `audioLevel` zu extrahieren.

```js
// where sender is an RTCRtpSender
const stats = await sender.getStats();
let audioSourceStats = null;

stats.forEach((report) => {
  if (report.type === "media-source" && report.kind==="audio") {
    audioSourceStats = report;
    break;
  }
});

const audioLevel = audioSourceStats?.audioLevel;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
