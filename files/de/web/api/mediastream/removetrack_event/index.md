---
title: "MediaStream: removetrack-Ereignis"
short-title: removetrack
slug: Web/API/MediaStream/removetrack_event
l10n:
  sourceCommit: ac67e6f05d337e52e39f02a978b8c00bc43d583b
---

{{APIRef("Media Capture and Streams")}}

Das **`removetrack`**-Ereignis wird ausgelöst, wenn ein neues {{domxref("MediaStreamTrack")}}-Objekt aus einem {{domxref("MediaStream")}} entfernt wurde.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("removetrack", (event) => {});

onremovetrack = (event) => {};
```

## Ereignistyp

Ein {{domxref("MediaStreamTrackEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("MediaStreamTrackEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seiner übergeordneten Schnittstelle, {{domxref("Event")}}._

- {{domxref("MediaStreamTrackEvent.track")}} {{ReadOnlyInline}}
  - : Ein {{domxref("MediaStreamTrack")}}-Objekt, das den aus dem Stream entfernten Track darstellt.

## Beispiele

Verwendung von `addEventListener()`:

```js
const stream = new MediaStream();

stream.addEventListener("removetrack", (event) => {
  console.log(`${event.track.kind} track removed`);
});
```

Verwendung der Eigenschaft `onremovetrack`:

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
- Dieses Ereignis bei [`AudioTrackList`](/de/docs/Web/API/AudioTrackList) Ziel: [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event)
- Dieses Ereignis bei [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) Ziel: [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
