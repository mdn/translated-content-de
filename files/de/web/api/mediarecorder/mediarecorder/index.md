---
title: "MediaRecorder: MediaRecorder() Konstruktor"
short-title: MediaRecorder()
slug: Web/API/MediaRecorder/MediaRecorder
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("MediaStream Recording")}}

Der **`MediaRecorder()`** Konstruktor
erstellt ein neues [`MediaRecorder`](/de/docs/Web/API/MediaRecorder) Objekt, das einen angegebenen
[`MediaStream`](/de/docs/Web/API/MediaStream) aufzeichnen wird.

Das Objekt kann optional so konfiguriert werden, dass es unter Verwendung eines spezifischen Media-Containers (Dateityps) aufzeichnet und des Weiteren den genauen Codec und die Codec-Konfiguration(en) durch Angabe des [`codecs` Parameters](/de/docs/Web/Media/Guides/Formats/codecs_parameter) spezifizieren kann.

## Syntax

```js-nolint
new MediaRecorder(stream)
new MediaRecorder(stream, options)
```

### Parameter

- `stream`
  - : Der [`MediaStream`](/de/docs/Web/API/MediaStream), der aufgezeichnet werden soll. Diese Quellmedien können von einem Stream stammen, der mit [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erstellt wurde, oder von einem {{HTMLElement("audio")}}, {{HTMLElement("video")}} oder {{HTMLElement("canvas")}} Element.
- `options` {{optional_inline}}

  - : Ein Wörterbuchobjekt, das die folgenden Eigenschaften enthalten kann:

    - `mimeType` {{optional_inline}}
      - : Ein MIME-Typ, der das Format für das resultierende Medium angibt; Sie können das Containerformat angeben (der Browser wählt seine bevorzugten Codecs für Audio und/oder Video), oder Sie können [den `codecs` Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) und/oder den `profiles` Parameter verwenden, um detaillierte Informationen darüber zu geben, welche Codecs verwendet werden sollen und wie sie zu konfigurieren sind. Anwendungen können im Voraus prüfen, ob ein `mimeType` vom {{Glossary("user_agent", "User Agent")}} unterstützt wird, indem sie [`MediaRecorder.isTypeSupported()`](/de/docs/Web/API/MediaRecorder/isTypeSupported_static) aufrufen. Standardmäßig leerer String.
    - `audioBitsPerSecond` {{optional_inline}}
      - : Die gewählte Bitrate für die Audiokomponente des Mediums.
    - `videoBitsPerSecond` {{optional_inline}}
      - : Die gewählte Bitrate für die Videokomponente des Mediums.
    - `bitsPerSecond` {{optional_inline}}
      - : Die gewählte Bitrate für die Audio- und Videokomponenten des Mediums. Diese kann anstelle der beiden oben genannten Eigenschaften angegeben werden. Falls diese zusammen mit einer oder beiden der oben genannten Eigenschaften angegeben wird, wird sie für diejenige verwendet, die nicht angegeben ist.
    - `audioBitrateMode` {{optional_inline}}
      - : Der Bitratenmodus, der zum Kodieren des Audios verwendet werden soll. Kann `constant` sein, was bedeutet, dass der Rekorder mit einer konstanten Bitrate kodieren soll, oder `variable`, was bedeutet, dass der Rekorder eine variable Bitrate verwenden soll, um so komplexen Signalen mehr Platz zu geben und weniger komplexen Signalen weniger Platz. Standardmäßig `variable`.
    - `videoKeyFrameIntervalDuration` {{optional_inline}}
      - : Das nominale Zeitintervall zwischen Keyframes im kodierten Videostream. Der {{Glossary("user_agent", "User Agent")}} steuert die Generierung von Keyframes basierend auf dieser Option und der `videoKeyFrameIntervalCount` Option.
    - `videoKeyFrameIntervalCount` {{optional_inline}}
      - : Das Intervall in der Anzahl der Frames zwischen Keyframes im kodierten Videostream. Der {{Glossary("user_agent", "User Agent")}} steuert die Generierung von Keyframes unter Berücksichtigung dieser Option sowie der Option `videoKeyFrameIntervalDuration`.

    > [!NOTE]
    > Wenn Bitratenwerte für Video und/oder Audio nicht angegeben sind, beträgt die Standardbitrate für Video 2,5 Mbit/s, während die Standardbitrate für Audio je nach Abtastrate und der Anzahl der Kanäle adaptiv ist.

    > [!NOTE]
    > Videoauflösung, Bildrate und ähnliche Einstellungen werden als Einschränkungen festgelegt, wenn [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) aufgerufen wird, nicht hier in der MediaStream Recording API.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene MIME-Typ vom User Agent nicht unterstützt wird.

## Beispiele

Dieses Beispiel zeigt, wie man einen Media Recorder für einen angegebenen Stream erstellt, dessen Audio-Bitrate auf 128 Kbit/s und dessen Video-Bitrate auf 2,5 Mbit/s festgelegt ist. Die aufgezeichneten Mediendaten werden in einer MP4-Hülle gespeichert (wenn Sie die Teile der Mediendaten sammeln und auf die Festplatte speichern, werden sie in einer MP4-Datei sein).

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
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder +
  getUserMedia + Web Audio API Visualisierungs-Demo, von [Chris Mills](https://github.com/chrisdavidmills) ([Quelle auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording Demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia)
