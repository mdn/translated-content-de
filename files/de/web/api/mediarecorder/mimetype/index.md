---
title: "MediaRecorder: mimeType-Eigenschaft"
short-title: mimeType
slug: Web/API/MediaRecorder/mimeType
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("MediaStream Recording")}}

Die **`mimeType`** schreibgeschützte Eigenschaft des [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Interfaces gibt den {{Glossary("MIME", "MIME")}}-Medientyp zurück, der beim Erstellen des [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Objekts angegeben wurde, oder, wenn keiner angegeben wurde, den der Browser gewählt hat. Dies ist das Dateiformat der Datei, die durch das Schreiben aller aufgezeichneten Daten auf die Festplatte entstehen würde.

Beachten Sie, dass nicht alle Codecs von einem bestimmten Container unterstützt werden; wenn Sie Medien mit einem Codec schreiben, der von einem bestimmten Mediencontainer nicht unterstützt wird, funktioniert die resultierende Datei möglicherweise nicht zuverlässig oder überhaupt nicht, wenn Sie versuchen, sie abzuspielen. Weitere Informationen über die Unterstützung von Containern und Codecs in verschiedenen Browsern finden Sie in unserem [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Guides/Formats).

> [!NOTE]
> Der Begriff "MIME-Typ" wird offiziell als historisch betrachtet; diese Zeichenfolgen sind nun offiziell als **Medientypen** bekannt. Die Inhalte der MDN Web Docs verwenden die Begriffe austauschbar.

## Wert

Der MIME-Medientyp, der das Format der aufgezeichneten Medien als Zeichenfolge beschreibt. Diese Zeichenfolge _kann_ den [`codecs`-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) enthalten, der Details über die von dem Medienrecorder verwendeten Codecs und die Codec-Konfigurationen gibt.

Die Medientyp-Zeichenfolgen werden von der Internet Assigned Numbers Authority (IANA) standardisiert. Für deren offizielle Liste der definierten Medientyp-Zeichenfolgen siehe den Artikel [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml) auf der IANA-Website. Weitere Informationen über Medientypen und deren Verwendung in Webinhalten und durch Webbrowser finden Sie unter [Medientypen](/de/docs/Web/HTTP/Guides/MIME_types).

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

Das Ändern des `mimeType` in `options` zu `'video/mp4; codecs="avc1.424028, mp4a.40.2"'` führt dazu, dass `MediaRecorder` versucht, das AVC Constrained Baseline Profile Level 4 für Video und AAC-LC (Low Complexity) für Audio zu verwenden, was gut für mobile Geräte und andere möglicherweise ressourcenbeschränkte Situationen ist.

Angenommen, diese Konfiguration ist für den User-Agent akzeptabel, würde der später von `m.mimeType` zurückgegebene Wert dann `video/mp4; codecs="avc1.424028, mp4a.40.2"` sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Codecs in allgemeinen Medientypen](/de/docs/Web/Media/Guides/Formats/codecs_parameter)
- [Web Diktiergerät](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API Visualisierungs-Demo von [Chris Mills](https://github.com/chrisdavidmills) ([Quelle auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording Demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
