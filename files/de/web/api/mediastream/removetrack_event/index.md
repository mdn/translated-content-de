---
title: "MediaStream: removetrack-Ereignis"
short-title: removetrack
slug: Web/API/MediaStream/removetrack_event
l10n:
  sourceCommit: ded0a8bc0b6622b4a95253e358c6a58a77ad2387
---

{{APIRef("Media Capture and Streams")}}

Das **`removetrack`**-Ereignis wird ausgelöst, wenn ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekt aus einem [`MediaStream`](/de/docs/Web/API/MediaStream) entfernt wurde.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("removetrack", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onremovetrack = (event) => { }
```

## Ereignistyp

Ein [`MediaStreamTrackEvent`](/de/docs/Web/API/MediaStreamTrackEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MediaStreamTrackEvent")}}

## Beispiele

Mit `addEventListener()`:

```js
const stream = new MediaStream();

stream.addEventListener("removetrack", (event) => {
  console.log(`${event.track.kind} track removed`);
});
```

Mit der Event-Handler-Eigenschaft `onremovetrack` (beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onremovetrack` hinzugefügte Event-Listener ersetzt werden):

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
- Dieses Ereignis bei [`AudioTrackList`](/de/docs/Web/API/AudioTrackList)-Objekten: [`removetrack`](/de/docs/Web/API/AudioTrackList/removetrack_event)
- Dieses Ereignis bei [`VideoTrackList`](/de/docs/Web/API/VideoTrackList)-Objekten: [`removetrack`](/de/docs/Web/API/VideoTrackList/removetrack_event)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
