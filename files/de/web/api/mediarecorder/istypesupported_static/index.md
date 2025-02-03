---
title: "MediaRecorder: statische Methode isTypeSupported()"
short-title: isTypeSupported()
slug: Web/API/MediaRecorder/isTypeSupported_static
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{APIRef("MediaStream Recording")}}

Die statische Methode **`isTypeSupported()`** der [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Schnittstelle gibt einen {{jsxref("Boolean")}} zurück, der `true` ist, wenn der angegebene MIME-Medientyp einer ist, den der Benutzeragent erfolgreich aufzeichnen können sollte.

## Syntax

```js-nolint
MediaRecorder.isTypeSupported(mimeType)
```

### Parameter

- `mimeType`
  - : Der MIME-Medientyp, der überprüft werden soll.

### Rückgabewert

Ein {{jsxref("Boolean")}}, `true`, wenn die [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Implementierung in der Lage ist, [`Blob`](/de/docs/Web/API/Blob)-Objekte für den angegebenen MIME-Typ aufzuzeichnen.
Die Aufzeichnung kann dennoch fehlschlagen, wenn nicht genügend Ressourcen zur Unterstützung des Aufzeichnungs- und Kodierungsprozesses vorhanden sind.
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
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)
- [Codecs in allgemeinen Medientypen](/de/docs/Web/Media/Guides/Formats/codecs_parameter)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
- [`MediaStream`](/de/docs/Web/API/MediaStream)
- [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)
