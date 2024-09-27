---
title: Media Capabilities API
slug: Web/API/Media_Capabilities_API
l10n:
  sourceCommit: 7b565c5f4610bea19c844f35532853624d87cde3
---

{{DefaultAPISidebar("Media Capabilities API")}}

Die **Media Capabilities API** ermöglicht es Entwicklern, die Dekodierungs- und Kodierungsfähigkeiten des Geräts zu bestimmen. Sie stellt Informationen bereit, wie z.B. ob Medien unterstützt werden und ob die Wiedergabe reibungslos und energieeffizient sein sollte, mit Echtzeitrückmeldungen über die Wiedergabe, um adaptives Streaming besser zu ermöglichen, und Zugriff auf Informationen zu Anzeigeeigenschaften.

## Konzepte

Es gibt eine Vielzahl von Video- und Audiocodecs. Unterschiedliche Browser unterstützen verschiedene Medientypen, und neue Medientypen werden ständig entwickelt. Mit der Media Capabilities API können Entwickler sicherstellen, dass jeder Nutzer den besten Kompromiss zwischen Bitrate und Speicherersparnis für die Fähigkeiten seines Browsers, Geräts und Betriebssystems erhält.

Ob ein Gerät Hardware- oder Softwaredekodierung verwendet, wirkt sich darauf aus, wie reibungslos und energieeffizient die Videodekodierung ist und wie effizient die Wiedergabe sein wird. Die Media Capabilities API ermöglicht es zu bestimmen, welche Codecs unterstützt werden und wie leistungsfähig eine Mediendatei ist, sowohl in Bezug auf Glätte als auch auf Energieeffizienz.

Die Media Capabilities API bietet leistungsstärkere Funktionen als zum Beispiel [`MediaRecorder.isTypeSupported()`](/de/docs/Web/API/MediaRecorder/isTypeSupported_static) oder [`HTMLMediaElement.canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType), die sich nur auf allgemeine Browserunterstützung beziehen, nicht auf die Leistung. Die API bietet auch Möglichkeiten, auf Informationen zu Anzeigeeigenschaften wie unterstützten Farbgamuts, Dynamikumfangfähigkeiten und Echtzeitrückmeldungen über die Wiedergabe zuzugreifen.

Um Unterstützung, Glätte und Energieeffizienz für die Kodierung und Dekodierung von Video- oder Audioinhalten zu testen, verwenden Sie die Methoden [`encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo) und [`decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) der [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities) Schnittstelle.

Informationen zu Medienfähigkeiten ermöglichen es Websites, adaptives Streaming zu ermöglichen, um die Qualität von Inhalten basierend auf der tatsächlich wahrgenommenen Qualität durch den Benutzer zu ändern, und in Echtzeit auf eine hohe CPU-/GPU-Auslastung zu reagieren.

## Schnittstellen

- [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)
  - : Stellt Informationen über die Dekodierungsfähigkeiten des Geräts, Systems und Browsers basierend auf Codecs, Profilen, Auflösungen und Bitraten bereit. Die Informationen können genutzt werden, um dem Benutzer optimale Medienstreams bereitzustellen und zu bestimmen, ob die Wiedergabe reibungslos und energieeffizient sein sollte.

### Erweiterungen anderer Schnittstellen

- [`Navigator.mediaCapabilities`](/de/docs/Web/API/Navigator/mediaCapabilities) {{readonlyinline}}
  - : Ein [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities) Objekt, das Informationen über die Dekodierungs- und Kodierungsfähigkeiten für ein bestimmtes Medienformat und die Ausgabefähigkeiten bereitstellen kann.
- [`WorkerNavigator.mediaCapabilities`](/de/docs/Web/API/WorkerNavigator/mediaCapabilities) {{readonlyinline}}
  - : Ein [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities) Objekt, das Informationen über die Dekodierungs- und Kodierungsfähigkeiten für ein bestimmtes Medienformat und die Ausgabefähigkeiten bereitstellen kann.

## Beispiele

### Unterstützungsfähigkeit von Audiodateien und erwartete Leistung erkennen

Dieses Beispiel definiert eine Audiokonfiguration und prüft, ob der Benutzeragent die Dekodierung dieser Medienkonfiguration unterstützt und ob sie in Bezug auf Glätte und Energieeffizienz gut funktionieren wird.

```js
if ("mediaCapabilities" in navigator) {
  const audioFileConfiguration = {
    type: "file",
    audio: {
      contentType: "audio/mp3",
      channels: 2,
      bitrate: 132700,
      samplerate: 5200,
    },
  };

  navigator.mediaCapabilities
    .decodingInfo(audioFileConfiguration)
    .then((result) => {
      console.log(
        `This configuration is ${result.supported ? "" : "not "}supported,`,
      );
      console.log(`${result.smooth ? "" : "not "}smooth, and`);
      console.log(`${result.powerEfficient ? "" : "not "}power efficient.`);
    })
    .catch(() => {
      console.log(`decodingInfo error: ${contentType}`);
    });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Methode [canPlayType()](/de/docs/Web/API/HTMLMediaElement/canPlayType) des [HTMLMediaElement](/de/docs/Web/API/HTMLMediaElement)
- Methode [isTypeSupported()](/de/docs/Web/API/MediaSource/isTypeSupported_static) des [MediaSource](/de/docs/Web/API/MediaSource)
- [Verwendung der Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API)
