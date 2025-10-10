---
title: "SourceBuffer: appendBuffer()-Methode"
short-title: appendBuffer()
slug: Web/API/SourceBuffer/appendBuffer
l10n:
  sourceCommit: 141e307e3564907df8b6750e55ea609f73bb928f
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`appendBuffer()`**-Methode des
[`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Interfaces fügt Mediasegmentdaten aus einem
{{jsxref("ArrayBuffer")}}, einem {{jsxref("TypedArray")}} oder einem {{jsxref("DataView")}}-Objekt
dem `SourceBuffer` hinzu.

## Syntax

```js-nolint
appendBuffer(source)
```

### Parameter

- `source`
  - : Entweder ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}-Objekt,
    das die Mediasegmentdaten enthält, die Sie dem `SourceBuffer` hinzufügen möchten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Das `SourceBuffer`-Objekt hat das Attribut `updating` auf `true`. Sie müssen warten, bis alle vorherigen Anfüge-, Aktualisierungs- oder Entfernungsvorgänge abgeschlossen sind (angezeigt durch das `updateend`-Ereignis), bevor Sie `appendBuffer()` erneut aufrufen.
    - Das `SourceBuffer` wurde aus dem `sourceBuffers`-Attribut der übergeordneten Mediaquelle entfernt.
    - Das `error`-Attribut des `HTMLMediaElement` ist nicht `null`.
- [`QuotaExceededError`](/de/docs/Web/API/QuotaExceededError)
  - : Der Puffer ist voll, und es können keine weiteren Daten angefügt werden. Dies kann auftreten, wenn das `SourceBuffer` eine durch den Browser definierte Grenze für die gepufferte Datenmenge erreicht hat.

Zusätzlich können Fehler auftreten, nachdem das `updatestart`-Ereignis ausgelöst wurde und die `appendBuffer()`-Methode zurückgegeben hat: beispielsweise, weil der Puffer Bytes enthielt, die falsch formatiert waren. In diesem Fall wird das `error`-Ereignis auf dieser `SourceBuffer`-Instanz ausgelöst.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Videodaten zu einem Video-Element für die Wiedergabe hinzugefügt werden. Der `MediaSource` liefert die Videodaten, und das `SourceBuffer` fügt diese Daten hinzu. Das Beispiel ruft Videosegmentdaten ab, fügt sie dem `SourceBuffer` hinzu und beendet den Stream, wenn es fertig ist.

```js
const mediaSource = new MediaSource();
const video = document.querySelector("video");
video.src = URL.createObjectURL(mediaSource);

mediaSource.addEventListener("sourceopen", async () => {
  const sourceBuffer = mediaSource.addSourceBuffer(
    'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
  );

  const buffer = await fetch("/my-video-segment.mp4").then((res) =>
    res.arrayBuffer(),
  );
  sourceBuffer.appendBuffer(buffer);
  sourceBuffer.addEventListener("updateend", () => {
    if (mediaSource.readyState === "open") {
      mediaSource.endOfStream();
    }
  });
});
```

### Fehlerbehandlung

Dieses Beispiel zeigt, wie Fehler behandelt werden können, die beim Aufruf von `appendBuffer()` auftreten können.

Es ruft `appendBuffer()` innerhalb eines [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Blocks auf, um die Ausnahmen abzufangen und zu behandeln, die die Methode synchron wirft. Außerdem wird das `error`-Ereignis überwacht, um Fehler zu behandeln, die auftreten, nachdem `appendBuffer()` zurückgegeben hat, während der Puffer asynchron aktualisiert wird.

```js
sourceBuffer.addEventListener("error", (e) => {
  console.error("Error appending buffer:", e);
  // Handle the error appropriately, e.g., show a message to the user,
  // try a different source, or stop playback.
});

try {
  sourceBuffer.appendBuffer(data);
} catch (e) {
  if (e.name === "InvalidStateError") {
    console.error(
      "InvalidStateError: The SourceBuffer is in an invalid state.",
    );
  } else if (e.name === "QuotaExceededError") {
    console.error("QuotaExceededError: The buffer is full.");
  } else {
    console.error("An unexpected error occurred:", e);
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaSource`](/de/docs/Web/API/MediaSource)
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
