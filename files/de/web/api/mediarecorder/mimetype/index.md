---
title: "MediaRecorder: mimeType-Eigenschaft"
short-title: mimeType
slug: Web/API/MediaRecorder/mimeType
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("MediaStream Recording")}}

Die **`mimeType`** schreibgeschützte Eigenschaft des {{domxref("MediaRecorder")}}-Interfaces gibt den bei der Erstellung des {{domxref("MediaRecorder")}}-Objekts angegebenen {{Glossary("MIME")}}-Medientyp zurück. Wenn keiner angegeben wurde, wird der von der Browser ausgewählte Typ zurückgegeben. Dies ist das Dateiformat der Datei, das beim Speichern aller aufgezeichneten Daten auf der Festplatte entstehen würde.

Beachten Sie, dass nicht alle Codecs von einem bestimmten Container unterstützt werden; wenn Sie Medien mit einem Codec schreiben, der von einem bestimmten Mediencontainer nicht unterstützt wird, funktioniert die resultierende Datei möglicherweise überhaupt nicht oder nicht zuverlässig, wenn Sie versuchen, sie wiederzugeben.
Weitere Informationen zu Container- und Codec-Unterstützung über Browser hinweg finden Sie in unserem [Leitfaden zu Medientypen und -formaten](/de/docs/Web/Media/Formats).

> [!NOTE]
> Der Begriff „MIME-Typ“ wird offiziell als historisch angesehen; diese Zeichenfolgen sind jetzt offiziell als **Medientypen** bekannt.
> Der Inhalt der MDN Web Docs verwendet die Begriffe austauschbar.

## Wert

Der MIME-Medientyp, der das Format der aufgezeichneten Medien als Zeichenfolge beschreibt.
Diese Zeichenfolge _kann_ den [`codecs`-Parameter,](/de/docs/Web/Media/Formats/codecs_parameter) enthalten, der Einzelheiten zu den von der MediaRecorder verwendeten Codecs und Codec-Konfigurationen angibt.

Die Medientyp-Zeichenfolgen werden von der Internet Assigned Numbers Authority (IANA) standardisiert.
Für ihre offizielle Liste der definierten Medientyp-Zeichenfolgen lesen Sie den Artikel [Medientypen](https://www.iana.org/assignments/media-types/media-types.xhtml) auf der IANA-Website.
Siehe auch [Medientypen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types), um mehr über Medientypen und deren Verwendung in Webinhalten und von Webbrowsern zu erfahren.

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

      m.mimeType; // würde 'video/mp4' zurückgeben
      // …
    })
    .catch((error) => {
      console.error(error.message);
    });
}
```

Das Ändern des `mimeType` in `options` zu `'video/mp4; codecs="avc1.424028, mp4a.40.2"'` führt dazu, dass `MediaRecorder` versucht, das AVC Constrained Baseline Profile Level 4 für Video und AAC-LC (Low Complexity) für Audio zu verwenden, was gut für mobile und andere mögliche ressourcenbeschränkte Situationen ist.

Vorausgesetzt, diese Konfiguration wird vom User-Agent akzeptiert, wäre der später von `m.mimeType` zurückgegebene Wert dann
`video/mp4; codecs="avc1.424028, mp4a.40.2"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Codecs in häufigen Medientypen](/de/docs/Web/Media/Formats/codecs_parameter)
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API Visualisierungsdemo, von [Chris Mills](https://github.com/chrisdavidmills) ([Quelle auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- {{domxref("MediaDevices.getUserMedia()")}}
