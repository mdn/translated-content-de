---
title: "MediaRecorder: mimeType-Eigenschaft"
short-title: mimeType
slug: Web/API/MediaRecorder/mimeType
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("MediaStream Recording")}}

Die schreibgeschützte Eigenschaft **`mimeType`** des [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Interfaces gibt den [MIME](/de/docs/Glossary/MIME)-Medientyp zurück, der bei der Erstellung des [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Objekts angegeben wurde, oder, falls keiner angegeben wurde, den der Browser gewählt hat. Dies ist das Dateiformat der Datei, die entstehen würde, wenn alle aufgezeichneten Daten auf die Festplatte geschrieben würden.

Beachten Sie, dass nicht alle Codecs von einem bestimmten Container unterstützt werden; wenn Sie Medien mit einem Codec schreiben, der von einem bestimmten Mediencontainer nicht unterstützt wird, kann es sein, dass die resultierende Datei beim Abspielen unzuverlässig funktioniert oder gar nicht. Weitere Informationen über Container- und Codec-Unterstützung in verschiedenen Browsern finden Sie in unserem [Leitfaden zu Medientypen und Formaten](/de/docs/Web/Media/Formats).

> [!NOTE]
> Der Begriff "MIME type" wird offiziell als historisch betrachtet; diese Zeichenfolgen sind jetzt offiziell als **Medientypen** bekannt.
> MDN Web Docs-Inhalte verwenden die Begriffe austauschbar.

## Wert

Der MIME-Medientyp, der das Format der aufgezeichneten Medien beschreibt, als Zeichenfolge.
Diese Zeichenfolge _kann_ den [`codecs`-Parameter](/de/docs/Web/Media/Formats/codecs_parameter) enthalten, der Details über die vom Media Recorder verwendeten Codecs und Codec-Konfigurationen angibt.

Die Medientyp-Zeichenfolgen sind von der Internet Assigned Numbers Authority (IANA) standardisiert.
Für ihre offizielle Liste der definierten Medientyp-Zeichenfolgen, siehe den Artikel [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml) auf der IANA-Website.
Siehe auch [Medientypen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types), um mehr über Medientypen zu erfahren und wie sie in Webinhalten und von Webbrowsern verwendet werden.

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

Die Änderung von `mimeType` in `options` zu `'video/mp4; codecs="avc1.424028, mp4a.40.2"'` führt dazu, dass `MediaRecorder` versucht, das AVC Constrained Baseline Profile Level 4 für Video und AAC-LC (Low Complexity) für Audio zu verwenden, was gut für mobile und andere möglicherweise ressourcenbeschränkte Situationen ist.

Vorausgesetzt, diese Konfiguration ist für den User Agent akzeptabel, würde der später von `m.mimeType` zurückgegebene Wert dann `video/mp4; codecs="avc1.424028, mp4a.40.2"` sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Codecs in gängigen Medientypen](/de/docs/Web/Media/Formats/codecs_parameter)
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API Visualisierungs-Demo, von [Chris Mills](https://github.com/chrisdavidmills) ([Source auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream-Aufnahme-Demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
