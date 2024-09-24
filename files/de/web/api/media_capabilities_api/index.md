---
title: Media Capabilities API
slug: Web/API/Media_Capabilities_API
l10n:
  sourceCommit: 7b565c5f4610bea19c844f35532853624d87cde3
---

{{DefaultAPISidebar("Media Capabilities API")}}

Die **Media Capabilities API** ermöglicht es Entwicklern, die Dekodierungs- und Kodierungsfähigkeiten des Geräts zu bestimmen. Sie stellt Informationen darüber bereit, ob Medien unterstützt werden und ob die Wiedergabe reibungslos und energieeffizient sein sollte, mit Echtzeitrückmeldungen zur Wiedergabe, um adaptives Streaming besser zu ermöglichen, und bietet Zugriff auf Informationen zu Anzeigeeigenschaften.

## Konzepte

Es gibt eine Vielzahl von Video- und Audiocodecs. Verschiedene Browser unterstützen unterschiedliche Medientypen, und es werden ständig neue Medientypen entwickelt. Mit der Media Capabilities API können Entwickler sicherstellen, dass jeder Benutzer die beste Bitrate und Speicherersparnis für seinen Browser, sein Gerät und seine Betriebssystemfähigkeiten erhält.

Ob ein Gerät Hardware- oder Software-Dekodierung verwendet, beeinflusst, wie reibungslos und energieeffizient die Videodekodierung ist und wie effizient die Wiedergabe sein wird. Die Media Capabilities API ermöglicht es, zu bestimmen, welche Codecs unterstützt werden und wie leistungsfähig eine Mediendatei sowohl in Bezug auf die Geschmeidigkeit als auch die Energieeffizienz sein wird.

Die Media Capabilities API bietet leistungsstärkere Funktionen als beispielsweise {{DOMxref("MediaRecorder.isTypeSupported_static", "MediaRecorder.isTypeSupported()")}} oder {{DOMxRef("HTMLMediaElement.canPlayType()")}}, die nur die allgemeine Browserunterstützung adressieren, nicht die Leistung. Die API bietet auch Möglichkeiten, auf Anzeigeeigenschaften wie unterstützte Farbgamuts, Fähigkeiten im dynamischen Bereich und Echtzeitrückmeldungen zur Wiedergabe zuzugreifen.

Um Unterstützung, Geschmeidigkeit und Energieeffizienz für das Kodieren und Dekodieren von Video- oder Audiomaterial zu testen, verwenden Sie die Methoden {{DOMxRef("MediaCapabilities")}} der Schnittstelle {{DOMxRef("MediaCapabilities.encodingInfo()", "encodingInfo()")}} und {{DOMxRef("MediaCapabilities.decodingInfo()", "decodingInfo()")}}.

Informationen zu Medienfähigkeiten ermöglichen es Webseiten, adaptives Streaming zu aktivieren, um die Qualität der Inhalte basierend auf der tatsächlich vom Nutzer wahrgenommenen Qualität zu ändern und in Echtzeit auf eine erhöhte CPU/GPU-Nutzung zu reagieren.

## Schnittstellen

- {{DOMxRef("MediaCapabilities")}}
  - : Bietet Informationen über die Dekodierungsfähigkeiten des Geräts, Systems und Browsers basierend auf Codecs, Profil, Auflösung und Bitraten. Die Informationen können verwendet werden, um dem Nutzer optimale Medienstreams bereitzustellen und zu bestimmen, ob die Wiedergabe reibungslos und energieeffizient sein sollte.

### Erweiterungen zu anderen Schnittstellen

- {{domxref("Navigator.mediaCapabilities")}} {{readonlyinline}}
  - : Ein {{domxref("MediaCapabilities")}}-Objekt, das Informationen über die Dekodierungs- und Kodierungsfähigkeiten für ein bestimmtes Medienformat und die Ausgabefähigkeiten bereitstellen kann.
- {{DOMxRef("WorkerNavigator.mediaCapabilities")}} {{readonlyinline}}
  - : Ein {{domxref("MediaCapabilities")}}-Objekt, das Informationen über die Dekodierungs- und Kodierungsfähigkeiten für ein bestimmtes Medienformat und die Ausgabefähigkeiten bereitstellen kann.

## Beispiele

### Unterstützung von Audiodateien und erwartete Leistung erkennen

Dieses Beispiel definiert eine Audiokonfiguration und prüft dann, ob der User-Agent das Dekodieren dieser Medienkonfiguration unterstützt und ob sie sich in Bezug auf Geschmeidigkeit und Energieeffizienz gut verhält.

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

- Die Methode [canPlayType()](/de/docs/Web/API/HTMLMediaElement/canPlayType) von [HTMLMediaElement](/de/docs/Web/API/HTMLMediaElement)
- Die Methode [isTypeSupported()](/de/docs/Web/API/MediaSource/isTypeSupported_static) von [MediaSource](/de/docs/Web/API/MediaSource)
- [Verwendung der Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API)
