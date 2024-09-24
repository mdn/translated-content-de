---
title: "MediaRecorder: isTypeSupported() statische Methode"
short-title: isTypeSupported()
slug: Web/API/MediaRecorder/isTypeSupported_static
l10n:
  sourceCommit: f0e465f756df374b51e36668f5cc2559c26b6767
---

{{APIRef("MediaStream Recording")}}

Die **`isTypeSupported()`** statische Methode des {{domxref("MediaRecorder")}}-Interfaces gibt ein {{jsxref("Boolean")}} zurück, das `true` ist, wenn der angegebene MIME-Medientyp einer ist, den der Benutzeragent erfolgreich aufnehmen können sollte.

## Syntax

```js-nolint
MediaRecorder.isTypeSupported(mimeType)
```

### Parameter

- `mimeType`
  - : Der zu überprüfende MIME-Medientyp.

### Rückgabewert

Ein {{jsxref("Boolean")}}, `true` wenn die {{domxref("MediaRecorder")}}-Implementierung in der Lage ist, {{domxref("Blob")}}-Objekte für den angegebenen MIME-Typ aufzuzeichnen.
Die Aufnahme kann dennoch fehlschlagen, wenn nicht genügend Ressourcen zur Unterstützung des Aufnahme- und Kodierungsprozesses vorhanden sind.
Wenn der Wert `false` ist, kann der Benutzeragent das angegebene Format nicht aufzeichnen.

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
- [Codecs in gemeinsamen Medientypen](/de/docs/Web/Media/Formats/codecs_parameter)
- {{domxref("MediaStreamTrack")}}
- {{domxref("MediaStream")}}
- {{domxref("MediaCapabilities")}}
