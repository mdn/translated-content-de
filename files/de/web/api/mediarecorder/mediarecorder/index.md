---
title: "MediaRecorder: MediaRecorder() Konstruktor"
short-title: MediaRecorder()
slug: Web/API/MediaRecorder/MediaRecorder
l10n:
  sourceCommit: 5171221f068cc28af3d9a11e9a757c718db8bb38
---

{{APIRef("MediaStream Recording")}}

Der **`MediaRecorder()`** Konstruktor erstellt ein neues [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Objekt, das einen angegebenen [`MediaStream`](/de/docs/Web/API/MediaStream) aufzeichnen wird.

Das Objekt kann optional so konfiguriert werden, dass es unter Verwendung eines bestimmten Mediencontainers (Dateityps) aufzeichnet und es kann weiter spezifizieren, welcher Codec und welche Codec-Konfiguration(en) verwendet werden sollen, indem [der `codecs`-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) angegeben wird.

## Syntax

```js-nolint
new MediaRecorder(stream)
new MediaRecorder(stream, options)
```

### Parameter

- `stream`
  - : Der [`MediaStream`](/de/docs/Web/API/MediaStream), der aufgezeichnet werden soll.
    Diese Quellmedien können von einem Stream stammen, der mit [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erstellt wurde, oder von einem {{HTMLElement("audio")}}, {{HTMLElement("video")}} oder {{HTMLElement("canvas")}} Element.
- `options` {{optional_inline}}
  - : Ein Wörterbuch-Objekt, das die folgenden Eigenschaften enthalten kann:
    - `mimeType` {{optional_inline}}
      - : Ein MIME-Typ, der das Format für die resultierenden Medien spezifiziert; Sie können das Containerformat angeben (der Browser wählt seine bevorzugten Codecs für Audio und/oder Video aus), oder Sie können [den `codecs`-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) und/oder den `profiles`-Parameter verwenden, um detaillierte Informationen darüber zu liefern, welche Codecs verwendet werden sollen und wie sie zu konfigurieren sind.
        Anwendungen können im Voraus prüfen, ob ein `mimeType` vom {{Glossary("user_agent", "User-Agent")}} unterstützt wird, indem sie [`MediaRecorder.isTypeSupported()`](/de/docs/Web/API/MediaRecorder/isTypeSupported_static) aufrufen.
        Standardmäßig leer.
    - `audioBitsPerSecond` {{optional_inline}}
      - : Die gewählte Bitrate für die Audiokomponente der Medien.
    - `videoBitsPerSecond` {{optional_inline}}
      - : Die gewählte Bitrate für die Videokomponente der Medien.
    - `bitsPerSecond` {{optional_inline}}
      - : Die gewählte Bitrate für die Audio- und Videokomponenten der Medien.
        Dies kann anstelle der obigen beiden Eigenschaften angegeben werden.
        Wenn dies zusammen mit einer der obigen Eigenschaften angegeben wird, wird dies für die nicht spezifizierte Eigenschaft verwendet.
    - `audioBitrateMode` {{optional_inline}}
      - : Der Bitratenmodus, der zum Codieren des Audios verwendet werden soll.
        Kann `constant` sein, was angibt, dass der Rekorder mit einer konstanten Bitrate codieren soll, oder `variable`, was angibt, dass der Rekorder mit einer variablen Bitrate codieren soll, um so mehr Platz für komplexe Signale und weniger Platz für weniger komplexe Signale zu verwenden.
        Standard ist `variable`.
    - `videoKeyFrameIntervalDuration` {{optional_inline}}
      - : Das nominale Zeitintervall zwischen Keyframes im codierten Videostream.
        Der {{Glossary("user_agent", "User-Agent")}} steuert die Keyframe-Erzeugung basierend auf dieser Option und der `videoKeyFrameIntervalCount` Option.
    - `videoKeyFrameIntervalCount` {{optional_inline}}
      - : Das Intervall in der Anzahl der Frames zwischen Keyframes im codierten Videostream.
        Der {{Glossary("user_agent", "User-Agent")}} steuert die Keyframe-Erzeugung unter Berücksichtigung dieser Option sowie der `videoKeyFrameIntervalDuration` Option.

    > [!NOTE]
    > Wenn keine Bitraten für Video und/oder Audio angegeben sind, wird standardmäßig für Video 2,5 Mbps oder 10 Mbps angenommen, je nach Browser.
    > Der Audio-Standard ist adaptiv, abhängig von der Abtastrate und der Anzahl der Kanäle.

    > [!NOTE]
    > Videoauflösung, Bildrate und ähnliche Einstellungen werden als Einschränkungen beim Aufruf von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) angegeben, nicht hier in der MediaStream Recording API.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der angegebene MIME-Typ vom User-Agent nicht unterstützt wird.

## Beispiele

Dieses Beispiel zeigt, wie man einen Medienrekorder für einen angegebenen Stream erstellt, dessen Audio-Bitrate auf 128 Kbit/s und dessen Video-Bitrate auf 2,5 Mbit/s eingestellt ist.
Die aufgezeichneten Mediendaten werden in einem MP4-Container gespeichert (wenn Sie die Medien-Datenblöcke sammeln und auf der Festplatte speichern, werden sie in einer MP4-Datei sein).

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
- [Web-Diktiergerät](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder +
  getUserMedia + Web Audio API Visualisierungs-Demo, von [Chris Mills](https://github.com/chrisdavidmills) ([Quelle auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording Demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia)
- [MediaRecorder Video Bitrates](https://blog.addpipe.com/mediarecorder-video-bitrates/)
