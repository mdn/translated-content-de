---
title: ManagedMediaSource
slug: Web/API/ManagedMediaSource
l10n:
  sourceCommit: 4be29f6917b698805c919c5d290359bc13c62384
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`ManagedMediaSource`** Interface der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API) ist ein [`MediaSource`](/de/docs/Web/API/MediaSource), das aktiv seinen Speicherinhalt verwaltet. Im Gegensatz zu einer regulären `MediaSource` kann der Benutzeragent Inhalte aus seinen [`ManagedSourceBuffer`](/de/docs/Web/API/ManagedSourceBuffer) Objekten jederzeit entfernen, etwa aufgrund von Speicher- oder Hardwarebeschränkungen. Dies macht es geeignet für energieeffiziente Streaming-Szenarien, bei denen der Benutzeragent mehr Kontrolle über gepufferte Mediendaten benötigt.

Wenn [`addSourceBuffer()`](/de/docs/Web/API/MediaSource/addSourceBuffer) auf einer `ManagedMediaSource` aufgerufen wird, werden [`ManagedSourceBuffer`](/de/docs/Web/API/ManagedSourceBuffer) Objekte (anstelle von [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Objekten) erstellt, die [`bufferedchange`](/de/docs/Web/API/ManagedSourceBuffer/bufferedchange_event) Ereignisse auslösen, um die Anwendung zu benachrichtigen, wenn gepufferte Bereiche vom Benutzeragenten geändert werden.

> [!NOTE]
> Unter Safari wird `ManagedMediaSource` nur aktiviert, wenn die Fernwiedergabe im Media-Element ausdrücklich deaktiviert wird (durch Setzen von [`HTMLMediaElement.disableRemotePlayback`](/de/docs/Web/API/HTMLMediaElement/disableRemotePlayback) auf `true`) oder wenn eine AirPlay-Quellenalternative bereitgestellt wird (zum Beispiel ein HLS {{htmlelement("source")}} Element). Ohne eines dieser beiden wird das [`sourceopen`](/de/docs/Web/API/MediaSource/sourceopen_event) Ereignis nicht ausgelöst.

{{InheritanceDiagram}}

## Konstruktor

- [`ManagedMediaSource()`](/de/docs/Web/API/ManagedMediaSource/ManagedMediaSource)
  - : Erstellt und gibt eine neue `ManagedMediaSource` Objektinstanz ohne zugehörige Quellenpuffer zurück.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner übergeordneten Schnittstelle, [`MediaSource`](/de/docs/Web/API/MediaSource)._

- [`ManagedMediaSource.streaming`](/de/docs/Web/API/ManagedMediaSource/streaming) {{ReadOnlyInline}}
  - : Ein Boolean, der anzeigt, ob das `ManagedMediaSource` Objekt derzeit streamt. Wenn `true`, sollte die Anwendung aktiv Mediendaten abrufen und anhängen. Wenn `false`, kann die Anwendung das Abrufen neuer Daten stoppen.

## Instanz-Methoden

_Erbt Methoden von seiner übergeordneten Schnittstelle, [`MediaSource`](/de/docs/Web/API/MediaSource)._

## Ereignisse

_Erbt auch Ereignisse von seiner übergeordneten Schnittstelle, [`MediaSource`](/de/docs/Web/API/MediaSource)._

- [`startstreaming`](/de/docs/Web/API/ManagedMediaSource/startstreaming_event)
  - : Wird ausgelöst, wenn sich die [`streaming`](/de/docs/Web/API/ManagedMediaSource/streaming) Eigenschaft der `ManagedMediaSource` von `false` auf `true` ändert, was bedeutet, dass die Mediaquelle das Streaming gestartet hat.
- [`endstreaming`](/de/docs/Web/API/ManagedMediaSource/endstreaming_event)
  - : Wird ausgelöst, wenn sich die [`streaming`](/de/docs/Web/API/ManagedMediaSource/streaming) Eigenschaft der `ManagedMediaSource` von `true` auf `false` ändert, was bedeutet, dass die Mediaquelle das Streaming gestoppt hat.

## Beispiele

### Einrichten einer verwalteten Medienquelle

Das folgende Beispiel richtet eine `ManagedMediaSource` ein, verbindet sie mit einem {{htmlelement("video")}} Element und lauscht auf die [`startstreaming`](/de/docs/Web/API/ManagedMediaSource/startstreaming_event) und [`endstreaming`](/de/docs/Web/API/ManagedMediaSource/endstreaming_event) Ereignisse, um zu steuern, wann Mediendaten abgerufen werden. [`bufferedchange`](/de/docs/Web/API/ManagedSourceBuffer/bufferedchange_event) Ereignisse werden unter dem Video protokolliert.

```js
const videoUrl =
  "https://mdn.github.io/shared-assets/videos/flower-fragmented.mp4";
const mediaType = 'video/mp4; codecs="avc1.64001F, mp4a.40.2"';
const video = document.querySelector("video");

if (!window.ManagedMediaSource?.isTypeSupported(mediaType)) {
  console.log("ManagedMediaSource is not supported in this browser.");
} else {
  const source = new ManagedMediaSource();
  video.disableRemotePlayback = true;
  video.src = URL.createObjectURL(source);

  source.addEventListener("sourceopen", () => {
    const sourceBuffer = source.addSourceBuffer(mediaType);

    sourceBuffer.addEventListener("bufferedchange", (event) => {
      for (let i = 0; i < event.addedRanges.length; i++) {
        console.log(
          `Buffered: ${event.addedRanges.start(i).toFixed(2)}s – ${event.addedRanges.end(i).toFixed(2)}s`,
        );
      }
    });

    source.addEventListener("startstreaming", async () => {
      console.log("startstreaming — fetching media data…");
      const response = await fetch(videoUrl);
      const data = await response.arrayBuffer();
      sourceBuffer.appendBuffer(data);
    });

    source.addEventListener("endstreaming", () => {
      console.log("endstreaming — enough data buffered");
    });
  });
}
```

{{EmbedGHLiveSample("dom-examples/media-source-extensions/managed-media-source/", '100%', 470)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaSource`](/de/docs/Web/API/MediaSource)
- [`ManagedSourceBuffer`](/de/docs/Web/API/ManagedSourceBuffer)
- [`BufferedChangeEvent`](/de/docs/Web/API/BufferedChangeEvent)
- [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)
