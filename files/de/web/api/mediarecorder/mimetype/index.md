---
title: "MediaRecorder: mimeType-Eigenschaft"
short-title: mimeType
slug: Web/API/MediaRecorder/mimeType
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{APIRef("MediaStream Recording")}}

Die **`mimeType`** schreibgeschützte Eigenschaft des [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Interfaces gibt den {{Glossary("MIME", "MIME")}}-Medientyp zurück, der beim Erstellen des [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Objekts angegeben wurde, oder, falls keiner angegeben wurde, der vom Browser ausgewählt wurde. Dies ist das Dateiformat der Datei, die entstehen würde, wenn alle aufgezeichneten Daten auf die Festplatte geschrieben würden.

Beachten Sie, dass nicht alle Codecs von einem bestimmten Container unterstützt werden; wenn Sie Medien mit einem Codec schreiben, der von einem bestimmten Mediencontainer nicht unterstützt wird, könnte die resultierende Datei möglicherweise nicht zuverlässig oder gar nicht wiedergegeben werden. Sehen Sie sich unseren [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Formats) an, um Informationen über die Unterstützung von Containern und Codecs in verschiedenen Browsern zu erhalten.

> [!NOTE]
> Der Begriff "MIME-Typ" wird offiziell als historisch angesehen; diese Zeichenfolgen werden jetzt offiziell als **Medientypen** bezeichnet.
> Inhalte in den MDN Web Docs verwenden die Begriffe austauschbar.

## Wert

Der MIME-Medientyp, der das Format der aufgezeichneten Medien beschreibt, als Zeichenfolge. Diese Zeichenfolge _kann_ den [`codecs`-Parameter](/de/docs/Web/Media/Formats/codecs_parameter) enthalten, der Details über die Codecs und die Codec-Konfigurationen angibt, die vom Medienrekorder verwendet werden.

Die Medientyp-Zeichenfolgen sind von der Internet Assigned Numbers Authority (IANA) standardisiert. Für ihre offizielle Liste der festgelegten Medientyp-Zeichenfolgen, siehe den Artikel [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml) auf der IANA-Website. Siehe auch [Medientypen](/de/docs/Web/HTTP/MIME_types), um mehr über Medientypen und deren Verwendung in Webinhalten und durch Webbrowser zu erfahren.

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

Wenn der `mimeType` in `options` auf `'video/mp4; codecs="avc1.424028, mp4a.40.2"'` geändert wird, versucht `MediaRecorder`, das AVC Constrained Baseline Profile Level 4 für Video und AAC-LC (Low Complexity) für Audio zu verwenden, was für mobile und andere möglicherweise ressourcenbeschränkte Situationen geeignet ist.

Angenommen, diese Konfiguration ist für den Benutzeragenten akzeptabel, würde der später durch `m.mimeType` zurückgegebene Wert dann `video/mp4; codecs="avc1.424028, mp4a.40.2"` sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Codecs in gängigen Medientypen](/de/docs/Web/Media/Formats/codecs_parameter)
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API Visualisierungsdemo, von [Chris Mills](https://github.com/chrisdavidmills) ([Quelle auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording Demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
