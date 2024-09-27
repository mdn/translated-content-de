---
title: "MediaSource: duration-Eigenschaft"
short-title: duration
slug: Web/API/MediaSource/duration
l10n:
  sourceCommit: 1573959d78591b4079500af13019f901faaaca02
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`duration`**-Eigenschaft des [`MediaSource`](/de/docs/Web/API/MediaSource)-Interfaces erhält und setzt die Dauer des aktuell präsentierten Mediums.

## Wert

Ein `double`. Ein Wert in Sekunden wird erwartet.

### Ausnahmen

Die folgenden Ausnahmen können auftreten, wenn ein neuer Wert für diese Eigenschaft festgelegt wird.

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, einen negativen oder `NaN`-Wert für die Dauer festzulegen.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`MediaSource.readyState`](/de/docs/Web/API/MediaSource/readyState) nicht gleich `open` ist oder eines oder mehrere der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekte in [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers) aktualisiert werden (d.h., deren [`SourceBuffer.updating`](/de/docs/Web/API/SourceBuffer/updating)-Eigenschaft `true` ist).

## Beispiele

Das folgende Snippet basiert auf einem einfachen Beispiel von Nick Desaulniers ([sehen Sie sich die vollständige Demo live an](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html) oder [laden Sie den Quellcode herunter](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) für weitere Untersuchungen). Die Funktion `getMediaSource()`, die hier nicht definiert ist, gibt eine `MediaSource` zurück.

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
