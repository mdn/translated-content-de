---
title: "MediaSource: duration-Eigenschaft"
short-title: duration
slug: Web/API/MediaSource/duration
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Media Source Extensions")}}

Die **`duration`**-Eigenschaft des {{domxref("MediaSource")}}-Interfaces ruft die Dauer des aktuell präsentierten Mediums ab und setzt sie.

## Wert

Ein Double. Ein Wert in Sekunden wird erwartet.

### Ausnahmen

Die folgenden Ausnahmen können auftreten, wenn ein neuer Wert für diese Eigenschaft gesetzt wird.

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Diese Ausnahme wird ausgelöst, wenn versucht wird, einen Dauerwert zu setzen, der negativ oder `NaN` ist.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Diese Ausnahme wird ausgelöst, wenn {{domxref("MediaSource.readyState")}} nicht `open` ist oder wenn eines oder mehrere der {{domxref("SourceBuffer")}}-Objekte in {{domxref("MediaSource.sourceBuffers")}} aktualisiert werden (d. h. ihre {{domxref("SourceBuffer.updating")}}-Eigenschaft auf `true` steht).

## Beispiele

Das folgende Beispiel basiert auf einem einfachen Beispiel von Nick Desaulniers ([sehen Sie die vollständige Demo live](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html) oder [laden Sie den Quellcode herunter](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) für weitere Untersuchungen). Die Funktion `getMediaSource()`, die hier nicht definiert ist, gibt eine `MediaSource` zurück.

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

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}
