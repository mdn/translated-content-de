---
title: Media Capabilities API
slug: Web/API/Media_Capabilities_API
l10n:
  sourceCommit: 49f6e40b12be0d6d897d3dab09caafbc093f7677
---

{{DefaultAPISidebar("Media Capabilities API")}}{{AvailableInWorkers}}

Die **Media Capabilities API** ermöglicht es Entwicklern, die Dekodierungs- und Kodierungsfähigkeiten des Geräts zu ermitteln. Sie bietet Informationen darüber, ob Medien unterstützt werden und ob die Wiedergabe flüssig und energieeffizient sein sollte, mit Echtzeitrückmeldungen zur Wiedergabe, um adaptives Streaming besser zu ermöglichen, sowie Zugriff auf Anzeigeeigenschafteninformationen.

## Konzepte

Es gibt eine Vielzahl von Video- und Audiocodecs. Verschiedene Browser unterstützen unterschiedliche Medientypen, und es werden ständig neue Medientypen entwickelt. Mit der Media Capabilities API können Entwickler sicherstellen, dass jeder Benutzer die beste Bitrate und Speicherersparnis für den jeweiligen Browser, das Gerät und das Betriebssystem erhält.

Ob ein Gerät Hardware- oder Software-Dekodierung verwendet, beeinflusst, wie flüssig und energieeffizient die Videodekodierung ist und wie effizient die Wiedergabe sein wird. Die Media Capabilities API ermöglicht es, festzustellen, welche Codecs unterstützt werden und wie leistungsfähig eine Mediendatei sowohl in Bezug auf Flüssigkeit als auch Energieeffizienz sein wird.

Die Media Capabilities API bietet leistungsstärkere Funktionen als beispielsweise [`MediaRecorder.isTypeSupported()`](/de/docs/Web/API/MediaRecorder/isTypeSupported_static) oder [`HTMLMediaElement.canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType), die nur die allgemeine Browserunterstützung ansprechen, nicht jedoch die Leistung. Die API bietet zudem Möglichkeiten, auf Anzeigeeigenschaften wie unterstützten Farbumfang ({{Glossary("gamut", "Gamut")}}), Dynamikumfangsfähigkeiten und Echtzeitrückmeldungen zur Wiedergabe zuzugreifen.

Um Unterstützung, Flüssigkeit und Energieeffizienz für die Kodierung und Dekodierung von Video- oder Audioinhalten zu testen, verwenden Sie die Methoden [`encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo) und [`decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) der [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities) Schnittstelle.

Informationen über Medienfähigkeiten ermöglichen es Webseiten, adaptives Streaming zu aktivieren, um die Inhaltsqualität basierend auf der tatsächlich wahrgenommenen Benutzerqualität anzupassen und in Echtzeit auf einen Anstieg der CPU/GPU-Nutzung zu reagieren.

## Schnittstellen

- [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)
  - : Bietet Informationen über die Dekodierungsfähigkeiten des Geräts, Systems und Browsers basierend auf Codecs, Profilen, Auflösung und Bitraten. Die Informationen können verwendet werden, um dem Benutzer optimale Medienstreams bereitzustellen und zu bestimmen, ob die Wiedergabe flüssig und energieeffizient sein sollte.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.mediaCapabilities`](/de/docs/Web/API/Navigator/mediaCapabilities) {{readonlyinline}}
  - : Ein [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities) Objekt, das Informationen über die Dekodierungs- und Kodierungsfähigkeiten für ein bestimmtes Medienformat und die Ausgabefähigkeiten bereitstellen kann.
- [`WorkerNavigator.mediaCapabilities`](/de/docs/Web/API/WorkerNavigator/mediaCapabilities) {{readonlyinline}}
  - : Ein [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities) Objekt, das Informationen über die Dekodierungs- und Kodierungsfähigkeiten für ein bestimmtes Medienformat und die Ausgabefähigkeiten bereitstellen kann.

## Beispiele

### Unterstützung und erwartete Leistung einer Audiodatei erkennen

Dieses Beispiel definiert eine Audiokonfiguration und prüft dann, ob der User Agent in der Lage ist, diese Medienkonfiguration zu dekodieren und ob die Leistung in Bezug auf Flüssigkeit und Energieeffizienz gut sein wird.

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

- Die Methode [canPlayType()](/de/docs/Web/API/HTMLMediaElement/canPlayType) des [HTMLMediaElement](/de/docs/Web/API/HTMLMediaElement)
- Die Methode [isTypeSupported()](/de/docs/Web/API/MediaSource/isTypeSupported_static) des [MediaSource](/de/docs/Web/API/MediaSource)
- [Die Verwendung der Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API)
