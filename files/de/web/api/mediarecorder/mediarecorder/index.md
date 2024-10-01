---
title: "MediaRecorder: MediaRecorder() Konstruktor"
short-title: MediaRecorder()
slug: Web/API/MediaRecorder/MediaRecorder
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("MediaStream Recording")}}

Der **`MediaRecorder()`**-Konstruktor erstellt ein neues [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Objekt, das einen angegebenen [`MediaStream`](/de/docs/Web/API/MediaStream) aufzeichnet.

Das Objekt kann optional so konfiguriert werden, dass es mit einem bestimmten Mediencontainer (Dateityp) aufzeichnet, und es kann zusätzlich den genauen Codec und die Codec-Konfiguration(en) spezifizieren, indem der [Parameter `codecs`](/de/docs/Web/Media/Formats/codecs_parameter) angegeben wird.

## Syntax

```js-nolint
new MediaRecorder(stream)
new MediaRecorder(stream, options)
```

### Parameter

- `stream`
  - : Der zu aufzeichnende [`MediaStream`](/de/docs/Web/API/MediaStream). Diese Quellmedien können aus einem Stream stammen, der mit [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erstellt wurde, oder aus einem {{HTMLElement("audio")}}, {{HTMLElement("video")}} oder {{HTMLElement("canvas")}}-Element.
- `options` {{optional_inline}}

  - : Ein Wörterbuchobjekt, das die folgenden Eigenschaften enthalten kann:

    - `mimeType` {{optional_inline}}
      - : Ein MIME-Typ, der das Format für die resultierenden Medien spezifiziert; Sie können das Containerformat angeben (der Browser wählt seine bevorzugten Codecs für Audio und/oder Video aus), oder Sie können den [Parameter `codecs`](/de/docs/Web/Media/Formats/codecs_parameter) und/oder den `profiles`-Parameter verwenden, um detaillierte Informationen darüber bereitzustellen, welche Codecs verwendet werden sollen und wie sie zu konfigurieren sind. Anwendungen können im Voraus prüfen, ob ein `mimeType` vom {{Glossary("user_agent", "Benutzer-Agenten")}} unterstützt wird, indem [`MediaRecorder.isTypeSupported()`](/de/docs/Web/API/MediaRecorder/isTypeSupported_static) aufgerufen wird. Standardwert ist ein Leerstring.
    - `audioBitsPerSecond` {{optional_inline}}
      - : Die gewählte Bitrate für die Audiokomponente der Medien.
    - `videoBitsPerSecond` {{optional_inline}}
      - : Die gewählte Bitrate für die Videokomponente der Medien.
    - `bitsPerSecond` {{optional_inline}}
      - : Die gewählte Bitrate für die Audio- und Videokomponenten der Medien. Dies kann anstelle der beiden obigen Eigenschaften festgelegt werden. Wenn dies zusammen mit einer der anderen Eigenschaften angegeben wird, wird dies für die nicht angegebene Komponente verwendet.
    - `audioBitrateMode` {{optional_inline}}
      - : Der Bitratenmodus, der zur Kodierung des Audios verwendet werden soll. Kann `constant` sein, was bedeutet, dass der Recorder mit einer konstanten Bitrate kodieren soll, oder `variable`, was bedeutet, dass der Recorder mit einer variablen Bitrate kodieren soll und somit mehr Platz für komplexe Signale und weniger Platz für weniger komplexe Signale verwendet werden kann. Standardwert ist `variable`.
    - `videoKeyFrameIntervalDuration` {{optional_inline}}
      - : Das nominelle Intervall in Zeit zwischen Schlüsselbildern im kodierten Videostream. Der {{Glossary("user_agent", "Benutzer-Agent")}} steuert die Erzeugung von Schlüsselbildern basierend auf dieser Option und der Option `videoKeyFrameIntervalCount`.
    - `videoKeyFrameIntervalCount` {{optional_inline}}
      - : Das Intervall in Anzahl der Bilder zwischen Schlüsselbildern im kodierten Videostream. Der {{Glossary("user_agent", "Benutzer-Agent")}} steuert die Erzeugung von Schlüsselbildern unter Berücksichtigung dieser Option sowie der Option `videoKeyFrameIntervalDuration`.

    > [!NOTE]
    > Wenn keine Bitratenwerte für Video und/oder Audio angegeben sind, beträgt der Standardwert für Video 2,5 Mbps, während der Standardwert für Audio adaptiv ist, abhängig von der Abtastrate und der Anzahl der Kanäle.

    > [!NOTE]
    > Videoauflösung, Bildrate und ähnliche Einstellungen werden als Einschränkungen beim Aufruf von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) angegeben, nicht hier in der MediaStream Recording API.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene MIME-Typ vom Benutzer-Agenten nicht unterstützt wird.

## Beispiele

Dieses Beispiel zeigt, wie ein Media-Recorder für einen angegebenen Stream erstellt wird, dessen Audio-Bitrate auf 128 Kbit/s und dessen Video-Bitrate auf 2,5 Mbit/s festgelegt ist. Die aufgezeichneten Mediadaten werden in einem MP4-Wrapper gespeichert (wenn Sie also die Mediadaten sammeln und auf der Festplatte speichern, werden sie in einer MP4-Datei sein).

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
- [Web Diktiergerät](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API Visualisierungsdemo, von [Chris Mills](https://github.com/chrisdavidmills) ([Quellcode auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Recording Demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia)
