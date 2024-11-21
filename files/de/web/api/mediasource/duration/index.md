---
title: "MediaSource: duration-Eigenschaft"
short-title: duration
slug: Web/API/MediaSource/duration
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`duration`**-Eigenschaft des [`MediaSource`](/de/docs/Web/API/MediaSource)-Interfaces dient zum Abrufen und Festlegen der Dauer des aktuell gezeigten Mediums.

## Wert

Ein double. Ein Wert in Sekunden wird erwartet.

### Ausnahmen

Die folgenden Ausnahmen können auftreten, wenn ein neuer Wert für diese Eigenschaft festgelegt wird.

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, einen negativen oder `NaN`-Wert für die Dauer festzulegen.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`MediaSource.readyState`](/de/docs/Web/API/MediaSource/readyState) nicht gleich
    `open` ist, oder wenn eines oder mehrere der
    [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte in
    [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers) gerade aktualisiert werden
    (d.h. ihre [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating)-Eigenschaft
    `true` ist.)

## Beispiele

Der folgende Ausschnitt basiert auf einem Beispiel von Nick Desaulniers ([das vollständige Demo live ansehen](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html), oder [den Quellcode herunterladen](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) für weitere Untersuchungen). Die Funktion `getMediaSource()`, die hier nicht definiert ist, gibt eine `MediaSource` zurück.

```js
const mediaSource = getMediaSource();

function sourceOpen() {
  console.log(this.readyState); // open
  const sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, (buf) => {
    sourceBuffer.addEventListener("updateend", () => {
      mediaSource.endOfStream();
      mediaSource.duration = 120;
      video.play();
      console.log(mediaSource.readyState); // ended
    });
    sourceBuffer.appendBuffer(buf);
  });
}

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
