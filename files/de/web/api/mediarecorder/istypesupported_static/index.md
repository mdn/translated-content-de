---
title: "MediaRecorder: isTypeSupported() statische Methode"
short-title: isTypeSupported()
slug: Web/API/MediaRecorder/isTypeSupported_static
l10n:
  sourceCommit: bd9c6885357f0c42e3445cac6a47d04bc35c89e6
---

{{APIRef("MediaStream Recording")}}

Die **`isTypeSupported()`** statische Methode des [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Interfaces gibt ein {{jsxref("Boolean")}} zurück, das `true` ist, wenn der angegebene MIME-Mediatyp einer ist, den der User-Agent erfolgreich aufnehmen können sollte.

## Syntax

```js-nolint
MediaRecorder.isTypeSupported(mimeType)
```

### Parameter

- `mimeType`
  - : Der zu überprüfende MIME-Mediatyp.

### Rückgabewert

Ein {{jsxref("Boolean")}}, `true` wenn die [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Implementierung in der Lage ist, [`Blob`](/de/docs/Web/API/Blob)-Objekte für den angegebenen MIME-Typ aufzuzeichnen.
Die Aufnahme kann dennoch fehlschlagen, wenn nicht genügend Ressourcen für die Unterstützung des Aufnahme- und Kodierungsprozesses vorhanden sind.
Wenn der Wert `false` ist, ist der User-Agent nicht in der Lage, das angegebene Format aufzuzeichnen.

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
  "video/mp4;codecs=avc1.64003E,mp4a.40.2",
  "video/mp4;codecs=avc1.64003E,opus",
  "video/mp4;codecs=avc3.64003E,mp4a.40.2",
  "video/mp4;codecs=avc3.64003E,opus",
  "video/mp4;codecs=hvc1.1.6.L186.B0,mp4a.40.2",
  "video/mp4;codecs=hvc1.1.6.L186.B0,opus",
  "video/mp4;codecs=hev1.1.6.L186.B0,mp4a.40.2",
  "video/mp4;codecs=hev1.1.6.L186.B0,opus",
  "video/mp4;codecs=av01.0.19M.08,mp4a.40.2",
  "video/mp4;codecs=av01.0.19M.08,opus",
];

for (const type of types) {
  console.log(
    `Is ${type} supported? ${
      MediaRecorder.isTypeSupported(type) ? "Yes!" : "Nope :("
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
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)
- [Codecs in gängigen Medientypen](/de/docs/Web/Media/Guides/Formats/codecs_parameter)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
- [`MediaStream`](/de/docs/Web/API/MediaStream)
- [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)
