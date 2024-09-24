---
title: "MediaRecorder: MediaRecorder()-Konstruktor"
short-title: MediaRecorder()
slug: Web/API/MediaRecorder/MediaRecorder
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("MediaStream Recording")}}

Der **`MediaRecorder()`**-Konstruktor erstellt ein neues {{domxref("MediaRecorder")}}-Objekt, das einen angegebenen {{domxref("MediaStream")}} aufzeichnen wird.

Das Objekt kann optional so konfiguriert werden, dass es unter Verwendung eines bestimmten Mediencontainers (Dateityp) aufzeichnet und zusätzlich den genauen Codec und die Codec-Konfiguration(en) durch Angabe des [„codecs“-Parameters](/de/docs/Web/Media/Formats/codecs_parameter) spezifiziert.

## Syntax

```js-nolint
new MediaRecorder(stream)
new MediaRecorder(stream, options)
```

### Parameter

- `stream`
  - : Der {{domxref("MediaStream")}}, der aufgezeichnet wird. Diese Medienquelle kann von einem mit {{domxref("MediaDevices.getUserMedia", "navigator.mediaDevices.getUserMedia()")}} erstellten Stream oder von einem {{HTMLElement("audio")}}, {{HTMLElement("video")}} oder {{HTMLElement("canvas")}}-Element stammen.
- `options` {{optional_inline}}

  - : Ein Wörterbuchobjekt, das die folgenden Eigenschaften enthalten kann:

    - `mimeType` {{optional_inline}}
      - : Ein MIME-Typ, der das Format für die resultierenden Medien festlegt; Sie können das Containerformat angeben (der Browser wählt seine bevorzugten Codecs für Audio und/oder Video), oder Sie können [den `codecs`-Parameter](/de/docs/Web/Media/Formats/codecs_parameter) und/oder den `profiles`-Parameter verwenden, um detaillierte Informationen darüber bereitzustellen, welche Codecs verwendet werden und wie sie zu konfigurieren sind. Anwendungen können im Voraus überprüfen, ob ein `mimeType` vom {{Glossary("user agent")}} unterstützt wird, indem sie {{domxref("MediaRecorder.isTypeSupported_static", "MediaRecorder.isTypeSupported()")}} aufrufen. Standardmäßig ein leerer String.
    - `audioBitsPerSecond` {{optional_inline}}
      - : Der gewählte Bitrate für die Audio-Komponente der Medien.
    - `videoBitsPerSecond` {{optional_inline}}
      - : Der gewählte Bitrate für die Video-Komponente der Medien.
    - `bitsPerSecond` {{optional_inline}}
      - : Der gewählte Bitrate für die Audio- und Video-Komponenten der Medien. Dies kann anstelle der beiden obigen Eigenschaften angegeben werden. Wenn dies zusammen mit einer der anderen oben angegebenen Eigenschaften angegeben wird, wird es für diejenige verwendet, die nicht spezifiziert ist.
    - `audioBitrateMode` {{optional_inline}}
      - : Der Bitratenmodus, der zum Encodieren des Audios verwendet werden soll. Kann `constant` sein, was bedeutet, dass der Recorder mit einer konstanten Bitrate encodieren sollte, oder `variable`, was bedeutet, dass der Recorder mit einer variablen Bitrate encodieren sollte und somit mehr Platz für komplexe Signale und weniger Platz für weniger komplexe Signale ermöglicht. Standardmäßig `variable`.
    - `videoKeyFrameIntervalDuration` {{optional_inline}}
      - : Das nominelle Intervall in der Zeit zwischen Schlüsselbildern im encodierten Videostream. Der {{glossary("user agent")}} steuert die Erzeugung von Schlüsselbildern basierend auf dieser Option und der Option `videoKeyFrameIntervalCount`.
    - `videoKeyFrameIntervalCount` {{optional_inline}}
      - : Das Intervall in der Anzahl von Frames zwischen Schlüsselbildern im encodierten Videostream. Der {{glossary("user agent")}} steuert die Erzeugung von Schlüsselbildern unter Berücksichtigung dieser Option sowie der Option `videoKeyFrameIntervalDuration`.

    > [!NOTE]
    > Wenn keine Bitrate pro Sekunde für Video und/oder Audio angegeben wird, beträgt die Standardrate für Video 2,5 Mbit/s, während die Audiostandardrate adaptiv ist, abhängig von der Abtastrate und der Anzahl der Kanäle.

    > [!NOTE]
    > Videoauflösung, Bildrate und ähnliche Einstellungen werden als Einschränkungen angegeben, wenn {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} aufgerufen wird, nicht hier in der MediaStream Recording API.

### Ausnahmen

- `NotSupportedError` {{domxref("DOMException")}}
  - : Ausgelöst, wenn der angegebene MIME-Typ vom Benutzeragenten nicht unterstützt wird.

## Beispiele

Dieses Beispiel zeigt, wie ein Media-Recorder für einen angegebenen Stream erstellt wird, dessen Audio-Bitrate auf 128 Kbit/s und dessen Video-Bitrate auf 2,5 Mbit/s festgelegt ist. Die aufzeichneten Mediendaten werden in einem MP4-Wrapper gespeichert (wenn Sie die Medienabschnitte sammeln und auf die Festplatte speichern, werden sie in einer MP4-Datei sein).

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
- [Web Diktiergerät](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API Visualisierungs-Demo von [Chris Mills](https://github.com/chrisdavidmills) ([Quelle auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [simpl.info MediaStream Aufnahme-Demo](https://simpl.info/mediarecorder/), von [Sam Dutton](https://github.com/samdutton).
- {{domxref("MediaDevices.getUserMedia")}}
