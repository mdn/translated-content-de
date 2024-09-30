---
title: "MediaRecorder: isTypeSupported() statische Methode"
short-title: isTypeSupported()
slug: Web/API/MediaRecorder/isTypeSupported_static
l10n:
  sourceCommit: f0e465f756df374b51e36668f5cc2559c26b6767
---

{{APIRef("MediaStream Recording")}}

Die **`isTypeSupported()`** statische Methode des [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Interfaces gibt ein {{jsxref("Boolean")}} zurück, das `true` ist, wenn der angegebene MIME-Mediatyp einer ist, den der Benutzeragent erfolgreich aufzeichnen können sollte.

## Syntax

```js-nolint
MediaRecorder.isTypeSupported(mimeType)
```

### Parameter

- `mimeType`
  - : Der zu überprüfende MIME-Mediatyp.

### Rückgabewert

Ein {{jsxref("Boolean")}}, `true`, wenn die [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Implementierung in der Lage ist, [`Blob`](/de/docs/Web/API/Blob)-Objekte für den angegebenen MIME-Typ aufzuzeichnen.
Die Aufnahme kann dennoch fehlschlagen, wenn nicht genügend Ressourcen vorhanden sind, um den Aufnahme- und Kodierungsprozess zu unterstützen.
Wenn der Wert `false` ist, ist der Benutzeragent nicht in der Lage, das angegebene Format aufzuzeichnen.

## Beispiele

```js
const types = [
  "video/webm",
  "audio/webm",
  "video/webm;codecs=vp8",
  "video/webm;codecs=daala",
  "video/webm;codecs=h264",
  "audio/webm;codecs=opus",
  "video/mp4",
];

for (const type of types) {
  console.log(
    `Is ${type} supported? ${
      MediaRecorder.isTypeSupported(type) ? "Maybe!" : "Nope :("
    }`,
  );
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
- [Verwendung der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Formats)
- [Codecs in allgemeinen Medientypen](/de/docs/Web/Media/Formats/codecs_parameter)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
- [`MediaStream`](/de/docs/Web/API/MediaStream)
- [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)
