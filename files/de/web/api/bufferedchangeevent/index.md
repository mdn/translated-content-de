---
title: BufferedChangeEvent
slug: Web/API/BufferedChangeEvent
l10n:
  sourceCommit: aea2d29336c910940abb1f8e71e02158ac51e7c4
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}{{SeeCompatTable}}

Die **`BufferedChangeEvent`**-Schnittstelle der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API) repräsentiert das Ereignisobjekt für das [`bufferedchange`](/de/docs/Web/API/ManagedSourceBuffer/bufferedchange_event)-Ereignis, das auf einem [`ManagedSourceBuffer`](/de/docs/Web/API/ManagedSourceBuffer) ausgelöst wird. Dieses Ereignis wird immer dann ausgelöst, wenn sich die gepufferten Bereiche des `ManagedSourceBuffer` ändern, zum Beispiel als Ergebnis von Aufrufen von [`appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer), [`remove()`](/de/docs/Web/API/SourceBuffer/remove) oder [`endOfStream()`](/de/docs/Web/API/MediaSource/endOfStream) oder wenn der Benutzeragent den Algorithmus zur Speicherbereinigung ausführt.

{{InheritanceDiagram}}

## Konstruktor

- [`BufferedChangeEvent()`](/de/docs/Web/API/BufferedChangeEvent/BufferedChangeEvent) {{experimental_inline}}
  - : Erstellt und gibt ein neues `BufferedChangeEvent`-Objekt zurück.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, [`Event`](/de/docs/Web/API/Event)._

- [`BufferedChangeEvent.addedRanges`](/de/docs/Web/API/BufferedChangeEvent/addedRanges) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt, das die Zeitbereiche repräsentiert, die dem Puffer des [`ManagedSourceBuffer`](/de/docs/Web/API/ManagedSourceBuffer) hinzugefügt wurden.
- [`BufferedChangeEvent.removedRanges`](/de/docs/Web/API/BufferedChangeEvent/removedRanges) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt, das die Zeitbereiche repräsentiert, die aus dem Puffer des [`ManagedSourceBuffer`](/de/docs/Web/API/ManagedSourceBuffer) entfernt wurden.

## Beispiele

### Behandlung von Änderungen der gepufferten Bereiche

Dieses Beispiel erstellt eine [`ManagedMediaSource`](/de/docs/Web/API/ManagedMediaSource), verbindet sie mit einem {{htmlelement("video")}}-Element, ruft eine fragmentierte MP4-Datei ab und lauscht dem `bufferedchange`-Ereignis. Wenn das Ereignis ausgelöst wird, protokolliert es die hinzugefügten Zeitbereiche.

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
