---
title: "MediaRecorder: mimeType-Eigenschaft"
short-title: mimeType
slug: Web/API/MediaRecorder/mimeType
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

{{APIRef("MediaStream Recording")}}

Die schreibgeschützte Eigenschaft **`mimeType`** des Interfaces [`MediaRecorder`](/de/docs/Web/API/MediaRecorder) gibt den {{Glossary("MIME", "MIME")}}-Medientyp zurück, der beim Erstellen des [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Objekts angegeben wurde, oder, falls keiner angegeben wurde, den vom Browser gewählten Typ.
Dies ist das Dateiformat der Datei, die entstehen würde, wenn alle aufgezeichneten Daten auf die Festplatte geschrieben würden.

Beachten Sie, dass nicht alle Codecs von einem bestimmten Container unterstützt werden; wenn Sie Medien mit einem Codec schreiben, der von einem bestimmten Mediencontainer nicht unterstützt wird, funktioniert die resultierende Datei möglicherweise beim Versuch, sie wiederzugeben, nicht zuverlässig oder überhaupt nicht.
Informationen zur Unterstützung von Containern und Codecs in verschiedenen Browsern finden Sie in unserem [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats).

> [!NOTE]
> Der Begriff „MIME type“ gilt offiziell als historisch; diese Zeichenfolgen werden nun offiziell als **media types** bezeichnet.
> Die Inhalte von MDN Web Docs verwenden die Begriffe synonym.

## Wert

Der MIME-Medientyp, der das Format der aufgezeichneten Medien beschreibt, als Zeichenfolge.
Diese Zeichenfolge _kann_ den [`codecs`-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) enthalten, der Details über die vom Medienrekorder verwendeten Codecs und Codec-Konfigurationen angibt.

Die Medientyp-Zeichenfolgen werden von der Internet Assigned Numbers Authority (IANA) standardisiert.
Die offizielle Liste definierter Medientyp-Zeichenfolgen finden Sie im Artikel [Media Types](https://www.iana.org/assignments/media-types) auf der IANA-Website.
Siehe auch [Medientypen](/de/docs/Web/HTTP/Guides/MIME_types), um mehr über Medientypen und ihre Verwendung in Webinhalten und durch Webbrowser zu erfahren.

## Beispiele

```js
if (navigator.mediaDevices) {
  console.log("getUserMedia supported.");

  const constraints = { audio: true, video: true };
  const chunks = [];

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      const options = {
        audioBitsPerSecond: 128000,
        videoBitsPerSecond: 2500000,
        mimeType: "video/mp4",
      };
      const mediaRecorder = new MediaRecorder(stream, options);
      m = mediaRecorder;

      m.mimeType; // would return 'video/mp4'
      // …
    })
    .catch((error) => {
      console.error(error.message);
    });
}
```

Das Ändern von `mimeType` in `options` zu `'video/mp4; codecs="avc1.424028, mp4a.40.2"'` veranlasst `MediaRecorder`, für Video AVC Constrained Baseline Profile Level 4 und für Audio AAC-LC (Low Complexity) zu verwenden, was sich gut für mobile und andere möglicherweise ressourcenbeschränkte Situationen eignet.

Unter der Annahme, dass diese Konfiguration für den User-Agent akzeptabel ist, wäre der später von `m.mimeType` zurückgegebene Wert
`video/mp4; codecs="avc1.424028, mp4a.40.2"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwenden der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Codecs in gängigen Medientypen](/de/docs/Web/Media/Guides/Formats/codecs_parameter)
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder- + getUserMedia- + Web-Audio-API-Visualisierungsdemo von [Chris Mills](https://github.com/chrisdavidmills) ([Quellcode auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording-Demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
