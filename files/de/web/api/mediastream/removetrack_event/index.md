---
title: "MediaStream: removetrack Ereignis"
short-title: removetrack
slug: Web/API/MediaStream/removetrack_event
l10n:
  sourceCommit: ac67e6f05d337e52e39f02a978b8c00bc43d583b
---

{{APIRef("Media Capture and Streams")}}

Das **`removetrack`** Ereignis wird ausgelöst, wenn ein neues [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Objekt aus einem [`MediaStream`](/de/docs/Web/API/MediaStream) entfernt wurde.

Dieses Ereignis ist nicht abbrichbar und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlereigenschaft.

```js
addEventListener("removetrack", (event) => {});

onremovetrack = (event) => {};
```

## Ereignistyp

Ein [`MediaStreamTrackEvent`](/de/docs/Web/API/MediaStreamTrackEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MediaStreamTrackEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, [`Event`](/de/docs/Web/API/Event)._

- [`MediaStreamTrackEvent.track`](/de/docs/Web/API/MediaStreamTrackEvent/track) {{ReadOnlyInline}}
  - : Ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Objekt, das den Track darstellt, der aus dem Stream entfernt wurde.

## Beispiele

Verwendung von `addEventListener()`:

```js
const stream = new MediaStream();

stream.addEventListener("removetrack", (event) => {
  console.log(`${event.track.kind} track removed`);
});
```

Verwendung der `onremovetrack` Ereignisbehandlereigenschaft:

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
- Dieses Ereignis bei [`AudioTrackList`](/de/docs/Web/API/AudioTrackList) zielt auf: [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event)
- Dieses Ereignis bei [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) zielt auf: [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
