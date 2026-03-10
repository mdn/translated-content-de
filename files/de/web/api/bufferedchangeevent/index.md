---
title: BufferedChangeEvent
slug: Web/API/BufferedChangeEvent
l10n:
  sourceCommit: 4be29f6917b698805c919c5d290359bc13c62384
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`BufferedChangeEvent`** Interface der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API) repräsentiert das Ereignisobjekt für das [`bufferedchange`](/de/docs/Web/API/ManagedSourceBuffer/bufferedchange_event)-Ereignis, das auf einem [`ManagedSourceBuffer`](/de/docs/Web/API/ManagedSourceBuffer) ausgelöst wird. Dieses Ereignis wird immer dann ausgelöst, wenn sich die gepufferten Bereiche des `ManagedSourceBuffer` ändern, zum Beispiel als Ergebnis von Aufrufen wie [`appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer), [`remove()`](/de/docs/Web/API/SourceBuffer/remove) oder [`endOfStream()`](/de/docs/Web/API/MediaSource/endOfStream), oder wenn der Benutzeragent den Speicherbereinigungsalgorithmus ausführt.

{{InheritanceDiagram}}

## Konstruktor

- [`BufferedChangeEvent()`](/de/docs/Web/API/BufferedChangeEvent/BufferedChangeEvent)
  - : Erstellt und gibt ein neues `BufferedChangeEvent`-Objekt zurück.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Eltern-Interface, [`Event`](/de/docs/Web/API/Event)._

- [`BufferedChangeEvent.addedRanges`](/de/docs/Web/API/BufferedChangeEvent/addedRanges) {{ReadOnlyInline}}
  - : Ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt, das die Zeitbereiche repräsentiert, die dem Puffer des [`ManagedSourceBuffer`](/de/docs/Web/API/ManagedSourceBuffer) hinzugefügt wurden.
- [`BufferedChangeEvent.removedRanges`](/de/docs/Web/API/BufferedChangeEvent/removedRanges) {{ReadOnlyInline}}
  - : Ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt, das die Zeitbereiche repräsentiert, die aus dem Puffer des [`ManagedSourceBuffer`](/de/docs/Web/API/ManagedSourceBuffer) entfernt wurden.

## Beispiele

### Umgang mit Änderungen der gepufferten Bereiche

Dieses Beispiel erstellt eine [`ManagedMediaSource`](/de/docs/Web/API/ManagedMediaSource), fügt sie einem {{htmlelement("video")}}-Element hinzu, holt eine fragmentierte MP4-Datei und lauscht auf das `bufferedchange`-Ereignis. Wenn das Ereignis ausgelöst wird, protokolliert es die hinzugefügten Zeitbereiche.

```js
const videoUrl =
  "https://mdn.github.io/shared-assets/videos/flower-fragmented.mp4";
const mediaType = 'video/mp4; codecs="avc1.64001F, mp4a.40.2"';

if (ManagedMediaSource.isTypeSupported(mediaType)) {
  const video = document.createElement("video");
  const source = new ManagedMediaSource();

  video.controls = true;
  video.disableRemotePlayback = true;
  video.src = URL.createObjectURL(source);
  document.body.appendChild(video);

  source.addEventListener("sourceopen", async () => {
    const sourceBuffer = source.addSourceBuffer(mediaType);

    sourceBuffer.addEventListener("bufferedchange", (event) => {
      for (let i = 0; i < event.addedRanges.length; i++) {
        console.log(
          `Added range: ${event.addedRanges.start(i)} - ${event.addedRanges.end(i)}`,
        );
      }
    });

    const response = await fetch(videoUrl);
    const data = await response.arrayBuffer();
    sourceBuffer.appendBuffer(data);
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ManagedMediaSource`](/de/docs/Web/API/ManagedMediaSource)
- [`ManagedSourceBuffer`](/de/docs/Web/API/ManagedSourceBuffer)
- [`MediaSource`](/de/docs/Web/API/MediaSource)
- [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)
