---
title: "MediaRecorder: MediaRecorder() Konstruktor"
short-title: MediaRecorder()
slug: Web/API/MediaRecorder/MediaRecorder
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("MediaStream Recording")}}

Der **`MediaRecorder()`** Konstruktor
erstellt ein neues [`MediaRecorder`](/de/docs/Web/API/MediaRecorder) Objekt, das einen angegebenen
[`MediaStream`](/de/docs/Web/API/MediaStream) aufzeichnen wird.

Das Objekt kann optional konfiguriert werden, um in einem spezifischen Mediencontainer (Dateityp) aufzuzeichnen, und es kann außerdem der exakte Codec und die Codec-Konfiguration(en) angegeben werden, indem [der `codecs` Parameter](/de/docs/Web/Media/Formats/codecs_parameter) verwendet wird.

## Syntax

```js-nolint
new MediaRecorder(stream)
new MediaRecorder(stream, options)
```

### Parameter

- `stream`
  - : Der [`MediaStream`](/de/docs/Web/API/MediaStream), der aufgezeichnet wird. Diese Quelldaten können von einem Stream stammen, der mit [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erstellt wurde, oder von einem {{HTMLElement("audio")}}, {{HTMLElement("video")}} oder {{HTMLElement("canvas")}} Element.
- `options` {{optional_inline}}

  - : Ein Wörterbuch-Objekt, das die folgenden Eigenschaften enthalten kann:

    - `mimeType` {{optional_inline}}
      - : Ein MIME-Typ, der das Format für die resultierenden Medien angibt; Sie können das Containerformat angeben (der Browser wählt seine bevorzugten Codecs für Audio und/oder Video aus), oder Sie können [den `codecs` Parameter](/de/docs/Web/Media/Formats/codecs_parameter) und/oder den `profiles` Parameter verwenden, um detaillierte Informationen darüber bereitzustellen, welche Codecs verwendet werden sollen und wie diese zu konfigurieren sind. Anwendungen können im Voraus prüfen, ob ein `mimeType` vom [user agent](/de/docs/Glossary/user_agent) unterstützt wird, indem sie [`MediaRecorder.isTypeSupported()`](/de/docs/Web/API/MediaRecorder/isTypeSupported_static) aufrufen. Voreinstellung ist ein leerer String.
    - `audioBitsPerSecond` {{optional_inline}}
      - : Die gewählte Bitrate für die Audiospur der Medien.
    - `videoBitsPerSecond` {{optional_inline}}
      - : Die gewählte Bitrate für die Videospur der Medien.
    - `bitsPerSecond` {{optional_inline}}
      - : Die gewählte Bitrate für die Audio- und Videospuren der Medien. Dies kann anstelle der obigen beiden Eigenschaften angegeben werden. Wenn dies zusammen mit einer der obigen Eigenschaften angegeben wird, wird es für die nicht spezifizierte verwendet.
    - `audioBitrateMode` {{optional_inline}}
      - : Der Bitratenmodus, der für das Audio-Encoding verwendet werden soll. Kann `constant` sein, was darauf hinweist, dass der Recorder mit einer konstanten Bitrate kodieren soll, oder `variable`, was darauf hinweist, dass der Recorder mit einer variablen Bitrate kodieren soll, wodurch mehr Platz für komplexe Signale und weniger Platz für weniger komplexe Signale verwendet wird. Voreinstellung ist `variable`.
    - `videoKeyFrameIntervalDuration` {{optional_inline}}
      - : Das nominelle Intervall in der Zeit zwischen Keyframes im kodierten Videostream. Der [user agent](/de/docs/Glossary/user_agent) steuert die Erstellung der Keyframes basierend auf dieser Option und der Option `videoKeyFrameIntervalCount`.
    - `videoKeyFrameIntervalCount` {{optional_inline}}
      - : Das Intervall in der Anzahl der Frames zwischen Keyframes im kodierten Videostream. Der [user agent](/de/docs/Glossary/user_agent) steuert die Erstellung der Keyframes unter Berücksichtigung dieser Option sowie der Option `videoKeyFrameIntervalDuration`.

    > [!NOTE]
    > Wenn keine Bitratenwerte für Video und/oder Audio angegeben werden, liegt der Standardwert für Video bei 2,5 Mbps, während der Standardwert für Audio je nach Abtastrate und Anzahl der Kanäle angepasst wird.

    > [!NOTE]
    > Videoauflösung, Bildfrequenz und ähnliche Einstellungen werden als Einschränkungen angegeben, wenn [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) aufgerufen wird, nicht hier in der MediaStream Recording API.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene MIME-Typ nicht vom user agent unterstützt wird.

## Beispiele

Dieses Beispiel zeigt, wie ein MediaRecorder für einen angegebenen Stream erstellt wird, dessen Audiobitrate auf 128 Kbit/Sek und dessen Videobitrate auf 2,5 Mbit/Sek eingestellt ist. Die aufgezeichneten Mediadaten werden in einem MP4-Container gespeichert (wenn Sie die Mediadaten in Teile zerlegen und auf einer Festplatte speichern, werden sie in einer MP4-Datei sein).

```js
if (navigator.mediaDevices.getUserMedia) {
  const constraints = { audio: true, video: true };
  const chunks = [];

  const onSuccess = (stream) => {
    const options = {
      audioBitsPerSecond: 128000,
      videoBitsPerSecond: 2500000,
      mimeType: "video/mp4",
    };
    const mediaRecorder = new MediaRecorder(stream, options);
    m = mediaRecorder;

    // …
  };
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Web Diktiergerät](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder +
  getUserMedia + Web Audio API Visualisierungsdemo, von [Chris Mills](https://github.com/chrisdavidmills) ([Quellcode auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording Demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia)
