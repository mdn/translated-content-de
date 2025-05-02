---
title: "MediaStream: addtrack-Event"
short-title: addtrack
slug: Web/API/MediaStream/addtrack_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Media Capture and Streams")}}

Das **`addtrack`**-Event wird ausgelöst, wenn ein neues [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekt zu einem [`MediaStream`](/de/docs/Web/API/MediaStream) hinzugefügt wurde.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("addtrack", (event) => { })

onaddtrack = (event) => { }
```

## Ereignistyp

Ein [`MediaStreamTrackEvent`](/de/docs/Web/API/MediaStreamTrackEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MediaStreamTrackEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, [`Event`](/de/docs/Web/API/Event)._

- [`MediaStreamTrackEvent.track`](/de/docs/Web/API/MediaStreamTrackEvent/track) {{ReadOnlyInline}}
  - : Ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekt, das den Track repräsentiert, der zum Stream hinzugefügt wurde.

## Beispiele

Verwendung von `addEventListener()`:

```js
const stream = new MediaStream();

stream.addEventListener("addtrack", (event) => {
  console.log(`New ${event.track.kind} track added`);
});
```

Verwendung der `onaddtrack` Ereignis-Handler-Eigenschaft:

```js
const stream = new MediaStream();

stream.onaddtrack = (event) => {
  console.log(`New ${event.track.kind} track added`);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)
- Dieses Ereignis auf [`AudioTrackList`](/de/docs/Web/API/AudioTrackList) Zielen: [`addtrack`](/de/docs/Web/API/AudioTrackList/addtrack_event)
- Dieses Ereignis auf [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) Zielen: [`addtrack`](/de/docs/Web/API/VideoTrackList/addtrack_event)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
