---
title: "MediaStream: removetrack Ereignis"
short-title: removetrack
slug: Web/API/MediaStream/removetrack_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Media Capture and Streams")}}

Das **`removetrack`** Ereignis wird ausgelöst, wenn ein neues [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Objekt aus einem [`MediaStream`](/de/docs/Web/API/MediaStream) entfernt wurde.

Dieses Ereignis kann nicht abgebrochen werden und löst kein Bubbling aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("removetrack", (event) => { })

onremovetrack = (event) => { }
```

## Ereignistyp

Ein [`MediaStreamTrackEvent`](/de/docs/Web/API/MediaStreamTrackEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MediaStreamTrackEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seiner übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event)._

- [`MediaStreamTrackEvent.track`](/de/docs/Web/API/MediaStreamTrackEvent/track) {{ReadOnlyInline}}
  - : Ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Objekt, das die Spur darstellt, die aus dem Stream entfernt wurde.

## Beispiele

Verwendung von `addEventListener()`:

```js
const stream = new MediaStream();

stream.addEventListener("removetrack", (event) => {
  console.log(`${event.track.kind} track removed`);
});
```

Verwendung der `onremovetrack` Ereignishandlereigenschaft:

```js
const stream = new MediaStream();

stream.onremovetrack = (event) => {
  console.log(`${event.track.kind} track removed`);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`addtrack`](/de/docs/Web/API/MediaStream/addtrack_event)
- Dieses Ereignis auf [`AudioTrackList`](/de/docs/Web/API/AudioTrackList) Ziele: [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event)
- Dieses Ereignis auf [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) Ziele: [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
