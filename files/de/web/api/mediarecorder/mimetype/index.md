---
title: "MediaRecorder: mimeType-Eigenschaft"
short-title: mimeType
slug: Web/API/MediaRecorder/mimeType
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{APIRef("MediaStream Recording")}}

Die schreibgeschützte **`mimeType`**-Eigenschaft des [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Interfaces gibt den {{Glossary("MIME", "MIME")}}-Medientyp zurück, der bei der Erstellung des [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Objekts angegeben wurde, oder, falls keiner angegeben wurde, den der Browser ausgewählt hat. Dies ist das Dateiformat der Datei, das entstehen würde, wenn alle aufgezeichneten Daten auf der Festplatte gespeichert würden.

Bedenken Sie, dass nicht alle Codecs von einem bestimmten Container unterstützt werden; wenn Sie Medien mit einem Codec schreiben, der von einem bestimmten Mediencontainer nicht unterstützt wird, funktioniert die resultierende Datei möglicherweise nicht zuverlässig oder überhaupt nicht, wenn Sie versuchen, sie wiederzugeben. Weitere Informationen über die Unterstützung von Containern und Codecs in verschiedenen Browsern finden Sie in unserem [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats).

> [!NOTE]
> Der Begriff "MIME-Typ" wird offiziell als historisch betrachtet; diese Zeichenfolgen sind jetzt offiziell als **Medientypen** bekannt.
> Der Inhalt der MDN Web Docs verwendet die Begriffe austauschbar.

## Wert

Der MIME-Medientyp, der das Format des aufgezeichneten Mediums beschreibt, als Zeichenfolge. Diese Zeichenfolge _kann_ den [`codecs`-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) enthalten, der Details zu den Codecs und Codec-Konfigurationen angibt, die vom Media Recorder verwendet werden.

Die Medientypzeichenfolgen werden von der Internet Assigned Numbers Authority (IANA) standardisiert. Für die offizielle Liste der definierten Medientypzeichenfolgen siehe den Artikel [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml) auf der IANA-Website. Siehe auch [Medientypen](/de/docs/Web/HTTP/MIME_types), um mehr über Medientypen und deren Verwendung in Webinhalten und durch Webbrowser zu erfahren.

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

Das Ändern von `mimeType` in `options` auf `'video/mp4; codecs="avc1.424028, mp4a.40.2"'` führt dazu, dass `MediaRecorder` versucht, das AVC Constrained Baseline Profile Level 4 für Video und AAC-LC (Low Complexity) für Audio zu verwenden, was gut für mobile und andere potenziell ressourcenbeschränkte Situationen ist.

Wenn diese Konfiguration vom User Agent akzeptiert wird, wäre der später von `m.mimeType` zurückgegebene Wert
`video/mp4; codecs="avc1.424028, mp4a.40.2"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der MediaStream-Aufzeichnungs-API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Codecs in gängigen Medientypen](/de/docs/Web/Media/Guides/Formats/codecs_parameter)
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API Visualisierungs-Demo, von [Chris Mills](https://github.com/chrisdavidmills) ([Quelle auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream-Aufzeichnungs-Demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
