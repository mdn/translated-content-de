---
title: "MediaRecorder: MediaRecorder() Konstruktor"
short-title: MediaRecorder()
slug: Web/API/MediaRecorder/MediaRecorder
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{APIRef("MediaStream Recording")}}

Der **`MediaRecorder()`** Konstruktor erstellt ein neues [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Objekt, das einen angegebenen [`MediaStream`](/de/docs/Web/API/MediaStream) aufnehmen wird.

Das Objekt kann optional so konfiguriert werden, dass es ein spezifisches Mediencontainerformat (Dateityp) verwendet und kann darüber hinaus den genauen Codec und die Codec-Konfiguration(en) durch die Angabe [des Parameters `codecs`](/de/docs/Web/Media/Guides/Formats/codecs_parameter) spezifizieren.

## Syntax

```js-nolint
new MediaRecorder(stream)
new MediaRecorder(stream, options)
```

### Parameter

- `stream`
  - : Der [`MediaStream`](/de/docs/Web/API/MediaStream), der aufgenommen wird. Diese Quellmedien können von einem Stream stammen, der mit [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erstellt wurde, oder aus einem {{HTMLElement("audio")}}, {{HTMLElement("video")}} oder {{HTMLElement("canvas")}}-Element.
- `options` {{optional_inline}}

  - : Ein Wörterbuch-Objekt, das die folgenden Eigenschaften enthalten kann:

    - `mimeType` {{optional_inline}}
      - : Ein MIME-Typ, der das Format für das resultierende Medium festlegt; Sie können das Containerformat angeben (der Browser wählt seine bevorzugten Codecs für Audio und/oder Video), oder Sie können [den Parameter `codecs` verwenden](/de/docs/Web/Media/Guides/Formats/codecs_parameter) und/oder den Parameter `profiles`, um detaillierte Informationen darüber zu geben, welche Codecs verwendet und wie sie konfiguriert werden sollen. Anwendungen können im Voraus prüfen, ob ein `mimeType` vom {{Glossary("user_agent", "User-Agent")}} unterstützt wird, indem sie [`MediaRecorder.isTypeSupported()`](/de/docs/Web/API/MediaRecorder/isTypeSupported_static) aufrufen. Standardmäßig ein leerer String.
    - `audioBitsPerSecond` {{optional_inline}}
      - : Die gewählte Bitrate für die Audiokomponente des Mediums.
    - `videoBitsPerSecond` {{optional_inline}}
      - : Die gewählte Bitrate für die Videokomponente des Mediums.
    - `bitsPerSecond` {{optional_inline}}
      - : Die gewählte Bitrate für die Audio- und Videokomponenten des Mediums. Dies kann anstelle der beiden obigen Eigenschaften angegeben werden. Wenn dies zusammen mit einer oder beiden der obigen Eigenschaften angegeben wird, wird dies für diejenige verwendet, die nicht angegeben ist.
    - `audioBitrateMode` {{optional_inline}}
      - : Der Bitratenmodus, der zum Kodieren des Audios verwendet werden soll. Kann `constant` sein, was bedeutet, dass der Rekorder mit einer konstanten Bitrate kodieren soll, oder `variable`, was bedeutet, dass der Rekorder mit einer variablen Bitrate kodiert, wodurch mehr Platz für komplexe Signale und weniger Platz für weniger komplexe Signale genutzt werden kann. Standardmäßig `variable`.
    - `videoKeyFrameIntervalDuration` {{optional_inline}}
      - : Das nominale Intervall in der Zeit zwischen Key-Frames im kodierten Video-Stream. Der {{Glossary("user_agent", "User-Agent")}} steuert die Key-Frame-Generierung basierend auf dieser Option und der Option `videoKeyFrameIntervalCount`.
    - `videoKeyFrameIntervalCount` {{optional_inline}}
      - : Das Intervall in der Anzahl der Frames zwischen Key-Frames im kodierten Video-Stream. Der {{Glossary("user_agent", "User-Agent")}} steuert die Key-Frame-Generierung unter Berücksichtigung dieser Option sowie der Option `videoKeyFrameIntervalDuration`.

    > [!NOTE]
    > Wenn keine Bits-per-Second-Werte für Video und/oder Audio angegeben sind, beträgt der Standardwert für Video 2,5 Mbit/s, während der Standardwert für Audio je nach Abtastrate und Anzahl der Kanäle adaptiv ist.

    > [!NOTE]
    > Videoauflösung, Bildrate und ähnliche Einstellungen werden als Einschränkungen angegeben, wenn [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) aufgerufen wird, nicht hier in der MediaStream Recording API.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene MIME-Typ vom User-Agent nicht unterstützt wird.

## Beispiele

Dieses Beispiel zeigt, wie ein Medienrekorder für einen angegebenen Stream erstellt wird, dessen Audio-Bitrate auf 128 Kbit/s und dessen Video-Bitrate auf 2,5 Mbit/s festgelegt ist. Die aufgezeichneten Mediendaten werden in einem MP4-Container gespeichert (wenn Sie die Mediendatenstücke sammeln und auf Festplatte speichern, befinden sie sich in einer MP4-Datei).

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
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API Visualisierungs-Demo von [Chris Mills](https://github.com/chrisdavidmills) ([Quellcode auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording Demo](https://simpl.info/mediarecorder/) von [Sam Dutton](https://github.com/samdutton).
- [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia)
